import {
  Links,
  ProfileImage,
  Social,
  TopicSubmissions,
  URLS,
  User,
} from "./Shared";

interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  published_at: string;
  updated_at: string;
  starts_at: string;
  ends_at: string | null;
  only_submissions_after: string;
  visibility: string;
  featured: boolean;
  total_photos: number;
  current_user_contributions: any[];
  total_current_user_submissions: any;
  links: Links;
  status: string;
  owners: Owner[];
  cover_photo: CoverPhoto;
  preview_photos: PreviewPhotos[];
}

interface Owner {
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

interface CoverPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: any;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: any;
  alt_description: any;
  urls: URLS;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  user: User;
}

interface PreviewPhotos {
  id: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  urls: URLS;
}

export default Topic;
