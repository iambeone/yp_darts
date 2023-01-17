import { Button, Icon, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  deletePlayer,
  getPlayers,
  setAcceptDeleteOpen,
  setConfirmDeleteOpen,
  setContextMenuOpen,
  setCurrentPlayerID,
} from "../../../services/actions";
import { useSelector, useDispatch } from "../../../utils/hooks";
import ContextMenu from "../../ContextMenu/ContextMenu";
import DialogWindow from "../../DialogWindow/DialogWindow";

// для страниц первого уровня "Просмотр сведений игрока", "Изменение игрока", "Изменение игры"
// страница создания турнира и ее вкладки ("Участники", "Группы", “Игры", "Результаты")

function HeaderTypeTwo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const acceptDeleteOpen = useSelector(
    (state) => state.players.acceptDeleteOpen,
  );
  const confirmDeleteOpen = useSelector(
    (state) => state.players.confirmDeleteOpen,
  );
  const currentPlayer = useSelector((state) => state.players.player.id);
  const deleteTitle = "Вы уверены, что хотите удалить игрока?";
  const deleteText = "После удаления отменить действие невозможно.";
  const confirmDeleteTitle = "Игрок успешно удален";
  const anchor = useSelector((state) => state.players.contextMenuOpen);

  const openContextMenu = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(currentPlayer);
    dispatch(setContextMenuOpen(anchor ? null : evt.currentTarget));
    dispatch(setCurrentPlayerID(id));
  };

  const closeContextMenu = () => {
    dispatch(setContextMenuOpen(null));
  };

  const addToTournament = (id: number) => {
    return id;
  };

  const contextMenuPlayerInfo = [
    {
      icon: "person_add",
      value: "Добавить в турнир",
      callback: () => addToTournament(currentPlayer),
    },
    {
      icon: "delete",
      value: "Удалить",
      callback: () => {
        dispatch(setAcceptDeleteOpen(true));
      },
    },
  ];

  const handleDeletePlayer = () => {
    Promise.resolve(dispatch(deletePlayer(currentPlayer))).then(() => {
      dispatch(getPlayers(""));
      dispatch(setAcceptDeleteOpen(false));
      dispatch(setConfirmDeleteOpen(true));
      dispatch(setCurrentPlayerID(0));
    });
    dispatch(setAcceptDeleteOpen(false));
  };

  const handleReturnToPlayersList = () => {
    dispatch(setConfirmDeleteOpen(false));
    navigate("/players/1");
  };
  const mobile = window.innerWidth <= 500;

  return (
    <>
      <Toolbar
        sx={{
          height: mobile ? 56 : 72,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          sx={{
            fontSize: mobile ? "medium" : "large",
          }}
          size="medium"
          onClick={() => navigate(-1)}
        >
          <Icon>arrow_back_ios</Icon>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontSize: mobile ? "medium" : "large",
            }}
          >
            Назад
          </Typography>
        </IconButton>
        <IconButton sx={{}} size="medium" onClick={openContextMenu}>
          <Icon>more_vert</Icon>
        </IconButton>
      </Toolbar>
      <DialogWindow
        open={acceptDeleteOpen}
        type="accept"
        title={deleteTitle}
        contentText={deleteText}
        handleClose={() => dispatch(setAcceptDeleteOpen(false))}
      >
        <Button onClick={() => dispatch(setAcceptDeleteOpen(false))}>
          Отмена
        </Button>
        <Button onClick={handleDeletePlayer} color="error">
          Да, удалить
        </Button>
      </DialogWindow>
      <DialogWindow
        open={confirmDeleteOpen}
        handleClose={() => dispatch(setConfirmDeleteOpen(false))}
        type="success"
        title={confirmDeleteTitle}
      >
        <Button onClick={() => handleReturnToPlayersList()}>
          Перейти в список игроков
        </Button>
      </DialogWindow>
      <ContextMenu
        items={contextMenuPlayerInfo}
        anchorEl={anchor}
        handleClose={closeContextMenu}
      />
    </>
  );
}

export default HeaderTypeTwo;
