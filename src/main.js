document.addEventListener('DOMContentLoaded', () => {

  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
  });

})


window.checkLoginState = () => {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}