/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, resp) {
		console.log("pidiendo formulario registro");
		resp.view('user/sign_in_form');
	},
	create: function(req, resp) {
		var userObj = {
			name : req.param('name'),
			last_name : req.param('last_name'),
			username: req.param('username'),
			email: req.param('email')
		}
		User.create(userObj, function(err, user){
			if(err) {
				return resp.redirect('user/new');
				return;	
			}
			resp.redirect('user');
		});
	}
};

