var jQuery = require('jquery');

var HOST_NAME = 'http://localhost:8080';

var API_ENDPOINTS = {
  REGISTER: '/api/users',
  SIGN_IN: '/api/users/authenticate',
  ORDER: '/api/orders'
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

function saveOrder(order, orderId, handleResponse) {

  console.log(order);

  var data = {
    userChoices: order,
    id: orderId,
    userId: "547g8x6n"
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

function assignOrderToUser(orderId, userId, token, handleResponse) {

  var data = {
    userId: userId,
    orderId: orderId
  };

  var request = jQuery.ajax({
    method: 'patch',
    url: HOST_NAME + API_ENDPOINTS.ORDER + "/" + orderId + "?token" + token,
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

function getOrders(userId, token, handleResponse) {

  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.ORDER + "/user/" + userId + "?token=" + token,
    dataType: 'json',
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

function getOrder(orderId, token, handleResponse) {

  var request = jQuery.ajax({
    method: 'get',
    url: HOST_NAME + API_ENDPOINTS.ORDER + "/" + orderId + "?token=" + token,
    dataType: 'json',
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

function deleteOrder(orderId, token, handleResponse) {

  var request = jQuery.ajax({
    method: 'delete',
    url: HOST_NAME + API_ENDPOINTS.ORDER + "/" + orderId + "?token=" + token,
    dataType: 'json',
  });

  request.fail(function (jqXHR, textStatus, errorThrown) {
    handleResponse(jqXHR, null);
  });

  request.done(function (data) {
    handleResponse(null, data);
  });
}

function getPostCode(postcode, done) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', encodeURI('http://api.postcodes.io/postcodes/' + postcode + ''));
  xhr.onload = function loadHandler() {
    if (xhr.status !== 200) {
      console.log('Not OK: ' + xhr.status);
      return;
    }

    var data = JSON.parse(xhr.responseText);
    done(null, data);
  };
  xhr.send();
}

module.exports = {
  signIn: signIn,
  register: register,
  saveOrder: saveOrder,
  assignOrderToUser: assignOrderToUser,
  getOrders: getOrders,
  getOrder: getOrder,
  deleteOrder: deleteOrder,
  getPostCode: getPostCode
};
