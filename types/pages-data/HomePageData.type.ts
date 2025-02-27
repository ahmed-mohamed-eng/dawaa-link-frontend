import OfferedProduct from "../products/OfferedProduct";
import ISingleProduct from "../products/single-product.interface";

type HomeCategories = {
  id: number;
  status: string;
  slug: string;
  photo: string;
  created_at: string;
  name: string;
  description: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
};

type HomeSliders = {
  id: number;
  product: {
    id: number;
    name: string;
  };
  link: string;
  photo: string;
  name: string;
  title: string;
  short_description: string;
  button_text: string;
};

type HomeSiteContent = {
  id: number;
  section_header_title: string;
  section_header_description: string;
  section_about_title: string;
  section_about_description: string;
  there_are_no_limits_sub_title: string;
  there_are_no_limits_title: string;
  there_are_no_limits_description: string;
  ease_of_management_sub_title: string;
  ease_of_management_title: string;
  ease_of_management_description: string;
  follow_up_accuracy_sub_title: string;
  follow_up_accuracy_title: string;
  follow_up_accuracy_description: string;
  access_speed_sub_title: string;
  access_speed_title: string;
  access_speed_description: string;
  client_title: string;
  client_description: string;
  page_contact_title: string;
  page_contact_description: string;
};

type HomeFeature = {
  id: number;
  status: string;
  icon: string;
  created_at: string;
  name: string;
  description: string;
};

type HomeSettings = {
  id: number;
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  email: string;
  phone: string;
  whatsapp: string;
  language: string;
  tax: string;
  privacy_policy: string;
  terms_and_conditions: string;
  delivery_policy: string;
  about: string;
  distance: string;
  photo: string;
  favicon: string;
  updated_at: string;
};

type HomePageData = {
  categories: HomeCategories[];
  products: ISingleProduct[];
  product_featured: ISingleProduct[];
  top_product: ISingleProduct[];
  sliders: HomeSliders[];
  offers: OfferedProduct[];
  siteContent: HomeSiteContent[];
  service: [];
  feature: HomeFeature[];
  setting: HomeSettings[];
};

export default HomePageData;
