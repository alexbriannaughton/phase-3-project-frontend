Project pitch:<br>
Our app is a chore wheel that takes in a list of chores and people and assigns chores to each person. 

<br><br>
User stories:<br>
-I can can create a list of chores (chore wheel table)<br>
-I can add a list of users to the chore wheel<br>
-I can assign chore to each user<br>
-I can set time frame for each user's chore to reassign<br>
-I can see what chore is assigned to me<br>
-I can delete chores from my chore list<br>
-I can add new chores to my chore list <br>
-I can update chores on my chore list<br>
<br><br>
Tables<br>
Task table (belongs to wheel table)<br>
-Name<br>
-Wheel ID<br>

<br><br>
Wheel table (has many tasks and users):<br>
-wheel name<br>

<br>
Person Table (belongs to a wheel):<br>
-name<br>
-wheel ID<br>

<br>
Person-Task Table: <br>
-Task ID<br>
-Person ID<br>
