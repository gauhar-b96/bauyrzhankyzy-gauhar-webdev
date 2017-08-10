(function () {
    angular
        .module("WamApp")
        .controller("registerController", registerController);

    function registerController($location, userService) {
        var model = this;

        // event handlers
        model.createUser = createUser;

        function init(){
        }
        init();

        // implementation
        /*
        function registerUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if (_user === "0") {
                        return userService.registerUser(user)
                    } else {
                        model.error = "Username already exists";
                    }
                })
                .then(function (response) {
                    _user = response.data;
                    $location.url("user/" + _user._id);
                });

        }
        */

        function createUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if (_user === null) {
                        return userService
                            .createUser(user)
                            .then(function (response) {
                                _user = response.data;
                                $location.url("user/" + _user._id);
                            });
                    } else {
                        model.error = "Username already exists";
                    }
                });
        }
        /* not working function
        function registerUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if (_user === null) {
                        return userService
                            .createUser(_user)
                            .then(function (response) {
                                var newUser = response.data;
                                $location.url("user/" + newUser._id);
                            });
                    } else {
                        model.error = "Username already exists";
                    }
                });
        }
*/

    }
})();