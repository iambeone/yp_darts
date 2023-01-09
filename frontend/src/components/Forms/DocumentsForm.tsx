import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import InputText from "../InputText/Input-Text";

export default function DocumentsForm() {
  return (
    <div>
      <PageTitle title="Form 2" />
      <InputText name="birth" error helperText="qweqweqweqwe" />
    </div>
  );
}
