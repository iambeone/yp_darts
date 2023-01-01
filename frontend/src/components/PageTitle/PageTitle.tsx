import React from "react";
import styled from "styled-components";

const Title = styled.h4`
  font-family: "Podkova";
  font-weight: 600;
  font-size: 34px;
  margin: 16px 40px 32px 40px;
  @media (max-width: 1200px) {
    margin: 16px 24px 24px 24px;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 8px 16px 25px 16px;
  }
`;

type TPageTitle = {
  title: string;
};

export default function PageTitle({ title }: TPageTitle) {
  return <Title>{title}</Title>;
}
