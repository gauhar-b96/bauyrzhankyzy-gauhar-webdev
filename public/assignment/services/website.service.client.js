(function () {
    angular
        .module("WamApp")
        .service("websiteService", websiteService);

    function websiteService($http) {
        // array that represents local data for the websites

        // event handlers
        this.createWebsite = createWebsite;
        this.findWebsitesByUser = findWebsitesByUser;
        this.findWebsiteById = findWebsiteById;
        this.updateWebsite = updateWebsite;
        this.deleteWebsite = deleteWebsite;

        // implementation

        function createWebsite(userId, website) {
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.post(url, website);
        }
        /*
        function createWebsite(website) {2
           website.created = new Date();
            website.updated = new Date();
            website._id = (new Date()).getTime() + "";
            websites.push(website);
        }
*/
        function findWebsitesByUser(userId) {
            var url = "/api/assignment/user/" + userId + "/website";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

            /*
            var sites = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }
*/
        function findWebsiteById (userId, websiteId) {
            var url = "/api/assignment/user/" + userId + "/website/" + websiteId;
            return $http.get(url);
        }
            /*
        function findWebsiteById (websiteId) {
            return websites.find(function (website) {
                return website._id === websiteId;
            })
        }

*/

        function updateWebsite(websiteId, website) {
            var url = "/api/assignment/website/" + websiteId;
            return $http.put(url, website)
                .then(function (response) {
                    return response.data;
                });
        }

            /*

        function updateWebsite(websiteId, website) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites[w] = website;
                    return;
                }
            }
            return null;
        }
        */

        function deleteWebsite(websiteId) {
            var url = "/api/assignment/website/" + websiteId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
     /*
        function deleteWebsite(websiteId) {
            var website = websites.find(function (website) {
                return website._id === websiteId;
            });
            var index = websites.indexOf(website);
            websites.splice(index, 1);
        }
        */
    }

})();
