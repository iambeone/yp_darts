import styled from "styled-components";

const RadioButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  color: rgba(0, 0, 0, 0.87);
`;

export { RadioButtonsContainer, Label };
