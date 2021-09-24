import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form (props) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [calorieBurned, setCalorieBurned] = useState(0);
    const [calorieEarned, setCalorieEarned] = useState(0);
    const [imageURL, setImageURL] = useState("");
    const [activity, setActivity] = useState("");
    const history = useHistory();
    const params = useParams();
    useEffect(() => {
        if (params.id) {
          const comment = props.comments.find((comment) => comment.id === params.id);
          if (comment) {
            setUsername(comment.fields.username);
            setComment(comment.fields.comment);
            setActivity(comment.fields.activity);
            setImageURL(comment.fields.imageURL);
            setCalorieBurned(comment.fields.calorieBurned);
            setCalorieEarned(comment.fields.calorieEarned);

          }
        }
      }, [params.id, props.characters]);
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
          comment,
          username,
          calorieBurned,
          imageURL,
          activity,
          calorieEarned,

        }
        if (params.id) {
          const URL = `${baseURL}/${params.id}`;
          await axios.put(URL, { fields: newComment }, config);
        } else {
          await axios.post(baseURL, { fields: newComment }, config);
        }
        props.setToggleFetch((curr) => !curr);
        history.push("/");
      }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <label htmlFor="activity">Type of Activity:</label>
        <input
          id="activity"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <label htmlFor="imageURL">Image URL:</label>
        <input
          id="imageURL"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <label htmlFor="calorieBurned">Calorie Burned:</label>
        <input
          id="calorieBurned"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={calorieBurned}
          onChange={(e) => setCalorieBurned(e.target.value)}
        />
        <label htmlFor="calorieEarned">Calorie Earned:</label>
        <input
          id="calorieEarned"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={calorieEarned}
          onChange={(e) => setCalorieEarned(e.target.value)}
        />
        <button type="submit">Edit the comment</button>
    </form>
    );
};

export default Form;