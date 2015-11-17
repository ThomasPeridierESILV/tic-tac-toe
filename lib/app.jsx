'use strict';

var React = require('react');


var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
      <button style={BoxStyle} >{this.props.value}</button>
    );
  }
});

var BoxStyle = {
  height: '100px',
  width: '100px'
};


React.render(<Box value="X"/>, document.body);
