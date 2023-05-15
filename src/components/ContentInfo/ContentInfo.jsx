import { Component } from 'react';
import { nanoid } from 'nanoid';
import { getSearchNews } from '../../API/getSearchNews';
import Loader from './Loader';

const STATUS = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

class ContentInfo extends Component {
  state = { articles: null, error: '', status: STATUS.IDLE };

  componentDidUpdate(prevProps, prevState) {
    const text = this.props.searchText.trim();
    if (prevProps.searchText !== text && text) {
      this.setState({ status: STATUS.PENDING });
      getSearchNews(text)
        .then(data => {
          if (data.articles)
            return this.setState({
              articles: data.articles,
              status: STATUS.FULFILLED,
            });
          return Promise.reject(data.message);
        })
        .catch(error => {
          this.setState({ error, status: STATUS.REJECTED });
        });
    }
  }
  render() {
    const { articles, error, status } = this.state;

    if (status === STATUS.PENDING) return <Loader />;
    else if (status === STATUS.FULFILLED) {
      if (articles.length === 0)
        return (
          <div className="alert alert-warning mt-3" role="alert">
            No Result
          </div>
        );
      return (
        <ul className="list-group mt-3">
          {articles.map(el => (
            <li key={nanoid(4)} className="list-group-item">
              {el.title}
            </li>
          ))}
        </ul>
      );
    } else if (status === STATUS.REJECTED)
      return (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      );
  }
}

export default ContentInfo;
