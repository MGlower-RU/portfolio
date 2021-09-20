import { Route, Switch, Redirect } from 'react-router-dom';

export default function Routing() {
  return (
    <Switch>
      <Route path='/about'>
        <h1>About me page</h1>
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