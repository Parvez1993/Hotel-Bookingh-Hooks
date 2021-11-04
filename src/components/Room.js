import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/defaultBcg.jpeg";
import styled from "styled-components";
function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <>
      <Wrapper>
        <div className="room">
          <div className="img-container">
            <img src={images[0] || defaultImg} alt="singleRoom"></img>
          </div>
          <div className="price-top">
            <h4>{price}</h4>
            <p>per night</p>
          </div>
          <div className="btn">
            <Link to={`/rooms/${slug}`} className="btn-primary btn__position">
              Features
            </Link>
          </div>
        </div>
        <p className="room-info">{name}</p>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .room {
    flex: 0 0 33.333333%;
    position: relative;
    @media screen and (max-width: 500px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .img-container {
      width: 400px;
      @media screen and (max-width: 500px) {
        width: 250px;
      }
      img {
        width: 100%;
        height: auto;
      }

      &:hover {
        filter: brightness(50%);
      }
    }

    .price-top {
      position: absolute;
      background: var(--purple);
      top: 0;
      left: 10px;
      padding: 5px;
      color: var(--white);
    }
    .btn {
      position: Absolute;
      top: 100px;
      left: 200px;
      transform: translate(-50%, 50%);
    }
  }
  .room-info {
    background: var(--purple);
    color: var(--white);
    padding: 5px;
    margin-top: -5px;
  }
`;

export default Room;
