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
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();

        // implementation
        function createPage(websiteId, page) {
            page.websiteId = websiteId;
          pageService.createpage(page);
          $location.url('/user/'+model.website+'/page');
        }




    }
})();