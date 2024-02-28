import React, { Fragment, useState } from "react";
import styles from "./EditModal.module.css";

const EditModal = ({ hideModalHandler, showUser, updateDataHandler }) => {
  const [userData, setUserData] = useState({
    userName: showUser.userName,
    email: showUser.email,
    phone: showUser.phone,
    domain: showUser.domain,
    userId: showUser.userId,
    isFavorite: showUser.isFavorite,
    avatar: showUser.avatar,
  });

  console.log("userData", userData);

  // INPUT CHANGE HANDLER
  const inputChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let item = { ...userData, [name]: value };
    setUserData(item);
  };

  // JSX START
  return (
    <Fragment>
      <div className={styles.modal_container}>
        <div className={styles.modal_content}>
          <div className={styles.modal_heading}>
            <h3>Basic Modal</h3>
            <span onClick={hideModalHandler}>X</span>
          </div>
          <div className={styles.form_container}>
            <div className={styles.input_container}>
              <label className={styles.input_label}>
                <span>*</span> Name:
              </label>
              <input
                type="text"
                name="userName"
                className={styles.user_name_input}
                value={userData.userName}
                required
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={styles.input_container}>
              <label>
                <span>*</span> Email:
              </label>
              <input
                type="text"
                name="email"
                className={styles.user_name_input}
                value={userData.email}
                required
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={styles.input_container}>
              <label>
                {" "}
                <span>*</span> Phone:
              </label>
              <input
                type="text"
                name="phone"
                className={styles.user_name_input}
                value={userData.phone}
                required
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={styles.input_container}>
              <label>
                {" "}
                <span>*</span> Website:
              </label>
              <input
                type="text"
                name="domain"
                className={styles.user_name_input}
                value={userData.domain}
                required
                onChange={(e) => inputChangeHandler(e)}
              />
            </div>
            <div className={styles.btn_container}>
              <button onClick={hideModalHandler}>Cancel</button>
              <button onClick={() => updateDataHandler(userData)}>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditModal;
