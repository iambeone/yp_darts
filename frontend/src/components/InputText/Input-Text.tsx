/* eslint-disable react/jsx-props-no-spreading, react/require-default-props */
import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { IMaskInput } from "react-imask";

import styles from "./Input-Text.module.css";

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
  value?: any;
  onChange?: any;
  name?: "normal" | "snils" | "inn" | "passport" | "phone" | "police";
}) {
  return (
    <FormControl className={styles[size]}>
      <InputLabel
        shrink
        className={styles.inputLabel}
        sx={{ top: -14, left: -14 }}
      >
        {label}
        <span
          className={
            (required && styles.inputLabelSpan) || styles.inputLabelSpanHide
          }
        >
          {" "}
          *
        </span>
      </InputLabel>
      {name === "normal" ? (
        <OutlinedInput
          required={required}
          placeholder={placeholder}
          size="medium"
          maxRows="2"
          rows={rows}
          multiline={rows > 1}
          value={value}
          onChange={onChange}
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
    </FormControl>
  );
}

export default InputText;
