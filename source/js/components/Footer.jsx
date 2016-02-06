var React = require('react');

var Footer = React.createClass({

  render: function () {
    return (
    	<div className="row transparent">
    		<div className="col-xs-8">
    			<h4>Check out my Github and LinkedIn profiles:</h4> 
                <p>Githhub: https://github.com/HDykins</p>
                <p>LinkedIn: https://www.linkedin.com/in/harry-dykins-4712b073</p>
    		</div>
    		<div className="col-xs-4">
    			<h4>We're on:</h4>
                <i className="fa fa-twitter fa-4x"></i>
                <i className="fa fa-facebook-official fa-4x"></i>
                <i className="fa fa-google-plus-square fa-4x"></i>
                <i className="fa fa-linkedin-square fa-4x"></i>
    		</div>
    	</div>
    );
  }
});

module.exports = Footer;