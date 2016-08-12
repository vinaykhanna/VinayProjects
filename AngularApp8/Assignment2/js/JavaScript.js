/// <reference path="D:\vinay code\VinayProjects\AngularApp8\Assignment2\lib/angular.min.js" />
var EmployeeModule = angular.module("EmployeeModule", []).controller("EmployeeController", function ($scope) {
    $scope.Employees = [
    {
        Name: "ANUJ KUMAR", DateOfBirth: new Date("23-Nov-1978"), Gender: "male", Salary: 6789.90
    },
    {
        Name: "AMIT KUMAR", DateOfBirth: new Date("17-Sept-1978"), Gender: "male", Salary: 678990.90
    },
    {
        Name: "SUMIT KUMAR", DateOfBirth: new Date("15-Jun-1978"), Gender: "male", Salary: 67089.90
    },
    {
        Name: "SWATI", DateOfBirth: new Date("11-Jan-1992"), Gender: "female", Salary: 65757.90
    }
    ];
});



