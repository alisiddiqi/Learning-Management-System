from flask import Flask, json, jsonify, request, render_template
import flask
from flask_mysqldb import MySQL
import itertools

app = Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306

app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"

mysql = MySQL(app)


"""This is a basic API that gets the student list.


    Returns:
        [GET]: [Retrns the list of students from user where the role is student]
        [POST]: [Is used to change the first name and last name of the student as required by the admin]
"""


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

    """"API is used to display to display profile that is specific to a student from the user table.

    Returns:
        [GET]: [Returns the list of all students enrolled in a course]
        [POST]: [Posts new user information of the student, i.e changes basic name information, adds or
                remove students from a course]
    """


@app.route('/students/<string:stuUser>', methods=["GET", "POST"])
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
        return jsonify("sucess insert")

    """API can be used to get information from the student table, this is helpful if you want to change the major 
       or the year of the student

    Returns:
        [GET]: Gets the student information from the database
        POST: Makes changes if requested by the admin
    """


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

    """Getting course information and changing course information

    Returns:
        GET: Returns the course information gatherd from performing the appropidate query
        POST: Updates  the realtionship table to have the correct course for the student.
        DELETE: Deletes a student from a course, can also add a student to a course using POST method. 
    """


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

# End of student APIs
###################################################################################################################################
#       Start of instructor API from Admin view


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
        return jsonify("sucess delete")


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
    to get the discussions for a course
    /students/<string:usrName>/courses/<string: courseId>
    ask yuekai
"""

"""
 to get the grades
 /students/<string:usrName>/courses/<string: courseId>
"""

if __name__ == "__main__":
    app.run(debug=True)
