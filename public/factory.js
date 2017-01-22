app.factory('myFactory', function() {
	return {
		greet: "Using HighCharts!!",
		getGreeting: function() {
			return this.greet;
		}
	}
})