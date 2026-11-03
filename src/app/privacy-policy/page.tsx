import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Lock,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Rivanta Green Innovative Ventures",
  description:
    "Official Privacy Policy of Rivanta Green Innovative Ventures Private Limited, explaining how we collect, process, store, and protect personal data in compliance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.",
  alternates: {
    canonical: "https://www.rivantagreen.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Rivanta Green Innovative Ventures",
    description:
      "Official Privacy Policy and Data Governance standards of Rivanta Green Innovative Ventures Private Limited.",
    url: "https://www.rivantagreen.com/privacy-policy",
    siteName: "Rivanta Green",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Privacy Policy & Data Governance",
      },
    ],
  },
};

const SECTIONS = [
  { id: "section-1", num: "01", title: "Introduction" },
  { id: "section-2", num: "02", title: "Scope of This Policy" },
  { id: "section-3", num: "03", title: "Information We Collect" },
  { id: "section-4", num: "04", title: "How We Use Personal Information" },
  { id: "section-5", num: "05", title: "Consent and Lawful Processing" },
  { id: "section-6", num: "06", title: "Cookies and Website Technologies" },
  { id: "section-7", num: "07", title: "Information Sharing and Disclosure" },
  { id: "section-8", num: "08", title: "Data Security" },
  { id: "section-9", num: "09", title: "Data Retention" },
  { id: "section-10", num: "10", title: "Your Privacy Rights" },
  { id: "section-11", num: "11", title: "International Data Transfers" },
  { id: "section-12", num: "12", title: "Third-Party Websites" },
  { id: "section-13", num: "13", title: "Children's Privacy" },
  { id: "section-14", num: "14", title: "Changes to This Privacy Policy" },
  { id: "section-15", num: "15", title: "Privacy Enquiries & Grievance Redressal" },
  { id: "section-16", num: "16", title: "Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f6f8f6] min-h-screen text-[#13271e]">
      {/* 1. Dignified Executive Document Header */}
      <header className="pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 border-b border-[#13271e]/10 bg-white">
        <div className="u-container u-container--1 u-container--pad">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#13271e]/60 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#e06425] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#13271e]/30" />
            <span className="text-[#13271e]/50">Institutional Governance</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#13271e]/30" />
            <span className="text-[#13271e] font-semibold">Privacy Policy</span>
          </nav>

          {/* Title & Organization Identity */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f4f1] border border-[#13271e]/10 font-mono text-xs uppercase tracking-wider text-[#2d7a54] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d7a54]" />
              <span>Statutory Data Protection Policy</span>
            </div>

            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#13271e] tracking-tight leading-[1.08]">
              Privacy <span className="font-semibold text-[#e06425]">Policy.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#13271e]/75 font-light leading-relaxed">
              Rivanta Green Innovative Ventures Private Limited
            </p>

            {/* Document Key Metadata Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#13271e]/70 border-t border-[#13271e]/8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#e06425]" />
                <span>Effective Date: <strong>3 November 2026</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#2d7a54]" />
                <span>Framework: <strong>DPDP Act, 2023 & IT Act, 2000</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#13271e]/60" />
                <span>Website: <strong>https://www.rivantagreen.com</strong></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Document Body with Sticky Table of Contents Sidebar */}
      <main className="py-12 sm:py-16 md:py-20">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar: Table of Contents (Sticky on Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-white rounded-3xl p-6 border border-[#13271e]/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#13271e]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Table of Contents
                  </span>
                  <span className="font-mono text-[11px] text-[#13271e]/40">16 Sections</span>
                </div>

                <nav aria-label="Table of Contents" className="space-y-1 max-h-[calc(100vh-280px)] overflow-y-auto nav-scroller pr-2">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center gap-2.5 py-1.5 px-2.5 rounded-xl font-sans text-xs text-[#13271e]/75 hover:text-[#e06425] hover:bg-[#13271e]/[0.03] transition-all"
                    >
                      <span className="font-mono text-[10px] text-[#13271e]/40 group-hover:text-[#e06425] font-semibold">
                        {sec.num}
                      </span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick Contact Desk Card */}
              <div className="bg-[#13271e] text-white rounded-3xl p-6 space-y-4 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f9a65c] font-semibold block">
                  Privacy Helpdesk
                </span>
                <p className="font-sans text-xs text-white/75 font-light leading-relaxed">
                  For privacy enquiries, data correction, or consent withdrawal, our dedicated desk is accessible directly.
                </p>
                <div className="space-y-2 font-mono text-xs pt-1 border-t border-white/10">
                  <a
                    href="mailto:support@rivantagreen.com"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span className="truncate">support@rivantagreen.com</span>
                  </a>
                  <a
                    href="mailto:info@rivantagreen.com"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span className="truncate">info@rivantagreen.com</span>
                  </a>
                  <a
                    href="tel:+919893025375"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span>+91 98930 25375</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Full Document Reading Flow */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-[#13271e]/10 shadow-sm space-y-12">
              {/* Mobile Table of Contents Dropdown / Accordion */}
              <div className="lg:hidden p-4 rounded-2xl bg-[#f8faf8] border border-[#13271e]/10 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block">
                  Quick Navigation (16 Sections)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-56 overflow-y-auto nav-scroller pr-1">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center gap-2 py-1 px-2 rounded-lg text-xs text-[#13271e]/80 hover:text-[#e06425] hover:bg-white"
                    >
                      <span className="font-mono text-[10px] text-[#13271e]/40">{sec.num}</span>
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <section id="section-1" className="scroll-mt-32 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold">
                    01 / 16
                  </span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  1. Introduction
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Rivanta Green Innovative Ventures Private Limited (“Rivanta Green,” “Company,” “we,” “our,” or “us”) respects the privacy of individuals who interact with our organisation and is committed to handling personal information responsibly, transparently, and securely.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, process, store, disclose, and protect personal information obtained through our official website, business communications, corporate enquiries, and other relevant interactions.
                  </p>
                  <p>
                    Our approach to privacy is guided by applicable Indian laws, including the Information Technology Act, 2000, relevant rules thereunder, and the Digital Personal Data Protection Act, 2023, together with its applicable rules and provisions as they come into force.
                  </p>
                  <p>
                    By interacting with our website or providing information to us, you acknowledge the practices described in this Policy. Where processing requires consent under applicable law, we will seek that consent separately.
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="section-2" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  02 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  2. Scope of This Policy
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>This Privacy Policy applies to personal information processed in connection with:</p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-[#e06425]">
                    <li>Visitors accessing our official corporate website.</li>
                    <li>Individuals submitting business enquiries or contacting our representatives.</li>
                    <li>Prospective investors, business partners, suppliers, and other stakeholders.</li>
                    <li>Individuals communicating with us through email, telephone, or other authorised channels.</li>
                    <li>Candidates submitting employment-related enquiries or applications.</li>
                  </ul>
                  <p className="pt-1 text-[#13271e]/60 text-sm">
                    This Policy does not automatically govern independent third-party websites or services linked from our website.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section id="section-3" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  03 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  3. Information We Collect
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-4">
                  <p>Depending on the nature of your interaction with us, we may collect the following categories of information:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1.5">
                      <span className="font-mono text-[11px] text-[#e06425] font-semibold uppercase tracking-wider block">
                        Category A
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#13271e]">
                        Personal &amp; Contact Information
                      </h3>
                      <p className="text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                        Name, business email address, telephone number, organisation name, job title, and other contact details voluntarily provided.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1.5">
                      <span className="font-mono text-[11px] text-[#2d7a54] font-semibold uppercase tracking-wider block">
                        Category B
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#13271e]">
                        Business &amp; Professional Information
                      </h3>
                      <p className="text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                        Information relating to business proposals, partnerships, investment enquiries, supplier communications, and professional correspondence.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1.5">
                      <span className="font-mono text-[11px] text-[#13271e]/60 font-semibold uppercase tracking-wider block">
                        Category C
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#13271e]">
                        Website &amp; Technical Information
                      </h3>
                      <p className="text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                        IP address, browser type, device information, referring pages, and basic website usage information, to the extent collected through our website infrastructure or enabled analytical technologies.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1.5">
                      <span className="font-mono text-[11px] text-[#ea6e2d] font-semibold uppercase tracking-wider block">
                        Category D
                      </span>
                      <h3 className="font-sans text-base font-semibold text-[#13271e]">
                        Communications &amp; Enquiries
                      </h3>
                      <p className="text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                        Messages, documents, attachments, and other information voluntarily submitted through authorised contact channels.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#13271e]/70 italic pt-1">
                    We seek to collect only information reasonably necessary for specified and legitimate purposes.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="section-4" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  04 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  4. How We Use Personal Information
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>We may process personal information for the following purposes:</p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-[#e06425]">
                    <li>Responding to enquiries and facilitating business communications.</li>
                    <li>Evaluating potential partnerships, commercial proposals, and professional collaborations.</li>
                    <li>Maintaining relationships with suppliers, investors, and other business stakeholders.</li>
                    <li>Operating, maintaining, and securing our website and associated systems.</li>
                    <li>Improving website functionality, accessibility, and user experience.</li>
                    <li>Reviewing recruitment enquiries and employment applications.</li>
                    <li>Fulfilling contractual, regulatory, and legal obligations.</li>
                    <li>Preventing unauthorised access, misuse, fraud, and other security incidents.</li>
                    <li>Providing corporate updates or promotional communications where permitted by applicable law and, when required, with consent.</li>
                  </ul>
                  <p className="pt-2 text-sm text-[#13271e]/75">
                    We will not use personal information for materially unrelated purposes without an appropriate legal basis or additional consent where required.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="section-5" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  05 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  5. Consent and Lawful Processing
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Where consent is required, we seek to ensure that it is informed, specific, and provided through a clear affirmative action.
                  </p>
                  <p>
                    Individuals may withdraw their consent by contacting us using the details provided in this Policy, subject to applicable law and any continuing lawful basis for processing.
                  </p>
                  <p>
                    Withdrawal of consent does not affect processing lawfully carried out before withdrawal. Certain information may also be processed without consent where expressly permitted or required under applicable law.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="section-6" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  06 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  6. Cookies and Website Technologies
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Our website may use cookies or similar technologies to support essential functionality, website security, and performance.
                  </p>
                  <p>
                    Where analytics or other optional tracking technologies are implemented, relevant information about their purposes and available choices will be provided.
                  </p>
                  <p>
                    Visitors may manage cookies through their browser settings. Where applicable law requires prior consent for non-essential technologies, appropriate consent mechanisms will be implemented. Disabling certain technologies may affect website functionality.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section id="section-7" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  07 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  7. Information Sharing and Disclosure
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    We may disclose relevant personal information to authorised recipients where reasonably necessary for legitimate business operations or legal compliance, including:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-[#e06425]">
                    <li>Technology, website-hosting, and IT-support providers.</li>
                    <li>Professional advisers, auditors, and authorised consultants.</li>
                    <li>Service providers supporting business communications or administration.</li>
                    <li>Government authorities, regulators, or law enforcement agencies where legally required.</li>
                    <li>Other parties where disclosure is authorised by the individual or otherwise permitted by applicable law.</li>
                  </ul>
                  <p className="pt-2">
                    We seek to limit disclosures to information necessary for the relevant purpose and apply appropriate confidentiality and security obligations to service providers.
                  </p>
                  <div className="p-4 rounded-2xl bg-[#e06425]/10 border border-[#e06425]/20 font-medium text-[#13271e] text-sm">
                    We do not intend to use personal information collected through corporate enquiries as a commercial data product.
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="section-8" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  08 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  8. Data Security
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Rivanta Green recognises the importance of protecting personal information against unauthorised access, disclosure, alteration, loss, and misuse.
                  </p>
                  <p>
                    We seek to implement appropriate technical and organisational safeguards proportionate to the nature of the information and associated risks. These safeguards may include access restrictions, secure communication methods, system monitoring, and appropriate administrative controls.
                  </p>
                  <p>
                    Although reasonable measures are taken to protect information, no electronic transmission or storage environment can be guaranteed to be completely secure. Where a personal data breach occurs, we will take appropriate response and notification measures in accordance with applicable legal requirements.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="section-9" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  09 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  9. Data Retention
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, or for longer periods where required or permitted by applicable laws, contractual obligations, dispute-resolution needs, or regulatory requirements.
                  </p>
                  <p>
                    When information is no longer required, we will take appropriate steps to securely delete, anonymise, or otherwise dispose of it, subject to applicable retention obligations.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section id="section-10" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  10 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  10. Your Privacy Rights
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-4">
                  <p>
                    Subject to applicable law and the commencement of relevant statutory provisions, individuals may have rights concerning their personal information, including the right to:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc marker:text-[#e06425]">
                    <li>Request information about the processing of their personal data.</li>
                    <li>Request correction, completion, or updating of inaccurate or incomplete information.</li>
                    <li>Request erasure of personal information where legally applicable.</li>
                    <li>Withdraw consent where processing is based on consent.</li>
                    <li>Raise concerns or grievances regarding personal data processing.</li>
                    <li>Exercise other rights, including nomination rights, where provided under applicable law.</li>
                  </ul>
                  <div className="p-5 rounded-2xl bg-[#f0f4f1] border border-[#13271e]/10 space-y-2">
                    <p className="font-medium text-[#13271e] text-sm">
                      To submit a privacy-related request, contact:{" "}
                      <a
                        href="mailto:support@rivantagreen.com"
                        className="text-[#e06425] font-semibold hover:underline"
                      >
                        support@rivantagreen.com
                      </a>
                    </p>
                    <p className="text-xs text-[#13271e]/70 leading-relaxed font-light">
                      We may request reasonable verification of identity before processing a request to prevent unauthorised disclosure or modification. Requests will be handled in accordance with applicable legal requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 11 */}
              <section id="section-11" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  11 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  11. International Data Transfers
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>Some technology or service providers may process or store information outside India.</p>
                  <p>
                    Where international transfers occur, we will seek to ensure that such processing is consistent with applicable Indian data protection requirements, including any relevant restrictions imposed by competent authorities.
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section id="section-12" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  12 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  12. Third-Party Websites
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Our website may contain links to external websites, publications, platforms, or other third-party resources. These websites operate independently and may maintain their own privacy policies and data-handling practices.
                  </p>
                  <p>
                    Rivanta Green is not responsible for the privacy practices of independently operated third-party websites. Visitors are encouraged to review the relevant policies before submitting personal information.
                  </p>
                </div>
              </section>

              {/* Section 13 */}
              <section id="section-13" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  13 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  13. Children&apos;s Privacy
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Our corporate website is intended primarily for business and professional audiences and is not specifically directed towards children.
                  </p>
                  <p>
                    We do not intentionally solicit personal information from children through our corporate enquiry channels. Where the processing of children&apos;s personal data becomes necessary, we will apply the safeguards and consent requirements prescribed by applicable law.
                  </p>
                </div>
              </section>

              {/* Section 14 */}
              <section id="section-14" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  14 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  14. Changes to This Privacy Policy
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    We may review and update this Privacy Policy periodically to reflect changes in applicable laws, business activities, website functionality, or data-handling practices.
                  </p>
                  <p>
                    The most recent version will be made available on our official website, together with its effective or last-updated date. Where required by law, we will provide additional notice or seek consent for relevant changes in processing activities.
                  </p>
                </div>
              </section>

              {/* Section 15 */}
              <section id="section-15" className="scroll-mt-32 space-y-4 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  15 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  15. Privacy Enquiries and Grievance Redressal
                </h2>
                <div className="font-sans text-[15px] sm:text-base text-[#13271e]/85 font-light leading-relaxed space-y-3">
                  <p>
                    Individuals may contact Rivanta Green regarding questions, requests, or concerns about the collection, use, protection, or processing of their personal information.
                  </p>
                  <p>
                    We will review privacy-related communications and respond in accordance with applicable legal requirements. Where relevant statutory provisions apply, individuals may pursue further remedies through the appropriate regulatory authority after following the applicable grievance-redressal process.
                  </p>
                </div>
              </section>

              {/* Section 16 */}
              <section id="section-16" className="scroll-mt-32 space-y-6 pt-10 border-t border-[#13271e]/10">
                <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block">
                  16 / 16
                </span>
                <h2 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
                  16. Contact Information
                </h2>

                <div className="p-6 sm:p-8 rounded-3xl bg-[#f8faf8] border border-[#13271e]/10 space-y-6">
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-[#13271e]">
                      Rivanta Green Innovative Ventures Private Limited
                    </h3>
                    <span className="font-mono text-xs text-[#13271e]/60 block mt-1">
                      Corporate Office &amp; Operations Headquarters
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#13271e]/80 font-light">
                    <div className="space-y-1.5 flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#e06425] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium text-[#13271e] block">Corporate Office:</span>
                        B-29, 3rd Floor, Kasturba Nagar,
                        <br />
                        Next to Lake City Hospital,
                        <br />
                        Chetak Bridge, Bhopal,
                        <br />
                        Madhya Pradesh, 462023, India.
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#13271e]">Email Inquiries: </span>
                          <br />
                          <a href="mailto:support@rivantagreen.com" className="text-[#e06425] hover:underline font-normal">
                            support@rivantagreen.com
                          </a>
                          {" • "}
                          <a href="mailto:info@rivantagreen.com" className="text-[#e06425] hover:underline font-normal">
                            info@rivantagreen.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#13271e]">Telephone: </span>
                          <a href="tel:+919893025375" className="text-[#13271e] hover:text-[#e06425]">
                            +91 98930 25375
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                        <div>
                          <span className="font-medium text-[#13271e]">Official Portal: </span>
                          <a href="https://www.rivantagreen.com" className="text-[#13271e] hover:text-[#e06425]">
                            https://www.rivantagreen.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-[#13271e]/8 text-xs text-[#13271e]/75 font-mono">
                    For privacy-related enquiries, please use the subject line: <strong className="text-[#13271e]">“Privacy &amp; Data Protection Request.”</strong>
                  </div>

                  <div className="pt-2 text-xs text-[#13271e]/50 font-mono">
                    © 2026 Rivanta Green Innovative Ventures Private Limited. All rights reserved.
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
