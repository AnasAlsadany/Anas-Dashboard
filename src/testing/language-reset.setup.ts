import { beforeEach } from 'vitest';

/**
 * Specs share one jsdom per worker. A spec that switches to English and does not switch back
 * would otherwise leak that language into the next spec, whose assertions assume the app
 * default (Arabic). Start every test from the default language.
 */
beforeEach(() => {
  localStorage.setItem('codetech.language', 'ar');
  document.documentElement.dir = 'rtl';
  document.documentElement.lang = 'ar';
});
