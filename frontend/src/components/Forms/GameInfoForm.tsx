import React from "react";
import styled from "styled-components";
import { subjectRF } from "../../utils/constants";
// import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/Input-Text";
// import PageTitle from "../PageTitle/PageTitle";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
`;

const Caption = styled.p`
  margin: 3px 0 0 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.4px;
  color: rgba(0, 0, 0, 0.6);
`;

const Group = styled.div`
  display: flex;
`;

export default function GameInfoForm() {
  return (
    <Section>
      <SelectOptions options={subjectRF} inputWidth={390} />
      <Caption>Регион, за который играет спортсмен</Caption>
      <Group>
        {/* <SelectOptions label="Спортивный разряд" options={subjectRF} /> */}
        {/* <DateTextField /> */}
      </Group>
      <InputText />
    </Section>
  );
}
