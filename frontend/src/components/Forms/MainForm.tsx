/* eslint-disable no-console */
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import InputText from "../InputText/Input-Text";
import RadioOption from "../RadioOption/Radio-Option";
import DateTextField from "../DateTextField/DateTextField";

export default function MainForm() {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({ mode: "onBlur" });
  const methods = useForm({ mode: "onBlur" });

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
          console.log(data, isValid);
        })}
      >
        <Controller
          name="lastName"
          control={control}
          rules={{
            required: "Это обязательное поле",
            minLength: {
              value: 2,
              message: "Длинна должна быть больше 1 символа",
            },
            pattern: {
              value: /[а-яА-ЯёЁa-zA-Z\D\s]+/gi,
              message:
                "Допустимы символы: пробел, кириллические, латинские, тире",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Фамилия"
              placeholder="Фамилия"
              size="medium"
              name="normal"
              onChange={onChange}
              value={value}
              required
              onBlur={onBlur}
              error={!!errors.lastName?.message}
              helperText={errors.lastName?.message?.toString()}
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          rules={{
            required: "Это обязательное поле",
            minLength: {
              value: 2,
              message: "Длинна должна быть больше 1 символа",
            },
            pattern: {
              value: /[а-яА-ЯёЁa-zA-Z\D\s-]+/gi,
              message:
                "Допустимы символы: пробел, кириллические, латинские, тире",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Имя"
              placeholder="Имя"
              size="medium"
              name="normal"
              onChange={onChange}
              value={value}
              required
              onBlur={onBlur}
              error={!!errors.firstName?.message}
              helperText={errors.firstName?.message?.toString()}
            />
          )}
        />
        <Line>
          <Controller
            name="patronymic"
            control={control}
            rules={{
              minLength: {
                value: 2,
                message: "Длинна должна быть больше 1 символа",
              },
              pattern: {
                value: /[а-яА-ЯёЁa-zA-Z\D\s-]+/gi,
                message:
                  "Допустимы символы: пробел, кириллические, латинские, тире",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Отчество"
                placeholder="Отчество"
                size="medium"
                name="normal"
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                error={!!errors.patronymic?.message}
                helperText={errors.patronymic?.message?.toString()}
              />
            )}
          />
        </Line>
        <Line>
          <Controller
            name="birthday"
            control={control}
            rules={{
              required: "Это обязательное поле",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DateTextField
                labelText="Дата рождения"
                onChangeHandler={onChange}
                onBlur={onBlur}
                value={value || null}
                type="day"
                inputWidth={0}
                inputHeight={0}
              />
            )}
          />
        </Line>
        <Controller
          name="gender"
          control={control}
          rules={{
            required: "Это обязательное поле",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <RadioOption
              isRequired
              name="Пол"
              values={["Мужчина", "Женщина"]}
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={!!errors.gender?.message}
              helperText={errors.gender?.message?.toString()}
            />
          )}
        />
        <Line>
          <Controller
            name="adress"
            control={control}
            rules={{
              pattern: {
                value:
                  /[0-9]{6},\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+,\s[а-яА-ЯёЁa-zA-Z-,.\s\d]+(,\s[а-яА-ЯёЁa-zA-Z-,.\s\d])?/gi,
                message: "Неверный адрес",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Адрес регистрации"
                placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
                size="large"
                name="normal"
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                error={!!errors.adress?.message}
                helperText={errors.adress?.message?.toString()}
              />
            )}
          />
        </Line>
        <Line>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Это обязательное поле",
              pattern: {
                value: /\S+@\S+\.\S+/gi,
                message: "Неверный формат email",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Email"
                placeholder="example@email.com"
                size="medium"
                name="normal"
                onChange={onChange}
                required
                value={value}
                onBlur={onBlur}
                error={!!errors.email?.message}
                helperText={errors.email?.message?.toString()}
              />
            )}
          />
        </Line>
        <Controller
          name="phone"
          control={control}
          rules={{
            pattern: {
              value: /^[+]?[0-9]+/g,
              message: "Неверный формат телефона",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Контактный телефон"
              placeholder="+7 (999) 123-45-67"
              size="medium"
              name="phone"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={!!errors.phone?.message}
              helperText={errors.phone?.message?.toString()}
            />
          )}
        />
        <input type="submit" /> {/* only for tests */}
      </Form>
    </FormProvider>
  );
}
