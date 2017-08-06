(function () {
    angular
        .module("WamApp")
        .controller("widgetNewController", widgetNewController);

    function widgetNewController($sce, $routeParams, $location, widgetService) {
        var model = this;
        model.pageId = $routeParams["pageId"];
        model.websiteId = $routeParams.websiteId;
        model.userId = $routeParams.userId;
       // model.widgetId = model.pageId;

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

        function createWidget(pageId, widgetType) {
            var widget = {};
            widget.widgetType = widgetType;
            pageId = model.pageId;
            widgetService
                .createWidget(pageId, widget)
                .then(function(newWidget) {
                    $location.url("/user/"+model.userId+"/website/"+
                        model.websiteId+"/page/"+model.pageId+"/widget/"+newWidget._id);
                });
        }

    }
})();