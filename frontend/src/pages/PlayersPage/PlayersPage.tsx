import React from "react";
import { useSelector } from "../../utils/hooks";
import GamersTable from "../../components/DataTable/GamersTable";
import FiltersModal from "../../components/modals/FiltersModal";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function PlayersPage() {
  const players = useSelector((state) => state.players.playersData);
  return (
    <>
      <PageTitle title="Игроки" />
      <SearchBar />
      {players && <GamersTable data={players} />}
      <FiltersModal />
    </>
  );
}

// рутинг не доделан, чтобы открыть, добавить в урл /1
