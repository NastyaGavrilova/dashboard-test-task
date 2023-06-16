import React from "react";
import Avatar from "../../assets/images/avatar.png";
import "./_userInfo.scss";
const User = () => {
  return (
    <div className="user-info">
      <img className="user-info__avatar" src={Avatar} alt="avatar"></img>
      <div className="user-info__description">
        <h5 className="user-info__name">Evano</h5>
        <p className="user-info__position">Project Manager</p>
      </div>
    </div>
  );
};

export default User;
