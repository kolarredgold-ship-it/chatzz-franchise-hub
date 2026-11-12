import data from "./franchise-guides.json";

export const SITE_URL = "https://bangarpet-chaatz-franchise-hub.lovable.app";
export const franchiseGuides = data;
export const guideCategories = [...new Set(data.map(guide => guide.category))];
export function guideEnquiry(title: string) {
  return `https://wa.me/919738959525?text=${encodeURIComponent(`Hi, I read your guide: ${title}. Please help me compare Bangarpet Chatzz options for my budget and location, including confirmed costs, inclusions and recurring terms.`)}`;
}