import { BackBtn } from './GoBackBtn.Styled';

export const GoBackBtn = ({ to, children }) => {
  return <BackBtn to={to}>{children}</BackBtn>;
};
