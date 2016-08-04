app.controller('DisciplineListCtrl', [
  '$scope',
  '$state',
  'CoursesService',

  function ($scope,
            $state,
            CoursesService) {

    CoursesService.getCourses()
  }
])