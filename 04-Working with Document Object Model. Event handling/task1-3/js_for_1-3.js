//#1
function farToCel(far)
{
    return 5 / 9 * (far - 32);
}

function celToFar(cel)
{
    return cel * 9 / 5 + 32;
}

function forFar()
{
    var grad = +document.getElementById('iFar').value;
    var elem = document.getElementById('cel');
    elem.textContent = farToCel(grad);
}

function forCel()
{
    var grad = +document.getElementById('iCel').value;
    var elem = document.getElementById('far');
    elem.textContent = celToFar(grad);
}

//#2
var positiveTask2 = 0;
var taskNTask2 = 0;

function onMouseClickNextTask2()
{
    var a = Math.floor(Math.random() * 8) + 2;
    var b = Math.floor(Math.random() * 8) + 2;
    var numStr = a + " × " + b;
    window.sol = parseInt(a * b);
    document.getElementById("nums").innerHTML = numStr;
}

function onMouseClickCheck()
{
    var answer = parseInt(document.getElementById("input").value);
    taskNTask2++;
    if (sol == answer)
    {
        document.getElementById("field").innerHTML = "true";
        positiveTask2++;
    }
    else
        {
        document.getElementById("field").innerHTML = "false";
    }
    var res = Math.round((positiveTask2 / taskNTask2) * 100);
    document.getElementById("score1").innerHTML = res + "%";
    document.getElementById("score2").innerHTML = positiveTask2 + " + out of  " + taskNTask2 + ".";
}

//#3
var positiveTask3 = 0;
var taskNTask3 = 0;
var resTask3 = 0;
disableAll();

function onMouseClickNextTask3()
{
    document.getElementById("1i").className = "incorrect";
    document.getElementById("2i").className = "incorrect";
    document.getElementById("3i").className = "incorrect";
    document.getElementById("4i").className = "incorrect";
    document.getElementById("1i").disabled = false;
    document.getElementById("2i").disabled = false;
    document.getElementById("3i").disabled = false;
    document.getElementById("4i").disabled = false;

    var a = Math.floor(Math.random() * 8) + 2;
    var b = Math.floor(Math.random() * 8) + 2;
    var numStr = a + " × " + b;
    window.sol = parseInt(a * b);
    document.getElementById("nums_2").innerHTML = numStr;
    var rID = Math.floor(Math.random() * 4) + 1;

    document.getElementById(rID.toString()).innerHTML = sol.toString();
    document.getElementById(rID.toString() + "i").className = "correct";

    if (document.getElementById("1i").classList.contains('incorrect'))
    {
        document.getElementById("1").innerHTML = (sol - Math.floor(Math.random() * 5) - 6).toString();
    }
    if (document.getElementById("2i").classList.contains('incorrect'))
    {
        document.getElementById("2").innerHTML = (sol - Math.floor(Math.random() * 5) + 11).toString();
    }
    if (document.getElementById("3i").classList.contains('incorrect'))
    {
        document.getElementById("3").innerHTML = (sol - Math.floor(Math.random() * 5) + 6).toString();
    }
    if (document.getElementById("4i").classList.contains('incorrect'))
    {
        document.getElementById("4").innerHTML = (sol - Math.floor(Math.random() * 5) - 14).toString();
    }

}

function onMouseClickRadioBut(target)
{
    taskNTask3++;
    if (document.getElementById(target.id).classList.contains('correct'))
    {
        document.getElementById("field_2").innerHTML = "Correct";
        positiveTask3++;
    }
    else {
        document.getElementById("field_2").innerHTML = "False, the right answer is  " + sol;
    }
    document.getElementById(target.id).checked = false;
    disableAll();
    resTask3 = Math.round((positiveTask3 / taskNTask3) * 100);
    document.getElementById("score1_2").innerHTML = resTask3 + "%";
    document.getElementById("score2_2").innerHTML = positiveTask3 + " correct answer out of " + taskNTask3 + ".";
}

function disableAll()
{
    document.getElementById("1i").disabled = true;
    document.getElementById("2i").disabled = true;
    document.getElementById("3i").disabled = true;
    document.getElementById("4i").disabled = true;
}

