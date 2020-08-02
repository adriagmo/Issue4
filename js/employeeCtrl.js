app.controller('employeeCtrl', ['$scope','$routeParams', '$http', function($scope,$routeParams,$http){
	
	$scope.setActive("mEmployees");
	
	var codigo = $routeParams.codigo;

	$scope.actualizado = false;
	$scope.employee = {};

	$scope.creando = false;


	if (codigo == "nuevo") {

		$scope.creando = true

	}else{

		$http.get('php/servicios/employee.getEmployee.php?c=' + codigo ).success(function(data){
			if( data.err !== undefined ){
				window.location = "#/employees";
				return;
			}
			$scope.employee = data;
		});

	}
	

	


	$scope.guardarEmployee = function(){

		if ( $scope.creando ) {

			$http.post('php/servicios/employees.crear.php', $scope.employee).success(function(data){

				if ( data.err === false ) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);

				};
			});


		}else{

			$http.post('php/servicios/employees.guardar.php', $scope.employee).success(function(data){

				if ( data.err === false ) {
					$scope.actualizado = true;

					setTimeout(function() {
						$scope.actualizado = false;
						$scope.$apply();
					}, 3500);

				};
			});

		}


	}

}]);