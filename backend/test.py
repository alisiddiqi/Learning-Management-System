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
from PyPDF2 import PdfFileReader
import subprocess
import pandas as pd

mydb = mysql1.connect(
    host = "localhost",
    user = "root",
    password = "",
    database = "lmsdb")

cursor = mydb.cursor()
stmt = "SELECT file FROM document WHERE id = '1'"
df = pd.read_sql(stmt,mydb)

query = "SELECT file FROM document WHERE id = %s"
cursor.execute(query, (3,))
data = cursor.fetchone()[0]
#data = data[0][0]
#data = data[0][0].decode()
print(data)


""" with open('C:\\Users\\ywang\\Documents\\ThirdYearF2021\\CPSC471\\471Project\\Learning-Management-System\\Learning-Management-System\\backend\\static\\uploads\\Hm1.pdf', 'rb') as f:
    b = f.read(0)
df.head()
"""
with open('C:\\Users\\ywang\\Documents\\ThirdYearF2021\\CPSC471\\471Project\\Learning-Management-System\\Learning-Management-System\\backend\\static\\uploads\\etemp.jpg', 'wb') as outfile:
    outfile.write(data)
print(df) 
""" file = open('C:\\Users\\ywang\\Documents\\ThirdYearF2021\\CPSC471\\471Project\\Learning-Management-System\\Learning-Management-System\\backend\\static\\uploads\\new.pdf','wb')
for line in open('C:\\Users\\ywang\\Documents\\ThirdYearF2021\\CPSC471\\471Project\\Learning-Management-System\\Learning-Management-System\\backend\\static\\uploads\\Hm1.pdf','rb').readlines():
    file.write(line)
file.close() """