import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const isLogin = false;

const Container = styled.div`
  width: 1400px;
  height: 70px;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const LinkItem = styled.div`
  padding: 15px;

  &.active {
    border-bottom: 3px solid #e3b10e;
  }
`;

const StyledLink = styled(Link)`
  color: #111;
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
`;

const Navbar = () => {
  const { toggleTheme, isLogin, falseLogin } = useContext(AppContext);
  const { pathname } = useLocation();

  return (
    <Container>
      <Logo>Pokedex</Logo>
      <LinkItem className={pathname === "/home" && "active"}>
        <StyledLink to="/home">HOME</StyledLink>
      </LinkItem>
      <LinkItem className={pathname === "/arena" && "active"}>
        <StyledLink to="/arena">ARENA</StyledLink>
      </LinkItem>
      <LinkItem className={pathname === "/favorites" && "active"}>
        <StyledLink to="/favorites">ULUBIONE</StyledLink>
      </LinkItem>
      {isLogin ? (
        <>
          <LinkItem className={pathname === "/edition" && "active"}>
            <StyledLink to="/edition">EDYCJA</StyledLink>
          </LinkItem>
          <LinkItem>
            <StyledLink
              to="/logout"
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
            <StyledLink to="/login">LOGOWANIE</StyledLink>
          </LinkItem>
          <LinkItem className={pathname === "/register" && "active"}>
            <StyledLink to="/register">REJESTRACJA</StyledLink>
          </LinkItem>
        </>
      )}
      <Button onClick={toggleTheme}>toggle</Button>
    </Container>
  );
};
export default Navbar;
