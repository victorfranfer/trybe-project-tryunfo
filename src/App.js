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
    this.setState({ [name]: value }, this.validadeSaveButton);
  }

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

  validadeSaveButton = () => {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
      cardRare,
    } = this.state;
    const atributeMaxValue = 90;
    const sumTotalValueAtr = 210;

    const atribute1 = Number(cardAttr1);
    const atribute2 = Number(cardAttr2);
    const atribute3 = Number(cardAttr3);

    const aux1 = ((atribute1 >= 0) && (atribute1 <= atributeMaxValue));
    const aux2 = ((atribute2 >= 0) && (atribute2 <= atributeMaxValue));
    const aux3 = ((atribute3 >= 0) && (atribute3 <= atributeMaxValue));
    const aux4 = ((atribute1 + atribute2 + atribute3) <= sumTotalValueAtr);
    const aux5 = (
      (cardName.length > 0)
       && (cardDescription.length > 0)
       && (cardImage.length > 0)
       && (cardRare.length > 0)
    );
    if (aux1 && aux2 && aux3 && aux4 && aux5) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    return this.setState({
      isSaveButtonDisabled: true,
    });
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
      isSaveButtonDisabled,
      // disableFilter,
      // rareFilter,
    } = this.state;
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
