import styled from "styled-components";
import Icon from "@mui/material/Icon";

const TableWithPagination = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  margin: 0 40px;
  @media (max-width: 1200px) {
    margin: 0 24px;
  }
  @media (max-width: 768px) {
    margin: 0 16px;
  }
`;

const ColumnTitle = styled.span`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.17px;
`;

const NameSpan = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

const EmailSpan = styled.span`
  font-size: 12px;
  line-height: 166%;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);
`;

const LinkSpan = styled.span`
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;

const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.54);
`;

const PaginationContainer = styled.div`
  margin: 0 auto;
  margin-top: auto;
  padding: 40px 0 32px 0;
`;

const CountText = styled.p`
  padding: 0;
  margin: 32px 0 16px 0;
  @media (max-width: 1200px) {
    margin: 24px 0 16px 0;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export {
  TableWithPagination,
  ColumnTitle,
  NameSpan,
  EmailSpan,
  LinkSpan,
  StyledIcon,
  ButtonIcon,
  PaginationContainer,
  CountText,
};
