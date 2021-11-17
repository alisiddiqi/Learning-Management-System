from flask import Flask,jsonify , request  
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306

app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"

mysql = MySQL(app)

@app.route('/students',methods=['GET','POST'])
def students():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user WHERE role ='student' ")
        students = cur.fetchall()
        respone = jsonify(students)
        respone.status_code = 200
        cur.close()
        return respone
    
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        
        username = json['username']
        studentID=json['studentID']
        major=json['major']
        year=json['year']
        
        cur.execute("INSERT INTO student(username,major,year,studentID) VALUES(%s,%s,%s,%s)", (username, major,year,studentID))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")

@app.route('/courses',methods=['GET','POST'])
def courses():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user")
        courses = cur.fetchall()
        respone = jsonify(courses)
        respone.status_code = 200
        cur.close()
        return respone
    
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        
        username = json['username']
        lastname=json['lastname']
        firstname=json['firstname']
        
        cur.execute("INSERT INTO student(username,firstname,lastname) VALUES(%s,%s,%s)", (username,firstname, lastname))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")


@app.route('/teacher',methods=['GET','POST'])
def teacher():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user")
        teacher = cur.fetchall()
        respone = jsonify(teacher)
        respone.status_code = 200
        cur.close()
        return respone
    
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        
        username = json['username']
        lastname=json['lastname']
        firstname=json['firstname']
        
        cur.execute("INSERT INTO teacher(username,firstname,lastname) VALUES(%s,%s,%s)", (username,firstname, lastname))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
     
if __name__=="__main__":
    app.run(debug=True)