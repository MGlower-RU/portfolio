import React, { useRef } from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Introduction } from '../pages/Introduction';
import { Skills } from '../pages/Skills';
import { Projects } from '../pages/Projects';
import { Project } from '../pages/Project';

export default function Routing() {
  const location = useLocation()
  const myRef = useRef(null)

  return (
    <TransitionGroup>
    <CSSTransition
      timeout={750}
      classNames='page-fade'
      key={location.key}
      nodeRef={myRef}
      exit={false}
      appear={true}
    >
    <Switch location={location}>
      <Route path='/about'>
        <Introduction ref={myRef} />
      </Route>
      <Route path='/skills'>
        <Skills ref={myRef} />
      </Route>
      <Route path='/projects/:id'>
        <Project ref={myRef} />
      </Route>
      <Route path='/projects'>
        <Projects ref={myRef} />
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