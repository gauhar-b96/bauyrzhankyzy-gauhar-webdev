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


        model.login = login;

        function init() {
        }

        init();


        function login(user) {
            /**   if(!user) {
         model.errorMessage = "User not found";
         return;
         }*/

            user = userService.findUserByCredentials(user.username, user.password);
            if(user === null) {
                model.error = "User not found";
                return;
            } else {
                $rootScope.currentUser = user;
                // navigates user to user's profile
                $location.url("user/"+ user._id);
            }
        }

        /* need fixing
         function login(user) {

         var found = userService.findUserByCredentials(user.username, user.password);
         var exist = userService.findUserByUsername(user.username);
         if (exist === null) {
         model.error = "User not found";
         return;
         } else {
         if (user.password !== found.password) {
         model.error = "Passwords don't match, please try again"
         } else{
         // navigates user to user's profile
         $location.url("user/" + user._id);
         }
         }
         }
         */
    }
})();

