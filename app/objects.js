exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
  	//modifying constructor prototype will alter the class, so all its objects will get altered
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var properties = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) { //push to array only if its object's own properties
        properties.push(prop + ': ' + obj[prop]);
      }
    }
    return properties;
  }
};
