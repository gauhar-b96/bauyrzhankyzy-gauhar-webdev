(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService($http) {
        // array that represents local data for the pages
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        ]

        // event handlers
        this.createPage = createPage;
        this.findPageByWebsiteId = findPageByWebsiteId;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;

        //implementation
        function createPage(websiteId, page) {
            var url = "/api/assignment/website/" + websiteId + "/page";
            return $http.post(url, page);
        }
        /*
         function createPage(websiteId, page) {
         page.websiteId = websiteId;
         page.created = new Date();
         page.updated = new Date();
         page._id = (new Date()).getTime() + "";
         pages.push(page);
         }
         */

        function findPageByWebsiteId(websiteId) {
            var url = "/api/assignment/website/" + websiteId + "/page";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        /*
         function findPageByWebsiteId(websiteId) {
         var sites = [];
         for(var w in pages) {
         if(pages[w].websiteId === websiteId) {
         sites.push(pages[w]);
         }
         }
         return sites;
         }

         */

        function findPageById (pageId) {
            var url = "/api/assignment/page/" + pageId;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        /*
         function findPageById (pageId) {
         return pages.find(function (page) {
         return page._id === pageId;
         })
         }
         */

        function updatePage(pageId, page) {
            var url = "/api/assignment/page/" + pageId;
            return $http.put(url, page)
                .then(function (response) {
                    return response.data;
                });
        }
        /*

         function updatePage(pageId, page) {
         for (var p in pages) {
         if (pages[p]._id === pageId) {
         pages[p] = page;
         return;
         }
         }
         return null;

         }
         */
        function deletePage(pageId) {
            var url = "/api/assignment/page/" + pageId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }
        /*
         function deletePage(pageId) {
         var page = pages.find(function (page) {
         return page._id === pageId;
         });
         var index = pages.indexOf(page);
         pages.splice(index, 1);
         }
         */


    }

})();
