import Header from "./components/Header/Header";

import Tasks from "./components/Tasks/Tasks";

import { Routes, Route } from "react-router-dom";



import { useState } from "react";

import MainMenu from "./components/MainMenu/MainMenu.js";

import Form from "./components/Form/Form.js";

import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage.js";
import HelpPage from "./components/pages/HelpPage/HelpPage.js";
import IntroductionPage from "./components/pages/HelpPage/IntroductionPage.js";
import AddingTask from "./components/pages/HelpPage/AddingTask.js";
import RemovingTask from "./components/pages/HelpPage/RemovingTask.js"
import ChangingStatus from "./components/pages/HelpPage/ChangingStatus.js";

import { useEffect } from "react";

import * as database from './database'

function App() {
  const [tasks, setTasks] = useState([]);
//Load the database
useEffect(()=>{

 
//receiving the promesse to extract the information
  database.load()
  .then((result)=>{
    
    setTasks(result)
  })
  .catch((error)=>{
    console.log('Load error',error)
  });
},[])


  

  return (
    <div className="App">
      <Header />
      <MainMenu />
      <Routes>
        <Route path="/" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
        <Route path="/add" element={<Form />} />

        <Route path="/help" element={<HelpPage />}>
          <Route path="" element={<IntroductionPage/>} />
          <Route path="adding-task" element={<AddingTask />} />
          <Route path="removing-task" element={<RemovingTask/>} />
          <Route path="changing-status" element={<ChangingStatus/>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
