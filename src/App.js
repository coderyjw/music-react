import React, { memo, Suspense } from 'react'
import { Provider } from 'react-redux';

import routes from './router';
import store from './store';

import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';

import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'


export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})
