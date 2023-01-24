import styled from "styled-components";

const CardWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.17);
  min-height: 280px;
  min-width: 544px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px 16px;
  gap: 12px;
`;

const RowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

const DocsRowsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 20px;
`;

const PassportNumber = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

const DocsSpan = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const DocsCardText = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
  margin: 0;
`;
export {
  CardWrapper,
  PassportNumber,
  DocsSpan,
  DocsCardText,
  RowsWrapper,
  DocsRowsWrapper,
};
