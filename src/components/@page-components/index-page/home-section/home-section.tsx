import { Link } from 'gatsby';
import type { ReactNode } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface SectionProps {
  name: string;
  to: string;
  children: ReactNode;
}

export const HomeSection = ({ name, to, children }: SectionProps) => {
  return (
    <section className="mb-8 flex flex-col justify-center">
      <div className="mb-4">
        <span className="font-bold">✨ 최신 {name} 목록</span>
      </div>

      {children}

      <div className="my-6 text-center">
        <Link className="group inline-flex items-center gap-1 p-2" to={to}>
          <span>
            <FaExternalLinkAlt />
          </span>
          <span className="text-sm text-neutral-300 transition-colors duration-300 group-hover:text-amber-300">
            전체 {name} 보러가기
          </span>
        </Link>
      </div>
    </section>
  );
};
