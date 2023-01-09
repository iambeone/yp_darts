/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React from "react";
import { InputLabel, OutlinedInput } from "@mui/material";
import { IMaskInput } from "react-imask";
// import styled from "styled-components";
import { InputLabelSpan, StyledFormControl } from "./InputTextStyles";
// import { customSizesInputText } from "../../utils/constants";

// const AsteriskSpan = styled.span`
//   color: #d32f2f;
//   display: inline;
// `;

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: "snils" | "inn" | "passport" | "phone" | "police";
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, name, ...other } = props;
    const maskFormat = {
      passport: "00 00 000000",
      phone: "+7 (000) 000-00-00",
      police: "000-000",
      inn: "000000000000",
      snils: "000-000-000 00",
    };
    return (
      <IMaskInput
        {...other}
        mask={maskFormat[name]}
        inputRef={
          ref as React.RefCallback<HTMLTextAreaElement | HTMLInputElement>
        }
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

function InputText({
  required = false,
  label = "",
  placeholder = "",
  rows = 1,
  size = "medium",
  value = "",
  onChange,
  name = "normal",
}: {
  required?: boolean;
  label?: string;
  placeholder?: string;
  rows?: number;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?: any;
  name?: "normal" | "snils" | "inn" | "passport" | "phone" | "police";
}) {
  const [valueState, setValueState] = React.useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(event.target.value);
  };

  return (
    <StyledFormControl formSize={size}>
      <InputLabel shrink sx={{ top: -14, left: -14 }}>
        {label}
        {required && <InputLabelSpan> *</InputLabelSpan>}
      </InputLabel>
      {name === "normal" ? (
        <OutlinedInput
          required={required}
          placeholder={placeholder}
          size="medium"
          maxRows="2"
          rows={rows}
          multiline={rows > 1}
          value={value || valueState}
          onChange={onChange || handleChange}
          name={name}
        />
      ) : (
        <OutlinedInput
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          inputComponent={TextMaskCustom as any}
        />
      )}
    </StyledFormControl>
  );
}

export default InputText;
