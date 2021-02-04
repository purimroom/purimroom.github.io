var CORRECT_ANS = "485";
var strUserAnswer;
var nRoundNumber = 0;

$(function() {
    init(); 
});

function init() {
    strUserAnswer = "";
    $("#cheack-button").on("click", cheackAns);
    $("#fedback").hide();
    
    // if it's coming from a wrong answer remove background answer.
    if(nRoundNumber > 0) {
        nRoundNumber = 0;
        $("#fedback").removeClass("bad-fedback");
        $("#fedback-button").removeClass("bad-button");
    }
    $("#back-button").off("click");
    $("#first-part").show();
    $("#second-part").hide();

    // clear the squers
    for (var index = 1; index < 4; index++) {
        $("#ans" + index).val("");
    }
}

function cheackAns(event) {
    var strFedbackType;
    
    // if all the squers are filed- work
    if($("#ans1").val() !== "" && $("#ans2").val() !== "" && $("#ans3").val() !== "") {
        $("#cheack-button").off("click");
        strUserAnswer = $("#ans1").val() + $("#ans2").val() + $("#ans3").val();
        if(String(strUserAnswer) === CORRECT_ANS) {
            // if its's thecorrect answer give a "good" fedback and add "good" button that will take to the next question
            strFedbackType = "good";
            $("#fedback-button").on("click", nextQuestion);    
        } else {
            // if its's thecorrect answer give a "bad" fedback and add "bad" button that will take back to the first question 
            strFedbackType = "bad";

            // add a bad answer index
            nRoundNumber++;
            $("#fedback-button").on("click", init);    
        }
        $("#fedback").show();
        $("#fedback").addClass(strFedbackType + "-fedback");
        $("#fedback-button").addClass(strFedbackType + "-button");
    }
}

function nextQuestion(event) {
    $("#fedback-button").off("click");
    $("#first-part").hide(1000);
    setTimeout(function(){
        $("#second-part").show(1000);
        $("#back-button").show(2000);
    },1000);
    $("#back-button").on("click", init);
}