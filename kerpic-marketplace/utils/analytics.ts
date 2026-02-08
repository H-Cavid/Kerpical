// utils/analytics.ts

/**
 * Google Analytics-ə hadisə (event) göndərmək üçün mərkəzi funksiya.
 * window.gtag obyektinin mövcudluğunu yoxlayır və TypeScript xətalarının qarşısını alır.
 */
export const trackEvent = (eventName: string, params: object) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, params);
    }
  };
  
  /**
   * Müxtəlif yerlərdəki WhatsApp düymələrini izləmək üçün funksiya.
   * @param location Düymənin harada yerləşdiyini bildirir (məs: 'navbar', 'hero', 'footer', 'product_card')
   */
  export const trackWhatsAppClick = (location: string) => {
    trackEvent("whatsapp_conversion", {
      location: location,
      event_category: "Contact",
      event_label: `WhatsApp Click - ${location}`,
      value: 1,
    });
  };
  
  /**
   * Kalkulyatorun istifadəsini izləmək üçün funksiya.
   * @param brickCount Hesablanan kərpic sayı
   * @param wallArea Daxil edilən divar sahəsi (m2)
   */
  export const trackCalculatorUse = (brickCount: number, wallArea: number) => {
    trackEvent("calculator_used", {
      brick_count: brickCount,
      wall_area: wallArea,
      event_category: "Utility",
      event_label: "Kərpic Hesablayıcı",
    });
  };