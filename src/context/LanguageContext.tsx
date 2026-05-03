"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Language = "en" | "vi" | "es" | "ru" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.installation": "Installation",
    "nav.news": "News",
    "nav.wiki": "Wiki",
    "nav.community": "Community",
    "nav.download": "Download Now",
    "community.title": "We believe in a future where players own their tools.",
    "community.desc": "LF Launcher is a fully open-source project on GitHub, where you can shape the future of gaming with us. Join the LF Launcher family on Discord and Telegram.",
    "hero.badge": "Version 1.0.0 out now",
    "hero.title": "LF Launcher – Driven by Players.",
    "hero.subtitle": "Not trying to be the most popular launcher – just focusing on being the one players truly want to use for the long term.",
    "hero.download": "Download",
    "hero.changelog": "Changelog",
    "screenshot.title": "Screen",
    "screenshot.highlight": "shot",
    "features.title": "Features",
    "features.v.title": "Versions",
    "features.v.desc": "Get access to almost all versions and switch between them in an instant.",
    "features.s.title": "Settings",
    "features.s.desc": "Tweak every nook and cranny to your heart's content.",
    "sponsors.title": "Sponsors",
    "sponsors.desc": "We thank all the wonderful backers over at Open Collective! Support LF Launcher and its development by ",
    "sponsors.link": "becoming a backer",
    "sponsors.bmc": "Buy me a coffee",
    "footer.desc": "Not trying to be the most popular launcher – just focusing on being the one players truly want to use for the long term.",
    "footer.connect": "Connect",
    "footer.support": "Support",
    "footer.copyright": "© 2026 Lasscmone Studio",
    "footer.disclaimer": "Not affiliated with Mojang Studios.",
  },
  vi: {
    "nav.home": "Trang chủ",
    "nav.features": "Tính năng",
    "nav.installation": "Cài đặt",
    "nav.news": "Tin tức",
    "nav.wiki": "Wiki",
    "nav.community": "Cộng đồng",
    "nav.download": "Tải ngay",
    "community.title": "Chúng tôi tin vào một tương lai nơi người chơi làm chủ công cụ của chính mình.",
    "community.desc": "LF Launcher là dự án mã nguồn mở hoàn toàn trên GitHub, nơi bạn có thể cùng chúng tôi định hình tương lai của trò chơi. Hãy trở thành một phần của đại gia đình LF Launcher trên Discord và Telegram.",
    "hero.badge": "Đã ra mắt phiên bản 1.0.0",
    "hero.title": "LF Launcher – Phát triển bởi người chơi.",
    "hero.subtitle": "Không cố gắng trở thành launcher phổ biến nhất – chỉ tập trung trở thành cái tên mà người chơi thực sự muốn gắn bó lâu dài.",
    "hero.download": "Tải về",
    "hero.changelog": "Thay đổi",
    "screenshot.title": "Ảnh",
    "screenshot.highlight": " chụp",
    "features.title": "Tính năng",
    "features.v.title": "Phiên bản",
    "features.v.desc": "Truy cập gần như tất cả các phiên bản và chuyển đổi giữa chúng chỉ trong tích tắc.",
    "features.s.title": "Cài đặt",
    "features.s.desc": "Tinh chỉnh mọi ngóc ngách theo ý thích của bạn.",
    "sponsors.title": "Nhà tài trợ",
    "sponsors.desc": "Chúng tôi gửi lời cảm ơn đến tất cả những người ủng hộ tuyệt vời tại Open Collective! Hãy ủng hộ LF Launcher bằng cách ",
    "sponsors.link": "trở thành người ủng hộ",
    "sponsors.bmc": "Mời tôi ly cà phê",
    "footer.desc": "Không cố gắng trở thành launcher phổ biến nhất – chỉ tập trung trở thành cái tên mà người chơi thực sự muốn gắn bó lâu dài.",
    "footer.connect": "Kết nối",
    "footer.support": "Hỗ trợ",
    "footer.copyright": "© 2026 Lasscmone Studio",
    "footer.disclaimer": "Không liên kết với Mojang Studios.",
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.installation": "Instalación",
    "nav.news": "Noticias",
    "nav.wiki": "Wiki",
    "nav.community": "Comunidad",
    "nav.download": "Descargar ahora",
    "community.title": "Creemos en un futuro donde los jugadores son dueños de sus propias herramientas.",
    "community.desc": "LF Launcher es un proyecto totalmente de código abierto en GitHub, donde puedes dar forma al futuro de los juegos con nosotros. Únete a la familia de LF Launcher en Discord y Telegram.",
    "hero.badge": "Versión 1.0.0 ya disponible",
    "hero.title": "LF Launcher – Impulsado por jugadores.",
    "hero.subtitle": "No intentamos ser el launcher más popular – solo nos enfocamos en ser el que los jugadores realmente quieran usar a largo plazo.",
    "hero.download": "Descargar",
    "hero.changelog": "Cambios",
    "screenshot.title": "Captura de ",
    "screenshot.highlight": "pantalla",
    "features.title": "Características",
    "features.v.title": "Versiones",
    "features.v.desc": "Obtén acceso a casi todas las versiones y cambia entre ellas en un instante.",
    "features.s.title": "Ajustes",
    "features.s.desc": "Ajusta cada rincón a tu gusto.",
    "sponsors.title": "Patrocinadores",
    "sponsors.desc": "¡Agradecemos a todos los maravillosos patrocinadores en Open Collective! Apoya a LF Launcher y su desarrollo ",
    "sponsors.link": "convirtiéndote en patrocinador",
    "sponsors.bmc": "Cómprame un café",
    "footer.desc": "No intentamos ser el launcher más popular – solo nos enfocamos en ser el que los jugadores realmente quieran usar a largo plazo.",
    "footer.connect": "Conectar",
    "footer.support": "Soporte",
    "footer.copyright": "© 2026 Lasscmone Studio",
    "footer.disclaimer": "No afiliado a Mojang Studios.",
  },
  ru: {
    "nav.home": "Главная",
    "nav.features": "Возможности",
    "nav.installation": "Установка",
    "nav.news": "Новости",
    "nav.wiki": "Вики",
    "nav.community": "Сообщество",
    "nav.download": "Скачать сейчас",
    "community.title": "Мы верим в будущее, где игроки сами владеют своими инструментами.",
    "community.desc": "LF Launcher — это полностью открытый проект на GitHub, где вы можете вместе с нами формировать будущее игр. Станьте частью большой семьи LF Launcher в Discord и Telegram.",
    "hero.badge": "Версия 1.0.0 уже доступна",
    "hero.title": "LF Launcher – Создан игроками для игроков.",
    "hero.subtitle": "Мы не стремимся быть самым популярным лаунчером — мы просто создаем то, чем игроки действительно захотят пользоваться долгое время.",
    "hero.download": "Скачать",
    "hero.changelog": "Изменения",
    "screenshot.title": "Скрин",
    "screenshot.highlight": "шот",
    "features.title": "Возможности",
    "features.v.title": "Версии",
    "features.v.desc": "Получите доступ почти ко всем версиям и переключайтесь между ними мгновенно.",
    "features.s.title": "Настройки",
    "features.s.desc": "Настройте каждый уголок по своему вкусу.",
    "sponsors.title": "Спонсоры",
    "sponsors.desc": "Мы благодарим всех замечательных спонсоров на Open Collective! Поддержите LF Launcher и его разработку, ",
    "sponsors.link": "став спонсором",
    "sponsors.bmc": "Купить мне кофе",
    "footer.desc": "Мы не стремимся быть самым популярным лаунчером — мы просто создаем то, чем игроки действительно захотят пользоваться долгое время.",
    "footer.connect": "Контакты",
    "footer.support": "Поддержка",
    "footer.copyright": "© 2026 Lasscmone Studio",
    "footer.disclaimer": "Не связано с Mojang Studios.",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.features": "المميزات",
    "nav.installation": "التثبيت",
    "nav.news": "الأخبار",
    "nav.wiki": "ويكي",
    "nav.community": "المجتمع",
    "nav.download": "تحميل الآن",
    "community.title": "نحن نؤمن بمستقبل يمتلك فيه اللاعبون أدواتهم الخاصة.",
    "community.desc": "LF Launcher هو مشروع مفتوح المصدر بالكامل على GitHub، حيث يمكنك تشكيل مستقبل الألعاب معنا. كن جزءاً من عائلة LF Launcher على Discord و Telegram.",
    "hero.badge": "الإصدار 1.0.0 متاح الآن",
    "hero.title": "LF Launcher – مدفوع من قبل اللاعبين.",
    "hero.subtitle": "لسنا مجرد لانشر مشهور، نحن نركز على أن نكون الخيار الذي يرغب اللاعبون في استخدامه على المدى الطويل.",
    "hero.download": "تحميل",
    "hero.changelog": "سجل التغييرات",
    "screenshot.title": "لقطة ",
    "screenshot.highlight": "الشاشة",
    "features.title": "المميزات",
    "features.v.title": "الإصدارات",
    "features.v.desc": "احصل على إمكانية الوصول إلى جميع الإصدارات تقريباً والتبديل بينها في لمح البصر.",
    "features.s.title": "الإعدادات",
    "features.s.desc": "قم بتخصيص كل زاوية وركن حسب رغبتك.",
    "sponsors.title": "الرعاة",
    "sponsors.desc": "نشكر جميع الداعمين الرائعين في Open Collective! ادعم LF Launcher وتطويره من خلال ",
    "sponsors.link": "أن تصبح داعماً",
    "sponsors.bmc": "اشتر لي قهوة",
    "footer.desc": "لسنا مجرد لانشر مشهور، نحن نركز على أن نكون الخيار الذي يرغب اللاعبون في استخدامه على المدى الطويل.",
    "footer.connect": "تواصل معنا",
    "footer.support": "الدعم",
    "footer.copyright": "© 2026 Lasscmone Studio",
    "footer.disclaimer": "غير تابع لاستوديوهات Mojang.",
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang: string }> = ({ children, initialLang }) => {
  const [language, setLanguageState] = useState<Language>(initialLang as Language);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (initialLang && initialLang !== language) {
      setLanguageState(initialLang as Language);
    }
  }, [initialLang]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    
    // Change URL to new locale
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations["en"]] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir} className="contents">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
