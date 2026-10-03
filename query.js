/* Contract-query engine — JavaScript port of the doc_queries.py semantics
   (research_notes/doc-pile-analytics-20261002, 61/61 tests).
   Same discipline: filters are explicit, results carry evidence (snippets),
   and no result is a verdict — every hit needs human review. */

const CLAUSE_DETECTORS = {
  payment: {
    label: "Payment terms",
    pattern: /\$[\d,]+(\.\d{2})?|\bpayment\b|\binvoice\b|\bpayable\b|\bfee\b|\bfees\b/i
  },
  obligation: {
    label: "Obligations",
    pattern: /\bshall\b|\bmust\b|\bagrees? to\b|\bis required to\b/i
  },
  termination: {
    label: "Termination",
    pattern: /\bterminat\w*\b/i
  },
  confidentiality: {
    label: "Confidentiality",
    pattern: /\bconfidential\b|\bnon-disclosure\b|\bNDA\b/i
  }
};

function sentences(text) {
  // Split on sentence boundaries; keep it simple and deterministic.
  return text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
}

function snippetFor(sentence, keyword) {
  if (!keyword) return sentence;
  const i = sentence.toLowerCase().indexOf(keyword.toLowerCase());
  if (i < 0) return sentence;
  const start = Math.max(0, i - 40);
  const end = Math.min(sentence.length, i + keyword.length + 80);
  return (start > 0 ? "…" : "") + sentence.slice(start, end) + (end < sentence.length ? "…" : "");
}

/* Run a query over the corpus.
   filters: { text?: string, type?: string, clause?: 'payment'|'obligation'|'termination'|'confidentiality' }
   Returns: [{ docId, title, type, date, clause, snippet }] */
function runQuery(filters) {
  const results = [];
  const kw = (filters.text || "").trim().toLowerCase();
  const detector = filters.clause ? CLAUSE_DETECTORS[filters.clause] : null;

  for (const doc of CORPUS) {
    if (filters.type && filters.type !== "all" && doc.type !== filters.type) continue;
    for (const s of sentences(doc.text)) {
      if (kw && !s.toLowerCase().includes(kw)) continue;
      if (detector && !detector.pattern.test(s)) continue;
      if (!kw && !detector) continue; // empty query matches nothing, by design
      results.push({
        docId: doc.id,
        title: doc.title,
        type: doc.type,
        date: doc.date,
        clause: detector ? detector.label : "Keyword",
        snippet: snippetFor(s, kw || undefined)
      });
    }
  }
  return results;
}

function countByType(results) {
  const counts = {};
  for (const r of results) counts[r.type] = (counts[r.type] || 0) + 1;
  return counts;
}
