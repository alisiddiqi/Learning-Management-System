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

@app.route('/students',methods=['GET','POST'])
def students():
    if request.method == 'GET':
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM user")
        students = cur.fetchall()
        respone = jsonify(students)
        respone.status_code = 200
        cur.close()
        return respone
    
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        json = request.json
        
        username = json['username']
        lastname=json['lastname']
        
        cur.execute("INSERT INTO user(username,firstname,lastname,role) VALUES(%s,%s,%s,%s)", (username,"a", lastname, "a"))
        mysql.connection.commit()
        cur.close()
        return jsonify("sucess insert")
     
if __name__=="__main__":
    app.run(debug=True)