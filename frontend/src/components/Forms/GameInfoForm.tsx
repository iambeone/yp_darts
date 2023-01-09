import React from "react";
import styled from "styled-components";
import { subjectRF } from "../../utils/constants";
import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/Input-Text";
// import RadioButtons from '../RadioButtons/RadioButtons';
// import PageTitle from "../PageTitle/PageTitle";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
`;

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

const Caption = styled.p`
  margin: 3px 0 24px 12px;
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
      <SelectOptions
        options={subjectRF}
        inputWidth={390}
        inputHeight={56}
        label="Субъект РФ"
      />
      <Caption>Регион, за который играет спортсмен</Caption>

      <Group>
        <div>
          <SelectOptions
            options={subjectRF}
            inputWidth={308}
            inputHeight={56}
            label="Спортивный разряд"
          />
        </div>
        <DateTextField name="Присвоен" />
      </Group>
      <Label>ФИО тренера</Label>
      <InputText />
      <Label>Ведущая рука</Label>
      {/* <RadioButtons /> */}
    </Section>
  );
}
