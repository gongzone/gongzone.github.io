import { graphql, useStaticQuery } from 'gatsby';

import { TAG_QUERY_KIND_ENUM } from '@/components/TagNavList/enums';
import type { TagQueryKind } from '@/components/TagNavList/types';

export const useTagData = (kind: TagQueryKind) => {
  const data = useStaticQuery(graphql`
    query {
      all: allMdx {
        totalCount
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
      series: allMdx {
        group(field: frontmatter___series___seriesName) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    }
  `);

  const hashMap = {};
  let totalCount;
  let tags;

  if (kind === TAG_QUERY_KIND_ENUM.ALL) {
    totalCount = data.all.totalCount;
    tags = data.all.group;
  }

  if (kind === TAG_QUERY_KIND_ENUM.SERIES) {
    const seriesGroup = Array.from(data.series.group);
    totalCount = seriesGroup.length;
    seriesGroup.forEach(({ group }) => {
      group.forEach(({ fieldValue }) => {
        if (!(fieldValue in hashMap)) hashMap[fieldValue] = 1;
        else hashMap[fieldValue] += 1;
      });
    });

    tags = Object.entries(hashMap).reduce((prev, [key, value]) => {
      return [...prev, { fieldValue: key, totalCount: value }];
    }, []);
  }

  return { totalCount, tags };
};
