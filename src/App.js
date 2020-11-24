import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ItemsContainer from "./views/ItemsContainer";
import ItemDetailContainer from "./views/ItemDetailContainer";
import { SearchProvider } from './context/SearchContext';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {

  return (
    <div className="search-app">
      <BrowserRouter>
          <SearchProvider>
                <Navbar/>
                      <Switch>
                            <Home>
                              <Route exact path="/items" component={ItemsContainer}/>
                              <Route exact path="/items/:id" component={ItemDetailContainer}/>
                            </Home>
                      </Switch>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

