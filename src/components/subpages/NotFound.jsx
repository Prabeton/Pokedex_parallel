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

const InfoError = styled.div`
  width: 1280px;
  max-width: 1280px;
  height: auto;
  text-align: center;
`;

const NotFound = () => {
  return (
    <Container>
      <InfoError>
        <h1>Not Found</h1>
        <h3>Użyj nawigacji albo wpisz poprawny adres url</h3>
      </InfoError>
    </Container>
  );
};
export default NotFound;
