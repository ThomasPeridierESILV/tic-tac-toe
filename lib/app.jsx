'use strict';

var React = require('react');

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
   getInitialState: function() {
    return {value: this.props.initialValue};
  },

  'render': function onRender () {
    return (
      <button style={BoxStyle} >{this.state.value}</button>
    );
  }
});

var BoxStyle = {
  height: '100px',
  width: '100px'
};


React.render(<Box initialValue="X"/>, document.body);
