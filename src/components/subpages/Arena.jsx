import styled from "styled-components";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Card from "../shared/Card";
import Topor from "../../icons/svg/Topor";
import Crown from "../../icons/svg/Crown";

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

const Cage = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 700px;
  border: 30px solid rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const CornerBlue = styled.div`
  width: 260px;
  height: 370px;
  border-radius: 20px;
  border: 15px solid rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  filter: ${(props) => props.filter || "none"};
`;

const CornerRed = styled.div`
  width: 260px;
  height: 370px;
  border-radius: 20px;
  border: 15px solid rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: ${(props) => props.filter || "none"};
`;

const WinnerBlue = styled.div`
  width: 180px;
  height: 60px;
  border: 6px solid green;
  border-radius: 15px;
  position: absolute;
  top: 27px;
  left: -470px;
  z-index: 1000;
  font-family: "Pokemon-Solid";
  font-size: 24px;
  color: green;
  background-color: #00ff00;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WinnerRed = styled(WinnerBlue)`
  left: 420px;
`;

const LostRed = styled.div`
  width: 180px;
  height: 60px;
  border: 6px solid red;
  border-radius: 15px;
  position: absolute;
  top: 27px;
  left: 420px;
  z-index: 1000;
  font-family: "Pokemon-Solid";
  font-size: 24px;
  color: red;
  background-color: #c18a84;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LostBlue = styled(LostRed)`
  left: -470px;
`;

const DrawBlue = styled.div`
  width: 180px;
  height: 60px;
  border: 6px solid yellow;
  border-radius: 15px;
  position: absolute;
  top: 27px;
  left: -470px;
  z-index: 1000;
  font-family: "Pokemon-Solid";
  font-size: 24px;
  color: yellow;
  background-color: #cd9f09;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DrawRed = styled(DrawBlue)`
  left: 420px;
`;

const CageLabel = styled.div`
  position: absolute;
  font-size: 43px;
  left: 580px;
  top: -47px;
