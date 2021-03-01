import React from 'react'
import { Route } from 'react-router-dom';
import './App.scss';
import Costs from './components/costs/Costs';
import Stats from './components/stats/Stats';
import Header from './components/header/Header';
import Context, { initialState, reducer } from './state';

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState,)

  return (
    <div className="App">
      <Header />
      <Context.Provider value={{ state, dispatch }}>
        <Route exact path="/costs" render={() => <Costs />} />
        <Route exact path="/stats" render={() => <Stats />} />
      </Context.Provider>
    </div>
  )
}

export default App;
