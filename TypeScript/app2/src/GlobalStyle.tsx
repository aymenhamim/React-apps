import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* CSS Reset*/

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture,
svg,
video,
canvas {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  font-style: italic;
  background-repeat: no-repeat;
  background-size: cover;
}

input,
button,
textarea,
select {
  font: inherit;
}

body,
html {
  height: 100%;
  scroll-behavior: smooth;
  font: var(--text-body-2), sans-serif;
  line-height: 1.3;
  font-weight: 400;
  color-scheme: light dark;
  color: #000;
  background-color: var(--base-color-white);


  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* CSS Variables */

:root {
  --base-color-white: #ffffff;
  --base-color-white-smoke: #f5f4f8;
  --base-color-white-60: rgba(255, 255, 255, 0.6);
  --base-color-black: #0a0a0a;
  --base-color-black-lagoon: #14141f;
  --base-color-black-60: rgba(10, 10, 10, 0.6);
  --base-color-grey-25: #fcfcfd;
  --base-color-grey-50: #f9fafb;
  --base-color-grey-100: #f2f4f7;
  --base-color-grey-200: #eaecf0;
  --base-color-grey-300: #d0d5dd;
  --base-color-grey-400: #98a2b3;
  --base-color-grey-500: #667085;
  --base-color-grey-600: #475467;
  --base-color-grey-700: #344054;
  --base-color-grey-800: #1d2939;
  --base-color-grey-900: #101828;
  --base-color-primary-25: #eaf0fd;
  --base-color-primary-50: #ccd7f0;
  --base-color-primary-100: #aabce6;
  --base-color-primary-200: #809bd9;
  --base-color-primary-300: #557acc;
  --base-color-primary-400: #2a58c0;
  --base-color-primary-500: #0037b3;
  --base-color-primary-600: #002e95;
  --base-color-primary-700: #002577;
  --base-color-primary-800: #001b59;
  --base-color-primary-900: #00123c;
  --base-color-error-25: #fffbfa;
  --base-color-error-50: #fef3f2;
  --base-color-error-100: #fee4e2;
  --base-color-error-200: #fecdca;
  --base-color-error-300: #fda29b;
  --base-color-error-400: #f97066;
  --base-color-error-500: #f04438;
  --base-color-error-600: #d92d20;
  --base-color-error-700: #b42318;
  --base-color-error-800: #912018;
  --base-color-error-900: #7a271a;
  --base-color-warning-25: #fffcf5;
  --base-color-warning-50: #fffaeb;
  --base-color-warning-100: #fef0c7;
  --base-color-warning-200: #fedf89;
  --base-color-warning-300: #fec84b;
  --base-color-warning-400: #fdb022;
  --base-color-warning-500: #f79009;
  --base-color-warning-600: #dc6803;
  --base-color-warning-700: #b54708;
  --base-color-warning-800: #93370d;
  --base-color-warning-900: #7a2e0e;
  --base-color-success-25: #edffef;
  --base-color-success-50: #e5ffe8;
  --base-color-success-100: #cefbd4;
  --base-color-success-200: #9ef7b3;
  --base-color-success-300: #6be995;
  --base-color-success-400: #44d382;
  --base-color-success-500: #12b76a;
  --base-color-success-600: #0d9d68;
  --base-color-success-700: #098363;
  --base-color-success-800: #056a59;
  --base-color-success-900: #035752;
  --base-color-info-25: #f5fdff;
  --base-color-info-50: #e6fbff;
  --base-color-info-100: #cdf8ff;
  --base-color-info-200: #9debff;
  --base-color-info-300: #6cd8ff;
  --base-color-info-400: #48c5ff;
  --base-color-info-500: #0ca2ff;
  --base-color-info-600: #077eda;
  --base-color-info-700: #065eb7;
  --base-color-info-800: #034292;
  --base-color-info-900: #012f7a;
  --text-color-white-01: #ffffff;
  --text-color-grey-05: #eaecf0;
  --text-color-grey-01: #d0d5dd;
  --text-color-grey-03: #98a2b3;
  --text-color-grey-04: #667085;
  --text-color-grey-06: #344054;
  --text-color-grey-02: #616161;
  --text-color-grey-07: #dedede;
  --text-color-semantic-03: #7a271a;
  --text-color-semantic-02: #f79009;
  --text-color-semantic-05: #7a2e0e;
  --text-color-semantic-04: #056a59;
  --text-color-semantic-01: #ff413a;
  --text-color-dark-01: #25273a;
  --text-color-dark-02: #090909;
  --text-color-blue-01: #0037b3;
  --text-color-blue-02: #aabce6;
  --text-color-blue-03: #557acc;
  --text-color-blue-04: #002e95;
  --text-color-blue-05: #70baff;
  --border-radius-xx-large: 100vmin;
  --border-radius-x-small: 0.125rem;
  --border-radius-small: 0.25rem;
  --border-radius-medium: 0.5rem;
  --border-radius-x-medium: 0.75rem;
  --border-radius-large: 1rem;
  --border-radius-x-large: 1.5rem;
  --border-size-x-small: 0.025rem;
  --border-size-small: 0.0313rem;
  --border-size-medium: 0.05rem;
  --border-size-x-medium: 0.0625rem;
  --border-size-large: 0.0938rem;
  --border-size-x-large: 0.1125rem;
  --border-size-xx-large: 0.125rem;
  --space-0: 0rem;
  --spacing-space-0: 0px; /* 0rem × 16 = 0px */
  --spacing-space-025: 2px; /* 0.125rem × 16 = 2px */
  --spacing-space-050: 4px; /* 0.25rem × 16 = 4px */
  --spacing-space-075: 6px; /* 0.375rem × 16 = 6px */
  --spacing-space-100: 8px; /* 0.5rem × 16 = 8px */
  --spacing-space-150: 12px; /* 0.75rem × 16 = 12px */
  --spacing-space-200: 16px; /* 1rem × 16 = 16px */
  --spacing-space-250: 20px; /* 1.25rem × 16 = 20px */
  --spacing-space-300: 24px; /* 1.5rem × 16 = 24px */
  --spacing-space-400: 32px; /* 2rem × 16 = 32px */
  --spacing-space-500: 40px; /* 2.5rem × 16 = 40px */
  --spacing-space-600: 48px; /* 3rem × 16 = 48px */
  --spacing-space-800: 64px; /* 4rem × 16 = 64px */
  --spacing-space-1000: 80px; /* 5rem × 16 = 80px */

  --chat-grey: #f4f4f4;
  --team-card-avatar-color-1: #fffbe6;
  --team-card-avatar-color-2: #d9e5ff;
  --team-card-avatar-color-3: #e8fbef;
  --auth-page-slide-color-div-blur: rgba(255, 255, 255, 0.63);
  --base-white: #ffffff;
  --base-white-smoke: #f5f4f8;
  --base-white-60: rgba(255, 255, 255, 0.6);
  --base-white-15: rgba(255, 255, 255, 0.15);
  --base-black: #0a0a0a;
  --base-black-lagon: #14141f;
  --base-black-60: rgba(10, 10, 10, 0.6);
  --base-black-15: rgba(10, 10, 10, 0.15);
  --base-grd-1: linear-gradient(90deg, #6cd8ff 0%, #48c5ff 50%, #0ca2ff 100%);
  --grey-25: #fcfcfd;
  --grey-50: #f9fafb;
  --grey-100: #f2f4f7;
  --grey-200: #eaecf0;
  --grey-300: #d0d5dd;
  --grey-400: #98a2b3;
  --grey-500: #667085;
  --grey-600: #475467;
  --grey-700: #344054;
  --grey-800: #1d2939;
  --grey-900: #101828;
  --primary-25: #eaf0fd;
  --primary-50: #ccd7f0;
  --primary-100: #aabce6;
  --primary-200: #809bd9;
  --primary-300: #557acc;
  --primary-400: #2a58c0;
  --primary-500: #0037b3;
  --primary-600: #002e95;
  --primary-700: #002577;
  --primary-800: #001b59;
  --primary-900: #00123c;
  --error-25: #fffbfa;
  --error-50: #fef3f2;
  --error-100: #fee4e2;
  --error-200: #fecdca;
  --error-300: #fda29b;
  --error-400: #f97066;
  --error-500: #f04438;
  --error-600: #d92d20;
  --error-700: #b42318;
  --error-800: #912018;
  --error-900: #7a271a;
  --warning-25: #fffcf5;
  --warning-50: #fffaeb;
  --warning-100: #fef0c7;
  --warning-200: #fedf89;
  --warning-300: #fec84b;
  --warning-400: #fdb022;
  --warning-500: #f79009;
  --warning-600: #dc6803;
  --warning-700: #b54708;
  --warning-800: #93370d;
  --warning-900: #7a2e0e;
  --success-25: #edffef;
  --success-50: #e5ffe8;
  --success-100: #cefbd4;
  --success-200: #9ef7b3;
  --success-300: #6be995;
  --success-400: #44d382;
  --success-500: #12b76a;
  --success-600: #0d9d68;
  --success-700: #098363;
  --success-800: #056a59;
  --success-900: #035752;
  --info-25: #f5fdff;
  --info-50: #e6fbff;
  --info-100: #cdf8ff;
  --info-200: #9debff;
  --info-300: #6cd8ff;
  --info-400: #48c5ff;
  --info-500: #0ca2ff;
  --info-600: #077eda;
  --info-700: #065eb7;
  --info-800: #034292;
  --info-900: #012f7a;
  --auth-modal: 0 0 7px 20px #f2f4f7;
  --shadows-small: 0 0 4px 0 #00000026, 0 0 5px 0 #676e7614;
  --shadows-medium: 0 0 5px 0 #676e7614, 0 1px 1px 0 #0000001f;
  --shadows-large: 0 5px 15px 0 #0000001f, 0 15px 35px 0 #676e7614;
  --shadows-hover-states-primary: 0 2px 5px 0 #676e7614, 0 0 0 1px #000000a3,
    0 1px 1px 0 #0000001f;
  --shadows-hover-states-secondary: 0 2px 5px 0 #676e7614, 0 0 0 1px #676e763d,
    0 1px 1px 0 #0000001f;
  --shadows-hover-states-error: 0 2px 5px 0 #f3414114, 0 0 0 2px #f3414166,
    0 1px 1px 0 #0000001f;
  --shadows-hover-states-warning: 0 2px 5px 0 #e9a23b14, 0 0 0 2px #e9a23b66,
    0 1px 1px 0 #0000001f;
  --shadows-hover-states-success: 0 2px 5px 0 #53b48314, 0 0 0 2px #53b48366,
    0 1px 1px 0 #0000001f;
  --shadows-focus-states-primary: 0 0 0 4px #676e7629, 0 2px 5px 0 #676e7614,
    0 0 0 1px #000000a3, 0 1px 1px 0 #0000001f;
  --shadows-focus-states-secondary: 0 0 0 4px #676e7629, 0 2px 5px 0 #676e7614,
    0 0 0 1px #676e7629, 0 1px 1px 0 #0000001f;
  --shadows-focus-states-error: 0 0 0 4px #f3414129, 0 2px 5px 0 #676e7614,
    0 0 0 1px #f3414129, 0 1px 1px 0 #0000001f;
  --shadows-focus-states-success: 0 0 0 4px #53b48329, 0 2px 5px 0 #676e7614,
    0 0 0 1px #53b48329, 0 1px 1px 0 #0000001f;
  --shadows-focus-states-warning: 0 0 0 4px #e9a23b29, 0 2px 5px 0 #676e7614,
    0 0 0 1px #e9a23b29, 0 1px 1px 0 #0000001f;

  --shadows-button: 0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
  --shdows-button-focused: 0px 0px 0px 4px rgba(103, 110, 118, 0.16),
    0px 2px 5px rgba(103, 110, 118, 0.08),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);

  --font-families-sf-pro-display: 'SF Pro Display';
  --line-heights-0: 42;
  --line-heights-1: 96;
  --line-heights-2: 64;
  --line-heights-3: 48;
  --line-heights-4: 40;
  --line-heights-5: 32;
  --line-heights-6: 17;
  --line-heights-7: 24;
  --line-heights-8: 16;
  --line-heights-9: 12;
  --line-heights-10: 9;
  --font-weights-sf-pro-display-0: 400;
  --font-weights-sf-pro-display-1: 900;
  --font-weights-sf-pro-display-2: 300;
  --font-weights-sf-pro-display-3: 700;
  --font-size-0: 12px;
  --font-size-1: 14px;
  --font-size-2: 16px;
  --font-size-3: 24px;
  --font-size-4: 32px;
  --font-size-5: 36px;
  --font-size-6: 40px;
  --font-size-7: 48px;
  --font-size-8: 64px;
  --font-size-9: 96px;
  --letter-spacing-0: 0em;
  --paragraph-spacing-0: 0;
  --headline-regular-1: 400 36px/42 'SF Pro Display';
  --text-hero: 900 96px/96 'SF Pro Display';
  --text-headline-1-light: 300 64px/64 'SF Pro Display';
  --text-headline-1: 700 64px/64 'SF Pro Display';
  --text-headline-2: 700 48px/42 'SF Pro Display';
  --text-headline-3: 700 40px/48 'SF Pro Display';
  --text-headline-4: 700 32px/40 'SF Pro Display';
  --text-body-1: 400 24px/1 'SF Pro Display';
  --text-body-1-bold: 700 24px/1 'SF Pro Display';
  --text-body-2: 400 16px/1 'SF Pro Display';
  --text-body-2-bold: 700 16px/1 'SF Pro Display';
  --text-caption-1: 400 14px/1 'SF Pro Display';
  --text-caption-1-bold: 700 14px/1 'SF Pro Display';
  --text-caption-2: 400 12px/1 'SF Pro Display';
  --text-caption-2-bold: 700 12px/1 'SF Pro Display';
  --text-hairline-1: 700 16px/1 'SF Pro Display';
  --text-hairline-2: 700 12px/1 'SF Pro Display';
  --text-button-1: 700 16px/16 'SF Pro Display';
  --text-button-2: 700 14px/16 'SF Pro Display';
  --text-case-none: none;
  --text-decoration-none: none;
  --paragraph-indent-0: 0px;
}





`;

export { GlobalStyle };
