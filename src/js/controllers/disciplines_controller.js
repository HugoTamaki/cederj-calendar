app.controller('DisciplineListCtrl', [
  '$scope',
  '$state',
  'CoursesService',

  function ($scope,
            $state,
            CoursesService) {

    $scope.selectedCourse = {
      course: null
    }

    $scope.disciplines = []

    $scope.coursesService = CoursesService
    CoursesService.init()

    $scope.updateSelectedCourse = function () {
      $scope.disciplines = $scope.selectedCourse.course ?
                              $scope.selectedCourse.course.disciplines :
                              []
    }

    $scope.updateDisciplines = function () {
      $scope.disciplines = CoursesService.getFilteredDisciplines($scope.selectedCourse.course)
    }
  }
])