from flask import Flask, json,jsonify , request, render_template, redirect, flash
import flask    
from flask_mysqldb import MySQL, MySQLdb
import itertools
import base64 #used to convert image into binary
from PIL import Image
import io
import mysql.connector as mysql1
from werkzeug.utils import secure_filename
import os
#import magic
import urllib.request
from datetime import datetime
import webbrowser
import PyPDF2
import subprocess



app=Flask(__name__)

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_PASSWORD'] = ""
app.config['MYSQL_DB'] = "lmsdb"
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

app.secret_key = "caircocoders-ednalan"
mysql = MySQL(app)


UPLOAD_FOLDER = 'backend/static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
  
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif', 'pdf'])
  
def allowed_file(filename):
 return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
 
@app.route('/',methods=["POST","GET"])
def index():
    return render_template('index.html')
 
i = 4
@app.route("/upload",methods=["POST","GET"])
def upload():
    cursor = mysql.connection.cursor()
    cur = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    now = datetime.now()
    if request.method == 'POST':
        files = request.files.getlist('files[]')
        print(files)
        for file in files:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
               # cur.execute("INSERT INTO document (file_name, uploaded_on) VALUES (%s, %s)",[filename, now])
                cur.execute("INSERT INTO document VALUES(%s, %s, %s, %s)", (i, filename, 471, 10002))
                mysql.connection.commit()
            print(file)
        #cur.close()   
        flash('File(s) successfully uploaded')  
        #webbrowser.open_new( file)
        cur.close()               
    return redirect('/')
#'C:\Users\ywang\Documents\ThirdYearF2021\CPSC471\471Project\Learning-Management-System\Learning-Management-System\backend\static\uploads\Hm2.pdf'
""" mydb = mysql1.connect(user = 'root', database = 'lmsdb')
cursor = mydb.cursor()
query = 'SELECT file FROM document WHERE id = 1'
cursor.execute(query)
data = cursor.fetchall() 
image = data[0][0] # The returned data will be a list of list
binary_data = base64.b64decode(image) # deconde the string
image = Image.open(io.BytesIO(binary_data)) #convert the bytes into a PIL image
image.show() # display the image  " """


class CreateTable:

    def write_file(self,data,filename):
        # Convert binary data to proper format and write it on Hard Disk
        with open(filename, 'wb') as file:
            file.write(data)

    
    def read_image(self,image_id, photo):
        print("Reading BLOB data")
    
        try:
            connection = MySQLdb.connect(host='localhost',
                                                 database='lmsdb',
                                                 user='root',
                                                 password='')
    
            cursor = connection.cursor()
            #sql_fetch_blob_query = 'SELECT file from document where id = %s'
            #cursor.execute(sql_fetch_blob_query, (image_id))
            cursor.execute('SELECT file FROM document WHERE id = 1')
            record = cursor.fetchall()
            
            """  for row in record:
                print("Image Id = ", row[0], )
                image = row[1]
                print("Storing image on disk \n") """
            image = record[0][0]
            self.write_file(image, photo)
    
        except Exception as error:
            print("Failed to read BLOB data from MySQL table {}".format(error))
    
        finally:
            if connection.open:
                cursor.close()
                connection.close()
                print("MySQL connection is closed")

    
def main():
    
    t = CreateTable()

#Give the image_id and the location where to store the image.
    t.read_image(1,"C:\\Users\\ywang\\Documents\\ThirdYearF2021\\CPSC471\\471Project\\Learning-Management-System\\Learning-Management-System\\backend\\static\\uploads\\from_db_image_1.jpg")
    
if __name__=="__main__":
    main()
    app.run(debug=True)


"""
mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "lmsdb")

#Inserting an image into the database

cursor = mydb.cursor()
file = open('FrontPose.jpg', 'rb').read() #Open a file in binary mode
file = base64.b64encode(file) # we must encode the file to get base64 string
args = ('1', file, 471, 10002) # Sample data to be inserted
query = 'INSERT INTO document VALUES(%s, %s, %s, %s)' # prepare a query
cursor.execute(query, args)
mydb.commit()


 
## extracting an image from the database
 
cursor = mydb.cursor()
query = 'SELECT file FROM document WHERE id = 1'
cursor.execute(query)
data = cursor.fetchall() 
image = data[0][0] # The returned data will be a list of list
binary_data = base64.b64decode(image) # deconde the string
image = Image.open(io.BytesIO(binary_data)) #convert the bytes into a PIL image
image.show() # display the image  """

