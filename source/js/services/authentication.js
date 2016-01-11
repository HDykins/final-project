var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  REGISTER: '/api/users',
  SIGN_IN: '/api/users/authenticate'
};

function register(email, password, phoneNumber, handleResponse) {

  var data = {
    email: email,
    password: password,
    phoneNumber: phoneNumber
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.REGISTER,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function () {
    handleResponse(null, data);
  });
}

function signIn(email, password, handleResponse) {

  var data = {
    email: email,
    password: password
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.SIGN_IN,
    dataType: 'json',
    data: data
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

module.exports = {
  signIn: signIn,
  register: register
};