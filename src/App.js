import "./App.css";
import styled from "styled-components";
import HeroBackground from "./components/HeroBackground";
import TextSection from "./components/TextSection";

function App() {
  return (
    <Wrapper>
      <HeroBackground />
      <TextSection />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;
