/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 6/14/12
 * Time: 11:43 AM
 * To change this template use File | Settings | File Templates.
 */
define("router",[
    'underscore',
    'backbone','jquery','utilities','text!../templates/indextemplate.html','app/view/HeaderView','app/view/AboutView','app/view/MainView'],
    function(_,Backbone,$,utilities,indexTemplate,HeaderView,AboutView,MainView)
    {

        var Router = Backbone.Router.extend({
            initialize:function()
            {
                var self = this;

                var defaultView = new HeaderView();

                defaultView.updateToMain();

            },
            routes:{
                "":"home",
                "about":"about",
                "*action":"defaultAction"

            },
            home:function(){
                utilities.updateActiveMenu('home');

                new MainView();

            },
            about:function()
            {

                var aboutView = new AboutView();
            },
            defaultAction:function()
            {
                alert("not yet implemented");
            }



        });

        var router = new Router();


        Backbone.history.start();  //now start the router


        return router;






    }






);
