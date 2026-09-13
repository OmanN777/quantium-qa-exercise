# Quantium Technology - QA Automation Take-Home Assessment

**Candidate:** Natawat Tephassadin na Ayutaya (Namo)  
**Role:** QA Automation Engineer (Junior-Mid)  
**Framework:** TypeScript · Playwright Test (`@playwright/test`) · Node.js  
**Target Application:** [QA Candidate Testing Playground](https://qa-exercise.quantiumtech.net)  
**Test Results:** **19 / 19 Tests Passed (14 / 14 Assignments, 100% Pass Rate)** · Execution Time: ~3 minutes  

---

## Test Results

Automated test suite covering the 14 UI Test Automation Challenges for Quantium Technology, built with TypeScript and Playwright.

### Test Execution Matrix

| # | Assignment | Description | Strategy | Status |
|:---:|:---|:---|:---|:---:|
| **01** | **Text Input** | Input value synchronization with button label | `getByTestId('text-input')` $\rightarrow$ `getByTestId('update-button')` | **PASS** |
| **02** | **Client Side Delay** | Asynchronous client-side computation (~5s) | Waits on `getByTestId('result')` with timeout | **PASS** |
| **03** | **AJAX Data** | Server data fetch & record count validation | Waits for response and asserts `data-count` attribute | **PASS** |
| **04** | **Scrollbars** | Off-screen element inside scroll container | `scrollIntoViewIfNeeded()` + click target | **PASS** |
| **05** | **Dynamic Table** | Column order permutation on reload | Dynamically locates `CPU` column index and asserts Chrome row | **PASS** |
| **06** | **Progress Bar** | Stops progress bar at exactly 75% | Evaluates `aria-valuenow` via `waitForFunction` $\rightarrow$ Triggers Stop | **PASS** |
| **07** | **Visibility** | Verifies 6 distinct hiding techniques | Evaluates computed styles, opacity, bounding boxes, and overlays | **PASS** |
| **08** | **Overlapped Element** | Input partially covered by sticky header | Focuses field via explicit click prior to typing | **PASS** |
| **09** | **Shadow DOM** | Web component with shadow root | Uses Playwright native shadow-piercing locators | **PASS** |
| **10** | **File Upload** | File input handling | `setInputFiles()` with test asset $\rightarrow$ Validates uploaded list | **PASS** |
| **11** | **Mystery Button** | Sandboxed `<iframe>` interaction | `frameLocator('[data-testid="sandbox-frame"]')` $\rightarrow$ Clicks button | **PASS** |
| **12** | **Disabled Input** | Delayed enabled state transition (~4s) | Waits for `toBeEnabled()` before filling value | **PASS** |
| **13** | **Chart Interaction** | SVG column hover & tooltip validation | Hovers SVG `<rect>` columns Mon–Sun $\rightarrow$ Asserts tooltip value | **PASS** |
| **14** | **Auto Wait** | Multi-stage lifecycle sequence (Loading $\rightarrow$ Almost $\rightarrow$ Ready) | Waits for label "Click me now" and clicks target | **PASS** |

---

## Project Structure

```text
quantium-qa-exercise/
├── .github/                  # CI/CD Workflows
│   └── workflows/
│       └── playwright.yml    # Automated test execution on push / PR
├── pages/                    # Component Page Object Model (Encapsulates selectors & actions)
│   ├── BasePage.ts           # Abstract base page handling navigation & container rendering
│   ├── LoginPage.ts          # Authentication page object
│   └── topics/               # Dedicated topic page object components (Assignments 01-14)
│       ├── TextInputPage.ts
│       ├── ClientSideDelayPage.ts
│       ├── AjaxDataPage.ts
│       ├── ScrollbarsPage.ts
│       ├── DynamicTablePage.ts
│       ├── ProgressBarPage.ts
│       ├── VisibilityPage.ts
│       ├── OverlappedElementPage.ts
│       ├── ShadowDomPage.ts
│       ├── FileUploadPage.ts
│       ├── MysteryButtonPage.ts
│       ├── DisabledInputPage.ts
│       ├── ChartInteractionPage.ts
│       └── AutoWaitPage.ts
├── fixtures/                 # Custom Playwright test fixtures & dependency injection
│   └── baseTest.ts           # Injects authenticated session state & strongly-typed POM fixtures
├── tests/                    # 14 Test specifications consuming POM fixtures
│   ├── 01-text-input.spec.ts
│   ├── ...
│   └── 14-auto-wait.spec.ts
├── test-data/                # Static test assets
│   └── sample_document.txt   # Fixture for file upload assignment
├── playwright.config.ts      # Test runner configuration (reporters, viewport, timeouts)
├── package.json              # Project scripts & dependencies
└── tsconfig.json             # TypeScript compiler options
```

### Implementation Notes:
1. **Dynamic Waiting:** Uses Playwright built-in auto-waiting, `page.waitForFunction`, and web-first assertions instead of static sleeps.
2. **Session Storage Authentication Reuse:** The `baseTest` fixture injects authenticated session state (`sessionStorage.setItem('qa.user', 'Candidate')`) before page scripts execute, allowing tests 01–14 to navigate directly to their respective topic routes without repeated authentication overhead.
3. **Visibility Evaluation (Assignment 07):** Evaluates computed CSS properties (`opacity: 0`, `visibility: hidden`, `display: none`), bounding box coordinates, and overlay occlusion.

---

## Quick Start & Execution Guide

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (v9 or higher)

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/OmanN777/quantium-qa-exercise.git
cd quantium-qa-exercise
npm install
npx playwright install chromium
```

### 3. Run Automated Tests

#### Run All Tests (Headless):
```bash
npm test
```

#### Run All Tests (Headed Mode):
```bash
npm run test:headed
```

#### Run a Specific Assignment:
```bash
npx playwright test tests/01-text-input.spec.ts
npx playwright test tests/09-shadow-dom.spec.ts
```

### 4. View Test Report
Playwright automatically generates an interactive HTML report. To open it in your browser:
```bash
npm run test:report
```
