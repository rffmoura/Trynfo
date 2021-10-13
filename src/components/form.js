import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name">
            Nome
            <input type="text" name="name" data-testid="name-input" />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea name="description" data-testid="description-input" />
          </label>

          <label htmlFor="att1">
            Atributo 1
            <input type="number" name="att1" data-testid="attr1-input" />
          </label>

          <label htmlFor="att2">
            Atributo 2
            <input type="number" name="att2" data-testid="attr2-input" />
          </label>

          <label htmlFor="att3">
            Atributo 3
            <input type="number" name="att3" data-testid="attr3-input" />
          </label>

          <label htmlFor="image">
            Imagem
            <input type="text" name="image" data-testid="image-input" />
          </label>

          <label htmlFor="rare">
            Raridade
            <select name="name" data-testid="rare-input">
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trunfo
            <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
          </label>

          <button type="submit" data-testid="save-button">Salvar</button>
        </form>

      </div>
    );
  }
}

export default Form;
