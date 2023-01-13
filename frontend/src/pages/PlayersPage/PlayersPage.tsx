import React from "react";
import { useSelector } from "../../utils/hooks";
import GamersTable from "../../components/DataTable/GamersTable";
import BasicModal from "../../components/Modals/BasicModal";
import Filters from "../../components/Modals/Filters";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function PlayersPage() {
  const filteredPlayersData = useSelector(
    (state) => state.players.filteredPlayersData,
  );
  return (
    <>
      <PageTitle title="Игроки" />
      <SearchBar />
      {filteredPlayersData && <GamersTable data={filteredPlayersData} />}
      <BasicModal>
        <Filters />
      </BasicModal>
    </>
  );
}
