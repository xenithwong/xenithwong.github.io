
export interface SocialMediaLink {

  name: string;

  url: string;

}

export interface PersonalInfo {

  name: string;

  profilePicture?: string;

  role: string;

  university: string;

  universityWebsite: string;

  socialMedia: SocialMediaLink[];

}

export interface WebsiteInfo {

  title: string;

  description: string;

}

export interface NavigationItem {

  name: string;

  route: string;

}

export interface HomepageSection {

  AboutSection?: boolean;

  NewsSection?: boolean;

  SelectedPublicationsSection?: boolean;

  ProjectSection?: boolean;

}

export type FontStyle = "sans" | "serif" | "mono";

export const personalInfo: PersonalInfo = {

  name: "Xenith Wong (Huang Xi)",

  profilePicture: "/profile.jpg", // see Step 4 — you must replace this image

  role: "PhD Candidate",

  university: "NUS Department of Real Estate",

  universityWebsite: "https://bschool.nus.edu.sg/real-estate/",

  socialMedia: [

    { name: "Email", url: "mailto:e0564461@u.nus.edu" },

    { name: "GitHub", url: "https://github.com/xenithwong" },

    { name: "LinkedIn", url: "https://www.linkedin.com/in/xenith-wong-887062217/"},

    

    { name: "ORCID", url: "https://orcid.org/0009-0004-2891-2033" },

  ],

};

export const websiteInfo: WebsiteInfo = {

  title: personalInfo.name,

  description:

    "PhD candidate with research interests in housing and demographics, household residential choice, housing affordability, real estate and urban planning",

};

export const navigations: NavigationItem[] = [
  { name: "Projects", route: "/projects" },
  { name: "Publications", route: "/publications" },
  { name: "News", route: "/news" },
  { name: "CV", route: "/cv/cv.pdf" },
];

export const homepageSection: HomepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: false, // flip to true once you add real entries
  ProjectSection: true,
};

export const fontStyle: FontStyle = "sans";

