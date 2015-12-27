var React = require('react');

var SignInForm = React.createClass({
  render: function () {
    return (
	<div className="rounded-box">
		<div>
			<h3>Would you like the ability to review your order at a later time?</h3>
			<span>(You will need to sign in)</span>
		</div>
		<h4>Sign-in form</h4>
		<div className="col-xs-8 col-xs-offset-2">
			<div className="rounded-box">
				<div className="col-xs-6">
					<div className="rounded-box">
						<input placeholder="Email" />
					</div>
					<div className="rounded-box">
						<input placeholder="Password" />
					</div>
				</div>
				<div className="col-xs-6">
					<div className="rounded-box">
						<span>Incorrect password or email</span>
					</div>
					<button>Sign-in</button>
				</div>
				<div className="col-xs-6 col-xs-offset-3">
					<div className="rounded-box">
						<span>Remember my design details </span>
						<input type="checkbox" />
						<br />
						<span>(You must first sign-in)</span>
					</div>
				</div>
			</div>
		</div>
		<div className="col-xs-12">
			<h3>Don''t have an account?</h3>
			<button>Register</button>
			<br /><br />
		</div>	
	</div>
    );
  }
});

module.exports = SignInForm;