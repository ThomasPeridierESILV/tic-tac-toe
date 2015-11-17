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

  componentWillMount: function() {
  	 var currentState = this;
	  this.timer = setInterval(function(){
		  	var oldValue = currentState.state.value;
		  	var newValue = oldValue == 'X' ? 'O' : 'X';
		  	currentState.setState({value: newValue});
	  },1000);
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
