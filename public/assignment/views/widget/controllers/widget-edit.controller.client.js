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
         //   model.widgets = widgetService.findWidgetsByPageId(model.pageId);
         //   model.widget  = widgetService.findWidgetById(model.widgetId);
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
        /*
        function updateWidget(widgetId, widget) {
            var pageid = widget.pageId;
            var websiteid = pageService.findPageById(pageid).websiteId;
            widgetService.updateWidget(widgetId, widget);
            $location.url('/user/'+model.userId+'/website/'+websiteid+'/page'+pageid+'/widget');
        }
        */

        function deleteWidget(widget) {
            widgetService
                .deleteWidget(widget._id)
                .then(function() {
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
                });
        }

/*
        function deleteWidget(widgetId) {
            var pageId = widgetService.findWidgetById(widgetId).pageId;
            var websiteId = pageService.findPageById(pageId).websiteId;
            widgetService.deleteWidget(widgetId);
            $location.url('/user/'+model.userId+'/website/'+websiteId+'/page'+pageId+'/widget');
        }
*/

        function getWidgetEditUrlForType(type) {
            return 'views/widget/templates/widget-'+type.toLowerCase()+'-edit.view.client.html';
        }
    }
})();