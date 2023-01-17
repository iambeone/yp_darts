import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "../../utils/hooks";
import PageTitle from "../../components/PageTitle/PageTitle";
import { getPlayer } from "../../services/actions/playersActions";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import {
  ContactInfoWrapper,
  TitleWrapper,
  ContactInfoSpan,
  DetailedInfo,
  Wrapper,
  DetailedInfoItemSpan,
  InfoText,
} from "./PlayerInfoPageStyles";
import PlayerDocsCard from "../../components/PlayerDocsCard/PlayerDocsCard";

export default function PlayerInfoPage() {
  const dispatch = useDispatch();
  const player = useSelector((state) => state.players.player);
  const playerFullName = `${player?.surname} ${player?.name} ${
    player?.patronymic ? player?.patronymic : ""
  }`;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(getPlayer(id));
  }, [id, dispatch]);

  if (!player) {
    return null;
  }

  return (
    <>
      <TitleWrapper>
        <PageTitle title={playerFullName} />
        <PageSubtitle text={player.category ? player.category : ""} />
      </TitleWrapper>
      <ContactInfoWrapper>
        <ContactInfoSpan>+{player.phone}</ContactInfoSpan>
        <ContactInfoSpan>{player.email}</ContactInfoSpan>
      </ContactInfoWrapper>
      <DetailedInfo>
        <Wrapper>
          <DetailedInfoItemSpan>
            <PageSubtitle text="Дата рождения" />
            <InfoText>{player.dateOfBirth.toString()}</InfoText>
          </DetailedInfoItemSpan>
          <DetailedInfoItemSpan>
            <PageSubtitle text="Метрики" />
            <InfoText>
              {player.heightOfPlayer}180 см, {player.weightOfPlayer} кг (
              {player.clothingSize})
            </InfoText>
          </DetailedInfoItemSpan>
        </Wrapper>
        <DetailedInfoItemSpan>
          <PageSubtitle text="Адрес регистрации" />
          <InfoText>{player.address}</InfoText>
        </DetailedInfoItemSpan>
        <Wrapper>
          <PlayerDocsCard player={player} />
        </Wrapper>
        <Wrapper>
          <DetailedInfoItemSpan>
            <PageSubtitle text="Ведущая рука" />
            <InfoText>
              {player.leadingHand === "right" ? "Правая" : "Левая"}
            </InfoText>
          </DetailedInfoItemSpan>
          <DetailedInfoItemSpan>
            <PageSubtitle text="Дротики" />
            <InfoText>
              {player.producerOfDart} ({player.weightOfDart} г)
            </InfoText>
          </DetailedInfoItemSpan>
        </Wrapper>
        <DetailedInfoItemSpan>
          <PageSubtitle text="Тренер" />
          <InfoText>{player.nameOfTrainer}</InfoText>
        </DetailedInfoItemSpan>
        <DetailedInfoItemSpan>
          <PageSubtitle text={player?.educationLevel} />
          <InfoText>
            {player.educationalInstitution} ({player.speciality}),{" "}
            {/* {dateFormatter(player.endOfEducation!!.toString(), false)} */}
          </InfoText>
        </DetailedInfoItemSpan>
        <DetailedInfoItemSpan>
          <PageSubtitle text="Увлечения" />
          <InfoText>{player.hobby}</InfoText>
        </DetailedInfoItemSpan>
      </DetailedInfo>
    </>
  );
}
