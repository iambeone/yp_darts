import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

export default function CheckboxesGroup({
  name,
  values,
  direction = "row",
}: {
  name: string;
  values: string[];
  direction: string;
}) {
  const [state, setState] = React.useState({
    left: true,
    right: false,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Container>
      <FormLabel component="legend">{name}</FormLabel>
      <FormGroup
        sx={{ flexDirection: `${direction}` }}
        onChange={handleChange}
        aria-label={name}
      >
        {values.map((item) => {
          return (
            <FormControlLabel
              sx={{ flexDirection: `${direction}` }}
              value={item}
              control={<Checkbox />}
              label={item}
              labelPlacement="start"
            />
          );
        })}
      </FormGroup>
    </Container>
  );
}
