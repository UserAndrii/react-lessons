import { Component } from 'react';
import Value from './components/Value';
import Controls from './components/Controls';

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
            <Controls
              onIncrement={this.handleClickIncrement}
              onDecrement={this.handleClickDecrement}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
