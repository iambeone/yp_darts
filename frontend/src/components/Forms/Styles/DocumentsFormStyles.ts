import styled from "styled-components";

const DocumentsFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 636px;
  width: 100%;
  margin-bottom: auto;

  @media (min-width: 1195px) {
    max-width: 734px;
    margin: 0 auto auto;
  }
`;

const DocumentsFormBlockTitle = styled.h6`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: #003200;
  margin: 0;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const IdentificationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 25px 16px 0 16px;
  overflow: hidden;

  @media (min-width: 834px) {
    gap: 20px;
  }
`;

const OtherDocumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  margin: 24px 16px 0 16px;

  @media (min-width: 834px) {
    margin: 25px 24px 0 24px;
    gap: 38px;
  }
`;

const TogledBlock = styled.div`
  width: 100%;
`;

export {
  TogledBlock,
  OtherDocumentsBlock,
  IdentificationBlock,
  InputBlock,
  DocumentsFormBlock,
  DocumentsFormBlockTitle,
};
