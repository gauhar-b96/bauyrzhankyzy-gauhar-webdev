(function () {
    angular
        .module("WamApp")
        .controller("pageEditController", pageEditController);

    function pageEditController($routeParams, $location, pageService) {
        var model = this;
        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;
        model.pageId = $routeParams.pageId;

        // event handlers
        model.updatePage = updatePage;
        model.deletePage = deletePage;


        function init(){
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });

            pageService
                .findPageById(model.pageId)
                .then(function (page) {
                    model.page = page;
                });
        }

        init();

        // implementation

        function updatePage(page) {
            pageService
                .updatePage(page._id, page)
                .then(function() {
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
                });
        }
        /*
        function updatePage(pageId, page) {
            var website_id = page.websiteId;
            pageService.updatePage(pageId, page);
            $location.url('/user/'+model.userId+'/website/'+website_id+'/page');
        }
        */

        function deletePage(page) {
            pageService
                .deletePage(page._id)
                .then(function() {
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
                });
        }
/*
        function deletePage(pageId) {
            var websiteId = pageService.findPageById(pageId).websiteId;
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website/'+websiteId+'/page');
        }
        */
    }
})();