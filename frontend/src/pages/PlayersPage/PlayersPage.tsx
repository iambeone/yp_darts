import React, { useEffect } from "react";
import { useDispatch } from "../../utils/hooks";
import GamersTable from "../../components/DataTable/GamersTable";
import FiltersModal from "../../components/modals/FiltersModal";
import SearchBar from "../../components/SearchBar/SearchBar";
import PageTitle from "../../components/PageTitle/PageTitle";

export default function PlayersPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPlayers());
  }, [dispatch]);
  const gamers = [
    { name: "Sam", email: "sam@ya.ru", id: 1 },
    { name: "Sam", email: "sam@ya.ru", id: 2 },
    { name: "Sam", email: "sam@ya.ru", id: 3 },
    { name: "Sam", email: "sam@ya.ru", id: 4 },
    { name: "Sam", email: "sam@ya.ru", id: 5 },
    { name: "Sam", email: "sam@ya.ru", id: 6 },
    { name: "Sam", email: "sam@ya.ru", id: 7 },
    { name: "Sam", email: "sam@ya.ru", id: 8 },
    { name: "Sam", email: "sam@ya.ru", id: 9 },
    { name: "Sam", email: "sam@ya.ru", id: 10 },
    { name: "Sam", email: "sam@ya.ru", id: 11 },
    { name: "Sam", email: "sam@ya.ru", id: 12 },
    { name: "Henk", email: "Henk@ya.ru", id: 13 },
    { name: "Henk", email: "Henk@ya.ru", id: 14 },
  ];
  // const gamers = [
  //   { name: "Sam", email: "sam@ya.ru", id: 1 },
  //   { name: "Sam", email: "sam@ya.ru", id: 2 },
  //   { name: "Sam", email: "sam@ya.ru", id: 3 },
  //   { name: "Sam", email: "sam@ya.ru", id: 4 },
  // ];
  return (
    <>
      <PageTitle title="Игроки" />
      <SearchBar />
      <GamersTable data={gamers} />
      <FiltersModal />
    </>
  );
}
