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

        function registerUser(user) {
            userService.findUserByUsername(user.username)
                .then(function (response) {
                    var _user = response.data;
                    if (_user === null) {
                        return userService
                            .registerUser(_user)
                            .then(function (user) {
                                $location.url("user/" + user._id);
                            });
                    } else {
                        model.error = "Username already exists";
                    }
                });
        }


    }
})();