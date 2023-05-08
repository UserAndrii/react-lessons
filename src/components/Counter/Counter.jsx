import { Component } from 'react';
import Value from './components/Value';
import Button from './components/Button';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = { total: this.props.initialValue };

  handleClickIncrement = () =>
    this.setState(prev => ({
      total: prev.total + 1,
    }));

  handleClickDecrement = () =>
    this.setState(prev => ({
      total: prev.total - 1,
    }));

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <div className="card bg-dark text-white " style={{ width: '600px' }}>
          <div className="card-body">
            <Value value={this.state.total} />
            <div className="d-flex justify-content-center px-5">
              <Button
                user={{ name: 'Alex' }}
                handleClick={this.handleClickIncrement}
                class="btn-outline-success me-5"
              >
                <i className="bi bi-plus-circle fs-1"></i>
              </Button>
              <Button
                user={{ name: 'Alex' }}
                handleClick={this.handleClickDecrement}
                class="btn-outline-danger ms-5"
              >
                <i className="bi bi-dash-circle fs-1"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
