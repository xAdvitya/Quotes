import { Redirect, Route } from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetail from './Pages/QuoteDetail';

function App() {
  return (
    <div>
      <switch>
        {/* <Redirect path="/" to="/quotes" /> */}
        
        <Route path="/quotes">
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </switch>
    </div>
  );
}

export default App;
