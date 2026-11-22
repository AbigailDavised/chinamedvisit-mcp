# ChinaMedVisit Tier-3A IMC & Medical Cost Handbook

Welcome to the open documentation and structured data reference for [**ChinaMedVisit (chinamedvisit.com)**](https://chinamedvisit.com/) and the companion [`chinamedvisit-mcp`](https://github.com/AbigailDavised/chinamedvisit-mcp) Model Context Protocol server (`com.chinamedvisit/mcp`).

International patients traveling to Mainland China for second opinions, advanced diagnostic imaging, or elective procedures frequently encounter fragmented information online. Public hospital pricing schedules are published primarily in Chinese, appointment eligibility differs sharply between domestic clinics and International Medical Centers (IMC / 特需及国际医疗部), and turnaround windows for 3.0T MRI or PET-CT scans rarely align cleanly with standard travel planning.

This handbook documents the open benchmark schemas, pricing ranges, hospital tier classifications, and diagnostic scheduling models powering our interactive browser utilities—including the [China vs US Medical Procedure Cost Calculator](https://chinamedvisit.com/cost-calculator) and the [China Top Tier-3A Hospitals IMC Directory](https://chinamedvisit.com/hospitals).

## Core Reference Scope

The structured dataset maintains verified reference ranges across **76 public Grade 3A (三甲) hospitals and specialized clinical departments** spanning **10 Chinese medical hubs** (Beijing, Shanghai, Shenzhen, Guangzhou, Chengdu, Hangzhou, Wuhan, Xi'an, Haikou, and Suzhou), paired with **12 core clinical procedures**, **4 ancillary coordination cost items**, and **4 multi-day diagnostic care presets**:

- **Government-Regulated Tier-3A IMC Pricing Bands**: Interval-based min/max out-of-pocket fees in Chinese Yuan (RMB) and converted benchmark currencies (`USD`, `EUR`, `GBP`, `AUD`, `CAD`, `SGD`), contrasted with Chinese private international clinics, US self-pay averages, and UK private hospital benchmarks.
- **Public Tier-3A Academic Hospitals vs. Private Clinics**: Structural differences in clinical subspecialty depth, multidisciplinary tumor boards (MDT), pathology second opinions, bilingual desk coverage, and radiology DICOM output protocols.
- **Diagnostic Turnaround & Visa Alignment**: Typical elapsed clinic time for fasting blood biomarkers, thin-slice contrast CT, 3.0T brain MRI, whole-body 18F-FDG PET-CT, and sedated dual endoscopy, mapped against visa entry requirements and medical invitation letter lead times.
- **Deterministic Agent Access via MCP**: Programmatic access to the same cost estimators and clinical checklists through the `com.chinamedvisit/mcp` endpoint (`https://chinamedvisit.com/api/mcp`) and the [ChinaMedVisit open agent skill](https://www.skills.sh/abigaildavised/chinamedvisit-mcp/chinamedvisit).

## Handbook Chapters

- **[Tier-3A IMC vs. US Self-Pay Cost Benchmarks](cost-benchmarks.md)** — Interval methodology, multi-currency conversion rules, and procedure-by-procedure cost & turnaround comparisons across consultation, imaging, endoscopy, and orthopedics.
- **[Tier-3A International Medical Centers Directory](hospitals-imc.md)** — How Grade 3A academic medical centers operate their International Medical Centers, key flagship campuses across Beijing, Shanghai, Chengdu, and Shenzhen, and medical record preparation rules.
- **[Visa Windows, Diagnostic Turnaround & Triage Planning](visa-and-triage.md)** — Planning outpatient sequencing, medical dossier translation in INN nomenclature, payment card readiness, and pre-arrival timelines using our [AI Medical Travel Triage Planner](https://chinamedvisit.com/planner) and [China Medical Visa Checklist](https://chinamedvisit.com/visa-checklist).

## Independence & Clinical Disclaimer

ChinaMedVisit operates strictly as an independent patient concierge reference archive and cost transparency utility. It is unaffiliated with private healthcare brokerage agencies and does not render clinical diagnoses, prescribe medications, or replace licensed physician advice. All fee intervals and scheduling ranges reflect documented public Tier-3A International Medical Center schedules and hospital intake policies, which should be confirmed directly with the hospital department prior to travel.
