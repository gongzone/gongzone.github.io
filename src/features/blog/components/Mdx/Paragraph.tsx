import { type ReactNode } from 'react';

interface ParagraphProps {
  children?: ReactNode;
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p>{children}</p>;
};
