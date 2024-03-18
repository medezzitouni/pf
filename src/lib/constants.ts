export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const categories: Record<string, string> = {
  en: "Portfolio, software engineering, Personal Website, Blog",
  fr: "Portfolio, génie logiciel, site Web personnel, blog",
  ar: " هندسة البرمجيات، الموقع الشخصي، المدونة",
};

// basePath helper
// export const withBasPath = (path: string) => `${basePath}${path}`

// client logos
export const client_logos_folder = "/assets/client_logos";

export const client_logos = {
  ametys: {
    img: `${client_logos_folder}/ametys.png`,
    url: "https://www.ametys.org/community/en/index.html",
  },
  plogg: {
    img: `${client_logos_folder}/plogg.png`,
    url: "https://www.plogg.ca",
  },
  walo: {
    img: `${client_logos_folder}/walo.png`,
    url: "https://walo.app",
  },
  ipagency: {
    img: `${client_logos_folder}/ipagency.png`,
    url: "https://www.ipagency.it",
  },
};

// profile images
export const profileImage =
  "/assets/ai-developer-desk-setup/three-monitors.jpeg";
export const aboutImage = "/assets/med/about.jpg";

export const serviceImage = "/assets/services/service1.jpg";

export const logo = "/assets/med/logo.png";

export const en_resume_pdf = "/assets/resumes/Resume_Ezzitouni_Med.pdf";
export const fr_resume_pdf = "/assets/resumes/CV_Ezzitouni_Med.pdf";

// navigation
export type Nav = { url: string; name: string };

export const nav: Record<string, Nav> = {
  home: {
    url: "/",
    name: "home",
  },
  service: {
    url: "/services",
    name: "services",
  },
  achivements: {
    url: "/achievements",
    name: "achievements",
  },
  contact: {
    url: "/contact",
    name: "contact",
  },
  blog: {
    url: "/blog",
    name: "blog",
  },
  products: {
    url: "/products",
    name: "products",
  },
  about: {
    url: "/about",
    name: "about",
  },
};

// localization
export type SwitchTo = {
  name: string;
  path: string;
};
export const langs: Record<
  string,
  { nativeName: string; switchTo: SwitchTo[]; switchToKey: string }
> = {
  en: {
    nativeName: "English",
    switchTo: [
      { name: "Fr", path: "/fr" },
      { name: "Ar", path: "/ar" },
    ],
    switchToKey: "fr",
  },
  fr: {
    nativeName: "Français",
    switchTo: [
      { name: "En", path: "/en" },
      { name: "Ar", path: "/ar" },
    ],
    switchToKey: "en",
  },
  ar: {
    nativeName: "Français",
    switchTo: [
      { name: "Fr", path: "/fr" },
      { name: "En", path: "/en" },
    ],
    switchToKey: "en-US",
  },
};
