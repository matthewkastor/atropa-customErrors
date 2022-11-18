
  
/* vsdoc for _global_ */

(function (window) {
    

    window._global_ = {
        /// <summary></summary>
        /// <returns type="_global_"/>
                
    };

    var $x = window._global_;
    $x.__namespace = "true";
    $x.__typeName = "_global_";
})(this);

  

  
/* vsdoc for atropa */

(function (window) {
    

    window.atropa = {
        /// <summary>Container for all Glorious classes, functions, etc.</summary>
        /// <returns type="atropa"/>
      
        /// <field name="data" type="">Container for gobal data related to the classes and functions.</field>
        data : {}, 
      
        /// <field name="customErrors" type="">Container for custom Errors.</field>
        customErrors : {}, 
                
        supportCheck: function(className, errorMessage) {
            /// <summary>Checks whether this class has been marked as unsupported and throws an 
            ///  error if it has.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="errorMessage" type="String">Optional. A custom error message. Defaults to
            ///  atropa.data[className].error</param>
        }, 
        
        requires: function(className, requirementFn, errorMessage) {
            /// <summary>Pushes a requirement check into atropa.data.requirements. The test
            ///  tests whether the class is supported in this environment. Sets
            ///  atropa.data[className]&apos;s support to unsupported and error to errorMessage
            ///  if the requirementFn returns false. The requirement checks will all be run
            ///  after the library has loaded.</summary>
            /// <param name="className" type="String">The name of the class.</param>
            /// <param name="requirementFn" type="Function">A function to test whether or not the class
            ///  is supported in this environment. If supported, returns true otherwise
            ///  return false.</param>
            /// <param name="errorMessage" type="String">The error message to use when this class or its
            ///  methods are called in unsupported environments. Defaults to:
            ///  &apos;The atropa.&apos; + className + &apos; class is unsupported in this environment.&apos;;</param>
        }
        
    };

    var $x = window.atropa;
    $x.__namespace = "true";
    $x.__typeName = "atropa";
})(this);

  

  
/* vsdoc for atropa.customErrors */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.customErrors = {
        /// <summary>Container for custom Errors.</summary>
        /// <returns type="atropa.customErrors"/>
                
    };

    var $x = window.atropa.customErrors;
    $x.__namespace = "true";
    $x.__typeName = "atropa.customErrors";
})(this);

  

  
  
/* vsdoc for atropa.customErrors.InvalidArgumentTypesError */

(function (window) {
    window.atropa.customErrors = window.atropa.customErrors || {};

    window.atropa.customErrors.InvalidArgumentTypesError = function(message){
        /// <summary>Invalid Argument Types Error</summary>
        /// <param name="message" type="String">Optional. The error message to send. Defaults to
        ///  &lt;code&gt;InvalidArgumentTypesError&lt;/code&gt;</param>
        /// <field name="name" type="">The name of the error. Tells the user what kind of custom
        /// error has been thrown.</field>
        name : {}, 
        /// <field name="message" type="">The error message to send.</field>
        message : {}
    };

    var $x = window.atropa.customErrors.InvalidArgumentTypesError;
    $x.prototype = {
                
    };

    $x.__class = "true";
    $x.__typeName = "atropa.customErrors.InvalidArgumentTypesError";
})(this);


  
/* vsdoc for atropa.data */

(function (window) {
    window.atropa = window.atropa || {};

    window.atropa.data = {
        /// <summary>Container for gobal data related to the classes and functions.</summary>
        /// <returns type="atropa.data"/>
                
    };

    var $x = window.atropa.data;
    $x.__namespace = "true";
    $x.__typeName = "atropa.data";
})(this);

  

