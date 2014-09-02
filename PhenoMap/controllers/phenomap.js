/// <reference path="../angular.js" />

var app = angular.module("phenomap");


    app.constant("templateDataUrl", "http://localhost:8080/mausdb-entities/rest/annotation_templates")
    app.constant("mouselineDataUrl", "http://localhost:8080/mausdb-entities/rest/mouselines")
    .controller("phenomapCtrl", function ($scope, $http, templateDataUrl,mouselineDataUrl) {

        $scope.data = {};

        $http.get(templateDataUrl)
            .success(function (data) {
                $scope.data.templates = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });

            $http.get(mouselineDataUrl)
                .success(function (data) {
                    $scope.data.mouselines = data;
                })
                .error(function (error) {
                    $scope.data.error = error;
                });
    });


