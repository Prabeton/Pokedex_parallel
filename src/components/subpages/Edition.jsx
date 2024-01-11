import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import List from "./List";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin-top: 30px;
`;

const NoLogin = styled.div`
  color: #e3b10e;
  width: 600px;
`;

const EditionBox = styled.div`
  color: #e3b10e;
  width: 100%;
`;

const Workshop = styled.div`
  width: 100%;
  height: 600px;
  border: 3px solid #5cedaa;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 120px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;
const Writing = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 20px;
  color: #5cedaa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 44px;
`;

const Create = styled.button`
  width: 250px;
  height: 100px;
  border: 5px solid #00ff00;
  border-radius: 20px;
  color: #00ff00;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  &:active {
    border: 5px solid #9c090c;
    color: #9c090c;
    background-color: #000;
  }
`;
const EditCardContainer = styled.div`
  width: 240px;
  height: 350px;
  border-radius: 20px;
  border: 4px solid #163707;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  background: rgba(10, 139, 25, 0.5);
  position: relative;
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  border: 3px solid #163707;
  margin-top: 12px;
  border-radius: 8px;
  background-color: green;
`;

const Name = styled.input`
  background-color: green;
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
  caret-color: #000;

  &:focus {
    outline: none;
    border-color: #0078d4;
    box-shadow: 0 0 5px #0078d4;
  }

  &:active {
    background-color: #f0f0f0;
  }
`;
const Propers = styled.div`
  display: flex;
  gap: 10px;
`;

const Proper = styled.input`
  background-color: green;
  width: 100px;
  height: 40px;
  border: 3px solid #163707;
  border-radius: 8px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  font-size: 12px;
  font-family: Inter;
  color: #000;
  font-weight: 600;
  padding: 0;
  caret-color: #000;
  position: relative;

  &:focus {
    outline: none;
    border-color: #0078d4;
    box-shadow: 0 0 5px #0078d4;
  }

  &:active {
    background-color: green;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -60px;
  right: -60px;
  background: none;
  border: 3px solid #163707;
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
    border: 3px solid #e3b10e;
  }
`;
const Label = styled.p`
  position: absolute;
  left: 4px;
  top: -22px;
  font-size: 10px;
  color: #00ff00;
  z-index: 5;
  font-family: "Inter";
`;
const LabelName = styled.p`
  position: absolute;
  left: 4px;
  top: -15px;
  font-size: 10px;
  color: #00ff00;
  z-index: 5;
  font-family: "Pokemon-Solid";
`;

const ProperDiv = styled.div`
  position: relative;
`;

const Edition = () => {
  const { isLogin, workshopBody, clearWorkshopBody, actualityPokemonsTable } =
    useContext(AppContext);

  const [nameNewPokemon, setName] = useState(
    workshopBody ? workshopBody.name : null
  );
  const [weight, setWeight] = useState(
    workshopBody ? workshopBody.weight : "zawsze null"
  );
  const [height, setHeight] = useState(
    workshopBody ? workshopBody.height : null
  );
  const [baseExperience, setBaseExperience] = useState(
    workshopBody ? workshopBody.base_experience : null
  );
  const [abilities, setAbilities] = useState(
    workshopBody ? workshopBody.abilities : null
  );

  useEffect(() => {
    setName(workshopBody ? workshopBody.name : "");
    setWeight(workshopBody ? workshopBody.weight : "");
    setHeight(workshopBody ? workshopBody.height : "");
    setBaseExperience(workshopBody ? workshopBody.base_experience : "");
    setAbilities(workshopBody ? workshopBody.abilities : "");
  }, [workshopBody]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleBaseExperienceChange = (e) => {
    setBaseExperience(e.target.value);
  };

  const handleAbilitiesChange = (e) => {
    setAbilities(e.target.value);
  };

  function generateUniqueID() {
    return uuidv4();
  }

  const newPokemon = {
    name: nameNewPokemon,
    weight: weight,
    height: height,
    base_experience: baseExperience,
    abilities: abilities,
    imageURL: workshopBody ? workshopBody.imageURL : null,
    id: generateUniqueID(),
  };

  const saveNewPokemon = () => {
    axios
      .post("http://localhost:3002/newPokemons", newPokemon)
      .then((response) => {
        console.log("Dodano do NewPokemons:", response.data);
        axios
          .get("http://localhost:3002/newPokemons")
          .then((updatedData) => {
            actualityPokemonsTable(updatedData.data);
            console.log(
              "Zaktualizowana tablica nowych pokemonów:",
              updatedData.data
            );
          })
          .catch((error) => {
            console.error(
              "Błąd pobierania zaktualizowanej tablicy nowych pokemonów:",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Błąd dodawania do NewPokemons:", error);
      });
  };

  return (
    <Container>
      {isLogin ? (
        <EditionBox>
          <h4>Tutaj mozesz tworzyc nowe pokemony :)</h4>
          <h4>Nadaj mu wlasne imie i zwiększ jego umiejetnosci.</h4>
          <Workshop>
            <Writing>workshop</Writing>
            <EditCardContainer>
              <CloseButton onClick={() => clearWorkshopBody()}>X</CloseButton>
              <ProperDiv>
                <LabelName>name:</LabelName>
                <Name
                  type="text"
                  value={nameNewPokemon}
                  onChange={handleNameChange}></Name>
              </ProperDiv>
              <Img src={workshopBody ? workshopBody.imageURL : null} />
              <Propers>
                <div>
                  <ProperDiv>
                    <Label>base experience:</Label>
                    <Proper
                      id="base_experience"
                      type="text"
                      value={baseExperience}
                      onChange={handleBaseExperienceChange}></Proper>
                  </ProperDiv>
                  <ProperDiv>
                    <Label>height:</Label>
                    <Proper
                      id="height"
                      type="text"
                      value={height}
                      onChange={handleHeightChange}></Proper>
                  </ProperDiv>
                </div>
                <div>
                  <ProperDiv>
                    <Label>weight:</Label>
                    <Proper
                      id="weight"
                      type="text"
                      value={weight}
                      onChange={handleWeightChange}></Proper>
                  </ProperDiv>
                  <ProperDiv>
                    <Label>abilities:</Label>
                    <Proper
                      id="abilities"
                      type="text"
                      value={abilities}
                      onChange={handleAbilitiesChange}></Proper>
                  </ProperDiv>
                </div>
              </Propers>
            </EditCardContainer>
            <Create
              onClick={() => {
                saveNewPokemon(newPokemon);
              }}>
              Create a New Pokemon
            </Create>
          </Workshop>
          <h4>Wybierz jakiegos z listy jako baza.</h4>
          <h4>Kliknij w pokemona i wybierz na karcie opcję *warsztat*</h4>
          <List />
        </EditionBox>
      ) : (
        <NoLogin>
          Nie jestes zalogowany! Przejdz poprawnie proces logowania. Nacisnij
          link * Logowanie * i wypelnij formularz.
        </NoLogin>
      )}
    </Container>
  );
};
export default Edition;
