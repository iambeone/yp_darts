import styled from "styled-components";
import Button from "../../components/Button/Button";

const InfoContainer = styled.div`
  margin: 0 40px;
  @media (max-width: 1200px) {
    margin: 0 24px;
  }
  @media (max-width: 768px) {
    margin: 0 16px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0 0 24px 0;
  @media (max-width: 768px) {
    margin: 24px 0 24px 0;
  }
  @media (max-width: 400px) {
    margin: 24px 0 24px 0;
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

const DetailedInfoItemSpan = styled.span``;

const InfoText = styled.p`
  color: rgba(0, 0, 0, 0.87);
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
`;

const DocsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 24px;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 400px) {
  }
`;

const NavigateToEditButton = styled(Button)`
  max-width: 155px;
  box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding: 16px 0 16px;
  display: grid;
  justify-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0px;
`;

export {
  TitleWrapper,
  ContactInfoWrapper,
  ContactInfoSpan,
  DetailedInfo,
  Wrapper,
  DetailedInfoItemSpan,
  InfoText,
  DocsWrapper,
  InfoContainer,
  NavigateToEditButton,
  ButtonContainer,
};
