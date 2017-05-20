var app = angular.module("myCtrlMod", []);
app.controller("loginCtrl", function ($scope, $http, $cookies, $state) {
    var user_in = $cookies.get("user_info");

    $scope.user = { username: user_in };
    $scope.login = function () {

        $http.get("/data/admin.json").success(function (data) {

            if (data.username == $scope.user.username && data.password == $scope.user.password) {
                console.log("成功");
                $scope.error = false;
                if ($scope.remember) {
                    var date = new Date();
                    date.setDate(date.getDate() + 7);
                    $cookies.put("user_info", $scope.user.username, { expires: date })
                } else {
                    $cookies.remove("user_info");
                }
                $state.go("main")
            } else {
                $scope.error = true;
            }
        })
    }
})

app.controller("selectCtrl", function ($rootScope, $scope, $http, usermanage) {
    $rootScope.options = {
        // data: usermanage.searchAll(),
        enableSorting: false,
        paginationPageSizes: [5, 10, 15, 20],
        paginationPageSize: 5,
        columnDefs: [
            { field: "id", name: "编号" },
            { field: "username", name: "用户名" },
            { field: "level", name: "等级" },
            { field: "opreation", name: "操作", cellTemplate: "<div ng-controller='opreationCtrl'><a ui-sref='userdetail({id:row.entity.id})'>查看详情 &nbsp;</a><a ui-sref='changeuserinfo({id:row.entity.id})'>修改 &nbsp;</a><a ng-click='del(Cindex)'>删除</a></div>" }
        ]
    };
    usermanage.searchAll().then(function(data){
        $rootScope.options.data = data;
    })
    
})

app.controller("adduserctrl", function($scope){
    
    $scope.adduser = function(){
        alert("添加成功")
    }
})
app.controller("opreationCtrl", function($rootScope, $scope){
    $scope.getDetail = function(){
        $rootScope.isshow = true;
    }
    $scope.del = function(index){
        confirm("是否确定删除，该操作不可逆");
        $rootScope.options.data.splice($rootScope.options.data.index,1)
        
    }
})
app.controller("searchCtrl", function($scope, usermanage){
    // $scope.users = [
    //             {id:1, username:"xiaoming", level:"vip0", address:"成都"},
    //             {id:2, username:"张三", level:"vip1", address:"重庆"},
    //             {id:3, username:"李四", level:"vip2", address:"上海"}
    //         ]
    usermanage.searchAll().then(function(data){
        $scope.users = data;
    })
})
app.controller("userdetailCtrl", function($scope, $stateParams, usermanage){
	var id = $stateParams.id;
	var promise = usermanage.searchById(id);
	promise.then(function(data){
        console.log(data)
		$scope.user = data;
        
	});
});
app.controller("changeuserinfo", function($scope, $stateParams, usermanage){
    var id = $stateParams.id;
	var promise = usermanage.searchById(id);
	promise.then(function(data){
        console.log(data)
		$scope.user = data;
        
	});
    $scope.change = function(){
        alert("修改成功")
    }
})
