import React from "react";
import "./ProfileCollection.css";
import Profile from "../Profile/Profile";
import user from "../../db/user.json";

const ProfileCollection = () => {
  return (
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
};

export default ProfileCollection;
