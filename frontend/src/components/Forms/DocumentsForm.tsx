/* eslint-disable react/require-default-props */
import React, { useState } from "react";
import { useForm, useController } from "react-hook-form";
import { Dayjs } from "dayjs";
import ToggleTabs from "../ToggleTabs/ToggleTabs";
import InputText from "../InputText/InputText";
import DateTextField from "../DateTextField/DateTextField";
import {
  TogledBlock,
  OtherDocumentsBlock,
  IdentificationBlock,
  InputBlock,
  DocumentsFormBlock,
  DocumentsFormBlockTitle,
} from "./Styles/DocumentsFormStyles";
import { SubmitBlock, SubmitButton } from "./Styles/MainFormStyles";

const tablet = window.innerWidth < 834;

interface IDocumentsForm {
  passportData?: string;
  dateOfIssueData?: Dayjs;
  snilsData?: string;
  innData?: string;
  policeData?: string;
  issuedByData?: string;
  birthSeriesData?: string;
  birthDateOfIssueData?: Dayjs;
  birthIssuedByData?: string;
}

export default function DocumentsForm({
  passportData,
  dateOfIssueData,
  snilsData,
  innData,
  policeData,
  issuedByData,
  birthSeriesData,
  birthDateOfIssueData,
  birthIssuedByData,
}: IDocumentsForm) {
  const [value, setValue] = useState({
    passport: passportData || "",
    dateOfIssue: dateOfIssueData || null,
    snils: snilsData || "",
    inn: innData || "",
    police: policeData || "",
    issuedBy: issuedByData || "",
    birth: birthSeriesData || "",
    birthDateOfIssue: birthDateOfIssueData || null,
    birthIssuedBy: birthIssuedByData || "",
  });

  // const dispatch = useDispatch();

  const url = window.location.pathname;
  const urlArray = url.split("/");
  const urlPath = urlArray[2];
  // const { id } = useParams();

  const [tabsValue, setTabsValue] = useState(0);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (urlPath === "edit-player") {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  }, [window.location.pathname]);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onBlur" });

  const { field: snils, fieldState: snilsState } = useController({
    name: "snils",
    control,
    rules: {
      pattern: {
        value: /[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}/,
        message: "Введите снилс",
      },
    },
  });
  const { field: dateOfIssue } = useController({
    name: "dateOfIssue",
    control,
  });
  const { field: passport, fieldState: passportState } = useController({
    name: "passport",
    control,
    rules: {
      pattern: {
        value: /[0-9]{2} [0-9]{2} [0-9]{6}/,
        message: "Введите номер паспорта",
      },
    },
  });
  const { field: inn, fieldState: innState } = useController({
    name: "inn",
    control,
    rules: { pattern: { value: /[0-9]{12}/, message: "Введите инн" } },
  });
  const { field: police, fieldState: policeState } = useController({
    name: "police",
    control,

    rules: {
      pattern: {
        value: /[0-9]{3}-[0-9]{3}/,
        message: "Введите код подразделения",
      },
    },
  });
  const { field: issuedBy, fieldState: issuedByState } = useController({
    name: "issuedBy",
    control,
    rules: {
      pattern: {
        value: /^[а-яА-Я0-9]+$/gi,
        message: "Введены недопустимые символы",
      },
    },
  });

  const { field: birth, fieldState: birthState } = useController({
    name: "birth",
    control,
    rules: {
      pattern: {
        value: /[а-яА-Я]{1}-[а-яА-Я]{2} [0-9]{6}/,
        message: "Введите номер паспорта",
      },
    },
  });
  const { field: birthDateOfIssue } = useController({
    name: "birthDateOfIssue",
    control,
  });
  const { field: birthIssuedBy, fieldState: birthIssuedByState } =
    useController({
      name: "birthIssuedBy",
      control,
      rules: {
        pattern: {
          value: /^[а-яА-Я0-9]+$/gi,
          message: "Введены недопустимые символы",
        },
      },
    });

  const onChange = (event: any) => {
    switch (event.target.name) {
      case "snils":
        snils.onChange(event.target.value);
        break;
      case "passport": {
        passport.onChange(event.target.value);
        break;
      }
      case "inn": {
        inn.onChange(event.target.value);
        break;
      }
      case "police": {
        police.onChange(event.target.value);
        break;
      }
      case "issuedBy": {
        issuedBy.onChange(event.target.value);
        break;
      }
      case "birth": {
        birth.onChange(event.target.value);
        break;
      }
      case "birthIssuedBy": {
        birthIssuedBy.onChange(event.target.value);
        break;
      }
      default:
        break;
    }
    setValue({ ...value, [event.target.name]: event.target.value }); // UI state
  };

  const onSubmit = (data: any) => {
    // console.log(data);
    // console.log(value);
    return { data, value };
  };

  return (
    <>
      <DocumentsFormBlock onSubmit={handleSubmit(onSubmit)}>
        <IdentificationBlock>
          <DocumentsFormBlockTitle>
            Удостоверение личности
          </DocumentsFormBlockTitle>
          <ToggleTabs
            tabs={["Паспорт РФ", "Свидетельство о рождении"]}
            tabsValue={tabsValue}
            tabsOnChahge={setTabsValue}
          />
          {tabsValue === 0 && (
            <TogledBlock>
              <InputBlock>
                <InputText
                  label="Серия и номер"
                  name="passport"
                  placeholder="00 00 000-000"
                  sx={{
                    "@media(min-width: 834px)": {
                      maxWidth: 390,
                    },
                    "@media(min-width: 1195px)": {
                      maxWidth: 456,
                    },
                  }}
                  size="large"
                  onChange={onChange}
                  value={value.passport}
                  error={passportState.error && true}
                  helperText={passportState.error?.message}
                  maskName="passport"
                  inputRef={passport.ref}
                  onBlur={passport.onBlur}
                />
                <DateTextField
                  disableFuture
                  value={value.dateOfIssue}
                  onChangeHandler={(newValue) => {
                    if (newValue) {
                      dateOfIssue.onChange(newValue);
                      setValue({ ...value, dateOfIssue: newValue });
                    }
                  }}
                  type="day"
                  labelText="Дата выдачи"
                  inputHeight={56}
                  sx={{
                    width: 241,
                    "@media(min-width: 834px)": {
                      width: 226,
                    },
                  }}
                  onBlur={dateOfIssue.onBlur}
                />
              </InputBlock>
              <InputBlock>
                <InputText
                  label="Кем выдан"
                  placeholder="ОВД Октябрьского округа города Архангельска"
                  rows={tablet ? 2 : 1}
                  size="large"
                  sx={{
                    "@media(min-width: 834px)": {
                      maxWidth: "100%",
                    },
                  }}
                  onChange={onChange}
                  value={value.issuedBy}
                  error={issuedByState.error && true}
                  helperText={issuedByState.error?.message}
                  name="issuedBy"
                  inputRef={issuedBy.ref}
                  onBlur={issuedBy.onBlur}
                />
                <InputText
                  label="Код подразделения"
                  name="police"
                  placeholder="000-000"
                  size="small"
                  sx={{
                    "@media(min-width: 834px)": {
                      minWidth: 144,
                    },
                  }}
                  onChange={onChange}
                  value={value.police}
                  error={policeState.error && true}
                  helperText={policeState.error?.message}
                  maskName="police"
                  inputRef={police.ref}
                  onBlur={police.onBlur}
                />
              </InputBlock>
            </TogledBlock>
          )}
          {tabsValue === 1 && (
            <TogledBlock>
              <InputBlock>
                <InputText
                  label="Серия и номер"
                  name="birth"
                  placeholder="Х-МЮ 000000"
                  sx={{
                    "@media(min-width: 834px)": {
                      maxWidth: 390,
                    },
                    "@media(min-width: 1195px)": {
                      maxWidth: 456,
                    },
                  }}
                  size="large"
                  onChange={onChange}
                  value={value.birth}
                  error={birthState.error && true}
                  helperText={birthState.error?.message}
                  maskName="birth"
                  inputRef={birth.ref}
                  onBlur={birth.onBlur}
                />
                <DateTextField
                  disableFuture
                  value={value.birthDateOfIssue}
                  onChangeHandler={(newValue) => {
                    if (newValue) {
                      birthDateOfIssue.onChange(newValue);
                      setValue({ ...value, birthDateOfIssue: newValue });
                    }
                  }}
                  type="day"
                  labelText="Дата выдачи"
                  inputHeight={56}
                  sx={{
                    width: 241,
                    "@media(min-width: 834px)": {
                      width: 226,
                    },
                  }}
                  onBlur={birthDateOfIssue.onBlur}
                />
              </InputBlock>
              <InputBlock>
                <InputText
                  label="Кем выдан"
                  placeholder="Орган ЗАГС Октябрьского округа города Архангельска"
                  rows={tablet ? 2 : 1}
                  size="large"
                  sx={{
                    "@media(min-width: 834px)": {
                      maxWidth: "100%",
                    },
                  }}
                  onChange={onChange}
                  value={value.birthIssuedBy}
                  error={birthIssuedByState.error && true}
                  helperText={birthIssuedByState.error?.message}
                  name="birthIssuedBy"
                  inputRef={birthIssuedBy.ref}
                  onBlur={birthIssuedBy.onBlur}
                />
              </InputBlock>
            </TogledBlock>
          )}
        </IdentificationBlock>
        <OtherDocumentsBlock>
          <DocumentsFormBlockTitle>Другие документы</DocumentsFormBlockTitle>
          <InputText
            name="snils"
            label="СНИЛС"
            placeholder="000-000-000 00"
            onChange={onChange}
            value={value.snils}
            error={snilsState.error && true}
            helperText={snilsState.error?.message}
            maskName="snils"
            inputRef={snils.ref}
            onBlur={snils.onBlur}
          />
          <InputText
            name="inn"
            label="ИНН"
            placeholder="000000000000"
            error={innState.error && true}
            helperText={innState.error?.message}
            value={value.inn}
            onChange={onChange}
            maskName="inn"
            inputRef={inn.ref}
            onBlur={inn.onBlur}
          />
        </OtherDocumentsBlock>
      </DocumentsFormBlock>
      {isEdit ? (
        <SubmitBlock>
          <SubmitButton
            colors="all-red"
            onClick={handleSubmit(onSubmit)}
            text="Сохранить"
            // customIcon="forward_arrow"
            disabled={!isValid}
            reverse="right"
          />
        </SubmitBlock>
      ) : (
        <SubmitBlock>
          <SubmitButton
            colors="all-red"
            onClick={handleSubmit(onSubmit)}
            text="Далее"
            customIcon="forward_arrow"
            disabled={!isValid}
            reverse="right"
          />
        </SubmitBlock>
      )}
    </>
  );
}