`;

const BlueCornerLabel = styled.div`
  position: absolute;
  left: 0px;
  top: -50px;
  background: linear-gradient(45deg, #0c427c, #65a3d1);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 700;
`;

const RedCornerLabel = styled(BlueCornerLabel)`
  background: linear-gradient(45deg, #ec3103, #ff7733);
  background-clip: text;
  color: transparent;
  font-family: "Pokemon-Hollow";
`;
const CrownBoxBlue = styled.div`
  position: absolute;
  top: 30px;
  left: 95px;
  z-index: 1000;
`;

const CrownBoxRed = styled.div`
  position: absolute;
  top: 30px;
  left: 95px;
  z-index: 1000;
`;
const FightButton = styled.button`
  position: relative;
  width: 150px;
  height: 100px;
  border: 10px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background: linear-gradient(90deg, #00ff00, #4cb105, #c7d10c);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  font-family: "Pokemon-Solid";

  &:hover {
    background: linear-gradient(90deg, #00ff00, #e3b10e, #00ff00);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    border: 10px solid #00ff00;
  }
  &:active {
    font-family: "Pokemon-Solid";
    border: 10px solid #fb0606;
    color: #fb0606;
  }
  &:disabled {
    font-family: "Pokemon-Solid";
    background: linear-gradient(45deg, #d40c1d, #e3b10e, #00ff00);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    font-size: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -60px;
  right: -60px;
  background: none;
  border: 10px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 60px;
  height: 60px;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  color: #16d816;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;

  &:hover {
    color: #e3b10e;
  }
  &:active {
    font-family: "Pokemon-Solid";
    border: 10px solid #e3b10e;
  }
`;
const ClearTheArena = styled.button`
  width: 300px;
  height: 100px;
  border: 14px solid #044957;
  border-radius: 20px;
  position: absolute;
  top: 700px;
  color: #fff;
  font-size: 34px;
  background-color: transparent;
  font-family: "Pokemon-Solid";
  border: 5px solid transparent;
  background-clip: padding-box;
  background-image: linear-gradient(45deg, #e2cc09, #044957, #00ff00);
  padding: 20px;
  padding-bottom: 40px;

  &:hover {
    color: #e3b10e;
    border: 5px solid transparent;
  }
  &:active {
    font-family: "Pokemon-Solid";
    border: 10px solid #e3b10e;
  }
`;

const Arena = () => {
  const [redWin, setRedWin] = useState(null);
  const [redLoss, setRedLoss] = useState(null);
  const [blueWin, setBlueWin] = useState(null);
  const [blueLoss, setBlueLoss] = useState(null);
  const [draw, setDraw] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const {
    blueCornerPokemon,
    redCornerPokemon,
    clearCornerBlue,
    clearCornerRed,
  } = useContext(AppContext);

  const handleFightButton = () => {
    const blueResult =
      blueCornerPokemon.weight * blueCornerPokemon.base_experience;
    const redResult =
      redCornerPokemon.weight * redCornerPokemon.base_experience;

    if (blueResult === redResult) {
      setDraw(true);
      setRedLoss(null);
      setBlueLoss(null);
    } else {
      setDraw(false);
      if (blueResult > redResult) {
        setBlueWin(true);
        setRedLoss(true);
      } else {
        setRedWin(true);
        setBlueLoss(true);
      }
    }
  };

  return (
    <Container>
      <Cage>
        <CageLabel>On The Arena</CageLabel>
        <CornerBlue filter={blueLoss || draw ? "blur(5px)" : "none"}>
          {blueWin && (
            <CrownBoxBlue>
              <Crown stroke="#00ff00" size={80} fill="green" />
            </CrownBoxBlue>
          )}
          <BlueCornerLabel>Blue Corner</BlueCornerLabel>
          <CloseButton
            onClick={() => {
              clearCornerBlue(),
                setDraw(false),
                setBlueLoss(null),
                setBlueWin(null);
            }}>
            X
          </CloseButton>
          {blueCornerPokemon ? (
            <Card
              onClick={() => {}}
              key={blueCornerPokemon.id}
              name={blueCornerPokemon.name}
              weight={blueCornerPokemon.weight}
              height={blueCornerPokemon.height}
              base_experience={blueCornerPokemon.base_experience}
              abilities={blueCornerPokemon.abilities}
              imageURL={blueCornerPokemon.imageURL}
            />
          ) : (
            <Topor size={150} fill={"rgba(0, 0, 0, 0.2)"} />
          )}
        </CornerBlue>
        <FightButton
          disabled={!blueCornerPokemon || !redCornerPokemon || isResult}
          onClick={() => {
            handleFightButton();
            setIsResult(true);
          }}>
          {blueCornerPokemon && redCornerPokemon && !isResult ? (
            <p>WALCZ !</p>
          ) : !isResult ? (
            <p>brak zawodników do walki</p>
          ) : (
            <p>oczysc arene</p>
          )}
          {draw && (
            <DrawBlue>
              <p>D R A W</p>
            </DrawBlue>
          )}
          {draw && (
            <DrawRed>
              <p>D R A W</p>
            </DrawRed>
          )}
          {redLoss && (
            <LostRed>
              <p>L O S T</p>
            </LostRed>
          )}
          {blueLoss && (
            <LostBlue>
              <p>L O S T</p>
            </LostBlue>
          )}
          {blueWin && (
            <WinnerBlue>
              <p>W I N N E R</p>
            </WinnerBlue>
          )}
          {redWin && (
            <WinnerRed>
              <p>W I N N E R</p>
            </WinnerRed>
          )}
        </FightButton>
        <CornerRed filter={redLoss || draw ? "blur(5px)" : "none"}>
          {redWin && (
            <CrownBoxRed>
              <Crown stroke="#00ff00" size={80} fill="green" />
            </CrownBoxRed>
          )}
          <RedCornerLabel>Red Corner</RedCornerLabel>
          <CloseButton
            onClick={() => {
              clearCornerRed(),
                setDraw(false),
                setRedLoss(null),
                setRedWin(null);
            }}>
            X
          </CloseButton>
          {redCornerPokemon ? (
            <Card
              onClick={() => {}}
              key={redCornerPokemon.id}
              name={redCornerPokemon.name}
              weight={redCornerPokemon.weight}
              height={redCornerPokemon.height}
              base_experience={redCornerPokemon.base_experience}
              abilities={redCornerPokemon.abilities}
              imageURL={redCornerPokemon.imageURL}
            />
          ) : (
            <Topor size={150} fill={"rgba(0, 0, 0, 0.2)"} />
          )}
        </CornerRed>
      </Cage>
      {isResult && (
        <ClearTheArena
          onClick={() => {
            clearCornerBlue(),
              clearCornerRed(),
              setDraw(false),
              setRedLoss(null),
              setBlueLoss(null),
              setBlueWin(null),
              setRedWin(null),
              setIsResult(false);
          }}>
          Oczysc Arene
        </ClearTheArena>
      )}
    </Container>
  );
};

export default Arena;
