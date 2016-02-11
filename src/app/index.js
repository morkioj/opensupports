import React  from 'react';
import {render} from 'react-dom'
import Router from 'react-router';

import routes from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
    // Enable React devtools
    window.React = React;
}

//TODO: This should be optional via gulp like: "gulp dev --no-fixtures"
if (fixturesEnabled === 'disabled') {
    require('lib-app/fixtures-loader');
}

render(routes, document.getElementById('app'));
