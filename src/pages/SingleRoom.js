import React from "react";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import styled from "styled-components";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import HeroSpecial from "../components/HeroSpecial";

function SingleRoom(props) {
  const { getRoom } = React.useContext(RoomContext);
  const [slug, setSlug] = React.useState(props.match.params.slug);

  const TempRoom = getRoom(slug);
  console.log(TempRoom);

  const {
    breakfast,
    capacity,
    description,
    extras,
    featured,
    images,
    name,
    pets,
    price,
    size,
    type,
  } = TempRoom;

  const [firstimg, ...defaultimg] = images;

  if (!TempRoom) {
    return (
      <>
        <Wrapper>
          <div className="error">
            <div>
              <h4>No such rooms could be found</h4>
            </div>
            <div>
              <Link to="/rooms" className="btn-secondary btn-center">
                back to rooms
              </Link>
            </div>
          </div>
        </Wrapper>
      </>
    );
  }
  return (
    <Wrapper>
      <>
        <HeroSpecial img={images[0]}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              Back to Room
            </Link>
          </Banner>
        </HeroSpecial>

        <div className="container">
          <div className="single-room">
            <div className="single-room-images">
              {defaultimg.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))}
            </div>
          </div>

          <div className="details">
            <div className="left">
              <h3>Detail</h3>
              <p>{description}</p>
            </div>
            <div className="right">
              <h3>Detail</h3>
              <p>Price: ${price}</p>
              <p>Size: {size} SQFT</p>
              <p>Max Capacity: {capacity} person</p>
              <p>{`${pets ? "No pets allowerd" : "Pets Allowed"}`}</p>
              <p>{`${
                breakfast ? "Breakfast: Not included" : "Breakfast: included"
              }`}</p>
            </div>
          </div>

          <div className="extras">
            <h3>Extras</h3>
            <ul className="features">
              {extras.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .error {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
  }
  .single-room-images {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    row-gap: 20px;
    padding: 0 20px;

    @media screen and (max-width: 991px) {
      justify-content: space-evenly;
    }

    @media screen and (max-width: 650px) {
      flex-direction: column;
      align-items: center;
    }

    img {
      width: 300px;
      height: auto;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 20px;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      row-gap: 20px;
    }

    .left {
      flex-basis: 50%;
      row-gap: 10px;
      line-height: 1.5rem;
      h3 {
        margin-bottom: 20px;
      }
    }
    .right {
      flex-basis: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      row-gap: 10px;
    }
  }
  .extras {
    margin: 50px 20px;
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      column-gap: 50px;
      row-gap: 50px;

      li {
        list-style: square;
        font-size: 1.2rem;
      }
    }
  }
`;

export default SingleRoom;
