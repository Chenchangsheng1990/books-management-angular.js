var app = angular.module("app", ["myCtrlMod", "ngCookies", "ui.router", "ui.grid", "ui.grid.pagination", "myservicemodule"]);

//路由配置
app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("login");
    $stateProvider.state("login", {
        url:"/login",
        views:{
            "index":{
                templateUrl:"template/login.html"
            }
        }
    }).state("main", {
        url:"/main",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@main":{
                templateUrl:"template/menu.html"
            }
        }
    }).state("select_user", {
        url:"/select_user",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@select_user":{
                templateUrl:"template/menu.html"
            },
            "content@select_user":{
                templateUrl:"template/select_user.html"
            }

        }
    }).state("add_user", {
        url:"/add_user",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@add_user":{
                templateUrl:"template/menu.html"
            },
            "content@add_user":{
                templateUrl:"template/add_user.html"
            }
        }
    }).state("search_user", {
        url:"/search_user",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@search_user":{
                templateUrl:"template/menu.html"
            },
            "content@search_user":{
                templateUrl:"template/search_user.html"
            }
        }
    }).state("userdetail", {
        url:"/userdetail/:id",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@userdetail":{
                templateUrl:"template/menu.html"
            },
            "content@userdetail":{
                templateUrl:"template/userdetail.html"
            }
        }
    }).state("changeuserinfo", {
        url:"/changeuserinfo/:id",
        views:{
            "index":{
                templateUrl:"template/main.html"
            },
            "menu@changeuserinfo":{
                templateUrl:"template/menu.html"
            },
            "content@changeuserinfo":{
                templateUrl:"template/changeuserinfo.html"
            }
        }
    })
})
