app.service('CoursesService', [
  'DataService',

  function (DataService) {

    var CoursesService = {
      courses: [],
      init: function () {
        var courses = DataService.courses,
            disciplines = DataService.disciplines,
            self = this

        this.courses = courses.map(function (course) {
          return self.getDisciplines(course)
        })
      },

      getDisciplines: function (course) {
        var disciplines = DataService.disciplines

        course.disciplines = disciplines.filter(function (discipline) {
          return discipline.course === course.name
        })

        return course
      }
    }

    return CoursesService
  }
])