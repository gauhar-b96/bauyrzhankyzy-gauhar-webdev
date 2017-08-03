(function () {
    angular
        .module("WamApp")
        .controller("pageListController", pageListController);

    function pageListController($routeParams, pageService) {
        var model = this;
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;

        // event handlers


        function init(){
            pageService
                .findPageByWebsiteId(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }

        init();
    }
})();