import React, { useState } from "react";
import { data } from "./data";

export const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  let [rooms, setRooms] = React.useState([]);
  let [sortedRooms, setSortedRooms] = React.useState([]);
  let [featuredRooms, setFeaturedRooms] = React.useState([]);
  let [loading, setLoading] = React.useState(false);

  //filters

  const [type, setType] = useState("all");
  const [capacity, setCapacity] = useState(1);
  let [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = React.useState(0);
  const [minSize, setMinSize] = useState(0);
  const [maxSize, setMaxSize] = useState(0);
  const [breakfast, setBreakFast] = useState(false);
  const [pet, setpet] = useState(false);

  let tempItems = data.map((item) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });

  price = parseInt(price);

  let getRoom = (slug) => {
    let tempRooms = tempItems;
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);
    filterRooms(name, value);
  };

  const capacitySet = (value) => {
    setCapacity(value);
    let num = parseInt(value);
    if (value !== 1) {
      let itemz = tempItems.filter((item) => item.capacity === num);
      setSortedRooms(itemz);
    }
  };

  const FilterPrice = (value) => {
    setPrice(value);
    let temp = tempItems.filter((room) => room.price <= value);

    if (value < 100) {
      return (temp = []);
    }
    setSortedRooms(temp);
  };

  const FilterMinSize = (value) => {
    console.log("size", value);
    setMinSize(value);
    let num = parseInt(value);
    let tempy;

    if (num > 0 && num <= maxSize) {
      tempy = tempItems.filter(
        (room) => room.size >= num && room.size <= maxSize
      );
      // console.log("size", tempy);
      setSortedRooms(tempy);
    } else if (num >= maxSize) {
      setMinPrice(maxPrice);
    } else {
      setMinSize(0);
    }
  };
  const FilterMaxSize = (value) => {
    console.log("size", value);
    setMaxSize(value);
    let num = parseInt(value);
    let tempy = tempItems.filter(
      (room) => room.size >= minSize && room.size <= num
    );
    if (tempy.length > 1) {
      setSortedRooms(tempy);
    } else {
      return 0;
    }
  };

  const filterRooms = (name, value) => {
    console.log("value", value);
    if (name === "type") {
      if (value !== "all") {
        tempItems = tempItems.filter((item) => {
          return item.type === value;
        });
        setType(value);
        setSortedRooms(tempItems);
      } else {
        setSortedRooms(tempItems);
      }
    } else if (name === "capacity") {
      capacitySet(value);
    } else if (name === "price") {
      FilterPrice(value);
    } else if (name === "breakfast") {
      if (value === true) {
        setBreakFast(value);
        let tempbreak = tempItems.filter((room) => room.breakfast === false);
        setSortedRooms(tempbreak);
      } else {
        setBreakFast(value);
        let tempbreak = tempItems.filter(
          (room) => room.breakfast === false || room.breakfast === true
        );
        setSortedRooms(tempbreak);
      }
    } else if (name === "pet") {
      if (value === true) {
        setpet(value);
        let tempbreak = tempItems.filter((room) => room.pets === false);
        setSortedRooms(tempbreak);
      } else {
        setpet(value);
        let tempbreak = tempItems.filter(
          (room) => room.pets === true || room.pets === false
        );
        setSortedRooms(tempbreak);
      }
    }
  };
  React.useState(() => {
    setRooms(tempItems);
    setFeaturedRooms(tempItems.filter((room) => room.featured === true));
    setSortedRooms(tempItems);
    setMaxPrice(
      Math.max(
        ...tempItems.map((item) => {
          return item.price;
        })
      )
    );

    setMaxSize(
      Math.max(
        ...tempItems.map((item) => {
          return item.size;
        })
      )
    );
  }, []);

  const handleMinSize = (e) => {
    FilterMinSize(e.target.value);
  };

  const handleMaxSize = (e) => {
    FilterMaxSize(e.target.value);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        featuredRooms,
        loading,
        getRoom,
        sortedRooms,
        maxPrice,
        maxSize,
        minSize,
        handleChange,
        type,
        capacity,
        price,
        breakfast,
        pet,
        handleMinSize,
        handleMaxSize,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
