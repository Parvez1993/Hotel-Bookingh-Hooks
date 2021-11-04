import React from "react";
import styled from "styled-components";

function Banner({ children, title, subtitle }) {
  return (
    <Wrapper>
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  .banner {
    background: var(--purple);
    display: inline-block;
    padding: 50px;
    opacity: 0.9;
    left: 0;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      padding: 20px 0;
      font-weight: 600;
    }
  }
`;

export default Banner;
