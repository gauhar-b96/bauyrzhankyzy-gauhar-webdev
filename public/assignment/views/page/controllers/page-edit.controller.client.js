(function () {
    angular
        .module("WamApp")
        .controller("pageEditController", pageEditController);

    function pageEditController($routeParams, $location, pageService) {
        var model = this;
        model.userId = $routeParams.userId;
        model.pageId = $routeParams.pageId;

        // event handlers
        model.updatePage = updatePage;
        model.deletePage = deletePage;


        function init(){
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            model.page = pageService.findPageById(model.pageId);
        }

        init();

        // implementation
        function updatePage(pageId, page) {
            var website_id = page.websiteId;
            pageService.updatePage(pageId, page);
            $location.url('/user/'+model.userId+'/website/'+website_id+'/page');
        }

        function deletePage(pageId) {
            var websiteId = pageService.findPageById(pageId).websiteId;
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/website/'+websiteId+'/page');
        }
    }
})();