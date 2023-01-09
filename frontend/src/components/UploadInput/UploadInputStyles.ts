import styled from "styled-components";

const ImageWrapper = styled.label`
  background: rgba(25, 118, 210, 0.12);
  border-radius: 64px;
`;

const UploadLink = styled.span`
  color: #1976d2;
  border-bottom: 1px solid rgba(25, 118, 210, 0.6);
  cursor: pointer;
`;

const AdditionalText = styled.span`
  color: rgba(0, 0, 0, 0.87);

  @media (max-width: 480px) {
    display: none;
  }
`;

export { ImageWrapper, UploadLink, AdditionalText };
