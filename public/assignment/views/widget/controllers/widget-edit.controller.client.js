(function () {
    angular
        .module("WamApp")
        .controller("widgetEditController", widgetEditController);

    function widgetEditController($routeParams, $sce, $location, widgetService) {
        var model = this;
        model.pageId = $routeParams["pageId"];
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;
        model.widgetId = $routeParams.widgetId;

        // event handlers
        model.updateWidget = updateWidget;
        model.deleteWidget = deleteWidget;

        model.getWidgetEditUrlForType = getWidgetEditUrlForType;

        function init(){
            widgetService
                .findWidgetsByPageId(model.pageId)
                .then(function (widgets) {
                    model.widgets = widgets;
                });

            widgetService
                .findWidgetById(model.widgetId)
                .then(function (widget) {
                    model.widget = widget;
                });
        }

        init();

        // implementation

        function updateWidget(widget) {
            widgetService
                .updateWidget(widget._id, widget)
                .then(function() {
                    $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
                });
        }

        function deleteWidget(widget) {
            widgetService
                .deleteWidget(widget._id)
                .then(function() {
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
                });
        }

        function getWidgetEditUrlForType(type) {
            return 'views/widget/templates/widget-'+type.toLowerCase()+'-edit.view.client.html';
        }
    }
})();