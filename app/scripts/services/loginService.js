'use strict';
angular.module('gbApp')
.factory('loginService',function($http, $state){
	// return{
	// 	login:function(data,scope){
	// 		var $promise=$http.post('data/user.php',data); //send data to user.php
	// 		$promise.then(function(msg){
	// 			var uid=msg.data;
	// 			if(uid){
	// 				//scope.msgtxt='Correct information';
	// 				sessionService.set('uid',uid);
	// 				$location.path('/home');
	// 			}	       
	// 			else  {
	// 				scope.msgtxt='incorrect information';
	// 				$location.path('/login');
	// 			}				   
	// 		});
	// 	},
	// 	logout:function(){
	// 		sessionService.destroy('uid');
	// 		$location.path('/login');
	// 	},
	// 	islogged:function(){
	// 		var $checkSessionServer=$http.post('data/check_session.php');
	// 		return $checkSessionServer;
	// 		/*
	// 		if(sessionService.get('user')) return true;
	// 		else return false;
	// 		*/
	// 	}
	// }
	return{
		login:function(data,scope){
			//console.log(data.email);
			//console.log(data.pwd);
			if(data.email == "greenbox@gmail.com" && data.pwd=="1234"){
				$state.go('root.deduction');
				console.log('redirect');
			}	
			else{
				$state.go('login');
				console.log('none redirect');
			}
		}
	}






});