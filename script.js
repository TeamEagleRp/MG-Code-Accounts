const translations = {
  ar: {
    navAccounts: "حسابات السيرفر",
    navAbout: "شرح السيرفر",
    navContact: "التواصل",
    heroEyebrow: "مجتمع تقني يجمع الإبداع بالتقنية",
    heroWelcome: "مرحباً بك في",
    heroDescription: "مساحتك للبرمجة والتصميم والحلول الرقمية. نطوّر الأفكار ونحوّلها إلى مشاريع وتجارب مميزة.",
    discover: "اكتشف مجتمعنا",
    contactUs: "تواصل معنا",
    heroNote: "برمجة • تصميم • حلول رقمية",
    accountsKicker: "ابقَ على تواصل",
    accountsTitle: "حسابات السيرفر",
    accountsDescription: "تابع MG CoDe عبر منصاتنا الرسمية.",
    email: "البريد الإلكتروني",
    discord: "ديسكورد",
    communityServer: "مجتمع MG CoDe",
    botSupport: "ديسكورد الدعم الخاص بالبوتات",
    botSupportSub: "الدعم الفني ومساعدة البوتات",
    aboutKicker: "تعرّف على مجتمعنا",
    aboutTitle: "ما هو MG CoDe؟",
    aboutIntro: "مرحباً بك في MG CoDe 💻✨ نحن مجتمع تقني متكامل يجمع بين شغف البرمجة وحلول الأعمال الرقمية. سيرفرنا مصمّم خصيصاً للمطورين، المصممين، وأصحاب السيرفرات والمشاريع الذين يبحثون عن الجودة والإبداع في مكان واحد 🚀",
    offerTitle: "ماذا يقدم لك سيرفر MG CoDe؟",
    featureWebTitle: "تطوير وتصميم المواقع الإلكترونية",
    featureWebText: "تصميم وبناء مواقع حديثة ومخصصة بالكامل لتناسب متطلبات مشروعك أو علامتك التجارية.",
    featureBotTitle: "برمجة بوتات الديسكورد",
    featureBotText: "إنشاء بوتات متقدمة مخصصة للحماية والتذاكر والأنظمة الإدارية والتفاعل، بكفاءة وأداء عالٍ.",
    featureDesignTitle: "التصميم والإبداع الرقمي",
    featureDesignText: "واجهات مستخدم وتصاميم عصرية وهويات بصرية تمنح مشروعك مظهراً احترافياً وفريداً.",
    featureScriptsTitle: "سكربتات وأنظمة جاهزة",
    featureScriptsText: "متجر متكامل يوفر سكربتات وبرمجيات جاهزة للاستخدام المباشر، مجانية ومدفوعة.",
    featureCommunityTitle: "مجتمع للمطورين",
    featureCommunityText: "بيئة آمنة لتبادل الخبرات والأكواد ومناقشة الأفكار البرمجية والحصول على دعم فني لمساعدتك.",
    contactKicker: "نحن هنا لمساعدتك",
    contactTitle: "تواصل معي",
    contactDescription: "للاستفسارات أو التعاون أو الدعم، يمكنك التواصل عبر إحدى الوسائل التالية.",
    discordProfile: "حسابي على ديسكورد",
    usernameLabel: "اسم المستخدم:",
    emailContact: "التواصل عبر البريد الإلكتروني",
    discordContact: "التواصل عبر ديسكورد",
    footerText: "مجتمع يصنع الأفكار ويحوّلها إلى واقع رقمي.",
    rights: "جميع الحقوق محفوظة."
  },
  en: {
    navAccounts: "Server Accounts",
    navAbout: "About the Server",
    navContact: "Contact",
    heroEyebrow: "A tech community where creativity meets technology",
    heroWelcome: "Welcome to",
    heroDescription: "Your space for coding, design, and digital solutions. We develop ideas and turn them into distinctive projects and experiences.",
    discover: "Discover Our Community",
    contactUs: "Get in Touch",
    heroNote: "Development • Design • Digital Solutions",
    accountsKicker: "Stay Connected",
    accountsTitle: "Server Accounts",
    accountsDescription: "Follow MG CoDe across our official platforms.",
    email: "Email",
    discord: "Discord",
    communityServer: "MG CoDe Community",
    botSupport: "Bot Support Discord",
    botSupportSub: "Technical support and bot assistance",
    aboutKicker: "Get to Know Us",
    aboutTitle: "What is MG CoDe?",
    aboutIntro: "Welcome to MG CoDe 💻✨ We are an all-in-one tech community bringing together a passion for programming and digital business solutions. Our server is designed especially for developers, designers, and owners of servers and projects who seek quality and creativity in one place 🚀",
    offerTitle: "What does the MG CoDe server offer?",
    featureWebTitle: "Website Development & Design",
    featureWebText: "Designing and building modern, fully customized websites to match your project or brand requirements.",
    featureBotTitle: "Discord Bot Development",
    featureBotText: "Building advanced custom bots for protection, tickets, administration systems, and interactive features with strong performance.",
    featureDesignTitle: "Digital Design & Creativity",
    featureDesignText: "User interfaces, modern designs, and visual identities that give your project a unique, professional look.",
    featureScriptsTitle: "Ready-Made Scripts & Systems",
    featureScriptsText: "A complete store offering ready-to-use scripts and software, both free and paid.",
    featureCommunityTitle: "A Community for Developers",
    featureCommunityText: "A safe environment to share experience and code, discuss programming ideas, and get technical support when you need it.",
    contactKicker: "We're Here to Help",
    contactTitle: "Contact Me",
    contactDescription: "For questions, collaboration, or support, reach out through one of the channels below.",
    discordProfile: "My Discord Account",
    usernameLabel: "Username:",
    emailContact: "Contact via Email",
    discordContact: "Contact via Discord",
    footerText: "A community that turns ideas into digital reality.",
    rights: "All rights reserved."
  }
};

const root = document.getElementById("html-root");
const languageButton = document.getElementById("language-switch");
const languageLabel = document.getElementById("language-label");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

function setLanguage(language) {
  const selected = translations[language] ? language : "ar";
  root.lang = selected;
  root.dir = selected === "ar" ? "rtl" : "ltr";
  document.title = selected === "ar" ? "MG CoDe | مجتمع تقني" : "MG CoDe | Tech Community";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selected][key]) element.textContent = translations[selected][key];
  });
  languageLabel.textContent = selected === "ar" ? "English" : "العربية";
  languageButton.setAttribute("aria-label", selected === "ar" ? "Switch to English" : "التبديل إلى العربية");
  localStorage.setItem("mg-code-language", selected);
}

languageButton.addEventListener("click", () => {
  setLanguage(root.lang === "ar" ? "en" : "ar");
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.innerHTML = isOpen
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
setLanguage(localStorage.getItem("mg-code-language") || "ar");
