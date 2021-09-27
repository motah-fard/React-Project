import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

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
      <h3>{username}</h3>
    </div>
  );
  // }
}

export default OneUser;
