import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { name, description, attack, defense, speed, image, rarity, superTriumph,
      isSaveButtonDisabled, onSaveButtonClick, onInputChange } = this.props;
    return (
      <form>
        <label htmlFor="name-input">
          Name
          <input
            type="text"
            name="name"
            onChange={ onInputChange }
            value={ name }
            id="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          Description
          <textarea
            name="description"
            id="description-input"
            value={ description }
            data-testid="description-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr1-input">
          Attack
          <input
            name="attack"
            type="number"
            id="attr1-input"
            value={ attack }
            data-testid="attr1-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2-input">
          Defense
          <input
            name="defense"
            type="number"
            id="attr2-input"
            value={ defense }
            data-testid="attr2-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3-input">
          Speed
          <input
            name="speed"
            type="number"
            id="attr3-input"
            value={ speed }
            data-testid="attr3-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-input">
          Image
          <input
            name="image"
            type="text"
            value={ image }
            data-testid="image-input"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rare-input">
          Rarity
          <select
            name="rarity"
            type="select"
            data-testid="rare-input"
            value={ rarity }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Rare</option>
            <option value="muito raro">Very Rare</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          Super Triumph
          <input
            name="superTriumph"
            type="checkbox"
            data-testid="trunfo-input"
            checked={ superTriumph }
            onChange={ onInputChange }
          />
        </label>
        <button
          type="button"
          name="savebtn"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  attack: PropTypes.string,
  defense: PropTypes.string,
  speed: PropTypes.string,
  image: PropTypes.string,
  rarity: PropTypes.string,
  superTriumph: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
