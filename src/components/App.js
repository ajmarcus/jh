import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return (
      <Button onClick={() => this.setState({ liked: true })}>
        Submit
      </Button>
    );
  }
}

export default App;
