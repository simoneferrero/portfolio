import React from 'react';
import {StyleRoot} from 'radium';
import MenuFolder from './MenuFolder';
import HomeTab from './HomeTab';

export default class Portfolio extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  getStyles() {
    return {
      portfolio: {
        // overflowY: "hidden",
        height: "100vh",
        width: "100vw",
        position: "relative",
        marginTop: "0",
        marginLeft: "0",
      }
    }
  }

  render() {
    const styles = this.getStyles();

    return (
      <StyleRoot>
        <div style={[styles.portfolio]}>
          <MenuFolder />
        </div>
      </StyleRoot>
    );
  }

}
