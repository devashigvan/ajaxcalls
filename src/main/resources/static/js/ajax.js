function ajaxCall(event, formData, url, method, contentType) {
	
    event.preventDefault();

    var data = {};
    $(formData).each(function(index, obj) {
        data[obj.name] = obj.value;
    });

    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            method: method,
            data: JSON.stringify(data),
            contentType: contentType,
            success: function(response) {
                resolve(response);
            },
            error: function(jqXHR) {
                reject(jqXHR);
            }
        });
    });
}