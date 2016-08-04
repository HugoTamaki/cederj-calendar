app.controller('MainCtrl', [
  '$scope',
  '$state',

  function ($scope,
            $state) {

    $scope.title = 'njnen'

    $scope.disciplinesList = function () {
      $state.go('disciplines-list')
    }
  }
])