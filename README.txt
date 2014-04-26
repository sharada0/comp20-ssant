Sharada Sant
Due: 4/10/2014
Comp 20 - A4 (2048 Scores and Grid)

1. Correctly Implemented

I attempted to implement the POST /submit.json, GET /scores.json, and root index
aspects of the assignment. However, while the connection seems to be made, my app
is not actually displaying the info on the page (I have not been able to figure out
where in the process I did something wrong).

2. Collaboration

I discussed some aspects with Shriya Nevatia, so that we
could both understand the concepts and assignment better.
I also used code from class and the workshop to help me with this assignment.

3. Time Spent

18 hours

4. Written in txt format

5. How score and grid are stored

They are elements in GameManager, and they are called
score and grid, respectively.
The file they are stored in is game_manager.js

6. Modifications:

game_manager.js
in this function: GameManager.prototype.actuate = function () {}, I modified the content
as follows:
if (this.over) {
    $.post("http://mighty-everglades-5477.herokuapp.com/submit.JSON", {
      score = this.score,
      username = "Player 0",
      grid = stringify(this.grid),
      created_at = new Date()
    });
    this.storageManager.clearGameState();
}

index.html
added in this line: <script type = "text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
