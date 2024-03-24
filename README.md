# Accessibility Workshop for Developers

Demo application of the accessibility workshop for developers.
See also the deployed project with the 2 test pages:

- [Inaccessible test page](https://tbd/inaccessible.html).
- [Accessible test page](https://tbd/accessible.html).

---

## Prerequisites

- [Node.js](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Chrome Browser](https://www.google.com/intl/de_de/chrome/)
- [AXE DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd)

## Getting started

### Setup

1. Clone [a11y-workshop](https://github.com/h2ok/a11y-workshop)
1. Switch to **project root directory**

### Install

Run `npm install`

### Start (in dev mode)

Run `npm run start`

---

## Introduction

This workshop is for **developers** who want to learn how to find and fix the most common accessibility issues.
It is based both, on findings from recent accessibility audits and best practices in general, but it doesn't claim to cover a complete list of possible accessibility issues an application can have.

**Hint:** The example pages are static one-pagers, provided only with fake content and do not claim themselves to win design awards.

### Basic knowledge preferable

- Knowledge about **HTML/SCSS**

### App structure

There are two static HTML pages. One is the **"bad practice"** example with many baked in accessibility issues you should find and fix, the other ist the **"best practice"** example which is kind of a clone and aims to be accessible.
Styling is provided through module and component based `SCSS` files.

#### HTML

- **worst practice example** --> `./public/inaccessible.html`
- **best practice example** --> `./public/accessible.html`

#### SCSS

- **module and component specific scss** --> `./src/scss/{accessible|inaccessible}/{modules|components}/{name}.scss`

## Workshop

This workshop should teach you how to find and fix most common accessibility issues on an already developed and deployed application.
Try to find and fix issues only by the help of the tools, guidelines and your own research. Some issues can only be fixed by adapting the CSS files of the component.

**Hint:** If you get stuck, you can always have a sneak preview of the accessibility optimized result page `./public/accessible.html` where you can find the optimized version.

### 1. Automatic testing

Automatic accessibility testing can give you fast results of possible accessibility issues.
Be aware that the results need to be checked manually and do only **cover up to 50% of possible issues**.

#### Warmup: get 1st impressions

1. Start application in dev mode with `yarn start`.
1. Open the two example pages in Chrome browser on **http://localhost:8080/inaccessible.html** and **http://localhost:8080/accessible.html**, compare them visually and by behaviour (e.g. try to navigate by a keyboard) and explore differences.

#### Initial accessibility scan with AXE DevTools

1. Switch to **http://localhost:8080/inaccessible.html**, open Chrome DevTools and navigate to **"AXE DevTools"** (be sure you have installed the extension!).
1. Click **"Scan all of my page"**.
1. **Inspect** all the issues, try to understand what's the meaning and [get familiar with the axe testing tool](https://www.youtube.com/watch?v=wUc4d1Vlxe4).

#### Start fixing issues found by axe DevTools

1. Open up following HTML file in your preferred editor: `./public/inaccessible.html`.
1. Start fixing issues found by **AXE DevTools** in following order: critical, serious, moderate, minor.
1. Save your fixes, retest again, and you should end up with zero issues left.

### 2. Manual testing

As already mentioned, an automatic accessibility test can only cover up to 50% of possible issues. Therefore, we have to inspect each element on the page individually.
To help you get through of the most important issues, we created some guidance in form of an accessibility checklist:

#### The Accessibility Checklist

1. Open [WEBAIM Check List](https://webaim.org/standards/wcag/checklist) and filter against **WCAG 2.2** version and **AA** level.
1. Some of the issues should already have been fixed (e.g. missing alt-text and color contrast issues), and you can "check" them as solved.
1. Go through all sections of the checklist, check if the criteria must be fulfilled and fix/optimize as many issues as possible.

### 3. Compare

1. If you think that you've found and fixed all possible issues, open up Chrome and go to **http://localhost:8080/accessible.html**.
1. Try to discover the visual and technical differences with the testing tools and manually by yourself.
1. Open the best practice example **accessible.html** in your preferred editor and compare the code with the fixes you made.
1. Your fixes and improvements should result with **0 issues left in AXE DevTools**.
