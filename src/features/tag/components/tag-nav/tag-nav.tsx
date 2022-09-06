import { useTagData } from '@/features/tag/hooks/use-tag-data';

import { TagNavTop } from '@/features/tag/components/tag-nav/atoms';
import { TagNavList } from '@/features/tag/components/tag-nav/molecules';

interface TagNavProps {
  currentTag: string;
}

export const TagNav = ({ currentTag }: TagNavProps) => {
  const { tags, totalCount } = useTagData();

  return (
    <div className="lg:w-2/3">
      <TagNavTop />
      <TagNavList currentTag={currentTag} totalCount={totalCount} tags={tags} />
    </div>
  );
};
