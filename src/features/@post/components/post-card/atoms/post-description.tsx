interface PostDescription {
  description?: string | null;
}

export const PostDescription = ({ description }: PostDescription) => {
  return (
    <p className="relative text-ellipsis break-words line-clamp-2 xs:text-[0.90rem] md:text-base">
      {description}
    </p>
  );
};
