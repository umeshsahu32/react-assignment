import React, { Fragment } from "react";
import styles from "./Card.module.css";
import {
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGlobal,
  AiFillHeart,
  AiFillDelete,
} from "react-icons/ai";

const Card = ({ user, deleteHandler, favoriteHandler, showModalHandler }) => {
  return (
    <Fragment>
      <div className={styles.card_container}>
        <img src={user.avatar} alt={user.userName} />
        <div className={styles.info_container}>
          <span className={styles.user_name}>{user.userName}</span>
          <div className={styles.info}>
            <span>
              <AiOutlineMail className={styles.icon} />
            </span>
            <span className={styles.icon_text}>{user.email}</span>
          </div>
          <div className={styles.info}>
            <span>
              <AiOutlinePhone className={styles.icon} />
            </span>
            <span className={styles.icon_text}>{user.phone}</span>
          </div>
          <div className={styles.info}>
            <span>
              <AiOutlineGlobal className={styles.icon} />
            </span>
            <span className={styles.icon_text}>{user.domain}</span>
          </div>
        </div>

        <ul className={styles.icon_group}>
          <li>
            <span>
              {user.isFavorite ? (
                <AiFillHeart
                  className={styles.heart_icon}
                  onClick={() => favoriteHandler(user.userId)}
                />
              ) : (
                <AiOutlineHeart
                  className={styles.heart_icon}
                  onClick={() => favoriteHandler(user.userId)}
                />
              )}
            </span>
          </li>
          <li>
            <AiOutlineEdit
              className={styles.delete_icon}
              onClick={() => showModalHandler(user.userId)}
            />
          </li>
          <li>
            <AiFillDelete
              className={styles.delete_icon}
              onClick={() => deleteHandler(user.userId)}
            />
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Card;
