//= require modulejs
//= require jquery
//= require jquery_ujs
//= require bootstrap-sass
//= require refile
//= require_tree ./modules

//= require adminlte

(function(){
	'use strict';

	$(document).ready(function(){
		modulejs.require('initializer');
	});
})();

$.ajax({
  method: "GET",
  url: "https://api.github.com/repos/learning-ruby/brasil-sem-zika/contributors",
  dataType: 'json'
<<<<<<< HEAD
 })
   .done(function(contri) {
 	  	$.each(contri, function (index, value) {
 	  		$("#contributors").append("<a href='"+ value.html_url +"'><img src='" + value.avatar_url + "' title='"+ value.login +"' style='border-radius: 20px; width:100px; padding-bottom: 10px; margin-left: 10px;'> </a>");
 	});
  }); 
=======
})
  .done(function(contri) {
	  	$.each(contri, function (index, value) {
	  		$("#contributors").append("<a href='"+ value.html_url +"'><img src='" + value.avatar_url + "' title='"+ value.login +"' style='border-radius: 20px; width:100px; padding-bottom: 10px; margin-left: 10px;'> </a>");
	});
 });
>>>>>>> 6d88779f48081856fcb9a7531014165a8b3d5d33
