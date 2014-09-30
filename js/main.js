var salesDetails = $('.sales__details');
var sales = $('.sales');

var action = function () {
	var isActive = salesDetails.attr('data-state');
	
	if (isActive == 'active') {
	salesDetails.attr('data-state', 'inactive');
	} else {
	salesDetails.attr('data-state', 'active');
	}
};

sales.on('click', action);



var salesDetails2 = $('.sales__details-2');
var sales2 = $('.sales-2');

var action = function () {
	var isActive = salesDetails2.attr('data-state');
	
	if (isActive == 'active') {
	salesDetails2.attr('data-state', 'inactive');
	} else {
	salesDetails2.attr('data-state', 'active');
	}
};

sales2.on('click', action);