//InitialView Component Constructor
function InitialView (appWindow) {

	//var InjuriesDBI = require('db/dbi/injuries/InjuriesDBI').InjuriesDBI;
	//var injuriesDBI = new InjuriesDBI();

	var tableData;

	var appWindowTableView = Ti.UI.createTableView({
		separatorColor: 'transparent',
		height: Ti.UI.FILL,
		width: Ti.UI.FILL
	});

	//if (injuriesDBI.noInjuryDefined()) {
	if (true) {
    var AppConfigTableData = require('ui/appconfig/AppConfigTableData').AppConfigTableData;
	  tableData = new AppConfigTableData(appWindow, appWindowTableView);
  }
  else {
		//var OperationsTableData = require('ui/operations/OperationsTableData').OperationsTableData;
		//var operationsTableData = new OperationsTableData();
	  //tableData = operationsTableData.buildTableData(monthYear);
  }

	appWindowTableView.setData(tableData);

	return appWindowTableView;
}

exports.InitialView = InitialView;
