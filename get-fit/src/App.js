import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Comment from "./components/Comment";
import Form from "./components/Form";
import { baseURL, config } from "./services";
import "./App.css";
import OneUser from "./components/OneUser";
import AboutMe from "./components/AboutMe";
import { Component } from "react";
import ContactMe from "./components/ContactMe";


function App() {
  const [comments, setComments] = useState([]);
  const [calories, setCalories] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const menuWrap = document.querySelector(".bm-menu-wrap");
    if (menuWrap) {
      menuWrap.setAttribute("aria-hidden", true);
    }
  }, []);

  useEffect(() => {
    const getComments = async () => {
      const response = await axios.get(baseURL, config);
      setComments(response.data.records);
      // console.log(comments);
    };
    getComments();
  }, [toggleFetch]);

  return (
    <div className="App" id="App">
      <Nav pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <Route path="/NutritionsAndCalories">
          <Form
            comments={comments}
            setToggleFetch={setToggleFetch}
            className="nutrition"
          />
        </Route>
        <Route exact path="/">
          <main className="timeline">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                setToggleFetch={setToggleFetch}
              />
            ))}
          </main>
        </Route>
        <Route path="/new">
          <Form comments={comments} setToggleFetch={setToggleFetch} />
        
        </Route>
        <Route path="/edit/:id">
          <Form comments={comments} setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/:username">
          <OneUser comments={comments} />
        </Route>
        <Route path='/aboutme'>
          <AboutMe/>
        </Route>
        <Route path='/contact/contactme!'>
          <ContactMe/>
        </Route>
      </div>
    </div>
  );
}

export default App;
