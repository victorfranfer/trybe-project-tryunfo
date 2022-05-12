import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  // state = {
  //   name: '',
  //   description: '',
  //   attack: '',
  //   defense: '',
  //   speed: '',
  //   rarity: '',
  //   superTriumph: false,
  // }

  handleChange(event) {
    const { target: { value, name } } = event;
    this.setState({ [name]: value });
  }

  // handleRarityChange(event) {
  //   this.setState({ [name]: optionState });
  // }

  // handleSuperTriumph(event) {
  //   let { target: { value } } = event;
  //   const { target: { name } } = event;
  //   value = false ? this.setState({ [name]: true }) : this.setState({ [name]: false });
  // }

  render() {
    return (
      <div>
        <h1>Super Triumph</h1>
        <p>Hello, World.</p>
        <Form />
      </div>
    );
  }
}

export default App;
