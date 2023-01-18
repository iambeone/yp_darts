import Icon from "@mui/material/Icon";
import React from "react";
import styled from "styled-components";

type TNotification = {
  text?: string | null;
};

interface NotificationProps {
  error: boolean;
}

const StyledNotification = styled.span<NotificationProps>`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: ${({ error }) =>
    error ? "rgba(211, 47, 47, 1)" : "rgba(237, 108, 2, 1)"};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export default function Notification({ text }: TNotification) {
  if (text === "Просрочен") {
    return (
      <StyledNotification error>
        {text !== null ? <Icon>error</Icon> : null}
        {text}
      </StyledNotification>
    );
  }
  return (
    <StyledNotification error={false}>
      {text !== null ? <Icon>warning</Icon> : null}
      {text}
    </StyledNotification>
  );
}

Notification.defaultProps = {
  text: "",
};
