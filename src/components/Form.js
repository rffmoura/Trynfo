import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hastrunfo
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form className="form">
          <h2>Adicionar nova carta</h2>

          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              value={ cardName }
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              value={ cardDescription }
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Atributo 1
            <input
              type="number"
              name="attr1"
              value={ cardAttr1 }
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            Atributo 2
            <input
              type="number"
              name="attr2"
              value={ cardAttr2 }
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            Atributo 3
            <input
              type="number"
              name="attr3"
              value={ cardAttr3 }
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              value={ cardImage }
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              name="rare"
              value={ cardRare }
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trunfo
            <input
              type="checkbox"
              name="trunfo"
              checked={ cardTrunfo }
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
          </label>

          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>

      </div>
    );
  }
}

Form.propTypes = PropTypes.shape({
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}).isRequired;

export default Form;
