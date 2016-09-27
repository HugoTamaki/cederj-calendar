app.controller('DisciplineListCtrl', [
  '$scope',
  '$state',
  'CoursesService',

  function ($scope,
            $state,
            CoursesService) {

    $scope.selected = {
      location: '',
      course: ''
    }

    $scope.courses = []
    $scope.disciplines = []

    $scope.coursesService = CoursesService
    CoursesService.init()

    $scope.isEmpty = function (data) {
      return _(data).isEmpty()
    }

    $scope.updateSelectedLocation = function () {
      $scope.coursesService.term = ''
      $scope.courses = $scope.selected.location.courses
    }

    $scope.updateSelectedCourse = function () {
      $scope.coursesService.term = ''
      $scope.disciplines = $scope.selected.course ?
                              $scope.selected.course.disciplines :
                              []
    }

    $scope.liberated = function (location, ap_date, ap_time) {
      var time = ap_time.split(':')
      ap_date.add(parseInt(time[0]), 'hours')
      ap_date.add(parseInt(time[1]), 'minutes')

      if (location.liberate_30_min_before) {
        return lessThan30Minutes(ap_date)
      } else {
        return true
      }

      function lessThan30Minutes (date) {
        return moment().add(30, 'minutes') > date
      }
    }

    $scope.updateDisciplines = function () {
      $scope.disciplines = CoursesService.getFilteredDisciplines($scope.selected.course)
    }

    $scope.goToDiscipline = function (discipline) {
      $state.go('discipline', { discipline: discipline })
    }
  }
])

.controller('DisciplineCtrl', [
  '$scope',
  '$state',
  '$stateParams',

  function ($scope,
            $state,
            $stateParams) {

    $scope.discipline = $stateParams.discipline
  }
])