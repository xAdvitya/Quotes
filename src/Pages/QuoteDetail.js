import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';
const QuoteDetail = () => {
  const param = useParams();

  return (
    <div>
      <h1>Quote Details </h1>
      <h1>{param.quoteId}</h1>

      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};
export default QuoteDetail;
