(function () {
    angular
        .module("WamApp")
        .controller("websiteListController", websiteListController);

    function websiteListController($routeParams, websiteService) {
        var model = this;

        // event handlers
        model.userId = $routeParams.userId;
   //     model.findWebsitesByUser = findWebsitesByUser;


        function init(){
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });
        }

        init();
/*
        function findWebsitesByUser(userId) {
            var sites = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    sites.push(websites[w]);
                }
            }
            return sites;
        }
*/
    }
})();