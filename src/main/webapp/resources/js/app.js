//Loading the scripts that i need and then passing off to router to load everything else

requirejs.config({
    paths:{
        jquery:'libs/jquery-1.7.2.min',
        jquerymobile:'libs/jquery.mobile-1.1.0',
        underscore:'libs/underscore',
        text:'libs/text',
        backbone:'libs/backbone',
        bootstrap: 'libs/bootstrap',
        router:'app/router'


    },
    shim:{
        'backbone':{
            deps:['underscore','jquery'],
            exports:'Backbone'
        },
        'text':{
            deps:['backbone'],
            exports:'text'
        },
        'underscore':{
            exports:"_"
        },
        'bootstrap':{
            deps:['jquery'],
            exports:"bootstrap"
        }
    }

});

requirejs(
    ['jquery','bootstrap','router'],
    function(){
        console.log("all loaded");

    }
);






