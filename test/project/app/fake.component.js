var framework = {};

/* Fake code to test gulp 'test' task */
framework.test = {
    fakeFunc: function() {
        return 3;
    },
    fakeValue: 'fake'
};

/* Fake component to test gulp 'build' task for angular annotation */
var app = angular.module('fakeApp', []);
app.service('fakeService', fakeService);
function fakeService($http) {}
