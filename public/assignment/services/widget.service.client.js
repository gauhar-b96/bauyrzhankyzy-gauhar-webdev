(function () {
    angular
        .module("WamApp")
        .service("widgetService", widgetService);

    function widgetService() {

        // array that represents local data for the widgets
        var widgets = [
            {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
            {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"
            },
            {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            {
                "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E"
            },
            {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ]

        // event handlers
        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        // implementation
        //TODO: wrong function fix
        function createWidget(pageId, widget) {
            widget.created = new Date();
            widget.updated = new Date();
            widget._id = (new Date()).getTime() + "";
            widgets.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var sites = [];
            for(var w in widgets) {
                if(widgets[w].developerId === userId) {
                    sites.push(widgets[w]);
                }
            }
            return sites;
        }

        function findWidgetById (widgetId) {
            return widgets.find(function (widget) {
                return widget._id === widgetId;
            })
        }

        // TODO
        function updateWidget(widgetId, widget) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets[w] = widget;
                    return;
                }
            }
            return null;

        }

        function deleteWidget(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }

    }

})();
