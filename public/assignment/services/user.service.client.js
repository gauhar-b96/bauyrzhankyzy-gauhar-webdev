(function () {
    angular
        .module("WamApp")
        .factory("userService", userService);

    function userService($http) {

        var api = {
            "registerUser": registerUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;

        // equivalent to createUser(user)
        function registerUser(user) {
            var url = "/api/assignment/user";
            return $http.post(url, user);

        }
 /*       function registerUser(user) {
            user._id = (new Date()).getTime() + "";
            users.push(user);
            return user;
        }
*/
        function findUserById(userId) {
            return $http.get("/api/assignment/user/" + userId);
            /*var url = "/api/user/" + userId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
                */
        }

        function findUserByUsername(username) {
            var url = "/api/assignment/user?username=" + username;
            return $http.get(url);
            /*

             */
        }

        function findUserByCredentials(username, password) {
            var url ="/api/assignment/user?username=" + username + "&password" + password;
            return $http.get(url);


        }
       /**     var url = "/api/user?username=" + username + "&password=" + password;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        } */

        function updateUser(userId, user) {
            var url = "/api/assignment/user/" + userId;
            return $http.put(url, user)
                .then(function (response) {
                    return response.data;
                });
       }
           /*
            for (var u in users) {
                if (users[u]._id === userId) {
                    users[u] = user;
                    return;
                }
            }
            return null;
        }
*/
    /*    function deleteUser(userId) {
            var user = users.find(function user() {
                return user._id === userId;
            });
            var index = users.indexOf(user);
            users.splice(index, 1);
        }
        */

        function deleteUser(userId) {
            var url = "/api/assignment/user/" + userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
    }

})();