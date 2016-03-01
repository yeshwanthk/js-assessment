exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var deferred = $.Deferred();
  	setTimeout(function(){
  		deferred.resolve(value);
  	},1);
  	return deferred.promise();
  },

  manipulateRemoteData : function(url) {
  	var deferred = $.Deferred();
  	$.ajax(url).then(function(response) {
  		var people = response.people.map(function(item) {
        	return item.name;
      	});
  		people.sort();

  		deferred.resolve(people);
  	});
  	return deferred.promise();
  }
};
