/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 7/1/12
 * Time: 4:16 PM
 * To change this template use File | Settings | File Templates.
 */
define([
    'jquery',

    'backbone',
    'utilities',
    'underscore',
    'text!../../../templates/about.html'
],
    function($,

             Backbone,
             utilities,
             _,
             aboutTemplate
        )
    {

        var aboutView = Backbone.View.extend({

            initialize:function()
            {
                _.bindAll(this,'render');
                this.render();
            },
            render:function()
            {
                utilities.applyTemplate($("#mainContent"),aboutTemplate);
                //$("#mainContent").trigger('pagecreate');

            }


        });

        return aboutView;

    });
