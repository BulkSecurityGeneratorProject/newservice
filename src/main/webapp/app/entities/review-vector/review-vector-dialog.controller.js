(function() {
    'use strict';

    angular
        .module('myserviceApp')
        .controller('ReviewVectorDialogController', ReviewVectorDialogController);

    ReviewVectorDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'ReviewVector', 'Review', 'RankSnapshot'];

    function ReviewVectorDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, ReviewVector, Review, RankSnapshot) {
        var vm = this;

        vm.reviewVector = entity;
        vm.clear = clear;
        vm.save = save;
        vm.reviews = Review.query();
        vm.ranksnapshots = RankSnapshot.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.reviewVector.id !== null) {
                ReviewVector.update(vm.reviewVector, onSaveSuccess, onSaveError);
            } else {
                ReviewVector.save(vm.reviewVector, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('myserviceApp:reviewVectorUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();