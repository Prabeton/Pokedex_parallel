import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 60px;
`;
/* eslint-disable-next-line */
const TemporaryContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
export default TemporaryContainer;
