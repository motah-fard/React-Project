import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Comment(props) {
  // console.log(props.comment.fields);
  const comment = props.comment.fields.comment;
  const username = props.comment.fields.username;
  const activity = props.comment.fields.activity;
  const minutes = props.comment.fields.minutes;
  const calorieBurned = props.comment.fields.calorieBurned;
  const calorieEarned = props.comment.fields.calorieEarned;
  const imageURL = props.comment.fields.imageURL;

  const removeComment = async () => {
    const URL = `${baseURL}/${props.comment.id}`;
    await axios.delete(URL, config);
    props.setToggleFetch((curr) => !curr);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <div className="comment">
      <div className="info">
        <Link to={`/username/${username}`}>
          <img src={imageURL} className="profilePic" />
        </Link>
        <div className="username">
          <p>{username}</p>
        </div>
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
      <div className="text">
        <p>{comment}</p>
      </div>
      <hr />
      <div className="edit-delete-bar">
        <button onClick={removeComment}>REMOVE COMMENT</button>
        <Link to={`/edit/${props.comment.id}`}>
          <button>EDIT</button>
        </Link>
      </div>
    </div>
  );
}

export default Comment;
