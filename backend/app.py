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
        print(username)

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user (username, firstname, lastname, role) VALUES (%s,%s, %s, %s)", (usernmae,"a", "a", "a"))
        mysql.connection.commit()
        cur.close()
        return "success"
    return render_template('testing.html')

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
        
        username = json['username']
        studentID = json["studentID"]
        major = json['major']
        year = json['year']
        
        cur.execute("INSERT INTO student(username,studentID,major,year) VALUES(%s,%d,%s,%d)", (username,studentID, major, year))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
     
if __name__=="__main__":
    app.run(debug=True)