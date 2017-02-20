/**
 * Created by Alex on 20/02/2017.
 */
// angular.module('eliteApp')
//   .controller("teamDetailCtrl", function ($stateParams) {
//     function teamDetailCtrl($stateParams) {
//       var vm = this;
//
//       console.log("$stateParams", $stateParams);
//   }
//
//   });
(function () {
  'use strict';

  angular.module('eliteApp').controller('teamDetailCtrl', ['$stateParams',teamDetailCtrl]);

  function teamDetailCtrl($stateParams) {
    var vm = this;

    console.log("$stateParams", $stateParams);
  }

})();
