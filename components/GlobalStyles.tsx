import { createGlobalStyle } from 'styled-components';

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }

export const GlobalStyle = createGlobalStyle`

.next-light-theme {
  /*Default Colors*/
  --white: #FFFFFF;
  --black: #000000;

  /*Main Colors*/
  --salmonColor: #f8d1af;
  --darkGreenColor: #1f432e;
  --darkBlueColor: #1a202c;
  --orangeNormalColor: #e5772e;

  /*Typograph*/
  --textDark: #1a202c;
  --textLight: #ffffff;

  /*Button Component Colors*/
  --defaultButtonColor: #f8d1af;
  --defaultButtonTextColor: #1a202c;
  --secondaryButtonColor: #1a202c;
  --secondaryButtonTextColor: #ffffff;

  /*Card Component Colors*/
  --defaultCardBackgroundColor: #2d3748;
  --defaultCardTextColor: #1a202c;
  --defaultCardShadowColor: #1a202c;

  /*Input Component Colors*/
  --defaultInputBackgroundColor: #f8d1af;
  --defaultInputTextColor: #1a202c;
  --defaultInputBorderColor: #1a202c;
  --defaultErrorInputColor: #1a202c;

  /*Modal Component Colors*/
  --defaultModalBackgroundColor: #1a202c;
  --defaultModalTextColor: #ffffff;

  /*Navbar Color*/
  --navbarBackgroundColor: #1f432e;
  --navbarTextColor: #ffffff;

  /*Footer Color*/
  --footerBackgroundColor: var(--darkGreenColor);
  --footerTextColor: #ffffff;
}

.next-dark-theme {
  /*Default Colors*/
  --white: #FFFFFF;
  --black: #000000;

  /*Main Colors*/
  --salmonColor: #f8d1af;
  --darkGreenColor: #1f432e;
  --darkBlueColor: #1a202c;
  --orangeNormalColor: #e5772e;

  /*Typograph*/
  --textDark: #1a202c;
  --textLight: #ffffff;

  /*Button Component Colors*/
  --defaultButtonColor: #f8d1af;
  --defaultButtonTextColor: #1a202c;
  --secondaryButtonColor: #1a202c;
  --secondaryButtonTextColor: #ffffff;

  /*Card Component Colors*/
  --defaultCardBackgroundColor: #2d3748;
  --defaultCardTextColor: #1a202c;
  --defaultCardShadowColor: #1a202c;

  /*Input Component Colors*/
  --defaultInputBackgroundColor: #f8d1af;
  --defaultInputTextColor: #1a202c;
  --defaultInputBorderColor: #1a202c;
  --defaultErrorInputColor: #1a202c;

  /*Modal Component Colors*/
  --defaultModalBackgroundColor: #1a202c;
  --defaultModalTextColor: #ffffff;

  /*Navbar Color*/
  --navbarBackgroundColor: #1f432e;
  --navbarTextColor: #ffffff;

  /*Footer Color*/
  --footerBackgroundColor: var(--darkGreenColor);
  --footerTextColor: #ffffff;
}

:root {
  --font: 'Poppins', sans-serif;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);

  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: var(--textDark);
  background: rgb(var(--darkBlueColor));
  font-feature-settings: "kern";
}

svg {
  color: var(--textDark);
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;
