import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
import{ Route, Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

class Profile extends Component {
  constructor(props){
    super(props);
    this.state= {
      message:''
    };
  }

  componentWillMount(){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
      console.log(data.message)
      this.setState({message: data.message})
    }
    )
  }

  render(){
    return (
      <div>
        message: {this.state.message}
      </div>
    )
  }
}


class HomePage extends Component {
  render() {
    return (
      <div>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='/assets/images/wireframe/paragraph.png' />
          <hr/>
          top
          <Route exact path="/" component={Home}/>
          one
          <Route path="/about" component={About}/>
          two
          <Route path="/topics" component={Topics}/>
          <Route path="/profile" component={Profile}/>
          three
        </Segment>
      </div>
    )
  }
}
export default HomePage
