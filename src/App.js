import React, { createContext, useState,useEffect } from "react";
import Movie from "./Components/Home/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Ticket from "./Components/Ticket/Ticket";
import Footer from "./Components/Footer/Footer";
import NoMatch from "./Components/NoMatch/NoMatch";
import './App.css';
import Login from "./Components/Login/Login";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      setLoading(true);
      const timing = setTimeout(() => {
          setLoading(false);
      }, 3000);

      return () => clearTimeout(timing);
  }, []);

  if (loading) {
      return (
        <div className="spinner-border Spinner_align text-align-center" role="status ">
        <span class="visually-hidden">Loading...</span>
      </div>
      );
  }

  return (
  
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
  <Router>
  <Navbar />
  <Switch>
    <Route path="/home">
      <Movie />
    </Route>
    <Route exact path="/">
      <Movie />
    </Route>
    <Route path="/details/:IdMovie">
      <MovieDetails />
    </Route>
    <Route path="/form/:IdMovie">
      <Ticket />
    </Route>
    <Route path="/login">
      <Login />
    </Route>


    <Route path="*">
      <NoMatch />
    </Route>
  </Switch>
  <Footer />
</Router>
</UserContext.Provider>
  
  );
}

export default App;
