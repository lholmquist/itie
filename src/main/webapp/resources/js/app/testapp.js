/**
 * Created by IntelliJ IDEA.
 * User: lholmquist
 * Date: 6/28/12
 * Time: 12:10 PM
 * To change this template use File | Settings | File Templates.
 */


$(document).ready(function(){

    //i can create a button dynamically and then bind a click function to it and the add that to the wrapperTwo div
    $("<button id='button1' name='button1' value='show other' type='button'>Show Other</button>").bind('click',function(){
        $("#wrapperOne").show();
        $("#wrapperTwo").hide();
    }).appendTo("#wrapperTwo");



    //this submit method takes control of your form submit
    //testForm is the id of the form.  don't forget the # when selecting out id's
    $("#testForm").submit(function(){


        //one way of getting the values
        var input1 = $("#t1").val();


        //this is better
        //this first part is selecting the text input in the form as an array basically
        //each is a jquery method to help iterate that array
        //i pass in index incase i need to know the locaiton of the array i'm at

        //but lets empty that div first so we don't have dupes
        $("#printValues").empty();

        $("form input[type=text]").each(function(index){

            //here i'm selecting the div with the id of printValues and the appending the value and the id of each text input

            $("#printValues").append(this.value + ' ' + this.id+ '<br>').css({'color':'blue'}); // i can chain jquery methods as well

        });



        //hiding the div with the id of wrapperOne
        $("#wrapperOne").hide();




        //showing the div with the id of wrapperTwo
        $("#wrapperTwo").show();


        //i return false here so the form doesn't "submit",
        // that is, it doesn't do a post back or whatever which essentialy reloads the page.  which is bad in a single page app.
        //if this wasn't here then if you submitted then hit refresh,  it would ask you to resubmit the form data,  this way it won't do that
        return false;

    });







});


