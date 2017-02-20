/**
 * Created by Alex on 20/02/2017.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('LocationsCtrl', ['eliteApi', LocationsCtrl]);

  function LocationsCtrl(eliteApi) {
    var vm = this;

    var data = eliteApi.getLeagueData();
    vm.locations = data.locations;

  };
})();
