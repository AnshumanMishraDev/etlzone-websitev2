export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  hero: string;
  description: string;
  eyebrow: string;
  imageUrl: string;
  overviewTitle: string;
  overviewDesc: string;
  includes: { title: string; desc: string }[];
  processTitle: string;
  process: { title: string; desc: string }[];
  related: { title: string; desc: string; slug: string }[];
  faqs: { q: string; a: string }[];
  pathGrid?: { eyebrow: string; cards: { title: string; desc: string }[] };
  riskCallout?: { icon: string; text: string };
}

export const services: Service[] = [
  {
    slug: "sap-data-migration",
    title: "SAP Data Migration",
    subtitle: "Delivered as a Subcontract Workstream",
    hero: "End-to-end SAP data migration execution — object scoping, extraction, transformation, load, and validation — delivered under your delivery methodology and your client relationship.",
    description: "End-to-end SAP data migration execution for System Integrators — object scoping, extraction, load, and validation, delivered as a subcontract workstream.",
    eyebrow: "SAP Data Migration",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What SAP Data Migration Involves",
    overviewDesc: "SAP data migration is the structured movement of master and transactional data from a source SAP or legacy system into a target environment — without breaking downstream processes.",
    includes: [
      { title: "Object Scoping", desc: "Identifying which data objects — vendor master, material master, open items, and more — are in scope for migration." },
      { title: "Extraction & Transformation", desc: "Pulling source data and transforming it into the structure the target SAP environment requires." },
      { title: "Load Execution", desc: "Executing load cycles in the correct sequence to preserve data integrity and dependencies." },
      { title: "Post-Load Validation", desc: "Confirming migrated data matches source records before sign-off." },
    ],
    processTitle: "How We Execute a SAP Data Migration Workstream",
    process: [
      { title: "Scoping & Assessment", desc: "We review source data volume, object complexity, and dependencies against your program timeline." },
      { title: "Mapping & Rules Design", desc: "Source-to-target field mapping and transformation rules are documented and signed off before build." },
      { title: "Build & Mock Loads", desc: "Migration objects are built and tested through iterative mock load cycles." },
      { title: "Validation & Sign-Off", desc: "Reconciliation against source confirms accuracy before the object is marked migration-ready." },
    ],
    related: [
      { title: "SAP S/4HANA Migration", desc: "Version-specific migration execution for ECC to S/4HANA programs.", slug: "sap-s4hana-migration" },
      { title: "Data Mapping", desc: "Source-to-target field mapping for your migration objects.", slug: "data-mapping" },
      { title: "Migration Testing & Cutover", desc: "Mock loads, rehearsal, and go-live execution support.", slug: "migration-testing-cutover" },
    ],
    faqs: [
      { q: "What is SAP data migration?", a: "SAP data migration is the structured process of moving master and transactional data from a source SAP or legacy system into a target SAP environment. It includes object scoping, extraction, transformation, load execution, and post-load validation to ensure the data is complete and accurate in the new system." },
      { q: "How long does a typical SAP data migration project take?", a: "Timelines vary based on object count, data volume, and system complexity. A single-object workstream can run a few weeks, while a full end-to-end migration across multiple objects typically spans several months when planned alongside a broader SAP implementation program." },
      { q: "Can Etlzone work as a subcontractor under our SI brand?", a: "Yes. Etlzone delivers exclusively as a subcontract and staffing partner to System Integrators. We work under NDA by default, follow your existing delivery methodology and reporting cadence, and do not present our own brand to your end client." },
      { q: "What data objects are typically included in an SAP migration?", a: "Common objects include vendor master, customer master, material master, open items, fixed assets, and other core master and transactional data." },
      { q: "Does Etlzone handle both ECC and S/4HANA migrations?", a: "Yes. This covers general SAP data migration across ECC and other SAP versions. For S/4HANA-specific conversion work, Etlzone offers a dedicated S/4HANA migration service." },
      { q: "How do you validate that migrated data is accurate?", a: "We run post-load validation and source-to-target reconciliation on every object in scope, comparing record counts and field-level values against the original source before an object is marked migration-ready." },
    ],
  },
  {
    slug: "sap-s4hana-migration",
    title: "SAP S/4HANA Migration",
    subtitle: "Built Around What Actually Changes",
    hero: "S/4HANA isn't a version upgrade — it's a data model change. Business Partner conversion, the Universal Journal, and the Simplification List all affect how data has to move, not just where it moves to. We handle the S/4HANA-specific conversion work SIs need a specialist for.",
    description: "ECC to S/4HANA migration execution — Simplification List impact analysis, LTMC/Migration Cockpit workstreams, and data model conversion delivered as a subcontract workstream for SIs.",
    eyebrow: "SAP S/4HANA Migration",
    imageUrl: "https://images.unsplash.com/photo-1758873268998-2f77c2d38862?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What Makes S/4HANA Migration Different",
    overviewDesc: "S/4HANA's simplified data model changes how core objects are structured. Getting migration right here means understanding the conversion, not just moving records.",
    includes: [
      { title: "Simplification List Impact Analysis", desc: "Identifying which of your custom objects, transactions, and data structures are affected by SAP's Simplification List before conversion begins." },
      { title: "Business Partner Conversion", desc: "Converting customer and vendor master records into the unified Business Partner model S/4HANA requires." },
      { title: "Universal Journal Alignment", desc: "Ensuring financial data maps correctly into the Universal Journal (ACDOCA), where FI and CO data now converge." },
      { title: "LTMC / Migration Cockpit Execution", desc: "Running object-based loads through LTMC and Migration Cockpit for S/4HANA-native, template-driven migration." },
    ],
    processTitle: "How We Run an S/4HANA Migration Workstream",
    process: [
      { title: "Readiness & Impact Assessment", desc: "We run Simplification List and data model impact analysis against your current ECC landscape before any conversion work starts." },
      { title: "Conversion Design", desc: "Business Partner, Universal Journal, and object-specific conversion rules are designed and signed off with your functional team." },
      { title: "LTMC/Migration Cockpit Build", desc: "Migration objects are built and tested through S/4HANA-native tooling, with iterative mock conversions." },
      { title: "Conversion Validation", desc: "Converted data is reconciled against source to confirm the S/4HANA data model holds correctly before cutover." },
    ],
    related: [
      { title: "Data Cleaning", desc: "Remediating source data before Simplification List conversion.", slug: "data-cleaning" },
      { title: "Data Validation & Reconciliation", desc: "Confirming converted data holds under the new data model.", slug: "data-validation-reconciliation" },
      { title: "Migration Testing & Cutover", desc: "Rehearsing the conversion sequence before go-live.", slug: "migration-testing-cutover" },
    ],
    faqs: [
      { q: "What is the difference between SAP data migration and S/4HANA migration?", a: "General SAP data migration covers moving data between any SAP or legacy systems. S/4HANA migration specifically deals with the data model changes required by S/4HANA, such as Business Partner conversion, Universal Journal alignment, and Simplification List remediation." },
      { q: "What is the SAP Simplification List and why does it matter?", a: "The Simplification List is SAP's documentation of every functional and technical change introduced in S/4HANA compared to ECC. It matters because custom objects, transactions, and data structures affected by these changes need to be identified and remediated before conversion." },
      { q: "Should we choose a brownfield or greenfield S/4HANA migration path?", a: "Brownfield (system conversion) carries forward existing ECC data and configuration. Greenfield involves a fresh S/4HANA build with data migrated in. The right choice depends on data quality, customization complexity, and program timeline." },
      { q: "What is Business Partner conversion in S/4HANA?", a: "S/4HANA requires customer and vendor master records to be converted into a unified Business Partner model, replacing the separate customer and vendor master objects used in ECC." },
      { q: "Does Etlzone use LTMC or SAP BODS for S/4HANA migrations?", a: "We typically use LTMC (Migration Cockpit) for S/4HANA-native, template-driven object migration. SAP BODS remains relevant for complex transformation logic or non-standard objects." },
    ],
    pathGrid: {
      eyebrow: "Migration Path",
      cards: [
        { title: "Brownfield (System Conversion)", desc: "Existing ECC data and configuration carry forward, converted in place. Our focus is Simplification List remediation, Business Partner conversion, and Universal Journal alignment on existing data." },
        { title: "Greenfield / Selective Data Transition", desc: "A fresh S/4HANA build with data migrated in, either fully or selectively by object. Our focus shifts to object scoping, mapping, and load into a clean target structure." },
      ],
    },
  },
  {
    slug: "data-cleaning",
    title: "Data Cleaning",
    subtitle: "Before It Becomes a Migration Problem",
    hero: "Dirty source data is the single biggest cause of migration slippage. We cleanse, standardize, and de-duplicate SAP master and transactional data before it ever reaches a load cycle — so your migration timeline isn't spent firefighting bad records.",
    description: "SAP data cleansing and standardization before migration load — duplicate resolution, format correction, and data quality remediation delivered as a subcontract workstream.",
    eyebrow: "Data Cleaning",
    imageUrl: "https://images.unsplash.com/photo-1754039984985-ef607d80113a?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What SAP Data Cleaning Involves",
    overviewDesc: "Data cleaning is the remediation of source data quality issues — duplicates, inconsistent formats, missing mandatory fields, orphaned records — before extraction and load begin.",
    includes: [
      { title: "Duplicate Resolution", desc: "Identifying and merging duplicate master records — vendors, customers, materials — that would otherwise load as separate objects." },
      { title: "Format Standardization", desc: "Correcting inconsistent date formats, unit-of-measure entries, and field-length mismatches across source systems." },
      { title: "Mandatory Field Completion", desc: "Flagging and resolving missing values in fields the target SAP environment requires to accept the load." },
      { title: "Orphan & Obsolete Record Cleanup", desc: "Removing records with no valid downstream reference, so migrated data doesn't carry legacy clutter forward." },
    ],
    processTitle: "How We Run a Data Cleaning Workstream",
    process: [
      { title: "Data Profiling", desc: "We run source data through profiling checks to surface duplicates, format inconsistencies, and completeness gaps before touching a single record." },
      { title: "Rule Definition & Sign-Off", desc: "Cleansing rules — merge logic, formatting standards, exclusion criteria — are documented and approved with your functional team before execution." },
      { title: "Cleansing Execution", desc: "Rules are applied against the full data set, with an audit trail of every correction for traceability." },
      { title: "Quality Sign-Off", desc: "Cleansed data is re-profiled against agreed quality thresholds before it's handed off to mapping and load." },
    ],
    related: [
      { title: "SAP Data Migration", desc: "End-to-end migration execution once source data is clean.", slug: "sap-data-migration" },
      { title: "Data Mapping", desc: "Source-to-target field mapping for cleansed data objects.", slug: "data-mapping" },
      { title: "Data Validation & Reconciliation", desc: "Confirming data integrity holds after load.", slug: "data-validation-reconciliation" },
    ],
    faqs: [
      { q: "What is SAP data cleaning?", a: "SAP data cleaning is the process of identifying and fixing source data quality issues — such as duplicate records, inconsistent formats, missing mandatory fields, and orphaned records — before that data is extracted and loaded into a target SAP environment." },
      { q: "Why is data cleansing important before an SAP migration?", a: "Dirty source data is one of the most common causes of SAP migration delays. Issues that aren't caught before load tend to surface during mock loads or, worse, during cutover, where they are far more expensive to fix." },
      { q: "What kind of data quality issues does Etlzone typically find?", a: "Common issues include duplicate master records for vendors, customers, or materials, inconsistent date and unit-of-measure formats across source systems, missing values in fields the target SAP system requires, and obsolete or orphaned records." },
      { q: "Can data cleaning be delivered as a standalone workstream?", a: "Yes. Etlzone can run data cleansing as a standalone engagement ahead of a broader SAP migration program, or as the first phase of a full end-to-end migration workstream." },
      { q: "How does Etlzone track changes made during data cleansing?", a: "Cleansing rules are documented and signed off before execution. Every correction is applied with an audit trail, so changes remain traceable for compliance and sign-off purposes." },
    ],
    riskCallout: {
      icon: "⚠",
      text: "Dirty data is the #1 cause of migration timeline slippage — not scope, not tooling, not resourcing. Catching data quality issues at the cleansing stage is far cheaper than catching them during a failed mock load, or worse, during cutover weekend.",
    },
  },
  {
    slug: "data-mapping",
    title: "Data Mapping",
    subtitle: "Documented Before a Single Record Loads",
    hero: "Mapping is where most migration rework gets born or avoided. We build field-level source-to-target mapping and transformation logic for every object in scope, signed off before build begins — so your team isn't reverse-engineering assumptions mid-load.",
    description: "Source-to-target SAP data mapping across master and transactional objects — field-level mapping, transformation logic, and mapping documentation delivered as a subcontract workstream.",
    eyebrow: "Data Mapping",
    imageUrl: "https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What SAP Data Mapping Involves",
    overviewDesc: "Data mapping defines exactly how each source field maps to its target SAP field — including transformation rules, value conversions, and default logic — before extraction and load ever start.",
    includes: [
      { title: "Field-Level Mapping", desc: "Every source field mapped to its corresponding target field, object by object, with no gaps left to interpretation during build." },
      { title: "Transformation Rules", desc: "Value conversions, code mapping, and business rules documented for every field that doesn't move as a direct one-to-one copy." },
      { title: "Default & Derivation Logic", desc: "Rules for fields that need to be derived or defaulted where source data doesn't carry a direct equivalent." },
      { title: "Mapping Documentation", desc: "A signed-off mapping document your build team can work from directly — no ambiguity, no assumptions." },
    ],
    processTitle: "How We Run a Data Mapping Workstream",
    process: [
      { title: "Object & Field Inventory", desc: "We catalog every field in scope across source and target systems before drafting a single mapping line." },
      { title: "Draft Mapping & Rule Design", desc: "Field-to-field mappings and transformation rules are drafted, including edge cases and exception handling." },
      { title: "Functional Review & Sign-Off", desc: "Mapping is reviewed with your functional team against business rules before it's locked for build." },
      { title: "Handoff to Build", desc: "Signed-off mapping is handed to the load/build team as the single source of truth for extraction logic." },
    ],
    related: [
      { title: "Data Cleaning", desc: "Cleansing source data before it enters the mapping process.", slug: "data-cleaning" },
      { title: "SAP Data Migration", desc: "End-to-end execution once mapping is signed off.", slug: "sap-data-migration" },
      { title: "Data Validation & Reconciliation", desc: "Confirming mapped data loaded exactly as designed.", slug: "data-validation-reconciliation" },
    ],
    faqs: [
      { q: "What is SAP data mapping?", a: "SAP data mapping is the process of defining exactly how each source data field corresponds to its target SAP field, including transformation rules, value conversions, and default logic." },
      { q: "Why does data mapping matter for an SAP migration?", a: "Mapping is where most migration rework gets born or avoided. If field-level mapping isn't documented and signed off before build, the load team ends up making assumptions mid-build." },
      { q: "What does a mapping deliverable look like?", a: "A completed mapping deliverable is a signed-off document showing every source field mapped to its target field, object by object, along with transformation rules and value conversions." },
      { q: "Can data mapping be delivered separately from the migration build?", a: "Yes. Etlzone can deliver data mapping as a standalone workstream or as the design phase of a full end-to-end migration engagement." },
      { q: "Who signs off on the mapping before build starts?", a: "Mapping is reviewed and signed off with your functional team against agreed business rules before it's locked for build." },
    ],
  },
  {
    slug: "data-validation-reconciliation",
    title: "Data Validation & Reconciliation",
    subtitle: 'So "It Loaded" Actually Means "It\'s Correct"',
    hero: "A successful load isn't the same as an accurate one. We run structured post-load validation and source-to-target reconciliation on every object in scope, so sign-off is based on evidence — not assumption.",
    description: "Post-load SAP data validation and source-to-target reconciliation — record counts, field-level checks, and sign-off reporting delivered as a subcontract workstream for SIs.",
    eyebrow: "Data Validation & Reconciliation",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What Data Validation & Reconciliation Involves",
    overviewDesc: "Validation confirms migrated data is complete, accurate, and usable — checked record-by-record and field-by-field against the original source, with every discrepancy tracked to resolution.",
    includes: [
      { title: "Record Count Reconciliation", desc: "Confirming every source record has a corresponding target record — no silent drops during load." },
      { title: "Field-Level Value Checks", desc: "Comparing critical field values between source and target to catch transformation errors that record counts alone won't reveal." },
      { title: "Discrepancy Tracking", desc: "Every mismatch logged, categorized, and routed for correction — with a clear audit trail from issue to resolution." },
      { title: "Sign-Off Reporting", desc: "A reconciliation report your team can present to stakeholders as evidence the object is migration-complete." },
    ],
    processTitle: "How We Run a Validation & Reconciliation Workstream",
    process: [
      { title: "Define Validation Criteria", desc: "We agree which fields and thresholds matter most per object, based on business impact — not a blanket checklist." },
      { title: "Run Reconciliation Checks", desc: "Source and target data sets are compared systematically, at both record-count and field-value level." },
      { title: "Log & Route Discrepancies", desc: "Every mismatch is logged with root-cause notes and routed back to mapping, cleansing, or load as needed." },
      { title: "Report & Sign-Off", desc: "A final reconciliation report confirms the object meets agreed accuracy thresholds and is ready for cutover." },
    ],
    related: [
      { title: "SAP Data Migration", desc: "End-to-end execution that this workstream validates.", slug: "sap-data-migration" },
      { title: "Data Mapping", desc: "The mapping logic reconciliation checks are measured against.", slug: "data-mapping" },
      { title: "Migration Testing & Cutover", desc: "Where validated data gets rehearsed for go-live.", slug: "migration-testing-cutover" },
    ],
    faqs: [
      { q: "What is SAP data validation and reconciliation?", a: "SAP data validation and reconciliation is the process of confirming that data migrated into a target SAP system is complete and accurate, by comparing it against the original source data." },
      { q: "Is a successful data load the same as an accurate one?", a: "No. A load can complete without errors and still contain data that doesn't match the source — for example, due to a transformation rule that produced an unexpected value." },
      { q: "What does source-to-target reconciliation actually check?", a: "Reconciliation checks operate at two levels: record count reconciliation and field-level value checks." },
      { q: "What happens when a discrepancy is found during reconciliation?", a: "Every discrepancy is logged with root-cause notes and routed back to the relevant stage for correction." },
      { q: "What proof do we get that a migrated object is validated?", a: "Etlzone delivers a reconciliation report confirming the object meets agreed accuracy thresholds." },
    ],
  },
  {
    slug: "migration-testing-cutover",
    title: "Migration Testing & Cutover",
    subtitle: "Rehearsed Until There Are No Surprises Left",
    hero: "Cutover is where migration programs are won or lost on the calendar. We run structured mock load cycles and full cutover rehearsals, then execute the go-live sequence itself — so the weekend your client goes live isn't the first time the full sequence has ever run.",
    description: "Mock load cycles, cutover rehearsal, and go-live execution support for SAP migration programs — delivered as a subcontract workstream for System Integrators.",
    eyebrow: "Migration Testing & Cutover",
    imageUrl: "https://images.unsplash.com/photo-1614642237208-a17ea4a90221?fm=jpg&q=75&w=1200&auto=format&fit=crop",
    overviewTitle: "What Migration Testing & Cutover Involves",
    overviewDesc: "Cutover is the rehearsed, timed sequence of steps that takes a system from source to live target — tested repeatedly beforehand so the actual go-live runs to a known script, not a live experiment.",
    includes: [
      { title: "Mock Load Cycles", desc: "Full or partial load rehearsals run well before go-live to surface sequencing issues, timing risks, and object dependencies early." },
      { title: "Cutover Runbook Development", desc: "A step-by-step, timed runbook covering every task, owner, and dependency in the go-live sequence." },
      { title: "Dress Rehearsal Execution", desc: "A full timed rehearsal of the cutover weekend, measured against the runbook to confirm the window holds." },
      { title: "Go-Live Execution Support", desc: "Hands-on execution support during the actual cutover window, with rollback criteria agreed in advance." },
    ],
    processTitle: "How We Run a Testing & Cutover Workstream",
    process: [
      { title: "Runbook & Timing Design", desc: "We build the cutover runbook with your team — every task sequenced, timed, and assigned an owner before rehearsal begins." },
      { title: "Mock Load Iterations", desc: "We run repeated mock loads against the runbook, tightening timing and resolving sequencing issues with each pass." },
      { title: "Full Dress Rehearsal", desc: "A complete timed run of the cutover weekend end-to-end, with go/no-go criteria validated against real timing data." },
      { title: "Go-Live Execution", desc: "We execute alongside your team through the live cutover window, tracking against the rehearsed runbook step by step." },
    ],
    related: [
      { title: "Data Validation & Reconciliation", desc: "Confirming data accuracy before it enters a mock load cycle.", slug: "data-validation-reconciliation" },
      { title: "SAP Data Migration", desc: "The end-to-end execution this workstream rehearses and delivers live.", slug: "sap-data-migration" },
      { title: "SAP S/4HANA Migration", desc: "Version-specific migration execution ahead of cutover.", slug: "sap-s4hana-migration" },
    ],
    faqs: [
      { q: "What is SAP migration cutover?", a: "SAP migration cutover is the rehearsed, timed sequence of steps that takes a system from source to live target during go-live." },
      { q: "How many mock loads should run before a real cutover?", a: "There's no fixed number — it depends on object complexity. Most programs run mock loads iteratively until timing stabilizes, followed by one full dress rehearsal." },
      { q: "What is a cutover runbook?", a: "A cutover runbook is a step-by-step, timed document covering every task, owner, and dependency in the go-live sequence." },
      { q: "What causes cutover timelines to slip?", a: "Common causes include object dependencies not identified until a mock load exposed them, data quality issues not caught during cleansing, and untested runbooks." },
      { q: "Does Etlzone provide execution support during the actual cutover window?", a: "Yes. Beyond runbook design and mock load rehearsal, we provide hands-on execution support during the live cutover window itself." },
    ],
  },
];
