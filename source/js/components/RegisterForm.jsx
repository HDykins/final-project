var React = require('react');

var RegisterForm = React.createClass({
  render: function () {
    return (
	<div className="transparent col-xs-8 col-xs-offset-2">
		<div className="rounded-box">
			<h2>Register</h2>
		</div>
		<button>X</button>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Email" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Retype email" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Password" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Retype password" />
		</div>
		<div className="rounded-box">
			<input className="registration-input" placeholder="Phone number" />
		</div>
		<div className="col-xs-6 col-xs-offset-3">
			<div className="rounded-box">
				<p>Password must be between 6-16 characters and contain at least one number</p>
			</div>
		</div>
		<div className="col-xs-12">
			<button>Register</button>
			<br /><br />
		</div>	
	</div>
    );
  }
});

module.exports = RegisterForm;