//Add & Update Task
$('#taskForm').submit(function(event){

	event.preventDefault();
	
	//Request(event, formData, URL, method, applicationType)
	ajaxCall(event, $(this).serializeArray(), $(this).attr('action'), $(this).attr('method'), "application/json").then(function(responseData) {
        if($('#taskForm').attr('method') == 'post'){
        	$('#taskBody').append('<tr>'
        		+'<td scope="row">'+responseData.taskBean.id+'</td>'
		      	+'<td scope="row">'+responseData.taskBean.task_name+'</td>'
		      	+'<td class="text-center">'
		      		+'<button class="btn btn-warning editTask">Edit</button>&nbsp;'
		      		+'<button class="btn btn-danger deleteTask">Delete</button>'
				+'</td>'
        		+'</tr>'
        	);
        	$('#task').val('');
        	$('#msgBox').removeClass('d-none');
        	$('#msgBox').removeClass('alert-danger');
        	$('#msgBox').addClass('alert-success');
        	$('#msg').text(responseData.message);
        }else {
        	var formData = $('#taskForm').serializeArray();
        	var tableData = $('#taskBody tr');
        	let taskId = '';
        	let taskName = '';
        	
        	$.each(formData, function (index, item) {
        		if (index === 0) {
        			taskId = item.value;
        	    }
        		if(index === 1){
        			taskName = item.value;
        		}
            });
        	
        	for(var i=0; i<tableData.length; i++){
        		var taskIds = tableData.eq(i).find('[scope="row"]')[0].innerText;
        		if(taskIds.includes(taskId)){
        			tableData.eq(i).find('[scope="row"]')[1].innerText = taskName;
        		}
        	}
        	
        	$('#task').val('');
        	$('#taskButton').text('Add Task');
        	$('#taskForm').attr('action','/m/addTask').attr('method','post');
        	$('#msgBox').removeClass('d-none');
        	$('#msgBox').removeClass('alert-danger');
        	$('#msgBox').addClass('alert-success');
        	$('#msg').text(responseData.message);
        }	
    }).catch(function(error) {
    	$('#msgBox').removeClass('d-none');
    	$('#msgBox').addClass('alert-danger');
    	$('#msgBox').removeClass('alert-success');
    	$('#msg').text(error);
    });
	
});

//Edit Task
$(document).on('click', '.editTask', function(event) {
	
	event.preventDefault();
	
	var editTaskDetails = $(this).closest('tr').find('td');
	var scopeRowTd = editTaskDetails.filter('[scope="row"]');
	
	$('#taskId').val(scopeRowTd[0].innerText);
	$('#task').val(scopeRowTd[1].innerText);

	if($('#task').val() != ''){
    	$('#taskButton').text('Update Task');
    	$('#taskForm').attr('action','/m/updateTask').attr('method','put');
    }
});

//Delete Task
$(document).on('click', '.deleteTask', function(event) {
	
	event.preventDefault();
	
	var taskId = $(this).closest('tr').find('td').filter('[scope="row"]')[0].innerText;
	
    var formData = [{ name: "id", value: taskId }];
    
    //Request(event, formData, URL, method, applicationType)
	ajaxCall(event, formData, "/m/deleteTask", "delete", "application/json").then(function(responseData) {
		$('#msgBox').removeClass('d-none');
    	$('#msgBox').removeClass('alert-danger');
    	$('#msgBox').addClass('alert-success');
    	$('#msg').text(responseData.message);
    }).catch(function(error) {
    	$('#msgBox').removeClass('d-none');
    	$('#msgBox').addClass('alert-danger');
    	$('#msgBox').removeClass('alert-success');
    	$('#msg').text(error);
    });
    
	$(this).closest('tr').remove();
    
});