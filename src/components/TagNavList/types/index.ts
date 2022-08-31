import { TAG_QUERY_KIND_ENUM } from '@/components/TagNavList/enums';

export type TagQueryKind = typeof TAG_QUERY_KIND_ENUM[keyof typeof TAG_QUERY_KIND_ENUM];
