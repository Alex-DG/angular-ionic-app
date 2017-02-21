/**
 * Created by Alex on 20/02/2017.
 */
(function () {
  'use strict';

  angular.module('eliteApp').controller('StandingsCtrl', ['eliteApi', StandingsCtrl]);

  function StandingsCtrl(eliteApi) {
    var vm = this;

    eliteApi.getLeagueData().then(function(data){
      vm.standings = data.standings;
    });

  };
})();
