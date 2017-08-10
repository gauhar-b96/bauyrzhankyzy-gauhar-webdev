var mongoose = require('mongoose');
var widgetSchema =  require('./widget.schema.server');
var widgetModel = mongoose.model('WidgetModel', widgetSchema);
var pageModel = require('../page/page.model.server');

widgetModel.createWidget = createWidget;
widgetModel.findWidgetById = findWidgetById;
widgetModel.findWidgetsByPageId = findWidgetsByPageId;
widgetModel.deleteWidget = deleteWidget;
widgetModel.updateWidget = updateWidget;

module.exports = widgetModel;

function createWidget(pageId, widget) {
    widget._page = pageId;
    var widgetTemp = null;
    return widgetModel
        .create(widget)
        .then(function (widgetDoc) {
            widgetTemp = widgetDoc;
            return pageModel.addWidget(websiteId, widgetTemp._id);
        })
        .then(function (widgetDoc) {
            return widgetTemp;
        });
}

function findWidgetsByPageId(pageId) {
    return widgetModel
        .find({_page: pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function deleteWidget(pageId, widgetId) {
    return widgetModel
        .remove({_id:widgetId})
        .then(function (status) {
            return pageModel.removeWidget(pageId, widgetId);
        });
}

function updateWidget(pageId, newWidget) {
    return widgetModel.update({_id: pageId}, {
        $set : {
            name: newWidget.name,
            text: newWidget.text,
            placeholder: newWidget.placeholder,
            description: newWidget.description,
            url: newWidget.url,
            width: newWidget.width,
            height: newWidget.height,
            rows: newWidget.rows,
            size: newWidget.size,
            class: newWidget.class,
            icon: newWidget.icon
        }
    });
}