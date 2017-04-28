require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import { Layout, Header, Drawer, Content, Grid, Cell } from 'react-mdl';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Cheese extends React.Component {
  static propType = {
    flavour: React.PropTypes.string.isRequired,
    dimensions: React.PropTypes.object,
    arrayOfValues: React.PropTypes.array
  }
  static defaultProps = {
    dimensions: { x: 1, y: 1, z: 1 },
    arrayOfValues: [ 1, 2, 3 ]
  }
  render() {
    const { flavour, dimensions, arrayOfValues } = this.props;
    return (
      <div>
        <h5>Cheese: {flavour}</h5>
        <ul>
          {arrayOfValues.map((v,ix) => (
            <li key={ix}>{v}</li>
          ))}
        </ul>
      </div>
    );
  }
}

class Cracker extends React.Component {
  render() {
    return (
      <div>
        <h5>Cracker</h5>
      </div>
    );
  }
}

class Sandwich extends React.Component {
  render() {
    return (
      <div>
        <h5>Top slice of bread</h5>
        {this.props.children}
        <h5>Bottom slice of bread</h5>
      </div>
    );
  }
}

class Barrel extends React.Component {
  static propTypes = {
    flavour: React.PropTypes.string.isRequired
  }
  static defaultProps = {
    flavour: 'Red Lecester'
  }
  render() {
    const { flavour } = this.props;
    return (
      <div>
        <Cheese flavour={flavour} />
        <Cheese flavour={flavour} />
        <Cheese flavour={flavour} />
      </div>
    );
  }
}

class Waiter extends React.Component {
  static propTypes = {
    request: React.PropTypes.string
  }
  static defaultProps = {
    request: ''
  }
  constructor(props) {
    super(props);
    this.state = {
      request: props.request
    };
  }
  onChangeValue(e) {
    this.setState({
      request: e.target.value
    });
  }
  render() {
    const { request } = this.state;
    return (
      <div>
        <input type='text'
               placeholder='What would you like?'
                value={request}
                onChange={this.onChangeValue.bind(this)} />

          <Cheese flavour={request} />
          <Cheese flavour={`!!! ${request} !!!`} />
      </div>
    );
  }
}

class Page extends React.Component {
  render() {
    const title = 'Sheffield JS';
    return (
      <Layout fixedHeader>
        <Header title={title}></Header>
        <Drawer title={title}></Drawer>
        <Content>
          <Grid>
            <Cell col={8} offsetDesktop={2}>
              <Cheese />
              <Link to='/cracker'>Cracker</Link>
            </Cell>
          </Grid>
        </Content>
      </Layout>
    );
  }
}

class Page2 extends React.Component {
  render() {
    const title = 'Sheffield JS';
    return (
      <Layout fixedHeader>
        <Header title={title}></Header>
        <Drawer title={title}></Drawer>
        <Content>
          <Grid>
            <Cell col={8} offsetDesktop={2}>
              <Cracker />
              <Cracker />
              <Link to='/'>Cheese</Link>
            </Cell>
          </Grid>
        </Content>
      </Layout>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Page} />
          <Route path='/cracker/:id' component={Page2} />
        </Switch>
      </Router>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
