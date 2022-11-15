<!-- Steps to Install Heroku Server -->
<!-- 1. create a folder backend in the project -->
<!-- 2. create .gitignore file and copy 'node_modules
.gitignore' this in .gitignore-->
<!-- 3. install herouku using 'npm install -g heroku' command line in terminal and after install is complete use this 'npm init -y' in terminal -->
<!-- 4. make 'server.js' file in backend folder (name can be anything)  -->
<!-- 5. to run that 'server.js' file we need to add  "start": "node index.js" in 'package.json' file in scripts cat before the 'test' line-->
<!-- 6. copy '// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

//Declared PORT Variable
const PORT = process.env.PORT || 8000

server.use(middlewares)
server.use(router)

//Replaced 300- with new var 'PORT'
server.listen(PORT, () => {
  console.log('JSON Server is running')
})' from npmjs.com/package/json-server and create a new 'PORT' Var after middlewares var as changed in above step and assign as const PORT = process.env.PORT || 8000 and also change 300 to new var 'PORT' in server.listen line as changed in above step -->
<!-- 7. install json server using 'npm i json-server'  -->
<!-- 8. create db.json file using 'json-server --watch db.json --port 3004' command and after creating db.json file we can modify data in this file as we want -->
<!-- 9. We have to login in heroku using 'heroku login' => it will open link on browser and ask for login if already have account direct login else create account and login -->
<!-- 10. We have to create the app on heroku if want random app name than we can use 'heroku create' command else if want to give specific name than we can create on heroku website after login -->
<!-- 11. After creating app, First check you are login in heroku in terminal or not , after that check the path is correct or not of your terminal and after that use 'git init' command   -->
<!-- 12. after that use 'heroku git:remote -a attractive-songs-1315' command (attractive-songs-1315 is my app name here) you can find these commands on heroku apps page -->
<!-- 13. after that use 'git add .' and 'git commit -am "comment (can be anything)"' and last 'git push heroku master' this command -->


<!-- 14. after this it will deploy our server to heroku and we just need to open that app on website and we can use url of particular data -->
<!-- to create more categories in server data we need to just login in heroku using terminal and git init and remote link the repo and afte that git add. , git commit , git push and done. -->