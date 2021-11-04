import React from "react";
import styled from "styled-components";
import img from "../image/hero/roomHero.jpg";

function Hero({ children, hero }) {
  return (
    <Wrapper>
      <div className={hero}>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .roomHero {
    background: url(${img});
    background-size: cover;
    background-position: center;
    height: 60vh;
  }
`;

export default Hero;

Hero.defaultProps = {
  hero: "defaultHero",
};
