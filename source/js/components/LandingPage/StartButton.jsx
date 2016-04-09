var React = require('react');
var LandingPageActionCreators = require('../../actions/LandingPageActionCreators.js')

var StartButton = React.createClass({

  handleStartButtonClickEvent: function (event) {
  	event.preventDefault();

    LandingPageActionCreators.changeToTreePage();
  },

  render: function () {
    return (
      <div>
        <button onClick={this.handleStartButtonClickEvent} type="button" className="btn btn-success btn-lg">Order now!</button>
      </div>
    );
  }
});

module.exports = StartButton;