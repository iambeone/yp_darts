import * as React from "react";
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
  SelectOption,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled, Box } from "@mui/system";

// Для использования необходимо передать компоненту props "label" и "options" с массивом
// эелементов для выпадающего списка

// Пример использования компонента:

// export const options = [
//     { id: 1, value: 10, text: "Ten" },
//     { id: 2, value: 20, text: "Twenty" },
//     { id: 3, value: 30, text: "Thirty" },
//   ];
//     <SelectOption label="Age" options={options} />

type TOptions = {
  id: number;
  value: number;
  text: string;
};

type TSelectOption = {
  label: string;
  options: TOptions[];
};

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 140px;
  padding: 12px;
  border-radius: 4px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 140px;
  border-radius: 4px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `,
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 4px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const Label = styled("label")(
  `
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 143%;
  display: block;
  margin-bottom: 4px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.87);
  `,
);

const Placeholder = styled("span")(
  `
    font-family: 'Roboto';
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.15px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.6);
    `,
);

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  const slots: SelectUnstyledProps<TValue>["slots"] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <SelectUnstyled {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;

function renderValue(option: SelectOption<number> | null) {
  if (option == null) {
    return <Placeholder>Выбрать</Placeholder>;
  }

  return <span>{option.label}</span>;
}

export default function SelectOptions(props: TSelectOption) {
  const { label, options } = props;
  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <Label htmlFor="unnamed-select">{label}</Label>
        <CustomSelect id="unnamed-select" renderValue={renderValue}>
          {options.map((option) => {
            return (
              <StyledOption value={option.value} key={option.id}>
                {option.text}
              </StyledOption>
            );
          })}
        </CustomSelect>
      </Box>
    </div>
  );
}
