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
      ;
    </>
  );
}
