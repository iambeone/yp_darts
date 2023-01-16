import styled from "styled-components";

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 24px 40px;
  @media (max-width: 768px) {
    margin: 24px 0 24px 24px;
  }
  @media (max-width: 400px) {
    margin: 24px 0 24px 16px;
  }
`;

const ContactInfoSpan = styled.span`
  color: #2e7d32;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
  line-height: 160%;
`;

const DetailedInfo = styled.div`
  max-width: 1192px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 400px) {
    max-width: 100%;
    margin-right: 16px;
  }
`;

const Wrapper = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    max-width: 80%;
  }
  @media (max-width: 400px) {
    max-width: 100%;
  }
`;

const DetailedInfoItemSpan = styled.span`
  margin: 0 0 0 40px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const InfoText = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  @media (max-width: 768px) {
    margin: 0 0 0 24px;
  }
  @media (max-width: 400px) {
    margin: 0 0 0 16px;
  }
`;

const Card = styled.div``;

export {
  TitleWrapper,
  ContactInfoWrapper,
  ContactInfoSpan,
  DetailedInfo,
  Wrapper,
  DetailedInfoItemSpan,
  InfoText,
  Card,
};
