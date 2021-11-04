import React from "react";
import { RoomContext } from "../context";
import PetsIcon from "@mui/icons-material/Pets";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Checkbox, Slider, TextField } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
function RoomFilter() {
  const {
    rooms,
    minPrice,
    maxPrice,
    maxSize,
    handleChange,
    capacityChange,
    type,
    capacity,
    price,
    breakfast,
    pet,
    minSize,
    handleMinSize,
    handleMaxSize,
  } = React.useContext(RoomContext);

  let types = getUnique(rooms, "type");
  let people = getUnique(rooms, "capacity");
  types = ["all", ...types];
  // map to jsx

  types = types.map((item, index) => {
    return (
      <MenuItem key={index} value={item}>
        {item}
      </MenuItem>
    );
  });
  console.log("people", people);
  return (
    <>
      <Wrapper>
        {" "}
        <div className="filter-container">
          <div className="heading">
            <h3>Search Rooms</h3>
          </div>
          <div className="form-main">
            <div className="form-group">
              <InputLabel id="demo-simple-select-label">Room Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="type"
                name="type"
                value={type}
                label="type"
                onChange={handleChange}
              >
                {types}
              </Select>
            </div>

            {/* guests */}

            <div className="form-group">
              <InputLabel id="capacity">Guests</InputLabel>
              <Select
                labelId="capacity"
                id="capacity"
                name="capacity"
                value={capacity}
                label="capacity"
                onChange={handleChange}
              >
                {people.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>

            {/* price */}
            <div className="form-group">
              <Box width={200}>
                <label htmlFor="price">room price ${price}</label>
                <Slider
                  aria-label="Default"
                  valueLabelDisplay="auto"
                  min={minSize}
                  max={maxSize}
                  value={price}
                  type="range"
                  name="price"
                  className="form-control"
                  id="price"
                  onChange={handleChange}
                />
              </Box>
            </div>

            <div className="form-group">
              <div className="single-extra">
                <label htmlFor="pet">Breakfast</label>
                <Checkbox
                  icon={<FreeBreakfastOutlinedIcon />}
                  checkedIcon={<FreeBreakfastIcon />}
                  name="breakfast"
                  id="breakfast"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="single-extra">
                <label htmlFor="pet">pet</label>
                <Checkbox
                  icon={<PetsOutlinedIcon />}
                  checkedIcon={<PetsIcon />}
                  name="pet"
                  id="pet"
                  checked={pet}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .form-main {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 20px;
    column-gap: 30px;
  }
`;

export default RoomFilter;
