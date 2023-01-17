import React from "react";
import styled from "styled-components";

const Subtitle = styled.h5`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0px 16px 0 0;
  @media (max-width: 1200px) {
    margin: 0 16px 0 0;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 16px 0 24px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    margin: 0 0 0 16px;
  }
`;

type TPageSubtitle = {
  text?: string;
  docs?: boolean;
};

export default function PageSubtitle({ text, docs }: TPageSubtitle) {
  return <Subtitle>{docs ? text?.toUpperCase() : text}</Subtitle>;
}

PageSubtitle.defaultProps = {
  docs: false,
};
