# HTML 5
1. HTML 5 = HTML + Inline JavaScript + Inline CSS
2. HTML 5 Features
   1. UI
      1. Input form fields
         1. text
         2. number, date, month, week, time
         3. email
         4. tel
      2. UX Fields
         1. video
         2. audio
      3. Layout Fields
         1. article
      4. Data Form Fields
         1. datalist
            1. Comnsume collection of data inside the HTML Element
            2. <datalist> as HTML 5 tag for storing data and this also can read data from JavaScript Array
      5. UI Attributes, they are the HTML 5 elements' behavioral values in markup. They are used during validations. The JavaScript Object  Model (aka JSOM) is used to eveluate each UI element for validations 
         1. value
            1. The values defined for element
         2. pattern
            1. Regular Expression
         3. min and max
            1. Lower and Upper limit of value present for element
         4. minlength and maxlength
            1. Lower and Upper limit for length of value entered in element
         5. required, disabled, readonly
            1. Value is Must , required
            2. Element is disabled for data entry, disabled
            3. ELemetn shows readonly data, readonly 
         6. We need <form> tag for defining validations and each 'editable' element must have 'name' attribute
   2. HTML 5 Programming
      1. Basic JSOM
         1. document and window
         2. document.getElementById('<id of element>')
            1. returns single DOM element
         3. getElementsByName() --> returns an array of DOM
            1. The DOM array may have different DOM elements in it
         4. getElementsByTagName() --> returns an array of DOM 
            1. The DOM array always have same elements
         5. The 'addEventListener()' method of document object to define an event on DOM element.
            1. document.addEventListener('<event-name>', <callback-function>, <boolean to keep callback atatched/live with element >) 
      2. JS Objects
         1. functions
            1. standard functions
               1. Array functions --> Array.<Function>
               2. String function
               3. Date Functions
            2. User Defined functions
               1. Immediately Invoked Function Expressions (IIFE) aka self-invoked JavaScript Functions aka self-executable JavaScript
               2. close-Type functions
                  1. Function with body returning Object
                     1. e.g. function <name> (<parameters>){.... return <some object>}
               3. Reference functions
                  1. They are stored in variable aka object. They always return  JSON object
                  2. e.g. var obj = function(<parameters>) {
                     1. fn1:function(<p>){...},
                     2. fn2:function(<p>){...}
                  3. } 
         2. Array
         3. String
         4. Date
   3. API
      1. Storage
         1. localStorage
            1. Permamant Browser Storage
            2. Data is stored in JSOn format
            3. preferred for not-volatile data management
            4. The 'localStorage' object
               1. setItem() , to add item
               2. getItem(), to retrieve item
               3. clear(), to cear the storage
               4. keys(), return itsm key
         2. sessionStorage
            1. Volatile Browser Storage
            2. Data is stored in JSOn format
            3. preferred for not-volatile data management
            4. The 'sessionStorage' object
               1. setItem() , to add item
               2. getItem(), to retrieve item
               3. clear(), to cear the storage
               4. keys(), return itsm key
         3. indexedDB
            1. Browsers Database
            2. window.indexedDB
               1. ObjectStore like tables
      2. Networking
         1. AJAX
         2. Socket
      3. Graphics API
         1. Canvas
            1. Pixel based graphics 
         2. SVG
            1. Vector based rendering
            2. <svg>
               1. Xml based rendering system
               2. line
                  1. <line x1="" y1="" x2="" y2="">
               3. rectangle
                  1. <rectangle >
               4. circle
                  1. Design cirsle
               5. polygon
                  1. freehand line
      4. WebWorker object used for Threading
      5. Devices
         1. Sensors
      6. Files
         1. Text, BLOB
      7. Drag-Drop
      8. Geolocation
         1. Maps
3. CSS 3 Features
   1. Filters
      1. id filters , set using # operator
      2. class filter, set using . operator
      3. tag filter, set using HTML tag name
      4. Position Based Filters introduced in CSS 3
         1. ~, e1~e2, all e2 succeeds to e1
         2. >, e1>e2, all e1 preceeds e2
      5. class="Fisrt Second Third"
         1. Attribute^=Value
            1. The Style will be applied based on the first occurance of value
            2. <div class="first second third">
            2. <div class="second first third"> 
            2. <div class="first  third second"> 
         2.  class^=first
             1.  Apply style to all DOM Elements having class value starts with first
     1.  Attribute *= value
         1.  The value of the attribute at 'any' position
     2.  Attribute $= value
         1.  The value of attribute at 'last' position 