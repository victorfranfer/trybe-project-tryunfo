import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, isSaveButtonDisabled, onSaveButtonClick,
      onInputChange } = this.props;
    return (
      <form>
        <h2>Add new card</h2>
        <div>
          <label htmlFor="name-input">
            Name
            <input
              type="text"
              name="cardName"
              onChange={ onInputChange }
              value={ cardName }
              id="name-input"
              data-testid="name-input"
            />
          </label>
        </div>
        <div>
          <label htmlFor="description-input">
            Description
            <textarea
              name="cardDescription"
              id="description-input"
              cols="35"
              rows="5"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr1-input">
            Attr1
            <input
              name="cardAttr1"
              max="90"
              type="number"
              id="attr1-input"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr2-input">
            Attr2
            <input
              name="cardAttr2"
              max="90"
              type="number"
              id="attr2-input"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="attr3-input">
            Attr3
            <input
              name="cardAttr3"
              max="90"
              type="number"
              id="attr3-input"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="image-input">
            Image
            <input
              name="cardImage"
              type="text"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="rare-input">
            Rarity
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Rare</option>
              <option value="muito raro">Very Rare</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="trunfo-input">
            Super Triumph
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <button
            type="button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
