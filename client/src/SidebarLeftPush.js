import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import{ Link } from 'react-router-dom'

import HomePage from './HomePage'

class SidebarLeftPush extends Component {

  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button icon circular size='medium' color='blue' onClick={this.toggleVisibility}>
          <Icon name="sidebar" />
        </Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Menu.Item name='home'>
              <Link to="/">
                <Icon name='home' />
                Home
              </Link>
            </Menu.Item>
            <Menu.Item name='trend'>
              <Link to="/about">
                <Icon name='area graph' />
                Trending
              </Link>
            </Menu.Item>
            <Menu.Item name='dollar'>
              <Link to="/topics">
                <Icon name='dollar' />
                Profit
              </Link>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <HomePage/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarLeftPush
