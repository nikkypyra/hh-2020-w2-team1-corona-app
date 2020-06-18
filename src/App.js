import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './Footer'
import Global from './Global'
import GlobalStyles from './GlobalStyles'
import Header from './Header'
import Home from './Home'
import Recovery from './Recovery'
import useCountryData from './useCountryData'

export default function App() {
  const { countryData } = useCountryData()

  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/global">
          <Global countryData={countryData} />
        </Route>
        <Route path="/recovery">
          <Recovery countryData={countryData} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}
