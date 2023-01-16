import React from "react";
import { dateFormatter } from "../../utils/helpers";
import PageSubtitle from "../PageSubtitle/PageSubtitle";
import {
  CardWrapper,
  PassportNumber,
  DocsSpan,
  DocsCardText,
  RowsWrapper,
} from "./PlayerDocsCardStyle";
// import { Tplayers } from "../../services/types";

export default function PlayerDocsCard({ player }: any) {
  const passportNumberFormatter = (num: string) => {
    const re = /\B(?=(\d{6})+(?!\d{1}))/g;
    const formatted = num.replace(re, " ");
    return formatted;
  };
  const divisionsCodeFormatter = (num: string) => {
    const re = /\B(?=(\d{3})+(?!\d))/g;
    const formatted = num.replace(re, "-");
    return formatted;
  };

  const policyNumberFormatter = (num: string) => {
    const re = /\B(?=(\d{4})+(?!\d{1}))/g;
    const formatted = num.toString().replace(re, " ");
    return formatted;
  };

  const snilsFormatter = (num: string) => {
    return `${num.toString().substr(0, 3)}-${num.toString().substr(3, 3)}-${num
      .toString()
      .substr(6, 3)} ${num.toString().substr(9)}`;
  };
  return (
    <>
      <CardWrapper>
        <PageSubtitle docs text="паспорт РФ" />
        <PassportNumber>
          {player.seriesAndNumber
            ? passportNumberFormatter(player.seriesAndNumber)
            : "0000 000000"}
        </PassportNumber>
        <DocsSpan>
          <PageSubtitle text="Выдан" />
          <DocsCardText>
            {player.issuedBy ? player.issuedBy : "ОВД по г. Москва"}
          </DocsCardText>
        </DocsSpan>
        <RowsWrapper>
          <DocsSpan>
            <PageSubtitle text="Дата выдачи" />
            <DocsCardText>
              {player.dateOfIssue
                ? dateFormatter(player.dateOfIssue, true)
                : "01.01.2111"}
            </DocsCardText>
          </DocsSpan>
          <DocsSpan>
            <PageSubtitle text="Код подразделения" />
            <DocsCardText>
              {player.divisionCode
                ? divisionsCodeFormatter(player.divisionCode)
                : "000-000"}
            </DocsCardText>
          </DocsSpan>
        </RowsWrapper>
      </CardWrapper>
      <CardWrapper>
        <PageSubtitle docs text="другие документы" />
        <DocsSpan>
          <PageSubtitle text="Медицинская страховка" />
          <DocsCardText>
            {player.policyNumber
              ? policyNumberFormatter(player.policyNumber)
              : "00 1111"}{" "}
            (до {dateFormatter(player.endOfAction, true)})
          </DocsCardText>
        </DocsSpan>
        {/* для сертификата РУСАДА нет полей (номер, дата выдачи, дата окончания) в форме и в сторе, доделать */}
        {/* временный хардкод для верстки */}
        <DocsSpan>
          <PageSubtitle text="Сертификат РУСАДА" />
          <DocsCardText>
            {player.certificate ? player.certificate : "23423401788"} (до
            01.01.2022)
          </DocsCardText>
        </DocsSpan>
        {/* временный хардкод для верстки */}
        <RowsWrapper>
          <DocsSpan>
            <PageSubtitle text="СНИЛС" />
            <DocsCardText>
              {player.snils ? snilsFormatter(player.snils) : "000-000-000 00"}
            </DocsCardText>
          </DocsSpan>
          <DocsSpan>
            <PageSubtitle text="ИНН" />
            <DocsCardText>
              {player.INN ? player.INN : "000000000000"}
            </DocsCardText>
          </DocsSpan>
        </RowsWrapper>
      </CardWrapper>
    </>
  );
}
