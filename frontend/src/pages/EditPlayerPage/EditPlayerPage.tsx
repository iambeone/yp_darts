import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import PageTitle from "../../components/PageTitle/PageTitle";
import TabMenu from "../../components/TabMenu/TabMenu";
import { getPlayer } from "../../services/actions";

export default function EditPlayerPage() {
  const player = useSelector((state) => state.players.player);
  const playerFullName = `${player?.surname} ${player?.name} ${
    player?.patronymic ? player?.patronymic : ""
  }`;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPlayer(id));
  }, [dispatch, id]);

  const tabsForms = [
    { label: "Основное", href: "main", disabled: false, id: 0 },
    { label: "Документы", href: "documents", disabled: false, id: 1 },
    { label: "Игровая информация", href: "game-info", disabled: false, id: 2 },
    { label: "Дополнительно", href: "additional", disabled: false, id: 3 },
  ];

  return (
    <>
      {player && <PageTitle title={playerFullName} />}
      <TabMenu tabs={tabsForms} />
      <Outlet />
    </>
  );
}
