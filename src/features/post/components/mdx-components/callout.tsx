import { FiInfo, FiHexagon, FiHelpCircle } from 'react-icons/fi';

type CalloutProps = {
  kind?: string;
  children: React.ReactNode;
};

const defaultStyle = {
  bgColor: 'bg-zinc-800',
  borderColor: 'border-zinc-600',
  iconColor: 'text-zinc-600',
  icon: FiHexagon,
};

const infoStyle = {
  bgColor: 'bg-emerald-900',
  borderColor: 'border-emerald-700',
  iconColor: 'text-emerald-700',
  icon: FiInfo,
};

const questionStyle = {
  bgColor: 'bg-cyan-900',
  borderColor: 'border-cyan-700',
  iconColor: 'text-cyan-700',
  icon: FiHelpCircle,
};

function getCalloutUIData(kind?: string) {
  switch (kind) {
    case 'info':
      return infoStyle;
    case 'question':
      return questionStyle;
    default:
      return defaultStyle;
  }
}

export const Callout = ({ kind, children }: CalloutProps) => {
  const calloutUIData = getCalloutUIData(kind);

  return (
    <div
      className={`relative my-[1.25rem] rounded-lg border-l-[5px] px-4 py-1 md:px-8 ${calloutUIData.bgColor} ${calloutUIData.borderColor}`}
    >
      <calloutUIData.icon
        className={`absolute top-0 -left-[3px] h-[40px] w-[40px] 
          -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-[#222] bg-[#222] ${calloutUIData.iconColor}`}
      />
      {children}
    </div>
  );
};
