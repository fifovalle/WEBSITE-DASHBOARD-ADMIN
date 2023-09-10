// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Wadah = styled.nav`
  display: flex;
  justify-content: space-between;
  color: #fffffe;
  .judul {
    h1 {
      span {
        margin-left: 0.5rem;
        color: #abd1c6;
        letter-spacing: 0.2rem;
        font-family: "Permanent Marker", cursive;
      }
    }
  }
  .pencaharian {
    background-color: #abd1c6;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 8rem 1rem 1rem;
    border-radius: 1rem;
    svg {
      color: #001e1d;
    }
    input {
      background-color: transparent;
      border: none;
      color: #001e1d;
      font-family: "Permanent Marker", cursive;
      letter-spacing: 0.3rem;
      &::placeholder {
        color: #001e1d;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;
