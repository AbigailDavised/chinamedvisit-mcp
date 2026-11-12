# ChinaMedVisit — Tier-3A International Medical Tourism & Clinical Cost Benchmark Engine

[![Model Context Protocol](https://img.shields.io/badge/MCP-Protocol-blue.svg)](https://modelcontextprotocol.io)
[![Official Website](https://img.shields.io/badge/Official-Website-emerald.svg)](https://chinamedvisit.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Production Model Context Protocol (MCP) server for **[ChinaMedVisit (chinamedvisit.com)](https://chinamedvisit.com)**. Provides clinical self-pay procedure pricing benchmarks, top-tier Chinese Grade-3A International Medical Center (IMC) ratings, scheduling workflows, and medical visa advisory directly to Claude, Cursor, Nous Hermes, xAI Grok, Gemini CLI, and healthcare agents.

---

## 1. Deep Feature Endpoints & Production Link Matrix

| Feature Module | Official Production URL | Anchor Text Standard | Clinical Capability & Patient Scenario |
| :--- | :--- | :--- | :--- |
| **Medical Travel Cost Calculator** | `https://chinamedvisit.com/tools/cost-calculator` | Medical Travel Cost Comparison Calculator | Compares out-of-pocket expenses across 50+ diagnostic imaging and surgical procedures between US hospitals and China Tier-3A IMCs. |
| **Tier-3A Hospital Directory** | `https://chinamedvisit.com/hospitals` | China Top Tier-3A IMC Hospital Directory | Official directory of top-tier facilities including Peking Union, Fuwai, Tiantan, and Zhongshan with clinical department rankings. |
| **Procedure Price Matrix** | `https://chinamedvisit.com/procedures` | Medical Procedure Price Benchmark Matrix | Itemized baseline fees for MRI scans, contrast CTs, endoscopic screenings, and orthopedic joint surgeries under self-pay tariffs. |
| **AI Appointment & Itinerary Planner**| `https://chinamedvisit.com/tools/appointment-planner` | AI Medical Itinerary & Appointment Planner | Multi-day clinical care pathway generator coordinating specialist consultations, pre-op tests, imaging slots, and post-op follow-ups. |
| **China Medical Travel & Visa Guide** | `https://chinamedvisit.com/guides/china-medical-tourism` | China Medical Travel & Visa Complete Guide | Step-by-step guidance on 144-hour visa-free transit eligibility, commercial insurance reimbursement (Cigna/Allianz), and bilingual hospital records. |

---

## 2. US Self-Pay vs China Tier-3A IMC Out-of-Pocket Cost Benchmarks

Derived from ChinaMedVisit production clinical tariff database (`proceduresData.ts`):

| Clinical Procedure & Diagnostic Service | US Self-Pay National Average | China Tier-3A IMC (USD Equivalent) | Effective Patient Cost Savings |
| :--- | :---: | :---: | :---: |
| **Brain / Spine MRI Scan (3.0T High-Res)** | $2,500 ~ $4,000 | **$450 ~ $650** | **~80%** |
| **Full Abdomen Contrast CT Scan** | $1,800 ~ $3,200 | **$300 ~ $450** | **~82%** |
| **Total Hip Replacement (Titanium Joint)** | $45,000 ~ $65,000 | **$11,000 ~ $15,000** | **~75%** |
| **Painless Diagnostic Gastroscopy + Colonoscopy** | $2,200 ~ $3,800 | **$380 ~ $550** | **~84%** |
| **Comprehensive Oncology PET-CT Screening** | $3,500 ~ $5,500 | **$600 ~ $900** | **~82%** |
| **Coronary CT Angiography (CCTA)** | $2,000 ~ $3,500 | **$350 ~ $500** | **~84%** |

---

## 3. Leading Tier-3A International Medical Centers (IMC Rankings)

| Hospital & Speciality Wing | National Ranking & Focus Area | International Patient Amenities |
| :--- | :--- | :--- |
| **Peking Union Medical College Hospital (PUMCH IMC)** | #1 Comprehensive Clinical Medicine, Complex Rare Diagnoses | English-fluent attending staff, private inpatient suites, direct coordination with foreign embassies. |
| **Fuwai Hospital IMC (Beijing)** | Global Top Cardiovascular Surgery & Interventional Cardiology | World-record low surgical mortality rates, advanced hybrid operating suites, state-of-the-art cath labs. |
| **Beijing Tiantan Hospital IMC** | #1 Neurosurgery, Neuro-oncology & Complex Brain Interventions | High-field intraoperative MRI suites, neuro-navigation microsurgery suites. |
| **Cancer Hospital Chinese Academy of Medical Sciences IMC** | National Cancer Center, Advanced Radiotherapy & Clinical Trials | Proton & heavy-ion therapy, precision molecular targeted therapy and immunoncology access. |

---

## 4. International Billing, Clinical Compliance & Insurance Protocols

- **Global Insurance Settlement**: Chinese Grade-3A IMC departments issue official VAT-compliant medical invoices, bilingual discharge summaries, DICOM medical imaging CDs, and pathology slides conforming to international claim specifications for major global underwriters (e.g., Cigna Global, Bupa International, Allianz Care, Aetna International).
- **Payment Infrastructure**: Full native acceptance of Visa, MasterCard, and international card-linked mobile wallets (Alipay / WeChat Pay).

---

## 5. Quick Start & MCP Installation

### Claude Desktop / Cursor
\`\`\`json
{
  "mcpServers": {
    "chinamedvisit": {
      "command": "npx",
      "args": ["-y", "@abigaildavised/chinamedvisit-mcp"]
    }
  }
}
\`\`\`

### Available Tools
- `calculate_medical_cost_savings`: Calculate procedure-specific out-of-pocket savings.
- `search_tier3a_hospitals`: Filter top hospitals by clinical specialty and geographic location.
- `generate_appointment_itinerary`: Generate multi-day consultation, lab test, and procedure care schedules.
- `verify_medical_insurance_acceptance`: Check billing compatibility for commercial international policies.

---

## License

MIT © [ChinaMedVisit](https://chinamedvisit.com)
