import React from "react";
import { Link } from "react-router-dom";
import { MdHotel } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaWindowClose } from "react-icons/fa";

import styled from "styled-components";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const Close = () => setClick(false);

  const CheckWindowSize = () => {
    if (window.innerWidth > 960) {
      console.log("changing");
      setClick(false);
    } else {
      setClick(true);
    }
  };

  React.useEffect(() => {
    CheckWindowSize();
  }, []);

  window.addEventListener("resize", CheckWindowSize);
  return (
    <>
      <Wrapper>
        <nav>
          <div className="nav__logo">
            <MdHotel className="icon" />
          </div>
          <div onClick={Close} className="nav-menuParent">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/rooms/">Rooms</Link>
              </li>
            </ul>
          </div>
          <div className="nav-button" onClick={handleClick}>
            {click ? <FaWindowClose /> : <FiMenu />}
          </div>
        </nav>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.nav`
  position: relative;

  nav {
    display: flex;
    background-color: var(--blue);
    align-items: center;
    justify-content: space-around;

    .icon {
      font-size: 3.5rem;
    }
    .nav-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      font-size: 1.2rem;
      color: red;
      opacity: 0.9;
      translate: all 0.9s linear;
      @media screen and (max-width: 960px) {
        display: none;
      }
    }
    .nav-menu.active {
      position: absolute;
      z-index: 1;
      ul {
        text-align: center;
      }

      @media screen and (max-width: 960px) {
        background-color: var(--purple);
        display: block;
        position: absolute;
        top: 60px;
        right: 0;
        height: 60vh;
        width: 100vw;
        &::before {
          transition: all 1s;
        }

        li {
          text-align: center;
          padding: 20px;
        }
      }
    }
    .nav-button {
      display: none;
      @media screen and (max-width: 960px) {
        display: block;
      }
    }
  }
`;
export default Navbar;
