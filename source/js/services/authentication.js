var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  REGISTER: '/api/users',
  SIGN_IN: '/api/users/authenticate',
  ORDER: '/api/users/orders'
};

function register(email, password, phoneNumber, id, handleResponse) {

  var data = {
    email: email,
    password: password,
    phoneNumber: phoneNumber,
    id: id
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

function saveOrder(order, handleResponse) {

  console.log(order);

  var data = {
    userChoices: order
  };

  var request = jQuery.ajax({
    method: 'post',
    url: HOST_NAME + API_ENDPOINTS.ORDER,
    dataType: 'json',
    data: JSON.stringify(data),
    contentType: 'application/json'


  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

function getOrders(userId, token, handleResponse) {

  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.SIGN_IN + "/" + userId + "?token=" + token,
    dataType: 'json',
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
  register: register,
  saveOrder: saveOrder
};
