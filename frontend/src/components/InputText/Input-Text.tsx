/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React from "react";
import styled from "styled-components";
import { OutlinedInput, FormHelperText } from "@mui/material";
import { IMaskInput } from "react-imask";
import { InputLabelSpan, StyledFormControl } from "./InputTextStyles";

// Описание
// Обязательные пропсы отсутствуют, required, label, placeholder, value, onChange, name применяются в соответствии со своими названиями.
// rows позволяет при необходимости увеличить число строк, по умолчанию 1
// size отвечает за размеры ввода, на данном этапе есть 3 размера, закрывающие потребности параметров игрока (в турнирах добавятся ещё)
// maskName отвечает за маску поля ввода, при normal маска отсутствует,
// error и helperText для отображения ошибки и её текста соответственно

const Label = styled.p`
  margin: 0 0 4px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
`;

interface IStyledOutlinedInput {
  maskName?:
    | "snils"
    | "inn"
    | "passport"
    | "phone"
    | "police"
    | "birth"
    | "normal";
}

const StyledOutlinedInput = styled(OutlinedInput)<IStyledOutlinedInput>``;

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  maskName: "snils" | "inn" | "passport" | "phone" | "police" | "birth";
}

const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, maskName, ...other } = props;
    const maskFormat = {
      passport: "00 00 000000",
      phone: "+7 (000) 000-00-00",
      police: "000-000",
      inn: "000000000000",
      snils: "000-000-000 00",
      birth: "#-## 000000",
    };
    return (
      <IMaskInput
        {...other}
        mask={maskFormat[maskName]}
        definitions={{
          "#": /[А-Я]/,
        }}
        prepare={(value: any) => value.toUpperCase()}
        inputRef={
          ref as React.RefCallback<HTMLTextAreaElement | HTMLInputElement>
        }
        onAccept={(value: any) =>
          onChange({ target: { name: props.maskName, value } })
        }
        overwrite
      />
    );
  },
);

function InputText({
  required = false,
  label,
  placeholder,
  rows = 1,
  size = "medium",
  value,
  onChange,
  name,
  inputWidth,
  inputHeight,
  error = false,
  helperText = "",
  sx,
  maskName = "normal",
  inputRef,
}: {
  required?: boolean;
  label?: string;
  placeholder?: string;
  rows?: number;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?: any;
  inputWidth?: number;
  inputHeight?: number;
  name?: string;
  error?: boolean;
  helperText?: string;
  sx?: any;
  maskName?:
    | "normal"
    | "snils"
    | "inn"
    | "passport"
    | "phone"
    | "police"
    | "birth";
  inputRef?: any;
}) {
  return (
    <StyledFormControl formSize={size} error={error} sx={sx}>
      <Label>
        {label}
        {required && <InputLabelSpan> *</InputLabelSpan>}
      </Label>
      {maskName === "normal" ? (
        <OutlinedInput
          required={required}
          placeholder={placeholder}
          size="medium"
          rows={rows}
          multiline={rows > 1}
          value={value}
          onChange={onChange}
          name={name}
          sx={{ width: inputWidth, height: inputHeight }}
        />
      ) : (
        <StyledOutlinedInput
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
          inputComponent={TextMaskCustom as any}
          inputProps={{ maskName }}
          sx={{ width: inputWidth, height: inputHeight }}
          inputRef={inputRef}
        />
      )}
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </StyledFormControl>
  );
}

export default InputText;
