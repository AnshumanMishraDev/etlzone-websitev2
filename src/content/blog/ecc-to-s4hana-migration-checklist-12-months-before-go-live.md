---
slug: ecc-to-s4hana-migration-checklist-12-months-before-go-live
title: "ECC to S/4HANA Migration Checklist: 12 Months Before Go-Live"
excerpt: "A practical, month-by-month checklist for what your team should be doing 12 months before your S/4HANA go-live date."
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=75&w=1200&auto=format&fit=crop"
date: "2026-07-20"
readTime: "6 min read"
---

Twelve months sounds like a lot of runway. In SAP migration terms, it's tight but workable, provided the right things happen in the right order. Most migration delays don't come from any single dramatic failure; they come from steps skipped early that turn into blockers later.

This checklist lays out what a well-sequenced 12-month runway actually looks like, broken into phases. If you're still deciding whether 12 months is realistic for your organization, our piece on the [ECC 2027 deadline](/blog/sap-ecc-2027-deadline-what-happens-if-you-miss-it) walks through the timeline math.

## Months 12–10: Assessment and scoping

**Data landscape assessment.** Before anything else, map what data actually exists across your ECC system: master data, transactional data, custom objects, and how much of it is duplicate, outdated, or simply unused. Migrations that skip this step tend to migrate problems along with the data.

**Tool selection.** Decide which combination of BODS, LTMC, IDocs, BAPI, LSMW, or Syniti ADMM fits your data volume, complexity, and timeline. There's no single right answer here; it depends on your specific landscape.

**Scope definition.** Get explicit about what's in scope for the data migration versus what's a separate functional or process redesign workstream. Blurring these two tends to cause budget and timeline surprises later.

## Months 10–7: Cleansing and preparation

**Master data cleansing.** This is the step most teams underestimate. Duplicate vendor records, incomplete customer master data, and inconsistent material data all cause reconciliation headaches later if they're not addressed now, while there's still time to fix them without pressure.

**Build reconciliation rules.** Define upfront what "successful migration" means for each data object. Field-level reconciliation rules set now save significant time during validation later.

**Sandbox test load.** Run an initial test load into a sandbox environment. This is where you find the surprises: unexpected data volumes, unmapped fields, and objects that behave differently than documented.

## Months 7–4: Build and iterate

**Migration object build.** Build out the migration programs and mappings for each data object, informed by what the sandbox test load revealed.

**Iterative test cycles.** Multiple test load cycles, each followed by reconciliation checks, are what actually catch issues before go-live. One test cycle is not enough for anything beyond a very small, simple landscape.

**Cross-functional validation.** Bring in the finance, sales, and operations teams who will actually use the migrated data to validate it looks and behaves as expected. Technical validation alone misses business-logic issues.

## Months 4–2: Rehearsal

**Mock cutover.** Run a full rehearsal of the cutover weekend, timed and sequenced exactly as the real one will be. This is where teams find out if their cutover window is realistic or optimistic.

**Reconciliation sign-off.** Get formal sign-off from business stakeholders on reconciliation results before locking the cutover plan. This is also where informal issues tend to surface if they haven't already.

**Contingency planning.** Document what happens if a specific object fails to reconcile during the live cutover. Having this decided in advance, rather than improvised live, is one of the more consistent differences between smooth and rocky cutover weekends.

## Months 2–0: Final cutover and hypercare

**Final cutover execution.** Execute the migration following the rehearsed sequence, with reconciliation checks built in at each stage rather than only at the end.

**Hypercare period.** Keep a dedicated team monitoring data issues for at least two to four weeks post go-live. Most residual issues surface once real business volume hits the new system, not during testing.

## Frequently Asked Questions

### Is 12 months enough time for an S/4HANA data migration?

For most mid-to-large landscapes, yes, provided cleansing and reconciliation planning start in the first two to three months rather than being pushed later.

### What's the most commonly skipped step in this checklist?

Master data cleansing. It's time-consuming and doesn't feel urgent early on, which is exactly why it gets deprioritized until reconciliation problems force attention onto it later.

### How many test load cycles should we plan for?

Most well-sequenced migrations run at least two to three test cycles, each followed by reconciliation checks, before the mock cutover.

### Do we need a mock cutover if our test loads went well?

Yes. Test loads validate the data. Mock cutovers validate the sequencing, timing, and team coordination, which are different risks entirely.

## Bringing in specialist support

Every phase in this checklist can be run in-house, by your SI's team, or by a specialist migration partner brought in for specific workstreams. You can get in touch with experts at [Etlzone](/contact) if you're weighing whether cleansing, reconciliation, or cutover execution would benefit from dedicated specialist bandwidth alongside your existing team.
