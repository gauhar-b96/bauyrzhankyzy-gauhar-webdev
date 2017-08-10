(function () {
    angular
        .module("WamApp")
        .controller("websiteEditController", websiteEditController);

    function websiteEditController($routeParams, $location, websiteService) {
        var model = this;
        model.userId = $routeParams.userId;
        model.websiteId = $routeParams.websiteId;

        // event handlers
        model.updateWebsite = updateWebsite;
        model.deleteWebsite = deleteWebsite;


        function init(){
            websiteService
                .findWebsitesByUser(model.userId)
                .then(function (websites) {
                    model.websites = websites;
                });

            websiteService
                .findWebsiteById(model.userId, model.websiteId)
                .then(function (response) {
                    model.website = response.data;
                });
        }

        init();

        // implementation
        function updateWebsite(website) {
            websiteService
                .updateWebsite(website._id, website)
                .then(function() {
                    $location.url('/user/'+model.userId+'/website');
                });
        }

        /*
        function updateWebsite(website) {
            websiteService.updateWebsite(website._id, website);
            $location.url('/user/'+model.userId+'/website');
        }
        */
        function deleteWebsite(website) {
            websiteService
                .deleteWebsite(model.userId, website._id)
                .then(function() {
                    $location.url('/user/'+model.userId+'/website');
                });
        }
        /*
        function deleteWebsite(websiteId) {
            websiteService.deleteWebsite(websiteId);
            $location.url('/user/'+model.userId+'/website');
        }
        */
    }
})();