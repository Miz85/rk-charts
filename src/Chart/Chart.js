import React, { PureComponent } from "react";
import { Stage, Layer } from "react-konva";

class Chart extends PureComponent {
  state = {
    canvasContext: null
  };
  componentDidMount() {
    this.setState({ canvasContext: this.canvas.getContext("2d") });
  }
  render() {
    return (
      <Stage height={500} width={800}>
        <Layer
          ref={node => {
            this.canvas = node;
          }}
        >
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              canvasContext: this.state.canvasContext
            })
          )}
        </Layer>
      </Stage>
    );
  }
}

export default Chart;
