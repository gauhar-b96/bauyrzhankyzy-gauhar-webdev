(function () {
    angular
        .module("WamApp")
        .controller("pageNewController", pageNewController);

    function pageNewController($routeParams, $location, pageService) {
        var model = this;
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;

        // event handlers
        model.createPage = createPage;


        function init(){
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();

        // implementation
        function createPage(websiteId, page) {
            websiteId = model.websiteId;
            pageService
                .createPage(websiteId, page)
                .then(function () {
                    $location.url('/user/' + model.userId + '/website/' + websiteId + '/page');
                });
        }
    }
})();