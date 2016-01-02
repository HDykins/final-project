var React = require('react');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js')

var StartButton = React.createClass({

  handleStartButtonClickEvent: function () {
  	event.preventDefault();

    LandingPageActionCreators.changeToTreePage();
  },

  render: function () {
    return (
      <div>
        <button onClick={this.handleStartButtonClickEvent} type="button" className="btn start-button "><strong>Order now!</strong></button>
      </div>
    );
  }
});

module.exports = StartButton;