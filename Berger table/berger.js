/*
I create Berger's table using the algebraic method of pairing two competitors.
All the conditions and formulas that match the competitors in createBergerTable() function
are the rules of the algebraic method.
1.20.2019 - Miso Cernak
*/

//Creates an array of objects (objects are teams, and have necessary values)
let teams = [{ bergerNumber: "", name: "Team 1", place: "Place 2" }, { bergerNumber: "", name: "Team 2", place: "Place 2" }, { bergerNumber: "", name: "Team 3", place: "Place 3" }, { bergerNumber: "", name: "Team 4", place: "Place 4" }, { bergerNumber: "", name: "Team 5", place: "Place 5" }, { bergerNumber: "", name: "Team 6", place: "Place 6" }, { bergerNumber: "", name: "Team 7", place: "Place 7" }, { bergerNumber: "", name: "Team 8", place: "Place 8" }, { bergerNumber: "", name: "Team 9", place: "Place 9" }, { bergerNumber: "", name: "Team 10", place: "Place 10" }, { bergerNumber: "", name: "Team 11", place: "Place 11" }, { bergerNumber: "", name: "Team 12", place: "Place 12" }];
//Displays an array of teams in console
console.log(teams);
//Displays length of array
console.log(teams.length);
//Creates an empty array that will store matches
let schedule = [];

function createBergerTable() {
    //Add Berger number to every array element
    for (let i = 0; i < teams.length; i++) {
        teams[i].bergerNumber = i + 1;
    }
    //If index of an element from array is even, code executes from here
    if (teams.length % 2 == 0) {
        let teamsSum = teams.length;
        //Each new entry in the loop takes the next element of the array
        for (let i = 0; i < teams.length; i++) {
            //Checks if the taken element is the last one 
            if (teams[i].bergerNumber == teams.length) {
                let team2 = teams[teams.length - 1].bergerNumber;
                console.log(team2);
                //Takes every previous element of the array and matches it with the last one
                for (let j = 0; j < teams.length - 1; j++) {
                    let team1 = teams[j].bergerNumber;
                    if (2 * team1 > teamsSum) {
                        let k = 2 * team1;
                        k = k - teamsSum;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                    else {
                        let k = 2 * team1;
                        k = k - 1;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                }
            }
            //If taken element is not the last one
            else {
                let team1 = teams[i].bergerNumber;
                console.log(team1);
                //Takes every next element and matches it with the element with [i] index
                for (let j = i + 1; j < teams.length - 1; j++) {
                    let team2 = teams[j].bergerNumber;
                    if (team1 + team2 > teamsSum) {
                        let k = team1 + team2;
                        k = k - teamsSum;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                    else {
                        let k = team1 + team2;
                        k = k - 1;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                }
            }
        }
    }
    /*If number of elements in array is odd, code executes from here 
    (rest of the code is same as first part, except first line in this block)*/
    else {
        //Adds an empty array element
        teams.push({ bergerNumber: teams.length + 1, name: "Nema" })
        let teamsSum = teams.length;
        for (let i = 0; i < teams.length; i++) {
            if (teams[i].bergerNumber == teams.length) {
                for (let j = 0; j < teams.length - 1; j++) {
                    let team1 = teams[j].bergerNumber;
                    let team2 = teams[teams.length - 1].bergerNumber;
                    if (2 * team1 > teamsSum) {
                        let k = 2 * team1;
                        k = k - teamsSum;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                    else {
                        let k = 2 * team1;
                        k = k - 1;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                }
            }
            else {
                let team1 = teams[i].bergerNumber;
                console.log(team1);
                for (let j = i + 1; j < teams.length - 1; j++) {
                    let team2 = teams[j].bergerNumber;
                    if (team1 + team2 > teamsSum) {
                        let k = team1 + team2;
                        k = k - teamsSum;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                    else {
                        let k = team1 + team2;
                        k = k - 1;
                        if (j % 2 == 0) {
                            schedule.push({ round: k, fTeam: teams[team2 - 1].name, sTeam: teams[team1 - 1].name, playground: teams[team2 - 1].place });
                            console.log("Round: " + k + ", teams: " + team2 + " vs " + team1);
                        }
                        else {
                            schedule.push({ round: k, fTeam: teams[team1 - 1].name, sTeam: teams[team2 - 1].name, playground: teams[team1 - 1].place });
                            console.log("Round: " + k + ", teams: " + team1 + " vs " + team2);
                        }
                    }
                }
            }
        }
    }
    console.log(schedule);
}

function fillTable() {
    //Sorts schedule array by round number
    schedule.sort(function (a, b) { return a.round - b.round });
    //Gets the <table> created in html document
    let table = document.getElementById("scheduleTable");
    //This for loop creates a table with information for every object in schedule array
    for (let i = 0; i < schedule.length; i++) {
        table.innerHTML += `<tr>
            <td colspan="2" class="place">
                <p id="location">Mesto</p>
            </td>
            <td colspan="2" class="homeTeam">
                <p id="home">Domaci tim</p>
            </td>
            <td colspan="4" class="timeAndDate">
                <p id="dateAndTime">Datum i vreme</p>
            </td>
        </tr>
        <tr>
            <td colspan="8">
                <p id="teams">Domaci FK - Gosti FK</p>
                <p id="roundPlaying">Kolo: 1</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>S</p>
            </td>
            <td colspan="3" class="colspaned">
                <p id="referee">Sudija glavni</p>
            </td>
            <td colspan="3" class="colspaned">
                <p id="first">Pomocni prvi</p>
            </td>
            <td>
                <p>P1</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>D</p>
            </td>
            <td colspan="3" class="colspaned">
                <p id="delegate">Delegat</p>
            </td>
            <td colspan="3" class="colspaned">
                <p id="second">Pomocni drugi</p>
            </td>
            <td>
                <p>P2</p>
            </td>
        </tr>
        <tr class="lastRow">
            <td>
                <p>L</p>
            </td>
            <td colspan="3">
                <p id="medic">Lekar</p>
            </td>
            <td colspan="3" class="colspaned">
                
            </td>
            <td>
                
            </td>
        </tr>`;
        /*
        document.getElementByID("someID").id = "someID" + i creates unique ID for every cell with an ID
        Code executes for every new entry in the loop
        */
        document.getElementById("home").innerHTML = schedule[i].fTeam;
        document.getElementById("home").id = "home" + i;
        document.getElementById("dateAndTime").id = "dateAndTime" + i;
        document.getElementById("teams").innerHTML = schedule[i].fTeam + " - " + schedule[i].sTeam;
        document.getElementById("teams").id = "teams" + i;
        document.getElementById("roundPlaying").innerHTML = schedule[i].round + ". round";
        document.getElementById("roundPlaying").id = "roundPlaying" + i;
        document.getElementById("location").innerHTML = schedule[i].playground;
        document.getElementById("location").id = "location" + i;
    }
}