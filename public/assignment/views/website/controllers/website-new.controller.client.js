(function () {
    angular
        .module("WamApp")
        .controller("websiteNewController", websiteNewController);

    function websiteNewController($routeParams, websiteService) {
        var model = this;

        // event handlers
        model.userId = $routeParams.userId;
        model.findWebsitesByUser = findWebsitesByUser;


        function init(){
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }

        init();


        // implementation
        function findWebsitesByUser(userId) {
            var resultSet = [];
            for(var w in model.websites) {
                if(model.websites[w].developerId === userId) {
                    resultSet.push(model.websites[w]);
                }
            }
            return resultSet;
        }

    }
})();