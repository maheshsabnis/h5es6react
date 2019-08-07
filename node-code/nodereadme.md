# node.js Programming

1. Node.js uses
   1. Use this as tool for instaling packages using 'npm install' command
   2. Use this as runtime to compile the ES 6 base apps e.g. babel/tsc.
   3. Can be used for creating and hosting model JavaScript based apps
      1. e.g. React with Webpack.
      2. Angular with Angular-cli
   4. Use Node.js as backbone of MEAN/MERN aka isomorphics apps 
2. Understanding and Using Node.js Modules, objects with behaviors (members and methods)
   1. Standard Modules
      1. File Management using 'fs' module
      2. Http Operations using 'http' module
      3. Directory and Resource paths on server using 'path' module
      4. Application development modules
         1. Express
            1. MVC on Node
         2. cors
            1. For Accessing REST APIs
         3. body-parser
            1. Formatting Http Post and Put request
         4. jwt
            1. JSON Web Token for Security
         5. passport
            1. Enhanced application access security
         6. mongo
            1. MongoDB database access
         7. mongoose
            1. MongoDB Object-to-Document-to-Model (ODM) provider
   2. Custom Modules
      1. Every object enclosed in moldule.exports ={...} is module
3. Working with Files
   1. The 'fs' module
      1. Create and Read Files and Directories
      2. readFile(), the async method and readFileSync()
      3. writeFile() and writeFileSync()
4. Creating a Web Server
   1. The 'http' module for creating standard web server in Node.js
      1. Provides 'createServer(p1)' method to define Web-Server processs for request and responses
      2. listen() method to export a port for listening
   2. Use http-server, standard package for Web Server in Node.js
5. Creating Node based REST APIs    
   1. Express the MVC Framework for Node
      1. Methods
         1. use(), the method to register all dependencies for execution of app e.g. body-parser, cors, etc.
         2. get()/post()/put()/delete(), methods for Http operations
         3. listen() method to listen on port
