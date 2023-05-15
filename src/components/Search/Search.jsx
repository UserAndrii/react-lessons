import { Component } from 'react';

class Search extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <>
        <form
          className="d-flex mt-2"
          role="search"
          onSubmit={this.handleSubmit}
        >
          <input
            className="form-control me-2 "
            type="search"
            aria-label="Search"
            onChange={this.handleChange}
            value={this.state.value}
            placeholder="Please enter a keyword and we will find news for you :)"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
