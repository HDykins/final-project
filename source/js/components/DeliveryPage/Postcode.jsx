var React = require('react');

var PostCode = React.createClass({
  render: function () {
    return (
    <div className="col-xs-6 col-xs-offset-3">	
	   	<div className="rounded-box">
			<input className="postcode-input" type="text" placeholder="Please input your postcode"/>
			<button className="btn">Find</button>
		</div>
	</div>
    );
  }
});

module.exports = PostCode;