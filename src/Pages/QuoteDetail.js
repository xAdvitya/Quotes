import { Link, Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

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

const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />

      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default QuoteDetail;
