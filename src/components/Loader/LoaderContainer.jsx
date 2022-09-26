import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 72, 65, 0.30015756302521013);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
`;

const LoaderContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default LoaderContainer;
