/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	new: function(req, resp) {
		console.log("pidiendo formulario registro");
		resp.view('/user/sign_in_form');
	}
};

