Thuta's notes to group:
**You won't be able to test the form or see the requests since I have the local database at the moment. 

**Please do not edit/delete content in connection.js as that sets up the connection between our nodejs server and PostgreSQL. 

**If you want to test what I have implemented, you have to create your own local database in PostgreSQL.

1) install PostgreSQL client on your machine
2) go to pgAdmin and add a new server
3) you should automatically have a 'postgres' database made and a 'public' schema
4) create a requests table

**The css needs to be added to form.ejs and requests.ejs

package.json:

Install these 2 npm packages in nodejs ("dependencies"):

npm install pg --save
npm install ejs --save

**I am using ejs so that I can render the database into a table on the requests page 

Install express and nodemon ("devDependencies")

There should be 3 .ejs files in 'views' folder:

form.ejs
index.ejs
requests.ejs

**index.ejs is a temporary file which contains 2 href links. These are the only links that can be added into the navigation bar
'All requests'
'Add a request'




