/* eslint-disable no-console */
import React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import InputText from "../InputText/InputText";
import RadioOption from "../RadioOption/RadioOption";
import DateTextField from "../DateTextField/DateTextField";
import Button from "../Button/Button";

interface IDataElement<T> {
  value: T;
  isDisabled: boolean;
}

interface IMainFormData {
  lastName?: IDataElement<string>;
  firstName?: IDataElement<string>;
  patronymic?: IDataElement<string>;
  birthday?: IDataElement<Dayjs>;
  gender?: IDataElement<string>;
  adress?: IDataElement<string>;
  email?: IDataElement<string>;
  phone?: IDataElement<string>;
}

export default function MainForm({
  lastName,
  firstName,
  patronymic,
  birthday,
  gender,
  adress,
  email,
  phone,
}: IMainFormData) {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      lastName: lastName?.value,
      firstName: firstName?.value,
      patronymic: patronymic?.value,
      birthday: birthday?.value,
      gender: gender?.value,
      adress: adress?.value,
      email: email?.value,
      phone: phone?.value,
    },
  });
  const methods = useForm({ mode: "onBlur" });

  const Form = styled.form`
    margin: 24px auto 35px;
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

  const SubmitBlock = styled.div`
    button: 0px;
    width: 100%;
    justify-items: center;
    justify-content: center;
    display: grid;
    gap: 16px;
    padding: 16px 0 16px;
    box-shadow: 0px -5px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    bottom: 0px;
    background: #ffffff;
  `;

  const SubmitButton = styled(Button)`
    max-width: 121px;
  `;

  const Requirement = styled.span`
    color: red;
  `;
  const [mainFormData, setMainFormData] = React.useState();
  const [formValide, setFormValid] = React.useState<boolean>(false);
  console.log(mainFormData);

  React.useEffect(() => {
    setFormValid(isValid);
  }, [isValid]);

  const onSubmit = (data: any) => {
    setMainFormData(data);
  };

  return (
    <FormProvider {...methods}>
      <Form>
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
              value: /^(?=.{1,29}$)[а-яА-ЯёЁa-zA-Z\s-]*$/gi,
              message:
                "Допустимы символы: пробел, кириллические, латинские, тире",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              isDisabled={lastName?.isDisabled}
              label="Фамилия"
              placeholder="Фамилия"
              size="medium"
              maskName="normal"
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
              value: /^(?=.{1,29}$)[а-яА-ЯёЁa-zA-Z\s-]*$/gi,
              message:
                "Допустимы символы: пробел, кириллические, латинские, тире",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              isDisabled={firstName?.isDisabled}
              label="Имя"
              placeholder="Имя"
              size="medium"
              maskName="normal"
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
                value: /^(?=.{1,29}$)[а-яА-ЯёЁa-zA-Z\s-]*$/gi,
                message:
                  "Допустимы символы: пробел, кириллические, латинские, тире",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                isDisabled={patronymic?.isDisabled}
                label="Отчество"
                placeholder="Отчество"
                size="medium"
                maskName="normal"
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
                isDisabled={birthday?.isDisabled}
                disableFuture
                openTo="year"
                labelText="Дата рождения"
                onChangeHandler={onChange}
                onBlur={onBlur}
                value={value || null}
                type="day"
                inputWidth={260}
                inputHeight={56}
                isRequired
                error={!!errors.birthday?.message}
                helperText={errors.birthday?.message?.toString()}
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
              isDisabled={gender?.isDisabled}
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
                isDisabled={adress?.isDisabled}
                label="Адрес регистрации"
                placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
                size="large"
                maskName="normal"
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
                isDisabled={email?.isDisabled}
                label="Email"
                placeholder="example@email.com"
                size="medium"
                maskName="normal"
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
              isDisabled={phone?.isDisabled}
              label="Контактный телефон"
              placeholder="+7 (999) 123-45-67"
              size="medium"
              maskName="phone"
              onChange={onChange}
              value={value}
              onBlur={onBlur}
              error={!!errors.phone?.message}
              helperText={errors.phone?.message?.toString()}
            />
          )}
        />
      </Form>
      <SubmitBlock>
        {!formValide && (
          <Typography>
            Для продолжения заполните обязательные поля{" "}
            <Requirement>*</Requirement>
          </Typography>
        )}
        <SubmitButton
          colors="all-red"
          onClick={handleSubmit(onSubmit)}
          text="Далее"
          customIcon="forward_arrow"
          iconPosition="right"
          disabled={!formValide}
        />
      </SubmitBlock>
    </FormProvider>
  );
}

MainForm.defaultProps = {
  lastName: { value: "" },
  firstName: { value: "" },
  patronymic: { value: "" },
  birthday: { value: dayjs(null) },
  gender: { value: "" },
  adress: { value: "" },
  email: { value: "" },
  phone: { value: "" },
};
