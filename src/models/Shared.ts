export interface Links {
  self: string;
  html: string;
  photos: string;
  likes?: string;
  portfolio?: string;
  following?: string;
  followers?: string;
  download?: string;
  download_location?: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url: string;
  bio: string;
  location: string;
  links: Links;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: string;
  portfolio_url: string;
  twitter_username: string;
  paypal_email: any;
}

export interface URLS {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface TopicSubmissions {
  experimental?: Submissions;
  "3d-renders"?: Submissions;
}

interface Submissions {
  status: string;
  approved_on: string;
}
