##DROP DATABASE lmsdb; //Run this in the MySQL client when you want to clear the databse
## find the source of your database file
##source C:\Users\--your path--\lmsdb.sql

use lmsdb; ## initiate the database

##Testing out INSERT user

INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("JayStudent","Jay","Gurjar","Chinook street","student","Jay123","JayGurjar@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("AliStudent","Ali","Siddiqi","Skyview 123","student","Ali234","AliSiddiqi@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("KaiStudent","Kai","Wang","Highrise 123","student","Kai123","KaiWang@gmail.com");

INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("MoussaviTeacher","Mahmood","Moussavi","Bel air","teacher","Moussavi123","Moussavi@Gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("MourshirPourTeacher","Mohammed","Mourshirpour","Hollywood street","teacher","Moshi123","Mourshirpour@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("Pafederl","Pavol","Federl","Downtown street","teacher","pavol123","Pavol@gmail.com");

INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("RedaProfessor","Reda","Alhajj","Center street","teacher","Reda123","Reda@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("ChrisParkerProf","Christian","Parker","Wall street","teacher","CParker123","CParker@gmail.com");


INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("KashfiaTA","Kashfia","Sulinaz","Southcenter street","teacher","Kashfia123","Kashfia@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("ChrisMossmanTA","Christopher","Mossman","Downtown street","teacher","Chris123","ChrisMossman@gmail.com");
INSERT INTO user(username,firstname,lastname,address,role,password,email) VALUES ("DeanTeacherOfMultipleCourses","Dean","TeachesMultipleCourses","TFDL","teacher","Dean123","DeanTeachesMultipleCourses@gmail.com");


SELECT * FROM user;

## Must create the user before the student
##Insert students
INSERT INTO student(username,studentID,major,year) VALUES("JayStudent",1000,"CPSC",3);
INSERT INTO student(username,studentID,major,year) VALUES("AliStudent",1001,"CPSC",3);
INSERT INTO student(username,studentID,major,year) VALUES("KaiStudent",1002,"CPSC",3);



##Insert teachers

INSERT INTO teacher(username,teacherid,isTA) VALUES("MoussaviTeacher",9999,"Teacher");
INSERT INTO teacher(username,teacherid,isTA) VALUES("MourshirPourTeacher",10000,"Teacher");
INSERT INTO teacher(username,teacherid,isTA) VALUES("Pafederl",10001,"Teacher");
INSERT INTO teacher(username,teacherid,isTA) VALUES("RedaProfessor",10002,"Teacher");
INSERT INTO teacher(username,teacherid,isTA) VALUES("ChrisParkerProf",10005,"Teacher");

INSERT INTO teacher(username,teacherid,isTA) VALUES("DeanTeacherOfMultipleCourses",10006,"Teacher");

INSERT INTO teacher(username,teacherid,isTA) VALUES("KashfiaTA",10003,"TA");
INSERT INTO teacher(username,teacherid,isTA) VALUES("ChrisMossmanTA",10004,"TA");


## Test out different conditions to extract columns
##Get name of the student
SELECT firstname, lastname FROM user,student WHERE student.username = user.username AND studentID = 1000;

##Testing out the relationships

INSERT INTO course(courseid, name,time, isEval, finalEval, evalComplete) VALUES(471,"Database systems","MWF", 0,0,0);
INSERT INTO course(courseid, name,time, isEval, finalEval, evalComplete) VALUES(480,"Principles of Software Development","MWF", 0,0,0);
INSERT INTO course(courseid, name,time, isEval, finalEval, evalComplete) VALUES(457,"Operating Systems","MWF",0,0,0);
INSERT INTO course(courseid, name,time, isEval, finalEval, evalComplete) VALUES(511,"Embedded Systems","MWF",0,0,0);


##Set who teaches which course

INSERT INTO Courseteacher(courseid,teacherid) VALUES(471,10002);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(480,9999);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(480,10000);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(457,10001);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(471,10003);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(471,10004);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(511,10005);


INSERT INTO Courseteacher(courseid,teacherid) VALUES(471,10006);
INSERT INTO CourseTeacher(courseid,teacherid) VALUES(480,10006);

##Select all teachers with names
SELECT teacherid, firstname, lastname, isTA FROM user,teacher WHERE teacher.username = user.username;

##Show names of who is teaching what
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username;


## Show the all the courses a teacher teaches
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND
		teacher.teacherid = 10006;

## Show all teachers in a course based on course ID 
SELECT course.courseid, course.name, user.firstname,  user.lastname, teacher.isTA, user.email
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND 
		course.courseid = 471;

##select all TA who is teaching the course
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND 
		isTA = "TA";

##select All professors who is teaching a specific course
SELECT course.courseid, course.name, user.firstname, user.lastname, teacher.isTA 
	FROM courseteacher, course, user, teacher
	WHERE courseteacher.courseid = course.courseid AND 
		teacher.teacherid = courseteacher.teacherid AND 
		teacher.username = user.username AND 
		course.courseid = 480;

##set which courses the student is taking

INSERT INTO takes(courseid,studentID) VALUES(457,1000);
INSERT INTO takes(courseid,studentID) VALUES(457,1002);

INSERT INTO takes(courseid,studentID) VALUES(471,1000);
INSERT INTO takes(courseid,studentID) VALUES(471,1001);
INSERT INTO takes(courseid,studentID) VALUES(471,1002);

INSERT INTO takes(courseid,studentID) VALUES(480,1000);
INSERT INTO takes(courseid,studentID) VALUES(480,1001);
INSERT INTO takes(courseid,studentID) VALUES(480,1002);

INSERT INTO takes(courseid,studentID) VALUES(511,1000);
INSERT INTO takes(courseid,studentID) VALUES(511,1001);
INSERT INTO takes(courseid,studentID) VALUES(511,1002);

##Check who is taking which course
SELECT course.courseid, course.name, user.firstname, user.lastname, user.username, student.studentid
	FROM takes, course, student, user
	WHERE takes.courseid = course.courseid AND 
		student.studentid = takes.studentid AND
		student.username = user.username;

##Select all students from a specific course
SELECT course.courseid, course.name, user.firstname, user.lastname, user.username, student.studentid
	FROM takes, course, student, user
	WHERE takes.courseid = course.courseid AND 
		student.studentid = takes.studentid AND
		student.username = user.username AND
		course.courseid = 471;

##Select all courses from a specific student
SELECT course.courseid, course.name, user.firstname, user.lastname, user.username, student.studentid
	FROM takes, course, student, user
	WHERE takes.courseid = course.courseid AND 
		student.studentid = takes.studentid AND
		student.username = user.username AND
		user.firstname = "Jay";

##Selecting stuff statements
SELECT * FROM student;
SELECT * FROM teacher;
SELECT * FROM user;
SELECT firstname,lastname from teacher, user WHERE teacher.username = user.username;
##Select all teacher names
SELECT firstname,lastname from teacher, user WHERE teacher.username = user.username AND isTA = "TA"; 
## Select all TA

##Selecting all students and revealing their info	
SELECT DISTINCT course.courseid,course.name, student.studentID, firstname, lastname, user.username 
	from user,student,course, takes 
	WHERE student.studentID = takes.studentID 
		AND student.username = user.username
		AND user.firstname = "Jay";
		
##Inserting Evaluation
INSERT INTO evaluation(teacherid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10, courseid, studentID) VALUES (10001, "Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes", 471, 1000);
INSERT INTO evaluation(teacherid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10, courseid, studentID) VALUES (10002, "Yes","Yes","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes");
INSERT INTO evaluation(teacherid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10, courseid, studentID) VALUES (10003, "Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes","Yes");
INSERT INTO evaluation(teacherid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10, courseid, studentID) VALUES (10004, "Yes","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes");
INSERT INTO evaluation(teacherid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10, courseid, studentID) VALUES (10005, "No","Yes","No","Yes","Yes","Yes","Yes","Yes","Yes","Yes");

## Insert into document
INSERT INTO document(id, file, courseid, teacherid) VALUES (1, "lecture.pdf", 471, 10001);

## Select all the documents for a course
SELECT DISTINCT document.id, file, TO_BASE64(file),
    FROM_BASE64(TO_BASE64(file))
	FROM course, document, user
		WHERE course.courseID = document.courseid AND
			  course.courseid = 471;

## Delete a document in the course for teacher
DELETE FROM document where document.id = 2;

##Select all teachers evaluation: outputs, firstname, lastname, teacherid and Questions
SELECT firstname, lastname, teacher.teacherid, Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10
	FROM teacher, user, teacher_evaluation
		WHERE teacher.username = user.username AND 
			  teacher.teacherid = teacher_evaluation.teacherid;

##Select the teacher evaluation using teacherid, output firstname and lastname included
SELECT firstname, lastname, teacher.teacherid, Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10
	FROM teacher, user, teacher_evaluation
		WHERE teacher.username = user.username AND 
			  teacher.teacherid = teacher_evaluation.teacherid AND 
			  teacher.teacherid = 10001;
			  
##Select the evaluations for TAs only, outputs firstname, lastname and questions
SELECT firstname, lastname, teacher.teacherid, Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10
	FROM teacher, user, teacher_evaluation
		WHERE teacher.username = user.username AND 
			  teacher.teacherid = teacher_evaluation.teacherid AND 
			  teacher.isTA = "TA";

##Select students class List of a course
SELECT DISTINCT user.firstname, user.lastname, email
	FROM course, user, student, takes
		WHERE (student.studentID = takes.studentID AND
		user.role = 'student'
		AND takes.courseID = 471);

##Select teachers class List of a course
SELECT user.firstname, user.lastname, email
	FROM user, course, courseteacher, teacher
		WHERE ( 
		courseteacher.teacherid = teacher.teacherid  AND
		user.role = 'teacher'
	    AND courseteacher.courseid = 471
	);

##Delete statements, will cascade into other tables.
DELETE FROM student WHERE student.username = "JayStudent"; 
DELETE FROM user WHERE username = "Ali";

##Delete a teacher. The teacher will be deleted from teacher_evaluation, teacher, courseteacher. course will not be affected
DELETE FROM user WHERE user.username = "Pafederl";


##//////////////////////////******************Evaluation portion ********************//////////////////////////

##Q1 The TA starts the lab session on time:

##Q2 The TA uses the time of the lab effectively:

##Q3 The TA answers the questions satisfactorily:

##Q4 The TA marks the assignments fairly:

##Q5 The TA marks the assignments on time:

##Q6 The TA posts the solutions on time:

##Q7 The TA demonstrated enough knowledge of the material covered:

##Q8 The TA responses to emails and messages on time:

##Q9 The TA treats the students respectfully:

##Q10 I will be happy to have the same TA again:


##////////////////////////////****************Assignment Portion**********//////////////////////////

INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (1,"Homework 1", "2021-12-14", "Solve Question 1", 471);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (2,"Homework 2", "2021-12-14", "Solve Question 2", 471);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (4,"Homework 3", "2021-12-14", "Solve Question 3", 471);

INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (4,"Assignment 1", "2021-12-06", "Solve Assignment 1", 480);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (5,"Assignment 2", "2021-12-06", "Solve Assignment 2", 480);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (6,"Assignment 3", "2021-12-06", "Solve Assignment 3", 480);

INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (7,"Project 1", "2021-12-08", "Complete Project 1", 511);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (8,"Project 2", "2021-12-10", "Complete Project 2", 511);

INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (9,"Coding Challenge 1", "2021-11-30", "Complete coding challenge 1", 457);
INSERT INTO Assignment(assignment_id, assignment_name, due_date, content, courseid) VALUES (10,"Coding Challenge 2", "2021-11-30", "Complete coding challenge 2", 457);

## Select all the assignmnets in a course
SELECT Assignment.assignment_name, course.courseid
	FROM  Assignment, course
	WHERE course.courseid = Assignment.courseid AND
		  course.courseid = 471;

## Delete a assignment for a course
DELETE FROM Assignment WHERE Assignment.assignment_id = 2; 

##Inserting into submit, takes in studentID and assignment_id as primary keys

INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 1, 1000, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 2, 1000, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 3, 1000, 75);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 4, 1000, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 5, 1000, 80);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 6, 1000, 70);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 7, 1000, 50);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 8, 1000, 100);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 9, 1000, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 10, 1000, 100);

INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 1, 1001, 70);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 2, 1001, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 3, 1001, 98);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 4, 1001, 40);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 5, 1001, 99);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 6, 1001, 70);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 7, 1001, 60);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 8, 1001, 80);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 9, 1001, 70);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 10, 1001, 95);

INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 1, 1002, 100);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 2, 1002, 100);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 3, 1002, 100);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 4, 1002, 90);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 5, 1002, 99);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 6, 1002, 70);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 7, 1002, 40);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 8, 1002, 30);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 9, 1002, 0);
INSERT INTO submit(assignment_id,studentID, grade) VALUES ( 10, 1002, 100);

##Show all the assignments that a specific student is taking
SELECT user.firstname, user.lastname, user.username, student.studentid, submit.assignment_id, Assignment.assignment_name, submit.grade, course.courseid
	FROM student, user, submit, Assignment, course
	WHERE student.studentID = submit.studentID AND 
		submit.assignment_id = Assignment.assignment_id AND 
		student.username = user.username AND
		course.courseid = Assignment.courseid AND
		user.firstname = "Ali";

##Show all the assignments that a specific student is taking in a course
SELECT user.firstname, user.lastname, user.username, student.studentid, submit.assignment_id, Assignment.assignment_name, submit.grade, course.courseid
	FROM student, user, submit, Assignment, course
	WHERE student.studentID = submit.studentID AND 
		submit.assignment_id = Assignment.assignment_id AND 
		student.username = user.username AND
		course.courseid = Assignment.courseid AND
		course.courseid = 471 AND
		user.username = "AliStudent";
		
##Calculate the average grade for a specific student
SELECT user.firstname, user.lastname, user.username, student.studentid, course.courseid, course.name, AVG(submit.grade)
	FROM student, user, submit, Assignment, course
	WHERE student.studentID = submit.studentID AND 
		submit.assignment_id = Assignment.assignment_id AND 
		student.username = user.username AND
		user.firstname = "Ali" AND Assignment.courseid = 457;


## Show all the submissions of students for a specific assignment
SELECT student.studentid, course.courseid, course.name, submit.grade, Assignment.assignment_id
	FROM student, submit, Assignment, course
	WHERE student.studentID = submit.studentID AND 
		submit.assignment_id = Assignment.assignment_id AND 
		Assignment.courseid = course.courseid 
		and course.courseid = 471;























/////////////////////////////////Will be deleted later//////////////////////////////////////////////


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