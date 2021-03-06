'use strict';

import React from 'react';
import StyleSheet from 'react-style';

import {Colors} from '../style/';

export default class SideNavigation extends React.Component {

  render() {
    var props = this.props;
    var styles = SideNavigationStyles;
    var sideNavigationStyles = [styles.normalSideNavStyle];
    if (props.show) {
      sideNavigationStyles.push(styles.showSideNavStyle);
    }
    return <div styles={sideNavigationStyles}>
      {this.props.children}
    </div>;
  }

}

var SideNavigationStyles = StyleSheet.create({

  normalSideNavStyle: {
    backgroundColor: 'white',
    borderRight: '1px solid ' + Colors.grey.P300,
    bottom: 0,
    left: 0,
    overflow: 'auto',
    position: 'fixed',
    top: 0,
    width: 240,
    transform: 'translateX(-241px)',
    transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s',
    zIndex: '4',
    visibility: 'hidden'
  },

  showSideNavStyle: {
    transform: 'translateX(0)',
    transition: 'transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear 0s',
    visibility: 'visible'
  }

});
