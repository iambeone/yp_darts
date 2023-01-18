import React from "react";
import { dateFormatter } from "../../utils/helpers";
import Notification from "../Notification/Notification";
import PageSubtitle from "../PageSubtitle/PageSubtitle";
import {
  CardWrapper,
  PassportNumber,
  DocsSpan,
  DocsCardText,
  RowsWrapper,
  DocsRowsWrapper,
} from "./PlayerDocsCardStyle";

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

  const expiryTimer = (end_date: string | null): string | undefined | null => {
    const todayString = new Date().toISOString();
    const today = new Date(todayString);
    if (end_date !== null) {
      const expiryDate = new Date(end_date);
      const diff = Math.round((+today - +expiryDate) / (60 * 60 * 24 * 1000));

      if (diff >= -90 && diff <= -60) {
        return "Истекает через 3 месяца";
      }
      if (diff >= -60 && diff <= -30) {
        return "Истекает через 2 месяца";
      }
      if (diff === -30) {
        return "Истекает через 1 месяц";
      }
      if (diff > -30 && diff < 0) {
        return "Истекает в течении месяца";
      }
      if (diff >= 0) {
        return "Просрочен";
      }
      return "";
    }
    return null;
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
        <DocsRowsWrapper>
          <DocsSpan>
            <PageSubtitle text="Медицинская страховка" />
            <DocsCardText>
              {player.policyNumber
                ? policyNumberFormatter(player.policyNumber)
                : ""}{" "}
              {player.endOfAction !== null
                ? `(до ${dateFormatter(player.endOfAction, true)})`
                : ""}
            </DocsCardText>
          </DocsSpan>
          <Notification text={expiryTimer(player.endOfAction)} />
        </DocsRowsWrapper>
        <DocsRowsWrapper>
          <DocsSpan>
            <PageSubtitle text="Сертификат РУСАДА" />
            <DocsCardText>
              {player.certificate ? player.certificate : ""}{" "}
              {player.certEndOfAction !== null
                ? `(до ${dateFormatter(player.certEndOfAction, true)})`
                : ""}
            </DocsCardText>
          </DocsSpan>
          <Notification text={expiryTimer(player.certEndOfAction)} />
        </DocsRowsWrapper>
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
