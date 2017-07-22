// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams) {
        var userId = $routeParams["userId"];
        alert(userId);
    }
})();

