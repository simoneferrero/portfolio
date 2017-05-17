import React from 'react';
import Radium from 'radium';
import PageFace from './PageFace';

class Page extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      flip: false,
    };

    this.flipPage = this.flipPage.bind(this);
  }

  flipPage() {
    this.setState({
      flip: !(this.state.flip),
    })
  }

  getStyles() {
    const { zIndex, offSet, shadow, size, unit, portrait, contents } = this.props;

    const wrapper = {
      zIndex,
      position: "absolute",
      left: "50%",
      marginLeft: `-37.5${unit}`,
      width: `75${unit}`,
      height: `75${portrait ? "vw" : "vh"}`,
      bottom: `${offSet}${portrait ? "vw" : "vh"}`,
      transition: "bottom linear .75s",
      cursor: contents.back ? "pointer" : "default",
    };

    return {
      wrapper,
    };
  }

  render() {
    const { flip } = this.state;
    const { contents } = this.props;
    const { wrapper } = this.getStyles();

    return (
      <div style={wrapper} onClick={contents.back ? this.flipPage : null}>
        <PageFace {...this.props} front={true} rotate={flip ? 180 : 0} />
        {contents.back ? <PageFace {...this.props} front={false} rotate={flip ? 0 : 180} /> : null}
      </div>
    );
  }
}

export default Radium(Page);
