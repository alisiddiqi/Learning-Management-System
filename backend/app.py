from flask import Flask,jsonify , request, render_template
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'

app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"



mysql = MySQL(app)

@app.route('/',methods=['GET', 'POST'])
def get_names():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']

        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO user (username,address) VALUES (%s,%s)", (username,email))
        mysql.connection.commit()
        cur.close()
        return "success"
    return render_template('testing.html')

if __name__=="__main__":
    app.run(debug=True)