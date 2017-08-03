(function () {
    angular
        .module("WamApp")
        .service("widgetService", widgetService);

    function widgetService($http) {


        // event handlers
        this.createWidget = createWidget;
        this.findWidgetsByPageId = findWidgetsByPageId;
        this.findWidgetById = findWidgetById;
        this.updateWidget = updateWidget;
        this.deleteWidget = deleteWidget;

        function init() {

        }

        // implementation

        function createWidget(pageId, widget) {
            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.post(url, widget);
        }

        /*
        function createWidget(pageId, widget) {
            widget.pageId = pageId;
            widget._id = (new Date()).getTime() + "";
            widgets.push(widget);
        }
*/
        function findWidgetsByPageId(pageId) {
            var url = "/api/assignment/page/" + pageId + "/widget";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        }

        /*
        function findWidgetsByPageId(pageId) {
            var sites = [];
            for(var w in widgets) {
                if(widgets[w].pageId === pageId) {
                    sites.push(widgets[w]);
                }
            }
            return sites;
        }
        */

        function findWidgetById (widgetId) {
        //    var url = "/api/assignment/user/" + userId + "/website" +websiteId + "/page/" + pageId + "/widget" + widgetId;
            var url = "/api/assignment/widget/" + widgetId;
            return $http.get(url)
                .then(function (response) {
                return response.data;
            });
        }

        /*
        function findWidgetById (widgetId) {
            return widgets.find(function (widget) {
                return widget._id === widgetId;
            })
        }
*/

        function updateWidget(widgetId, widget) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.put(url, widget)
                .then(function (response) {
                    return response.data;
                });
        }
        /*
        function updateWidget(widgetId, widget) {
            for (var w in widgets) {
                if (widgets[w]._id === widgetId) {
                    widgets[w] = widget;
                    return;
                }
            }
            return null;

        }
*/
        function deleteWidget(widgetId) {
            var url = "/api/assignment/widget/" + widgetId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        /*
        function deleteWidget(widgetId) {
            var widget = widgets.find(function (widget) {
                return widget._id === widgetId;
            });
            var index = widgets.indexOf(widget);
            widgets.splice(index, 1);
        }
*/
    }

})();
