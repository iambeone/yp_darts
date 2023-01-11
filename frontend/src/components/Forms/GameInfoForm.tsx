import React from "react";
import styled from "styled-components";
import { sportsCategory, subjectRF } from "../../utils/constants";
import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/Input-Text";

import RadioOptionHand from "../RadioOption/Radio-Option-Hand";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
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

const MarginRight = styled.div`
  margin-right: 20px;
`;

const MarginRightDart = styled(MarginRight)`
  margin-right: 164px;
`;

const MarginTop = styled.div`
  margin-top: 24px;
`;

const H3 = styled.h3`
  margin: 40px 0 24px 0;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: #003200;
`;

export default function GameInfoForm() {
  const [subjectRf, setSubjectRF] = React.useState<any>(null);
  const [sportCategory, setSportCategory] = React.useState<any>(null);
  const [hand, setHand] = React.useState<any>("right");
  const [dateAssignedCategory, setDateAssignedCategory] = React.useState<any>();
  console.log(hand);
  console.log(subjectRf);
  console.log(sportCategory);
  console.log(dateAssignedCategory);
  return (
    <Section>
      <SelectOptions
        options={subjectRF}
        inputWidth={390}
        inputHeight={56}
        label="Субъект РФ"
        onChangeOption={setSubjectRF}
      />
      <Caption>Регион, за который играет спортсмен</Caption>

      <Group>
        <MarginRight>
          <SelectOptions
            options={sportsCategory}
            inputWidth={308}
            inputHeight={56}
            label="Спортивный разряд"
            onChangeOption={setSportCategory}
          />
        </MarginRight>
        <DateTextField
          name="Присвоен"
          inputWidth={226}
          inputHeight={56}
          onChangeDate={setDateAssignedCategory}
        />
      </Group>
      <MarginTop>
        <InputText label="ФИО тренера" inputWidth={636} inputHeight={56} />
      </MarginTop>
      <MarginTop>
        <RadioOptionHand label="Ведущая рука" onChangeInput={setHand} />
      </MarginTop>
      <H3>Дротики</H3>
      <Group>
        <MarginRightDart>
          <InputText label="Производитель" inputWidth={472} inputHeight={56} />
        </MarginRightDart>
        <InputText label="Вес" inputWidth={144} inputHeight={56} />
      </Group>
      <H3>Медицинская страховка</H3>
      <InputText label="Номер полиса" inputWidth={472} inputHeight={56} />
      <MarginTop>
        <Group>
          <MarginRight>
            <DateTextField
              name="Начало действия"
              inputWidth={226}
              inputHeight={56}
              onChangeDate={setDateAssignedCategory}
            />
          </MarginRight>
          <DateTextField
            name="Конец действия"
            inputWidth={226}
            inputHeight={56}
            onChangeDate={setDateAssignedCategory}
          />
        </Group>
      </MarginTop>
    </Section>
  );
}
