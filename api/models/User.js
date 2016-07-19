/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: "string",
  		required: true,
  		defaultsTo: "Jesús"
  	},
  	last_name: {
  		type: "string",
  		required: true,
  		defaultsTo: "Rosas"
  	},
  	username: {
  		type: "string",
  		required: true,
  		unique: true
  	},
  	email: {
  		type: 'email',
  		required: true,
  	}
  }
};

