import React from "react";
import styled from "styled-components";
import InputText from "../InputText/Input-Text";
import RadioOption from "../RadioOption/Radio-Option";
import DateSelector from "../DateSelector/DateSelector";

export default function MainForm() {
  const Form = styled.div`
    margin: 24px auto 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    max-width: 734px;
    gap: 48px 24px;

    @media (max-width: 900px) {
       {
        margin-left: 24px;
      }
    }

    @media (max-width: 500px) {
       {
        margin-left: 16px;
      }
    }
  `;

  const Line = styled.div`
    width: 100%;
  `;

  return (
    <Form>
      <InputText
        required
        label="Фамилия"
        placeholder="Фамилия"
        size="medium"
        value=""
        name="normal"
      />
      <InputText
        required
        label="Имя"
        placeholder="Имя"
        size="medium"
        value=""
        name="normal"
      />
      <Line>
        <InputText
          label="Отчество"
          placeholder="Отчество"
          size="medium"
          value=""
          name="normal"
        />
      </Line>
      <Line>
        <DateSelector />
      </Line>
      <RadioOption />
      <Line>
        <InputText
          label="Адрес регистрации"
          placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
          size="large"
          value=""
          name="normal"
        />
      </Line>
      <Line>
        <InputText
          label="Email"
          required
          placeholder="example@email.com"
          size="medium"
          value=""
          name="normal"
        />
      </Line>
      <InputText
        label="Контактный телефон"
        placeholder="+7 (999) 123-45-67"
        size="medium"
        value=""
        name="phone"
      />
    </Form>
  );
}
