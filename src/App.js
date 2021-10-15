import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
      isSaveButtonDisabled: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isSaveButtonDisabled = this.isSaveButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const isValue = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: isValue }, this.isSaveButtonDisabled);
  }

  onSaveButtonClick() {
    const defaultState = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: '',
      trunfo: false,
      isSaveButtonDisabled: true,
    };
    this.setState(defaultState);
  }

  isSaveButtonDisabled() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
    } = this.state;

    const maxValue = 210;
    const maxValueAttr = 90;

    const validate = [name, description, image, rare]
      .every((value) => value !== '');

    const sumAttr = Number(attr1) + Number(attr2) + Number(attr3);
    const validateSum = sumAttr <= maxValue;
    const checkAttr = [Number(attr1), Number(attr2), Number(attr3)]
      .some((card) => card > maxValueAttr || card < 0);

    if (validate && validateSum && !checkAttr) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      trunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </div>
    );
  }
}

export default App;
