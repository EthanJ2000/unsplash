import { get } from "./RequestBase";

export const getTopics = async () => get("/topics");
export const getPhoto = async (id: string) => get(`/photos/${id}`);
export const getTopicPhotos = async (slug: string) => get(`/topics/${slug}/photos`);
