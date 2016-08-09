app.service('CoursesService', [
  'DataService',

  function (DataService) {

    var CoursesService = {
      courses: [],
      selectedCourse: null,
      term: '',
      init: function () {
        var locations = DataService.locations,
            self = this

        this.locations = locations.map(function (location) {
          return self.getCourses(location)
        })
        
        this.locations.forEach(function (location) {
          location.courses.map(function (course) {
            return self.getDisciplines(course)
          })
        })
      },

      getCourses: function (location) {
        var courses = DataService.courses

        location.courses = courses.filter(function (course) {
          return course.location === location.name
        })

        return location
      },

      getDisciplines: function (course) {
        var disciplines = DataService.disciplines

        course.disciplines = disciplines.filter(function (discipline) {
          return discipline.course === course.name
        })

        return course
      },

      getFilteredDisciplines: function (course) {
        var search = this.term.split(" ").join("|")
        var regexp = new RegExp(search, "i")

        return _(course.disciplines).filter(function (discipline) {
          return regexp.test(discipline.name)
        })
      }
    }

    return CoursesService
  }
])