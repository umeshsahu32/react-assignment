import React, { Fragment, useState } from "react";
import { users } from "./components/data";
import Card from "./components/Card";
import styles from "./App.module.css";
import EditModal from "./components/EditModal";

const App = () => {
  const [userList, setUserList] = useState(users);
  const [showModal, setShowModal] = useState(false);
  const [showUser, setShowUser] = useState({});

  // SHOW MODAL HANDLER
  const showModalHandler = (id) => {
    setShowModal(true);
    let list = userList.filter((item) => item.userId === id);
    setShowUser(list[0]);
  };

  // HIDE MODAL HANDLER
  const hideModalHandler = () => {
    setShowModal(false);
    setShowUser({});
  };

  // DELETE ICON CLICK HANDLER
  const deleteHandler = (id) => {
    let list = userList.filter((item) => item.userId !== id);
    setUserList([...list]);
  };

  // LIKE ICON CLICK HANDLER
  const favoriteHandler = (id) => {
    let list = userList.filter((item) => item.userId === id);
    list[0].isFavorite = !list[0].isFavorite;
    let indexOfItem = userList.findIndex((item) => item.userId === id);
    const allList = [...userList];
    allList[indexOfItem] = list[0];
    setUserList(allList);
  };

  // EDIT ICON CLICK HANDLER
  const updateDataHandler = (data) => {
    if (
      data.userName === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.domain === ""
    )
      return;

    let list = userList.filter((item) => item.userId === data.userId);
    list[0] = data;
    console.log(list);
    let indexOfItem = userList.findIndex((item) => item.userId === data.userId);
    const allList = [...userList];
    allList[indexOfItem] = list[0];
    setUserList(allList);
    hideModalHandler();
  };

  // JSX START
  return (
    <Fragment>
      <div className={styles.app__container}>
        {userList.map((item) => {
          return (
            <Card
              key={item.userId}
              user={item}
              deleteHandler={deleteHandler}
              favoriteHandler={favoriteHandler}
              showModalHandler={showModalHandler}
            />
          );
        })}
      </div>
      {showModal && (
        <EditModal
          hideModalHandler={hideModalHandler}
          showUser={showUser}
          updateDataHandler={updateDataHandler}
        />
      )}
    </Fragment>
  );
};

export default App;
