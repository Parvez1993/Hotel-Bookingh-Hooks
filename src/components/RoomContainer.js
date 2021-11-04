import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomtList";
import { RoomContext } from "../context";

function RoomContainer() {
  const { loading, sortedRooms, rooms } = React.useContext(RoomContext);
  if (loading) {
    return <loading />;
  } else {
    return (
      <>
        Here are the rooms
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </>
    );
  }
}

export default RoomContainer;
