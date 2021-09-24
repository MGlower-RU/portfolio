import React, { lazy } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

const Introduction = lazy(() => import('../pages/Introduction'));
const Skills = lazy(() => import('../pages/Skills'));
const Projects = lazy(() => import('../pages/Projects'));
const Project = lazy(() => import('../pages/Project'));

export default function Routing() {
  return (
    <Switch>
      <Route path='/about'>
        <Introduction />
      </Route>
      <Route path='/skills'>
        <Skills />
      </Route>
      <Route path='/projects/:id'>
        <Project />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
      <Route exact path='/'>
        <Redirect to='/about' />
      </Route>
    </Switch>
  )
}