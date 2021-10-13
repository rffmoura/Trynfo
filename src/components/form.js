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
      onInputchange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              value={ cardName }
              onChange={ onInputchange }
              data-testid="name-input"
            />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              value={ cardDescription }
              onChange={ onInputchange }
              data-testid="description-input"
            />
          </label>

          <label htmlFor="att1">
            Atributo 1
            <input
              type="number"
              name="att1"
              value={ cardAttr1 }
              onChange={ onInputchange }
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="att2">
            Atributo 2
            <input
              type="number"
              name="att2"
              value={ cardAttr2 }
              onChange={ onInputchange }
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="att3">
            Atributo 3
            <input
              type="number"
              name="att3"
              value={ cardAttr3 }
              onChange={ onInputchange }
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              value={ cardImage }
              onChange={ onInputchange }
              data-testid="image-input"
            />
          </label>

          <label htmlFor="rare">
            Raridade
            <select
              name="name"
              value={ cardRare }
              onChange={ onInputchange }
              data-testid="rare-input"
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
              checked={ cardTrunfo }
              onChange={ onInputchange }
              name="trunfo"
              data-testid="trunfo-input"
            />
          </label>

          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
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
  onInputchange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}).isRequired;

export default Form;
