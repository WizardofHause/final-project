import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from './components/Welcome'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import MainBank from './components/MainBank'
import ProfileEdit from './components/ProfileEdit'
import MemoryNew from './components/MemoryNew'
import MemoryEdit from './components/MemoryEdit'
import MemoryDetails from './components/MemoryDetails'
import Search from './components/Search'
import Navigation from './components/Navigation'
import Profile from './components/Profile'

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


  // ----------------------- USER AUTH -------------------------------
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

  // --------------------------- MEMORY CRUD --------------------------
  // READ FETCH:
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
  // CREATE HANDLER:
  const addMemory = (newMemory) => {
    setMemories((memories) => [...memories, newMemory])
  }
  // UPDATE HANDLER:
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
  // DESTROY HANDLER:
  const deleteMemory = (deletedMemory) => {
    const updatedMemories = memories.filter(
      (memory) => memory.id !== deletedMemory.id
    );
    setMemories(updatedMemories)
  }

  // ------------------------------------ UTIILITIES -------------------------------------------------
  // SEARCH
  const handleSearch = (e) => setSearch(e.target.value)

  // USER STATE
  const updateUser = (user) => setCurrentUser(user)

  // SORT MEMORIES: NEWEST..OLDEST 
  const sortedMemories = (memories.slice(0).sort((a, b) => a.date.localeCompare(b.date))).reverse()

  // ------------------------------------ RETURNED JSX & ROUTES ------------------------------
  return (
    <BrowserRouter>
      {currentUser ?
        // vvv--------- ROUTES FOR LOGGED IN USER
        <>
          <Navigation updateUser={updateUser} currentUser={currentUser} />
          <Switch>
            <Route exact path="/">
              <Welcome currentUser={currentUser} />
            </Route>
            <Route path="/login">
              <LogIn updateUser={updateUser} fetchMemories={fetchMemories} />
            </Route>
            <Route path="/signup">
              <SignUp updateUser={updateUser} fetchMemories={fetchMemories} />
            </Route>
            <Route path="/bank">
              <Search search={search} onSearch={handleSearch} />
              <MainBank
                currentUser={currentUser}
                sortedMemories={sortedMemories}
                search={search}
              />
            </Route>
            <Route path='/profile'>
              <Profile currentUser={currentUser}/>
            </Route>
            <Route path='/profile/edit'>
              <ProfileEdit currentUser={currentUser}/>
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
        </>
        :
        // vvv--------- ROUTES FOR GUEST
        <Switch>
          <Route exact path="/">
            <Welcome currentUser={currentUser} />
          </Route>
          <Route path="/login">
            <LogIn updateUser={updateUser} fetchMemories={fetchMemories} />
          </Route>
          <Route path="/signup">
            <SignUp updateUser={updateUser} fetchMemories={fetchMemories} />
          </Route>
        </Switch>
      }
    </BrowserRouter>
  );
}

export default App;