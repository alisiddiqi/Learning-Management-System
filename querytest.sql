##DROP DATABASE lmsdb; //Run this in the MySQL client when you want to clear the databse
## find the source of your database file
##source C:\Users\--your path--\lmsdb.sql

use lmsdb; ## initiate the database


INSERT INTO user(username,firstname,lastname,role) VALUES ("TEST1","MO","MOSHIRPOUR","student");
SELECT * FROM user;
## Must create the user before the student
INSERT INTO student(username,studentID,major,year) VALUES("TEST1",1000,"CPSC",3);
SELECT * FROM student;

INSERT INTO user(username,firstname,lastname,role) VALUES ("TEST2","Mahmood","Moussavi","teacher");
SELECT * FROM user;
## Must create the user before the student
INSERT INTO student(username,studentID,major,year) VALUES("TEST2",2000,"CPSC",4);
SELECT * FROM student;

## Test out different conditions to extract columns
SELECT firstname, lastname FROM user,student WHERE studentID = 2000;