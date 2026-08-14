# Project Proposal: CityWise AI — All-India Digital Governance & Welfare Portal

---

## 1. Executive Summary

**Project Title:** CityWise AI (सिटीवाइज़ एआई — संपूर्ण भारत सुशासन पोर्टल)  
**Target Domain:** Digital Public Infrastructure (DPI), e-Governance, Civic Tech, Welfare Accessibility  
**Target Audience:** Rural & Urban Citizens across all 28 States & 8 Union Territories of India.  

**CityWise AI** is a comprehensive, citizen-first digital governance portal designed to bridge the accessibility gap between government welfare services, localized administrative helplines, and citizens across India. The platform features an interactive official political map of India, a 3-tier geographical location drill-down (`[State] -> [District/City] -> [Village/Ward]`), a live multi-filter Government Schemes Engine connected with `myScheme.gov.in` and `data.gov.in` logic, and direct departmental emergency helplines for 8 major government departments across all 36 Indian regions.

---

## 2. Problem Statement & Motivation

1. **Information Fragmentation:** Government welfare schemes and departmental helpline numbers are scattered across hundreds of disparate state and central websites, making it difficult for everyday citizens—especially in rural India—to discover eligible benefits.
2. **Lack of Hyper-Local Context:** Most existing portals offer state-level data but fail to provide village/ward level administrative helplines and department contact numbers for local issues (Water Board, PWD Roads, Power Discom, Municipal Corporation).
3. **Complex UI & Language Barriers:** Complex government portals with heavy jargon frustrate non-technical users. There is an urgent need for a bilingual (Hindi & English), user-friendly platform with voice assistance capabilities.

---

## 3. Key Objectives

- **100% All-India Coverage:** Structure and deliver governance data for all 28 States and 8 Union Territories.
- **3-Tier Hyper-Local Drill Down:** Enable seamless location exploration from State to District/City to Village/Ward.
- **Comprehensive Welfare Scheme Engine:** Provide dynamic, multi-parameter scheme search based on State, Age, Gender, Occupation (Farmer, Student, Vendor, Worker, Artisan), and Income.
- **Target Eligibility Visibility:** Clearly display *"किसके लिए है"* (Target Eligibility), required documents checklist, and direct official application portal links.
- **Bilingual & Inclusive Accessibility:** Provide intuitive Hindi and English typography alongside voice assistance for rural accessibility.

---

## 4. System Architecture & Core Modules

```
                        +---------------------------------------------+
                        |             CityWise AI Portal              |
                        +---------------------------------------------+
                                               |
       +---------------------------------------+---------------------------------------+
       |                                       |                                       |
+--------------+                       +---------------+                       +---------------+
| Home Portal  |                       | Official Map  |                       | Schemes Engine|
| Module       |                       | Explorer      |                       | Module        |
+--------------+                       +---------------+                       +---------------+
       |                                       |                                       |
 - Categorized Regional Chips            - Official India Map Visual             - Multi-Filter Search Engine
 - 3-Step Quick Drill-down               - Interactive Hotspots                  - 30+ Central & State Schemes
 - Live Ticker Feed                      - Regional Boundaries                   - Live Data Sync Status
 - Voice Assist                          - State Stat Cards                      - Document Checklists
```

---

## 5. Feature Highlights

| Module | Features & Deliverables |
| :--- | :--- |
| **Official India Map Explorer** | Features the official political map of India with interactive SVG pins overlay for all 36 States/UTs. |
| **Location Drill-Down** | 3-step navigation (`State -> City -> Village`) loading localized CM, Capital, Helplines, and Governance stats. |
| **Departmental Helplines** | Direct click-to-call numbers for 8 core departments (Emergency 112, Water Board, PWD, Electricity 1912, Municipal 1800-11-8585, Health 104, Kisan Call Center 1800-180-1551, Transport). |
| **State & Central Schemes Engine** | Multi-attribute search engine returning 30+ real verified schemes (PM-KISAN, MP Ladli Behna, UP Sumangala, Bihar Kanya Utthan, Rajasthan Ayushman, PM Awas, PM Mudra, PM Vishwakarma, etc.). |
| **Upcoming Policy Radar** | Highlights upcoming 2025-2026 policies like PM Surya Ghar Rooftop Solar & UP EV Subsidy. |

---

## 6. Technology Stack

- **Frontend Core:** HTML5, Modern Vanilla JavaScript (ES6+), CSS3 Design System.
- **Styling & Aesthetics:** Dark Mode Glassmorphism, CSS Grid/Flexbox, Custom HSL Color Tokens, Font Awesome icons.
- **Typography:** Google Fonts (`Tiro Devanagari Hindi`, `Plus Jakarta Sans`, `Space Grotesk`).
- **Server Environment:** Python 3 HTTP Server (`python -m http.server 8080`).
- **Voice Assist:** Web Speech API (`SpeechSynthesisUtterance` for Hindi audio narration).

---

## 7. Expected Impact & Future Roadmap

- **Empowering Rural Citizens:** Simplifies government service discovery for citizens in villages and small towns without technical friction.
- **Future Integration:** Direct integration with WhatsApp Bot APIs and DigiLocker for document verification.
