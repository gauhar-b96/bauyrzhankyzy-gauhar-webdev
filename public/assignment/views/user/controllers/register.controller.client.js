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
            var promise = userService.findUser(user.username);

        }


            /*
            if( user.password !== user.password2) {
                model.error = "Passwords must match";
                return;
            }

            var found = userService.findUserByUsername(user.username);

            if (!found) {
                var newUser = userService.registerUser(user);
                // navigates user to user's profile
                $location.url("user/" + newUser._id);
            }
             else {
                model.error = "Username already exists";
                return;
            }
        }
        */

    }
})();