import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import PageTitle from "../../components/PageTitle/PageTitle";
import TabMenu from "../../components/TabMenu/TabMenu";
import { getPlayer } from "../../services/actions";

export default function EditPlayerPage() {
  const player = useSelector((state: any) => state.player.playerData);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    // const url = window.location.pathname;
    // const urlArray = url.split("/");
    // const playerId = "/" + urlArray[3];
    dispatch(getPlayer(id));
    console.log("sa");
  }, [dispatch]);

  const tabsForms = [
    { label: "Основное", href: "main", disabled: false, id: 1 },
    { label: "Документы", href: "documents", disabled: false, id: 2 },
    { label: "Игровая информация", href: "game-info", disabled: false, id: 3 },
    { label: "Дополнительно", href: "additional", disabled: false, id: 4 },
  ];

  return (
    <>
      {player.name && <PageTitle title={`${player.surname} ${player.name}`} />}
      <TabMenu tabs={tabsForms} />
      <Outlet />
    </>
  );
}
