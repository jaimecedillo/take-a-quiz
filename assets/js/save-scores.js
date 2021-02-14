function showScores() {
    // either get scores from local storage or set to empty array
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    //  sort scores by highest
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });
    highScores.forEach(function (score) {
        // create li tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + "__" + score.score;

        // display on page
        var orderList = document.getElementById("highscores");
        orderList.appendChild(liTag);
    });
}
// clear scores functions
function clearScores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
// clear button
document.getElementById("clear").onclick = clearScores;

// run function when page loads
showScores();