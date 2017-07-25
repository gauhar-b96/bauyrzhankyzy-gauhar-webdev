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
            model.pages = pageService.findPagesByUser(model.userId);
            model.page = pageService.findPageById(model.pageId);
        }

        init();

        // implementation
        function updatePage(pageId, page) {
            pageService.updatePage(model.pageId, page);
        }

        function deletePage(pageId) {
            pageService.deletePage(pageId);
            $location.url('/user/'+model.userId+'/page');
        }
    }
})();