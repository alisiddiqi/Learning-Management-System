from flask import Flask, json,jsonify , request, render_template
import flask    
from flask_mysqldb import MySQL
import itertools

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306

app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"

mysql = MySQL(app)
 
@app.route('/',methods=['GET', 'POST'])
def get_names():
    if request.method == 'POST':
        username = request.form['username']
        #firstname=request.form['firstname']
        lastname = request['lastname']
        #role=request.form['role']
        print(username)

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user(username, firstname, lastname, role) VALUES (%s,%s, %s, %s)", (username,"a", lastname, "a"))
        mysql.connection.commit()
        cur.close()
        return "success"
    return render_template('testing.html')

""" Get first name, username  """
@app.route('/students',methods=['GET'])
def students():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student")
        students = cur.fetchall()
        respone = jsonify(students)
        respone.status_code = 200
        cur.close()
        return respone
    
""" DELETE, PATCH, """
@app.route('/students/<string:stuUser>',methods=["GET","POST"])
def stuProfile(stuUser):
    if request.method=='GET':
        cur=mysql.connection.cursor()
        cur.execute("select * from user where username=(%s)",(stuUser,))
        profile=cur.fetchall()
        response=jsonify(profile)
        response.status_code=200
        return response
    
    if request.method=='POST':
        cur=mysql.connection.cursor()
        json = request.json
        firstName=json['firstName']
        lastName=json['lastName']
        cur.execute("update user set firstname=(%s),lastname=(%s) where username=(%s)",(firstName,lastName,stuUser))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
            
@app.route('/students/<string:stuUser>/stu',methods=["GET","POST"])
def profile(stuUser):
    if request.method=='GET':
        cur=mysql.connection.cursor()
        cur.execute("select * from student where username=(%s)",(stuUser,))
        profile=cur.fetchall()
        response=jsonify(profile)
        response.status_code=200
        cur.close()
        return response
    
    if request.method=='POST':
        cur=mysql.connection.cursor()
        json = request.json
        major=json['major']
        year=json['year']
        cur.execute("update student set major=(%s),year=(%s) where username=(%s)",(major,year,stuUser))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
        
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
   
if __name__=="__main__":
    app.run(debug=True)