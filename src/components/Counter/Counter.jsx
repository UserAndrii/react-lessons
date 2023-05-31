import { useReducer } from 'react';
import Value from './components/Value';
import Button from './components/Button';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }; // розпорошити, на випадок, якщо в state більше одного значення

    case 'decrement':
      return { ...state, count: state.count - action.payload }; // розпорошити, на випадок, якщо в state більше одного значення

    default:
      throw new Error(`Unsuported action type ${action.type}`);
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 100,
  });

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
          <Value value={state.count} />
          <div className="d-flex justify-content-center px-5">
            <Button
              user={{ name: 'Alex' }}
              handleClick={() => dispatch({ type: 'increment', payload: 1 })}
              class="btn-outline-success me-5"
            >
              <i className="bi bi-plus-circle fs-1"></i>
            </Button>
            <Button
              user={{ name: 'Alex' }}
              handleClick={() => dispatch({ type: 'decrement', payload: 1 })}
              class="btn-outline-danger ms-5"
            >
              <i className="bi bi-dash-circle fs-1"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
