(function () {
    angular
        .module("WamApp")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($sce, $routeParams, $location, widgetService) {
        var model = this;
        model.pageId = $routeParams["pageId"];
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;
        model.widgetId = model.pageId;

        model.getWidgetEditUrlForType = getWidgetEditUrlForType;

        // event handlers
        model.createWidget = createWidget;


        function init(){
            widgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (widgets) {
                    model.widgets = widgets;
                });

        }

        init();

        // implementation

        function createWidget(pageId, widget) {
            pageId = model.pageId;
            widgetService
                .createWidget(pageId, widget)
                .then(function() {
                    $location.url("api/assignment/page/" + pageId +"/widget/" + model.widgetId)
                });
        }

        function getWidgetEditUrlForType(type) {
            return 'views/widget/templates/widget-'+type.toLowerCase()+'-edit.view.client.html';
        }
    }
})();