var turtleProj = (function () {

    var turtle = [];
    var guid;

    //Turtle Constructor
    function turtleObj(name, weapon, headband, phrase, attack, guid) {
        this.name = name;
        this.weapon = weapon;
        this.headband = headband;
        this.phrase = phrase;
        this.attack = attack;
        this.id = guid;
    }
    //Turtles in array
    var ninja1 = new turtleObj("Joshua", "Fists", "Black", "Oh he mad yo.", "Double kick");
    var ninja2 = new turtleObj("Alex", "Shadow Price", "Orange", "Is that all?", "Titan smash");
    console.log("you are here");
    //console.log(steve.name);
    turtle[0] = ninja1;
    turtle[1] = ninja2;
    for (var i in turtle) {
        console.log("==>", turtle[i]);
    }
    //Add turtle
    function addTurtle() {
        var tCnt; // temp turtle 
        var tStr = "";
        var tRes = "";
        // temp string used for concat
        var tRes = $("#tableResults"); //document.getElementById("tableResults");   // element to render content
        tRes.empty(); // clear the html
        var tName = document.getElementById("name").value;
        var tWeapon = document.getElementById("weapon").value;
        var tHeadband = document.getElementById("headbandcolor").value;
        var tPhrase = document.getElementById("catchphrase").value;
        var tAttack = document.getElementById("attack").value;
        var tempninja = new turtleObj(tName, tWeapon, tHeadband, tPhrase, tAttack);
        turtle.push(tempninja);
        turtle.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        //var turtleObj;                // turtle object from the constructor
        for (var i in turtle) {
            var ninja = turtle[i];
            console.log(i);
            // Action buttons

            var editBtn = '<button onclick="turtleProj.doEdit(' + i + ')" class="btn btn-primary">' + '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'
            var deleteBtn = '<button onclick="turtleProj.doDelete(' + i + ')" class="btn btn-danger">' +
                '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>'
            var firebaseBtn = '<button onclick="turtleProj.doAjax(' + i + ')" class="btn btn-warning">' +
                '<span class="glyphicon glyphicon-fire" aria-hidden="true"></span></button>'

            // render to screen
            tStr = ""; // clear the temp string
            tStr += "<tr>";
            tStr += "<td colspan='2'>" + (i) + "</td>";
            tStr += "<td colspan='2'>" + ninja.name + "</td>";
            tStr += "<td colspan='2'>" + ninja.weapon + "</td>";
            tStr += "<td colspan='2'>" + ninja.headband + "</td>";
            tStr += "<td colspan='2'>" + ninja.phrase + "</td>";
            tStr += "<td colspan='2'>" + ninja.attack + "</td>";
            tStr += "<td colspan='2'>" + editBtn + " " + deleteBtn + " " + firebaseBtn + "</td>";
            tStr += "</tr>"

            //counter++;
            tRes.append(tStr);

        }
    }
    //Ajax call
    function AJAX(i) {
        var request = new XMLHttpRequest();
        request.open('POST', 'https://tmnt.firebaseio.com/.json', true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                console.log("Success");
            } else {
                console.log("Error");
            }
        };
        request.send(JSON.stringify(turtle[i]));
    }
//Edit
    // populate & show the modal
    function showEditDialog(tempId) {
        // save the ID to local variable
        guid = tempId;
        // create temp object of turtle in array (based on index argument)
        var tTurtle = turtle[tempId];
        //populate the fields
        $('#uname').val(tTurtle.name);
        $('#uweapon').val(tTurtle.weapon);
        $('#uheadband').val(tTurtle.headband);
        $('#uphrase').val(tTurtle.phrase);
        $('#uattack').val(tTurtle.attack);
        $('#myEditModal').modal("show");
        //
        console.log("THE TURTLE TO UPDATE:", tTurtle);
        console.log("THE ID for the turtle to update:", turtleToUpdate);

    }

//Save contents of the modal
    function updateTurtle() {
        console.log(turtle[guid]);
        turtle[guid].name = $('#uname').val();
        turtle[guid].weapon = $('#uweapon').val();
        turtle[guid].headband = $('#uheadband').val();
        turtle[guid].phrase = $('#uphrase').val();
        turtle[guid].attack = $('#uattack').val();
        var tStr = "";
        var tRes = "";
        // temp string used for concat
        var tRes = $("#tableResults"); //document.getElementById("tableResults");   // element to render content
        tRes.empty(); // clear the html

        //var turtleArr = [];

        //var turtleObj;                // turtle object from the constructor
        for (var i in turtle) {
            var ninja = turtle[i];
            console.log(i);
            // Action buttons
            //<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            //<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            var editBtn = '<button onclick="turtleProj.doEdit(' + i + ')" class="btn btn-primary">' + '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'
            var deleteBtn = '<button onclick="turtleProj.doDelete(' + i + ')" class="btn btn-danger">' +
                '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>'
            var firebaseBtn = '<button onclick="turtleProj.doAjax(' + i + ')" class="btn btn-warning">' +
                '<span class="glyphicon glyphicon-fire" aria-hidden="true"></span></button>'

            // render to screen
            tStr = ""; // clear the temp string
            tStr += "<tr>";
            tStr += "<td colspan='2'>" + (i) + "</td>";
            tStr += "<td colspan='2'>" + ninja.name + "</td>";
            tStr += "<td colspan='2'>" + ninja.weapon + "</td>";
            tStr += "<td colspan='2'>" + ninja.headband + "</td>";
            tStr += "<td colspan='2'>" + ninja.phrase + "</td>";
            tStr += "<td colspan='2'>" + ninja.attack + "</td>";
            tStr += "<td colspan='2'>" + editBtn + " " + deleteBtn + " " + firebaseBtn + "</td>";
            tStr += "</tr>"

            //counter++;
            tRes.append(tStr);

        }
    }
//Delete
    function deleteTurtle(i) {
        var tStr = "";
        var tRes = "";
        // temp string used for concat
        var tRes = $("#tableResults"); //document.getElementById("tableResults");   // element to render content
        tRes.empty(); // clear the html
        turtle.splice(i, 1);
        for (var i in turtle) {
            var ninja = turtle[i];
            console.log(i);
            var editBtn = '<button onclick="turtleProj.doEdit(' + i + ')" class="btn btn-primary">' + '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>'
            var deleteBtn = '<button onclick="turtleProj.doDelete(' + i + ')" class="btn btn-danger">' +
                '<span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>'
            var firebaseBtn = '<button onclick="turtleProj.doAjax(' + i + ')" class="btn btn-warning">' +
                '<span class="glyphicon glyphicon-fire" aria-hidden="true"></span></button>'

            // render to screen
            tStr = ""; // clear the temp string
            tStr += "<tr>";
            tStr += "<td colspan='2'>" + (i) + "</td>";
            tStr += "<td colspan='2'>" + ninja.name + "</td>";
            tStr += "<td colspan='2'>" + ninja.weapon + "</td>";
            tStr += "<td colspan='2'>" + ninja.headband + "</td>";
            tStr += "<td colspan='2'>" + ninja.phrase + "</td>";
            tStr += "<td colspan='2'>" + ninja.attack + "</td>";
            tStr += "<td colspan='2'>" + editBtn + " " + deleteBtn + " " + firebaseBtn + "</td>";
            tStr += "</tr>"
            tRes.append(tStr);

        }
    }
//Public methods
    return {
        doAdd: addTurtle,
        doDelete: deleteTurtle,
        doSave: updateTurtle,
        doEdit: showEditDialog,
        doAjax: AJAX
    }


})();