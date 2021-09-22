import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav"
import Comment from './components/Comment'
import Form from './components/Form'
import { baseURL, config } from "./services";
import './App.css';

function App() {
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(baseURL, config);
      setComments(response.data.records);
      console.log(comments);
    }
    getComments();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <main>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} setToggleFetch={setToggleFetch} />
          ))}
        </main>
      </Route>
      <Route path="/new">
      <Form comments={comments}  setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
      <Form comments={comments}  setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;