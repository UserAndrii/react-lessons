import Counter from 'components/Counter/Counter';
import TestUseMemo from '../components/TestUseMemo/TestUseMemo';
import { Card } from 'components/Card';
import FormLogin from 'components/FormLogin/FormLogin';

const HomePage = () => {
  return (
    <>
      <TestUseMemo />
      <Counter />
      <Card />
      <FormLogin />
    </>
  );
};

export default HomePage;
