from flask import Flask, json, jsonify, request, render_template,request, redirect, url_for, session
import flask
from flask_mysqldb import MySQL
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
import os
from random import randrange

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306

app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
CORS(app, expose_headers='Authorization')

mysql = MySQL(app)

""" ---- STUDENT API ----- """


""" content needs to use  a file"""

@app.route('/courses/<int:courseID>/content/', methods=["GET"])
def courseContent(courseID):
    cur = mysql.connection.cursor()
    cur.execute("select * from document where courseid = (%s)", (courseID,))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
    return response

@app.route('/students/<string:stuUser>/courselist', methods=["GET"])
def courseList(stuUser):
    cur = mysql.connection.cursor()
    cur.execute("select course.courseid, course.name, course.time from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username and student.username=(%s)", (stuUser,))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
    return response

@app.route('/courses/<int:courseID>/classList/students', methods=["GET"])
def classStudentList(courseID):
    cur = mysql.connection.cursor()
    cur.execute("select user.firstname, user.lastname,user.email from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username  and course.courseid=(%s)", (courseID, ))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
    return response

# """ NEED SELECT QUERY FOR DOCUMENTS/CONTENT """

@app.route('/courses/<int:courseID>/classList/teachers', methods=["GET"])
def classTeacherList(courseID):
    cur = mysql.connection.cursor()
    cur.execute("select user.firstname,  user.lastname,user.email, teacher.isTA from courseteacher, course, user, teacher WHERE courseteacher.courseid = course.courseid AND teacher.teacherid = courseteacher.teacherid AND teacher.username = user.username AND course.courseid = (%s)", (courseID, ))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
    return response

