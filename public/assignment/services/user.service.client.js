(function () {
    angular
        .module("WamApp")
        .factory("userService", userService);

    function userService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        // equivalent to createUser(user)
        function createUser(user) {
            var url = "/api/assignment/user";
            return $http.post(url, user);
        }

        function findUserById(userId) {
            return $http.get("/api/assignment/user/" + userId);
        }

        function findUserByUsername(username) {
            var url = "/api/assignment/user?username=" + username;
            return $http.get(url);
        }

        function findUserByCredentials(username, password) {
            var url ="/api/assignment/user?username=" + username + "&password=" + password;
            return $http.get(url);
        }

        function updateUser(userId, user) {
            var url = "/api/assignment/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
       }


        function deleteUser(userId) {
            var url = "/api/assignment/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }

})();