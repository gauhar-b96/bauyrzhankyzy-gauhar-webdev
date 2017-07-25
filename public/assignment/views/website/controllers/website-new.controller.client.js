(function () {
    angular
        .module("WamApp")
        .controller("websiteNewController", websiteNewController);

    function websiteNewController($routeParams, $location, websiteService) {
        var model = this;
        model.userId = $routeParams.userId;

        // event handlers
        model.createWebsite = createWebsite;


        function init(){
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }

        init();

        // implementation
        function createWebsite(userId, website) {
            website.developerId = userId;
          websiteService.createWebsite(website);
          $location.url('/user/'+model.userId+'/website');
        }




    }
})();