import { Container } from './Wrapper.styled';

const Wrapper = ({ children, style = {} }) => {
  return <Container style={style}>{children}</Container>;
};

export default Wrapper;
