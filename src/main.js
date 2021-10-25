document.addEventListener('DOMContentLoaded', () => {

  FB.getLoginStatus(function(response) {
    console.log('getLoginStatus', response)
    statusChangeCallback(response);
  });

})


window.checkLoginState = () => {
  FB.getLoginStatus(function(response) {
    console.log('checkLoginState', response)
    statusChangeCallback(response);
  });
}