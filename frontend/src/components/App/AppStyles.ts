import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, max-content) 1fr;
  grid-template-rows: auto 1fr;
  gap: 0;
`;

const SectionItem = styled.div`
  box-sizing: border-box;
  margin: 0;
  &:nth-child(1) {
    grid-column: 1;
    grid-row: 1/3;
    min-height: 100vh;
  }
  &:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
    max-height: 72px;
  }
  &:nth-child(3) {
    grid-column: 2;
    grid-row: span 2;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media (max-width: 500px) {
      padding-bottom: 70px;
    }
  }
`;

export { Section, SectionItem };
