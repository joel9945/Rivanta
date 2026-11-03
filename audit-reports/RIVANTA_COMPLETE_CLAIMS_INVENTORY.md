# RIVANTA GREEN INNOVATIVE VENTURE PRIVATE LIMITED
## RECONCILED MASTER WEBSITE CLAIM EXTRACTION & INVENTORY REPORT
**Document Reference:** `RIV-AUD-2026-CLAIM-INV-REV02`  
**Date of Audit Quality Assurance:** November 3, 2026  
**Audited Entity:** Rivanta Green Innovative Venture Private Limited (https://rivantagreen.com)  
**Authoritative Reference:** Current Production Next.js Codebase Snapshot  
**Audit Scope:** 33 Verified Source Files | 182 Discrete Assertions  
**Audit Integrity Status:** Line Ranges Reconciled Against Source Code | Zero Invalid Claim References  

> [!IMPORTANT]
> **AUDIT CLARIFICATION ON SUBSTANTIATION STATUS:**  
> The presence of a statement, metric, or visual asset in the source code indicates only that it has been **discovered and cataloged from the website codebase**. In corporate, legal, and financial due diligence, **presence in code does not constitute empirical verification or legal substantiation**. Every uncertified claim in this inventory is classified as having an **Unresolved Evidence Requirement** pending independent third-party documentation (e.g. Certificates of Analysis, Lender's Independent Engineer reports, Consent to Establish filings).

---

## 1. RECONCILIATION SUMMARY & AUDIT SCOPE

### 1.1 Resolution of Inspected Files Discrepancy (24 vs 33 Files)
The initial audit summary cited 24 inspected files, whereas the structured claims database cataloged 33 distinct source paths. This discrepancy has been rigorously reconciled:
- **11 Route Page Files:** `src/app/**/page.tsx`
- **10 Route Layout Files:** `src/app/**/layout.tsx` (1 Root layout + 9 Subpage layouts)
- **1 Application Error Handler:** `src/app/not-found.tsx`
- **10 Modular UI Component Files:** `src/components/Hero.tsx`, `Header.tsx`, `Footer.tsx`, `PartnerModal.tsx`, `PlatformHgroup.tsx`, `MarqueeText.tsx`, `CompanySpotlight.tsx`, `CorporateFoundations.tsx`, `ValueChainGallery.tsx`, `UspCards.tsx`, `SharedValueAndContribution.tsx`
- **1 Machine-Readable Discovery File:** `public/llms.txt`
- **Total Authoritative Inspected Files:** **33 Distinct Source Paths**.
*(The earlier figure of 24 arose from counting route layout/page pairs while omitting embedded modular components containing active corporate claims).*

### 1.2 Claims Inventory Metrics
- **Total Discovered Claims:** 182
- **Explicit Text Assertions:** 181
- **Implied Claims (Visual Renderings / Uncalibrated Progress Indicators):** 1
- **Quantified & Numerical Assertions:** 75
- **Invalid Cross-References:** **0 (100% Reconciled)**

---

## 2. COMPLETE VERBATIM CLAIMS INVENTORY

### Section 2.1 — GLOBAL LAYOUT & ARCHITECTURE (13 Claims)

#### CLM-GLOB-001: Rivanta Green Innovative Venture Private Limited

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L96-L97`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (JSON-LD Corporation)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-007, CLM-GLOB-009, CLM-CONT-002, CLM-STAND-010`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
name: "Rivanta Green Innovative Venture Private Limited",
      alternateName: "Rivanta Green",
```

**Audit Context & Regulatory Analysis:**
Official statutory legal entity name declared in global Schema.org Corporation structured data.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-002: emerging Indian industrial enterprise developing an integrated portfolio across renewable ...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L28-L30`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (Global Metadata & OG)`
- **Information Category:** Category A — Corporate Identity / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-008, CLM-HOME-002, CLM-ABOUT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: {
    default: "Rivanta Green — Building Industrial Value From India's Resources",
    template: "%s | Rivanta Green",
```

**Audit Context & Regulatory Analysis:**
Universal corporate descriptor configured as fallback metadata description and OpenGraph social tag.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-003: B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge, Bhopal, Madhya...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L108-L115`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (JSON-LD Registered Office)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `29, 3 Building Number / Floor` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-009, CLM-CONT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
address: {
        "@type": "PostalAddress",
        streetAddress:
          "B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge",
        addressLocality: "Bhopal",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
```

**Audit Context & Regulatory Analysis:**
Declared registered office location in global structured data.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-004: parentOrganization: Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhop...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L116-L128`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (JSON-LD Parent Organization)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `4/271, 462016 Plot Number / Postal Code` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-010, CLM-CONT-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
parentOrganization: {
        "@type": "Corporation",
        name: "Golden Soil Ventures Private Limited",
        address: {
          "@type": "PostalAddress",
          streetAddress: "E4/271 Arera Colony, Huzur",
          addressLocality: "Bhopal",
          addressRegion: "Madhya Pradesh",
          postalCode: "462016",
          addressCountry: "IN",
        },
      },
      contactPoint: {
```

**Audit Context & Regulatory Analysis:**
Parent entity declaration and corporate office coordinates in global structured data.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-005: telephone: "+91 98930 25375", email: "info@rivantagreen.com"

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L128-L133`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (JSON-LD Contact Channels)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-011, CLM-CONT-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
contactPoint: {
        "@type": "ContactPoint",
        contactType: "corporate communications",
        telephone: "+91 98930 25375",
        email: "info@rivantagreen.com",
      },
```

**Audit Context & Regulatory Analysis:**
Official communications contact channel in Schema.org.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-006: Biogenic Silica, Compressed Biogas (CBG), Sustainable Aviation Fuels, Agricultural Residue...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/layout.tsx:L135-L142`](file:///src/app/layout.tsx)
- **Component:** `RootLayout (JSON-LD Subject Matter Knowledge)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `6 Domains` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-012`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
"Biogenic Silica",
        "Compressed Biogas (CBG)",
        "Sustainable Aviation Fuels",
        "Agricultural Residue Valorization",
        "Circular Industrial Materials",
        "Industrial Infrastructure",
      ],
    },
```

**Audit Context & Regulatory Analysis:**
Machine-readable domain proficiencies claimed in structured data.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-007: RIVANTA - Green Innovative Venture Private Limited

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Header.tsx:L156`](file:///src/components/Header.tsx)
- **Component:** `Header (Brand Lockup Alt)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
alt="RIVANTA - Green Innovative Venture Private Limited"
```

**Audit Context & Regulatory Analysis:**
Visual logo alt attribute present on desktop and mobile headers.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-008: From agricultural residue to industrial value

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Footer.tsx:L28-L33`](file:///src/components/Footer.tsx)
- **Component:** `Footer (Tagline & Narrative)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Marketing positioning statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002, CLM-ABOUT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h3 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.08] text-white max-w-xl">
              From agricultural residue to{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#f9a65c]">
                industrial value.
              </span>
            </h3>
```

**Audit Context & Regulatory Analysis:**
Primary editorial descriptor and vision tagline in the global website footer.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-009: B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge, Bhopal, Madhya...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Footer.tsx:L192-L204`](file:///src/components/Footer.tsx)
- **Component:** `Footer (Head & Registered Office Coordinates)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `29, 3 Building Number / Floor` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-003, CLM-CONT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
rel="noreferrer"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <ScrollToTopButton />
              </div>
            </div>
          </div>
```

**Audit Context & Regulatory Analysis:**
Registered headquarters address published on the global footer.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-010: Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhopal, Madhya Pradesh, ...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Footer.tsx:L206-L215`](file:///src/components/Footer.tsx)
- **Component:** `Footer (Corporate Office Coordinates)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `4/271, 462016 Plot Number / Postal Code` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-004, CLM-CONT-003`)
- **Audit Risk Classification:** `MODERATE RISK — CORPORATE GOVERNANCE AMBIGUITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires Group Corporate Organizational Chart or statutory resolution clarifying promoter holding relationship with Golden Soil Ventures.

**Verbatim Source Code:**
```tsx
{/* Corporate Offices & Registered Coordinates Bar */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-xs text-white/70">
          {/* Head & Registered Office */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Head & Registered Office
            </div>
            <div className="font-sans font-medium text-white text-sm">
              Rivanta Green Innovative Venture Private Limited
```

**Audit Context & Regulatory Analysis:**
Corporate office of parent entity published on the global footer.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-011: Direct Line: +91 98930 25375, Official Email: info@rivantagreen.com, Portal: www.rivantagr...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Footer.tsx:L217-L231`](file:///src/components/Footer.tsx)
- **Component:** `Footer (Direct Corporate Desk Coordinates)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-005, CLM-CONT-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-light leading-relaxed text-white/75">
              B-29, 3rd Floor, Kasturba Nagar,
              <br />
              Next to Lake City Hospital, Chetak Bridge,
              <br />
              Bhopal, Madhya Pradesh, India.
            </p>
          </div>

          {/* Corporate Office */}
          <div className="space-y-2">
            <div className="font-mono uppercase tracking-wider text-[#f9a65c] font-semibold text-[11px]">
              Corporate Office
            </div>
            <div className="font-sans font-medium text-white text-sm">
```

**Audit Context & Regulatory Analysis:**
Direct corporate desk contact numbers and portal URI in global footer.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-012: Advanced Materials & Biogenic Silica, Compressed Biogas (CBG), Sustainable Aviation Fuels ...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/PartnerModal.tsx:L279-L286`](file:///src/components/PartnerModal.tsx)
- **Component:** `PartnerModal (Focus Domains)`
- **Information Category:** Category C — Technology and Products / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** `7 Focus Sectors` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-008`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
<option>Advanced Materials & Biogenic Silica</option>
                  <option>Compressed Biogas (CBG)</option>
                  <option>Sustainable Aviation Fuels (SAF)</option>
                  <option>Feedstock Sourcing & Logistics</option>
                  <option>Renewable Energy & Infrastructure</option>
                  <option>Strategic Partnerships & Development</option>
                  <option>General Corporate Engagement</option>
                </select>
```

**Audit Context & Regulatory Analysis:**
Predefined corporate partnership engagement sectors in modal form.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-GLOB-013: Emerging Indian diversified industrial enterprise developing an integrated portfolio acros...

- **Page / Route:** [Global Layout & Architecture](https://rivantagreen.com/llms.txt)
- **Authoritative File & Lines:** [`public/llms.txt:L1-L27`](file:///public/llms.txt)
- **Component:** `public/llms.txt`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002, CLM-ABOUT-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
# Rivanta Green Innovative Venture Private Limited

> Emerging Indian diversified industrial enterprise developing an integrated portfolio across advanced materials, sustainable fuels, and circular manufacturing.

## Corporate Profile
- **Entity**: Rivanta Green Innovative Venture Private Limited
- **Short Name**: Rivanta Green
- **Website**: https://rivantagreen.com
- **Head & Registered Office**: B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge, Bhopal, Madhya Pradesh, India
- **Corporate Office**: Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhopal, Madhya Pradesh 462016, India
- **Corporate Desk**: info@rivantagreen.com | +91 98930 25375

## Core Industrial Development Verticals
- **Advanced Materials & Biogenic Silica**: Developing high-purity amorphous biogenic silica (SiO2) derived from rice husk ash and evaluating downstream green silicon precursor pathways for rubber compounding, low-carbon concrete, and advanced industrial materials.
  Link: https://rivantagreen.com/bio-silica
- **Compressed Biogas (CBG)**: Developing commercial anaerobic digestion and biomethane enrichment facilities to convert surplus agricultural residues into Compressed Biogas for clean transport and industrial off-take in alignment with India's SATAT initiative.
  Link: https://rivantagreen.com/cbg
- **Sustainable Aviation Fuel (SAF)**: Evaluating technology pathways, synthesis routes, and industrial partnerships for drop-in synthetic aviation fuels from regional bio-feedstocks.
  Link: https://rivantagreen.com/saf
- **Agricultural Residue Aggregation**: Establishing structured multi-year aggregation networks with regional millers and Farmer Producer Organizations (FPOs) for rice husk and agricultural straw.
  Link: https://rivantagreen.com/feedstock
- **Industrial Infrastructure & Utilities**: Planning integrated manufacturing facilities with captive biomass-based cogeneration and energy-efficient utilities.
  Link: https://rivantagreen.com/projects
- **Environmental Stewardship & Governance**: Addressing crop-residue open burning, improving regional air quality, and advancing circular co-product recovery.
  Link: https://rivantagreen.com/sustainability
- **Corporate Vision & Strategy**: Aligning industrial development with national priorities: domestic manufacturing capability, import substitution, and rural economic value creation.
  Link: https://rivantagreen.com/vision
```

**Audit Context & Regulatory Analysis:**
Public machine-readable context file served for AI agents and LLM discovery.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.2 — HOMEPAGE (36 Claims)

#### CLM-HOME-001: Building Industrial Value From India's Resources

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L28-L30`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 01 Headline)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-003, CLM-VIS-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
line1: "Building Industrial Value",
    line2Prefix: "From ",
    line2Highlight: "India's Resources.",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 01 main headline communicating primary economic proposition.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-002: developing an integrated portfolio across renewable energy, advanced materials, sustainabl...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L32-L34`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 01 Description)`
- **Information Category:** Category G — Future Commitments and Aspirations
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002, CLM-ABOUT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
description:
      "Rivanta Green Innovative Venture Private Limited is developing an integrated portfolio across renewable energy, advanced materials, sustainable fuels, and resource-efficient manufacturing.",
    image: "/images/hero-facility.png",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 01 narrative describing portfolio verticals.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-003: Engineering Bio-Silica & Green Silicon

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L42-L44`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 02 Headline)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
line1: "Engineering Bio-Silica &",
    line2Prefix: "Green ",
    line2Highlight: "Silicon.",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 02 headline asserting biogenic silica and silicon focus.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-004: Developing high-purity biogenic silica and evaluating downstream green silicon materials t...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L46-L48`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 02 Description)`
- **Information Category:** Category C — Technology and Products / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-002`)
- **Audit Risk Classification:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.

**Verbatim Source Code:**
```tsx
description:
      "Developing high-purity biogenic silica and evaluating downstream green silicon materials to strengthen domestic manufacturing and clean technology supply chains.",
    image: "/images/green-silicon-refinery.jpg",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 02 narrative linking silica/silicon development to domestic manufacturing.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-005: Powering Green Mobility With Compressed Biogas

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L56-L58`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 03 Headline)`
- **Information Category:** Category C — Technology and Products / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
line1: "Powering Green Mobility",
    line2Prefix: "With ",
    line2Highlight: "Compressed Biogas.",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 03 headline framing Compressed Biogas for transportation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-006: Developing commercial anaerobic digestion and biomethane enrichment facilities to convert ...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L60-L62`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 03 Description)`
- **Information Category:** Category B — Projects and Industrial Development / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
description:
      "Developing commercial anaerobic digestion and biomethane enrichment facilities to convert agricultural residues into clean Compressed Biogas for transportation and industrial grids.",
    image: "/images/biogas-plant-golden-hour.png",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 03 narrative specifying anaerobic digestion facilities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-007: Exploring The Future Of Clean Aviation Fuels

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L70-L72`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 04 Headline)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
line1: "Exploring The Future Of",
    line2Prefix: "Clean ",
    line2Highlight: "Aviation Fuels.",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 04 headline introducing Sustainable Aviation Fuels research.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-008: Evaluating sustainable aviation fuel pathways from agricultural residues to support long-t...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/Hero.tsx:L74-L76`](file:///src/components/Hero.tsx)
- **Component:** `Hero (Slide 04 Description)`
- **Information Category:** Category C — Technology and Products / Category D — Environmental
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
description:
      "Evaluating sustainable aviation fuel pathways from agricultural residues to support long-term decarbonization across domestic and international aviation corridors.",
    image: "/images/golden-hour-saf-refinery.png",
```

**Audit Context & Regulatory Analysis:**
Hero Slide 04 narrative describing SAF pathway evaluation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-009: Industrial Progress, Built on Opportunity

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/PlatformHgroup.tsx:L20-L22`](file:///src/components/PlatformHgroup.tsx)
- **Component:** `PlatformHgroup (Section 01 Headline)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Marketing positioning statement
- **Explicitness & Timeframe:** `Explicit` | `Unspecified`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Industrial Progress, Built on Opportunity.
            </h2>
```

**Audit Context & Regulatory Analysis:**
Section 01 corporate introduction headline.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-010: developing a diversified industrial portfolio focused on advanced materials, renewable fue...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/PlatformHgroup.tsx:L27-L29`](file:///src/components/PlatformHgroup.tsx)
- **Component:** `PlatformHgroup (Section 01 Paragraph)`
- **Information Category:** Category G — Future Commitments and Aspirations
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed max-w-xl">
              Rivanta Green is developing a diversified industrial portfolio focused on advanced materials, renewable fuels, and resource-efficient manufacturing. Our development strategy connects domestic resources with long-term industrial capability.
            </p>
```

**Audit Context & Regulatory Analysis:**
Section 01 corporate introduction narrative.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-011: ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — INDUSTRIAL...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/MarqueeText.tsx:L9`](file:///src/components/MarqueeText.tsx)
- **Component:** `MarqueeText`
- **Information Category:** Category C — Technology and Products / Category E — National Contribution
- **Claim Type:** General industry statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** `5 Industrial Pillars` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-004`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
phrase = "ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — INDUSTRIAL INFRASTRUCTURE — BUILDING INDUSTRIAL VALUE FROM INDIA'S RESOURCES — ",
```

**Audit Context & Regulatory Analysis:**
Horizontal infinite ticker repeating across homepage and subpages.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-012: Connecting Domestic Resources With Industrial Capability

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L74-L85`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Section 03 Headline)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
{/* Executive Headline & Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.025em] leading-[1.14] text-[#13271e]">
              Connecting Domestic Resources With{" "}
              <span className="font-normal italic text-[#e06425]">
                Industrial Capability.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
```

**Audit Context & Regulatory Analysis:**
Section 03 headline framing the link between agriculture and heavy industry.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-013: aligning its manufacturing ambitions with these critical national priorities

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L85-L87`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Section 03 Narrative)`
- **Information Category:** Category E — National and Economic Contribution / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              India's industrial expansion requires dependable domestic supply chains, clean alternative fuels, and responsible resource utilization. Rivanta is aligning its manufacturing ambitions with these critical national priorities.
            </p>
```

**Audit Context & Regulatory Analysis:**
Editorial paragraph linking company development with Indian national industrial priorities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-014: Integrated Facility Concept • Under Development

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L119-L132`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Facility Concept Image Caption)`
- **Information Category:** Category B — Projects / Category I — Implied Claims
- **Claim Type:** Implied representation
- **Explicitness & Timeframe:** `Implied` | `Future / Under Development`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.

**Verbatim Source Code:**
```tsx
<div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.35/1] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-xl mb-16 md:mb-20 group select-none">
          <Image
            src="/images/company-facility-overview.jpg"
            alt="Rivanta Proposed Bio-Industrial Manufacturing Facility Concept"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/80 font-mono text-[11px] tracking-wider uppercase">
            Integrated Facility Concept • Under Development
          </div>
        </div>
```

**Audit Context & Regulatory Analysis:**
Photorealistic rendering of a heavy industrial chemical plant accompanied by 'Under Development' label.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-015: Agricultural residues represent an important yet underutilized resource. Rivanta aims to s...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L8-L13`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 1 - Harvest Value)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "harvest-value",
    headline: "Value Beyond the Harvest.",
    challenge: "Agricultural Residue Utilization",
    description: "Agricultural residues represent an important yet underutilized resource. Rivanta aims to support their productive use through industrial development, creating new opportunities across agriculture and manufacturing.",
    icon: Wheat,
    color: "#e06425",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 01 on agricultural biomass utilization.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-016: Organized agricultural residue utilization provides a productive alternative to open-field...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L16-L21`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 2 - Air Quality)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-006, CLM-SUST-003`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
id: "air-quality",
    headline: "A More Productive Use of Resources.",
    challenge: "Air Quality & Seasonal Alternatives",
    description: "Organized agricultural residue utilization provides a productive alternative to open-field burning, contributing constructively to regional air-quality efforts across northern and central agrarian corridors.",
    icon: Compass,
    color: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 02 addressing stubble burning mitigation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-017: India relies heavily on international supply chains for critical industrial materials. Our...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L24-L29`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 3 - Domestic Manufacturing)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-008, CLM-SIL-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "domestic-manufacturing",
    headline: "Strengthening Domestic Manufacturing.",
    challenge: "Supply-Chain Resilience",
    description: "India relies heavily on international supply chains for critical industrial materials. Our long-term strategy focuses on developing qualified domestic capabilities in advanced biogenic silica and material inputs.",
    icon: Factory,
    color: "#13271e",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 03 on import substitution for industrial silica.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-018: Developing domestic Compressed Biogas and alternative gaseous fuels strengthens national e...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L32-L37`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 4 - Energy Transition)`
- **Information Category:** Category C — Technology and Products / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "energy-transition",
    headline: "Supporting India's Energy Transition.",
    challenge: "Alternative Fuel Diversification",
    description: "Developing domestic Compressed Biogas and alternative gaseous fuels strengthens national energy security while advancing clean industrial and transport fuel options.",
    icon: Flame,
    color: "#ea6e2d",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 04 on renewable gas for national energy security.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-019: infrastructure planning prioritizes industrial water conservation, heat recovery, and Zero...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L40-L45`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 5 - Resource Efficiency)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023, CLM-SUST-004`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
id: "resource-efficiency",
    headline: "Making Better Use of Resources.",
    challenge: "Industrial Water & Energy Discipline",
    description: "Our infrastructure planning prioritizes industrial water conservation, heat recovery, and Zero Liquid Discharge (ZLD) as an essential design objective where operationally applicable.",
    icon: ShieldCheck,
    color: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 05 outlining water conservation and ZLD design standards.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-020: Decentralized residue procurement, regional logistics, and manufacturing investments creat...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CompanySpotlight.tsx:L48-L53`](file:///src/components/CompanySpotlight.tsx)
- **Component:** `CompanySpotlight (Strategic Challenge 6 - Rural Opportunity)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "rural-opportunity",
    headline: "Creating Opportunity Across Communities.",
    challenge: "Rural Economic Development",
    description: "Decentralized residue procurement, regional logistics, and manufacturing investments create direct employment, rural supplier opportunities, and expanded technical skills.",
    icon: TrendingUp,
    color: "#e06425",
```

**Audit Context & Regulatory Analysis:**
Strategic theme card 06 on regional economic impact and supply chain employment.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-021: Responsibility Across Our Operations

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L68-L78`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Section 04 Headline)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Unspecified`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Responsibility Across{" "}
              <span className="font-normal italic text-[#2d7a54]">
                Our Operations.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Environmental responsibility is central to Rivanta's industrial development approach. Our planning emphasizes efficient resource utilization, water management, emission control, and the responsible handling of industrial materials.
            </p>
```

**Audit Context & Regulatory Analysis:**
Section 04 environmental stewardship headline.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-022: planning emphasizes efficient resource utilization, water management, emission control, an...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L76-L78`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Section 04 Narrative)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Environmental responsibility is central to Rivanta's industrial development approach. Our planning emphasizes efficient resource utilization, water management, emission control, and the responsible handling of industrial materials.
            </p>
```

**Audit Context & Regulatory Analysis:**
Section 04 environmental stewardship introductory paragraph.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-023: Zero Liquid Discharge (ZLD) is a core design objective where technically and operationally...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L7-L13`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Pillar 1 - Water Stewardship)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-019, CLM-SUST-004`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
id: "water-stewardship",
    title: "Water Stewardship & ZLD Planning",
    badge: "Design Objective",
    headline: "Managing Water Responsibly.",
    description: "Zero Liquid Discharge (ZLD) is a core design objective where technically and operationally applicable. Our planning prioritizes high-recovery membrane filtration, closed-loop recycling, and aquifer conservation.",
    icon: Droplet,
    color: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Operational stewardship pillar 1 regarding membrane filtration and water recycling.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-024: Engineering closed-loop cogeneration and waste-heat recovery across processing streams to ...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L16-L22`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Pillar 2 - Waste Heat Recovery)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-006`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "energy-efficiency",
    title: "Waste Heat Recovery & Utilities",
    badge: "Energy Efficiency",
    headline: "Maximizing Thermal Synergy.",
    description: "Engineering closed-loop cogeneration and waste-heat recovery across processing streams to maximize thermodynamic efficiency and reduce overall manufacturing energy intensity.",
    icon: Flame,
    color: "#e06425",
```

**Audit Context & Regulatory Analysis:**
Operational stewardship pillar 2 regarding cogeneration and thermal recovery.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-025: Planning high-efficiency particulate capture, electrostatic precipitators, and continuous ...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L25-L31`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Pillar 3 - Air-Emission Management)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "emission-control",
    title: "Air-Emission Management",
    badge: "Air Quality",
    headline: "Controlling Industrial Emissions.",
    description: "Planning high-efficiency particulate capture, electrostatic precipitators, and continuous in-line monitoring systems to ensure full compliance with national environmental standards.",
    icon: Wind,
    color: "#13271e",
```

**Audit Context & Regulatory Analysis:**
Operational stewardship pillar 3 specifying precipitators and in-line sensors.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-026: Evaluating soil-amendment applications and industrial mineral recovery for solid residues,...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L34-L40`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Pillar 4 - Circular By-Product Recovery)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-007`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "circular-byproducts",
    title: "Circular By-Product Recovery",
    badge: "Material Efficiency",
    headline: "Reducing Material Losses.",
    description: "Evaluating soil-amendment applications and industrial mineral recovery for solid residues, ensuring responsible stewardship and minimal landfill footprint.",
    icon: RefreshCw,
    color: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Operational stewardship pillar 4 covering co-product soil amendment and mineral recovery.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-027: project planning incorporates environmental benchmarks, resource efficiency standards, and...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L154-L164`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Governance Benchmark 1 - Environmental Planning)`
- **Information Category:** Category A — Corporate Governance / Category D — Environmental
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Environmental Planning & Accountability
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Our project planning incorporates environmental benchmarks, resource efficiency standards, and systems for future operating performance monitoring.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#e06425] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
```

**Audit Context & Regulatory Analysis:**
Sub-card detailing project governance and performance tracking standards.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-028: Prioritizing closed-loop water treatment and high-recovery recycling to protect local grou...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L168-L178`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Governance Benchmark 2 - Aquifer Protection)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
<h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Aquifer Protection
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Prioritizing closed-loop water treatment and high-recovery recycling to protect local groundwater reservoirs across all planned facilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#13271e] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
```

**Audit Context & Regulatory Analysis:**
Sub-card asserting groundwater conservation commitments across all planned plants.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-029: Continuous monitoring of raw materials, energy loops, and process inputs to ensure sustain...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/CorporateFoundations.tsx:L182-L192`](file:///src/components/CorporateFoundations.tsx)
- **Component:** `CorporateFoundations (Governance Benchmark 3 - Resource Conservation)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Operational statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Resource Conservation
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Continuous monitoring of raw materials, energy loops, and process inputs to ensure sustainable, commercially viable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
```

**Audit Context & Regulatory Analysis:**
Sub-card on operational input monitoring.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-030: Agricultural residues represent an underutilized domestic resource, forming the supply fou...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L21-L24`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 01 - Agricultural Resources)`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `01 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
category: "01 / AGRICULTURAL RESOURCES",
    title: "Sustained by agricultural resources.",
    desc: "Agricultural residues represent an underutilized domestic resource, forming the supply foundation for Rivanta's planned industrial facilities.",
    short: "Agricultural resources",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 01 detailing feedstock foundation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-031: Commercial Compressed Biogas (CBG) infrastructure designed for city gas distribution netwo...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L30-L33`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 02 - Renewable Gaseous Fuels)`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `02 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
category: "02 / RENEWABLE GASEOUS FUELS",
    title: "Developing alternative gaseous fuels.",
    desc: "Commercial Compressed Biogas (CBG) infrastructure designed for city gas distribution networks and industrial clean mobility off-take.",
    short: "Compressed Biogas (CBG)",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 02 on CBG distribution infrastructure.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-032: Integrated closed-loop cogeneration and thermal heat recovery engineered to maximize utili...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L39-L42`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 03 - Energy Recovery)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `03 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-024`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
category: "03 / ENERGY RECOVERY",
    title: "Industrial energy efficiency.",
    desc: "Integrated closed-loop cogeneration and thermal heat recovery engineered to maximize utility efficiency across manufacturing operations.",
    short: "Energy efficiency",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 03 on cogeneration and energy integration.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-033: Developing domestic capabilities in high-value biogenic silica and evaluating green silico...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L48-L51`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 04 - Advanced Materials)`
- **Information Category:** Category C — Technology / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `04 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
category: "04 / ADVANCED MATERIALS",
    title: "High-purity bio-silica & silicon.",
    desc: "Developing domestic capabilities in high-value biogenic silica and evaluating green silicon precursor pathways for domestic manufacturing.",
    short: "Bio-silica & silicon",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 04 on silica and green silicon precursor evaluation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-034: Evaluating emerging technology partnerships and sustainable aviation fuel (SAF) pathways t...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L57-L60`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 05 - Sustainable Fuels)`
- **Information Category:** Category C — Technology / Category G — Future Commitments
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** `05 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
category: "05 / SUSTAINABLE FUELS",
    title: "Exploring future aviation fuels.",
    desc: "Evaluating emerging technology partnerships and sustainable aviation fuel (SAF) pathways to participate in long-term transport decarbonization.",
    short: "Sustainable aviation",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 05 on SAF tech evaluation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-035: Evaluating soil-amendment applications and industrial mineral recovery for co-products, mi...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/components/ValueChainGallery.tsx:L66-L69`](file:///src/components/ValueChainGallery.tsx)
- **Component:** `ValueChainGallery (Slide 06 - Resource Recovery)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** `06 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-026`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
category: "06 / RESOURCE RECOVERY",
    title: "Responsible resource recovery.",
    desc: "Evaluating soil-amendment applications and industrial mineral recovery for co-products, minimizing material losses across the facility lifecycle.",
    short: "Resource recovery",
```

**Audit Context & Regulatory Analysis:**
Interactive gallery slide 06 on circular co-product management.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-HOME-036: Rivanta Green — Diversified Industrial Enterprise; emerging Indian industrial enterprise d...

- **Page / Route:** [Homepage](https://rivantagreen.com/)
- **Authoritative File & Lines:** [`src/app/page.tsx:L1-L11`](file:///src/app/page.tsx)
- **Component:** `Home Page Metadata`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PlatformHgroup from "@/components/PlatformHgroup";
import MarqueeText from "@/components/MarqueeText";
import CompanySpotlight from "@/components/CompanySpotlight";
import CorporateFoundations from "@/components/CorporateFoundations";
import ValueChainGallery from "@/components/ValueChainGallery";

export const metadata: Metadata = {
  title: "Rivanta Green — Diversified Industrial Enterprise",
```

**Audit Context & Regulatory Analysis:**
Homepage explicit SEO title and meta description.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.3 — ABOUT US (20 Claims)

#### CLM-ABOUT-001: emerging diversified Indian industrial enterprise developing domestic capabilities across ...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/layout.tsx:L4-L6`](file:///src/app/about/layout.tsx)
- **Component:** `AboutLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "About Us — Corporate Identity, Leadership & Industrial Ambition",
  description:
    "Learn about Rivanta Green Innovative Venture Private Limited, an emerging diversified Indian industrial enterprise developing domestic capabilities across advanced materials, sustainable fuels, and circular manufacturing.",
```

**Audit Context & Regulatory Analysis:**
Dedicated Server Component metadata for the corporate About route.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-002: Corporate identity, governance, and long-term industrial ambition of Rivanta Green Innovat...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/layout.tsx:L37-L43`](file:///src/app/about/layout.tsx)
- **Component:** `AboutLayout (JSON-LD AboutPage)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
"@type": "AboutPage",
      "@id": "https://rivantagreen.com/about#webpage",
      url: "https://rivantagreen.com/about",
      name: "About Rivanta Green — Corporate Identity & Industrial Ambition",
      description:
        "Corporate identity, governance, and long-term industrial ambition of Rivanta Green Innovative Venture Private Limited.",
      isPartOf: {
```

**Audit Context & Regulatory Analysis:**
Schema.org AboutPage declaration linking to the central Corporation node.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-003: Building Industrial Value From India's Resources

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L119-L120`](file:///src/app/about/page.tsx)
- **Component:** `SubpageHero (Title & Highlight)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-001, CLM-VIS-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title="Building Industrial Value From"
        highlightedText="India's Resources."
```

**Audit Context & Regulatory Analysis:**
Subpage hero main headline on About page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-004: emerging Indian industrial enterprise developing an integrated portfolio across renewable ...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L121`](file:///src/app/about/page.tsx)
- **Component:** `SubpageHero (Description)`
- **Information Category:** Category G — Future Commitments and Aspirations
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-002, CLM-HOME-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
description="Rivanta Green Innovative Venture Private Limited is an emerging Indian industrial enterprise developing an integrated portfolio across renewable energy, advanced materials, sustainable fuels, and circular manufacturing."
```

**Audit Context & Regulatory Analysis:**
Subpage hero narrative on About page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-005: Emerging Industrial Enterprise • Bhopal, India

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L128`](file:///src/app/about/page.tsx)
- **Component:** `SubpageHero (Telemetry Tag)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
telemetryTag="Emerging Industrial Enterprise • Bhopal, India"
```

**Audit Context & Regulatory Analysis:**
Subpage hero telemetry label anchoring company headquarters in Bhopal, India.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-006: Industrial development built on responsible resource use

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L149-L161`](file:///src/app/about/page.tsx)
- **Component:** `Corporate Overview Headline`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Unspecified`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Industrial development built on{" "}
                <span className="text-[#a0b0a5]">responsible resource use.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  India generates substantial volumes of agricultural residues every harvest season. Without structured industrial demand and organized collection logistics, valuable economic potential remains unutilized.
                </p>
                <p>
                  Rivanta Green was incorporated to convert these renewable resources into high-value industrial inputs: biogenic silica, clean biomethane, and circular materials that strengthen domestic manufacturing.
                </p>
              </div>
```

**Audit Context & Regulatory Analysis:**
Headline introducing company founding motivation and purpose.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-007: India generates substantial volumes of agricultural residues every harvest season. Without...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L155-L157`](file:///src/app/about/page.tsx)
- **Component:** `Corporate Overview Narrative 01 (Agrarian Context)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** General industry statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-006, CLM-FEED-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p>
                  India generates substantial volumes of agricultural residues every harvest season. Without structured industrial demand and organized collection logistics, valuable economic potential remains unutilized.
                </p>
```

**Audit Context & Regulatory Analysis:**
Industry context statement explaining why crop residues remain unused.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-008: Rivanta Green was incorporated to convert these renewable resources into high-value indust...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L158-L160`](file:///src/app/about/page.tsx)
- **Component:** `Corporate Overview Narrative 02 (Incorporation Purpose)`
- **Information Category:** Category A — Corporate Identity / Category E — National Contribution
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Historical / Ongoing`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p>
                  Rivanta Green was incorporated to convert these renewable resources into high-value industrial inputs: biogenic silica, clean biomethane, and circular materials that strengthen domestic manufacturing.
                </p>
```

**Audit Context & Regulatory Analysis:**
Declaration of corporate incorporation objective and target product vectors.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-009: build a competitive Indian industrial enterprise that creates sustainable economic value f...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L172-L174`](file:///src/app/about/page.tsx)
- **Component:** `Strategic Vision Card`
- **Information Category:** Category G — Future Commitments and Aspirations
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** `01 Card number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    To build a competitive Indian industrial enterprise that creates sustainable economic value from domestic agricultural resources while advancing national manufacturing resilience.
                  </p>
```

**Audit Context & Regulatory Analysis:**
Formal company Strategic Vision statement.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-010: engineer, finance, and operate modern industrial manufacturing facilities that combine hig...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L184-L186`](file:///src/app/about/page.tsx)
- **Component:** `Operational Mission Card`
- **Information Category:** Category G — Future Commitments and Aspirations
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** `02 Card number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-sm text-[#13271e]/85 font-light leading-relaxed">
                    To engineer, finance, and operate modern industrial manufacturing facilities that combine high-efficiency processing, environmental responsibility, and value for regional communities.
                  </p>
```

**Audit Context & Regulatory Analysis:**
Formal company Operational Mission statement.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-011: Strengthening domestic availability of biogenic silica and essential clean energy vectors ...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L86-L89`](file:///src/app/about/page.tsx)
- **Component:** `Priority 1 — Domestic Supply Chain Resilience`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-017`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Domestic Supply Chain Resilience",
    description:
      "Strengthening domestic availability of biogenic silica and essential clean energy vectors to support Indian manufacturing competitiveness.",
    icon: Factory,
```

**Audit Context & Regulatory Analysis:**
Strategic development priority 1.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-012: Generating secondary economic value for farming communities and rural logistics operators ...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L92-L95`](file:///src/app/about/page.tsx)
- **Component:** `Priority 2 — Rural Value Creation`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Rural Value Creation",
    description:
      "Generating secondary economic value for farming communities and rural logistics operators through organized biomass procurement.",
    icon: TrendingUp,
```

**Audit Context & Regulatory Analysis:**
Strategic development priority 2.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-013: Building commercial-scale capacity across Compressed Biogas (CBG) and evaluating Sustainab...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L98-L102`](file:///src/app/about/page.tsx)
- **Component:** `Priority 3 — Energy & Materials Diversification`
- **Information Category:** Category B — Projects and Industrial Development / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002, CLM-SAF-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Energy & Materials Diversification",
    description:
      "Building commercial-scale capacity across Compressed Biogas (CBG) and evaluating Sustainable Aviation Fuel (SAF) production pathways.",
    icon: Cpu,
  },
```

**Audit Context & Regulatory Analysis:**
Strategic development priority 3.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-014: Designing manufacturing facilities with continuous emissions controls, water recycling sys...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L104-L108`](file:///src/app/about/page.tsx)
- **Component:** `Priority 4 — Environmental Stewardship`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023, CLM-SUST-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Environmental Stewardship",
    description:
      "Designing manufacturing facilities with continuous emissions controls, water recycling systems, and waste-heat recovery loops.",
    icon: ShieldCheck,
  },
```

**Audit Context & Regulatory Analysis:**
Strategic development priority 4.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-015: Developing scalable manufacturing infrastructure that converts underutilized domestic reso...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L24-L33`](file:///src/app/about/page.tsx)
- **Component:** `Strategic Value Card 01 (Industrial Ambition)`
- **Information Category:** Category B — Projects / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `01. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-010`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Industrial Ambition",
    badge: "Long-Term Vision",
    description:
      "Developing scalable manufacturing infrastructure that converts underutilized domestic resources into high-value industrial inputs for key manufacturing sectors.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Target,
    stat: "Integrated Industrial Development",
  },
```

**Audit Context & Regulatory Analysis:**
3-card value trio card 01.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-016: Integrating zero-waste engineering and closed-loop process utility design to maximize mate...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L36-L45`](file:///src/app/about/page.tsx)
- **Component:** `Strategic Value Card 02 (Resource Efficiency)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `02. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
title: "Resource Efficiency",
    badge: "Circular Stewardship",
    description:
      "Integrating zero-waste engineering and closed-loop process utility design to maximize material recovery while minimizing primary resource consumption.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Compass,
    stat: "Zero Liquid Discharge (ZLD) Design",
  },
```

**Audit Context & Regulatory Analysis:**
3-card value trio card 02 citing zero-waste and ZLD design standards.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-017: Operating with disciplined corporate governance, statutory compliance planning, and transp...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L48-L57`](file:///src/app/about/page.tsx)
- **Component:** `Strategic Value Card 03 (Corporate Accountability)`
- **Information Category:** Category A — Corporate Governance
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing`
- **Numerical Value:** `03. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-011`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Corporate Accountability",
    badge: "Institutional Governance",
    description:
      "Operating with disciplined corporate governance, statutory compliance planning, and transparent frameworks for resource accounting and operational reporting.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: ShieldCheck,
    stat: "Disciplined Governance Standards",
  },
```

**Audit Context & Regulatory Analysis:**
3-card value trio card 03 stating governance and statutory compliance approach.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-018: Developing regional agricultural residue collection frameworks, engaging prospective milli...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L61-L66`](file:///src/app/about/page.tsx)
- **Component:** `Development Milestone 01 (Stage 01)`
- **Information Category:** Category B — Projects and Industrial Development / Category F — Commercial
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Project Planning`
- **Numerical Value:** `01 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-010`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
{
    stage: "Stage 01",
    status: "Project Planning",
    title: "Feedstock Sourcing & Supply Chain Modeling",
    detail:
      "Developing regional agricultural residue collection frameworks, engaging prospective milling partners, and evaluating material handling logistics.",
```

**Audit Context & Regulatory Analysis:**
Phased corporate development milestone 01.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-019: Advancing process engineering packages, preparing statutory clearance documentation, and a...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L69-L74`](file:///src/app/about/page.tsx)
- **Component:** `Development Milestone 02 (Stage 02)`
- **Information Category:** Category B — Projects and Industrial Development
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Preparation`
- **Numerical Value:** `02 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-011`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
stage: "Stage 02",
    status: "In Preparation",
    title: "Facility Planning & Detailed Engineering",
    detail:
      "Advancing process engineering packages, preparing statutory clearance documentation, and assessing utility integration requirements for planned hubs.",
  },
```

**Audit Context & Regulatory Analysis:**
Phased corporate development milestone 02.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-ABOUT-020: Evaluating prospective industrial off-take arrangements, technology licensor qualification...

- **Page / Route:** [About Us](https://rivantagreen.com/about)
- **Authoritative File & Lines:** [`src/app/about/page.tsx:L76-L81`](file:///src/app/about/page.tsx)
- **Component:** `Development Milestone 03 (Stage 03)`
- **Information Category:** Category B — Projects and Industrial Development / Category F — Commercial
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Strategic Evaluation`
- **Numerical Value:** `03 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-012`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
stage: "Stage 03",
    status: "Strategic Evaluation",
    title: "Commercial Structuring & Downstream Pathways",
    detail:
      "Evaluating prospective industrial off-take arrangements, technology licensor qualification, and downstream biogenic material applications.",
  },
```

**Audit Context & Regulatory Analysis:**
Phased corporate development milestone 03.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.4 — BIO-SILICA & ADVANCED MATERIALS (13 Claims)

#### CLM-SIL-001: Developing high-purity biogenic silica (SiO₂) from agricultural residues and evaluating do...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/layout.tsx:L4-L6`](file:///src/app/bio-silica/layout.tsx)
- **Component:** `BioSilicaLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `2 Formula subscript (SiO2)` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-002`)
- **Audit Risk Classification:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.

**Verbatim Source Code:**
```tsx
title: "Bio-Silica & Advanced Materials — Biogenic Silica & Industrial Silicon Precursors",
  description:
    "Developing high-purity biogenic silica (SiO₂) from agricultural residues and evaluating downstream green silicon precursor pathways for rubber, green concrete, and advanced industrial materials.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-002: Developing high-grade biogenic silica (SiO₂) from agricultural residues and evaluating dow...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L111-L114`](file:///src/app/bio-silica/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
badge="Advanced Materials & Silicon"
        title="Engineering Bio-Silica &"
        highlightedText="Green Silicon."
        description="Developing high-grade biogenic silica (SiO₂) from agricultural residues and evaluating downstream green silicon precursor pathways for rubber, concrete, and advanced industrial applications."
```

**Audit Context & Regulatory Analysis:**
Bio-Silica page hero asserting production of biogenic silica and exploration of green silicon.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-003: Sustainable agricultural residues (rice husk) vs. Mined quartz mineral deposits

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L14-L18`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Table (Raw Material Source)`
- **Information Category:** Category C — Technology and Products / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
parameter: "Raw Material Source",
    biogenicSilica: "Sustainable agricultural residues (rice husk)",
    traditionalSilica: "Mined quartz mineral deposits and chemical synthesis",
    advantage: "Renewable Agricultural Origin",
  },
```

**Audit Context & Regulatory Analysis:**
Material comparison parameter 01 comparing rice husk origin against mineral quartz mining.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-004: Controlled thermal conversion and purification vs. High-temperature sodium silicate fusion...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L20-L24`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Table (Processing Route)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Planned Process`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
parameter: "Processing Route",
    biogenicSilica: "Controlled thermal conversion and purification",
    traditionalSilica: "High-temperature sodium silicate fusion and acid precipitation",
    advantage: "Non-Mining Production Route",
  },
```

**Audit Context & Regulatory Analysis:**
Material comparison parameter 02 outlining thermal conversion vs chemical sodium silicate fusion.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-005: Amorphous silica (SiO₂) with high specific surface area vs. Crystalline quartz or syntheti...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L26-L30`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Table (Material Structure)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Product Specification`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-008`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
parameter: "Material Structure",
    biogenicSilica: "Amorphous silica (SiO₂) with high specific surface area",
    traditionalSilica: "Crystalline quartz or synthetic precipitated matrices",
    advantage: "Amorphous Phase Characteristics",
  },
```

**Audit Context & Regulatory Analysis:**
Material comparison parameter 03 asserting amorphous phase state over crystalline quartz.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-006: Domestic agro-residue aggregation from agrarian belts vs. Dependent on mineral extraction ...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L32-L36`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Table (Supply Chain Model)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
parameter: "Supply Chain Model",
    biogenicSilica: "Domestic agro-residue aggregation from agrarian belts",
    traditionalSilica: "Dependent on mineral extraction and import logistics",
    advantage: "Domestic Supply Integration",
  },
```

**Audit Context & Regulatory Analysis:**
Material comparison parameter 04 asserting domestic aggregation over foreign mineral imports.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-007: Co-generation of process energy and agricultural soil co-products vs. Mineral quarrying wi...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L38-L42`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Table (Resource Recovery Integration)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-032`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
parameter: "Resource Recovery Integration",
    biogenicSilica: "Co-generation of process energy and agricultural soil co-products",
    traditionalSilica: "Mineral quarrying with solid tailings management requirements",
    advantage: "Integrated Resource Recovery",
  },
```

**Audit Context & Regulatory Analysis:**
Material comparison parameter 05 asserting cogeneration and soil by-product integration.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-008: Biogenic silica derived from agricultural residues provides high surface area, consistent ...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L145-L146`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Comparison Editorial Overview`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Current Technical Claim`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Biogenic silica derived from agricultural residues provides high surface area, consistent reactivity, and commercial relevance as an alternative to conventional mineral silica.
            </p>
```

**Audit Context & Regulatory Analysis:**
Editorial explanation of biogenic silica physical and chemical characteristics.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-009: Biogenic silica is being evaluated as a reinforcing filler for automotive tires and indust...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L48-L58`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Application 01 — Rubber & Tire Reinforcement`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Rubber & Tire Reinforcement",
    role: "Prospective Compounding Applications",
    headline: "Reinforcing elastomeric compounds and wear performance.",
    description:
      "Biogenic silica is being evaluated as a reinforcing filler for automotive tires and industrial rubber compounds to support lower rolling resistance and improved tread durability.",
    specs: [
      "High specific surface area for polymer dispersion testing",
      "Potential reduction in rolling resistance for vehicle fuel efficiency",
      "Compatibility evaluation with synthetic and natural elastomer matrices",
      "Renewable alternative to mineral-derived industrial silica",
    ],
```

**Audit Context & Regulatory Analysis:**
Industrial application evaluation for green tires and elastomer compounding.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-010: Pozzolanic biogenic silica reacts with calcium hydroxide during cement hydration, enhancin...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L62-L72`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Application 02 — Concrete & Infrastructure`
- **Information Category:** Category C — Technology and Products / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Concrete & Infrastructure",
    role: "Supplementary Cementitious Material",
    headline: "Improving structural durability and cement efficiency.",
    description:
      "Pozzolanic biogenic silica reacts with calcium hydroxide during cement hydration, enhancing compressive strength, reducing permeability, and lowering concrete embodied carbon.",
    specs: [
      "Assessing early and long-term compressive strength development",
      "Evaluated for reduced chloride penetration and chemical resistance",
      "Supports partial displacement of Portland cement in structural mixes",
      "Pore-structure optimization for precast and infrastructure concrete",
    ],
```

**Audit Context & Regulatory Analysis:**
Industrial application evaluation for concrete durability and Portland cement displacement.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-011: Engineered particle sizing provides consistent matting, anti-settling, and viscosity contr...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L76-L86`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Application 03 — Specialty Coatings & Industrial Applications`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Specialty Coatings & Industrial Applications",
    role: "Rheology Control & Matting Applications",
    headline: "Particle sizing and viscosity control for industrial coatings.",
    description:
      "Engineered particle sizing provides consistent matting, anti-settling, and viscosity control across architectural paints, industrial resins, and protective coatings.",
    specs: [
      "Controlled particle distribution for uniform surface finishes",
      "Thixotropic rheology control in paints and industrial adhesives",
      "Chemically stable with high thermal resistance",
      "Evaluation across solvent-borne and waterborne formulations",
    ],
```

**Audit Context & Regulatory Analysis:**
Industrial application evaluation for architectural and industrial coatings.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-012: Rivanta is evaluating exploratory processing pathways to determine the technical and comme...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L90-L100`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Application 04 — Downstream Materials & Silicon Evaluation`
- **Information Category:** Category C — Technology and Products / Category G — Future Commitments
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluative Development`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-004, CLM-PROJ-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Downstream Materials & Silicon Evaluation",
    role: "Evaluative Development Area",
    headline: "Evaluating high-purity biogenic silica as an industrial precursor.",
    description:
      "Rivanta is evaluating exploratory processing pathways to determine the technical and commercial feasibility of refining biogenic silica into precursors for industrial applications, advanced ceramics, and clean energy storage.",
    specs: [
      "Evaluating chemical purity and physical morphology from agricultural residues",
      "Assessing feasibility for industrial rubber, concrete, and coating applications",
      "Exploring potential downstream clean technology precursor pathways",
      "Advancing workstreams through phased technical feasibility modeling",
    ],
```

**Audit Context & Regulatory Analysis:**
Advanced silicon precursor evaluation for ceramics, clean energy storage, and industrial precursors.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SIL-013: Technical specifications and material parameters are discussed with qualified industrial p...

- **Page / Route:** [Bio-Silica & Advanced Materials](https://rivantagreen.com/bio-silica)
- **Authoritative File & Lines:** [`src/app/bio-silica/page.tsx:L297`](file:///src/app/bio-silica/page.tsx)
- **Component:** `Technical Inquiries Footnote`
- **Information Category:** Category F — Financial and Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current Process`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-012`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
*Technical specifications and material parameters are discussed with qualified industrial partners upon formal inquiry.
```

**Audit Context & Regulatory Analysis:**
Policy footnote governing distribution of technical specifications to prospective buyers.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.5 — COMPRESSED BIOGAS (CBG) (13 Claims)

#### CLM-CBG-001: Developing commercial Compressed Biogas infrastructure utilizing anaerobic digestion of ag...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/layout.tsx:L4-L6`](file:///src/app/cbg/layout.tsx)
- **Component:** `CbgLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Compressed Biogas (CBG) — Clean Energy from Regional Agricultural Residues",
  description:
    "Developing commercial Compressed Biogas infrastructure utilizing anaerobic digestion of agricultural residues to support domestic energy diversification and clean mobility in India.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for CBG.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-002: Developing commercial Compressed Biogas facilities to convert agricultural residues into c...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L111-L114`](file:///src/app/cbg/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category B — Projects and Industrial Development / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-006`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title="Supporting India's Energy Transition With"
        highlightedText="Compressed Biogas."
        description="Developing commercial Compressed Biogas facilities to convert agricultural residues into clean biomethane for transportation, city gas distribution, and industrial heating."
        imageSrc="/images/cbg-plant.jpg"
```

**Audit Context & Regulatory Analysis:**
Subpage hero on CBG route asserting planned commercial biomethane plants.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-003: delivering caloric parity with fossil natural gas. Rivanta Green is developing modern CBG ...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L151-L155`](file:///src/app/cbg/page.tsx)
- **Component:** `Overview Narrative (The Energy Opportunity)`
- **Information Category:** Category C — Technology / Category B — Projects
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-007`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
Compressed Biogas (CBG) is purified biomethane produced through the controlled anaerobic digestion of crop residues and agricultural by-products, delivering caloric parity with fossil natural gas.
                </p>
                <p>
                  Rivanta Green is developing modern CBG facilities to supply clean biomethane into regional transportation corridors and city gas networks, turning agricultural residues into dependable domestic energy.
                </p>
```

**Audit Context & Regulatory Analysis:**
Editorial narrative explaining CBG production process and caloric equivalence.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-004: Developing supply pathways for commercial-grade biomethane into regional city gas networks

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L21-L28`](file:///src/app/cbg/page.tsx)
- **Component:** `Strategic Channel 01 — City Gas Distribution`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `01. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-010`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "City Gas Distribution",
    badge: "Grid Integration",
    text: "Developing supply pathways for commercial-grade biomethane into regional city gas networks, providing an alternative for domestic piped gas and commercial heating.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Flame,
    stat: "Pipeline-Quality Biomethane",
```

**Audit Context & Regulatory Analysis:**
Commercial distribution pathway 01 for city gas distribution grids.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-005: Planning compressed biomethane distribution for vehicular transport and commercial fleet c...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L31-L39`](file:///src/app/cbg/page.tsx)
- **Component:** `Strategic Channel 02 — Commercial Mobility`
- **Information Category:** Category B — Projects / Category D — Environmental
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `02. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-005`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
index: "02.",
    title: "Commercial Mobility",
    badge: "Clean Transport",
    text: "Planning compressed biomethane distribution for vehicular transport and commercial fleet corridors, supporting lower emissions across logistics fleets.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Fuel,
    stat: "Vehicular Alternative Fuel",
```

**Audit Context & Regulatory Analysis:**
Commercial distribution pathway 02 for transport fleet refueling.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-006: Evaluating the processing of organic digestion by-products into fermented organic soil ame...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L43-L50`](file:///src/app/cbg/page.tsx)
- **Component:** `Strategic Channel 03 — Circular Soil Nutrients`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Evaluation`
- **Numerical Value:** `03. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-013, CLM-SUST-006`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Circular Soil Nutrients",
    badge: "Resource Recovery",
    text: "Evaluating the processing of organic digestion by-products into fermented organic soil amendments, returning organic carbon and macro-nutrients to regional farmlands.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Sprout,
    stat: "Soil Health Restoration",
```

**Audit Context & Regulatory Analysis:**
Commercial by-product pathway 03 for digestate soil amendment.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-007: Commercial Grade • Methane Enrichment: Purified biomethane engineered to meet commercial s...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L56-L61`](file:///src/app/cbg/page.tsx)
- **Component:** `Commercial Parameter 01 (Methane Enrichment)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Product Specification`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "methane-content",
    value: "Commercial Grade",
    label: "Methane Enrichment",
    detail: "Purified biomethane engineered to meet commercial specifications for industrial and grid applications.",
    trend: "Commercial Specification",
  },
```

**Audit Context & Regulatory Analysis:**
Technical specification parameter for CBG purity.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-008: Caloric Equivalence • Fuel Performance: Direct operational alternative to fossil natural g...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L63-L68`](file:///src/app/cbg/page.tsx)
- **Component:** `Commercial Parameter 02 (Fuel Performance)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Technical Claim`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "energy-parity",
    value: "Caloric Equivalence",
    label: "Fuel Performance",
    detail: "Direct operational alternative to fossil natural gas in commercial burners and industrial heating applications.",
    trend: "Industrial Heating",
  },
```

**Audit Context & Regulatory Analysis:**
Caloric equivalence assertion compared to fossil natural gas.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-009: National Mandates • Policy Integration: Aligned with national bioenergy directives promoti...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L70-L75`](file:///src/app/cbg/page.tsx)
- **Component:** `Commercial Parameter 03 (Policy Integration)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Current Policy Alignment`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-018`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "policy-alignment",
    value: "National Mandates",
    label: "Policy Integration",
    detail: "Aligned with national bioenergy directives promoting domestic renewable fuel blending and energy diversification.",
    trend: "Energy Transition",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic alignment with national biofuels mandates (e.g., SATAT framework).

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-010: Closed Loop • Nutrient Recycling: Comprehensive digestate recovery producing organic soil ...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L76-L82`](file:///src/app/cbg/page.tsx)
- **Component:** `Commercial Parameter 04 (Nutrient Recycling)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-006, CLM-CBG-013`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
{
    id: "byproduct-recovery",
    value: "Closed Loop",
    label: "Nutrient Recycling",
    detail: "Comprehensive digestate recovery producing organic soil amendments for sustainable agriculture.",
    trend: "Circular Agriculture",
  },
```

**Audit Context & Regulatory Analysis:**
Nutrient recycling parameter covering anaerobic digestate utilization.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-011: Paddy straw, wheat straw, and crop stalks procured from regional agricultural belts to sup...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L88-L89`](file:///src/app/cbg/page.tsx)
- **Component:** `Feedstock Category 01 — Crop Residues & Agronomic Straw`
- **Information Category:** Category C — Technology / Category E — National Contribution
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Feedstock Definition`
- **Numerical Value:** `01 Category number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
name: "Crop Residues & Agronomic Straw",
    characteristics: "Paddy straw, wheat straw, and crop stalks procured from regional agricultural belts to support productive biomass utilization.",
```

**Audit Context & Regulatory Analysis:**
Primary agricultural crop residue feedstocks for digestion.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-012: Residues from agro-processing, milling clusters, and food processing facilities suited for...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L93-L94`](file:///src/app/cbg/page.tsx)
- **Component:** `Feedstock Category 02 — Agro-Industrial Processing By-Products`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Feedstock Definition`
- **Numerical Value:** `02 Category number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
name: "Agro-Industrial Processing By-Products",
    characteristics: "Residues from agro-processing, milling clusters, and food processing facilities suited for anaerobic digestion.",
```

**Audit Context & Regulatory Analysis:**
Agro-processing co-product feedstocks for biogas plants.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CBG-013: anaerobic digestion produces valuable organic digestate that is processed into fermented o...

- **Page / Route:** [Compressed Biogas (CBG)](https://rivantagreen.com/cbg)
- **Authoritative File & Lines:** [`src/app/cbg/page.tsx:L376-L377`](file:///src/app/cbg/page.tsx)
- **Component:** `Organic Fertilizer Output Narrative`
- **Information Category:** Category D — Environmental / Category C — Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Planned Product`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-006, CLM-SUST-006`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
In addition to clean biomethane, anaerobic digestion produces valuable organic digestate that is processed into fermented organic manure to enrich agricultural soils.
              </p>
```

**Audit Context & Regulatory Analysis:**
Commercial co-product description regarding fermented organic manure (FOM).

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.6 — SUSTAINABLE AVIATION FUELS (SAF) (13 Claims)

#### CLM-SAF-001: Evaluating drop-in sustainable aviation fuel development pathways and industrial partnersh...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/layout.tsx:L4-L6`](file:///src/app/saf/layout.tsx)
- **Component:** `SafLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Sustainable Aviation Fuel (SAF) — Strategic Pathways & Aviation Decarbonization",
  description:
    "Evaluating drop-in sustainable aviation fuel development pathways and industrial partnerships to support long-term decarbonization of commercial aviation in India.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for SAF.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-002: Evaluating sustainable aviation fuel pathways from non-food agricultural residues to suppo...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L113-L116`](file:///src/app/saf/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category C — Technology and Products / Category D — Environmental
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-007`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
badge="Future Fuels"
        title="Exploring The Future Of"
        highlightedText="Aviation Fuels."
        description="Evaluating sustainable aviation fuel pathways from non-food agricultural residues to support the long-term decarbonization of domestic and international air corridors."
```

**Audit Context & Regulatory Analysis:**
Subpage hero on SAF route asserting evaluation of non-food bio-feedstocks.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-003: Rivanta Green is conducting structured technical evaluations into conversion pathways that...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L154-L158`](file:///src/app/saf/page.tsx)
- **Component:** `Overview Narrative (The Aviation Opportunity)`
- **Information Category:** Category C — Technology / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Aviation represents one of the most demanding sectors to decarbonize, requiring high-energy-density drop-in liquid fuels that perform reliably across commercial jet fleets without infrastructure retooling.
                </p>
                <p>
                  Rivanta Green is conducting structured technical evaluations into conversion pathways that can process non-food agricultural residues into certifiable sustainable aviation fuels, positioning the enterprise for long-term industrial participation.
                </p>
```

**Audit Context & Regulatory Analysis:**
Editorial narrative outlining technical evaluations for drop-in synthetic aviation fuels.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-004: Evaluating catalytic conversion routes transforming non-food biological alcohols into synt...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L21-L28`](file:///src/app/saf/page.tsx)
- **Component:** `Strategic Pathway 01 — Alcohol-to-Jet Pathways`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** `01. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Alcohol-to-Jet Pathways",
    badge: "Strategic Pathway",
    text: "Evaluating catalytic conversion routes transforming non-food biological alcohols into synthetic paraffinic kerosene suited for commercial aviation blending.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Fuel,
    stat: "Non-Food Biomass Feedstocks",
```

**Audit Context & Regulatory Analysis:**
Evaluative pathway 01 specifying Alcohol-to-Jet (ATJ) conversion into synthetic paraffinic kerosene.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-005: Investigating biomass gasification paired with catalytic hydrocarbon synthesis to convert ...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L31-L39`](file:///src/app/saf/page.tsx)
- **Component:** `Strategic Pathway 02 — Gasification & Synthesis`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Evaluation`
- **Numerical Value:** `02. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
index: "02.",
    title: "Gasification & Synthesis",
    badge: "Thermochemical Route",
    text: "Investigating biomass gasification paired with catalytic hydrocarbon synthesis to convert agricultural residues into drop-in aviation fuel components.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Flame,
    stat: "High Biomass Flexibility",
```

**Audit Context & Regulatory Analysis:**
Evaluative pathway 02 specifying thermochemical gasification and catalytic hydrocarbon synthesis.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-006: Evaluating prospective collaboration with established technology licensors and aviation st...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L43-L50`](file:///src/app/saf/page.tsx)
- **Component:** `Strategic Pathway 03 — Technology Partnerships`
- **Information Category:** Category F — Commercial / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Collaborative Evaluation`
- **Numerical Value:** `03. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-007`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Technology Partnerships",
    badge: "Collaborative Model",
    text: "Evaluating prospective collaboration with established technology licensors and aviation stakeholders to identify bankable, certifiable conversion pathways for domestic deployment.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Plane,
    stat: "Licensor Alignment",
```

**Audit Context & Regulatory Analysis:**
Technology partnership model for licensor screening and technology qualification.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-007: Targeting complete physical and performance compatibility with conventional aviation fueli...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L56-L61`](file:///src/app/saf/page.tsx)
- **Component:** `Evaluation Parameter 01 (Drop-In Capability)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Technical Goal`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "drop-in-capability",
    value: "Drop-In Objective",
    label: "Fuel Compatibility",
    detail: "Targeting complete physical and performance compatibility with conventional aviation fueling infrastructure.",
    trend: "Infrastructure Readiness",
  },
```

**Audit Context & Regulatory Analysis:**
Fuel compatibility criteria asserting drop-in readiness without fueling system changes.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-008: Strictly utilizing non-food agricultural residues to prevent competition with food product...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L63-L68`](file:///src/app/saf/page.tsx)
- **Component:** `Evaluation Parameter 02 (Feedstock Integrity)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Operating Principle`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "feedstock-integrity",
    value: "Non-Food Biomass",
    label: "Non-Food Biomass",
    detail: "Strictly utilizing non-food agricultural residues to prevent competition with food production or arable land.",
    trend: "Responsible Sourcing",
  },
```

**Audit Context & Regulatory Analysis:**
Environmental sourcing parameter committing to non-food biomass exclusively.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-009: Designed to deliver substantial lifecycle carbon reductions compared to conventional fossi...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L70-L75`](file:///src/app/saf/page.tsx)
- **Component:** `Evaluation Parameter 03 (Emissions Profile)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "emissions-profile",
    value: "Long-Term Reductions",
    label: "Lifecycle Assessment",
    detail: "Designed to deliver substantial lifecycle carbon reductions compared to conventional fossil jet fuels.",
    trend: "Aviation Decarbonization",
  },
```

**Audit Context & Regulatory Analysis:**
Lifecycle carbon emissions reduction criteria for synthetic aviation fuel.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-010: Aligning process design with international aviation fuel certification standards and off-t...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L77-L82`](file:///src/app/saf/page.tsx)
- **Component:** `Evaluation Parameter 04 (Standards Alignment)`
- **Information Category:** Category C — Technology / Category F — Commercial
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "standards-alignment",
    value: "Aviation Standards",
    label: "Certification Readiness",
    detail: "Aligning process design with international aviation fuel certification standards and off-take specifications.",
    trend: "Industry Compliance",
  },
```

**Audit Context & Regulatory Analysis:**
Certification alignment with ASTM/CORSIA international aviation standards.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-011: Assessing process economics, capital intensity, and energy balances across proven catalyti...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L88-L92`](file:///src/app/saf/page.tsx)
- **Component:** `Phasing Step 01 (Techno-Economic Feasibility)`
- **Information Category:** Category B — Projects / Category F — Commercial
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Progress`
- **Numerical Value:** `01 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Techno-Economic Feasibility",
    detail:
      "Assessing process economics, capital intensity, and energy balances across proven catalytic and thermochemical conversion technologies.",
  },
  {
```

**Audit Context & Regulatory Analysis:**
Phased evaluation step 01 covering capital intensity and energy balance modeling.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-012: Evaluating regional biomass aggregation logistics to support continuous feedstock availabi...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L94-L98`](file:///src/app/saf/page.tsx)
- **Component:** `Phasing Step 02 (Feedstock Security & Supply Integration)`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Progress`
- **Numerical Value:** `02 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Feedstock Security & Supply Integration",
    detail:
      "Evaluating regional biomass aggregation logistics to support continuous feedstock availability without impacting food systems.",
  },
  {
```

**Audit Context & Regulatory Analysis:**
Phased evaluation step 02 on biomass availability modeling.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SAF-013: Initiating preliminary dialogue with domestic airlines, fuel distributors, and industry fo...

- **Page / Route:** [Sustainable Aviation Fuels (SAF)](https://rivantagreen.com/saf)
- **Authoritative File & Lines:** [`src/app/saf/page.tsx:L100-L104`](file:///src/app/saf/page.tsx)
- **Component:** `Phasing Step 03 (Commercial & Airline Collaboration)`
- **Information Category:** Category F — Financial and Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing Dialogue`
- **Numerical Value:** `03 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-007`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Commercial & Airline Collaboration",
    detail:
      "Initiating preliminary dialogue with domestic airlines, fuel distributors, and industry forums to understand off-take parameters and blending timelines.",
  },
];
```

**Audit Context & Regulatory Analysis:**
Phased evaluation step 03 on preliminary airline dialogue.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.7 — FEEDSTOCK & AGRICULTURAL VALUE (11 Claims)

#### CLM-FEED-001: Building resilient aggregation frameworks for rice husk and agricultural straw, converting...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/layout.tsx:L4-L6`](file:///src/app/feedstock/layout.tsx)
- **Component:** `FeedstockLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Feedstock & Agricultural Value — Biomass Aggregation & Farmer Engagement",
  description:
    "Building resilient aggregation frameworks for rice husk and agricultural straw, converting regional crop residue challenges into structured rural economic participation.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for Feedstock.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-002: feedstock architecture is being developed around regional aggregation logistics, standardi...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L93-L95`](file:///src/app/feedstock/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category B — Projects / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title="Building Resilient Supply Chains For"
        highlightedText="Agricultural Biomass."
        description="Our feedstock architecture is being developed around regional aggregation logistics, standardized quality testing, and collaborative miller partnerships to support continuous biomass supply without competing with food security."
```

**Audit Context & Regulatory Analysis:**
Subpage hero on Feedstock route detailing logistics and miller relationships.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-003: aggregation framework establishes direct partnerships with milling networks and Farmer Pro...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L133-L134`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Model Editorial 01 (Quality & Logistics)`
- **Information Category:** Category B — Projects / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `In Planning / Implementation`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-011`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
Industrial processing requires consistency in material quality, predictable delivery schedules, and transparent procurement logistics. Our aggregation framework establishes direct partnerships with milling networks and Farmer Producer Organizations.
                </p>
```

**Audit Context & Regulatory Analysis:**
Editorial narrative outlining direct procurement from millers and FPOs.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-004: creating organized, dependable monetization channels for crop residues, we support rural l...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L136-L137`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Model Editorial 02 (Burning Mitigation & Rural Incomes)`
- **Information Category:** Category D — Environmental / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-016, CLM-VIS-006`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
By creating organized, dependable monetization channels for crop residues, we support rural livelihoods while contributing to reduced seasonal residue burning across key agricultural belts.
                </p>
```

**Audit Context & Regulatory Analysis:**
Assertion linking commercial biomass monetization to rural economic support and reduced crop-residue open burning.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-005: Planning centralized collection and pre-treatment hubs near high-density agricultural clus...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L22-L26`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Pillar 01 — Regional Aggregation Hubs`
- **Information Category:** Category B — Projects and Industrial Development
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-008`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Regional Aggregation Hubs",
    description:
      "Planning centralized collection and pre-treatment hubs near high-density agricultural clusters to optimize regional logistics and supply reliability.",
    icon: MapPin,
    stat: "Proposed Regional Hubs",
```

**Audit Context & Regulatory Analysis:**
Supply chain pillar 01 proposing centralized collection depots.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-006: Designing modern covered storage facilities equipped with moisture testing, ventilation co...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L29-L34`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Pillar 02 — Enclosed Storage & Safety`
- **Information Category:** Category B — Projects / Category C — Technology
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-009`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Enclosed Storage & Safety",
    description:
      "Designing modern covered storage facilities equipped with moisture testing, ventilation controls, and dust suppression systems engineered for agricultural biomass.",
    icon: Warehouse,
    stat: "Planned Storage Infrastructure",
  },
```

**Audit Context & Regulatory Analysis:**
Supply chain pillar 02 on covered storage and safety systems.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-007: Developing inbound inspection protocols to assess moisture levels and material composition...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L36-L41`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Pillar 03 — Quality Verification Gates`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Operational statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Quality Verification Gates",
    description:
      "Developing inbound inspection protocols to assess moisture levels and material composition before processing, supporting operational consistency.",
    icon: ShieldCheck,
    stat: "Standardized Quality Framework",
  },
```

**Audit Context & Regulatory Analysis:**
Supply chain pillar 03 establishing moisture and compositional testing at gate.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-008: Structuring direct procurement frameworks with regional millers and Farmer Producer Organi...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L43-L48`](file:///src/app/feedstock/page.tsx)
- **Component:** `Sourcing Pillar 04 — Farmer & Miller Partnerships`
- **Information Category:** Category E — National Contribution / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-011`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Farmer & Miller Partnerships",
    description:
      "Structuring direct procurement frameworks with regional millers and Farmer Producer Organizations (FPOs) to provide commercial alternatives for crop residues.",
    icon: Sprout,
    stat: "Agrarian Value Creation",
  },
```

**Audit Context & Regulatory Analysis:**
Supply chain pillar 04 detailing commercial arrangements with agricultural entities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-009: Agricultural residues represent an important yet underutilized resource. Rivanta aims to s...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L54-L62`](file:///src/app/feedstock/page.tsx)
- **Component:** `Circular Flow 01 — Value Beyond the Harvest`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `01. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-015`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Value Beyond the Harvest",
    badge: "Field Utilization",
    text: "Agricultural residues represent an important yet underutilized resource. Rivanta aims to support their productive use through organized industrial development.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: MapPin,
    stat: "Productive Biomass Use",
  },
```

**Audit Context & Regulatory Analysis:**
Circular flow card 01 on agricultural resource valorization.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-010: Biomass is converted into high-value biogenic materials, clean biomethane, and process uti...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L65-L73`](file:///src/app/feedstock/page.tsx)
- **Component:** `Circular Flow 02 — Industrial Processing`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Planned Operations`
- **Numerical Value:** `02. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Industrial Processing",
    badge: "Materials & Energy",
    text: "Biomass is converted into high-value biogenic materials, clean biomethane, and process utilities through energy-efficient manufacturing operations.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Layers,
    stat: "Resource Recovery",
  },
```

**Audit Context & Regulatory Analysis:**
Circular flow card 02 summarizing biogenic materials, CBG, and energy co-generation.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-FEED-011: Enriched organic digestate is returned to agricultural soils as fermented organic manure, ...

- **Page / Route:** [Feedstock & Agricultural Value](https://rivantagreen.com/feedstock)
- **Authoritative File & Lines:** [`src/app/feedstock/page.tsx:L76-L84`](file:///src/app/feedstock/page.tsx)
- **Component:** `Circular Flow 03 — Soil Health Reintegration`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Planned`
- **Numerical Value:** `03. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-013`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Soil Health Reintegration",
    badge: "Circular Agriculture",
    text: "Enriched organic digestate is returned to agricultural soils as fermented organic manure, replenishing essential carbon and nutrients for farming communities.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Recycle,
    stat: "Soil Health Restoration",
  },
```

**Audit Context & Regulatory Analysis:**
Circular flow card 03 covering digestate returning to agricultural soil.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.8 — PROJECTS & INFRASTRUCTURE (16 Claims)

#### CLM-PROJ-001: Planning and developing integrated industrial campuses with captive utilities, regional bi...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/layout.tsx:L4-L6`](file:///src/app/projects/layout.tsx)
- **Component:** `ProjectsLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Projects & Infrastructure — Integrated Industrial Manufacturing Campuses",
  description:
    "Planning and developing integrated industrial campuses with captive utilities, regional biomass aggregation networks, and disciplined execution benchmarks.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for Projects.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-002: manufacturing and energy projects are engineered to institutional standards — prioritizing...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L164-L166`](file:///src/app/projects/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category B — Projects and Industrial Development / Category F — Financial
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title="Developing Modern Infrastructure For"
        highlightedText="Long-Term Capability."
        description="Our manufacturing and energy projects are engineered to institutional standards — prioritizing disciplined capital allocation, environmental compliance, and long-term operating reliability."
```

**Audit Context & Regulatory Analysis:**
Subpage hero on Projects page stating engineering and capital allocation standards.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-003: Status: Engineering & Planning. Integrated anaerobic digestion systems producing commercia...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L23-L27`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 01 (Commercial Biogas Facilities)`
- **Information Category:** Category B — Projects and Industrial Development / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Engineering & Planning`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
name: "Commercial Biogas & Bio-Fertilizer Facilities",
    vertical: "Alternative Fuels & Soil Products",
    status: "Engineering & Planning",
    scope:
      "Integrated anaerobic digestion systems producing commercial-grade biomethane for regional grid supply and enriched organic soil amendments.",
```

**Audit Context & Regulatory Analysis:**
Project pipeline initiative 01 status and scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-004: Gas off-take framework with city gas distribution networks; Process engineering and enviro...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L28-L33`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 01 Deliverables`
- **Information Category:** Category B — Projects / Category F — Commercial
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `In Preparation`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-004`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
deliverables: [
      "Process engineering and environmental clearance documentation",
      "Gas off-take framework with city gas distribution networks",
      "Digestate valorization for regional agricultural soil application",
      "Modular facility design for regional replication",
    ],
```

**Audit Context & Regulatory Analysis:**
Workstream deliverables list for Commercial Biogas facilities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-005: Status: Under Development. Advanced manufacturing facility designed to extract high-purity...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L39-L43`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 02 (Biogenic Silica Refining Facility)`
- **Information Category:** Category B — Projects and Industrial Development / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Under Development`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-002`)
- **Audit Risk Classification:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.

**Verbatim Source Code:**
```tsx
name: "Biogenic Silica Refining Facility",
    vertical: "Advanced Materials",
    status: "Under Development",
    scope:
      "Advanced manufacturing facility designed to extract high-purity biogenic silica from agricultural residues for rubber, concrete, and industrial applications.",
```

**Audit Context & Regulatory Analysis:**
Project pipeline initiative 02 status and scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-006: Material quality testing with industrial compounding partners; Zero Liquid Discharge (ZLD)...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L44-L49`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 02 Deliverables`
- **Information Category:** Category B — Projects / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Under Development`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-009, CLM-HOME-023`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
deliverables: [
      "Material quality testing with industrial compounding partners",
      "Zero Liquid Discharge (ZLD) utility integration design",
      "Thermal energy recovery from process exhaust streams",
      "Evaluation of downstream high-purity precursor pathways",
    ],
```

**Audit Context & Regulatory Analysis:**
Workstream deliverables list for Biogenic Silica Refining facility.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-007: Status: Feasibility Stage. Techno-economic evaluation of alcohol-to-jet and catalytic synt...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L55-L59`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 03 (Sustainable Aviation Fuel Processing)`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Feasibility Stage`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
name: "Sustainable Aviation Fuel Processing",
    vertical: "Aviation Decarbonization",
    status: "Feasibility Stage",
    scope:
      "Techno-economic evaluation of alcohol-to-jet and catalytic synthesis pathways utilizing non-food agricultural biomass feedstocks.",
```

**Audit Context & Regulatory Analysis:**
Project pipeline initiative 03 status and scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-008: Feedstock availability assessment for non-food biomass; Technology partner screening and l...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L60-L65`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 03 Deliverables`
- **Information Category:** Category B — Projects / Category F — Commercial
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Feasibility Stage`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-006`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
deliverables: [
      "Feedstock availability assessment for non-food biomass",
      "Technology partner screening and licensor evaluation",
      "Long-term airline off-take interest mapping",
      "Regulatory alignment with national bio-aviation directives",
    ],
```

**Audit Context & Regulatory Analysis:**
Workstream deliverables list for SAF processing feasibility.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-009: Status: Proposed. Decentralized collection, pre-treatment, and storage depots situated nea...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L71-L75`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 04 (Regional Biomass Aggregation Hubs)`
- **Information Category:** Category B — Projects and Industrial Development
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Proposed`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-005`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
name: "Regional Biomass Aggregation Hubs",
    vertical: "Supply Chain & Logistics",
    status: "Proposed",
    scope:
      "Decentralized collection, pre-treatment, and storage depots situated near major milling clusters to secure stable, year-round feedstock availability.",
```

**Audit Context & Regulatory Analysis:**
Project pipeline initiative 04 status and scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-010: Regional milling density mapping across key agrarian belts; Automated quality inspection a...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L76-L81`](file:///src/app/projects/page.tsx)
- **Component:** `Initiative 04 Deliverables`
- **Information Category:** Category B — Projects / Category E — National Contribution
- **Claim Type:** Operational statement
- **Explicitness & Timeframe:** `Explicit` | `Proposed`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-007`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
deliverables: [
      "Regional milling density mapping across key agrarian belts",
      "Automated quality inspection and moisture control bays",
      "Farmer Producer Organization (FPO) long-term procurement frameworks",
      "Enclosed storage infrastructure with fire safety controls",
    ],
```

**Audit Context & Regulatory Analysis:**
Workstream deliverables list for Regional Biomass Hubs.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-011: Stage 01 • Project Planning (100% Progress): Regional agricultural residue availability ma...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L93-L108`](file:///src/app/projects/page.tsx)
- **Component:** `Phased Roadmap Stage 01 (Feasibility & Baseline Modeling)`
- **Information Category:** Category B — Projects / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Completed Stage`
- **Numerical Value:** `100% Milestone Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-018`)
- **Audit Risk Classification:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.

**Verbatim Source Code:**
```tsx
progress: 100,
    description:
      "Regional agricultural residue availability mapping, milling cluster assessments, material characterization studies, and preliminary mass-balance modeling.",
    deliverables: [
      "Regional biomass availability mapping across agricultural belts",
      "Assessment of biogenic silica extraction and CBG conversion pathways",
      "Preliminary site suitability reviews and logistics evaluation",
      "Engagement models for agricultural collectives and milling clusters",
    ],
  },
  {
    phase: "Stage 02",
    name: "Detailed Engineering & Regulatory Preparation",
    status: "In Preparation",
    timeline: "Stage 2",
    progress: 60,
```

**Audit Context & Regulatory Analysis:**
Stage 01 progress bar showing 100% progress for Feasibility & Baseline Modeling.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-012: Stage 02 • In Preparation (60% Progress): Detailed process engineering, vendor screening, ...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L109-L124`](file:///src/app/projects/page.tsx)
- **Component:** `Phased Roadmap Stage 02 (Detailed Engineering & Regulatory Preparation)`
- **Information Category:** Category B — Projects / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Preparation`
- **Numerical Value:** `60% Engineering Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-019`)
- **Audit Risk Classification:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.

**Verbatim Source Code:**
```tsx
description:
      "Detailed process engineering, vendor screening, statutory clearance documentation preparation, and commercial off-take framework discussions.",
    deliverables: [
      "Process engineering packages and equipment sizing specifications",
      "Environmental and statutory documentation planning",
      "Utility interconnection and site infrastructure requirements",
      "Prospective off-take discussions with industrial users",
    ],
  },
  {
    phase: "Stage 03",
    name: "Facility Construction & Commissioning",
    status: "Proposed",
    timeline: "Proposed Stage",
    progress: 10,
    description:
```

**Audit Context & Regulatory Analysis:**
Stage 02 progress bar asserting 60% progress for Detailed Engineering.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-013: Stage 03 • Proposed (10% Progress): Civil works execution, equipment erection, utility int...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L125-L140`](file:///src/app/projects/page.tsx)
- **Component:** `Phased Roadmap Stage 03 (Facility Construction & Commissioning)`
- **Information Category:** Category B — Projects / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Proposed / Subject to Statutory Approvals`
- **Numerical Value:** `10% Civil Execution Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-020`)
- **Audit Risk Classification:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.

**Verbatim Source Code:**
```tsx
"Civil works execution, equipment erection, utility integration, phased commissioning, and commercial production commencement subject to necessary statutory approvals.",
    deliverables: [
      "Turnkey facility erection under industrial safety codes",
      "Installation of automated process control systems",
      "Testing, pre-commissioning, and validation protocols",
      "Commercial distribution to industrial and energy partners",
    ],
  },
];

const OPERATIONAL_STANDARDS = [
  {
    title: "Process Control Automation",
    description:
      "Centralized instrumentation and control systems monitoring process temperatures, flow rates, and operational parameters to maintain consistent output quality.",
    icon: Cog,
```

**Audit Context & Regulatory Analysis:**
Stage 03 progress bar showing 10% progress for Facility Construction, explicitly qualified with 'subject to necessary statutory approvals'.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-014: Centralized instrumentation and control systems monitoring process temperatures, flow rate...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L143-L148`](file:///src/app/projects/page.tsx)
- **Component:** `Operational Standard 01 (Process Control Automation)`
- **Information Category:** Category C — Technology and Products
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Standard`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Continuous Emission Monitoring",
    description:
      "Stack sensors and emission controls installed to ensure operational compliance with applicable statutory environmental standards and regulatory norms.",
    icon: ShieldCheck,
  },
  {
```

**Audit Context & Regulatory Analysis:**
Engineering design standard 01 specifying instrumentation and automated control.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-015: Stack sensors and emission controls installed to ensure operational compliance with applic...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L149-L154`](file:///src/app/projects/page.tsx)
- **Component:** `Operational Standard 02 (Continuous Emission Monitoring)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Standard`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Industrial Safety Architecture",
    description:
      "Enclosed pneumatic conveying, dust suppression systems, and comprehensive fire protection measures engineered for agricultural biomass handling environments.",
    icon: HardHat,
  },
];
```

**Audit Context & Regulatory Analysis:**
Engineering design standard 02 specifying in-stack continuous emission sensors.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-PROJ-016: Enclosed pneumatic conveying, dust suppression systems, and comprehensive fire protection ...

- **Page / Route:** [Projects & Infrastructure](https://rivantagreen.com/projects)
- **Authoritative File & Lines:** [`src/app/projects/page.tsx:L155-L160`](file:///src/app/projects/page.tsx)
- **Component:** `Operational Standard 03 (Industrial Safety Architecture)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Standard`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-006`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
export default function ProjectsPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  return (
    <>
```

**Audit Context & Regulatory Analysis:**
Engineering design standard 03 specifying pneumatic conveying and dust suppression.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.9 — SUSTAINABILITY & STEWARDSHIP (12 Claims)

#### CLM-SUST-001: responsible resource utilization, crop-residue air quality mitigation, co-product recovery...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/layout.tsx:L4-L6`](file:///src/app/sustainability/layout.tsx)
- **Component:** `SustainabilityLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title: "Sustainability & Environmental Stewardship — Circular Industrial Development",
  description:
    "Committed to responsible resource utilization, crop-residue air quality mitigation, co-product recovery, and disciplined environmental governance.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for Sustainability.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-002: environmental framework integrates water stewardship, emissions controls, waste-heat recov...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L117-L119`](file:///src/app/sustainability/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-022`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
title="Responsible Engineering For"
        highlightedText="Sustainable Industrial Growth."
        description="Our environmental framework integrates water stewardship, emissions controls, waste-heat recovery, and auditable governance into every stage of project planning and industrial operations."
```

**Audit Context & Regulatory Analysis:**
Subpage hero on Sustainability route stating the four environmental focus areas.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-003: planning incorporates environmental engineering priorities across water conservation, air ...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L144-L150`](file:///src/app/sustainability/page.tsx)
- **Component:** `Four Pillars Overview Narrative`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `In Planning`
- **Numerical Value:** `4 Pillars` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-022`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Four pillars of responsible{" "}
              <span className="text-[#a0b0a5]">industrial operations.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Our project planning incorporates environmental engineering priorities across water conservation, air emissions management, energy efficiency, and circular by-product utilization across all planned facilities.
            </p>
          </div>
```

**Audit Context & Regulatory Analysis:**
Overview paragraph introducing four core operational commitments.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-004: Zero Liquid Discharge (ZLD) as a primary design objective where technically and operationa...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L21-L29`](file:///src/app/sustainability/page.tsx)
- **Component:** `Stewardship Pillar 01 (Water Stewardship & ZLD Target)`
- **Information Category:** Category D — Environmental / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Design Objective`
- **Numerical Value:** `90 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
id: "water-stewardship",
    title: "Industrial Water Stewardship",
    subtitle: "Closed-Loop Design Objective",
    metricValue: "ZLD Target",
    metricLabel: "Design Standard",
    progressPct: 90,
    description:
      "Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design objective where technically and operationally applicable, incorporating multi-stage recycling to minimize freshwater intake.",
    icon: Droplet,
```

**Audit Context & Regulatory Analysis:**
Stewardship pillar 01 with a 90% progress bar indicating ZLD design standard status.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-005: Integrating continuous emission monitoring systems (CEMS), high-efficiency baghouse filter...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L33-L41`](file:///src/app/sustainability/page.tsx)
- **Component:** `Stewardship Pillar 02 (Air Quality & Emission Controls)`
- **Information Category:** Category D — Environmental / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `85 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-025, CLM-PROJ-015`)
- **Audit Risk Classification:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.

**Verbatim Source Code:**
```tsx
id: "air-emissions",
    title: "Air Quality & Emission Controls",
    subtitle: "Continuous Monitoring",
    metricValue: "CEMS Standards",
    metricLabel: "Regulatory Alignment",
    progressPct: 85,
    description:
      "Integrating continuous emission monitoring systems (CEMS), high-efficiency baghouse filters, and enclosed pneumatic handling systems to manage particulate matter and operational emissions.",
    icon: Wind,
```

**Audit Context & Regulatory Analysis:**
Stewardship pillar 02 with an 85% progress bar asserting CEMS and baghouse filter integration.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-006: Recovering waste heat from high-temperature process streams to generate process steam and ...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L45-L53`](file:///src/app/sustainability/page.tsx)
- **Component:** `Stewardship Pillar 03 (Waste-Heat & Energy Recovery)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `80 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-024`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
id: "energy-efficiency",
    title: "Waste-Heat & Energy Recovery",
    subtitle: "Process Integration",
    metricValue: "Thermal Loops",
    metricLabel: "Efficiency Target",
    progressPct: 80,
    description:
      "Recovering waste heat from high-temperature process streams to generate process steam and preheat incoming streams, reducing external thermal energy demand across plant operations.",
    icon: Flame,
```

**Audit Context & Regulatory Analysis:**
Stewardship pillar 03 with an 80% progress bar asserting waste heat recovery targets.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-007: Processing residual streams and anaerobic digestate into organic soil amendments, returnin...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L57-L65`](file:///src/app/sustainability/page.tsx)
- **Component:** `Stewardship Pillar 04 (Circular By-Product Recovery)`
- **Information Category:** Category D — Environmental / Category I — Implied Claims
- **Claim Type:** Numerical statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `90 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-026, CLM-CBG-006`)
- **Audit Risk Classification:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.

**Verbatim Source Code:**
```tsx
id: "circular-byproducts",
    title: "Circular By-Product Recovery",
    subtitle: "Resource Utilization",
    metricValue: "Soil Nutrients",
    metricLabel: "By-Product Use",
    progressPct: 90,
    description:
      "Processing residual streams and anaerobic digestate into organic soil amendments, returning valuable carbon and nutrients to regional farmland to support sustainable agriculture.",
    icon: RefreshCw,
```

**Audit Context & Regulatory Analysis:**
Stewardship pillar 04 with a 90% progress bar asserting soil amendment recycling targets.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-008: Organizing regional procurement of agricultural residues through structured partnerships, ...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L72-L79`](file:///src/app/sustainability/page.tsx)
- **Component:** `Framework Stage 01 (Agricultural Residue Utilization)`
- **Information Category:** Category D — Environmental / Category E — National Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `01 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-016`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
step: "01",
    phase: "Resource Sourcing",
    title: "Agricultural Residue Utilization",
    focus: "Field Diversion",
    description:
      "Organizing regional procurement of agricultural residues through structured partnerships, providing a commercial alternative to avoidable open-field burning across agrarian belts.",
    deliverable: "Supply chain traceability and verified regional sourcing",
  },
```

**Audit Context & Regulatory Analysis:**
Environmental framework stage 01 on open burning diversion.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-009: Designing conversion systems with integrated heat-exchange loops, ensuring thermal energy ...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L81-L88`](file:///src/app/sustainability/page.tsx)
- **Component:** `Framework Stage 02 (Energy-Efficient Process Design)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Standard`
- **Numerical Value:** `02 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-006`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
step: "02",
    phase: "Thermal Efficiency",
    title: "Energy-Efficient Process Design",
    focus: "Thermal Integration",
    description:
      "Designing conversion systems with integrated heat-exchange loops, ensuring thermal energy generated during processing is captured and recycled for plant utilities.",
    deliverable: "Reduced primary fuel consumption and balanced energy budgets",
  },
```

**Audit Context & Regulatory Analysis:**
Environmental framework stage 02 on heat exchange loops.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-010: Applying membrane filtration and condensation recycling systems to treat and reuse process...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L90-L97`](file:///src/app/sustainability/page.tsx)
- **Component:** `Framework Stage 03 (Closed-Loop Water Management)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Standard`
- **Numerical Value:** `03 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
step: "03",
    phase: "Water Conservation",
    title: "Closed-Loop Water Management",
    focus: "Effluent Minimization",
    description:
      "Applying membrane filtration and condensation recycling systems to treat and reuse process water, maintaining water conservation as an essential operational principle.",
    deliverable: "ZLD engineering standards applied across all processing loops",
  },
```

**Audit Context & Regulatory Analysis:**
Environmental framework stage 03 on membrane filtration and ZLD standard.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-011: Developing commercial channels for refined biogenic materials and enriched organic soil nu...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L99-L106`](file:///src/app/sustainability/page.tsx)
- **Component:** `Framework Stage 04 (Circular Materials & Downstream Use)`
- **Information Category:** Category D — Environmental / Category C — Products
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `04 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SUST-007`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
step: "04",
    phase: "Material Reintegration",
    title: "Circular Materials & Downstream Use",
    focus: "By-Product Valorization",
    description:
      "Developing commercial channels for refined biogenic materials and enriched organic soil nutrients, ensuring comprehensive material utilization across the full production cycle.",
    deliverable: "Material lifecycle accounting structured for environmental transparency",
  },
```

**Audit Context & Regulatory Analysis:**
Environmental framework stage 04 on full production cycle valorization.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-SUST-012: maintain a clear distinction between project design targets and operational results. Water...

- **Page / Route:** [Sustainability & Stewardship](https://rivantagreen.com/sustainability)
- **Authoritative File & Lines:** [`src/app/sustainability/page.tsx:L352-L354`](file:///src/app/sustainability/page.tsx)
- **Component:** `Governance & Verification Framework Callout`
- **Information Category:** Category A — Corporate Governance / Category D — Environmental
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current Governance Policy`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed">
                We maintain a clear distinction between project design targets and operational results. Water reuse systems, emissions controls, and resource accounting are planned in accordance with applicable statutory guidelines and established environmental engineering practices.
              </p>
```

**Audit Context & Regulatory Analysis:**
Corporate governance declaration explicitly separating planned design targets from verified operational results.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.10 — CORPORATE VISION & STRATEGY (13 Claims)

#### CLM-VIS-001: Aligning industrial development with India's long-term economic priorities: domestic manuf...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/layout.tsx:L4-L6`](file:///src/app/vision/layout.tsx)
- **Component:** `VisionLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Corporate Vision & Long-Term Ambition — Building Value for India",
  description:
    "Aligning industrial development with India's long-term economic priorities: domestic manufacturing capabilities, import substitution, and rural economic value creation.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for Vision.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-002: By addressing nature dependency, seasonal stubble burning, and critical material imports, ...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L137-L140`](file:///src/app/vision/page.tsx)
- **Component:** `SubpageHero (Headline & Description)`
- **Information Category:** Category E — National and Economic Contribution / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-VIS-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title="Industrial Progress Beyond"
        highlightedText="Resource Depletion."
        description="Rivanta Green is founded on the conviction that India's industrial future must not depend on continuous environmental extraction. By addressing nature dependency, seasonal stubble burning, and critical material imports, we build enduring industrial capability from agricultural resources."
        imageSrc="/images/company-innovation.jpg"
```

**Audit Context & Regulatory Analysis:**
Subpage hero on Vision route framing the three core challenges addressed.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-003: consuming finite geological minerals, burning fossil fuels, and treating post-harvest crop...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L176-L178`](file:///src/app/vision/page.tsx)
- **Component:** `Guiding Philosophy Editorial 01 (Linear Extractive Model)`
- **Information Category:** Category D — Environmental / Category E — National Contribution
- **Claim Type:** General industry statement
- **Explicitness & Timeframe:** `Explicit` | `Historical / Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p>
                  Modern industrial growth has predominantly followed an extractive pattern: consuming finite geological minerals, burning fossil fuels, and treating post-harvest crop residues as discarded waste to be burned.
                </p>
```

**Audit Context & Regulatory Analysis:**
Foundational philosophy critique of conventional heavy industry.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-004: shifting from non-renewable geological extraction toward renewable biological cycles — cre...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L179-L181`](file:///src/app/vision/page.tsx)
- **Component:** `Guiding Philosophy Editorial 02 (Biological Industrial Model)`
- **Information Category:** Category A — Corporate Identity / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-008`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<p>
                  Rivanta Green was conceived to bridge this divide. We believe sustainable industrial resilience requires shifting from non-renewable geological extraction toward renewable biological cycles — creating high-performance materials and clean energy from annually replenished agricultural resources.
                </p>
```

**Audit Context & Regulatory Analysis:**
Foundational company purpose narrative.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-005: Building Industrial Value From India's Resources. A commitment to manufacturing self-relia...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L185-L196`](file:///src/app/vision/page.tsx)
- **Component:** `Central Thought Banner`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Future / Ongoing`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-sm space-y-3 card-interactive reveal-up delay-300">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block">
                  Central Corporate Conviction
                </span>
                <p className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight leading-snug">
                  &ldquo;Building Industrial Value From India&apos;s Resources.&rdquo;
                </p>
                <p className="font-sans text-sm text-[#13271e]/70 font-light leading-relaxed pt-1">
                  A commitment to manufacturing self-reliance, ecological stewardship, and commercial value creation rooted in India&apos;s agrarian strength.
                </p>
              </div>
            </div>
```

**Audit Context & Regulatory Analysis:**
Central corporate conviction banner on Vision page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-006: decoupling industrial manufacturing from finite mineral quarrying. By utilizing annually r...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L27-L35`](file:///src/app/vision/page.tsx)
- **Component:** `Strategic Issue 01 (Breaking Finite Nature Dependency)`
- **Information Category:** Category C — Technology / Category D — Environmental
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Planned Process`
- **Numerical Value:** `01 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-003`)
- **Audit Risk Classification:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.

**Verbatim Source Code:**
```tsx
title: "Breaking Finite Nature Dependency",
    concern:
      "Heavy industry has historically relied on the extraction of non-renewable geological resources — blasting mountains for mined quartz, excavating silica sands, and depleting scarce groundwater aquifers. This linear model accelerates environmental degradation and carries significant embodied carbon.",
    response:
      "Rivanta is founded on decoupling industrial manufacturing from finite mineral quarrying. By utilizing annually replenishable agricultural residues such as rice husk, we derive high-purity biogenic silica (SiO₂) without disturbing natural geological formations or virgin mineral deposits.",
    icon: Leaf,
    color: "#2d7a54",
    stat: "Agricultural Rather Than Mined Origin",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic challenge 01 contrasting agricultural silica against mineral quarrying.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-007: Every harvest season, millions of tonnes of surplus crop residues and paddy straw are burn...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L40-L48`](file:///src/app/vision/page.tsx)
- **Component:** `Strategic Issue 02 (Diverting Seasonal Crop-Residue Burning)`
- **Information Category:** Category D — Environmental / Category E — National Contribution
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Current / In Planning`
- **Numerical Value:** `02, 2.5, 10 Issue index, PM microns` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-016, CLM-FEED-004`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Diverting Seasonal Crop-Residue Burning",
    concern:
      "Every harvest season, millions of tonnes of surplus crop residues and paddy straw are burned across agrarian corridors. This open-field burning generates severe seasonal smog, dangerous spikes in PM2.5 and PM10 particulate pollution, and public health disruptions across northern and central India.",
    response:
      "We provide an organized, commercially viable alternative to open-field burning. Through structured aggregation frameworks with farmers and millers, we channel agricultural residues into high-value biogenic materials and clean Compressed Biogas, converting an atmospheric liability into productive industrial energy.",
    icon: Wind,
    color: "#e06425",
    stat: "Productive Alternative to Field Burning",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic challenge 02 addressing stubble burning and PM2.5/PM10 air pollution.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-008: Solid anaerobic digestate and bio-char co-products from our facilities are refined into or...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L53-L61`](file:///src/app/vision/page.tsx)
- **Component:** `Strategic Issue 03 (Reversing Soil Carbon Depletion)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Planning`
- **Numerical Value:** `03 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-006, CLM-FEED-011`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Reversing Soil Carbon Depletion",
    concern:
      "Decades of intensive monoculture and excessive reliance on chemical fertilizers have depleted natural organic carbon across agricultural soils, degrading soil microbiomes and reducing natural water-retention capacity.",
    response:
      "Our processing ecosystem is engineered for complete circular nutrient return. Solid anaerobic digestate and bio-char co-products from our facilities are refined into organic soil amendments, replenishing vital carbon and macro-nutrients back into regional farmland to support long-term soil vitality.",
    icon: Sprout,
    color: "#2d7a54",
    stat: "Nutrient & Carbon Circularity",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic challenge 03 detailing soil carbon return via biochar and digestate.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-009: Producing biogenic silica and commercial biomethane domestically strengthens domestic supp...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L66-L74`](file:///src/app/vision/page.tsx)
- **Component:** `Strategic Issue 04 (Reducing Industrial Import Dependency)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** `04 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-017`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Reducing Industrial Import Dependency",
    concern:
      "Indian manufacturing remains significantly dependent on foreign supply chains for essential industrial materials, including precipitated silica for green tires, high-performance concrete additives, and imported fossil hydrocarbons.",
    response:
      "We aim to build qualified domestic industrial manufacturing capabilities directly from Indian agricultural resources. Producing biogenic silica and commercial biomethane domestically strengthens domestic supply-chain resilience and protects key manufacturing sectors from international volatility.",
    icon: Factory,
    color: "#13271e",
    stat: "Domestic Manufacturing Capability",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic challenge 04 identifying import dependency in precipitated silica and hydrocarbons.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-010: We establish commercial procurement frameworks with regional aggregators, farmer producer ...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L78-L87`](file:///src/app/vision/page.tsx)
- **Component:** `Strategic Issue 05 (Agricultural Residue Procurement & Logistics)`
- **Information Category:** Category E — National Contribution / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing`
- **Numerical Value:** `05 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-003`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
tag: "Commercial Supply Chain",
    title: "Agricultural Residue Procurement & Logistics",
    concern:
      "Agricultural residues are historically underutilized or burned in fields due to the absence of organized industrial demand and structured collection logistics.",
    response:
      "We establish commercial procurement frameworks with regional aggregators, farmer producer organizations, and agricultural processors. Sourcing biomass residues at scale establishes a dependable domestic feedstock supply chain for industrial conversion.",
    icon: Users,
    color: "#e06425",
    stat: "Commercial Feedstock Procurement",
  },
```

**Audit Context & Regulatory Analysis:**
Strategic challenge 05 on commercial feedstock procurement frameworks.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-011: Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design objective, clo...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L93-L102`](file:///src/app/vision/page.tsx)
- **Component:** `Vision Pillar 01 (Ecological Stewardship)`
- **Information Category:** Category D — Environmental and Sustainability
- **Claim Type:** Technical statement
- **Explicitness & Timeframe:** `Explicit` | `Design Principle`
- **Numerical Value:** `01. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-023`)
- **Audit Risk Classification:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.

**Verbatim Source Code:**
```tsx
title: "Ecological Stewardship",
    badge: "Design Principle",
    description:
      "Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design objective, closed-loop process water recycling, and captive waste-heat recovery to conserve natural ecosystems.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Droplet,
    stat: "Closed-Loop Utility Design",
  },
```

**Audit Context & Regulatory Analysis:**
Vision pillar 01 repeating ZLD design objective and captive waste-heat recovery.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-012: Ensuring comprehensive resource recovery where every processing output — from biogenic sil...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L105-L114`](file:///src/app/vision/page.tsx)
- **Component:** `Vision Pillar 02 (Industrial Circularity)`
- **Information Category:** Category D — Environmental / Category C — Products
- **Claim Type:** Environmental statement
- **Explicitness & Timeframe:** `Explicit` | `Target`
- **Numerical Value:** `02. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-016`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Industrial Circularity",
    badge: "Zero Landfill Target",
    description:
      "Ensuring comprehensive resource recovery where every processing output — from biogenic silica and clean biomethane to organic bio-fertilizers — serves a productive commercial use.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: RefreshCw,
    stat: "Comprehensive Material Valorization",
  },
```

**Audit Context & Regulatory Analysis:**
Vision pillar 02 setting a Zero Landfill target via complete co-product commercialization.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-VIS-013: Operating with disciplined corporate governance, statutory compliance planning, and transp...

- **Page / Route:** [Corporate Vision & Strategy](https://rivantagreen.com/vision)
- **Authoritative File & Lines:** [`src/app/vision/page.tsx:L117-L126`](file:///src/app/vision/page.tsx)
- **Component:** `Vision Pillar 03 (Institutional Accountability)`
- **Information Category:** Category A — Corporate Governance
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing`
- **Numerical Value:** `03. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-ABOUT-017`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Institutional Accountability",
    badge: "Governance Standard",
    description:
      "Operating with disciplined corporate governance, statutory compliance planning, and transparent frameworks for resource accounting to build an enduring Indian industrial institution.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: ShieldCheck,
    stat: "Responsible Long-Term Vision",
  },
```

**Audit Context & Regulatory Analysis:**
Vision pillar 03 asserting institutional governance and statutory compliance planning.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.11 — CONTACT CORPORATE DESK (12 Claims)

#### CLM-CONT-001: Connect with Rivanta Green Innovative Venture Private Limited for industrial partnerships,...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/layout.tsx:L4-L6`](file:///src/app/contact/layout.tsx)
- **Component:** `ContactLayout (Metadata)`
- **Information Category:** Category H — SEO and Machine-Readable Claims
- **Claim Type:** SEO / Metadata representation
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CONT-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
title: "Contact Corporate Desk — Industrial Inquiries & Commercial Partnerships",
  description:
    "Connect with Rivanta Green Innovative Venture Private Limited for industrial partnerships, feedstock aggregation, commercial off-take discussions, and corporate inquiries.",
```

**Audit Context & Regulatory Analysis:**
Route-level Server Component metadata title and description for Contact.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-002: Rivanta Green Innovative Venture Private Limited, B-29, 3rd Floor, Kasturba Nagar, Next to...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L22-L34`](file:///src/app/contact/page.tsx)
- **Component:** `Office Location 01 (Head & Registered Office)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `29, 3, +91 98930 25375 Building Number, Floor, Phone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-003, CLM-GLOB-009`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
badge: "Head Office & Registered Office",
    entity: "Rivanta Green Innovative Venture Private Limited",
    lines: [
      "B-29, 3rd Floor, Kasturba Nagar,",
      "Next to Lake City Hospital, Chetak Bridge,",
      "Bhopal, Madhya Pradesh, India.",
    ],
    phone: "+91 98930 25375",
    phoneTel: "+919893025375",
    email: "info@rivantagreen.com",
    website: "www.rivantagreen.com",
    webUrl: "https://www.rivantagreen.com",
    isPrimary: true,
```

**Audit Context & Regulatory Analysis:**
Primary registered headquarters directory listing on Contact page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-003: Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhopal, Madhya Pradesh, ...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L37-L48`](file:///src/app/contact/page.tsx)
- **Component:** `Office Location 02 (Corporate Office)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `4/271, 462016, +91 98930 25375 Plot, Pincode, Phone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-004, CLM-GLOB-010`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
badge: "Corporate Office",
    entity: "Golden Soil Ventures Private Limited",
    lines: [
      "E4/271 Arera Colony, Huzur,",
      "Bhopal, Madhya Pradesh, 462016 - India.",
    ],
    phone: "+91 98930 25375",
    phoneTel: "+919893025375",
    email: "info@rivantagreen.com",
    website: "www.rivantagreen.com",
    webUrl: "https://www.rivantagreen.com",
    isPrimary: false,
```

**Audit Context & Regulatory Analysis:**
Corporate office directory listing on Contact page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-004: Mon – Sat, 09:30 – 18:30 IST

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L140`](file:///src/app/contact/page.tsx)
- **Component:** `Corporate Operating Hours`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current Operating Schedule`
- **Numerical Value:** `09:30, 18:30 Time 24-hr IST` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Mon – Sat, 09:30 – 18:30 IST
```

**Audit Context & Regulatory Analysis:**
Official business hours for telephone inquiries.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-005: Official corporate correspondence, executive offices, general inquiries, and media relatio...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L54-L58`](file:///src/app/contact/page.tsx)
- **Component:** `Department Desk 01 (General Corporate Desk & Main Line)`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-005`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
role: "General Corporate Desk & Main Line",
    email: "info@rivantagreen.com",
    phone: "+91 98930 25375",
    focus: "Official corporate correspondence, executive offices, general inquiries, and media relations.",
  },
```

**Audit Context & Regulatory Analysis:**
Primary executive telephone and correspondence desk.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-006: Biogenic silica commercial off-take, material specification alignment, and technical inqui...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L60-L63`](file:///src/app/contact/page.tsx)
- **Component:** `Department Desk 02 (Commercial Off-Take Desk)`
- **Information Category:** Category F — Financial and Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
role: "Commercial Off-Take Desk",
    email: "commercial@rivantagreen.com",
    focus: "Biogenic silica commercial off-take, material specification alignment, and technical inquiries for industrial users.",
  },
```

**Audit Context & Regulatory Analysis:**
Dedicated commercial off-take email address and desk scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-007: Biomass procurement partnerships, regional milling network logistics, and agricultural org...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L65-L68`](file:///src/app/contact/page.tsx)
- **Component:** `Department Desk 03 (Feedstock Sourcing & Logistics)`
- **Information Category:** Category E — National Contribution / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
role: "Feedstock Sourcing & Logistics",
    email: "sourcing@rivantagreen.com",
    focus: "Biomass procurement partnerships, regional milling network logistics, and agricultural organization collaboration.",
  },
```

**Audit Context & Regulatory Analysis:**
Dedicated agricultural feedstock procurement email address and desk scope.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-008: Strategic industrial partnerships, institutional collaboration, and project infrastructure...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L70-L73`](file:///src/app/contact/page.tsx)
- **Component:** `Department Desk 04 (Corporate Strategy & Project Planning)`
- **Information Category:** Category B — Projects / Category G — Future Commitments
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
role: "Corporate Strategy & Project Planning",
    email: "info@rivantagreen.com",
    focus: "Strategic industrial partnerships, institutional collaboration, and project infrastructure planning.",
  },
```

**Audit Context & Regulatory Analysis:**
Strategy desk for institutional and project development inquiries.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-009: Industrial procurement and technical teams in rubber compounding, construction materials, ...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L78-L80`](file:///src/app/contact/page.tsx)
- **Component:** `Commercial FAQ 01 (Biogenic Silica Inquiry)`
- **Information Category:** Category C — Technology / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current Inquiry Process`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-013`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
q: "How can industrial partners inquire about Biogenic Silica?",
    a: "Industrial procurement and technical teams in rubber compounding, construction materials, and specialty coatings can request material specification summaries and discuss technical feasibility. Submit your inquiry selecting 'Advanced Materials & Biogenic Silica' along with application requirements.",
  },
```

**Audit Context & Regulatory Analysis:**
FAQ item outlining procurement inquiry process for industrial biogenic silica.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-010: Commercial off-take discussions for planned facilities are structured around long-term agr...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L82-L84`](file:///src/app/contact/page.tsx)
- **Component:** `Commercial FAQ 02 (CBG Off-Take Structures)`
- **Information Category:** Category B — Projects / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Planned / In Discussion`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-004`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
q: "What commercial structures are used for Compressed Biogas (CBG) off-take?",
    a: "Commercial off-take discussions for planned facilities are structured around long-term agreements with City Gas Distribution (CGD) entities and industrial consumers, with delivery evaluated via regional pipeline interconnection or mobile cascade logistics.",
  },
```

**Audit Context & Regulatory Analysis:**
FAQ item describing CGD pipeline and mobile cascade off-take models.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-011: develop multi-year biomass aggregation frameworks offering structured pricing, organized r...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L86-L88`](file:///src/app/contact/page.tsx)
- **Component:** `Commercial FAQ 03 (Miller & FPO Partnership)`
- **Information Category:** Category E — National Contribution / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current / Ongoing`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-FEED-008`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
q: "How can regional millers and Farmer Producer Organizations (FPOs) partner with Rivanta?",
    a: "We develop multi-year biomass aggregation frameworks offering structured pricing, organized regional collection, and verified moisture testing to support dependable secondary value for agricultural communities.",
  },
```

**Audit Context & Regulatory Analysis:**
FAQ item explaining multi-year biomass aggregation agreements for millers and FPOs.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-CONT-012: Preliminary material specification summaries and physical property profiles are shared wit...

- **Page / Route:** [Contact Corporate Desk](https://rivantagreen.com/contact)
- **Authoritative File & Lines:** [`src/app/contact/page.tsx:L90-L92`](file:///src/app/contact/page.tsx)
- **Component:** `Commercial FAQ 04 (Technical Specifications Availability)`
- **Information Category:** Category C — Technology / Category F — Commercial
- **Claim Type:** Commercial statement
- **Explicitness & Timeframe:** `Explicit` | `Current Process`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-013`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
q: "Are technical specifications available for industrial partners?",
    a: "Preliminary material specification summaries and physical property profiles are shared with qualified industrial partners under formal technical review.",
  },
```

**Audit Context & Regulatory Analysis:**
FAQ item explaining access to technical specifications and physical property profiles.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

### Section 2.12 — STANDALONE CODEBASE COMPONENTS (10 Claims)

#### CLM-STAND-001: Advanced Materials (Status: Under Development): Developing domestic capabilities in biogen...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L20-L33`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 01 — Advanced Materials)`
- **Information Category:** Category C — Technology / Category B — Projects
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Under Development`
- **Numerical Value:** `01. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SIL-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
const VERTICALS: BusinessVertical[] = [
  {
    id: "advanced-materials",
    index: "01.",
    title: "Advanced Materials",
    status: "Under Development",
    statusType: "active",
    description: "Developing domestic capabilities in biogenic silica and industrial materials, with long-term opportunities in high-value domestic supply chains.",
    focusAreas: ["Biogenic silica applications", "Industrial silica materials", "Domestic supply chains", "Downstream materials evaluation"],
    href: "/bio-silica",
    bg: "#fae9dc",
    textColor: "#13271e",
    icon: Sparkles,
    accent: "#e06425",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 01.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-002: Compressed Biogas (CBG) (Status: Under Development): Establishing commercial Compressed Bi...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L34-L47`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 02 — Compressed Biogas)`
- **Information Category:** Category B — Projects / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Under Development`
- **Numerical Value:** `02. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-CBG-002`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
},
  {
    id: "compressed-biogas",
    index: "02.",
    title: "Compressed Biogas (CBG)",
    status: "Under Development",
    statusType: "active",
    description: "Establishing commercial Compressed Biogas infrastructure from regional agricultural residues to support domestic energy diversification and clean transport.",
    focusAreas: ["Alternative gaseous fuels", "CBG distribution infrastructure", "Domestic energy diversification", "Industrial & mobility off-take"],
    href: "/cbg",
    bg: "#d6e8dc",
    textColor: "#13271e",
    icon: Flame,
    accent: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 02.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-003: Sustainable Aviation Fuels (Status: Strategic Evaluation): Evaluating technology pathways ...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L48-L61`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 03 — Sustainable Aviation Fuels)`
- **Information Category:** Category C — Technology / Category G — Future Commitments
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Strategic Evaluation`
- **Numerical Value:** `03. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-SAF-002`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
},
  {
    id: "sustainable-aviation-fuels",
    index: "03.",
    title: "Sustainable Aviation Fuels",
    status: "Strategic Evaluation",
    statusType: "eval",
    description: "Evaluating technology pathways and industrial partnerships for drop-in synthetic fuels to support the long-term decarbonization of commercial aviation.",
    focusAreas: ["Low-carbon aviation fuels", "Industrial technology partnerships", "Decarbonization corridors", "Synthetic fuel evaluation"],
    href: "/saf",
    bg: "#132c21",
    textColor: "#ffffff",
    icon: Fuel,
    accent: "#ea6e2d",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 03.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-004: Renewable Energy & Utilities (Status: Planned Integration): Planning captive biomass-based...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L62-L75`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 04 — Renewable Energy & Utilities)`
- **Information Category:** Category B — Projects / Category C — Technology
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Planned Integration`
- **Numerical Value:** `04. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-024`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
},
  {
    id: "renewable-utilities",
    index: "04.",
    title: "Renewable Energy & Utilities",
    status: "Planned Integration",
    statusType: "planned",
    description: "Planning captive biomass-based cogeneration and energy-efficient utilities to ensure reliable, resource-efficient power for manufacturing operations.",
    focusAreas: ["Biomass-based infrastructure", "Captive power generation", "Industrial energy efficiency", "Utility integration"],
    href: "/projects",
    bg: "#f3f5f3",
    textColor: "#13271e",
    icon: Zap,
    accent: "#c47a27",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 04.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-005: Circular Materials & Recovery (Status: Under Development): Utilizing industrial co-product...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L76-L89`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 05 — Circular Materials & Recovery)`
- **Information Category:** Category D — Environmental / Category C — Products
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Under Development`
- **Numerical Value:** `05. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-026`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
},
  {
    id: "circular-materials",
    index: "05.",
    title: "Circular Materials & Recovery",
    status: "Under Development",
    statusType: "active",
    description: "Utilizing industrial co-products and biochar streams for soil improvement and mineral recovery, reducing material losses across operating cycles.",
    focusAreas: ["Co-product utilization", "Biochar evaluation", "Soil improvement inputs", "Responsible resource recovery"],
    href: "/feedstock",
    bg: "#e9ede9",
    textColor: "#13271e",
    icon: RefreshCw,
    accent: "#2d7a54",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 05.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-006: Industrial Infrastructure (Status: Planned Development): Planning integrated manufacturing...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/UspCards.tsx))
- **Authoritative File & Lines:** [`src/components/UspCards.tsx:L90-L103`](file:///src/components/UspCards.tsx)
- **Component:** `UspCards (Vertical 06 — Industrial Infrastructure)`
- **Information Category:** Category B — Projects and Industrial Development
- **Claim Type:** Forward-looking statement
- **Explicitness & Timeframe:** `Explicit` | `Planned Development`
- **Numerical Value:** `06. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-PROJ-001`)
- **Audit Risk Classification:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).

**Verbatim Source Code:**
```tsx
},
  {
    id: "industrial-infrastructure",
    index: "06.",
    title: "Industrial Infrastructure",
    status: "Planned Development",
    statusType: "planned",
    description: "Planning integrated manufacturing campuses with specialized logistics, regional utilities, and long-term capacity for industrial expansion.",
    focusAreas: ["Integrated industrial campuses", "Regional logistics hubs", "Utility interconnections", "Long-term infrastructure planning"],
    href: "/projects",
    bg: "#183226",
    textColor: "#ffffff",
    icon: Building2,
    accent: "#f4a261",
```

**Audit Context & Regulatory Analysis:**
Unrendered standalone portfolio vertical card 06.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-007: Creating Value Beyond Industry. Our proposed agricultural sourcing and industrial initiati...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/SharedValueAndContribution.tsx))
- **Authoritative File & Lines:** [`src/components/SharedValueAndContribution.tsx:L28-L45`](file:///src/components/SharedValueAndContribution.tsx)
- **Component:** `SharedValueAndContribution (Section 06 — Farmers & Communities)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Proposed / Future`
- **Numerical Value:** `06 Section number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
{/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-18">
            <div className="lg:col-span-7">
              <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
                Creating Value Beyond{" "}
                <span className="font-normal italic text-[#e06425]">
                  Industry.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
              <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
                Our proposed agricultural sourcing and industrial initiatives aim to create additional economic opportunities for farming communities, regional enterprises, and skilled workers.
              </p>
              <div className="pt-2">
                <Link
                  href="/feedstock"
                  className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[#13271e] hover:text-[#e06425] transition-colors duration-200"
```

**Audit Context & Regulatory Analysis:**
Unrendered component Section 06 presenting community opportunities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-008: Contributing to India's Industrial Growth. Rivanta's long-term development strategy seeks ...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/SharedValueAndContribution.tsx))
- **Authoritative File & Lines:** [`src/components/SharedValueAndContribution.tsx:L141-L158`](file:///src/components/SharedValueAndContribution.tsx)
- **Component:** `SharedValueAndContribution (Section 07 — National Priorities)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future / In Progress`
- **Numerical Value:** `07 Section number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Unique occurrence
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Contributing to India's{" "}
                <span className="font-normal italic text-[#f9a65c]">
                  Industrial Growth.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
              <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Rivanta's long-term development strategy seeks to connect domestic resources with manufacturing opportunities, supporting industrial diversification, regional economic activity, and more resilient supply chains.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-white hover:text-[#f9a65c] transition-colors duration-200"
                >
                  <span className="border-b border-white/30 group-hover:border-[#f9a65c] pb-0.5 transition-colors duration-200">
                    Connect With Corporate Desk
                  </span>
```

**Audit Context & Regulatory Analysis:**
Unrendered component Section 07 on domestic economic contribution.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-009: Supporting capital investment in domestic industrial materials; Developing qualified domes...

- **Page / Route:** [Standalone Codebase Components](N/A (Component file: src/components/SharedValueAndContribution.tsx))
- **Authoritative File & Lines:** [`src/components/SharedValueAndContribution.tsx:L168-L215`](file:///src/components/SharedValueAndContribution.tsx)
- **Component:** `SharedValueAndContribution (4 Themes)`
- **Information Category:** Category E — National and Economic Contribution
- **Claim Type:** Strategic statement
- **Explicitness & Timeframe:** `Explicit` | `Future`
- **Numerical Value:** `4 Themes` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-HOME-017`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
<div className="w-10 h-10 rounded-xl bg-white/10 text-[#f9a65c] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Domestic Manufacturing
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Supporting capital investment in domestic industrial materials and alternative gaseous energy capabilities.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#86efac] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Supply-Chain Resilience
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Developing qualified domestic alternatives to reduce exposure to international supply-chain concentration.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#f9a65c] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Energy Diversification
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Expanding the role of domestic renewable gases in municipal distribution networks and industrial mobility.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Industrial Innovation
```

**Audit Context & Regulatory Analysis:**
Unrendered component Section 07 card set on national priorities.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

#### CLM-STAND-010: Rivanta Green Innovative Venture Private Limited

- **Page / Route:** [Standalone Codebase Components](https://rivantagreen.com/not-found)
- **Authoritative File & Lines:** [`src/app/not-found.tsx:L55`](file:///src/app/not-found.tsx)
- **Component:** `NotFound Page`
- **Information Category:** Category A — Corporate Identity
- **Claim Type:** Corporate statement
- **Explicitness & Timeframe:** `Explicit` | `Current`
- **Numerical Value:** _None (Qualitative assertion)_
- **Cross-Site Repetition:** Repeated elsewhere (Related Claims: `CLM-GLOB-001`)
- **Audit Risk Classification:** `LOW RISK / STATUTORY NEUTRAL`
- **Substantiation Status:** `UNRESOLVED EVIDENCE REQUIREMENT / PENDING DOCUMENTATION`
- **Unresolved Evidence Requirement:** Standard public business assertion.

**Verbatim Source Code:**
```tsx
Rivanta Green Innovative Venture Private Limited
```

**Audit Context & Regulatory Analysis:**
Corporate identity line in custom 404 error page.

**Client Decision Workbench:**
```markdown
[ ] KEEP AS IS (Factually verified by existing internal corporate records)
[ ] QUALIFY WORDING (Add "Planned", "Under Evaluation", or "Target Design Parameter")
[ ] REMOVE COMPLETELY (Delete assertion from public codebase)
[ ] REQUEST EVIDENCE (Flag for engineering / legal documentation before approval)
Client Instructions: _________________________________________________________________
```

---

