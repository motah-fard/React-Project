import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Comment (props) {
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
      }

    return (
        <div>
            <h2>{username}</h2>
                <Link to ={`/${username}`}>
                    <img src={imageURL}/>
                </Link>
            <h2>{comment}</h2>
            <h2>{activity}</h2>

            {/* <h3>{id}</h3> */}
            <h4>{calorieBurned} Kcal</h4>
            <h4>{calorieEarned} Kcal</h4>
            <button onClick={removeComment}>REMOVE COMMENT</button>
            <Link to={`/edit/${props.comment.id}`}>
                <button>EDIT</button>
            </Link>
            
        </div>
    );
};

export default Comment;











