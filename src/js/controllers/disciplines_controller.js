app.controller('DisciplineListCtrl', [
  '$scope',
  '$state',
  'Location',
  'Course',
  'CourseDiscipline',

  function ($scope,
            $state,
            Location,
            Course,
            CourseDiscipline) {

    $scope.selected = {
      location: null,
      course: null
    }

    $scope.moment = moment

    Location.get(
      null,
      function(response) {
        $scope.locations = response.locations
      },
      function(err) {
        console.log(err);
      }
    )

    $scope.updateSelectedLocation = function() {
      $scope.selected.course = null
      $scope.selected.discipline = null

      if ($scope.selected.location) {
        Course.get(
          {
            locationId: $scope.selected.location.id
          },
          function(response) {
            $scope.courses = response.courses
          },
          function(err) {
            console.log(err)
          }
        )
      }
    }

    $scope.updateSelectedCourse = function() {
      $scope.selected.discipline = null

      if ($scope.selected.course) {
        CourseDiscipline.get(
          {
            locationId: $scope.selected.location.id,
            courseId: $scope.selected.course.id
          },
          function(response) {
            $scope.courseDisciplines = response.course_disciplines
          },
          function(err) {
            console.log(err)
          }
        )
      }
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