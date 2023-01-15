import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getPlayer } from "../../services/actions";
import { subjectRF } from "../../utils/constants";
import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/Input-Text";
import RadioOption from "../RadioOption/Radio-Option";
// import PageTitle from "../PageTitle/PageTitle";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
`;

// const Label = styled.p`
//   margin: 0 0 4px 0;
//   font-family: "Roboto";
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 143%;
//   letter-spacing: 0.17px;
//   color: rgba(0, 0, 0, 0.87);
// `;

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

const radioOptions = ["Левая", "Правая"];

export default function GameInfoForm() {
  const [subjectRf, setSubjectRF] = React.useState<any>(null);
  const player = useSelector((state: any) => state.player.playerData);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.pathname;
    const urlArray = url.split("/");
    // eslint-disable-next-line prefer-template
    const playerId = "/" + urlArray[3];
    dispatch(getPlayer(playerId));
  }, [dispatch]);
  console.log(player);
  console.log(subjectRf);
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
        <div>
          <SelectOptions
            options={subjectRF}
            inputWidth={308}
            inputHeight={56}
            label="Спортивный разряд"
            onChangeOption={setSubjectRF}
          />
        </div>
        <DateTextField name="Присвоен" />
      </Group>
      <InputText label="ФИО тренера" value={player.nameOfTrainer} />
      {/* <Label>Ведущая рука</Label> */}
      <RadioOption name="Ведущая рука" values={radioOptions} />
      <h3>Дротики</h3>
      <InputText label="Производитель" value={player.producerOfDart} />
      <InputText label="Вес" value={player.weightOfDart} />
      <h3>Медицинская страховка</h3>
      <InputText label="Номер полиса" value={player.policyNumber} />
      <Group>
        <DateTextField name="Начало действия" />
        <DateTextField name="Конец действия" />
      </Group>
    </Section>
  );
}
