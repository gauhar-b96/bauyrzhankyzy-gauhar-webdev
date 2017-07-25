(function () {
    angular
        .module("WamApp")
        .service("pageService", pageService);

    function pageService() {
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

        // implementation
        //TODO: wrong function fix
        function createPage(websiteId, page) {
            page.websiteId = websiteId;
           page.created = new Date();
            page.updated = new Date();
            page._id = (new Date()).getTime() + "";
            pages.push(page);
        }

        function findPageByWebsiteId(websiteId) {
            var sites = [];
            for(var w in pages) {
                if(pages[w].websiteId === websiteId) {
                    sites.push(pages[w]);
                }
            }
            return sites;
        }

        function findPageById (pageId) {
            return pages.find(function (page) {
                return page._id === pageId;
            })
        }

        // TODO
        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p] = page;
                    return;
                }
            }
            return null;

        }

        function deletePage(pageId) {
            var page = pages.find(function (page) {
                return page._id === pageId;
            });
            var index = pages.indexOf(page);
            pages.splice(index, 1);
        }
    }

})();
