import { Link } from 'gatsby';

export const SeriesList = ({ posts }) => {
  console.log(posts);
  return (
    <ul>
      {posts.map(({ frontmatter }) => (
        <li>
          <Link to={`/posts/${frontmatter.slug}`}>{frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  );
};
