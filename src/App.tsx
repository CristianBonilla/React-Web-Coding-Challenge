import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ReportedBikeThefts } from '@modules/ReportedBikeThefts';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" render={ props => <ReportedBikeThefts { ...props } /> } />
      </Switch>
    </Router>
  );
}

export { App };
