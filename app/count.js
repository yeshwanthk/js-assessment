exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var timer;
	var counter = function(){

		//output result to console (for test case)
		console.log(start++); 

		if(start>end){
			clearInterval(timer); //end of counter, stop interval
			return;
		}
	};
	counter();
	timer = setInterval(counter,100); //1/10th of sec is 100 ms
	
	return{
		cancel: function(){
			clearInterval(timer);
		}
	};
  }
};
