import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { AppContext } from "../../context/AppContext";

const Container = styled.div`
  height: 70px;
  width: 1900px;
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 50px;
    height: auto;
    gap: 20px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    max-width: 320px;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 50px;
    height: auto;
    gap: 20px;
  }
`;

const Logo = styled.div`
  width: 200px;
  height: 70px;
  font-size: 52px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: -3px -3px 3px rgba(255, 255, 0, 0.6);

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 40px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 35px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 52px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 52px;
  }
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-family: "Pokemon-Hollow";
  color: #aae30e;
  outline: none;
  font-size: 24px;
  background-color: transparent;
  border-radius: 20px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: top;
  line-height: 30px;

  &:hover {
    border: 3px inset #aae30e;
  }

  &:active {
    font-family: "Pokemon-Solid";
    color: #e3b10e;
    border: 3px inset #e3b10e;
  }
`;

const Links = styled.div`
  display: flex;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LinkItem = styled.div`
  padding: 15px;

  &.active {
    border-bottom: 3px solid #e3b10e;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => (props.isDarkTheme ? "#cce628" : "#ab5eb2")};
  text-decoration: none;
  font-family: "Pokemon-Hollow";
  cursor: pointer;
  font-weight: 900;
  transition: transform 0.3s ease-in-out;

  &:hover {
    font-weight: 700;
    color: #aae30e;
    transform: scale(1.05);
  }
  &:active {
    color: #e3b10e;
    font-family: "Pokemon-Solid";
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Navbar = () => {
  const { toggleTheme, isDarkTheme, isLogin, falseLogin } =
    useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <Container>
      <Logo>Pokedex</Logo>
      <Links>
        <LinkItem className={pathname === "/home" && "active"}>
          <StyledLink to="/home" isDarkTheme={isDarkTheme}>
            HOME
          </StyledLink>
        </LinkItem>
        <LinkItem className={pathname === "/arena" && "active"}>
          <StyledLink to="/arena" isDarkTheme={isDarkTheme}>
            ARENA
          </StyledLink>
        </LinkItem>
        <LinkItem className={pathname === "/favorites" && "active"}>
          <StyledLink to="/favorites" isDarkTheme={isDarkTheme}>
            ULUBIONE
          </StyledLink>
        </LinkItem>
        {isLogin ? (
          <>
            <LinkItem className={pathname === "/edition" && "active"}>
              <StyledLink to="/edition" isDarkTheme={isDarkTheme}>
                EDYCJA
              </StyledLink>
            </LinkItem>
            <LinkItem>
              <StyledLink
                to="/logout"
                isDarkTheme={isDarkTheme}
                onClick={async () => {
                  falseLogin();
                  localStorage.removeItem("isLogin");
                  localStorage.removeItem("userToLogin");
                  localStorage.removeItem("isDarkTheme");
                }}>
                WYLOGUJ
              </StyledLink>
            </LinkItem>
          </>
        ) : (
          <>
            <LinkItem className={pathname === "/login" && "active"}>
              <StyledLink to="/login" isDarkTheme={isDarkTheme}>
                LOGOWANIE
              </StyledLink>
            </LinkItem>
            <LinkItem className={pathname === "/register" && "active"}>
              <StyledLink to="/register" isDarkTheme={isDarkTheme}>
                REJESTRACJA
              </StyledLink>
            </LinkItem>
          </>
        )}
      </Links>
      <Button onClick={toggleTheme}>toggle</Button>
    </Container>
  );
};
export default Navbar;
