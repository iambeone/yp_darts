import React from "react";
import { Outlet } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import TabMenu from "../../components/TabMenu/TabMenu";

export default function EditPlayerPage() {
  const tabsForms = [
    { label: "Основное", href: "main", disabled: false, id: 0 },
    { label: "Документы", href: "documents", disabled: false, id: 1 },
    { label: "Игровая информация", href: "game-info", disabled: false, id: 2 },
    { label: "Дополнительно", href: "additional", disabled: false, id: 3 },
  ];
  return (
    <>
      <PageTitle title="Тут имя кого редуактируют" />
      <TabMenu tabs={tabsForms} />
      <Outlet />
    </>
  );
}
