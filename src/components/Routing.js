import React, { lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

const Introduction = lazy(() => import('../pages/Introduction'));
const Skills = lazy(() => import('../pages/Skills'));

export default function Routing() {
  return (
    <Switch>
      <Route path='/about'>
        <Introduction />
      </Route>
      <Route path='/skills'>
        <Skills />
      </Route>
      <Route path='/projects'>
        <h1>My projects</h1>
      </Route>
      <Route path='/'>
        <Redirect to='/about' />
      </Route>
    </Switch>
  )
}