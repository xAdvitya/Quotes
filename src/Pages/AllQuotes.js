import { useEffect } from 'react';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

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
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    <p className="centered">{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
