import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import { getPlayer } from "../../services/actions";
import { sportsCategory, subjectsRF } from "../../utils/constants";
import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/InputText";
import RadioOptionHand from "../RadioOption/RadioOptionHand";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
  width: 636px;
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

const InputWrapper = styled("div")({
  width: "472px",
  marginRight: "20px",
});

export default function GameInfoForm() {
  const [subjectRf, setSubjectRF] = React.useState<any>(null);
  const [sportCategory, setSportCategory] = React.useState<any>(null);
  const [hand, setHand] = React.useState<any>("right");
  const [dateAssignedCategory, setDateAssignedCategory] = React.useState<any>();
  const [dateBeginMedPol, setDateBeginMedPol] = React.useState<any>();
  const [dateEndMedPol, setDateendMedPol] = React.useState<any>();
  const [coach, setCoach] = React.useState<any>();
  const [maker, setMaker] = React.useState<any>();
  const [policyNumber, setPolicyNumber] = React.useState<any>();
  const [dartWeight, setDartWeight] = React.useState<any>();

  const player = useSelector((state: any) => state.player.playerData);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // const url = window.location.pathname;
    // const urlArray = url.split("/");
    // const playerId = "/" + urlArray[3];
    dispatch(getPlayer(id));
  }, [dispatch]);
  console.log(player);

  console.log(hand);
  console.log(subjectRf);
  console.log(sportCategory);
  console.log(dateAssignedCategory);
  console.log(dateBeginMedPol);
  console.log(dateEndMedPol);
  console.log(coach);
  console.log(maker);
  console.log(policyNumber);
  console.log(dartWeight);
  return (
    <Section>
      <SelectOptions
        options={subjectsRF}
        inputWidth={390}
        inputHeight={56}
        label="Субъект РФ"
        onChangeOption={setSubjectRF}
      />
      <Caption>Регион, за который играет спортсмен</Caption>

      <Group>
        <SelectOptions
          options={sportsCategory}
          inputWidth={308}
          inputHeight={56}
          label="Спортивный разряд"
          onChangeOption={setSportCategory}
          sx={{ mr: 2.5 }}
        />
        <DateTextField
          type="day"
          value={dateAssignedCategory}
          labelText="Присвоен"
          inputWidth={226}
          inputHeight={56}
          onChangeHandler={setDateAssignedCategory}
        />
      </Group>
      <InputText
        label="ФИО тренера"
        inputWidth={636}
        inputHeight={56}
        sx={{ mt: 3 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCoach(event.target.value);
        }}
      />
      <RadioOptionHand
        label="Ведущая рука"
        onChangeInput={setHand}
        sx={{ mt: 3 }}
      />
      <H3>Дротики</H3>
      <Group>
        <InputWrapper>
          <InputText
            label="Производитель"
            inputWidth={472}
            inputHeight={56}
            sx={{ mr: 2.5 }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMaker(event.target.value);
            }}
          />
        </InputWrapper>
        <div>
          <InputText
            label="Вес"
            inputWidth={144}
            inputHeight={56}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDartWeight(event.target.value);
            }}
          />
        </div>
      </Group>
      <H3>Медицинская страховка</H3>
      <InputText
        label="Номер полиса"
        inputWidth={472}
        inputHeight={56}
        sx={{ mb: 3 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPolicyNumber(event.target.value);
        }}
      />
      <Group>
        <DateTextField
          value={dateBeginMedPol}
          type="day"
          labelText="Начало действия"
          inputWidth={226}
          inputHeight={56}
          onChangeHandler={setDateBeginMedPol}
          sx={{ mr: 2.5 }}
        />

        <DateTextField
          value={dateEndMedPol}
          type="day"
          labelText="Конец действия"
          inputWidth={226}
          inputHeight={56}
          onChangeHandler={setDateendMedPol}
        />
      </Group>
    </Section>
  );
}
