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
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
        }

        init();

        // implementation
        /*
        function createWebsite(userId, website) {
            website.developerId = userId;
          websiteService.createWebsite(website);
          $location.url('/user/'+model.userId+'/website');
        }
        */
        function createWebsite(userId, website) {
            userId = model.userId;
            websiteService
                .createWebsite(userId, website)
                .then(function() {
                   $location.url("user/" + userId +"/website")
                });
        }
    }
})();