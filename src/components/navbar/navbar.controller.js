'use strict';
/*jshint esnext: true */

class NavbarController {
  constructor ($scope) {
    $scope.date = new Date();
  }
}

NavbarController.$inject = ['$scope'];

export default NavbarController;
