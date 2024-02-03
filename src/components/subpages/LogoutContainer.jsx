import styled from "styled-components";

const Container = styled.div`
  max-width: 1900px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 60px;

  @media (min-width: 1721px) and (max-width: 1920px) {
    max-width: 1721px;
  }
  @media (min-width: 1441px) and (max-width: 1720px) {
    max-width: 1441px;
  }
  @media (min-width: 1281px) and (max-width: 1440px) {
    max-width: 1281px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 1025px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 769px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 481px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 320px;
  }
`;

const LogoutContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
export default LogoutContainer;
