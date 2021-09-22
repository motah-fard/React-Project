import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

function Form (props) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [caloriePerHour, setCaloriePerHour] = useState(1);

    const history = useHistory();
    const params = useParams();
    useEffect(() => {
        if (params.id) {
          const comment = props.comments.find((comment) => comment.id === params.id);
          if (comment) {
            setUsername(comment.fields.username);
            setComment(comment.fields.comment);
            setCaloriePerHour(comment.fields.caloriePerHour);
          }
        }
      }, [params.id, props.characters]);


      const handleSubmit = async (e) => {
        e.preventDefault();
        const newComment = {
          comment,
          username,
          caloriePerHour,
        }
        // make a POST request to our endpoint (same as GET), pass our newCharacter as the data, and pass our config to allow ourselves entry into the database
        if (params.id) {
          const URL = `${baseURL}/${params.id}`;
          await axios.put(URL, { fields: newComment }, config);
        } else {
          await axios.post(baseURL, { fields: newComment }, config);
        }
        // trigger our useEffect
        props.setToggleFetch((curr) => !curr);
        history.push("/");
      }
    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          id="username"
          type="text"
          required
          autoComplete="off"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Edit the comment</button>
    </form>
    );
};

export default Form;