import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav"
import Comment from './components/Comment'
import Form from './components/Form'
import { baseURL, config, secURL, secConfig } from "./services";
import './App.css';
import Nutrition from "./components/Nutrition"
import Search from "./components/Search"
import { Component } from "react";


function App() {
  const [comments, setComments] = useState([]);
  const [calories, setCalories] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

 

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(baseURL, config);
      setComments(response.data.records);
      // console.log(comments);
    }
    getComments();
  }, [toggleFetch]);

 
  return (
    <div className="App">
      <Nav />
      <Route path="/NutritionsAndCalories">
      <Form comments={comments}  setToggleFetch={setToggleFetch} />
        <Search/>
        <Nutrition/>
      </Route>
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