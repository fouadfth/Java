$(function(){

		$.ajax({
			type:'GET',
			url:'A.json',
			success : function(data){
					console.log('success' , data);
			}
		})
});