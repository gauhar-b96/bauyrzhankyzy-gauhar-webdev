// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($routeParams, userService) {
        var model = this;
        var userId = $routeParams["userId"];

        // event handlers
        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        function init() {
            userService
                .findUserById(userId)
                .then(function (response) {
                    model.user = response.data;
                });
        }
        init();

        /*
         userService
         .findUserById(userId)
         .then(renderUser);

         function renderUser (user) {
         model.user = user;
         }
         */


        function updateUser(userId, user) {
            userService.updateUser(userId, user)
        }

      function deleteUser(userId) {
            userService.deleteUser(userId);
        }
    }
})();

