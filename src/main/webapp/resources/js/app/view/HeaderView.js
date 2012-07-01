/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 6/25/12
 * Time: 2:51 PM
 * To change this template use File | Settings | File Templates.
 */

/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 6/18/12
 * Time: 3:00 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'backbone',
    'utilities',
    'underscore',
    'text!../../../templates/headerTemplate.html',
    'text!../../../templates/innerHeaderTemplate.html'],
    function($,
             Backbone,
             utilities,
             _,
             HeaderTemplate,
             InnerHeaderTemplate)
    {


        var headerView = Backbone.View.extend({
            el:$("#mainHeader"),
            initialize:function()
            {
                _.bindAll(this,'render');
                this.render();
            },
            render:function()
            {
                utilities.applyTemplate($(this.el),HeaderTemplate);


            },
            updateToMain:function()
            {
                utilities.applyTemplate($("#innerHeader"),InnerHeaderTemplate);
            }




        });


        return headerView;


    });






