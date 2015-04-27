var app = angular.module('examEx19', [])
  .controller('ExamController', ['$scope', function($scope) {

    var studentsInfo = {};
    studentsInfo.allCourses = [
      {courseId : 1000,courseName: "Basic Programming"},
      {courseId : 1001,courseName: "Advanced Programming"},
      {courseId : 1003,courseName: "DataBase Intro"}];
    studentsInfo.students = [];
    studentsInfo.students.push({studentId : 100, name: "Peter Hansen", grades : [{grade: "10"},{grade: "12"},{}]});
    studentsInfo.students.push({studentId : 101, name: "Jan Olsen", grades : [{grade: "7"},{grade: "10"},{}]});
    studentsInfo.students.push({studentId : 102, name: "Gitte Poulsen", grades : [{grade: "7"},{grade: "7"},{}]});
    studentsInfo.students.push({studentId : 103, name: "John McDonald", grades : [{grade: "10"},{},{grade: "7"}]});

        $scope.datas = studentsInfo;

  }]);

app.filter('average', function () {
    return function (items) {
        var filtered = [];
        var item = 0;
        for (var i = 0; i < items.length; i++) {
            item = item + items[i];
        }
        filtered.push(item / i);

        return filtered;
    };
});

app.directive('student-grades', function() {
    return {
        restrict: 'A',
        replace: 'true',
        template: '<h1>Grades</h1>' +
    '<table border="2">' +
    '<thead>' +
    '<tr>' +
    '<th>Name</th>' +
    '<th>Basic Programming</th>' +
    '<th>Advanced Programming</th>' +
    '<th>DataBase Intro</th>' +
    '<th>Average</th>' +
    '</tr>' +
    '<tr ng-repeat="data in datas.students">' +
    '<td>{{data.name}}</td>' +
'<td>{{data.grades[0].grade}}</td>' +
'<td>{{data.grades[1].grade}}</td>' +
'<td>{{data.grades[2].grade}}</td>' +
'</tr>' +
'</thead>' +
'</table>'
    };
});