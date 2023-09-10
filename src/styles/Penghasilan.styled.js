// FILE StYLED COMPONENTS
import styled from "styled-components";
// FILE SAYA
import { Kartu } from "./DigunakanUlang.styled";

export const Wadah = styled.section`
  ${Kartu};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  padding: 2rem 0 0 0;
  .atas {
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
      h1 {
        font-size: 2rem;
      }
      .perkembangan {
        background-color: #abd1c6;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #001e1d;
          span {
            color: #abd1c6;
          }
        }
        span {
          color: #001e1d;
        }
      }
    }
  }
  .grafik {
    height: 70%;
    .recharts-default-tooltip {
      background-color: white !important;
      border-color: #001e1d !important;
    }
  }
`;
