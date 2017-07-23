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

        function init(){
            model.user = userService.findUserById(userId);
        }
        init();

        function updateUser(user) {
            userService.updateUser(user._id, user)
        }


        function deleteUser(user) {
            userService.deleteUser(user._id)
        }


    }
})();

