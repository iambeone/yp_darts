import styled from "styled-components";
import { FormControl } from "@mui/material";

const InputLabelSpan = styled.span`
  color: #d32f2f;
  display: inline;
`;

interface IStyledFormControl {
  formSize: "small" | "medium" | "large";
}

const StyledFormControl = styled(FormControl)<IStyledFormControl>`
  width: ${({ formSize }) => (formSize === "small" ? "156px" : "92.2%")};
  max-width: ${({ formSize }) => formSize !== "small" && "328px"};

  @media (min-width: 1194px) {
    width: ${({ formSize }) => {
      switch (formSize) {
        case "small":
          return "144px";
        case "large":
          return "100%";
        default:
          return "100%";
      }
    }};
    max-width: ${({ formSize }) => formSize === "medium" && "308px"};
  }

  @media (min-width: 1440px) {
    max-width: ${({ formSize }) => formSize === "medium" && "355px"};
  }
`;

export { InputLabelSpan, StyledFormControl };
