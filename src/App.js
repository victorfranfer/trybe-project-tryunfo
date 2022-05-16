import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    deck: [],
  }

  onInputChange = ({ target }) => {
    console.log(target.name);
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  // onInputChange(event) {
  //   const { value } = event.target;
  //   const { name } = event.target;
  //   this.setState({ [name]: value });
  // }

  // onSaveButtonClick = () => {
  //   const newCards = { ...this.state };
  //   deck.push(newCards);
  //   delete newCards.deck;
  // }

  saveButtonClick = () => {
    this.setState(({
      cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, deck }) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      deck: [...deck, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
        deck,
      }],
    }));
    const { cardTrunfo } = this.state;
    if (cardTrunfo) this.setState(() => ({ hasTrunfo: true }));
  };

  isEmpty() {
    const { name, cardDescription, cardImage, cardRare } = this.state;
    if (name === '' || cardDescription === '' || cardImage === '' || cardRare === '') {
      return true;
    }
    return false;
  }

  isBig() {
    const { attr1, attr2, attr3 } = this.state;
    const cAttr1 = parseInt(attr1, 10);
    const cAttr2 = parseInt(attr2, 10);
    const cAttr3 = parseInt(attr3, 10);
    const max = 90;
    const min = 0;
    const someMax = 210;

    if (cAttr1 > max
        || cAttr1 < min
        || cAttr2 > max
        || cAttr2 < min
        || cAttr3 > max
        || cAttr3 < min) {
      return true;
    } if ((cAttr1 + cAttr2 + cAttr3) > someMax) {
      return true;
    }
    return false;
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      // disableFilter,
      // rareFilter,
    } = this.state;
    const isSaveButtonDisabled = this.isEmpty() || this.isBig();
    return (
      <div>
        <h1>Super Triumph</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
