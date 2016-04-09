var React = require('react');

var SocialMedia = React.createClass({
  render: function () {
    return (
	<div>
		<img className="social-icon" src="http://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png" />
		<img className="social-icon" src="https://cdn0.iconfinder.com/data/icons/yooicons_set01_socialbookmarks/512/social_facebook_box_blue.png" />
		<img className="social-icon" src="http://blog.fast-trackermn.org/wp-content/fasttracker/uploads/2015/08/google-plus-icon.png" />
	</div>
    );
  }
});

module.exports = SocialMedia;