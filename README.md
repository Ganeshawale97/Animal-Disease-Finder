# 🐾 JeevRaksha — Animal Health Intelligence Platform

<p align="center">
  <strong>Accessible animal-health information • Multilingual • AI-ready • Mobile-first</strong>
</p>

<p align="center">
  <a href="https://github.com/Ganeshawale97/Animal-Disease-Finder"><img src="https://img.shields.io/badge/Status-Prototype-17633f?style=for-the-badge" alt="Prototype"></a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

> **JeevRaksha 2.0** is a frontend prototype for an animal-health information platform that helps users explore observed symptoms, possible educational matches, preventive-care information, animal profiles, health history and veterinary-support workflows.

## 🚀 What is JeevRaksha?

JeevRaksha (जीवरक्षा) is being developed as a simple, multilingual and scalable digital interface for animal-health awareness.

The long-term product vision combines:

**Symptom guidance + animal profiles + health records + veterinary discovery + AI-assisted workflows**

The current release is intentionally a **prototype**. AI diagnosis, live veterinary listings, maps, authentication, backend persistence and clinical decision support are future integrations rather than claims of functionality in the current frontend.

## ✨ Prototype Highlights

| Module | Current Prototype |
|---|---|
| 🏠 Dashboard | Modern animal-health command center |
| 🔎 Symptom Checker | Interactive animal + symptom matching |
| 🐾 My Animals | Animal profile concept |
| 📋 Health History | Timeline-based records concept |
| 🩺 Veterinary Locator | Provider discovery UI ready for maps/API |
| 🤖 AI Assistant | Conversational AI workflow concept |
| 📷 Image Screening | Upload workflow concept |
| 🌐 Languages | English / Hindi / Marathi foundation |
| 📱 Responsive UI | Desktop + mobile navigation |

## 🧠 Product Workflow

```text
                    USER
                      │
                      ▼
              ┌───────────────┐
              │ Select Animal │
              └───────┬───────┘
                      ▼
              ┌───────────────┐
              │    Symptoms   │
              └───────┬───────┘
                      ▼
              ┌───────────────┐
              │ Matching Layer│
              └───────┬───────┘
                      ▼
          ┌───────────┴───────────┐
          ▼                       ▼
   Educational Info        Veterinary Support
          │                       │
          └───────────┬───────────┘
                      ▼
                Health Record
```

## 🐄 Supported Animal Categories

The prototype currently demonstrates workflows for:

- 🐄 Cow
- 🐃 Buffalo
- 🐐 Goat
- 🐑 Sheep
- 🐕 Dog
- 🐈 Cat
- 🐎 Horse
- 🐔 Poultry

The data model is designed to be expanded without changing the core interface.

## 🔎 Symptom Matching

The prototype lets a user select an animal and observed symptoms and then displays **possible educational matches**.

Example:

```text
Animal: Cow

Observed symptoms:
✓ Fever
✓ Cough
✓ Weakness

             ↓

Possible educational matches

Respiratory illness pattern     72%
General illness pattern         58%
```

The displayed percentage is a prototype matching indicator, **not a clinical probability**.

## 🤖 AI-Ready Architecture

The interface includes an AI Assistant concept so the project can later connect to a validated knowledge system and machine-learning services.

```text
User Observation
       │
       ▼
Input Validation
       │
       ▼
AI / Knowledge Layer
       │
 ┌─────┴─────┐
 ▼           ▼
Symptoms    Image
 ▼           ▼
Knowledge / ML Models
       │
       ▼
Explainable Educational Guidance
       │
       ▼
Veterinary Escalation When Needed
```

## 📷 Image-Based Screening Roadmap

Future versions can explore computer vision for visible signs in animal images.

Potential pipeline:

```text
Upload Image
     ↓
Image Quality Check
     ↓
Animal Detection
     ↓
Feature / Visual Sign Analysis
     ↓
Validated ML Model
     ↓
Educational Screening Result
     ↓
Veterinary Review
```

This feature requires a properly validated model and veterinary oversight before it could be used for real diagnostic decisions.

## 📍 Veterinary Services

The prototype contains a veterinary-discovery workflow that can later integrate with:

- Maps APIs
- Location services
- Verified veterinary clinics
- Veterinary professionals
- Emergency-service directories
- Contact and navigation actions

## 📊 Animal Health Records

Future records can include:

- Animal profile
- Age and breed
- Weight
- Symptoms observed
- Health checks
- Vaccination records
- Veterinary visits
- Treatment history
- Reminders
- Longitudinal health trends

