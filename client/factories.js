angular.module("boiler.factories", ["ngResource"])

    .factory("static", ["$resource", function ($resource) {
        return $resource("http://localhost:3000/api/static/");
    }])