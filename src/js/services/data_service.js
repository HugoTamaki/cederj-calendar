app.service('DataService', [

  function () {

    var DataService = {
      courses: window.courses,
      disciplines: window.disciplines
    }

    return DataService
  }
])