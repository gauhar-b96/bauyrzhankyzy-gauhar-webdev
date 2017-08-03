(function () {
    angular
        .module("WamApp")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;
//        var pageId = $routeParams["pageId"];
 //       model.pageId = $routeParams.pageId;
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;

        // event handlers
  //      model.findPageByWebsiteId = findPageByWebsiteId;
    //    model.findPageById = findPageById;


        function init(){
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
            /*
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.page = pageService.findPageById(pageId);
            */
        }

        init();
/*
        function findPageByWebsiteId(websiteId) {
            var set = [];
            for(var p in pages) {
                if(pages[p].websiteId === websiteId) {
                    set.push(pages[p]);
                }
            }
            return set;
        }
*/

/*
        function findPageById(pageId) {
            var set = [];
            for(var p in pages) {
                if(pages[p].pageId === pageId) {
                    set.push(pages[p]);
                }
            }
            return set;
        }
*/
    }
})();