import { Link } from 'gatsby';
import type { ReactNode } from 'react';
import { FiAlignLeft, FiArrowRightCircle } from 'react-icons/fi';

interface SectionProps {
  name: string;
  to: string;
  children: ReactNode;
}

export const HomeSection = ({ name, to, children }: SectionProps) => {
  return (
    <section className="mb-8 flex flex-col justify-center">
      <div className="mb-5 flex items-center gap-2">
        <span className="text-xl 2xl:text-2xl">
          <FiAlignLeft />
        </span>
        <span className="text-lg font-bold 3xl:text-xl">최신 {name} 목록</span>
      </div>

      {children}

      <div className="my-6 text-center 2xl:my-8">
        <Link className="group inline-flex items-center gap-1 p-2" to={to}>
          <span>
            <FiArrowRightCircle />
          </span>
          <span className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-amber-300 2xl:text-base">
            전체 {name} 보러가기
          </span>
        </Link>
      </div>
    </section>
  );
};
