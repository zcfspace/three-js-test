import Link from "next/link";
import styled from "styled-components";

export default function WelcomeView() {
  return (
    <SContainer>
      <SH1>Welcome to the Three.js Test App</SH1>
      <Link href="/box">
        <SButton>Go to Box App </SButton>
      </Link>
      <Link href="/pokemon">
        <SButton>Go to Pokemon App</SButton>
      </Link>
      <Link href="/test2">
        <SButton>Go to Test App</SButton>
      </Link>
    </SContainer>
  );
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const SButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #000;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;

const SH1 = styled.h1``;

