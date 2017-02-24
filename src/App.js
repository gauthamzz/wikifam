import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar,NavItem, Card, CardTitle,Col} from 'react-materialize';

const API = 'https://en.wikipedia.org/api/rest_v1/page/random/summary';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title : '',
      extract: '',
      description: '',
      thumbnail: '',
    }
  }
  fetchProfile() { 
    let url = `${API}`;
    fetch(url)
      .then((res) => res.json() )
      .then((data) => {
        this.setState({
          title: data.title,
          extract: data.extract,
          description: data.description,
          thumbnail: data.thumbnail.source
          })
      })
      .catch((error) => console.log('Oops! . There Is A Problem') )
  }
   componentDidMount() {
    this.fetchProfile(this.state);
  }
  render() {
    return (
      <div className="App">

<Navbar brand='logo' right>
  <NavItem href='get-started.html'>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>

    <Col m={2} s={2}>  
<Card  header={<CardTitle className='medium' reveal image={this.state.thumbnail} waves='light'/>}
    title={this.state.title}
    reveal={<p> {this.state.extract}</p>}>
    <p><a href="#">This is a link</a></p>
</Card>
    </Col>
      </div>
      
    );
  }
}

export default App;
