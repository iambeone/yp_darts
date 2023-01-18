import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  DocsWrapper,
  InfoContainer,
  NavigateToEditButton,
  ButtonContainer,
} from "./PlayerInfoPageStyles";
import PlayerDocsCard from "../../components/PlayerDocsCard/PlayerDocsCard";

export default function PlayerInfoPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      {player && (
        <InfoContainer>
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
                <InfoText>{dateFormatter(player.dateOfBirth, true)}</InfoText>
              </DetailedInfoItemSpan>
              <DetailedInfoItemSpan>
                <PageSubtitle text="Метрики" />
                <InfoText>
                  {player.heightOfPlayer ? player.heightOfPlayer : "Рост в"} см,{" "}
                  {player.weightOfPlayer ? player.weightOfPlayer : "Вес в"} кг (
                  {player.clothingSize ? player.clothingSize : "Размер одежды"})
                </InfoText>
              </DetailedInfoItemSpan>
            </Wrapper>
            <DetailedInfoItemSpan>
              <PageSubtitle text="Адрес регистрации" />
              <InfoText>{player.address}</InfoText>
            </DetailedInfoItemSpan>
            <DocsWrapper>
              <PlayerDocsCard player={player} />
            </DocsWrapper>
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
                  {player.producerOfDart}{" "}
                  {player.weightOfDart ? `(${player.weightOfDart} г)` : ""}
                </InfoText>
              </DetailedInfoItemSpan>
            </Wrapper>
            <DetailedInfoItemSpan>
              <PageSubtitle text="Тренер" />
              <InfoText>{player.nameOfTrainer}</InfoText>
            </DetailedInfoItemSpan>
            <DetailedInfoItemSpan>
              <PageSubtitle
                text={
                  player.educationLevel
                    ? player.educationLevel
                    : "Уровень образования"
                }
              />
              <InfoText>
                {player.educationalInstitution
                  ? player.educationalInstitution
                  : ""}{" "}
                {player.speciality ? `(${player.speciality})` : ""}
                {player.endOfEducation !== null
                  ? `, ${dateFormatter(player.endOfEducation, false)}`
                  : ""}
              </InfoText>
            </DetailedInfoItemSpan>
            <DetailedInfoItemSpan>
              <PageSubtitle text="Увлечения" />
              <InfoText>{player.hobby}</InfoText>
            </DetailedInfoItemSpan>
          </DetailedInfo>
          <ButtonContainer>
            <NavigateToEditButton
              colors="all-red"
              onClick={() => navigate("/players/edit-player/id")}
              text="Изменить"
              customIcon="edit"
              reverse="left"
              iconColor="blue"
            />
          </ButtonContainer>
        </InfoContainer>
      )}
    </>
  );
}
