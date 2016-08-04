app.controller('DisciplineListCtrl', [
  '$scope',
  '$state',
  'CoursesService',

  function ($scope,
            $state,
            CoursesService) {

    $scope.selectedCourse = {}

    CoursesService.init()

    $scope.courses = CoursesService.courses
  }
])