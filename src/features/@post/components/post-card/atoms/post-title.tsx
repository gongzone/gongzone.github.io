interface PostTitleProps {
  title?: string;
}

export const PostTitle = ({ title }: PostTitleProps) => {
  return <h2 className="text-amber-300">{title}</h2>;
};
