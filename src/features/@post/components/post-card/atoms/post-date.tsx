interface PostDateProps {
  date?: string;
}

export const PostDate = ({ date }: PostDateProps) => {
  return <span className="text-sm">📅 {date}</span>;
};
