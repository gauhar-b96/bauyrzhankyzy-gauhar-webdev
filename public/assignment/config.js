// immediately invoked function expressions (iife):
// created an iife to protect all self-coded-functions
// and avoid any changes to be made by external users
// thus, invoking everything as one big function (module)
(function () {
    angular
        .module("WamApp")
        .config(configuration);



    function configuration($routeProvider, $httpProvider) {
     //   $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $routeProvider
            .when("/", {
                templateUrl: "home.html",
                controller: "homeController",
                controllerAs: "model"
            })
            .when("/login", {
                templateUrl: "views/user/templates/login.view.client.html",
                controller: "loginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/templates/register.view.client.html",
                controller: "registerController",
                controllerAs: "model"
            })
            .when("/user/:userId", {
                templateUrl: "views/user/templates/profile.view.client.html",
                controller: "profileController",
                controllerAs: "model"
            })
            .when("/user/:userId/website", {
                templateUrl: "views/website/templates/website-list.view.client.html",
                controller: "websiteListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/new", {
                templateUrl: "views/website/templates/website-new.view.client.html",
                controller: "websiteNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId", {
                templateUrl: "views/website/templates/website-edit.view.client.html",
                controller: "websiteEditController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page", {
                templateUrl: "views/page/templates/page-list.view.client.html",
                controller: "pageListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/new", {
                templateUrl: "views/page/templates/page-new.view.client.html",
                controller: "pageNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId", {
                templateUrl: "views/page/templates/page-edit.view.client.html",
                controller: "pageEditController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget", {
                templateUrl: "views/widget/templates/widget-list.view.client.html",
                controller: "widgetListController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/new", {
                templateUrl: "views/widget/templates/widget-choose.view.client.html",
                controller: "widgetNewController",
                controllerAs: "model"
            })
            .when("/user/:userId/website/:websiteId/page/:pageId/widget/:widgetId", {
                templateUrl: "views/widget/templates/widget-edit.view.client.html",
                controller: "widgetEditController",
                controllerAs: "model"
            })
    }
})();

