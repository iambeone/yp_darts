/* eslint-disable no-console */
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import InputText from "../InputText/Input-Text";
import RadioOption from "../RadioOption/Radio-Option";
import DateSelector from "../DateSelector/DateSelector";

export default function MainForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const methods = useForm();

  console.log(errors);

  const Form = styled.form`
    margin: 48px auto 35px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;
    max-width: 734px;
    gap: 48px 24px;

    @media (max-width: 1194px) {
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
    <FormProvider {...methods}>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <Controller
          name="lastName"
          control={control}
          rules={{ required: true, minLength: 2 }}
          render={({ field: { onChange, value } }) => (
            <InputText
              label="Фамилия"
              placeholder="Фамилия"
              size="medium"
              name="normal"
              onChange={onChange}
              value={value}
            />
          )}
        />
        <InputText
          // {...register("firstName", { required: "Это обязательное поле" })}
          label="Имя"
          placeholder="Имя"
          size="medium"
          name="normal"
        />
        <Line>
          <InputText
            // {...register("last1Name")}
            label="Отчество"
            placeholder="Отчество"
            size="medium"
            name="normal"
          />
        </Line>
        <Line>
          <DateSelector />
        </Line>
        <RadioOption name="Пол" values={["Мужчина", "Женщина"]} />
        <Line>
          <InputText
            // {...register("last2Name")}
            label="Адрес регистрации"
            placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
            size="large"
            name="normal"
          />
        </Line>
        <Line>
          <InputText
            // {...register("last3Name")}
            label="Email"
            placeholder="example@email.com"
            size="medium"
            name="normal"
          />
        </Line>
        <InputText
          // {...register("last4Name")}
          label="Контактный телефон"
          placeholder="+7 (999) 123-45-67"
          size="medium"
          name="phone"
        />
        <input type="submit" /> {/* only for tests */}
      </Form>
    </FormProvider>
  );
}
