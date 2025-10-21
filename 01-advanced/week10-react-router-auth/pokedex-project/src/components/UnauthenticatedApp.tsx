import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styled from "@emotion/styled";
import { colors } from "../styles/index";

const CustomLinkButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: ${colors.pink[400]};
  }
`;

type UnauthenticatedAppProps = {
  onLogin: (credentials: { email: string; password: string }) => void;
  onSignUp: (userData: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => void;
};

const UnauthenticatedApp = ({ onLogin, onSignUp }: UnauthenticatedAppProps) => {
  const [showLogin, setShowLogin] = useState(true);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h1>Welcome to Poke Collection</h1>
      {showLogin ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <SignUpForm onSignUp={onSignUp} />
      )}
      <CustomLinkButton onClick={handleClick}>
        {showLogin ? "Go to Sign Up" : "Go to Login"}
      </CustomLinkButton>
    </div>
  );
};

export default UnauthenticatedApp;
