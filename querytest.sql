##DROP DATABASE lmsdb; //Run this in the MySQL client when you want to clear the databse
## find the source of your database file
##source C:\Users\--your path--\lmsdb.sql

use lmsdb; ## initiate the database

//Testing out INSERT user

INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("JayStudent","Jay","Gurjar","Chinook street","student","Jay123");
INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("AliStudent","Ali","Siddiqi","Skyview 123","student","Ali234");

INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("MoussaviTeacher","Mahmood","Moussavi","Bel air","teacher","Moussavi123");
INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("MourshirPourTeacher","Mohammed","Mourshirpour","Hollywood street","teacher","Moshi123");
INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("Pafederl","Pavol","Federl","Downtown street","teacher","pavol123");

INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("RedaProfessor","Reda","Alhajj","Center street","teacher","Reda123");

INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("KashfiaTA","Kashfia","Sulinaz","Southcenter street","teacher","Kashfia123");
INSERT INTO user(username,firstname,lastname,address,role,password) VALUES ("ChrisMossmanTA","Christopher","Mossman","Downtown street","teacher","Chris123");

SELECT * FROM user;

## Must create the user before the student
//Insert students
INSERT INTO student(username,studentID,major,year) VALUES("JayStudent",1000,"CPSC",3);
INSERT INTO student(username,studentID,major,year) VALUES("AliStudent",1001,"CPSC",3);


//Insert teachers

INSERT INTO teacher(username,teacherid,isTA) VALUES("MoussaviTeacher",9999,"N");
INSERT INTO teacher(username,teacherid,isTA) VALUES("MourshirPourTeacher",10000,"N");
INSERT INTO teacher(username,teacherid,isTA) VALUES("Pafederl",10001,"N");
INSERT INTO teacher(username,teacherid,isTA) VALUES("RedaProfessor",10002,"N");

INSERT INTO teacher(username,teacherid,isTA) VALUES("KashfiaTA",10003,"Y");
INSERT INTO teacher(username,teacherid,isTA) VALUES("ChrisMossmanTA",10004,"Y");

## Test out different conditions to extract columns
//Get name of the student
SELECT firstname, lastname FROM user,student WHERE student.username = user.username AND studentID = 1000;

//Testing out the relationships

INSERT INTO course(courseid, name,time) VALUES(471,"Database systems","MWF");
INSERT INTO course(courseid, name,time) VALUES(480,"Principles of Software Development","MWF");
INSERT INTO course(courseid, name,time) VALUES(457,"Operating Systems","MWF");

//Set who teaches which course
INSERT INTO courseteacher(courseid,teacherid) VALUES(471,10002);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(480,9999);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(480,10000);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(457,10001);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(471,10003);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(471,10004);

//Select all teachers with names
SELECT teacherid, firstname, lastname, isTA FROM user,teacher WHERE teacher.username = user.username;

//Show names of who is teaching what
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username;

//select all TA who is teaching the course
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND 
		isTA = "Y";

//select All professors who is teaching a specific course
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND 
		course.courseid = 480;


//set which courses the student is taking


INSERT INTO takes(courseid,studentID) VALUES(471,1000);
INSERT INTO takes(courseid,studentID) VALUES(480,1000);
INSERT INTO takes(courseid,studentID) VALUES(457,1000);

INSERT INTO takes(courseid,studentID) VALUES(471,1001);
INSERT INTO takes(courseid,studentID) VALUES(480,1001);

//Check who is taking which course
SELECT course.courseid, course.name, user.firstname, user.lastname, user.username, student.studentid
	FROM takes, course, student, user
	WHERE takes.courseid = course.courseid AND 
		student.studentid = takes.studentid AND
		student.username = user.username;

//Select all students who is taking a specific course
SELECT course.courseid, course.name, user.firstname, user.lastname, user.username, student.studentid
	FROM takes, course, student, user
	WHERE takes.courseid = course.courseid AND 
		student.studentid = takes.studentid AND
		student.username = user.username AND
		course.courseid = 471;



//Selecting stuff statements
SELECT * FROM student;
SELECT * FROM teacher;
SELECT * FROM user;
SELECT firstname,lastname from teacher, user WHERE teacher.username = user.username;//Select all teacher names
SELECT firstname,lastname from teacher, user WHERE teacher.username = user.username AND isTA = "Y"; // Select all TA


//Selecting all students and revealing their info	
SELECT DISTINCT course.courseid,course.name, student.studentID, firstname, lastname, user.username 
	from user,student,course, takes 
	WHERE student.studentID = takes.studentID 
		AND student.username = user.username
		AND user.firstname = "Jay";
		
//Testing out notifications
INSERT INTO notification(notificationid, date, time, status, courseid) VALUES (01, "2021-11-14", "11:11:11", "Database project is due soon", 471);
INSERT INTO notification(notificationid, date, time, status, courseid) VALUES (02, "2021-11-14", "11:11:12", "480 project starts next week!", 480);

INSERT INTO receives(notificationid, studentid) VALUES (01,1000); //Gonna need a for loop to send it to all students by changing studentID
INSERT INTO receives(notificationid, studentid) VALUES (01,1001);
INSERT INTO receives(notificationid, studentid) VALUES (02,1000);
INSERT INTO receives(notificationid, studentid) VALUES (02,1001);

//Checking all notifications for student
SELECT DISTINCT user.firstname, user.lastname, user.username, student.studentid, notification.status, notification.date,notification.time
	FROM course, student, user, notification, receives
	WHERE receives.studentID = student.studentID AND 
		student.username = user.username AND
		user.firstname = "Jay";

//Testing out communication
INSERT INTO communication(communication_id, date) VALUES (01, "2021-11-14");
INSERT INTO communication(communication_id, date) VALUES (02, "2021-11-14");

INSERT INTO discussion(username, name, content,communication_id) VALUES ("JayStudent", "Jay", "I just completed 471 API, project looks great!", 01);
INSERT INTO discussion(username, name, content, communication_id) VALUES("AliStudent", "Ali", "Good job Jay, I now want you to build an app!", 01);

INSERT INTO email_list(email, studentID, communication_id) VALUES ("JayGurjar@gmail.com", 1000, 01);
INSERT INTO email_list(email, studentID, communication_id) VALUES ("AliSiddiqi@gmail.com", 1000, 01);

INSERT INTO writes(communication_id, studentID) VALUES (01, 1000);
INSERT INTO writes(communication_id, studentID) VALUES (02, 1000);

//Select the student communications and email
SELECT DISTINCT user.firstname, user.lastname, communication.communication_id, discussion.content, email_list.email
	FROM user, student, writes, communication, discussion, email_list
	WHERE user.username = student.username AND
		student.studentID = writes.studentID AND 
		writes.communication_id = communication.communication_id AND
		communication.communication_id = email_list.communication_id AND
		communication.communication_id = discussion.communication_id;

		
//Delete statements, will cascade into other tables.
DELETE FROM student WHERE student.username = "JayStudent"; 
DELECT FROM user WHERE username = "Ali";