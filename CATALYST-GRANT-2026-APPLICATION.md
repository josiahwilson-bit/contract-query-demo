# Catalyst Grant 2026 Application — Josiah Wilson

**Name:** Josiah Wilson
**Location:** San Diego, California, USA
**Applicant type:** individual
**Contact email:** cidsize@gmail.com

---
## 1. THE PROBLEM
Researchers, small teams, and institutions routinely sign documents they have
not truly read: grant agreements, data-use agreements, vendor contracts,
collaboration MOUs. The cost of a missed clause is concrete — unfavorable IP
terms, unexpected data-sharing obligations, auto-renewals, silent liability
shifts. What do people do today? They skim, or they paste the document into a
chatbot. Chat-based AI review produces fluent summaries with no provenance:
you cannot see which sentence supports which claim, you cannot audit the
reasoning, and you cannot tell when the model is guessing. For an
institution, that is not a tool — it is a liability. The problem recurs with
every agreement, and the downside is measured in money, rights, and risk.

## 2. YOUR WORKFLOW
The proposal is a verifiable agentic workflow for document review. Step by
step, from trigger to output:
1. **Trigger:** a reviewer uploads a document and states the review goal
   (e.g. "surface payment terms, obligations, and termination clauses").
2. **Plan (autonomous):** the agent maps the goal to a review plan — which
   clause detectors to run, in which order.
3. **Execute (autonomous):** deterministic clause detectors scan the document
   sentence by sentence. Deterministic means the same input always produces
   the same output — reproducible by anyone.
4. **Evidence:** every finding is presented with its exact source sentence,
   the document it came from, and its clause type. No claim without evidence.
5. **Human review gate (person):** a human approves, overrides, or escalates
   each finding. Nothing is finalized by the agent alone.
6. **Record:** the decision, the evidence, and the reviewer are written to an
   append-only audit trail.
It runs as a standalone web workflow today; the audience is researchers and
small teams who already review agreements by hand or by chatbot.

## 3. TRUST, AUDIT AND GOVERNANCE
- **Provenance:** every finding links to the exact sentence and document it
  came from. A user sees what the agent did and why by reading the evidence.
- **Determinism:** the detection core is rule-based, not generative — its
  behavior can be audited, tested, and reproduced independently.
- **Uncertainty:** when no detector fires, the agent reports "no finding"
  rather than inventing one. Borderline matches are flagged for human review
  instead of being asserted.
- **Accountability:** the human reviewer is the decision-maker. The audit
  trail records who approved what, on which evidence, and when. If the agent
  is wrong, the evidence shows exactly where.

## 4. TEAM
Josiah Wilson, individual applicant, San Diego, California. Background:
inventory and stock management, hospital environmental-services leadership,
and U.S. military service (veteran). Self-taught builder — designed and
shipped the working prototype, the query engine, and the governance model
behind this proposal. Domain expertise comes from years of operational work
where a missed detail in a handoff or an obligation has a real cost; the
workflow discipline in this proposal was learned in practice, not theory.

## 5. WHERE YOU ARE TODAY
Working prototype, live and open-source: demo at
https://josiahwilson-bit.github.io/contract-query-demo/ and code at
https://github.com/josiahwilson-bit/contract-query-demo (MIT). It includes a
six-document sample corpus, four clause detectors (payment terms,
obligations, termination, confidentiality), evidence-carrying results, and a
tested query engine — $0 static stack, no backend, no tracking. Stage:
prototype; no external users yet. Tested by the builder; the next step is
evaluation against a labeled set (CUAD contract-review samples) with
published precision/recall.

## 6. ALTERNATIVES AND COMPETITORS
- **General chatbots for document review:** fluent, fast, and untrustworthy —
  no provenance, hallucinates clauses, no audit trail.
- **LexNLP (github.com/LexPredict/lexpredict-lexnlp):** the serious
  open-source legal-NLP toolkit — but a toolkit, not a governed workflow; no
  human review gates, no audit trail out of the box.
- **Enterprise contract-lifecycle platforms:** expensive, closed-source,
  built for corporate legal departments — not for researchers and small teams.
- **Doing nothing:** the status quo. Nobody reads the documents.
Difference: determinism plus evidence plus human gates, open-source, $0 to
run — a workflow researchers can verify, not a black box they must trust.

## 7. WHERE THIS GOES
The vision: an agentic reviewer a researcher can point at any agreement and
trust — upload, planned review, evidence, human sign-off, audit record. The
grant builds the trustworthy core: the agentic orchestration layer, the
human-review interface, and the audit trail, evaluated on public benchmarks.
Longer term, it plugs into research workflows where agreements pile up:
grant agreements, data-use agreements, publisher contracts. If commercial:
free for individuals and small teams; institutions pay for private hosting
and audit exports. Pricing thinking is early — the grant funds the verifiable
core first, in the open.

## 8. FIT WITH DIGITAL SCIENCE
This sits squarely in research integrity and verification, with a foot in
evidence synthesis: the audience is researchers and the institutions that
need their workflows to be auditable. Digital Science's portfolio —
Figshare, Symplectic, Dimensions, Writefull — serves the same research
lifecycle; a verifiable review agent complements tools researchers already
use rather than replacing them. We want to work with Digital Science on this
because the 2026 theme names the exact problem we have been building for:
agentic workflows you can trust, with provenance, governance, and
accountability built in rather than bolted on.

## 9. BUDGET
Up to £25,000 requested, all work in the open (MIT) on $0 infrastructure.
Indicative allocation across four workstreams: (a) evaluation — a labeled
test set from public CUAD contract-review samples with published
precision/recall per detector; (b) the agentic layer — review planner,
human-review interface, append-only audit trail; (c) corpus expansion —
real public-domain agreements with source and license labels; (d)
documentation and release hardening so others can run, test, and extend it.
