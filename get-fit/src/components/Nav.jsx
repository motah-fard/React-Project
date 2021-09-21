import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">
          <img className= "zoom" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9XIM9hihz3XEAdgVQB-3BDpGPzyz17YAJfUypQdg4llnmVCp89IqMiwIYIaZsNPBrJ8&usqp=CAU' alt='Home'/>
      </Link>
      <h3>Welcome to GetFit!</h3>
      <Link to="/new">
          <img className= "zoom" src='https://cdn3.vectorstock.com/i/1000x1000/12/27/green-man-exercise-logo-icon-vector-7251227.jpg' alt="Add a new comment"/>
      </Link>
    </nav>
  )
}