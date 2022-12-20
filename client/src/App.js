import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from './components/Welcome'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import MainBank from './components/MainBank'
import UserEdit from './components/UserEdit'
import MemoryNew from './components/MemoryNew'
import MemoryEdit from './components/MemoryEdit'
import MemoryDetails from './components/MemoryDetails'
import Search from './components/Search'

function App() {
  // const [count, setCount] = useState(0);
  const [errors, setErrors] = useState([])
  const [memories, setMemories] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //   fetch("/visits")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  useEffect(() => {
    fetch('/authorized_user')
      .then((res) => {
        if (res.ok) {
          res.json()
            .then((user) => {
              updateUser(user)
              fetchMemories()
            })
        }
      })
  }, [])

  const updateUser = (user) => setCurrentUser(user)

  const fetchMemories = () => {
    fetch('/memories')
      .then(res => {
        if (res.ok) {
          res.json()
            .then(setMemories)
        } else {
          res.json()
            .then(data => setErrors(data.error))
        }
      })
  }

  // if(errors) return <h1>Sorry - {errors}</h1>

  // --------------------------- HANDLER FUNCTIONS TO CONTROL MEMORY CRUD --------------------------
  const addMemory = (newMemory) => {
    setMemories((memories) => [...memories, newMemory])
  }

  const editMemory = (editedMemory) => {
    const editedMemories = memories.map((originalMemory) => {
      if (originalMemory.id === editedMemory.id) {
        return editedMemory;
      } else {
        return originalMemory;
      }
    })
    setMemories(editedMemories)
  }

  const deleteMemory = (deletedMemory) => {
    const updatedMemories = memories.filter(
      (memory) => memory.id !== deletedMemory.id
    );
    setMemories(updatedMemories)
  }

  // ------------------------------------ UTILITIES -------------------------------------------------
  //SEARCH HANDLER
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // ------------------------------------ RETURNED JSX WITH APP ROUTES ------------------------------
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Switch>
            {/* <Route path="/tom">
              <img src='https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg' className="App-logo" alt="Oops! ¯\_(ツ)_/¯" />
              <h1>Tom's Route!</h1>
            </Route> */}
            <Route exact path="/">
              <Welcome currentUser={currentUser} />
            </Route>
            <Route path="/login">
              <LogIn updateUser={updateUser} />
            </Route>
            <Route path="/signup">
              <SignUp updateUser={updateUser} />
            </Route>
            <Route path="/bank">
              <Search search={search} onSearch={handleSearch} />
              <MainBank
                updateUser={updateUser}
                currentUser={currentUser}
                memories={memories}
                search={search}
              />
            </Route>
            <Route path='/profile/:id/edit'>
              <UserEdit />
            </Route>
            <Route path='/memories/new'>
              <MemoryNew addMemory={addMemory} currentUser={currentUser} />
            </Route>
            <Route path='/memories/:id/edit'>
              <MemoryEdit editMemory={editMemory} />
            </Route>
            <Route path='/memories/:id'>
              <MemoryDetails deleteMemory={deleteMemory} currentUser={currentUser} />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;