(function () {
    angular
        .module("WamApp")
        .controller("websiteListController", websiteListController);

    function websiteListController($routeParams, websiteService) {
        var model = this;

        // event handlers
        var userId = $routeParams.userId;
        model.findWebsitesByUser = findWebsitesByUser;


        function init(){
            model.websites = websiteService.findWebsitesByUser(userId);
        }

        init();


        // implementation
        function findWebsitesByUser(userId) {
            var resultSet = [];
            for(var w in websites) {
                if(websites[w].developerId === userId) {
                    websites[w].created = new Date();
                    websites[w].updated = new Date();
                    resultSet.push(websites[w]);
                }
            }
            return resultSet;
        }


    }
})();