import React from "react";
import styled from "styled-components";
import { sportsCategory, subjectRF } from "../../utils/constants";
import DateTextField from "../DateTextField/DateTextField";
import InputText from "../InputText/InputText";
import RadioOptionHand from "../RadioOption/RadioOptionHand";
import SelectOptions from "../SelectOption/SelectOption";

const Section = styled.div`
  margin: 24px;
  max-width: 636px;

  @media (max-width: 500px) {
    margin-left: 16px;
    margin-right: 16px;
    max-width: 328px;
  }
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

  @media (max-width: 500px) {
    margin-bottom: 16px;
  }
`;

const Group = styled.div`
  display: flex;

  @media (max-width: 500px) {
    display: block;
  }
`;

const H3 = styled.h3`
  margin: 40px 0 24px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 160%;
  letter-spacing: 0.15px;
  color: #003200;

  @media (max-width: 500px) {
    margin-top: 24px;
    margin-bottom: 16px;
  }
`;

const InputWrapper = styled.div`
  width: 472px;
  margin-right: 20px;

  @media (max-width: 1000px) {
    width: 400;
  }
`;

export default function GameInfoForm() {
  const [subjectRf, setSubjectRF] = React.useState<any>(null);
  const [sportCategory, setSportCategory] = React.useState<any>(null);
  const [hand, setHand] = React.useState<any>();
  const [dateAssignedCategory, setDateAssignedCategory] = React.useState<any>();
  const [dateBeginMedPol, setDateBeginMedPol] = React.useState<any>();
  const [dateEndMedPol, setDateendMedPol] = React.useState<any>();
  const [coach, setCoach] = React.useState<any>();
  const [maker, setMaker] = React.useState<any>();
  const [policyNumber, setPolicyNumber] = React.useState<any>();
  const [dartWeight, setDartWeight] = React.useState<any>();
  const [sertificateRUSADA, setSertificateRUSADA] = React.useState<any>();
  const [dateBeginSertRUSADA, setDateBeginSertRUSADA] = React.useState<any>();
  const [dateEndSertRUSADA, setDateendSertRUSADA] = React.useState<any>();

  console.log(hand);
  // console.log(subjectRf);
  // console.log(sportCategory);
  // console.log(dateAssignedCategory);
  // console.log(dateBeginMedPol);
  // console.log(dateEndMedPol);
  // console.log(coach);
  // console.log(maker);
  // console.log(policyNumber);
  // console.log(dartWeight);
  return (
    <Section>
      <SelectOptions
        value={subjectRf}
        options={subjectRF}
        inputHeight={56}
        label="Субъект РФ"
        onChangeOption={setSubjectRF}
        sx={{
          width: 390,
          "@media(max-width: 1000px)": {
            width: 300,
          },
          "@media(max-width: 500px)": {
            width: "100%",
          },
        }}
      />
      <Caption>Регион, за который играет спортсмен</Caption>

      <Group>
        <SelectOptions
          value={sportCategory}
          options={sportsCategory}
          inputHeight={56}
          label="Спортивный разряд"
          onChangeOption={setSportCategory}
          sx={{
            mr: 2.5,
            width: 300,
            "@media(max-width: 500px)": {
              width: "100%",
            },
          }}
        />
        <DateTextField
          type="day"
          value={dateAssignedCategory}
          labelText="Присвоен"
          inputHeight={56}
          onChangeHandler={setDateAssignedCategory}
          sx={{
            width: 226,
            "@media(max-width: 500px)": {
              mt: 2,
              width: 242,
            },
          }}
        />
      </Group>
      <InputText
        value={coach}
        label="ФИО тренера"
        inputHeight={56}
        sx={{
          maxWidth: 636,
          mt: 3,
          "@media(max-width: 1000px)": {
            maxWidth: 400,
          },
          "@media(max-width: 500px)": {
            width: "100%",
            mt: 2,
          },
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCoach(event.target.value);
        }}
      />
      <RadioOptionHand
        label="Ведущая рука"
        onChangeInput={setHand}
        sx={{
          mt: 3,
          "@media(max-width: 500px)": {
            mt: 2,
          },
        }}
      />
      <H3>Дротики</H3>
      <Group>
        <InputWrapper>
          <InputText
            value={maker}
            label="Производитель"
            inputHeight={56}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setMaker(event.target.value);
            }}
            sx={{
              mr: 2.5,
              maxWidth: 472,
              width: 472,
              "@media(max-width: 1000px)": {
                width: 400,
              },
              "@media(max-width: 500px)": {
                width: 328,
              },
            }}
          />
        </InputWrapper>

        <InputText
          value={dartWeight}
          label="Вес"
          // inputWidth={144}
          inputHeight={56}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDartWeight(event.target.value);
          }}
          sx={{
            width: 144,
            "@media(max-width: 500px)": {
              mt: 2,
              width: 156,
            },
          }}
        />
      </Group>
      <H3>Медицинская страховка</H3>
      <InputText
        value={policyNumber}
        label="Номер полиса"
        inputHeight={56}
        sx={{
          mb: 3,
          width: 472,
          "@media(max-width: 500px)": {
            width: "100%",
            mb: 2,
          },
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPolicyNumber(event.target.value);
        }}
      />
      <Group>
        <DateTextField
          value={dateBeginMedPol}
          type="day"
          labelText="Начало действия"
          inputHeight={56}
          onChangeHandler={setDateBeginMedPol}
          sx={{
            mr: 2.5,
            width: 226,
            "@media(max-width: 500px)": {
              width: 242,
              mr: 0,
            },
          }}
        />

        <DateTextField
          value={dateEndMedPol}
          type="day"
          labelText="Конец действия"
          inputHeight={56}
          onChangeHandler={setDateendMedPol}
          sx={{
            width: 226,
            "@media(max-width: 500px)": {
              width: 242,
              mt: 2,
            },
          }}
        />
      </Group>
      <H3>Сертификат РУСАDa</H3>
      <InputText
        value={sertificateRUSADA}
        label="ID сертификата"
        inputHeight={56}
        sx={{
          mb: 3,
          width: 472,
          "@media(max-width: 500px)": {
            width: "100%",
            mb: 2,
          },
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSertificateRUSADA(event.target.value);
        }}
      />
      <Group>
        <DateTextField
          value={dateBeginSertRUSADA}
          type="day"
          labelText="Выдан"
          inputHeight={56}
          onChangeHandler={setDateBeginSertRUSADA}
          sx={{
            mr: 2.5,
            width: 226,
            "@media(max-width: 500px)": {
              width: 242,
              mr: 0,
            },
          }}
        />

        <DateTextField
          value={dateEndSertRUSADA}
          type="day"
          labelText="Конец действия"
          inputHeight={56}
          onChangeHandler={setDateendSertRUSADA}
          sx={{
            width: 226,
            "@media(max-width: 500px)": {
              width: 242,
              mt: 2,
            },
          }}
        />
      </Group>
    </Section>
  );
}
