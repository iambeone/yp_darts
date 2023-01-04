import styled from "styled-components";
import Icon from "@mui/material/Icon";

const GamersTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: calc(100% - 100px); */
`;
/* доделать размещение pagination при сборке страницы */

const ColumnTitle = styled.span`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.17px;
`;

const Name = styled.span`
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);
`;

const Email = styled.span`
  font-size: 12px;
  line-height: 166%;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);
`;

const StyledLink = styled.span`
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
  padding: 40px 0 32px 0;
`;

export {
  GamersTableContainer,
  ColumnTitle,
  Name,
  Email,
  StyledLink,
  StyledIcon,
  ButtonIcon,
  PaginationContainer,
};
