import React from 'react';
import {
  Container, 
  Row
} from 'reactstrap';

const screenHeight = window.innerHeight;

const Home = () => {
  return (
    <React.Fragment>
      <div style={{...styles.window, alignItems: 'center', marginTop: 100}}>
        <h1>yeehaw</h1>
        <i style={styles.icon} className="fa fa-chevron-down fa-2x"></i>
      </div>
      <div style={styles.window}>
        <Container>
          <Row>
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

const styles = {
  window: {
    height: screenHeight, 
    display: 'flex',
    flexDirection: 'column'
  }, 
  icon: {
    alignSelf: 'center',
    position: 'absolute', 
    bottom: 50
  }
}

export default Home;