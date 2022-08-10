import { Link } from 'gatsby';
import { AiFillHome, AiFillFileText, AiFillCopy, AiFillRobot, AiFillProfile } from 'react-icons/ai';

export const SIDEBAR_LIST_ENUM = {
  top: 'Top',
  blog: 'Blog',
  about: 'About',
} as const;

const SIDEBAR_LIST_TOP = [{ name: 'HOME', icon: AiFillHome, to: '/posts' }];

const SIDEBAR_LIST_BLOG = [
  { name: '글', icon: AiFillFileText, to: '/posts' },
  { name: '시리즈', icon: AiFillCopy, to: '/series' },
];

const SIDEBAR_LIST_ABOUT = [
  { name: '소개', icon: AiFillRobot, to: '/aboutme' },
  { name: '프로젝트', icon: AiFillProfile, to: '/projects' },
];

const SIDEBAR_LIST_ITEMS = {
  [SIDEBAR_LIST_ENUM.top]: SIDEBAR_LIST_TOP,
  [SIDEBAR_LIST_ENUM.blog]: SIDEBAR_LIST_BLOG,
  [SIDEBAR_LIST_ENUM.about]: SIDEBAR_LIST_ABOUT,
};

type SidebarListType = typeof SIDEBAR_LIST_ENUM[keyof typeof SIDEBAR_LIST_ENUM];

export const SidebarList = ({ kind }: { kind: SidebarListType }) => {
  const items = SIDEBAR_LIST_ITEMS[kind];

  return (
    <nav className={`${kind === SIDEBAR_LIST_ENUM.top && 'mb-6'}`}>
      {kind !== SIDEBAR_LIST_ENUM.top && (
        <div className="mb-2 border-b-2 border-b-stone-400 pb-2">
          <span className="text-xl font-bold text-emerald-400">{kind}</span>
        </div>
      )}
      <ul className="flex flex-col gap-[0.35rem]">
        {items!.map((item) => (
          <li key={item.name}>
            <Link className="group inline-flex items-center gap-2" to={item.to}>
              <span className="text-lg">
                <item.icon />
              </span>
              <span className="text-lg transition-colors duration-300 group-hover:text-amber-300">
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
