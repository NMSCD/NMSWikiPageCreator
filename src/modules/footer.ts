/**
 * @fileoverview Generates the footer and handles theming, as well as user defined global default values.
 */

import { hideDiscoverer, sanitiseString, triggerEvent } from '../common';
import { footerInputs, globalElements, pageData } from '../variables/objects';

/**
 * Changes the theme of the page and sets a localStorage variable to track the theme between page loads.
 * @function
 * @returns {void}
 */
// Define the URLs of your images
const imagenes = {
  light: 'assets/images/webp/shared/nmscdbanner.webp',
  dark: 'assets/images/webp/shared/nmscdbannerwhite.webp',
};

export function switchTheme(): void {
  // Read the current localStorage theme
  let currentTheme = localStorage.getItem('theme') ?? 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Changes the theme
  localStorage.setItem('theme', newTheme);
  document.documentElement.dataset.theme = newTheme;

  // Changes the banner image
  setBannerImage(newTheme);
}

// adding delay to allow the CSS transition to complete. This is only for Chrome, Firefox would work with any timeout (even 0) #chromesucks
setTimeout(() => {
  delete document.documentElement.dataset.transition;
}, 400); // NoSonar wait 400ms so Chrome can finish its transition

function setBannerImage(theme: 'light' | 'dark') {
  const imagen = document.querySelector('.banner img') as HTMLImageElement;
  if (imagen) {
    imagen.src = imagenes[theme];
  } else {
    console.log('Element .banner img not found');
  }
}

// Make sure the DOM is fully loaded before setting the initial image
document.addEventListener('DOMContentLoaded', () => {
  const theme: 'light' | 'dark' = (localStorage.getItem('theme') ?? 'light') as 'light' | 'dark';
  document.documentElement.dataset.theme = theme;
  setBannerImage(theme);
});

/**
 * Displays the settings modal and restores default values.
 * @function
 * @global
 * @return {void}
 */
export function showSettings() {
  restoreDefaults();
  const dialog = globalElements.input.settings as HTMLDialogElement;
  dialog.style.scale = '0';
  dialog.showModal();
  dialog.style.scale = '1';
  dialog.scrollTo(0, 0);

  const settings = JSON.parse(localStorage.getItem('defaultSettings') ?? '{}');
  for (const setting in settings) {
    const input: HTMLInputElement | HTMLSelectElement | null = dialog.querySelector(`.data [data-store="${setting}"]`);
    if (!input) continue;
    input.value = settings[setting];
    if (input.id === 'portalglyphsDefault') triggerEvent(input, 'input');
  }
  hideDiscoverer();
  delete pageData.restored;
}

/**
 * Called when user submits values. Stores entered values in localstorage.
 * @function
 * @returns {void}
 */
export function updateDefaultValues() {
  if (pageData.restored) {
    localStorage.removeItem('defaultSettings');
    delete pageData.restored;
    return;
  }
  const settings: {
    [key: string]: string;
  } = {};
  const inputs = Array.from(footerInputs);
  for (const input of inputs) {
    const value = input?.value;
    const store = input?.dataset?.store;
    const selectInput = input as HTMLSelectElement;
    if ((selectInput?.options?.[selectInput.options.length - 1]?.value === value || value) && store)
      settings[store] = sanitiseString(value);
  }

  localStorage.setItem('defaultSettings', JSON.stringify(settings));
}

/**
 * Populates input fields with default values on page load and on reset.
 * Retrieves default values from local storage, if available.
 * @function
 * @returns {void}
 */
export function readDefaultValues() {
  const settings = JSON.parse(localStorage.getItem('defaultSettings') ?? '{}');
  for (const setting in settings) {
    const input = (() => {
      if (setting.split(' ').length > 1) {
        return setting
          .split(' ')
          .map((id) => document.getElementById(id))
          .find((element) => element);
      } else {
        return document.getElementById(setting);
      }
    })();
    if (!input) continue;

    (input as HTMLInputElement | HTMLSelectElement).value = settings[setting];

    switch (setting.split(' ')[0]) {
      case 'wealthInput':
        triggerEvent(input, 'change');
        break;

      case 'portalglyphsInput':
      case 'systemInput':
      case 'discoveredlinkInput':
      case 'discoveredInput':
      case 'builderlinkInput':
      case 'builderInput':
        triggerEvent(input, 'input');
        break;
    }
  }
}

/**
 * Sets dialog options back to their default values when the user resets custom globals.
 * @function
 * @returns {void}
 */
export function restoreDefaults() {
  /**
   * The input HTML elements in the footer.
   * @type {NodeList}
   */
  const inputs = Array.from(footerInputs);
  for (const input of inputs) {
    if (!input?.value) continue;
    if (input.tagName.toLowerCase() === 'select') {
      input.value = (input as HTMLSelectElement).options?.[0]?.value;
    } else {
      input.value = '';
    }
  }
  hideDiscoverer();
  pageData.restored = true;
}

/**
 * Validates a glyph user input and updates the UI with any errors
 * @param {HTMLInputElement} input - The user's glyph input
 */
