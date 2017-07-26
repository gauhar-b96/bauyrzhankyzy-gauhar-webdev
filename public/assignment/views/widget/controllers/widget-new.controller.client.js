(function () {
    angular
        .module("WamApp")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($sce, $routeParams, $location, widgetService) {
        var model = this;
        model.pageId = $routeParams["pageId"];
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;
        model.widgetId = $routeParams.widgetId;

        model.getWidgetEditUrlForType = getWidgetEditUrlForType;

        // event handlers
        model.createWidget = createWidget;

        function init(){
            model.widgets = widgetService.findWidgetsByPageId(model.pageId);
        }

        init();

        // implementation
        function createWidget(pageId, widget) {
            websiteService.createWidget(pageId, widget);
            $location.url('/user/'+model.userId+'/website');
        }


        function getWidgetEditUrlForType(type) {
            return 'views/widget/templates/widget-'+type.toLowerCase()+'-edit.view.client.html';
        }
    }
})();