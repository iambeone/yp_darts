import React from "react";
import styled from "styled-components";
// import PageTitle from "../PageTitle/PageTitle";
import InputText from "../InputText/Input-Text";
import ToggleTabs from "../ToggleTabs/Toggle-Tabs";
import DateTextField from "../DateTextField/DateTextField";

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

  @media (min-width: 1194px) {
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

  @media (min-width: 1194px) {
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

  @media (min-width: 1194px) {
    margin: 25px 24px 0 24px;
    gap: 38px;
  }
`;

const tablet = window.innerWidth < 1194;
// const mobile = window.innerWidth < 500;

export default function DocumentsForm() {
  return (
    <div>
      {/* <PageTitle title="Удостоверение личности" /> */}
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
            sx={{ "@media(min-width: 1194px)": { alignSelf: "end" } }}
          />
          <DateTextField name="Дата выдачи" />
        </InputBlock>
        <InputBlock>
          <InputText
            label="Кем выдан"
            placeholder="ОВД Октябрьского округа города Архангельска"
            rows={tablet ? 2 : 1}
            size="large"
          />
          <InputText
            label="Код подразделения"
            name="police"
            placeholder="000-000"
            size="small"
          />
        </InputBlock>
        {/* <InputText label="Серия и номер" name="passport" /> */}
      </IdentificationBlock>
      <OtherDocumentsBlock>
        <DocumentsFormBlockTitle>Другие документы</DocumentsFormBlockTitle>
        {/* <InputBlock> */}
        <InputText name="snils" label="СНИЛС" placeholder="000-000-000 00" />
        <InputText name="inn" label="ИНН" placeholder="000000000000" />
        {/* </InputBlock> */}
      </OtherDocumentsBlock>
      {/* <InputText helperText="qweqweqweqwe" />
      <ToggleTabs tabs={["Паспорт РФ", "Свидетельство о рождении"]} />
      <DateTextField name="Дата выдачи" /> */}
    </div>
  );
}
