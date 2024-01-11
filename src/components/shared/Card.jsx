import styled from "styled-components";

const CardContainer = styled.div`
  width: 240px;
  height: 350px;
  border-radius: 20px;
  border: 4px solid #163707;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  background-color: #e9e95b;

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  border: 3px solid #163707;
  margin-top: 12px;
  border-radius: 8px;
  background-color: #ffff99;
`;

const Name = styled.div`
  background-color: #ffff99;
  width: 130px;
  height: 30px;
  border: 3px solid #163707;
  border-radius: 8px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  font-size: 22px;
  color: #000;
  font-weight: 600;
`;
const Propers = styled.div`
  display: flex;
  gap: 10px;
`;

const Proper = styled.div`
  background-color: #ffff99;
  width: 100px;
  height: 40px;
  border: 3px solid #558a3c;
  border-radius: 8px;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0px;
  font-size: 16px;
  font-family: "Pokemon-Hollow";
  color: #2c5917;
  font-weight: 600;
  overflow: hidden;
`;
const Label = styled.p`
  position: absolute;
  left: 4px;
  top: -22px;
  font-size: 10px;
  color: #000;
  z-index: 5;
  font-weight: 600;
  font-family: "Inter";
`;

const ProperDiv = styled.div`
  position: relative;
`;
/* eslint-disable */
const Card = ({
  imageURL,
  name,
  base_experience,
  weight,
  height,
  abilities,
  onClick,
  /* eslint-enable */
}) => {
  return (
    <CardContainer
      onClick={() =>
        onClick({ imageURL, name, base_experience, weight, height, abilities })
      }>
      {name ? <Name>{name}</Name> : "No Name"}
      {imageURL ? <Img src={imageURL} alt="Pokemon" /> : "No image available"}
      <Propers>
        <div>
          {base_experience ? (
            <ProperDiv>
              <Label>base experience:</Label>
              <Proper>{base_experience}</Proper>
            </ProperDiv>
          ) : (
            <Proper>no experince</Proper>
          )}
          {height ? (
            <ProperDiv>
              <Label>height:</Label>
              <Proper>{height}</Proper>
            </ProperDiv>
          ) : (
            <Proper>no height</Proper>
          )}
        </div>
        <div>
          {weight ? (
            <ProperDiv>
              <Label>wieght:</Label>
              <Proper>{weight}</Proper>
            </ProperDiv>
          ) : (
            <Proper>no weight</Proper>
          )}
          {abilities ? (
            <ProperDiv>
              <Label>abilities:</Label>
              <Proper>{abilities}</Proper>
            </ProperDiv>
          ) : (
            <Proper>no ability</Proper>
          )}
        </div>
      </Propers>
    </CardContainer>
  );
};

export default Card;
