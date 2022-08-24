import { SECTION_KIND_ENUM } from '@/components/PageComponent/IndexPage/Section/enums';

export type SectionKindType = typeof SECTION_KIND_ENUM[keyof typeof SECTION_KIND_ENUM];
