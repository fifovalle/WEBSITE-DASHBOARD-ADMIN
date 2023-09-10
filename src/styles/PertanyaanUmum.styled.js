// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE SAYA
import { Kartu } from "./DigunakanUlang.styled";

export const Wadah = styled.section`
  ${Kartu};
  .judul {
    h2 {
      color: #001e1d;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .pertanyaan_pertanyaan {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .pertanyaan {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 0.8rem 0;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #abd1c6;
        color: #001e1d;
      }
      .info {
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg {
        font-size: 1.4rem;
      }
      &:nth-of-type(2) {
        border-top: 0.01rem solid #001e1d;
        border-bottom: 0.01rem solid #001e1d;
      }
    }
  }
`;
