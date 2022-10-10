interface PostDescription {
  description?: string | null;
}

export const PostDescription = ({ description }: PostDescription) => {
  return <p className="relative text-ellipsis break-words line-clamp-2">{description}</p>;
};
