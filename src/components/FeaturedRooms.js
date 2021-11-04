import React from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import styled from "styled-components";
import Loading from "./Loading";

function FeaturedRooms() {
  const { rooms, featuredRooms, loading } = React.useContext(RoomContext);

  let TempRoom = featuredRooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="featured">
            <div className="heading">
              <h2 className="underline">Featured Room</h2>
            </div>
            <div className="main">{loading ? <Loading /> : TempRoom}</div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;

    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`;

export default FeaturedRooms;
