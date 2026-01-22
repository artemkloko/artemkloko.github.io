import { createRouter, createWebHistory } from 'vue-router';
import CVView from '../views/CVView.vue';
import { i18n, SUPPORTED_LOCALES, type Locale } from '../i18n';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: () => {
        // Simple default to English.
        // Improvement: Check navigator.language here
        return '/en';
      }
    },
    {
      path: '/:locale',
      name: 'cv',
      component: CVView
    }
  ]
});

router.beforeEach((to, _from, next) => {
  const localeParams = to.params.locale as string;

  // If the route has a locale param, handle it
  if (localeParams) {
      if (SUPPORTED_LOCALES.includes(localeParams as Locale)) {
          // Update the i18n locale
          if (i18n.global.locale.value !== localeParams) {
              i18n.global.locale.value = localeParams as Locale;
          }

          // Also update the HTML lang attribute for accessibility
          document.documentElement.setAttribute('lang', localeParams);

          next();
      } else {
          // Invalid locale, redirect to default
          // Avoid infinite loops by checking if we are already trying to go to /en
          if (localeParams !== 'en') {
             next('/en');
          } else {
             next();
          }
      }
  } else {
      next();
  }
});

export default router;
