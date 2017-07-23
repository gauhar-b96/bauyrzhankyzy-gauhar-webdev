// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .controller("loginController", loginController);

    function loginController($location, userService) {
        var model = this;

        model.login = login;

        function init(){

        }

        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            user = userService.findUserByUsernameAndPassword(user.username, user.password);
            if(user === null) {
                model.errorMessage = "User not found";
            } else {
                // navigates user to user's profile
                $location.url("profile/"+ user._id);
            }
        }
    }
})();

