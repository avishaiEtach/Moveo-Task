
import { Switch ,Route } from 'react-router-dom';

import {Main} from './pages/main'

export const RootComp = () => {
    return (
        <div className="App">
            <Switch>
                <Route exact component={Main} path="/"></Route>
            </Switch>
        </div>
    );
};
