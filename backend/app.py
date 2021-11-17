from flask import Flask, json,jsonify , request, render_template    
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3307

app.config['MYSQL_PASSWORD'] = "root"
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
@app.route('/students',methods=['GET','POST'])
def students():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM student")
        students = cur.fetchall()
        respone = jsonify(students)
        respone.status_code = 200
        cur.close()
        return respone
    
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        query_parameters = request.args
        # studentID = query_parameters.get('studentID')
        # year = query_parameters.get('year')
        # username = json['username']
        major = json['major']
        studentID = json['studentID']
        year = json['year']
        # print(type(studentID))
        cur.execute("INSERT INTO student(username,studentID,major,year) VALUES(%s,%s,%s,%s)", (111,455, "CPSC", 3))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
    
""" DELETE, PATCH, """
@app.route('/students/<string:stuUser>/profile',methods=["GET","POST"])
def stuProfile(stuUser):
    if request.method=='GET':
        cur=mysql.connection.cursor()
        cur.execute("select * from user where username=(%s)",(stuUser,))
        profile=cur.fetchall()
        response=jsonify(profile)
        response.status_code=200
        cur.close()
        return response
    
    if request.method=='POST':
        cur=mysql.connection.cursor()
        
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