@app.route('/students/<string:stuUser>/courses/<int:courseID>/grades', methods=["GET"])
def studentGrades(stuUser, courseID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select user.firstname, user.lastname, user.username, student.studentid, course.courseid, course.name, submit.grade, Assignment.assignment_id FROM student, user, submit, Assignment, course WHERE student.studentID = submit.studentID AND  submit.assignment_id = Assignment.assignment_id AND student.username = user.username AND user.username = (%s) AND Assignment.courseid = course.courseid and course.courseid = (%s)", (stuUser, courseID, ))
        courses = cur.fetchall()
        response = jsonify(courses)
        response.status_code = 200
        cur.close()
        return response
    
@app.route('/students/<string:stuID>/profile', methods=["GET"])
def studentProfile(stuID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select user.firstname, user.lastname, user.username, user.email from user, student where student.username=user.username and student.studentID=(%s)", (stuID,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        return response

# @app.route('/students/<string:stuUser>/courses/<int:courseID>/classList', methods=["GET"])
# def classList(stuUser, courseID):
#     cur = mysql.connection.cursor()
#     cur.execute("select course.courseid, course.name, course.time from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username and student.username=(%s)", (stuUser,))
#     courses = cur.fetchall()
#     response = jsonify(courses)
#     response.status_code = 200
#     cur.close()
#     return response

@app.route('/students/<string:stuUser>/courses/<int:courseID>/assignments', methods=["GET", "POST"])
def studentAssignments(stuUser, courseID):
    cur = mysql.connection.cursor()
    cur.execute("select course.courseid, course.name, course.time from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username and student.username=(%s)", (stuUser,))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
    return response

# @app.route('/teacher/<int:insID>/courses/<int:courseID>/content/', methods=["GET", "POST","DELETE"])
# def teacherCourseContent(insID, courseID):
#     if request.method == 'GET':
#         cur = mysql.connection.cursor()
#         cur.execute("select * from document where teacherid = (%s) AND courseid = (%s)", (insID, courseID))
#         courses = cur.fetchall()
#         response = jsonify(courses)
#         response.status_code = 200
#         cur.close()
#         return response
#     if request.method == 'POST':
#         cur = mysql.connection.cursor()
#         json = request.json
#         file = json['file']
#         doc_name = json['document_name']
#         id = randrange(50, 10000)
#         cur.execute("INSERT INTO document(id, file, courseid, teacherid, document_name) VALUES (%s, %s, %s, %s,%s)", (id, file, courseID, insID, doc_name))
#         mysql.connection.commit()
#         cur.close()
#         return "successfully added "
#     if request.method == 'DELETE':
#         cur = mysql.connection.cursor()
#         json = request.json
#         docName = json['document_name']
#         cur.execute(
#             "delete from document where document.document_name=(%s)", (docName,))
#         mysql.connection.commit()
#         cur.close()
#         return jsonify("sucess delete")

@app.route('/students/<int:stuID>/courses/<int:courseID>/dropbox/', methods=["GET", "POST"])
def studentCourseAssignments(stuID, courseID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select Assignment.assignment_id, Assignment.assignment_name, submit.grade, course.courseid from student, user, submit, Assignment, course where student.studentID = submit.studentID and submit.assignment_id = Assignment.assignment_id and student.studentID = (%s) and course.courseid = Assignment.courseid and course.courseid = (%s)", (stuID, courseID))
        courses = cur.fetchall()
        response = jsonify(courses)
        response.status_code = 200
        cur.close()
        return response
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        assignmentName = json['assignment_name']
        due_date = json['due_date']
        content = json['content']
        courseid = json['courseid']
        id = randrange(50, 10000)
        cur.execute("INSERT INTO Assignment(assignment_id,assignment_name, due_date, content, courseid) VALUES (%s, %s,%s,%s,%s)",
                    (id, assignmentName, due_date, content, courseID))
        cur.execute("INSERT INTO submit(assignment_id, studentID, grade)  VALUES (%s,%s,%s)", (id,stuID, 0))
        mysql.connection.commit()
        cur.close()
        return "Sucessfully changed"

""" ---- INSTRUCTOR API ----- """

@app.route('/instructors/<string:insID>/courseList', methods=["GET"])
def teacherCourseList(insID):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select teacher.teacherid,course.courseid,course.name from courseteacher, course, teacher, user where courseteacher.courseid=course.courseid and teacher.teacherid=courseteacher.teacherid and teacher.username=user.username and teacher.teacherid=(%s)", (insID,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response
    

@app.route('/teacher/<int:insID>/courses/<int:courseID>/content/', methods=["GET", "POST", "DELETE"])
def teacherCourseContent(insID, courseID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select * from document where teacherid = (%s) AND courseid = (%s)", (insID, courseID))
        courses = cur.fetchall()
        response = jsonify(courses)
        response.status_code = 200
        cur.close()
        return response  
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        file = json['file']
        doc_name = json['document_name']
        id = randrange(50, 10000)
        cur.execute("INSERT INTO document(id, file, courseid, teacherid, document_name) VALUES (%s, %s, %s, %s,%s)", (id, file, courseID, insID, doc_name))
        mysql.connection.commit()
        cur.close()
        return "Sucessfully changed"
    if request.method == 'DELETE':
        cur = mysql.connection.cursor()
        json = request.json
        docName = json['document_name']
        cur.execute(
            "delete from document where document.document_name=(%s)", (docName,))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess delete")

@app.route('/teacher/courses/grades', methods=["POST"])
def teacherAddGrade():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        grade = json['grade']
        feedback = json['feedback']
        assignment_name = json['assignment_name']
        stuID = json['stuID']
        cur.execute("update submit JOIN assignment ON submit.assignment_id = assignment.assignment_id set submit.grade=(%s), submit.feedback=(%s) where assignment.assignment_name =(%s) and submit.studentID=(%s)", (grade, feedback, assignment_name, stuID))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess edited")

@app.route('/teacher/<string:insID>/profile', methods=["GET"])
def teacherProfile(insID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select user.firstname, user.lastname, user.username, user.email from user, teacher where teacher.username=user.username and teacher.teacherid=(%s)", (insID,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        return response
    
@app.route('/teacher/courses/<int:courseID>/dropbox/', methods=["GET"])
def teacherCourseAssignments(courseID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select student.studentID, Assignment.assignment_id, Assignment.assignment_name, submit.grade, submit.feedback, course.courseid from student, user, submit, Assignment, course where student.studentID = submit.studentID and submit.assignment_id = Assignment.assignment_id  and course.courseid = Assignment.courseid and course.courseid = (%s) group by Assignment.assignment_name", (courseID,))
        courses = cur.fetchall()
        response = jsonify(courses)
        response.status_code = 200
        cur.close()
        return response
    
""" Use classlist api from student """


""" ----- ADMIN STUDENT API ----"""

""" Use classlist api from student """


@app.route('/students', methods=['GET'])
def students():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user where role=(%s)", ("student",))
        students = cur.fetchall()
        respone = jsonify(students)
        respone.status_code = 200
        cur.close()
        return respone

@app.route('/students/<string:stuUser>', methods=["GET", "PUT", "POST"])
def stuProfile(stuUser):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select * from user where username=(%s)", (stuUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        return response

    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        firstName = json['firstName']
        lastName = json['lastName']
        cur.execute("update user set firstname=(%s),lastname=(%s) where username=(%s)",
                    (firstName, lastName, stuUser))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess edited")


@app.route('/students/<string:stuUser>/stu', methods=["GET", "POST"])
def profile(stuUser):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select * from student where username=(%s)", (stuUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        major = json['major']
        year = json['year']
        cur.execute(
            "update student set major=(%s),year=(%s) where username=(%s)", (major, year, stuUser))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")


@app.route('/students/<string:stuUser>/courses', methods=["GET", "POST", "DELETE"])
def func(stuUser):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select student.studentid,course.courseid, course.name from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username and student.username=(%s)", (stuUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        courseid = json['courseID']
        studentID = json['studentid']
        cur.execute(
            "INSERT INTO takes(courseid,studentID) values (%s,%s)", (courseid, studentID))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
    if request.method == 'DELETE':
        cur = mysql.connection.cursor()
        json = request.json
        courseid = json['courseID']
        studentID = json['studentid']
        cur.execute(
            "delete from takes where studentID=(%s) and courseid=(%s) ", (studentID, courseid))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess delete")

# End of Admin student APIs
###################################################################################################################################
#       Start of Admin instructor API from Admin view

@app.route('/instructors', methods=['GET'])
def instructors():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user where role=(%s)", ("teacher",))
        instructors = cur.fetchall()
        respone = jsonify(instructors)
        respone.status_code = 200
        cur.close()
        return respone

@app.route('/instructors/<string:insUser>', methods=["GET", "POST"])
def insProfile(insUser):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select * from user where username=(%s)", (insUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        return response

    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        firstName = json['firstName']
        lastName = json['lastName']
        cur.execute("update user set firstname=(%s),lastname=(%s) where username=(%s)",
                    (firstName, lastName, insUser))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")

@app.route('/instructors/<string:insUser>/ins', methods=["GET", "POST"])
def profile2(insUser):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select * from teacher where username=(%s)", (insUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

@app.route('/instructors/<string:insUser>/courses', methods=["GET", "POST", "DELETE"])
def func2(insUser):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select teacher.teacherid,course.courseid,course.name from courseteacher, course, teacher, user where courseteacher.courseid=course.courseid and teacher.teacherid=courseteacher.teacherid and teacher.username=user.username and user.username=(%s)", (insUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        courseid = json['courseID']
        teacherID = json['teacherID']
        cur.execute(
            "INSERT INTO courseteacher(courseid,teacherID) values (%s,%s)", (courseid, teacherID))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")

    if request.method == 'DELETE':
        cur = mysql.connection.cursor()
        json = request.json
        courseid = json['courseID']
        teacherID = json['teacherid']
        cur.execute(
            "delete from courseteacher where teacherID=(%s) and courseid=(%s) ", (teacherID, courseid))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess deleted with courseid=(%s)", (courseid,))


@app.route('/courses/sendEvaluations/<int:courseID>', methods=["GET", "POST"])
def sendEvals(courseID):
    if request.method == "POST":
        cur = mysql.connection.cursor()
        cur.execute(
            "update course set isEval=(%s), finalEval=(%s) where courseid=(%s)", (1, 1, courseID))
        mysql.connection.commit()
        cur.close()
        return ("successfully sent evaluations")
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select * from course where courseid=(%s)", (courseID,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response


@app.route('/courses/recieveEvaluations/<int:courseID>', methods=["GET"])
def recieveEvaluations(courseID):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute(
            "select teacherid,studentid,comment,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10 from evaluation where courseid=(%s)", (courseID,))
        profile = cur.fetchall()
        for i in range (len(profile)):
            profile[i]['Q1'] *= 0.5
            profile[i]['Q2'] *= 0.5
            profile[i]['Q3'] *= 0.5
            profile[i]['Q4'] *= 0.5
            profile[i]['Q5'] *= 0.5
            profile[i]['Q6'] *= 0.5
            profile[i]['Q7'] *= 0.5
            profile[i]['Q8'] *= 0.5
            profile[i]['Q9'] *= 0.5
            profile[i]['Q10'] *= 0.5
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

@app.route('/bestTeacher/<int:courseID>',methods=["GET"])
def bestTeacher(courseID):
    if(request.method=="GET"):
        print(courseID)
        cur = mysql.connection.cursor()
        cur.execute("select evaluation.teacherid,studentid , sum(Q1+Q2+Q3+Q4+Q5+Q6+Q7+Q8+Q9+Q10)*0.5 as Total from evaluation,courseteacher where courseteacher.courseid=(%s) and evaluation.teacherid=courseteacher.teacherid group by evaluation.teacherid",(courseID,))
        profile=cur.fetchall()
        var = 0
        id = 0
        for i in range(len(profile)):
            if profile[i]['Total'] > var:
                var = profile[i]['Total']
                id = profile[i]['teacherid']
        cur.execute("select firstname,lastname from user,teacher where teacher.teacherid=(%s) and user.username=teacher.username",(id,))
        profile = cur.fetchall()
        toReturn = profile[0]['firstname'] + ' '+ profile[0]['lastname']
        response = jsonify(toReturn)
        return response

@app.route('/worstTeacher/<int:courseID>',methods=["GET"])
def worstTeacher (courseID):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select teacherid,studentid , sum(Q1+Q2+Q3+Q4+Q5+Q6+Q7+Q8+Q9+Q10)*0.5 as Total from evaluation group by teacherid")
        profile=cur.fetchall()
        var = 1000
        id = 0
        for i in range(len(profile)):
            if profile[i]['Total'] < var:
                var = profile[i]['Total']
                id = profile[i]['teacherid']
        cur.execute("select firstname,lastname from user,teacher where teacher.teacherid=(%s) and user.username=teacher.username",(id,))
        profile = cur.fetchall()
        toReturn = profile[0]['firstname'] + ' '+ profile[0]['lastname']
        response = jsonify(toReturn)
        return response
        

@app.route('/evaluations/<int:courseID>/<int:studentID>', methods=["POST"])
def settingEvals(courseID, studentID):
    if(request.method == "POST"):
        cur = mysql.connection.cursor()
        json = request.json
        teacherName = json['teacherName']
        Q1 = json['q1']
        Q2 = json['q2']
        Q3 = json['q3']
        Q4 = json['q4']
        Q5 = json['q5']
        Q6 = json['q6']
        Q7 = json['q7']
        Q8 = json['q8']
        Q9 = json['q9']
        Q10 = json['q10']
        commments = json['comments']
        cur.execute(
            "select teacher.teacherid from teacher,user where teacher.username=user.username and user.firstname=(%s)", (teacherName,))
        profile = cur.fetchall()
        teacherID = profile[0]['teacherid']
        cur.execute("insert into evaluation values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",
                    (teacherID, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, courseID, studentID, commments))
        mysql.connection.commit()
        cur.close()
        return "Sucessfully changed"


@app.route('/grades/<string:courseID>/<string:studentID>/', methods=["GET"])
def getGrades(courseID, studentID):
    if(request.method == "GET"):
        cur = mysql.connection.cursor()
        cur.execute(
            "select assignment_name, grade,submit.feedback from submit,assignment where submit.assignment_id = assignment.assignment_id and submit.studentid=(%s) and courseid=(%s)", (studentID, courseID))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response
    # if(request.method == "POST"):
    

@app.route('/courses/sendEvaluations/', methods=["GET"])
def func4():
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select * from course")
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response


@app.route('/StuLogin/<string:userName>/<string:password>', methods=["GET"])
def stuAuth(userName, password):
    if(request.method == "GET"):
        cur = mysql.connection.cursor()
        cur.execute("select student.studentID from user, student where user.username=student.username and user.username=(%s) and user.password=(%s)", (userName, password))
        profile = cur.fetchall()
        response = jsonify(profile)
        cur.close()
        return response

@app.route('/InsLogin/<string:userName>/<string:password>', methods=["GET"])
def insAuth(userName, password):
    if(request.method == "GET"):
        cur = mysql.connection.cursor()
        cur.execute("select teacher.teacherid from user, teacher where user.username=teacher.username and user.username=(%s) and user.password=(%s)", (userName, password))
        profile = cur.fetchall()
        response = jsonify(profile)
        cur.close()
        return response


""" /instructor/<string:stuUser>/ 
alsoHave a role of isTa

"""

""" /instructor/<string:stuUser>/profile
    alsoHave a role of isTa
"""

""" /students/<string:stuUser>/home
    show all the courses student is taking from profile section
    show course name, and date
"""

""" 
    student home page of courses
    /students/<int:stuID>/course/<string: courseId>
    show all the courses student is taking from profile section
    show course instructor, course name
"""

"""
 to get the grades
 /students/<string:usrName>/courses/<string: courseId>
"""

if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True)



