import styled from "styled-components";

import defaultImg from "../images/defaultBcg.jpeg";

const HeroSpecial = styled.div`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  background-size: cover;
  background-position: center;
`;

export default HeroSpecial;
