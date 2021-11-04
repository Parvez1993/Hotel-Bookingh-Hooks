import React from "react";
import { services } from "../services";
import styled from "styled-components";

export default function Services() {
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="service__heading">
            <h2 className="underline">Our Services</h2>
          </div>
          <div className="services">
            {services.map((item, i) => {
              return (
                <div key={i} className="services__info">
                  <div className="icon">{item.icon}</div>
                  <div className="title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="info">
                    <p>{item.info}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 100px 0;

  .service__heading {
    display: flex;
    justify-content: center;
    margin: 100px 0;
  }
  .services {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .services__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;
      width: 300px;
      .icon {
        font-size: 2rem;
        color: var(--blue);
      }
      p {
        text-align: Center;
        padding: 20px;
      }
    }
  }
`;
