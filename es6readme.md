# package.json
1. scripts: The object that contains execution/test/build commands
2. dependencies: this is list of all packages those are needed while executing the package. Production Packages aka the hosting dependencies (w.r.t react/angular etc)
   1. The 'npm install --save <package-name>', command will install package for the production for the cuurent application 
3. devDependencies: this is list of packages that are needed while developing and compilaing application.
   1. The  'npm install --save-dev <package-name>' OR npm install --d <package-name>

*** All packages will be installed from
    https://www.npmjs.com
    https://www.github.com
#=========================================================================================================================================
ES 6  ---> ES 2015 (Library representation of ES 6)
ES 7  ---> ES 2016
ES 8  ---> ES 2017 ---> esnext

npm install -g babel-core babel-cli
Provide command line access to run babel commands for transpilation

#=========================================================================================================================================

# ES 6 Programming with Modern or High-level JavaScript
1. scope declaration
   1. Use the 'let' keyword for declaring block-scope variable
   2. The 'var' is function scope and 'let' is blocked scope
2. Array Class and its methods
   1. Array is a class with new methods for
      1. iteration
      2. filter
      3. find
3. Template String
   1. A mechanism to build an immutable string object by accepting place-holders (aka variables) as expressions i.e. ${variable} 
4. Arrow Functions / Arrow Operator
   1. If a function accepts function as inout parameter, then the parameter function is called as 'callback' function (cb). The cb is implicitely invoked within the executing function. So cb can also known as implicitely invoked function.
   2. In ES 6 we can replce the cb function body using arraow operator (=>) aka 'goes-into a method' 
5. rest parameters
6. collection types
7. Object Oriented Programming
   1. class
      1. by default methods are public
      2. data members must be prefixed by 'this' in a constructor for publiuc access sepcifier 
   2. members
      1. properties
         1. getter and setter methods to be used as properties
            1. get keyword
            2. set keyword
      2. methods
      3. constructor
   3. inheritance
   4. Proxy
   5. Generators
8. Promises
9.  Asynchronous Programming
10. Modules




















