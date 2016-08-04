app.service('CoursesService', [
  '$scope',
  '$state',
  '$http',
  '$q',

  function ($scope,
            $state,
            $http,
            $q) {

    var CoursesService = {
      getCourses: function () {
        $http.get('./courses.json')
          .success(function (data) {
            console.log(data)
          })
      }
    }

    return CoursesService
  }
])