## 🌐 Accessibility & Rural-First Direction

The interface is designed with future rural deployment in mind:

- Large touch targets
- Simple navigation
- Multilingual foundation
- Mobile-first layout
- Low-complexity workflows
- Low-bandwidth-friendly architecture as a future target
- Voice-assistance compatibility as a future enhancement

## 🛠️ Technology Stack

- **HTML5** — semantic application structure
- **CSS3** — responsive UI and visual system
- **JavaScript** — interactions and prototype logic
- **Git/GitHub** — source control and collaboration

Future releases may introduce:

- REST APIs
- Database storage
- Authentication
- AI/ML services
- Maps/location APIs
- PWA capabilities

## 📁 Versioning Strategy

**Important: existing versions will be preserved.**

The repository contains earlier JeevRaksha iterations such as `JeevRaksha.html` and `JeevRaksha 1.1.html` through `JeevRaksha 1.6.html`. These are historical development versions and should not be overwritten. fileciteturn3file0L2-L2

For future changes, use a new version rather than replacing an old one:

```text
JeevRaksha.html
JeevRaksha 1.1.html
JeevRaksha 1.2.html
...
JeevRaksha 1.6.html

JeevRaksha 2.0.html
JeevRaksha 2.1.html
JeevRaksha 2.2.html
```

For larger experiments:

```text
prototypes/
├── JeevRaksha-2.1-ai.html
├── JeevRaksha-2.2-vet-locator.html
└── JeevRaksha-3.0-full-platform.html
```

`index.html` is the current public-facing prototype entry point.

See [`CHANGELOG.md`](CHANGELOG.md) for the release roadmap.

## 📂 Current Repository Structure

```text
Animal-Disease-Finder/
│
├── index.html                         # JeevRaksha 2.0 prototype
├── JeevRaksha.html                    # Original version
├── JeevRaksha 1.1.html                # Historical version
├── JeevRaksha 1.2.html
├── JeevRaksha 1.3.html
├── JeevRaksha 1.4.html
├── JeevRaksha 1.5.html
├── JeevRaksha 1.6.html
├── animal-disease-finder-enhanced.html
├── jeevraksha-cover.html
├── Preview web
│
├── docs/
│   └── PROJECT_DOCUMENTATION.md
│
├── CHANGELOG.md
├── CONTRIBUTING.md
├── .gitignore
└── README.md
```

## ▶️ Run Locally

### Option 1 — Browser

Download/clone the repository and open `index.html` in a modern browser.

### Option 2 — VS Code Live Server

1. Open the repository in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🧪 Prototype Testing Checklist

- [ ] Dashboard navigation works
- [ ] Animal selection works
- [ ] Symptoms can be selected/deselected
- [ ] Results update after analysis
- [ ] Empty symptom input is handled
- [ ] My Animals screen loads
- [ ] Health History loads
- [ ] Veterinary screen loads
- [ ] AI Assistant accepts input
- [ ] Image upload interaction works
- [ ] Language selector works
- [ ] Mobile navigation works
- [ ] Layout works on small screens

## 🔮 Roadmap

### 2.1 — Data Expansion

- 30+ animal/disease entries
- Structured disease dataset
- Better symptom matching
- Search and filtering
- Expanded translations

### 2.2 — Product Experience

- Image preview
- Health analytics
- Vaccination reminders
- Animal health charts
- Improved offline support

### 3.0 — Connected Platform

- Backend API
- Database
- Authentication
- Persistent animal profiles
- Verified veterinary directory
- Maps integration

### 4.0 — AI Research Layer

- Validated symptom-analysis models
- Computer-vision research
- Explainable results
- Human/veterinary review workflows
- Model evaluation and safety monitoring

## ⚠️ Veterinary Disclaimer

JeevRaksha is an educational software prototype. Symptom matching and future AI features must not be treated as veterinary diagnosis. Do not use this application to decide medication or treatment without qualified veterinary advice. Seek professional veterinary care for severe, persistent, worsening, or emergency symptoms.

## 👨‍💻 Author

**Ganesh Awale**  
Information Technology Student · Frontend Developer · Project Builder

GitHub: [@Ganeshawale97](https://github.com/Ganeshawale97)

## 📄 License

License information should be added before external redistribution or reuse. A suitable open-source license can be selected based on the project's intended use.

---

<p align="center"><strong>🐾 JeevRaksha — Technology for Better Animal-Health Awareness</strong></p>
