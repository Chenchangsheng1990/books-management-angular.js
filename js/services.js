var app = angular.module("myservicemodule", []);
app.service("usermanage", function ($http, $q) {
    function promiseObj(url) {
		var deferred = $q.defer();
		var promise = $http.get(url);
		promise.then(function(data){
			deferred.resolve(data.data);
		}, function(error){
			deferred.reject(error);
		});

		return deferred.promise;
	}

    return {
        
        searchAll: function () {
            return promiseObj("/data/allusers.json");
            // var userdata = [];
            // $http({ "method": "get", url: "/data/allusers.json" }).success(function (data) {
            //     userdata = data;
            //     console.log(userdata)
            // })
           
            
        },
        add: function () { },
        update: function () { },
        delete: function () { },
        searchById : function(id){
			var url = "/data/user" + id + ".json";
			return promiseObj(url);
		}
    }
})