import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "2px",
  width: 18,
  height: 18,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 2px rgba(0, 0, 0, 0.6)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  boxShadow: "inset 0 0 0 2px #2E7D32",
  "&:after": {
    background: "#2E7D32",
    width: "10px",
    height: "10px",
    position: "absolute",
    top: "13px",
    left: "13px",
    content: '""',
  },
});

const Label = styled("p")`
  margin: 0 0 4px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.17px;
  color: rgba(0, 0, 0, 0.87);
`;

const Group = styled("div")`
  display: flex;
`;

function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

type TRadioHand = {
  label: string;
  onChangeInput: (value: string) => void;
};

const FormControlLabelCustom = styled(FormControlLabel)({
  ".MuiFormControlLabel-label": {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "150%",
    letterSpacing: "0.15px",
    color: "rgba(0, 0, 0, 0.87)",
  },
});

export default function RadioOptionHand(props: TRadioHand) {
  const { label, onChangeInput } = props;
  return (
    <FormControl>
      <Label>{label}</Label>
      <RadioGroup
        defaultValue="right"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChangeInput(event.target.value);
        }}
      >
        <Group>
          <FormControlLabelCustom
            value="left"
            control={<BpRadio />}
            label="Левая"
          />
          <FormControlLabelCustom
            value="right"
            control={<BpRadio />}
            label="Правая"
          />
        </Group>
      </RadioGroup>
    </FormControl>
  );
}
