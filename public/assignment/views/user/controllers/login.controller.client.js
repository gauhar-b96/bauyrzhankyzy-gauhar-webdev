// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .controller("loginController", loginController);

    function loginController($location, userService, $rootScope) {
        var model = this;

        // event handlers
        model.login = login;

        function init(){
        }
        init();
/*
        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            var promise = userService.findUserByCredentials(user.username, user.password);
            promise
                .then(function (response) {
                    user = response.data;
                    if (user === "0") {
                        model.errorMessage = "Username not found";
                    } else {
                        $rootScope.currentUser = user;
                        $location.url('/user/'+ user._id);
                    }
                });
        }
        */

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            var promise = userService.findUserByCredentials(user.username, user.password);
            promise
                .then(function (response) {
                    user = response.data;
                    if (user === null) {
                        model.errorMessage = "Username not found";
                    } else {
                  //      $rootScope.currentUser = user;
                        $location.url('/user/'+ user._id);
                    }
                });
        }
    }

})();

