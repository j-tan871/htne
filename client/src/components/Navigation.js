import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Button
} from 'reactstrap';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Group from '../pages/Group';
import FindGroup from '../pages/FindGroup';
import Profile from '../pages/Profile';
import Shop from '../pages/Shop';
import logo from '../logo.JPG';

const Navigation = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar
          className="navbar-horizontal navbar-dark bg-#ffffff"
          expand="lg"
        >
          <Container>
            <NavbarBrand onClick={e => e.preventDefault()}>
              <Link to="/" style={styles.navLink}><img alt="logo" src={logo} style={styles.img}/></Link>
            </NavbarBrand>
            <Nav className="ml-lg-auto">
              <NavLink><Link to="/groups" style={styles.navLink}>My Group</Link></NavLink>
              <NavLink><Link to="/findGroups" style={styles.navLink}>Find Groups</Link></NavLink>
              <NavLink><Link to="/shop" style={styles.navLink}>Shop</Link></NavLink>
              <NavLink><Link to="/profile" style={styles.navLink}>Profile</Link></NavLink>
            </Nav>
            <Link to="/login">
              <Button color="primary" type="button" className="ml-3">Login</Button>
            </Link>
          </Container>
        </Navbar>
        <Switch>
          <Route path="/groups">
            <Group />
          </Route>
          <Route path="/findGroups">
            <FindGroup />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

const styles = {
  navLink: {
    color: '#525f7f',
    fontSize: 16
},
  img:{
    height:'110px',
    width:'auto'
  }
}

export default Navigation;
