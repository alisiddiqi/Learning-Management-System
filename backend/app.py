from flask import Flask, json, jsonify, request, render_template
import flask
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306

app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'


mysql = MySQL(app)

""" ---- STUDENT API ----- """


""" content needs to use  a file"""


@app.route('/courses/<int:courseID>/content', methods=["GET"])
def courseContent(courseID):
    cur = mysql.connection.cursor()
    cur.execute("select * from course")
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
    cur = mysql.connection.cursor()
    cur.execute("select user.firstname, user.lastname, user.username, student.studentid, course.courseid, course.name, submit.grade, Assignment.assignment_id FROM student, user, submit, Assignment, course WHERE student.studentID = submit.studentID AND  submit.assignment_id = Assignment.assignment_id AND student.username = user.username AND user.username = (%s) AND Assignment.courseid = course.courseid and course.courseid = (%s)", (stuUser, courseID, ))
    courses = cur.fetchall()
    response = jsonify(courses)
    response.status_code = 200
    cur.close()
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

@app.route('/students/<string:stuUser>/courses/<int:courseID>/dropbox/<int:assignmnetID>', methods=["GET", "POST"])
def studentCourseAssignments(stuUser, courseID, assignmnetID):
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("select Assignment.assignment_id, Assignment.assignment_name, submit.grade, course.courseid from student, user, submit, Assignment, course where student.studentID = submit.studentID and submit.assignment_id = Assignment.assignment_id and student.username = user.username and course.courseid = Assignment.courseid and user.username = (%s) and course.courseid = (%s)", (stuUser, courseID))
        courses = cur.fetchall()
        response = jsonify(courses)
        response.status_code = 200
        cur.close()
        return response
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        assignmentName = json['assignmentName']
        file = json['file']
        cur.execute()
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")


""" ---- INSTRUCTOR API ----- """


@app.route('/instructors/<string:insUser>/courses', methods=["GET"])
def teacherCourseList(insUser):
    if request.method == "GET":
        cur = mysql.connection.cursor()
        cur.execute("select teacher.teacherid,course.courseid,course.name from courseteacher, course, teacher, user where courseteacher.courseid=course.courseid and teacher.teacherid=courseteacher.teacherid and teacher.username=user.username and user.username=(%s)", (insUser,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response


""" Add content Api for get, post, delete """

""" Use classlist api from student """

""" Display All Assignments  """

""" For a assigmmnet view submission and submit assign grades """

""" ------ ADMIN STUDENT API ----"""

# @app.route('/students/<string:stuUser>/courses/<int:courseID>/assignments', methods=["GET", "POST"])
# def studentAssignments(stuUser, courseID):
#     cur = mysql.connection.cursor()
#     cur.execute("select course.courseid, course.name, course.time from takes,course,student,user where takes.courseid=course.courseid and student.studentid=takes.studentid and student.username=user.username and student.username=(%s)", (stuUser,))
#     courses = cur.fetchall()
#     response = jsonify(courses)
#     response.status_code = 200
#     cur.close()
#     return response

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
        teacherID = json['teacherid']
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


@app.route('/courses/sendEvaluations/<int:courseID>', methods=["GET","POST"])
def sendEvals(courseID):
    if request.method == "POST":
        cur = mysql.connection.cursor()
        cur.execute(
            "update course set isEval=(%s), finalEval=(%s) where courseid=(%s)", (1, 1, courseID))
        mysql.connection.commit()
        cur.close()
        return ("successfully sent evaluations")
    if request.method=="GET":
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
            "select teacherid,studentid,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9,Q10 from evaluation where courseid=(%s)", (courseID,))
        profile = cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response

    # if(request.method =="POST"):
    #     cur = mysql.connection.cursor();
    #     json = request.json;
    #     courseID = json['courseID'];
    #     studentID = json['studentID'];
    #     q1: json['q1'];
    #     q2: json['q2'];
    #     q3: json['q3'];
    #     q4: json['q4'];
    #     q5: json['q5'];
    #     q6: json['q6'];
    #     q7: json['q7'];
    #     q8: json['q8'];
    #     q9: json['q9'];
    #     q10: json['q10'];
    #     cur.execute("")

@app.route('/evaluations/<int:courseID>/<int:studentID>', methods=["POST"])
def getEvalus(courseID,studentID):
    if(request.method =="POST"):
        return None

@app.route('/grades/<int:courseID>/<int:studentID>')
def getGrades(courseID,studentID):
    if(request.method=="GET"):
        cur = mysql.connection.cursor()
        cur.execute(
            "select assignment_name, grade from submit,assignment where submit.assignment_id = assignment.assignment_id and submit.studentid=(%s) and courseid=(%s)",(studentID,courseID));
        profile =cur.fetchall()
        response = jsonify(profile)
        response.status_code = 200
        cur.close()
        return response


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

@app.route('/StuLogin/<string:userName>/<string:password>')
def stuAuth(userName,password):
    if(request.method=="GET"):
        cur= mysql.connection.cursor()
        cur.execute("select student.studentID from user, student where user.username=student.username and user.username=(%s) and user.password=(%s)",(userName,password));
        profile = cur.fetchall()
        print(profile);
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
    app.run(debug=True)
