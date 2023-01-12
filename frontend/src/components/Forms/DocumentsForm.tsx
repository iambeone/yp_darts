import React from "react";
import styled from "styled-components";
import { TextField, Input } from "@mui/material";
import { useForm, useController } from "react-hook-form";
import InputText from "../InputText/Input-Text";
import ToggleTabs from "../ToggleTabs/Toggle-Tabs";
import DateTextField from "../DateTextField/DateTextField";
import Button from "../Button/Button";

const DocumentsFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 636px;
  width: 100%;

  @media (min-width: 1195px) {
    max-width: 734px;
    margin: 0 auto;
  }
`;

const DocumentsFormBlockTitle = styled.h6`
  font-family: "Roboto";
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.15px;
  color: #003200;
  margin: 0;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  margin-top: 16px;

  @media (min-width: 834px) {
    flex-direction: row;
  }
`;

const IdentificationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  margin: 25px 16px 0 16px;
  overflow: hidden;

  @media (min-width: 834px) {
    margin: 25px 24px 0 24px;
    gap: 24px;
  }
`;

const OtherDocumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
  margin: 24px 16px 0 16px;

  @media (min-width: 834px) {
    margin: 25px 24px 0 24px;
    gap: 38px;
  }
`;

const SubmitButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const tablet = window.innerWidth < 834;

export default function DocumentsForm() {
  const [value, setValue] = React.useState({
    passport: "",
    dateOfIssue: Date,
    snils: "",
    inn: "",
    police: "",
    issuedBy: "",
  });

  const { control, handleSubmit } = useForm();

  const { field: snils, fieldState: snilsState } = useController({
    name: "snils",
    control,
    rules: { pattern: /[0-9]{3}-[0-9]{3}-[0-9]{3} [0-9]{2}/ },
  });
  // const { field: dateOfIssue, fieldState: dateOfIssueState } = useController({
  //   name: "dateOfIssue",
  //   control,
  //   rules: { pattern: /[0-2]{12}/ },
  // });
  const { field: passport, fieldState: passportState } = useController({
    name: "passport",
    control,
    rules: { pattern: /[0-9]{2} [0-9]{2} [0-9]{6}/ },
  });
  const { field: inn, fieldState: innState } = useController({
    name: "inn",
    control,
    rules: { pattern: /[0-9]{12}/ },
  });
  const { field: police, fieldState: policeState } = useController({
    name: "police",
    control,
    rules: { pattern: /[0-9]{3}-[0-9]{3}/ },
  });
  const { field: issuedBy, fieldState: issuedByState } = useController({
    name: "issuedBy",
    control,
    rules: { pattern: /[а-яА-Я0-9]/ },
  });

  const onChange = (event: any) => {
    console.log(innState.error);
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
      default:
        break;
      // case "dateOfIssue": {
      //   dateOfIssue.onChange(event.target.value);
      //   break;
      // }
    }
    setValue({ ...value, [event.target.name]: event.target.value }); // UI state
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <DocumentsFormBlock onSubmit={handleSubmit(onSubmit)}>
      <IdentificationBlock>
        <DocumentsFormBlockTitle>
          Удостоверение личности
        </DocumentsFormBlockTitle>
        <ToggleTabs tabs={["Паспорт РФ", "Свидетельство о рождении"]} />
        <InputBlock>
          <InputText
            label="Серия и номер"
            name="passport"
            placeholder="00 00 000-000"
            sx={{
              "@media(min-width: 834px)": {
                maxWidth: "100%",
              },
            }}
            size="large"
            onChange={onChange}
            value={value.passport}
            error={passportState.error && true}
            helperText=""
            maskName="passport"
            inputRef={passport.ref}
          />
          <DateTextField name="Дата выдачи" />
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
            helperText=""
            name="issuedBy"
            inputRef={issuedBy.ref}
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
            helperText=""
            maskName="police"
            inputRef={police.ref}
          />
        </InputBlock>
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
          helperText=""
          maskName="snils"
          inputRef={snils.ref}
        />
        <InputText
          name="inn"
          label="ИНН"
          placeholder="000000000000"
          error={innState.error && true}
          helperText=""
          value={value.inn}
          onChange={onChange}
          maskName="inn"
          inputRef={inn.ref}
        />
        <TextField />
        <Input />
        <InputText />
      </OtherDocumentsBlock>
      <SubmitButtonBlock>
        <Button
          colors="all-red"
          onClick={handleSubmit(onSubmit)}
          text="Далее  >"
        />
        {/* <button type="submit" style={{ width: 100, height: 100 }} /> */}
      </SubmitButtonBlock>
    </DocumentsFormBlock>
  );
}
