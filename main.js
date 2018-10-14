
document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e){
	var issueDesc=document.getElementById('issueDescInput').value;
	var issueSeverity=document.getElementById('issueSeverityInput').value;
	var issueLinkedTo=document.getElementById('issueLinkedToInput').value;
	var issueId=chance.guid();
	var issueStatus='open';

	var issue={
		id: issueId,
		description: issueDesc,
		severity: issueSeverity,
		linkedTo: issueLinkedTo,
		status: issueStatus
	}
	 if (localStorage.getItem('issues')==null) {
	 	  var issues=[];
	 	  issues.push(issue);

	 	  localStorage.setItem('issues', JSON.stringify(issues));

	 }else{
	 	var issues=JSON.parse(localStorage.getItem('issues'));
	 	issues.push(issue);
	 	localStorage.setItem('issues', JSON.stringify(issues));
	 }

	 document.getElementById('issueInputForm').reset();

	 fetchIssues();

	 e.preventDefault();
}

function fetchIssues(){

	var issues=JSON.parse(localStorage.getItem('issues'));
	var issuesLists= document.getElementById('issuesList');

	   issuesList.innerHTML='';

	   for (var i=0; i<issues.length; i++ ){
             var id=issues[i].id;
             var desc=issues[i].description;
             var severity=issues[i].severity;
             var linkedTo=issues[i].linkedTo;
             var status=issues[i].status;

             issues.innerHTML += '<div class="well">'+
                                  '<h6>Issue ID:' + id + '</h6>'+ 
                                   '<p><span class="label label-info">'+ status + '</span></p>'+
                                   '<h3>' + desc + '</h3>'+
                                   '<p><span class="glyphicon glyphicon-time">'+ severity + '</span></p>'+
                                   '<p><span class="glyphicon glyphicon-user">'+ linkedTo + '</span></p>'+
                                   '<a href="#" onclick="setStatusClosed(\'' +id+'\')" class="btn btn-warning">Close</a>'+
                                   '<a href="#" onclick="deleteIssue(\'' +id+'\')" class="btn btn-danger">Delete</a>'+
                                   '</div>';




	   }
}