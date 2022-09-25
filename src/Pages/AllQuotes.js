import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'rahul',
    text: 'Rahul studies react',
  },
  {
    id: 'q2',
    author: 'Pranjal',
    text: 'Pranjal studies react',
  },
  {
    id: 'q3',
    author: 'Advitya',
    text: 'Advitya studies react',
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES } />;
};
export default AllQuotes;
