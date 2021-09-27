import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import GroupedBarChart from "./GroupedBarChart"

function OneUser(props) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [calorieBurned, setCalorieBurned] = useState(0);
  const [calorieEarned, setCalorieEarned] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [activity, setActivity] = useState("");
  const params = useParams();
  useEffect(() => {
    if (params) {
      const comment = props.comments.find(
        (comment) => comment.fields.username === params.username
      );
      if (comment) {
        setUsername(comment.fields.username);
        setComment(comment.fields.comment);
        setActivity(comment.fields.activity);
        setImageURL(comment.fields.imageURL);
        setCalorieBurned(comment.fields.calorieBurned);
        setCalorieEarned(comment.fields.calorieEarned);
      }
    }
  }, [params.username, props.comments]);

  return (
    <div className="oneUser">

<div className="comment">
      <div className="info">
          <img src={imageURL} className="profilePic" />
        <div className="username">
          <p>{username}</p>
        </div>
      </div>
      <hr />


      <div className="text">
        <p>{comment}</p>
      </div>
      <hr />
      <div className="activities">
        <p>Activity</p>

        {/* <h3>{id}</h3> */}
        <p>Calorie Burned </p>

        <p>Calorie Earned </p>
      </div>
      <div className="activity">
        <p>{activity}</p>

        {/* <h3>{id}</h3> */}
        <p>{calorieBurned} Kcal</p>
        <p>{calorieEarned} Kcal</p>
      </div>
      <hr />
      <GroupedBarChart calorieBurned={calorieBurned} calorieEarned={calorieEarned}/>
    </div>

    </div>
  );
  // }
}

export default OneUser;
