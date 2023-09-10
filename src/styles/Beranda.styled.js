// FILE STYLED COMPONENTS
import styled from "styled-components";

export const Wadah = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .wadah {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
    .baris_pertama {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .baris_kedua {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;
