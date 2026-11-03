# RIVANTA GREEN INNOVATIVE VENTURE PRIVATE LIMITED
## RECONCILED EXECUTIVE CLAIMS REVIEW & DECISION CHECKLIST
**Document Reference:** `RIV-AUD-2026-EXEC-CHK-REV02`  
**Date of Audit QA:** November 3, 2026  
**Audited Entity:** Rivanta Green Innovative Venture Private Limited (https://rivantagreen.com)  
**Total Claims Cataloged for Executive Decision:** 182  

---

## EXECUTIVE INSTRUCTIONS FOR USING THIS WORKBENCH

This document is prepared for corporate leadership, legal counsel, and technical directors to record decisions for every public-facing claim on the Rivanta Green website.

For each item:
1. Examine the **Exact Source Code**, **Authoritative Line Range**, and **Audit Risk Tier**.
2. Select one decision checkbox:
   - `[ ] KEEP AS IS`: Fully verified by existing technical reports, contracts, or statutory filings.
   - `[ ] QUALIFY WORDING`: Add necessary corporate qualifiers (e.g., "Planned", "Under Development", "Target Design Parameter").
   - `[ ] REMOVE COMPLETELY`: Delete claim from the codebase.
   - `[ ] REQUEST EVIDENCE`: Require internal engineering/commercial validation before approving.
3. Record custom instructions or replacement text in the **Client Instructions** field.

---

## SECTION 1: GLOBAL LAYOUT & ARCHITECTURE (13 CLAIMS)

### [ ] CLM-GLOB-001 — Rivanta Green Innovative Venture Private Limited
- **Location:** [`src/app/layout.tsx:L96-L97`](file:///src/app/layout.tsx) | Component: `RootLayout (JSON-LD Corporation)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
name: "Rivanta Green Innovative Venture Private Limited",
      alternateName: "Rivanta Green",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-002 — emerging Indian industrial enterprise developing an integrated portfolio across ...
- **Location:** [`src/app/layout.tsx:L28-L30`](file:///src/app/layout.tsx) | Component: `RootLayout (Global Metadata & OG)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity / Category G — Future Commitments | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: {
    default: "Rivanta Green — Building Industrial Value From India's Resources",
    template: "%s | Rivanta Green",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-003 — B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge, Bhop...
- **Location:** [`src/app/layout.tsx:L108-L115`](file:///src/app/layout.tsx) | Component: `RootLayout (JSON-LD Registered Office)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `29, 3 Building Number / Floor` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-004 — parentOrganization: Golden Soil Ventures Private Limited, E4/271 Arera Colony, H...
- **Location:** [`src/app/layout.tsx:L116-L128`](file:///src/app/layout.tsx) | Component: `RootLayout (JSON-LD Parent Organization)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `4/271, 462016 Plot Number / Postal Code` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-005 — telephone: "+91 98930 25375", email: "info@rivantagreen.com"
- **Location:** [`src/app/layout.tsx:L128-L133`](file:///src/app/layout.tsx) | Component: `RootLayout (JSON-LD Contact Channels)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
contactPoint: {
        "@type": "ContactPoint",
        contactType: "corporate communications",
        telephone: "+91 98930 25375",
        email: "info@rivantagreen.com",
      },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-006 — Biogenic Silica, Compressed Biogas (CBG), Sustainable Aviation Fuels, Agricultur...
- **Location:** [`src/app/layout.tsx:L135-L142`](file:///src/app/layout.tsx) | Component: `RootLayout (JSON-LD Subject Matter Knowledge)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current`
- **Numerical Value:** `6 Domains` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-007 — RIVANTA - Green Innovative Venture Private Limited
- **Location:** [`src/components/Header.tsx:L156`](file:///src/components/Header.tsx) | Component: `Header (Brand Lockup Alt)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
alt="RIVANTA - Green Innovative Venture Private Limited"
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-008 — From agricultural residue to industrial value
- **Location:** [`src/components/Footer.tsx:L28-L33`](file:///src/components/Footer.tsx) | Component: `Footer (Tagline & Narrative)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<h3 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.08] text-white max-w-xl">
              From agricultural residue to{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#f9a65c]">
                industrial value.
              </span>
            </h3>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-009 — B-29, 3rd Floor, Kasturba Nagar, Next to Lake City Hospital, Chetak Bridge, Bhop...
- **Location:** [`src/components/Footer.tsx:L192-L204`](file:///src/components/Footer.tsx) | Component: `Footer (Head & Registered Office Coordinates)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `29, 3 Building Number / Floor` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-010 — Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhopal, Madhya...
- **Location:** [`src/components/Footer.tsx:L206-L215`](file:///src/components/Footer.tsx) | Component: `Footer (Corporate Office Coordinates)`
- **Audit Risk Tier:** `MODERATE RISK — CORPORATE GOVERNANCE AMBIGUITY`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `4/271, 462016 Plot Number / Postal Code` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Requires Group Corporate Organizational Chart or statutory resolution clarifying promoter holding relationship with Golden Soil Ventures.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-011 — Direct Line: +91 98930 25375, Official Email: info@rivantagreen.com, Portal: www...
- **Location:** [`src/components/Footer.tsx:L217-L231`](file:///src/components/Footer.tsx) | Component: `Footer (Direct Corporate Desk Coordinates)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-012 — Advanced Materials & Biogenic Silica, Compressed Biogas (CBG), Sustainable Aviat...
- **Location:** [`src/components/PartnerModal.tsx:L279-L286`](file:///src/components/PartnerModal.tsx) | Component: `PartnerModal (Focus Domains)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology and Products / Category F — Commercial | `Current / Planned`
- **Numerical Value:** `7 Focus Sectors` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-GLOB-013 — Emerging Indian diversified industrial enterprise developing an integrated portf...
- **Location:** [`public/llms.txt:L1-L27`](file:///public/llms.txt) | Component: `public/llms.txt`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 2: HOMEPAGE (36 CLAIMS)

### [ ] CLM-HOME-001 — Building Industrial Value From India's Resources
- **Location:** [`src/components/Hero.tsx:L28-L30`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 01 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
line1: "Building Industrial Value",
    line2Prefix: "From ",
    line2Highlight: "India's Resources.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-002 — developing an integrated portfolio across renewable energy, advanced materials, ...
- **Location:** [`src/components/Hero.tsx:L32-L34`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 01 Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category G — Future Commitments and Aspirations | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
description:
      "Rivanta Green Innovative Venture Private Limited is developing an integrated portfolio across renewable energy, advanced materials, sustainable fuels, and resource-efficient manufacturing.",
    image: "/images/hero-facility.png",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-003 — Engineering Bio-Silica & Green Silicon
- **Location:** [`src/components/Hero.tsx:L42-L44`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 02 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
line1: "Engineering Bio-Silica &",
    line2Prefix: "Green ",
    line2Highlight: "Silicon.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-004 — Developing high-purity biogenic silica and evaluating downstream green silicon m...
- **Location:** [`src/components/Hero.tsx:L46-L48`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 02 Description)`
- **Audit Risk Tier:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Category & Timeframe:** Category C — Technology and Products / Category E — National Contribution | `Future / In Progress`
- **Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.
- **Verbatim Source Code:**
```tsx
description:
      "Developing high-purity biogenic silica and evaluating downstream green silicon materials to strengthen domestic manufacturing and clean technology supply chains.",
    image: "/images/green-silicon-refinery.jpg",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-005 — Powering Green Mobility With Compressed Biogas
- **Location:** [`src/components/Hero.tsx:L56-L58`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 03 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category E — National Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
line1: "Powering Green Mobility",
    line2Prefix: "With ",
    line2Highlight: "Compressed Biogas.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-006 — Developing commercial anaerobic digestion and biomethane enrichment facilities t...
- **Location:** [`src/components/Hero.tsx:L60-L62`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 03 Description)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category C — Products | `Future / In Progress`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
description:
      "Developing commercial anaerobic digestion and biomethane enrichment facilities to convert agricultural residues into clean Compressed Biogas for transportation and industrial grids.",
    image: "/images/biogas-plant-golden-hour.png",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-007 — Exploring The Future Of Clean Aviation Fuels
- **Location:** [`src/components/Hero.tsx:L70-L72`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 04 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
line1: "Exploring The Future Of",
    line2Prefix: "Clean ",
    line2Highlight: "Aviation Fuels.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-008 — Evaluating sustainable aviation fuel pathways from agricultural residues to supp...
- **Location:** [`src/components/Hero.tsx:L74-L76`](file:///src/components/Hero.tsx) | Component: `Hero (Slide 04 Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category D — Environmental | `Future / Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
description:
      "Evaluating sustainable aviation fuel pathways from agricultural residues to support long-term decarbonization across domestic and international aviation corridors.",
    image: "/images/golden-hour-saf-refinery.png",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-009 — Industrial Progress, Built on Opportunity
- **Location:** [`src/components/PlatformHgroup.tsx:L20-L22`](file:///src/components/PlatformHgroup.tsx) | Component: `PlatformHgroup (Section 01 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Unspecified`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Industrial Progress, Built on Opportunity.
            </h2>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-010 — developing a diversified industrial portfolio focused on advanced materials, ren...
- **Location:** [`src/components/PlatformHgroup.tsx:L27-L29`](file:///src/components/PlatformHgroup.tsx) | Component: `PlatformHgroup (Section 01 Paragraph)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category G — Future Commitments and Aspirations | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed max-w-xl">
              Rivanta Green is developing a diversified industrial portfolio focused on advanced materials, renewable fuels, and resource-efficient manufacturing. Our development strategy connects domestic resources with long-term industrial capability.
            </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-011 — ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — ...
- **Location:** [`src/components/MarqueeText.tsx:L9`](file:///src/components/MarqueeText.tsx) | Component: `MarqueeText`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology and Products / Category E — National Contribution | `Current / Planned`
- **Numerical Value:** `5 Industrial Pillars` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
phrase = "ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — INDUSTRIAL INFRASTRUCTURE — BUILDING INDUSTRIAL VALUE FROM INDIA'S RESOURCES — ",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-012 — Connecting Domestic Resources With Industrial Capability
- **Location:** [`src/components/CompanySpotlight.tsx:L74-L85`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Section 03 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-013 — aligning its manufacturing ambitions with these critical national priorities
- **Location:** [`src/components/CompanySpotlight.tsx:L85-L87`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Section 03 Narrative)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution / Category G — Future Commitments | `Future`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              India's industrial expansion requires dependable domestic supply chains, clean alternative fuels, and responsible resource utilization. Rivanta is aligning its manufacturing ambitions with these critical national priorities.
            </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-014 — Integrated Facility Concept • Under Development
- **Location:** [`src/components/CompanySpotlight.tsx:L119-L132`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Facility Concept Image Caption)`
- **Audit Risk Tier:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Category & Timeframe:** Category B — Projects / Category I — Implied Claims | `Future / Under Development`
- **Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-015 — Agricultural residues represent an important yet underutilized resource. Rivanta...
- **Location:** [`src/components/CompanySpotlight.tsx:L8-L13`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 1 - Harvest Value)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "harvest-value",
    headline: "Value Beyond the Harvest.",
    challenge: "Agricultural Residue Utilization",
    description: "Agricultural residues represent an important yet underutilized resource. Rivanta aims to support their productive use through industrial development, creating new opportunities across agriculture and manufacturing.",
    icon: Wheat,
    color: "#e06425",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-016 — Organized agricultural residue utilization provides a productive alternative to ...
- **Location:** [`src/components/CompanySpotlight.tsx:L16-L21`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 2 - Air Quality)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
id: "air-quality",
    headline: "A More Productive Use of Resources.",
    challenge: "Air Quality & Seasonal Alternatives",
    description: "Organized agricultural residue utilization provides a productive alternative to open-field burning, contributing constructively to regional air-quality efforts across northern and central agrarian corridors.",
    icon: Compass,
    color: "#2d7a54",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-017 — India relies heavily on international supply chains for critical industrial mate...
- **Location:** [`src/components/CompanySpotlight.tsx:L24-L29`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 3 - Domestic Manufacturing)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "domestic-manufacturing",
    headline: "Strengthening Domestic Manufacturing.",
    challenge: "Supply-Chain Resilience",
    description: "India relies heavily on international supply chains for critical industrial materials. Our long-term strategy focuses on developing qualified domestic capabilities in advanced biogenic silica and material inputs.",
    icon: Factory,
    color: "#13271e",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-018 — Developing domestic Compressed Biogas and alternative gaseous fuels strengthens ...
- **Location:** [`src/components/CompanySpotlight.tsx:L32-L37`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 4 - Energy Transition)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category E — National Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "energy-transition",
    headline: "Supporting India's Energy Transition.",
    challenge: "Alternative Fuel Diversification",
    description: "Developing domestic Compressed Biogas and alternative gaseous fuels strengthens national energy security while advancing clean industrial and transport fuel options.",
    icon: Flame,
    color: "#ea6e2d",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-019 — infrastructure planning prioritizes industrial water conservation, heat recovery...
- **Location:** [`src/components/CompanySpotlight.tsx:L40-L45`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 5 - Resource Efficiency)`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
```tsx
id: "resource-efficiency",
    headline: "Making Better Use of Resources.",
    challenge: "Industrial Water & Energy Discipline",
    description: "Our infrastructure planning prioritizes industrial water conservation, heat recovery, and Zero Liquid Discharge (ZLD) as an essential design objective where operationally applicable.",
    icon: ShieldCheck,
    color: "#2d7a54",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-020 — Decentralized residue procurement, regional logistics, and manufacturing investm...
- **Location:** [`src/components/CompanySpotlight.tsx:L48-L53`](file:///src/components/CompanySpotlight.tsx) | Component: `CompanySpotlight (Strategic Challenge 6 - Rural Opportunity)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "rural-opportunity",
    headline: "Creating Opportunity Across Communities.",
    challenge: "Rural Economic Development",
    description: "Decentralized residue procurement, regional logistics, and manufacturing investments create direct employment, rural supplier opportunities, and expanded technical skills.",
    icon: TrendingUp,
    color: "#e06425",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-021 — Responsibility Across Our Operations
- **Location:** [`src/components/CorporateFoundations.tsx:L68-L78`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Section 04 Headline)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Unspecified`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-022 — planning emphasizes efficient resource utilization, water management, emission c...
- **Location:** [`src/components/CorporateFoundations.tsx:L76-L78`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Section 04 Narrative)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Current / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Environmental responsibility is central to Rivanta's industrial development approach. Our planning emphasizes efficient resource utilization, water management, emission control, and the responsible handling of industrial materials.
            </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-023 — Zero Liquid Discharge (ZLD) is a core design objective where technically and ope...
- **Location:** [`src/components/CorporateFoundations.tsx:L7-L13`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Pillar 1 - Water Stewardship)`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
```tsx
id: "water-stewardship",
    title: "Water Stewardship & ZLD Planning",
    badge: "Design Objective",
    headline: "Managing Water Responsibly.",
    description: "Zero Liquid Discharge (ZLD) is a core design objective where technically and operationally applicable. Our planning prioritizes high-recovery membrane filtration, closed-loop recycling, and aquifer conservation.",
    icon: Droplet,
    color: "#2d7a54",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-024 — Engineering closed-loop cogeneration and waste-heat recovery across processing s...
- **Location:** [`src/components/CorporateFoundations.tsx:L16-L22`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Pillar 2 - Waste Heat Recovery)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "energy-efficiency",
    title: "Waste Heat Recovery & Utilities",
    badge: "Energy Efficiency",
    headline: "Maximizing Thermal Synergy.",
    description: "Engineering closed-loop cogeneration and waste-heat recovery across processing streams to maximize thermodynamic efficiency and reduce overall manufacturing energy intensity.",
    icon: Flame,
    color: "#e06425",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-025 — Planning high-efficiency particulate capture, electrostatic precipitators, and c...
- **Location:** [`src/components/CorporateFoundations.tsx:L25-L31`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Pillar 3 - Air-Emission Management)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "emission-control",
    title: "Air-Emission Management",
    badge: "Air Quality",
    headline: "Controlling Industrial Emissions.",
    description: "Planning high-efficiency particulate capture, electrostatic precipitators, and continuous in-line monitoring systems to ensure full compliance with national environmental standards.",
    icon: Wind,
    color: "#13271e",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-026 — Evaluating soil-amendment applications and industrial mineral recovery for solid...
- **Location:** [`src/components/CorporateFoundations.tsx:L34-L40`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Pillar 4 - Circular By-Product Recovery)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "circular-byproducts",
    title: "Circular By-Product Recovery",
    badge: "Material Efficiency",
    headline: "Reducing Material Losses.",
    description: "Evaluating soil-amendment applications and industrial mineral recovery for solid residues, ensuring responsible stewardship and minimal landfill footprint.",
    icon: RefreshCw,
    color: "#2d7a54",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-027 — project planning incorporates environmental benchmarks, resource efficiency stan...
- **Location:** [`src/components/CorporateFoundations.tsx:L154-L164`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Governance Benchmark 1 - Environmental Planning)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Governance / Category D — Environmental | `Current / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-028 — Prioritizing closed-loop water treatment and high-recovery recycling to protect ...
- **Location:** [`src/components/CorporateFoundations.tsx:L168-L178`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Governance Benchmark 2 - Aquifer Protection)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-029 — Continuous monitoring of raw materials, energy loops, and process inputs to ensu...
- **Location:** [`src/components/CorporateFoundations.tsx:L182-L192`](file:///src/components/CorporateFoundations.tsx) | Component: `CorporateFoundations (Governance Benchmark 3 - Resource Conservation)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-030 — Agricultural residues represent an underutilized domestic resource, forming the ...
- **Location:** [`src/components/ValueChainGallery.tsx:L21-L24`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 01 - Agricultural Resources)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Future / In Planning`
- **Numerical Value:** `01 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
category: "01 / AGRICULTURAL RESOURCES",
    title: "Sustained by agricultural resources.",
    desc: "Agricultural residues represent an underutilized domestic resource, forming the supply foundation for Rivanta's planned industrial facilities.",
    short: "Agricultural resources",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-031 — Commercial Compressed Biogas (CBG) infrastructure designed for city gas distribu...
- **Location:** [`src/components/ValueChainGallery.tsx:L30-L33`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 02 - Renewable Gaseous Fuels)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Future / In Planning`
- **Numerical Value:** `02 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
category: "02 / RENEWABLE GASEOUS FUELS",
    title: "Developing alternative gaseous fuels.",
    desc: "Commercial Compressed Biogas (CBG) infrastructure designed for city gas distribution networks and industrial clean mobility off-take.",
    short: "Compressed Biogas (CBG)",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-032 — Integrated closed-loop cogeneration and thermal heat recovery engineered to maxi...
- **Location:** [`src/components/ValueChainGallery.tsx:L39-L42`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 03 - Energy Recovery)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Future / In Planning`
- **Numerical Value:** `03 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
category: "03 / ENERGY RECOVERY",
    title: "Industrial energy efficiency.",
    desc: "Integrated closed-loop cogeneration and thermal heat recovery engineered to maximize utility efficiency across manufacturing operations.",
    short: "Energy efficiency",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-033 — Developing domestic capabilities in high-value biogenic silica and evaluating gr...
- **Location:** [`src/components/ValueChainGallery.tsx:L48-L51`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 04 - Advanced Materials)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category E — National Contribution | `Future / In Progress`
- **Numerical Value:** `04 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
category: "04 / ADVANCED MATERIALS",
    title: "High-purity bio-silica & silicon.",
    desc: "Developing domestic capabilities in high-value biogenic silica and evaluating green silicon precursor pathways for domestic manufacturing.",
    short: "Bio-silica & silicon",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-034 — Evaluating emerging technology partnerships and sustainable aviation fuel (SAF) ...
- **Location:** [`src/components/ValueChainGallery.tsx:L57-L60`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 05 - Sustainable Fuels)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category G — Future Commitments | `Future / Evaluation`
- **Numerical Value:** `05 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
category: "05 / SUSTAINABLE FUELS",
    title: "Exploring future aviation fuels.",
    desc: "Evaluating emerging technology partnerships and sustainable aviation fuel (SAF) pathways to participate in long-term transport decarbonization.",
    short: "Sustainable aviation",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-035 — Evaluating soil-amendment applications and industrial mineral recovery for co-pr...
- **Location:** [`src/components/ValueChainGallery.tsx:L66-L69`](file:///src/components/ValueChainGallery.tsx) | Component: `ValueChainGallery (Slide 06 - Resource Recovery)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Evaluation`
- **Numerical Value:** `06 Slide index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
category: "06 / RESOURCE RECOVERY",
    title: "Responsible resource recovery.",
    desc: "Evaluating soil-amendment applications and industrial mineral recovery for co-products, minimizing material losses across the facility lifecycle.",
    short: "Resource recovery",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-HOME-036 — Rivanta Green — Diversified Industrial Enterprise; emerging Indian industrial en...
- **Location:** [`src/app/page.tsx:L1-L11`](file:///src/app/page.tsx) | Component: `Home Page Metadata`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 3: ABOUT US (20 CLAIMS)

### [ ] CLM-ABOUT-001 — emerging diversified Indian industrial enterprise developing domestic capabiliti...
- **Location:** [`src/app/about/layout.tsx:L4-L6`](file:///src/app/about/layout.tsx) | Component: `AboutLayout (Metadata)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "About Us — Corporate Identity, Leadership & Industrial Ambition",
  description:
    "Learn about Rivanta Green Innovative Venture Private Limited, an emerging diversified Indian industrial enterprise developing domestic capabilities across advanced materials, sustainable fuels, and circular manufacturing.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-002 — Corporate identity, governance, and long-term industrial ambition of Rivanta Gre...
- **Location:** [`src/app/about/layout.tsx:L37-L43`](file:///src/app/about/layout.tsx) | Component: `AboutLayout (JSON-LD AboutPage)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
"@type": "AboutPage",
      "@id": "https://rivantagreen.com/about#webpage",
      url: "https://rivantagreen.com/about",
      name: "About Rivanta Green — Corporate Identity & Industrial Ambition",
      description:
        "Corporate identity, governance, and long-term industrial ambition of Rivanta Green Innovative Venture Private Limited.",
      isPartOf: {
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-003 — Building Industrial Value From India's Resources
- **Location:** [`src/app/about/page.tsx:L119-L120`](file:///src/app/about/page.tsx) | Component: `SubpageHero (Title & Highlight)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title="Building Industrial Value From"
        highlightedText="India's Resources."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-004 — emerging Indian industrial enterprise developing an integrated portfolio across ...
- **Location:** [`src/app/about/page.tsx:L121`](file:///src/app/about/page.tsx) | Component: `SubpageHero (Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category G — Future Commitments and Aspirations | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
description="Rivanta Green Innovative Venture Private Limited is an emerging Indian industrial enterprise developing an integrated portfolio across renewable energy, advanced materials, sustainable fuels, and circular manufacturing."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-005 — Emerging Industrial Enterprise • Bhopal, India
- **Location:** [`src/app/about/page.tsx:L128`](file:///src/app/about/page.tsx) | Component: `SubpageHero (Telemetry Tag)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
telemetryTag="Emerging Industrial Enterprise • Bhopal, India"
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-006 — Industrial development built on responsible resource use
- **Location:** [`src/app/about/page.tsx:L149-L161`](file:///src/app/about/page.tsx) | Component: `Corporate Overview Headline`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Unspecified`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-007 — India generates substantial volumes of agricultural residues every harvest seaso...
- **Location:** [`src/app/about/page.tsx:L155-L157`](file:///src/app/about/page.tsx) | Component: `Corporate Overview Narrative 01 (Agrarian Context)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p>
                  India generates substantial volumes of agricultural residues every harvest season. Without structured industrial demand and organized collection logistics, valuable economic potential remains unutilized.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-008 — Rivanta Green was incorporated to convert these renewable resources into high-va...
- **Location:** [`src/app/about/page.tsx:L158-L160`](file:///src/app/about/page.tsx) | Component: `Corporate Overview Narrative 02 (Incorporation Purpose)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity / Category E — National Contribution | `Historical / Ongoing`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p>
                  Rivanta Green was incorporated to convert these renewable resources into high-value industrial inputs: biogenic silica, clean biomethane, and circular materials that strengthen domestic manufacturing.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-009 — build a competitive Indian industrial enterprise that creates sustainable econom...
- **Location:** [`src/app/about/page.tsx:L172-L174`](file:///src/app/about/page.tsx) | Component: `Strategic Vision Card`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category G — Future Commitments and Aspirations | `Future`
- **Numerical Value:** `01 Card number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    To build a competitive Indian industrial enterprise that creates sustainable economic value from domestic agricultural resources while advancing national manufacturing resilience.
                  </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-010 — engineer, finance, and operate modern industrial manufacturing facilities that c...
- **Location:** [`src/app/about/page.tsx:L184-L186`](file:///src/app/about/page.tsx) | Component: `Operational Mission Card`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category G — Future Commitments and Aspirations | `Future`
- **Numerical Value:** `02 Card number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-sm text-[#13271e]/85 font-light leading-relaxed">
                    To engineer, finance, and operate modern industrial manufacturing facilities that combine high-efficiency processing, environmental responsibility, and value for regional communities.
                  </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-011 — Strengthening domestic availability of biogenic silica and essential clean energ...
- **Location:** [`src/app/about/page.tsx:L86-L89`](file:///src/app/about/page.tsx) | Component: `Priority 1 — Domestic Supply Chain Resilience`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Domestic Supply Chain Resilience",
    description:
      "Strengthening domestic availability of biogenic silica and essential clean energy vectors to support Indian manufacturing competitiveness.",
    icon: Factory,
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-012 — Generating secondary economic value for farming communities and rural logistics ...
- **Location:** [`src/app/about/page.tsx:L92-L95`](file:///src/app/about/page.tsx) | Component: `Priority 2 — Rural Value Creation`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Rural Value Creation",
    description:
      "Generating secondary economic value for farming communities and rural logistics operators through organized biomass procurement.",
    icon: TrendingUp,
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-013 — Building commercial-scale capacity across Compressed Biogas (CBG) and evaluating...
- **Location:** [`src/app/about/page.tsx:L98-L102`](file:///src/app/about/page.tsx) | Component: `Priority 3 — Energy & Materials Diversification`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category C — Products | `Future / In Progress`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Energy & Materials Diversification",
    description:
      "Building commercial-scale capacity across Compressed Biogas (CBG) and evaluating Sustainable Aviation Fuel (SAF) production pathways.",
    icon: Cpu,
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-014 — Designing manufacturing facilities with continuous emissions controls, water rec...
- **Location:** [`src/app/about/page.tsx:L104-L108`](file:///src/app/about/page.tsx) | Component: `Priority 4 — Environmental Stewardship`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Environmental Stewardship",
    description:
      "Designing manufacturing facilities with continuous emissions controls, water recycling systems, and waste-heat recovery loops.",
    icon: ShieldCheck,
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-015 — Developing scalable manufacturing infrastructure that converts underutilized dom...
- **Location:** [`src/app/about/page.tsx:L24-L33`](file:///src/app/about/page.tsx) | Component: `Strategic Value Card 01 (Industrial Ambition)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category G — Future Commitments | `Future / In Progress`
- **Numerical Value:** `01. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-016 — Integrating zero-waste engineering and closed-loop process utility design to max...
- **Location:** [`src/app/about/page.tsx:L36-L45`](file:///src/app/about/page.tsx) | Component: `Strategic Value Card 02 (Resource Efficiency)`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Numerical Value:** `02. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-017 — Operating with disciplined corporate governance, statutory compliance planning, ...
- **Location:** [`src/app/about/page.tsx:L48-L57`](file:///src/app/about/page.tsx) | Component: `Strategic Value Card 03 (Corporate Accountability)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Governance | `Current / Ongoing`
- **Numerical Value:** `03. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-018 — Developing regional agricultural residue collection frameworks, engaging prospec...
- **Location:** [`src/app/about/page.tsx:L61-L66`](file:///src/app/about/page.tsx) | Component: `Development Milestone 01 (Stage 01)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category F — Commercial | `Current / Project Planning`
- **Numerical Value:** `01 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
{
    stage: "Stage 01",
    status: "Project Planning",
    title: "Feedstock Sourcing & Supply Chain Modeling",
    detail:
      "Developing regional agricultural residue collection frameworks, engaging prospective milling partners, and evaluating material handling logistics.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-019 — Advancing process engineering packages, preparing statutory clearance documentat...
- **Location:** [`src/app/about/page.tsx:L69-L74`](file:///src/app/about/page.tsx) | Component: `Development Milestone 02 (Stage 02)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development | `Current / In Preparation`
- **Numerical Value:** `02 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
stage: "Stage 02",
    status: "In Preparation",
    title: "Facility Planning & Detailed Engineering",
    detail:
      "Advancing process engineering packages, preparing statutory clearance documentation, and assessing utility integration requirements for planned hubs.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-ABOUT-020 — Evaluating prospective industrial off-take arrangements, technology licensor qua...
- **Location:** [`src/app/about/page.tsx:L76-L81`](file:///src/app/about/page.tsx) | Component: `Development Milestone 03 (Stage 03)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category F — Commercial | `Future / Strategic Evaluation`
- **Numerical Value:** `03 Stage number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
stage: "Stage 03",
    status: "Strategic Evaluation",
    title: "Commercial Structuring & Downstream Pathways",
    detail:
      "Evaluating prospective industrial off-take arrangements, technology licensor qualification, and downstream biogenic material applications.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 4: BIO-SILICA & ADVANCED MATERIALS (13 CLAIMS)

### [ ] CLM-SIL-001 — Developing high-purity biogenic silica (SiO₂) from agricultural residues and eva...
- **Location:** [`src/app/bio-silica/layout.tsx:L4-L6`](file:///src/app/bio-silica/layout.tsx) | Component: `BioSilicaLayout (Metadata)`
- **Audit Risk Tier:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Progress`
- **Numerical Value:** `2 Formula subscript (SiO2)` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.
- **Verbatim Source Code:**
```tsx
title: "Bio-Silica & Advanced Materials — Biogenic Silica & Industrial Silicon Precursors",
  description:
    "Developing high-purity biogenic silica (SiO₂) from agricultural residues and evaluating downstream green silicon precursor pathways for rubber, green concrete, and advanced industrial materials.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-002 — Developing high-grade biogenic silica (SiO₂) from agricultural residues and eval...
- **Location:** [`src/app/bio-silica/page.tsx:L111-L114`](file:///src/app/bio-silica/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
badge="Advanced Materials & Silicon"
        title="Engineering Bio-Silica &"
        highlightedText="Green Silicon."
        description="Developing high-grade biogenic silica (SiO₂) from agricultural residues and evaluating downstream green silicon precursor pathways for rubber, concrete, and advanced industrial applications."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-003 — Sustainable agricultural residues (rice husk) vs. Mined quartz mineral deposits
- **Location:** [`src/app/bio-silica/page.tsx:L14-L18`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Table (Raw Material Source)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category D — Environmental | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
parameter: "Raw Material Source",
    biogenicSilica: "Sustainable agricultural residues (rice husk)",
    traditionalSilica: "Mined quartz mineral deposits and chemical synthesis",
    advantage: "Renewable Agricultural Origin",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-004 — Controlled thermal conversion and purification vs. High-temperature sodium silic...
- **Location:** [`src/app/bio-silica/page.tsx:L20-L24`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Table (Processing Route)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology and Products | `Planned Process`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
parameter: "Processing Route",
    biogenicSilica: "Controlled thermal conversion and purification",
    traditionalSilica: "High-temperature sodium silicate fusion and acid precipitation",
    advantage: "Non-Mining Production Route",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-005 — Amorphous silica (SiO₂) with high specific surface area vs. Crystalline quartz o...
- **Location:** [`src/app/bio-silica/page.tsx:L26-L30`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Table (Material Structure)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Product Specification`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
parameter: "Material Structure",
    biogenicSilica: "Amorphous silica (SiO₂) with high specific surface area",
    traditionalSilica: "Crystalline quartz or synthetic precipitated matrices",
    advantage: "Amorphous Phase Characteristics",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-006 — Domestic agro-residue aggregation from agrarian belts vs. Dependent on mineral e...
- **Location:** [`src/app/bio-silica/page.tsx:L32-L36`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Table (Supply Chain Model)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
parameter: "Supply Chain Model",
    biogenicSilica: "Domestic agro-residue aggregation from agrarian belts",
    traditionalSilica: "Dependent on mineral extraction and import logistics",
    advantage: "Domestic Supply Integration",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-007 — Co-generation of process energy and agricultural soil co-products vs. Mineral qu...
- **Location:** [`src/app/bio-silica/page.tsx:L38-L42`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Table (Resource Recovery Integration)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
parameter: "Resource Recovery Integration",
    biogenicSilica: "Co-generation of process energy and agricultural soil co-products",
    traditionalSilica: "Mineral quarrying with solid tailings management requirements",
    advantage: "Integrated Resource Recovery",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-008 — Biogenic silica derived from agricultural residues provides high surface area, c...
- **Location:** [`src/app/bio-silica/page.tsx:L145-L146`](file:///src/app/bio-silica/page.tsx) | Component: `Comparison Editorial Overview`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Current Technical Claim`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
Biogenic silica derived from agricultural residues provides high surface area, consistent reactivity, and commercial relevance as an alternative to conventional mineral silica.
            </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-009 — Biogenic silica is being evaluated as a reinforcing filler for automotive tires ...
- **Location:** [`src/app/bio-silica/page.tsx:L48-L58`](file:///src/app/bio-silica/page.tsx) | Component: `Application 01 — Rubber & Tire Reinforcement`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-010 — Pozzolanic biogenic silica reacts with calcium hydroxide during cement hydration...
- **Location:** [`src/app/bio-silica/page.tsx:L62-L72`](file:///src/app/bio-silica/page.tsx) | Component: `Application 02 — Concrete & Infrastructure`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category D — Environmental | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-011 — Engineered particle sizing provides consistent matting, anti-settling, and visco...
- **Location:** [`src/app/bio-silica/page.tsx:L76-L86`](file:///src/app/bio-silica/page.tsx) | Component: `Application 03 — Specialty Coatings & Industrial Applications`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-012 — Rivanta is evaluating exploratory processing pathways to determine the technical...
- **Location:** [`src/app/bio-silica/page.tsx:L90-L100`](file:///src/app/bio-silica/page.tsx) | Component: `Application 04 — Downstream Materials & Silicon Evaluation`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category G — Future Commitments | `Future / Evaluative Development`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SIL-013 — Technical specifications and material parameters are discussed with qualified in...
- **Location:** [`src/app/bio-silica/page.tsx:L297`](file:///src/app/bio-silica/page.tsx) | Component: `Technical Inquiries Footnote`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category F — Financial and Commercial | `Current Process`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
*Technical specifications and material parameters are discussed with qualified industrial partners upon formal inquiry.
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 5: COMPRESSED BIOGAS (CBG) (13 CLAIMS)

### [ ] CLM-CBG-001 — Developing commercial Compressed Biogas infrastructure utilizing anaerobic diges...
- **Location:** [`src/app/cbg/layout.tsx:L4-L6`](file:///src/app/cbg/layout.tsx) | Component: `CbgLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Compressed Biogas (CBG) — Clean Energy from Regional Agricultural Residues",
  description:
    "Developing commercial Compressed Biogas infrastructure utilizing anaerobic digestion of agricultural residues to support domestic energy diversification and clean mobility in India.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-002 — Developing commercial Compressed Biogas facilities to convert agricultural resid...
- **Location:** [`src/app/cbg/page.tsx:L111-L114`](file:///src/app/cbg/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category C — Products | `Future / In Progress`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title="Supporting India's Energy Transition With"
        highlightedText="Compressed Biogas."
        description="Developing commercial Compressed Biogas facilities to convert agricultural residues into clean biomethane for transportation, city gas distribution, and industrial heating."
        imageSrc="/images/cbg-plant.jpg"
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-003 — delivering caloric parity with fossil natural gas. Rivanta Green is developing m...
- **Location:** [`src/app/cbg/page.tsx:L151-L155`](file:///src/app/cbg/page.tsx) | Component: `Overview Narrative (The Energy Opportunity)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology / Category B — Projects | `Future / In Progress`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
Compressed Biogas (CBG) is purified biomethane produced through the controlled anaerobic digestion of crop residues and agricultural by-products, delivering caloric parity with fossil natural gas.
                </p>
                <p>
                  Rivanta Green is developing modern CBG facilities to supply clean biomethane into regional transportation corridors and city gas networks, turning agricultural residues into dependable domestic energy.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-004 — Developing supply pathways for commercial-grade biomethane into regional city ga...
- **Location:** [`src/app/cbg/page.tsx:L21-L28`](file:///src/app/cbg/page.tsx) | Component: `Strategic Channel 01 — City Gas Distribution`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Future / In Progress`
- **Numerical Value:** `01. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-005 — Planning compressed biomethane distribution for vehicular transport and commerci...
- **Location:** [`src/app/cbg/page.tsx:L31-L39`](file:///src/app/cbg/page.tsx) | Component: `Strategic Channel 02 — Commercial Mobility`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category D — Environmental | `Future / In Planning`
- **Numerical Value:** `02. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-006 — Evaluating the processing of organic digestion by-products into fermented organi...
- **Location:** [`src/app/cbg/page.tsx:L43-L50`](file:///src/app/cbg/page.tsx) | Component: `Strategic Channel 03 — Circular Soil Nutrients`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Evaluation`
- **Numerical Value:** `03. Channel number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-007 — Commercial Grade • Methane Enrichment: Purified biomethane engineered to meet co...
- **Location:** [`src/app/cbg/page.tsx:L56-L61`](file:///src/app/cbg/page.tsx) | Component: `Commercial Parameter 01 (Methane Enrichment)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Product Specification`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "methane-content",
    value: "Commercial Grade",
    label: "Methane Enrichment",
    detail: "Purified biomethane engineered to meet commercial specifications for industrial and grid applications.",
    trend: "Commercial Specification",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-008 — Caloric Equivalence • Fuel Performance: Direct operational alternative to fossil...
- **Location:** [`src/app/cbg/page.tsx:L63-L68`](file:///src/app/cbg/page.tsx) | Component: `Commercial Parameter 02 (Fuel Performance)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Technical Claim`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "energy-parity",
    value: "Caloric Equivalence",
    label: "Fuel Performance",
    detail: "Direct operational alternative to fossil natural gas in commercial burners and industrial heating applications.",
    trend: "Industrial Heating",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-009 — National Mandates • Policy Integration: Aligned with national bioenergy directiv...
- **Location:** [`src/app/cbg/page.tsx:L70-L75`](file:///src/app/cbg/page.tsx) | Component: `Commercial Parameter 03 (Policy Integration)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Current Policy Alignment`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "policy-alignment",
    value: "National Mandates",
    label: "Policy Integration",
    detail: "Aligned with national bioenergy directives promoting domestic renewable fuel blending and energy diversification.",
    trend: "Energy Transition",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-010 — Closed Loop • Nutrient Recycling: Comprehensive digestate recovery producing org...
- **Location:** [`src/app/cbg/page.tsx:L76-L82`](file:///src/app/cbg/page.tsx) | Component: `Commercial Parameter 04 (Nutrient Recycling)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
{
    id: "byproduct-recovery",
    value: "Closed Loop",
    label: "Nutrient Recycling",
    detail: "Comprehensive digestate recovery producing organic soil amendments for sustainable agriculture.",
    trend: "Circular Agriculture",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-011 — Paddy straw, wheat straw, and crop stalks procured from regional agricultural be...
- **Location:** [`src/app/cbg/page.tsx:L88-L89`](file:///src/app/cbg/page.tsx) | Component: `Feedstock Category 01 — Crop Residues & Agronomic Straw`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category E — National Contribution | `Feedstock Definition`
- **Numerical Value:** `01 Category number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
name: "Crop Residues & Agronomic Straw",
    characteristics: "Paddy straw, wheat straw, and crop stalks procured from regional agricultural belts to support productive biomass utilization.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-012 — Residues from agro-processing, milling clusters, and food processing facilities ...
- **Location:** [`src/app/cbg/page.tsx:L93-L94`](file:///src/app/cbg/page.tsx) | Component: `Feedstock Category 02 — Agro-Industrial Processing By-Products`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Feedstock Definition`
- **Numerical Value:** `02 Category number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
name: "Agro-Industrial Processing By-Products",
    characteristics: "Residues from agro-processing, milling clusters, and food processing facilities suited for anaerobic digestion.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CBG-013 — anaerobic digestion produces valuable organic digestate that is processed into f...
- **Location:** [`src/app/cbg/page.tsx:L376-L377`](file:///src/app/cbg/page.tsx) | Component: `Organic Fertilizer Output Narrative`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental / Category C — Products | `Planned Product`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
In addition to clean biomethane, anaerobic digestion produces valuable organic digestate that is processed into fermented organic manure to enrich agricultural soils.
              </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 6: SUSTAINABLE AVIATION FUELS (SAF) (13 CLAIMS)

### [ ] CLM-SAF-001 — Evaluating drop-in sustainable aviation fuel development pathways and industrial...
- **Location:** [`src/app/saf/layout.tsx:L4-L6`](file:///src/app/saf/layout.tsx) | Component: `SafLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Sustainable Aviation Fuel (SAF) — Strategic Pathways & Aviation Decarbonization",
  description:
    "Evaluating drop-in sustainable aviation fuel development pathways and industrial partnerships to support long-term decarbonization of commercial aviation in India.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-002 — Evaluating sustainable aviation fuel pathways from non-food agricultural residue...
- **Location:** [`src/app/saf/page.tsx:L113-L116`](file:///src/app/saf/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products / Category D — Environmental | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
badge="Future Fuels"
        title="Exploring The Future Of"
        highlightedText="Aviation Fuels."
        description="Evaluating sustainable aviation fuel pathways from non-food agricultural residues to support the long-term decarbonization of domestic and international air corridors."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-003 — Rivanta Green is conducting structured technical evaluations into conversion pat...
- **Location:** [`src/app/saf/page.tsx:L154-L158`](file:///src/app/saf/page.tsx) | Component: `Overview Narrative (The Aviation Opportunity)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category G — Future Commitments | `Future / In Evaluation`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
Aviation represents one of the most demanding sectors to decarbonize, requiring high-energy-density drop-in liquid fuels that perform reliably across commercial jet fleets without infrastructure retooling.
                </p>
                <p>
                  Rivanta Green is conducting structured technical evaluations into conversion pathways that can process non-food agricultural residues into certifiable sustainable aviation fuels, positioning the enterprise for long-term industrial participation.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-004 — Evaluating catalytic conversion routes transforming non-food biological alcohols...
- **Location:** [`src/app/saf/page.tsx:L21-L28`](file:///src/app/saf/page.tsx) | Component: `Strategic Pathway 01 — Alcohol-to-Jet Pathways`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Evaluation`
- **Numerical Value:** `01. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-005 — Investigating biomass gasification paired with catalytic hydrocarbon synthesis t...
- **Location:** [`src/app/saf/page.tsx:L31-L39`](file:///src/app/saf/page.tsx) | Component: `Strategic Pathway 02 — Gasification & Synthesis`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Evaluation`
- **Numerical Value:** `02. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-006 — Evaluating prospective collaboration with established technology licensors and a...
- **Location:** [`src/app/saf/page.tsx:L43-L50`](file:///src/app/saf/page.tsx) | Component: `Strategic Pathway 03 — Technology Partnerships`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category F — Commercial / Category G — Future Commitments | `Future / Collaborative Evaluation`
- **Numerical Value:** `03. Pathway number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-007 — Targeting complete physical and performance compatibility with conventional avia...
- **Location:** [`src/app/saf/page.tsx:L56-L61`](file:///src/app/saf/page.tsx) | Component: `Evaluation Parameter 01 (Drop-In Capability)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Technical Goal`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "drop-in-capability",
    value: "Drop-In Objective",
    label: "Fuel Compatibility",
    detail: "Targeting complete physical and performance compatibility with conventional aviation fueling infrastructure.",
    trend: "Infrastructure Readiness",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-008 — Strictly utilizing non-food agricultural residues to prevent competition with fo...
- **Location:** [`src/app/saf/page.tsx:L63-L68`](file:///src/app/saf/page.tsx) | Component: `Evaluation Parameter 02 (Feedstock Integrity)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Operating Principle`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "feedstock-integrity",
    value: "Non-Food Biomass",
    label: "Non-Food Biomass",
    detail: "Strictly utilizing non-food agricultural residues to prevent competition with food production or arable land.",
    trend: "Responsible Sourcing",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-009 — Designed to deliver substantial lifecycle carbon reductions compared to conventi...
- **Location:** [`src/app/saf/page.tsx:L70-L75`](file:///src/app/saf/page.tsx) | Component: `Evaluation Parameter 03 (Emissions Profile)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "emissions-profile",
    value: "Long-Term Reductions",
    label: "Lifecycle Assessment",
    detail: "Designed to deliver substantial lifecycle carbon reductions compared to conventional fossil jet fuels.",
    trend: "Aviation Decarbonization",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-010 — Aligning process design with international aviation fuel certification standards...
- **Location:** [`src/app/saf/page.tsx:L77-L82`](file:///src/app/saf/page.tsx) | Component: `Evaluation Parameter 04 (Standards Alignment)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category F — Commercial | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
id: "standards-alignment",
    value: "Aviation Standards",
    label: "Certification Readiness",
    detail: "Aligning process design with international aviation fuel certification standards and off-take specifications.",
    trend: "Industry Compliance",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-011 — Assessing process economics, capital intensity, and energy balances across prove...
- **Location:** [`src/app/saf/page.tsx:L88-L92`](file:///src/app/saf/page.tsx) | Component: `Phasing Step 01 (Techno-Economic Feasibility)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category F — Commercial | `Current / In Progress`
- **Numerical Value:** `01 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Techno-Economic Feasibility",
    detail:
      "Assessing process economics, capital intensity, and energy balances across proven catalytic and thermochemical conversion technologies.",
  },
  {
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-012 — Evaluating regional biomass aggregation logistics to support continuous feedstoc...
- **Location:** [`src/app/saf/page.tsx:L94-L98`](file:///src/app/saf/page.tsx) | Component: `Phasing Step 02 (Feedstock Security & Supply Integration)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Current / In Progress`
- **Numerical Value:** `02 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Feedstock Security & Supply Integration",
    detail:
      "Evaluating regional biomass aggregation logistics to support continuous feedstock availability without impacting food systems.",
  },
  {
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SAF-013 — Initiating preliminary dialogue with domestic airlines, fuel distributors, and i...
- **Location:** [`src/app/saf/page.tsx:L100-L104`](file:///src/app/saf/page.tsx) | Component: `Phasing Step 03 (Commercial & Airline Collaboration)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category F — Financial and Commercial | `Current / Ongoing Dialogue`
- **Numerical Value:** `03 Step number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Commercial & Airline Collaboration",
    detail:
      "Initiating preliminary dialogue with domestic airlines, fuel distributors, and industry forums to understand off-take parameters and blending timelines.",
  },
];
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 7: FEEDSTOCK & AGRICULTURAL VALUE (11 CLAIMS)

### [ ] CLM-FEED-001 — Building resilient aggregation frameworks for rice husk and agricultural straw, ...
- **Location:** [`src/app/feedstock/layout.tsx:L4-L6`](file:///src/app/feedstock/layout.tsx) | Component: `FeedstockLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Feedstock & Agricultural Value — Biomass Aggregation & Farmer Engagement",
  description:
    "Building resilient aggregation frameworks for rice husk and agricultural straw, converting regional crop residue challenges into structured rural economic participation.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-002 — feedstock architecture is being developed around regional aggregation logistics,...
- **Location:** [`src/app/feedstock/page.tsx:L93-L95`](file:///src/app/feedstock/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category E — National Contribution | `Future / In Progress`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title="Building Resilient Supply Chains For"
        highlightedText="Agricultural Biomass."
        description="Our feedstock architecture is being developed around regional aggregation logistics, standardized quality testing, and collaborative miller partnerships to support continuous biomass supply without competing with food security."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-003 — aggregation framework establishes direct partnerships with milling networks and ...
- **Location:** [`src/app/feedstock/page.tsx:L133-L134`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Model Editorial 01 (Quality & Logistics)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category F — Commercial | `In Planning / Implementation`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
Industrial processing requires consistency in material quality, predictable delivery schedules, and transparent procurement logistics. Our aggregation framework establishes direct partnerships with milling networks and Farmer Producer Organizations.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-004 — creating organized, dependable monetization channels for crop residues, we suppo...
- **Location:** [`src/app/feedstock/page.tsx:L136-L137`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Model Editorial 02 (Burning Mitigation & Rural Incomes)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category E — National Contribution | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
By creating organized, dependable monetization channels for crop residues, we support rural livelihoods while contributing to reduced seasonal residue burning across key agricultural belts.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-005 — Planning centralized collection and pre-treatment hubs near high-density agricul...
- **Location:** [`src/app/feedstock/page.tsx:L22-L26`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Pillar 01 — Regional Aggregation Hubs`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development | `Future / In Planning`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Regional Aggregation Hubs",
    description:
      "Planning centralized collection and pre-treatment hubs near high-density agricultural clusters to optimize regional logistics and supply reliability.",
    icon: MapPin,
    stat: "Proposed Regional Hubs",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-006 — Designing modern covered storage facilities equipped with moisture testing, vent...
- **Location:** [`src/app/feedstock/page.tsx:L29-L34`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Pillar 02 — Enclosed Storage & Safety`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Technology | `Future / In Planning`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Enclosed Storage & Safety",
    description:
      "Designing modern covered storage facilities equipped with moisture testing, ventilation controls, and dust suppression systems engineered for agricultural biomass.",
    icon: Warehouse,
    stat: "Planned Storage Infrastructure",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-007 — Developing inbound inspection protocols to assess moisture levels and material c...
- **Location:** [`src/app/feedstock/page.tsx:L36-L41`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Pillar 03 — Quality Verification Gates`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Quality Verification Gates",
    description:
      "Developing inbound inspection protocols to assess moisture levels and material composition before processing, supporting operational consistency.",
    icon: ShieldCheck,
    stat: "Standardized Quality Framework",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-008 — Structuring direct procurement frameworks with regional millers and Farmer Produ...
- **Location:** [`src/app/feedstock/page.tsx:L43-L48`](file:///src/app/feedstock/page.tsx) | Component: `Sourcing Pillar 04 — Farmer & Miller Partnerships`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National Contribution / Category F — Commercial | `Current / Ongoing`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Farmer & Miller Partnerships",
    description:
      "Structuring direct procurement frameworks with regional millers and Farmer Producer Organizations (FPOs) to provide commercial alternatives for crop residues.",
    icon: Sprout,
    stat: "Agrarian Value Creation",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-009 — Agricultural residues represent an important yet underutilized resource. Rivanta...
- **Location:** [`src/app/feedstock/page.tsx:L54-L62`](file:///src/app/feedstock/page.tsx) | Component: `Circular Flow 01 — Value Beyond the Harvest`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Numerical Value:** `01. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-010 — Biomass is converted into high-value biogenic materials, clean biomethane, and p...
- **Location:** [`src/app/feedstock/page.tsx:L65-L73`](file:///src/app/feedstock/page.tsx) | Component: `Circular Flow 02 — Industrial Processing`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology and Products | `Future / Planned Operations`
- **Numerical Value:** `02. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-FEED-011 — Enriched organic digestate is returned to agricultural soils as fermented organi...
- **Location:** [`src/app/feedstock/page.tsx:L76-L84`](file:///src/app/feedstock/page.tsx) | Component: `Circular Flow 03 — Soil Health Reintegration`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / Planned`
- **Numerical Value:** `03. Flow step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 8: PROJECTS & INFRASTRUCTURE (16 CLAIMS)

### [ ] CLM-PROJ-001 — Planning and developing integrated industrial campuses with captive utilities, r...
- **Location:** [`src/app/projects/layout.tsx:L4-L6`](file:///src/app/projects/layout.tsx) | Component: `ProjectsLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Planning`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Projects & Infrastructure — Integrated Industrial Manufacturing Campuses",
  description:
    "Planning and developing integrated industrial campuses with captive utilities, regional biomass aggregation networks, and disciplined execution benchmarks.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-002 — manufacturing and energy projects are engineered to institutional standards — pr...
- **Location:** [`src/app/projects/page.tsx:L164-L166`](file:///src/app/projects/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category F — Financial | `Future / In Planning`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title="Developing Modern Infrastructure For"
        highlightedText="Long-Term Capability."
        description="Our manufacturing and energy projects are engineered to institutional standards — prioritizing disciplined capital allocation, environmental compliance, and long-term operating reliability."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-003 — Status: Engineering & Planning. Integrated anaerobic digestion systems producing...
- **Location:** [`src/app/projects/page.tsx:L23-L27`](file:///src/app/projects/page.tsx) | Component: `Initiative 01 (Commercial Biogas Facilities)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category C — Products | `Engineering & Planning`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
name: "Commercial Biogas & Bio-Fertilizer Facilities",
    vertical: "Alternative Fuels & Soil Products",
    status: "Engineering & Planning",
    scope:
      "Integrated anaerobic digestion systems producing commercial-grade biomethane for regional grid supply and enriched organic soil amendments.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-004 — Gas off-take framework with city gas distribution networks; Process engineering ...
- **Location:** [`src/app/projects/page.tsx:L28-L33`](file:///src/app/projects/page.tsx) | Component: `Initiative 01 Deliverables`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category F — Commercial | `In Preparation`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
deliverables: [
      "Process engineering and environmental clearance documentation",
      "Gas off-take framework with city gas distribution networks",
      "Digestate valorization for regional agricultural soil application",
      "Modular facility design for regional replication",
    ],
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-005 — Status: Under Development. Advanced manufacturing facility designed to extract h...
- **Location:** [`src/app/projects/page.tsx:L39-L43`](file:///src/app/projects/page.tsx) | Component: `Initiative 02 (Biogenic Silica Refining Facility)`
- **Audit Risk Tier:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Category & Timeframe:** Category B — Projects and Industrial Development / Category C — Products | `Under Development`
- **Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.
- **Verbatim Source Code:**
```tsx
name: "Biogenic Silica Refining Facility",
    vertical: "Advanced Materials",
    status: "Under Development",
    scope:
      "Advanced manufacturing facility designed to extract high-purity biogenic silica from agricultural residues for rubber, concrete, and industrial applications.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-006 — Material quality testing with industrial compounding partners; Zero Liquid Disch...
- **Location:** [`src/app/projects/page.tsx:L44-L49`](file:///src/app/projects/page.tsx) | Component: `Initiative 02 Deliverables`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category B — Projects / Category D — Environmental | `Under Development`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
```tsx
deliverables: [
      "Material quality testing with industrial compounding partners",
      "Zero Liquid Discharge (ZLD) utility integration design",
      "Thermal energy recovery from process exhaust streams",
      "Evaluation of downstream high-purity precursor pathways",
    ],
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-007 — Status: Feasibility Stage. Techno-economic evaluation of alcohol-to-jet and cata...
- **Location:** [`src/app/projects/page.tsx:L55-L59`](file:///src/app/projects/page.tsx) | Component: `Initiative 03 (Sustainable Aviation Fuel Processing)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Feasibility Stage`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
name: "Sustainable Aviation Fuel Processing",
    vertical: "Aviation Decarbonization",
    status: "Feasibility Stage",
    scope:
      "Techno-economic evaluation of alcohol-to-jet and catalytic synthesis pathways utilizing non-food agricultural biomass feedstocks.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-008 — Feedstock availability assessment for non-food biomass; Technology partner scree...
- **Location:** [`src/app/projects/page.tsx:L60-L65`](file:///src/app/projects/page.tsx) | Component: `Initiative 03 Deliverables`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category F — Commercial | `Feasibility Stage`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
deliverables: [
      "Feedstock availability assessment for non-food biomass",
      "Technology partner screening and licensor evaluation",
      "Long-term airline off-take interest mapping",
      "Regulatory alignment with national bio-aviation directives",
    ],
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-009 — Status: Proposed. Decentralized collection, pre-treatment, and storage depots si...
- **Location:** [`src/app/projects/page.tsx:L71-L75`](file:///src/app/projects/page.tsx) | Component: `Initiative 04 (Regional Biomass Aggregation Hubs)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development | `Proposed`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
name: "Regional Biomass Aggregation Hubs",
    vertical: "Supply Chain & Logistics",
    status: "Proposed",
    scope:
      "Decentralized collection, pre-treatment, and storage depots situated near major milling clusters to secure stable, year-round feedstock availability.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-010 — Regional milling density mapping across key agrarian belts; Automated quality in...
- **Location:** [`src/app/projects/page.tsx:L76-L81`](file:///src/app/projects/page.tsx) | Component: `Initiative 04 Deliverables`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category E — National Contribution | `Proposed`
- **Numerical Value:** `4 Deliverables` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
deliverables: [
      "Regional milling density mapping across key agrarian belts",
      "Automated quality inspection and moisture control bays",
      "Farmer Producer Organization (FPO) long-term procurement frameworks",
      "Enclosed storage infrastructure with fire safety controls",
    ],
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-011 — Stage 01 • Project Planning (100% Progress): Regional agricultural residue avail...
- **Location:** [`src/app/projects/page.tsx:L93-L108`](file:///src/app/projects/page.tsx) | Component: `Phased Roadmap Stage 01 (Feasibility & Baseline Modeling)`
- **Audit Risk Tier:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Category & Timeframe:** Category B — Projects / Category I — Implied Claims | `Current / Completed Stage`
- **Numerical Value:** `100% Milestone Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-012 — Stage 02 • In Preparation (60% Progress): Detailed process engineering, vendor s...
- **Location:** [`src/app/projects/page.tsx:L109-L124`](file:///src/app/projects/page.tsx) | Component: `Phased Roadmap Stage 02 (Detailed Engineering & Regulatory Preparation)`
- **Audit Risk Tier:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Category & Timeframe:** Category B — Projects / Category I — Implied Claims | `Current / In Preparation`
- **Numerical Value:** `60% Engineering Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-013 — Stage 03 • Proposed (10% Progress): Civil works execution, equipment erection, u...
- **Location:** [`src/app/projects/page.tsx:L125-L140`](file:///src/app/projects/page.tsx) | Component: `Phased Roadmap Stage 03 (Facility Construction & Commissioning)`
- **Audit Risk Tier:** `CRITICAL RISK — EPC & FINANCING LIABILITY`
- **Category & Timeframe:** Category B — Projects / Category I — Implied Claims | `Proposed / Subject to Statutory Approvals`
- **Numerical Value:** `10% Civil Execution Progress` *(Taxonomy: MEASURABLE_PERFORMANCE_METRIC)*
- **Evidence Requirement:** Requires Lender's Independent Engineer (LIE) report, statutory approval filings, and board-approved EPC milestone certificate.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-014 — Centralized instrumentation and control systems monitoring process temperatures,...
- **Location:** [`src/app/projects/page.tsx:L143-L148`](file:///src/app/projects/page.tsx) | Component: `Operational Standard 01 (Process Control Automation)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology and Products | `Design Standard`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Continuous Emission Monitoring",
    description:
      "Stack sensors and emission controls installed to ensure operational compliance with applicable statutory environmental standards and regulatory norms.",
    icon: ShieldCheck,
  },
  {
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-015 — Stack sensors and emission controls installed to ensure operational compliance w...
- **Location:** [`src/app/projects/page.tsx:L149-L154`](file:///src/app/projects/page.tsx) | Component: `Operational Standard 02 (Continuous Emission Monitoring)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Design Standard`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Industrial Safety Architecture",
    description:
      "Enclosed pneumatic conveying, dust suppression systems, and comprehensive fire protection measures engineered for agricultural biomass handling environments.",
    icon: HardHat,
  },
];
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-PROJ-016 — Enclosed pneumatic conveying, dust suppression systems, and comprehensive fire p...
- **Location:** [`src/app/projects/page.tsx:L155-L160`](file:///src/app/projects/page.tsx) | Component: `Operational Standard 03 (Industrial Safety Architecture)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Design Standard`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
export default function ProjectsPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  return (
    <>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 9: SUSTAINABILITY & STEWARDSHIP (12 CLAIMS)

### [ ] CLM-SUST-001 — responsible resource utilization, crop-residue air quality mitigation, co-produc...
- **Location:** [`src/app/sustainability/layout.tsx:L4-L6`](file:///src/app/sustainability/layout.tsx) | Component: `SustainabilityLayout (Metadata)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title: "Sustainability & Environmental Stewardship — Circular Industrial Development",
  description:
    "Committed to responsible resource utilization, crop-residue air quality mitigation, co-product recovery, and disciplined environmental governance.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-002 — environmental framework integrates water stewardship, emissions controls, waste-...
- **Location:** [`src/app/sustainability/page.tsx:L117-L119`](file:///src/app/sustainability/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Current / Planned`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
title="Responsible Engineering For"
        highlightedText="Sustainable Industrial Growth."
        description="Our environmental framework integrates water stewardship, emissions controls, waste-heat recovery, and auditable governance into every stage of project planning and industrial operations."
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-003 — planning incorporates environmental engineering priorities across water conserva...
- **Location:** [`src/app/sustainability/page.tsx:L144-L150`](file:///src/app/sustainability/page.tsx) | Component: `Four Pillars Overview Narrative`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `In Planning`
- **Numerical Value:** `4 Pillars` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
Four pillars of responsible{" "}
              <span className="text-[#a0b0a5]">industrial operations.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Our project planning incorporates environmental engineering priorities across water conservation, air emissions management, energy efficiency, and circular by-product utilization across all planned facilities.
            </p>
          </div>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-004 — Zero Liquid Discharge (ZLD) as a primary design objective where technically and ...
- **Location:** [`src/app/sustainability/page.tsx:L21-L29`](file:///src/app/sustainability/page.tsx) | Component: `Stewardship Pillar 01 (Water Stewardship & ZLD Target)`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category D — Environmental / Category I — Implied Claims | `Future / Design Objective`
- **Numerical Value:** `90 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-005 — Integrating continuous emission monitoring systems (CEMS), high-efficiency bagho...
- **Location:** [`src/app/sustainability/page.tsx:L33-L41`](file:///src/app/sustainability/page.tsx) | Component: `Stewardship Pillar 02 (Air Quality & Emission Controls)`
- **Audit Risk Tier:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Category & Timeframe:** Category D — Environmental / Category I — Implied Claims | `Future / In Planning`
- **Numerical Value:** `85 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-006 — Recovering waste heat from high-temperature process streams to generate process ...
- **Location:** [`src/app/sustainability/page.tsx:L45-L53`](file:///src/app/sustainability/page.tsx) | Component: `Stewardship Pillar 03 (Waste-Heat & Energy Recovery)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Future / In Planning`
- **Numerical Value:** `80 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-007 — Processing residual streams and anaerobic digestate into organic soil amendments...
- **Location:** [`src/app/sustainability/page.tsx:L57-L65`](file:///src/app/sustainability/page.tsx) | Component: `Stewardship Pillar 04 (Circular By-Product Recovery)`
- **Audit Risk Tier:** `HIGH RISK — IMPLIED OPERATIONAL MISREPRESENTATION`
- **Category & Timeframe:** Category D — Environmental / Category I — Implied Claims | `Future / In Planning`
- **Numerical Value:** `90 Progress bar %` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Visual rendering communicates commissioned industrial assets. Requires explicit watermark or disclaimer: 'Prospective Facility Concept / Architectural Rendering'.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-008 — Organizing regional procurement of agricultural residues through structured part...
- **Location:** [`src/app/sustainability/page.tsx:L72-L79`](file:///src/app/sustainability/page.tsx) | Component: `Framework Stage 01 (Agricultural Residue Utilization)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category E — National Contribution | `Future / In Progress`
- **Numerical Value:** `01 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-009 — Designing conversion systems with integrated heat-exchange loops, ensuring therm...
- **Location:** [`src/app/sustainability/page.tsx:L81-L88`](file:///src/app/sustainability/page.tsx) | Component: `Framework Stage 02 (Energy-Efficient Process Design)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Design Standard`
- **Numerical Value:** `02 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-010 — Applying membrane filtration and condensation recycling systems to treat and reu...
- **Location:** [`src/app/sustainability/page.tsx:L90-L97`](file:///src/app/sustainability/page.tsx) | Component: `Framework Stage 03 (Closed-Loop Water Management)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Design Standard`
- **Numerical Value:** `03 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-011 — Developing commercial channels for refined biogenic materials and enriched organ...
- **Location:** [`src/app/sustainability/page.tsx:L99-L106`](file:///src/app/sustainability/page.tsx) | Component: `Framework Stage 04 (Circular Materials & Downstream Use)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category C — Products | `Future / In Planning`
- **Numerical Value:** `04 Stage step` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-SUST-012 — maintain a clear distinction between project design targets and operational resu...
- **Location:** [`src/app/sustainability/page.tsx:L352-L354`](file:///src/app/sustainability/page.tsx) | Component: `Governance & Verification Framework Callout`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Governance / Category D — Environmental | `Current Governance Policy`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed">
                We maintain a clear distinction between project design targets and operational results. Water reuse systems, emissions controls, and resource accounting are planned in accordance with applicable statutory guidelines and established environmental engineering practices.
              </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 10: CORPORATE VISION & STRATEGY (13 CLAIMS)

### [ ] CLM-VIS-001 — Aligning industrial development with India's long-term economic priorities: dome...
- **Location:** [`src/app/vision/layout.tsx:L4-L6`](file:///src/app/vision/layout.tsx) | Component: `VisionLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Corporate Vision & Long-Term Ambition — Building Value for India",
  description:
    "Aligning industrial development with India's long-term economic priorities: domestic manufacturing capabilities, import substitution, and rural economic value creation.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-002 — By addressing nature dependency, seasonal stubble burning, and critical material...
- **Location:** [`src/app/vision/page.tsx:L137-L140`](file:///src/app/vision/page.tsx) | Component: `SubpageHero (Headline & Description)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution / Category G — Future Commitments | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title="Industrial Progress Beyond"
        highlightedText="Resource Depletion."
        description="Rivanta Green is founded on the conviction that India's industrial future must not depend on continuous environmental extraction. By addressing nature dependency, seasonal stubble burning, and critical material imports, we build enduring industrial capability from agricultural resources."
        imageSrc="/images/company-innovation.jpg"
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-003 — consuming finite geological minerals, burning fossil fuels, and treating post-ha...
- **Location:** [`src/app/vision/page.tsx:L176-L178`](file:///src/app/vision/page.tsx) | Component: `Guiding Philosophy Editorial 01 (Linear Extractive Model)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category E — National Contribution | `Historical / Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p>
                  Modern industrial growth has predominantly followed an extractive pattern: consuming finite geological minerals, burning fossil fuels, and treating post-harvest crop residues as discarded waste to be burned.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-004 — shifting from non-renewable geological extraction toward renewable biological cy...
- **Location:** [`src/app/vision/page.tsx:L179-L181`](file:///src/app/vision/page.tsx) | Component: `Guiding Philosophy Editorial 02 (Biological Industrial Model)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity / Category G — Future Commitments | `Future / In Progress`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
<p>
                  Rivanta Green was conceived to bridge this divide. We believe sustainable industrial resilience requires shifting from non-renewable geological extraction toward renewable biological cycles — creating high-performance materials and clean energy from annually replenished agricultural resources.
                </p>
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-005 — Building Industrial Value From India's Resources. A commitment to manufacturing ...
- **Location:** [`src/app/vision/page.tsx:L185-L196`](file:///src/app/vision/page.tsx) | Component: `Central Thought Banner`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / Ongoing`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-006 — decoupling industrial manufacturing from finite mineral quarrying. By utilizing ...
- **Location:** [`src/app/vision/page.tsx:L27-L35`](file:///src/app/vision/page.tsx) | Component: `Strategic Issue 01 (Breaking Finite Nature Dependency)`
- **Audit Risk Tier:** `CRITICAL RISK — PRODUCT SPECIFICATION LIABILITY`
- **Category & Timeframe:** Category C — Technology / Category D — Environmental | `Current / Planned Process`
- **Numerical Value:** `01 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires ISO/IEC 17025 accredited laboratory Certificate of Analysis (CoA) validating >99% amorphous silica content and trace impurity profile.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-007 — Every harvest season, millions of tonnes of surplus crop residues and paddy stra...
- **Location:** [`src/app/vision/page.tsx:L40-L48`](file:///src/app/vision/page.tsx) | Component: `Strategic Issue 02 (Diverting Seasonal Crop-Residue Burning)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category E — National Contribution | `Current / In Planning`
- **Numerical Value:** `02, 2.5, 10 Issue index, PM microns` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-008 — Solid anaerobic digestate and bio-char co-products from our facilities are refin...
- **Location:** [`src/app/vision/page.tsx:L53-L61`](file:///src/app/vision/page.tsx) | Component: `Strategic Issue 03 (Reversing Soil Carbon Depletion)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Future / In Planning`
- **Numerical Value:** `03 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-009 — Producing biogenic silica and commercial biomethane domestically strengthens dom...
- **Location:** [`src/app/vision/page.tsx:L66-L74`](file:///src/app/vision/page.tsx) | Component: `Strategic Issue 04 (Reducing Industrial Import Dependency)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future`
- **Numerical Value:** `04 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-010 — We establish commercial procurement frameworks with regional aggregators, farmer...
- **Location:** [`src/app/vision/page.tsx:L78-L87`](file:///src/app/vision/page.tsx) | Component: `Strategic Issue 05 (Agricultural Residue Procurement & Logistics)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National Contribution / Category F — Commercial | `Current / Ongoing`
- **Numerical Value:** `05 Issue index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-011 — Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design obje...
- **Location:** [`src/app/vision/page.tsx:L93-L102`](file:///src/app/vision/page.tsx) | Component: `Vision Pillar 01 (Ecological Stewardship)`
- **Audit Risk Tier:** `HIGH RISK — ENVIRONMENTAL STATUTORY CLEARANCE`
- **Category & Timeframe:** Category D — Environmental and Sustainability | `Design Principle`
- **Numerical Value:** `01. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires State Pollution Control Board (MPPCB) Consent to Establish (CTE) approval and engineering water mass balance flow sheet.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-012 — Ensuring comprehensive resource recovery where every processing output — from bi...
- **Location:** [`src/app/vision/page.tsx:L105-L114`](file:///src/app/vision/page.tsx) | Component: `Vision Pillar 02 (Industrial Circularity)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category D — Environmental / Category C — Products | `Target`
- **Numerical Value:** `02. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-VIS-013 — Operating with disciplined corporate governance, statutory compliance planning, ...
- **Location:** [`src/app/vision/page.tsx:L117-L126`](file:///src/app/vision/page.tsx) | Component: `Vision Pillar 03 (Institutional Accountability)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Governance | `Current / Ongoing`
- **Numerical Value:** `03. Pillar index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 11: CONTACT CORPORATE DESK (12 CLAIMS)

### [ ] CLM-CONT-001 — Connect with Rivanta Green Innovative Venture Private Limited for industrial par...
- **Location:** [`src/app/contact/layout.tsx:L4-L6`](file:///src/app/contact/layout.tsx) | Component: `ContactLayout (Metadata)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category H — SEO and Machine-Readable Claims | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
title: "Contact Corporate Desk — Industrial Inquiries & Commercial Partnerships",
  description:
    "Connect with Rivanta Green Innovative Venture Private Limited for industrial partnerships, feedstock aggregation, commercial off-take discussions, and corporate inquiries.",
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-002 — Rivanta Green Innovative Venture Private Limited, B-29, 3rd Floor, Kasturba Naga...
- **Location:** [`src/app/contact/page.tsx:L22-L34`](file:///src/app/contact/page.tsx) | Component: `Office Location 01 (Head & Registered Office)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `29, 3, +91 98930 25375 Building Number, Floor, Phone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-003 — Golden Soil Ventures Private Limited, E4/271 Arera Colony, Huzur, Bhopal, Madhya...
- **Location:** [`src/app/contact/page.tsx:L37-L48`](file:///src/app/contact/page.tsx) | Component: `Office Location 02 (Corporate Office)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `4/271, 462016, +91 98930 25375 Plot, Pincode, Phone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-004 — Mon – Sat, 09:30 – 18:30 IST
- **Location:** [`src/app/contact/page.tsx:L140`](file:///src/app/contact/page.tsx) | Component: `Corporate Operating Hours`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current Operating Schedule`
- **Numerical Value:** `09:30, 18:30 Time 24-hr IST` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
Mon – Sat, 09:30 – 18:30 IST
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-005 — Official corporate correspondence, executive offices, general inquiries, and med...
- **Location:** [`src/app/contact/page.tsx:L54-L58`](file:///src/app/contact/page.tsx) | Component: `Department Desk 01 (General Corporate Desk & Main Line)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Numerical Value:** `+91 98930 25375 Telephone E.164` *(Taxonomy: STATUTORY_CORPORATE_IDENTIFIER)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
role: "General Corporate Desk & Main Line",
    email: "info@rivantagreen.com",
    phone: "+91 98930 25375",
    focus: "Official corporate correspondence, executive offices, general inquiries, and media relations.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-006 — Biogenic silica commercial off-take, material specification alignment, and techn...
- **Location:** [`src/app/contact/page.tsx:L60-L63`](file:///src/app/contact/page.tsx) | Component: `Department Desk 02 (Commercial Off-Take Desk)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category F — Financial and Commercial | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
role: "Commercial Off-Take Desk",
    email: "commercial@rivantagreen.com",
    focus: "Biogenic silica commercial off-take, material specification alignment, and technical inquiries for industrial users.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-007 — Biomass procurement partnerships, regional milling network logistics, and agricu...
- **Location:** [`src/app/contact/page.tsx:L65-L68`](file:///src/app/contact/page.tsx) | Component: `Department Desk 03 (Feedstock Sourcing & Logistics)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National Contribution / Category F — Commercial | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
role: "Feedstock Sourcing & Logistics",
    email: "sourcing@rivantagreen.com",
    focus: "Biomass procurement partnerships, regional milling network logistics, and agricultural organization collaboration.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-008 — Strategic industrial partnerships, institutional collaboration, and project infr...
- **Location:** [`src/app/contact/page.tsx:L70-L73`](file:///src/app/contact/page.tsx) | Component: `Department Desk 04 (Corporate Strategy & Project Planning)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category G — Future Commitments | `Current`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
role: "Corporate Strategy & Project Planning",
    email: "info@rivantagreen.com",
    focus: "Strategic industrial partnerships, institutional collaboration, and project infrastructure planning.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-009 — Industrial procurement and technical teams in rubber compounding, construction m...
- **Location:** [`src/app/contact/page.tsx:L78-L80`](file:///src/app/contact/page.tsx) | Component: `Commercial FAQ 01 (Biogenic Silica Inquiry)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category F — Commercial | `Current Inquiry Process`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
q: "How can industrial partners inquire about Biogenic Silica?",
    a: "Industrial procurement and technical teams in rubber compounding, construction materials, and specialty coatings can request material specification summaries and discuss technical feasibility. Submit your inquiry selecting 'Advanced Materials & Biogenic Silica' along with application requirements.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-010 — Commercial off-take discussions for planned facilities are structured around lon...
- **Location:** [`src/app/contact/page.tsx:L82-L84`](file:///src/app/contact/page.tsx) | Component: `Commercial FAQ 02 (CBG Off-Take Structures)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category F — Commercial | `Planned / In Discussion`
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
```tsx
q: "What commercial structures are used for Compressed Biogas (CBG) off-take?",
    a: "Commercial off-take discussions for planned facilities are structured around long-term agreements with City Gas Distribution (CGD) entities and industrial consumers, with delivery evaluated via regional pipeline interconnection or mobile cascade logistics.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-011 — develop multi-year biomass aggregation frameworks offering structured pricing, o...
- **Location:** [`src/app/contact/page.tsx:L86-L88`](file:///src/app/contact/page.tsx) | Component: `Commercial FAQ 03 (Miller & FPO Partnership)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National Contribution / Category F — Commercial | `Current / Ongoing`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
q: "How can regional millers and Farmer Producer Organizations (FPOs) partner with Rivanta?",
    a: "We develop multi-year biomass aggregation frameworks offering structured pricing, organized regional collection, and verified moisture testing to support dependable secondary value for agricultural communities.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-CONT-012 — Preliminary material specification summaries and physical property profiles are ...
- **Location:** [`src/app/contact/page.tsx:L90-L92`](file:///src/app/contact/page.tsx) | Component: `Commercial FAQ 04 (Technical Specifications Availability)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category F — Commercial | `Current Process`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
q: "Are technical specifications available for industrial partners?",
    a: "Preliminary material specification summaries and physical property profiles are shared with qualified industrial partners under formal technical review.",
  },
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

## SECTION 12: STANDALONE CODEBASE COMPONENTS (10 CLAIMS)

### [ ] CLM-STAND-001 — Advanced Materials (Status: Under Development): Developing domestic capabilities...
- **Location:** [`src/components/UspCards.tsx:L20-L33`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 01 — Advanced Materials)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category C — Technology / Category B — Projects | `Under Development`
- **Numerical Value:** `01. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-002 — Compressed Biogas (CBG) (Status: Under Development): Establishing commercial Com...
- **Location:** [`src/components/UspCards.tsx:L34-L47`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 02 — Compressed Biogas)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Products | `Under Development`
- **Numerical Value:** `02. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-003 — Sustainable Aviation Fuels (Status: Strategic Evaluation): Evaluating technology...
- **Location:** [`src/components/UspCards.tsx:L48-L61`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 03 — Sustainable Aviation Fuels)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category C — Technology / Category G — Future Commitments | `Strategic Evaluation`
- **Numerical Value:** `03. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-004 — Renewable Energy & Utilities (Status: Planned Integration): Planning captive bio...
- **Location:** [`src/components/UspCards.tsx:L62-L75`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 04 — Renewable Energy & Utilities)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects / Category C — Technology | `Planned Integration`
- **Numerical Value:** `04. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-005 — Circular Materials & Recovery (Status: Under Development): Utilizing industrial ...
- **Location:** [`src/components/UspCards.tsx:L76-L89`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 05 — Circular Materials & Recovery)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category D — Environmental / Category C — Products | `Under Development`
- **Numerical Value:** `05. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-006 — Industrial Infrastructure (Status: Planned Development): Planning integrated man...
- **Location:** [`src/components/UspCards.tsx:L90-L103`](file:///src/components/UspCards.tsx) | Component: `UspCards (Vertical 06 — Industrial Infrastructure)`
- **Audit Risk Tier:** `MODERATE RISK — PROJECT READINESS SCRUTINY`
- **Category & Timeframe:** Category B — Projects and Industrial Development | `Planned Development`
- **Numerical Value:** `06. Card index` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Requires DPR (Detailed Project Report), land allotment/possession letter, or formal OMC Expression of Interest (EoI).
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-007 — Creating Value Beyond Industry. Our proposed agricultural sourcing and industria...
- **Location:** [`src/components/SharedValueAndContribution.tsx:L28-L45`](file:///src/components/SharedValueAndContribution.tsx) | Component: `SharedValueAndContribution (Section 06 — Farmers & Communities)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Proposed / Future`
- **Numerical Value:** `06 Section number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-008 — Contributing to India's Industrial Growth. Rivanta's long-term development strat...
- **Location:** [`src/components/SharedValueAndContribution.tsx:L141-L158`](file:///src/components/SharedValueAndContribution.tsx) | Component: `SharedValueAndContribution (Section 07 — National Priorities)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future / In Progress`
- **Numerical Value:** `07 Section number` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-009 — Supporting capital investment in domestic industrial materials; Developing quali...
- **Location:** [`src/components/SharedValueAndContribution.tsx:L168-L215`](file:///src/components/SharedValueAndContribution.tsx) | Component: `SharedValueAndContribution (4 Themes)`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category E — National and Economic Contribution | `Future`
- **Numerical Value:** `4 Themes` *(Taxonomy: STRUCTURAL_UI_ENUMERATOR)*
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
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
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

### [ ] CLM-STAND-010 — Rivanta Green Innovative Venture Private Limited
- **Location:** [`src/app/not-found.tsx:L55`](file:///src/app/not-found.tsx) | Component: `NotFound Page`
- **Audit Risk Tier:** `LOW RISK / STATUTORY NEUTRAL`
- **Category & Timeframe:** Category A — Corporate Identity | `Current`
- **Evidence Requirement:** Standard public business assertion.
- **Verbatim Source Code:**
```tsx
Rivanta Green Innovative Venture Private Limited
```
- **Executive Decision:**
  - [ ] **KEEP AS IS** (Substantiated by company documentation)
  - [ ] **QUALIFY WORDING** (Add "Planned" / "Target Parameter" / "Under Feasibility")
  - [ ] **REMOVE COMPLETELY** (Delete from public-facing site)
  - [ ] **REQUEST EVIDENCE** (Require engineering/legal proof)
- **Client Instructions / Replacement Text:**
  _________________________________________________________________________________

---

