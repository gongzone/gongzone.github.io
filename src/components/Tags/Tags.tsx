import { graphql, useStaticQuery, Link } from 'gatsby';
import { BsFillTagsFill } from 'react-icons/bs';

interface TagsProps {
  currentTag?: string;
}

export const Tags = ({ currentTag }: TagsProps) => {
  const data = useStaticQuery(query);
  const tags = data.allMdx.group;
  const allPostsNumber = tags.reduce((prev, { totalCount }) => prev + totalCount, 0);

  return (
    <div className="lg:w-2/3">
      <div className="mb-3 flex items-center gap-2">
        <span>
          <BsFillTagsFill />
        </span>
        <span>태그 목록</span>
      </div>
      <ul className="flex flex-wrap pb-4">
        <li className="mb-2 mr-2 flex">
          <Link
            className={`rounded-3xl bg-[#2e3039] px-4 py-2 text-sm xs:text-base ${
              currentTag ?? 'bg-[#232c42] text-amber-300 shadow-xl'
            }`}
            to="/posts"
          >
            <span>All</span>
            <span> ({allPostsNumber})</span>
          </Link>
        </li>
        {tags.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue} className="mb-2 mr-2 flex">
            <Link
              className={`hover-text-amber rounded-3xl bg-[#2e3039] px-4 py-2 text-sm shadow-xl xs:text-base ${
                currentTag === fieldValue && 'bg-[#232c42] text-amber-300'
              } `}
              to={`/posts/tags/${fieldValue.toLowerCase().replace('-', '')}`}
            >
              <span>{fieldValue}</span>
              <span> ({totalCount})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const query = graphql`
  query {
    allMdx {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
