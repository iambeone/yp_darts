/* eslint-disable no-console */
import React from "react";
import { useParams } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import InputText from "../InputText/InputText";
import RadioOption from "../RadioOption/RadioOption";
import DateTextField from "../DateTextField/DateTextField";
import {
  Form,
  Line,
  Requirement,
  SubmitBlock,
  SubmitButton,
} from "./Styles/MainFormStyles";
import { useDispatch } from "../../utils/hooks";
import { patchPlayer } from "../../services/actions";

interface IDataElement<T> {
  value: T;
  isDisabled: boolean;
}

interface IMainFormData {
  surname?: IDataElement<string>;
  name?: IDataElement<string>;
  patronymic?: IDataElement<string>;
  birthday?: IDataElement<Dayjs>;
  gender?: IDataElement<string>;
  address?: IDataElement<string>;
  email?: IDataElement<string>;
  phone?: IDataElement<string>;
}

export default function MainForm({
  surname,
  name,
  patronymic,
  birthday,
  gender,
  address,
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
      surname: surname?.value,
      name: name?.value,
      patronymic: patronymic?.value,
      birthday: birthday?.value,
      gender: gender?.value,
      address: address?.value,
      email: email?.value,
      phone: phone?.value,
    },
  });

  const dispatch = useDispatch();

  const url = window.location.pathname;
  const urlArray = url.split("/");
  const urlPath = urlArray[2];
  const { id } = useParams();

  const [mainFormData, setMainFormData] = React.useState();
  const [formValide, setFormValid] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (urlPath === "edit-player") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [window.location.pathname]);

  React.useEffect(() => {
    setFormValid(isValid);
  }, [isValid]);

  function convert(str: any) {
    const date = new Date(str);
    const mnth = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const onSubmit = (data: any) => {
    const dateOfBirth = convert(data.birthday);
    // eslint-disable-next-line no-param-reassign
    delete data.birthday;
    // eslint-disable-next-line no-param-reassign
    data.dateOfBirth = dateOfBirth;
    if (isEdit) {
      dispatch(patchPlayer(id, data));
    }
    setMainFormData(data);
    // console.log(data);
    return mainFormData;
  };

  return (
    <>
      <Form>
        <Controller
          name="surname"
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
              isDisabled={surname?.isDisabled}
              label="Фамилия"
              placeholder="Фамилия"
              size="medium"
              maskName="normal"
              onChange={onChange}
              value={value}
              required
              onBlur={onBlur}
              error={!!errors.surname?.message}
              helperText={errors.surname?.message?.toString()}
            />
          )}
        />
        <Controller
          name="name"
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
              isDisabled={name?.isDisabled}
              label="Имя"
              placeholder="Имя"
              size="medium"
              maskName="normal"
              onChange={onChange}
              value={value}
              required
              onBlur={onBlur}
              error={!!errors.name?.message}
              helperText={errors.name?.message?.toString()}
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
            name="address"
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
                isDisabled={address?.isDisabled}
                label="Адрес регистрации"
                placeholder="188800, г. Выборг, ул. Куйбышева, д 1, к 2"
                size="large"
                maskName="normal"
                onChange={onChange}
                value={value}
                onBlur={onBlur}
                error={!!errors.address?.message}
                helperText={errors.address?.message?.toString()}
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
            minLength: {
              value: 18,
              message: "Номер слишком короткий",
            },
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
      {isEdit ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <SubmitBlock>
          <SubmitButton
            colors="all-red"
            onClick={handleSubmit(onSubmit)}
            text="Сохранить"
            // customIcon="forward_arrow"
            disabled={!formValide}
            reverse="right"
            iconColor="blue"
          />
        </SubmitBlock>
      ) : (
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
            disabled={!formValide}
            reverse="right"
            iconColor="blue"
          />
        </SubmitBlock>
      )}
    </>
  );
}

MainForm.defaultProps = {
  surname: { value: "" },
  name: { value: "" },
  patronymic: { value: "" },
  birthday: { value: "" },
  gender: { value: "" },
  address: { value: "" },
  email: { value: "" },
  phone: { value: "" },
};
