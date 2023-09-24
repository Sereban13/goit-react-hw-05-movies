// import { Link } from 'react-router-dom';
import { BackBtn } from './GoBackBtn.Styled';

export const GoBackBtn = ({ path, children }) => {
  return <BackBtn to={path}>{children}</BackBtn>;
};
