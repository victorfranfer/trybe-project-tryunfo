import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    attack: '',
    defense: '',
    speed: '',
    rarity: 'normal',
    superTriumph: false,
    isSaveButtonDisabled: true,
  }

  onInputChange(event) {
    const { target: { value, name } } = event;
    const elementValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({ isSaveButtonDisabled: false });
    this.setState({ [name]: elementValue });
  }

  onSaveButtonClick = () => {
    const newCards = { ...this.state };
    delete newCards.cards;
  }

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
