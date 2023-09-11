// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE SAYA
import { Kartu } from "./DigunakanUlang.styled";

export const Wadah = styled.section`
  ${Kartu};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  .foto {
    max-height: 10rem;
    overflow: hidden;
    img {
      height: 10rem;
      width: 10rem;
      object-fit: cover;
      transition: 0.5s ease-in-out;
    }
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
  .judul {
    text-align: center;
    h2,
    h5 {
      color: #001e1d;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.2rem;
    }
  }
  .info {
    display: flex;
    gap: 1rem;
    .wadah {
      text-align: center;
    }
  }
`;
