// Simple analytics implementation without external dependencies

// Track page views
export const trackPageview = (url?: string) => {
  try {
    const pageUrl = url || window.location.pathname;
    console.log(`[Analytics] Page view: ${pageUrl}`);
    // In a real implementation, you would send this data to your analytics service
  } catch (error) {
    console.error("Error tracking pageview:", error);
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  props?: Record<string, string | number | boolean>,
) => {
  try {
    console.log(`[Analytics] Event: ${eventName}`, props || {});
    // In a real implementation, you would send this data to your analytics service
  } catch (error) {
    console.error(`Error tracking event ${eventName}:`, error);
  }
};

// Analytics hook for React components
export const useAnalytics = () => {
  return {
    trackPageview,
    trackEvent,
  };
};

// Track specific user actions
export const trackSubscription = (email: string) => {
  // Only track that a subscription happened, not the actual email for privacy
  trackEvent("newsletter_subscription");
};

export const trackSignUp = () => {
  trackEvent("sign_up_initiated");
};

export const trackLogin = () => {
  trackEvent("login_initiated");
};

export const trackDemoRequest = () => {
  trackEvent("demo_requested");
};

export const trackThemeChange = (theme: "light" | "dark") => {
  trackEvent("theme_changed", { theme });
};

export const trackLanguageChange = (language: string) => {
  trackEvent("language_changed", { language });
};

// Initialize analytics
export const initAnalytics = () => {
  // Track initial page view
  trackPageview();

  // Add event listeners for navigation changes if needed
  // This is a simplified version - in a real app, you might use a router's navigation events
  window.addEventListener("popstate", () => {
    trackPageview();
  });
};
