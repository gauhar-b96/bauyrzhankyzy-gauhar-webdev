/**
 * Created by gauharbauyrzhankyzy on 7/22/17.
 */
(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);

    function registerController($location, userService) {
        var model = this;

        // event handlers
        model.registerUser = registerUser;

        function init(){

        }

        init();

        // implementation
        function registerUser(user) {
            var _user = userService.findUserByUsername(user.username);
            if (!_user) {
                var user = userService.registerUser(user);
                // navigates user to user's profile
                $location.url("profile/" + user._id);
            } else {
                model.error = "User already exists";
            }


            if(_user.password !== _user.password2) {
                model.errorMessage = "Passwords don't match";
                return;
            }


        }
    }
})();