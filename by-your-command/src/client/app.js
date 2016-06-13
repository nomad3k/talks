import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'
import { Link } from 'react-router';
import classNames from 'classNames';

import Header from './header';
import Drawer from './drawer';
import Footer from './footer';

class App extends Component {
  render() {
    let { title } = this.props;

    return (
      <div>
        {/*
          Don't know why I need this outer DIV but if I want to avoid irritating
          'root element has been moved' errors then I do.
        */}
        <div className='mdl-layout mdl-js-layout mdl-layout--fixed-header'>

          <Header title={title} />
          <Drawer title={title} />

          <main className='mdl-layout__content'>
            {this.props.children}
          </main>

          {/* <Footer title={title} /> */}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    title: state.get('title'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
