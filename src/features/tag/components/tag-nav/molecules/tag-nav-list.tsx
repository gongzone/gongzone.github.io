import { LinkTag } from '@/features/tag/components/tag';

interface TagNavList {
  currentTag: string;
  totalCount: number;
  tags: {
    fieldValue: string;
    totalCount: number;
  }[];
}

export const TagNavList = ({ currentTag, totalCount, tags }: TagNavList) => {
  return (
    <ul className="flex flex-wrap pb-4">
      <li className="mb-2 mr-2 flex">
        <LinkTag currentTag={currentTag} tagName="ALL" totalCount={totalCount} />
      </li>
      {tags.map(({ fieldValue, totalCount }) => (
        <li key={fieldValue} className="mb-2 mr-2 flex">
          <LinkTag currentTag={currentTag} tagName={fieldValue} totalCount={totalCount} />
        </li>
      ))}
    </ul>
  );
};
