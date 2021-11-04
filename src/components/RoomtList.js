import React from "react";
import Room from "./Room";
import styled from "styled-components";
import Loading from "./Loading";
import { RoomContext } from "../context";

function RoomtList({ rooms }) {
  const { loading, maxPrice, maxSize, sortedRooms } =
    React.useContext(RoomContext);
  console.log(maxPrice, maxSize);
  <div>Hello from the roomList</div>;
  let TempRoom = rooms.map((room) => {
    return <Room key={room.id} room={room} />;
  });

  if (TempRoom.length === 0) {
    <h3>No rooms with your search</h3>;
  } else {
    return (
      <>
        <Wrapper>
          <div className="container">
            <div className="featured">
              <div className="heading">
                <h2 className="underline"> Room</h2>
              </div>
            </div>
            <div className="main">{loading ? <Loading /> : TempRoom}</div>
          </div>
        </Wrapper>
      </>
    );
  }
}
const Wrapper = styled.div`
  .main {
    margin: 100px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;

    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`;

export default RoomtList;

// let TempRoom = rooms.map((room) => {
//   return <Room key={room.id} room={room} />;
// });

// if (TempRoom.length === 0) {
//   <h3>No rooms with your search</h3>;
// } else {
//   return (
//     <>
//       <div className="container">
//         <div className="featured">
//           <div className="heading">
//             <h2 className="underline"> Room</h2>
//             <div className="main">{loading ? <Loading /> : TempRoom}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
