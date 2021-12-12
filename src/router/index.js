import React from 'react';
import { Redirect } from "react-router-dom";

import Discover from '../pages/discover'


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: Discover,
  }
];

export default routes;
