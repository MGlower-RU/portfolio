import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Introduction from '../pages/Introduction';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Project from '../pages/Project';

export default function Routing() {
  const location = useLocation()

  return (
    <TransitionGroup>
    <CSSTransition
      timeout={300}
      classNames='page-fade'
      key={location.key}
    >
    <Switch location={location}>
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
      <Route path='/'>
        <Redirect to='/about' />
      </Route>
    </Switch>
    </CSSTransition>
    </TransitionGroup>
    // <Switch>
    //   <Route path='/about'>
    //     <Introduction />
    //   </Route>
    //   <Route path='/skills'>
    //     <Skills />
    //   </Route>
    //   <Route path='/projects/:id'>
    //     <Project />
    //   </Route>
    //   <Route path='/projects'>
    //     <Projects />
    //   </Route>
    //   <Route path='/'>
    //     <Redirect to='/about' />
    //   </Route>
    // </Switch>
  )
}