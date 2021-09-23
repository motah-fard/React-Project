import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../services";

function Comment (props) {
    // console.log(props.comment.fields);
    const comment = props.comment.fields.comment;
    const username = props.comment.fields.username;
    const id = props.comment.fields.id;
    const minutes = props.comment.fields.minutes;
    const caloriePerHour = props.comment.fields.caloriePerHour;
    const imageURL = props.comment.fields.imageURL;

    const removeComment = async () => {
        const URL = `${baseURL}/${props.comment.id}`;
        await axios.delete(URL, config);
        props.setToggleFetch((curr) => !curr);
      }

    return (
        <div>
            <h2>{username}</h2>
            <img src={imageURL}/>
            <h2>{comment}</h2>

            {/* <h3>{id}</h3> */}
            <h4>{minutes}</h4>
            <h4>{caloriePerHour}</h4>
            <button onClick={removeComment}>REMOVE COMMENT</button>
            <Link to={`/edit/${props.comment.id}`}>
                <button>EDIT</button>
            </Link>
            
        </div>
    );
};

export default Comment;











