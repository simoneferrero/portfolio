import React from 'react';
import Radium from 'radium';
import MenuFolderLabel from './MenuFolderLabel';

class MenuFolderTop extends React.Component {

  constructor(props) {
    super(props);
  }

  getStyles() {
    const menu = {
      display: "flex",
      flexDirection: "row",
      marginTop: "2vh",
      marginLeft: "9vmax",
      height: "12vh",
      alignItems: "flex-end",
    };

    return {
      menu: menu,
    };
  }

  render() {
    const style = this.getStyles();
    const { pages, mainPage, onClick } = this.props;

    return (
      <div style={[style.menu]}>
        {pages.map(page => {
          return (
            <MenuFolderLabel
              name={page.name}
              color={page.color}
              zIndex={page.zIndex}
              mainPage={mainPage}
              page={page.page}
              onClick={onClick}
              key={page.name} />
          );
        })}
      </div>
    );
  }

}

export default Radium(MenuFolderTop);
