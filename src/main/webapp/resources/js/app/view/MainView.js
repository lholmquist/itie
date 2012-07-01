/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 7/1/12
 * Time: 4:51 PM
 * To change this template use File | Settings | File Templates.
 */

define([
    'jquery',
    'backbone',
    'utilities',
    'underscore','text!../../../templates/mainTemplate.html'],
    function($,
             Backbone,
             utilities,
             _,MainTemplate)
    {


        var mainView = Backbone.View.extend({
            el:$("#mainContent"),
            initialize:function()
            {
                _.bindAll(this,'render');
                this.render();
            },
            render:function()
            {
                utilities.applyTemplate($(this.el),MainTemplate,{ties:['red','orange','yellow','green','blue','purple']});

                $("#tieScroll li").bind('click',function(event){

                    $("#showMeColor").css({'backgroundColor':event.target.style.backgroundColor});

                });

            }



        });


        return mainView;

    });