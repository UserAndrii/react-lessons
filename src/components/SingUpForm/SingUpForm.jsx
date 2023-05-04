import { Component } from 'react';
import { Form, Label, Input } from './SingUpForm.styled';

// Виносимо об'єкт із примітивами в константу, щоб було зручно скидати.
// Не можна використовувати, якщо в якійсь властивості стану зберігається складний тип.
const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
  agreed: false,
  gender: null,
  age: '',
};

export class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleCheck = ({ target: { checked } }) => {
    this.setState({
      agreed: checked,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { login, email, password, agreed, gender, age } = this.state;
    console.log(
      `Login: ${login}, Email: ${email}, Password: ${password}, Agreed: ${agreed}, Gender: ${gender}, Age: ${age}`
    );
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password, agreed, gender, age } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Email
          <Input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Agree to terms
          <Input type="checkbox" checked={agreed} onChange={this.handleCheck} />
        </Label>

        <section style={{ textAlign: 'center' }}>
          <h2>Choose your gender</h2>
          <Label style={{ marginRight: '10px' }}>
            Male
            <Input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
            />
          </Label>
          <Label style={{ marginRight: '10px' }}>
            Female
            <Input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            Choose your age
            <select
              name="age"
              value={age}
              onChange={this.handleChange}
              style={{ marginLeft: '10px' }}
            >
              <option value="" disabled>
                ...
              </option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </Label>
        </section>

        <button type="submit" disabled={!agreed}>
          Sign up as {login}
        </button>
      </Form>
    );
  }
}
