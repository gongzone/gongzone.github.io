import { Link } from 'gatsby';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { SECTION_KIND_ENUM } from '@/components/PageComponent/IndexPage/Section/enums';
import type { SectionKindType } from '@/components/PageComponent/IndexPage/Section/types';
import type { IndexPagePostsQuery, IndexPageSeriesQuery } from '@/types/graphql';

import { Posts } from '@/features/blog/components/Posts';
import { Series } from '@/features/blog/components/Series';

interface SectionProps {
  kind: SectionKindType;
  data: IndexPagePostsQuery | IndexPageSeriesQuery;
}

export const Section = ({ kind, data }: SectionProps) => {
  function renderItems() {
    switch (kind.name) {
      case SECTION_KIND_ENUM.POSTS.name:
        return <Posts posts={data as IndexPagePostsQuery} />;
      case SECTION_KIND_ENUM.SERIES.name:
        return <Series series={data as IndexPageSeriesQuery} />;
      default:
        return null;
    }
  }

  return (
    <section className="mb-8 flex flex-col justify-center">
      <div>
        <div className="mb-4">
          <span className="font-bold">✨ 최신 {kind.name} 목록</span>
        </div>
      </div>

      {renderItems()}

      <div className="my-6 text-center">
        <Link className="group inline-flex items-center gap-1 p-2" to={kind.to}>
          <span>
            <FaExternalLinkAlt />
          </span>
          <span className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-amber-300">
            전체 {kind.name} 보러가기
          </span>
        </Link>
      </div>
    </section>
  );
};
