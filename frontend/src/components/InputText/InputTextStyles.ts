import styled from "styled-components";
import { FormControl } from "@mui/material";

const InputLabelSpan = styled.span`
  color: #d32f2f;
  display: inline;
`;

interface IStyledFormControl {
  formsize: "small" | "medium" | "large";
}

const StyledFormControl = styled(FormControl)<IStyledFormControl>`
  width: ${({ formsize }) => (formsize === "small" ? "156px" : "92.2%")};
  max-width: ${({ formsize }) => formsize !== "small" && "328px"};

  @media (min-width: 1194px) {
    width: ${({ formsize }) => {
      switch (formsize) {
        case "small":
          return "144px";
        case "large":
          return "100%";
        default:
          return "100%";
      }
    }};
    max-width: ${({ formsize }) => formsize === "medium" && "308px"};
    max-width: ${({ formsize }) => formsize === "large" && "636px"};
  }

  @media (min-width: 1440px) {
    max-width: ${({ formsize }) => formsize === "medium" && "355px"};
    max-width: ${({ formsize }) => formsize === "large" && "734px"};
  }
`;

export { InputLabelSpan, StyledFormControl };
