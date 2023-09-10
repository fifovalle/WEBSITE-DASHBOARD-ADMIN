// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Wadah = styled.section`
  position: fixed;
  left: 0;
  background-color: #e8e4e6;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .atas {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    .beralih {
      display: none;
    }
    .merek {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      svg {
        color: #001e1d;
        font-size: 1.9rem;
      }
      span {
        font-size: 1.9rem;
        color: #001e1d;
        font-family: "Permanent Marker", cursive;
      }
    }
    .tautan {
      display: flex;
      justify-content: center;
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #001e1d;
            a {
              color: #fffffe;
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: #001e1d;
          }
        }
        .aktif {
          background-color: #001e1d;
          a {
            color: #fffffe;
          }
        }
      }
    }
  }
  .keluar {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #abd1c6;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: #001e1d;
    }
  }
`;
