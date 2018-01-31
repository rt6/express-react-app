import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import SidebarLeftOverlay from './SidebarLeftOverlay'
import SidebarLeftPush from './SidebarLeftPush'


const BasicExample = () => (
  <Router>
    <div>
      <SidebarLeftPush/>
    </div>
  </Router>
)
export default BasicExample
