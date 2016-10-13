import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import store from './store';
import * as math from './actions/mathActions';
import * as user from './actions/userActions';

store.dispatch(math.add(10));
store.dispatch(math.add(100));
store.dispatch(math.subtract(60));

store.dispatch(user.setName('xxxxx'));
store.dispatch(user.setAge(42));


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);