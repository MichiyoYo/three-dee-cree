import React from "react";
import styled from "styled-components";

function TextSection(props) {
  return (
    <Wrapper>
      <Title>Cristina Lester</Title>
      <Description>Full Stack Web Developer</Description>
    </Wrapper>
  );
}

export default TextSection;

const Wrapper = styled.div`
  position: relative;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
`;

const Description = styled.p`
  max-width: 240px;
  color: #fff7;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  margin: 0 auto;
`;
