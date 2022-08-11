export interface PostType {
  title: string;
  description: string;
  slug: string;
  image: string;
  date: string;
  tags: string[];
  series?: string;
  content: string;
}

export type PostKeyType = keyof PostType;
export type PostValueType = PostType[PostKeyType];
