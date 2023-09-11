// FILE STYLED COMPONENTS
import styled from "styled-components";
// FILE SAYA
import { Kartu } from "./DigunakanUlang.styled";

export const Wadah = styled.section`
  ${Kartu};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .judul {
    h2 {
      color: #001e1d;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
    }
  }
  .transaksi_transaksi {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaksi {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__judul {
        display: flex;
        gap: 1rem;
        &__foto {
          img {
            height: 2.5rem;
            width: 2.5rem;
            border-radius: 3rem;
          }
        }
      }
      &__uang {
        background-color: #abd1c6;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
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
  .lihat {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #001e1d;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
`;
