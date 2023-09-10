// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE SAYA
import { Kartu } from "./DigunakanUlang.styled";

export const Wadah = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .analisis {
    ${Kartu};
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #abd1c6;
      color: #001e1d;
      svg {
        color: #001e1d;
      }
    }
    .logo {
      background-color: #abd1c6;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1.5rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
