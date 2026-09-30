export interface SiteConfig {
  name: string;
  shortName: string;
  fullName: string;
  role: string;
  brandTag: string;
  city: string;
  country: string;
  learningCenter: string;
  learningCenterUrl: string;
  email: string;
  github: string;
  telegram: string;
  instagram: string;
  resumeUrl: string;
  avatarUrl: string;
  titles: string[];
  interests: string[];
}

export const siteConfig: SiteConfig = {
  name: "Muhammadzoir",
  shortName: "MZ",
  fullName: "Olimov Muhammadzoir",
  role: "Coder Boy & Creative Developer",
  brandTag: "CODER BOY",
  city: "Namangan",
  country: "O‘zbekiston",
  learningCenter: "Ilmhub O‘quv Markazi",
  learningCenterUrl: "https://ilmhub.uz",
  // Personal contact handles (configurable)
  email: "ergashexsss702@gmail.com",
  github: "https://github.com", // Replace with your personal username: e.g., https://github.com/muhammadzoir
  telegram: "https://t.me/muhammadzoir_coder", // Replace with your Telegram handle
  instagram: "https://instagram.com/muhammadzoir_dev", // Replace with your Instagram handle
  resumeUrl: "/cv.pdf", // Place your cv.pdf into /public/cv.pdf
  avatarUrl: "/avatar.svg", // Place your real photo at /public/avatar.png or use default avatar.svg
  titles: [
    "Coder Boy",
    "Frontend Developer",
    "Creative Coder",
    "AI Enthusiast",
    "Prompt Explorer",
    "Web Developer"
  ],
  interests: [
    "Web Development",
    "AI Tools & Prompting",
    "Creative Technology",
    "English Learning",
    "Robotics & Arduino",
    "Football",
    "Automotive Tech & Cars"
  ]
};
