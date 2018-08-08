# Friend Finder

Use the app to find a friend. Answer the questions on the survey and be matched with a like-minded soul. 

## Steps to Build

### Set up Application
* Set up your directory structure for this project.
```
-app
|--data
  |--friends.js
|--public
  |--home.html
  |--survey.html
|--routing
  |--apiRoutes.js
  |--htmlRoutes.js
-.gitignore
-README.md
-server.js
```
* Run npm init & follow the prompts to create your package.json file
```
npm init
```
* Install the [Express](https://www.npmjs.com/package/express) and [Body Parser](https://www.npmjs.com/package/body-parser) npm packages
```
npm install express body-parser --save
```

### Configure Server

* Build out your home.html and survey.html pages. Use this [app](https://friend-finder-fsf.herokuapp.com/) as your guide. Create your own questions, or use what's here.

## Set up your **server.js** file.
Server.js is the root of the application. In this file, you set the dependencies on both express and body-parser.

* Set a variable for both express and body-parser and assign the require for both modules.
* Configure the [app](http://expressjs.com/en/4x/api.html#app) variable for express. this variable will be the access point throughout the app for the express functionality. 
* Set a variable for the PORT. Here I'm using [process.env](https://nodejs.org/api/process.html#process_process_env).PORT || 8080 and assigning it to the variable. This solves the issue where you deploy the app to a server that assigns dynamically assigned and also, using the or operator, you can use your chosen IP locally.
* Configure the app to use body parser. app.use() mounts the body parser middleware functions to parse json and urlencoded data. 
	* [bodyParser.urlencoded](https://www.npmjs.com/package/body-parser#bodyparserurlencodedoptions)
	* [bodyParser.json](https://www.npmjs.com/package/body-parser#bodyparserjsonoptions)
* We've moved the routes to external files for modularity and separation of concerns. *Require* both the apiRoutes and htmlRoutes (minus the .html file extension). Append (app) at the end of each require to signify that express will be using these routes.
* Configure the server to listen on the above mentioned port. Create console.log messages to inform the user where to access the app.


## Set up your **routing** files.
**apiRoutes**
* In the route files, you link your routes to the data file in the data folder. Create a variable and assign the require for the friends data file.
* Write the export for the function that handles the app get and app post. 
* * app.get() the friends file. Pass the data back in the res.json method. When the user visits the page, they will see the JSON data returned.
* * app.post() the friends file. When the user fills out the survey, it gets pushed to an array. We're using req.body since we are using body parser.XXXXX

**htmlRoutes**
* Set a path variable and assign the path module to it.
* Write the export for the function that handles the app get. There is no app.post, only get requests.
* * app.get() for the /survey file 
* * app.get() "*" if no other matching routes are found, direct to home.html.

## JSON data
**friends.js**
* This file will hold the default friend data in an array. Create an array, var friendArray, with objects inside for each friend. In that object, set the following name: value pairs:
* * name: "Some Name",
* * image: "URL to some Image",
* * q1: 5  //some number
* * q2 throught q10, assign some number
* export the array.


