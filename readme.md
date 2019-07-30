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
         2. sessionStorage
         3. indexedDB
      2. Networking
         1. AJAX
         2. Socket
      3. Devices
         1. Sensors
      4. Files
         1. Text, BLOB
      5. Drag-Drop
      6. Geolocation
         1. Maps
3. CSS 3 Faatures
   1. Filters
      1. id filters , set using # operator
      2. class filter, set using . operator
      3. tag filter, set using HTML tag name
      4. Position Based Filters introduced in CSS 3