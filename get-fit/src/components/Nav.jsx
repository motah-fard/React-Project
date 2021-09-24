import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h3>Welcome to GetFit!</h3>
      <Link to="/">
         Home
      </Link>
      
      <Link to="/new">
        Add a new comment
      </Link>
      <Link to="/NutritionsAndCalories">
        search
      </Link>
    </nav>
  )
}