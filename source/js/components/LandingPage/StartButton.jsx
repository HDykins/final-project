var React = require('react');

var StartButton = React.createClass({
  render: function () {
    return (
      <div>
        <button type="button" className="btn start-button "><strong>Order now!</strong></button>
      </div>
    );
  }
});

module.exports = StartButton;