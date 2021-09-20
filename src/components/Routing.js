import { Route, Switch, Redirect } from 'react-router-dom';

import Introduction from '../pages/Introduction'

export default function Routing() {
  return (
    <Switch>
      <Route path='/about'>
        <Introduction />
      </Route>
      <Route path='/skills'>
        <h1>My skill-factor</h1>
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