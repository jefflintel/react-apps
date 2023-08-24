import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  const counter = useCounter(true, 2);
  
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
