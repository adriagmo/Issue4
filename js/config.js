app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/employees',{
			templateUrl: 'parciales/employees.html',
			controller: 'employeesCtrl'
		})
		.when('/employee/:codigo',{
			templateUrl: 'parciales/employee.html',
			controller: 'employeeCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});