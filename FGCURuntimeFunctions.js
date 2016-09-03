function setupSchedule() {
	schedule = {
		0:{'semester':'Spring 2012','classes':[]},
		1:{'semester':'Summer 2012','classes':[]},
		2:{'semester':'Fall 2012','classes':[]},
		3:{'semester':'Spring 2013','classes':[]},
		4:{'semester':'Summer 2013','classes':[]},
		5:{'semester':'Fall 2013','classes':[]},
		6:{'semester':'Spring 2014','classes':[]},
		7:{'semester':'Summer 2014','classes':[]},
		8:{'semester':'Fall 2014','classes':[]},
		9:{'semester':'Spring 2015','classes':[]},
		10:{'semester':'Summer 2015','classes':[]},
		11:{'semester':'Fall 2015','classes':[]},
		12:{'semester':'Spring 2016','classes':[]},
		13:{'semester':'Summer 2016','classes':[]},
		14:{'semester':'Fall 2016','classes':[]},
		15:{'semester':'Spring 2017','classes':[]},
		16:{'semester':'Summer 2017','classes':[]},
		17:{'semester':'Fall 2017','classes':[]},
		18:{'semester':'Spring 2018','classes':[]},
		19:{'semester':'Summer 2018','classes':[]},
		20:{'semester':'Fall 2018','classes':[]},
		21:{'semester':'Spring 2019','classes':[]},
		22:{'semester':'Summer 2019','classes':[]},
		23:{'semester':'Fall 2019','classes':[]},
		24:{'semester':'Spring 2020','classes':[]},
	};
}

// i
window.onload = function() {
	major1 = document.getElementById("major1Dropdown");major2 = document.getElementById("major2Dropdown");minor1 = document.getElementById("minor1Dropdown");minor2 = document.getElementById("minor2Dropdown");
	semesterAdd = document.getElementById("semesterAdd");semesterRemove = document.getElementById("semesterRemove");classAdd = document.getElementById("classAdd");classRemove = document.getElementById("classRemove");
	hiddenOption = document.getElementById("hiddenDropdown");scienceOption = document.getElementById("scienceDropdown");scheduleParagraph = document.getElementById("scheduleOutput");creditParagraph = document.getElementById("creditOutput");prereqParagraph = document.getElementById("prereqsOutput");username = document.getElementById("nameInput");courseNumberParagraph = document.getElementById("courseNumberOutput");courseName = document.getElementById("courseName");courseDescriptionInput = document.getElementById("courseDescriptionInput");courseDescriptionParagraph = document.getElementById("courseDescriptionOutput");
	major1Paragraph = document.getElementById("major1Output");major2Paragraph = document.getElementById("major2Output");minor1Paragraph = document.getElementById("minor1Output");minor2Paragraph = document.getElementById("minor2Output");generalEducationParagraph = document.getElementById("generalEducationOutput");
    setupSchedule();CopySchedule();
    for (i=0;i<Object.keys(schedule).length;i++){addEntry = document.createElement("option");removeEntry = document.createElement("option");addEntry.text = schedule[i].semester;removeEntry.text = schedule[i].semester;semesterAdd.add(addEntry,null);semesterRemove.add(removeEntry,null);}
    major1Select = document.createElement("option");major1Select.text = "Select a major";major1.add(major1Select,null);major2Select = document.createElement("option");major2Select.text = "Select a double major";major2.add(major2Select,null);minor1Select = document.createElement("option");minor1Select.text = "Select a minor";minor1.add(minor1Select,null);minor2Select = document.createElement("option");minor2Select.text = "Select a double minor";minor2.add(minor2Select,null);
    for (i=0;i<Object.keys(majors).length;i++){major1Entry = document.createElement("option");major1Entry.text = Object.keys(majors)[i];major1.add(major1Entry,null);major2Entry = document.createElement("option");major2Entry.text = Object.keys(majors)[i];major2.add(major2Entry,null);}
    for (i=0;i<Object.keys(minors).length;i++){minor1Entry = document.createElement('option');minor1Entry.text = Object.keys(minors)[i];minor1.add(minor1Entry,null);minor2Entry = document.createElement('option');minor2Entry.text = Object.keys(minors)[i];minor2.add(minor2Entry,null);}
};

String.prototype.replaceAt=function(index, character) {return this.substr(0, index) + character + this.substr(index+character.length);};

// j
function displaySchedule() {
	schOutString = '';emptySchedule = true;
	for (j=0;j<Object.keys(schedule).length;j++){if (schedule[j].classes.length >0){emptySchedule=false;schOutString = schOutString + '<br>'+ schedule[j].semester +' - '+SumSemesterCredits(j)+ ' Credit(s)\n'+'<br>'+schedule[j].classes.join(' ')+'\n'+'<br>';}}
	if (emptySchedule) {return '<orangeText>You have not added any classes to your course schedule yet.</orangeText>';} else {return schOutString;}
}

// o p
function CopySchedule() {
	scheduleCopy = [];
	for (o=0;o<Object.keys(schedule).length;o++){if (schedule[o].classes.length>0){for (p=0;p<schedule[o].classes.length;p++){scheduleCopy.push(schedule[o].classes[p])}}}
	if (scheduleCopy.length == 0) {} else {return scheduleCopy;}
}

// k, j
function SumSemesterCredits(j){
	creditsTotal = 0;
	try{for (k=0;k<schedule[j].classes.length;k++){creditsTotal+=classes[schedule[j].classes[k]].credits;}}catch(err){alert('Bad credit data for class');}
	return creditsTotal;
}

function updateViews() {
	if(hiddenOption.value=='Yes'){hidden=true;}else{hidden=false;}
	if(scienceOption.value=='Science'){science=true;}else{science=false;}
	CopySchedule();generalEducationParagraph.innerHTML = GeneralEducationRequirements();scheduleParagraph.innerHTML = displaySchedule();prereqParagraph.innerHTML = VerifyPrereqs();major1Paragraph.innerHTML = CheckMajor1Requirements();major2Paragraph.innerHTML = CheckMajor2Requirements();minor1Paragraph.innerHTML = CheckMinor1Requirements();minor2Paragraph.innerHTML = CheckMinor2Requirements();
	try{for (g=0;g<Object.keys(schedule).length;g++){if (schedule[g].classes.length > 0) {lastFilled = g;}}creditParagraph.innerHTML = '\n<br>With your current degree plan, you will have completed '+SumTotalCredits()+' credits by the end of '+schedule[lastFilled].semester+'.\nThis may include transfer credits that are are not \"counted\".\nPlease verify your credits with the registrar.\n\n<br>';}catch(err){creditParagraph.innerHTML = '\n<br>With your current degree plan, you will have completed '+SumTotalCredits()+' credits by the end of '+schedule[Object.keys(schedule).length-1].semester+'.\nThis may include transfer credits that are are not \"counted\".\nPlease verify your credits with the registrar.\n\n<br>';}
}

// i
function inputFocus(i){if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }}

// i
function inputBlur(i){if(i.value===""){ i.value=i.defaultValue; i.style.color="#888"; }}

// i
function addClass(){
	classFound = false;
	classAddCheck = classAdd.value.toLowerCase();
	if (classAddCheck != classAdd.defaultValue.toLowerCase()) {for (i=0;i<Object.keys(classes).length;i++){if (classAddCheck == Object.keys(classes)[i].toLowerCase()) {classFound=true;classAt=i;break;}}}
	if (classFound) {for (i=0;i<Object.keys(schedule).length;i++){if(schedule[i].semester==semesterAdd.value){schedule[i].classes.push(Object.keys(classes)[classAt]);break;}}updateViews();} 
	else { scheduleParagraph = document.getElementById("scheduleOutput");scheduleParagraph.innerHTML = '<redText>Please be sure to enter a valid class to add.</redText>';}
}

// i j
function removeClass(){
	classRemoveCheck = classRemove.value.toLowerCase();foundRemoval = false;
	if (classRemoveCheck != classRemove.defaultValue.toLowerCase()){for (i=0;i<Object.keys(schedule).length;i++){if (schedule[i].semester == semesterRemove.value) {for (j=0;j<schedule[i].classes.length;j++){if (classRemoveCheck == schedule[i].classes[j].toLowerCase()){foundRemoval=true;schedule[i].classes.splice(j,1);updateViews();break;}}}}
	} else {scheduleParagraph.innerHTML = '<redText>Please be sure to enter a valid class to remove.</redText><br>';}
	if (!foundRemoval) {scheduleParagraph.innerHTML = '<redText>Please be sure to enter a valid class to remove.</redText><br>';}
}

// w
function CompareClassAgainstSchedule(reqClass,scheduleClass){
	Xindices = [];xindices = [];cCheck = scheduleClass;
	for (w=0;w<reqClass.length;w++){if (reqClass[w]=='X'){Xindices.push(w);}}
	for (w=0;w<reqClass.length;w++){if (reqClass[w]=='x'){xindices.push(w);}}
	for (w=0;w<Xindices.length;w++){try{cCheck = cCheck.replaceAt(Xindices[w],'X');}catch(err){alert('X Filter error '+cCheck);}}
	for (w=0;w<xindices.length;w++){try{cCheck = cCheck.replaceAt(xindices[w],'x');}catch(err){alert('x Filter error'+cCheck);}}
	if (cCheck == reqClass){return true;}else{return false;}
}

// t, u, v
function RequiredClassInSchedule(reqClass){for (t=0;t<Object.keys(schedule).length;t++){for (u=0;u<schedule[t].classes.length;u++){if (CompareClassAgainstSchedule(reqClass,schedule[t].classes[u])){return [true,t,u];}}}return [false];}

// t, u, v
function RequiredClassInCopySchedule(reqClass){for (t=0;t<scheduleCopy.length;t++){if (CompareClassAgainstSchedule(reqClass,scheduleCopy[t])){return [true,t];}}return [false];}

function ClassName(DictionaryClass){try { return ' - ' + classes[DictionaryClass].name;} catch(err){return '';}}

// l, m, n
function checkCourseNumber() {
	courseNameCheck = courseName.value.toLowerCase();
	if (courseNameCheck != courseName.defaultValue.toLowerCase() && courseNameCheck != '') {
		for (l=0;l<Object.keys(classes).length;l++){
			if (courseNameCheck == classes[Object.keys(classes)[l]].name.toLowerCase()) {courseNumberParagraph.innerHTML = "<greenText>The course number for \"" + classes[Object.keys(classes)[l]].name + "\" is " + Object.keys(classes)[l] + ".</greenText>";return;} 
			else if (courseNameCheck == classes[Object.keys(classes)[l]].name.substring(0,courseNameCheck.length).toLowerCase()) {courseNumberParagraph.innerHTML = "<yellowText>The course number for \"" + courseName.value + "\" might be " + Object.keys(classes)[l] + " - " + classes[Object.keys(classes)[l]].name + " - but we're not 100% sure. There may be other classes with a similar name. Check the FGCU catalog to be sure.</yellowText>";return;}
		}
		courseNumberParagraph.innerHTML = "<redText>Sorry, we're not sure which class that is. Unfortunately, our search method isn't as smart as Google. Can you check your transcript or the FGCU course catalog to make sure you've got the right class name?</redText>";
	} else { courseNumberParagraph.innerHTML = "<orangeText>Sorry, you haven't entered a class name yet.</orangeText>"}
}

function pullCourseInfo() {
	courseInfoCheck = courseDescriptionInput.value.toLowerCase();
	if (courseInfoCheck != courseDescriptionInput.defaultValue.toLowerCase() && courseInfoCheck != '') {
		for (l=0;l<Object.keys(classes).length;l++){
			if (courseInfoCheck == Object.keys(classes)[l].toLowerCase()) {courseDescriptionParagraph.innerHTML = "Information for " + Object.keys(classes)[l]+ " - " + classes[Object.keys(classes)[l]].name + " (" + classes[Object.keys(classes)[l]].credits + " credit(s))<br><tab1>" + classes[Object.keys(classes)[l]].description + "</tab1><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[l]].prereqs + "</tab1><br>";return;} 
			else {try {if (courseInfoCheck == Object.keys(classes)[l].substring(0,courseInfoCheck.length).toLowerCase()) {courseDescriptionParagraph.innerHTML = "<yellowText>We think this is the course you're looking for, but check the catalog to make sure you have the right class name or code.</yellowText><br><br>Information for " + Object.keys(classes)[l]+ " - " + classes[Object.keys(classes)[l]].name + " (" + classes[Object.keys(classes)[l]].credits + " credit(s))<br><tab1>" + classes[Object.keys(classes)[l]].description + "</tab1><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[l]].prereqs + "</tab1><br>";return;}} catch(err) {}}
			if (courseInfoCheck == classes[Object.keys(classes)[l]].name.toLowerCase()) {courseDescriptionParagraph.innerHTML = "Information for " + Object.keys(classes)[l]+ " - " + classes[Object.keys(classes)[l]].name + " (" + classes[Object.keys(classes)[l]].credits + " credit(s))<br><tab1>" + classes[Object.keys(classes)[l]].description + "</tab1><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[l]].prereqs + "</tab1><br>";return;} 
			else {try{if (courseInfoCheck == classes[Object.keys(classes)[l]].name.substring(0,courseInfoCheck.length).toLowerCase()) {courseDescriptionParagraph.innerHTML = "<yellowText>We think this is the course you're looking for, but check the catalog to make sure you have the right class name or code.</yellowText><br><br>Information for " + Object.keys(classes)[l]+ " - " + classes[Object.keys(classes)[l]].name + " (" + classes[Object.keys(classes)[l]].credits + " credit(s))<br><tab1>" + classes[Object.keys(classes)[l]].description + "</tab1><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[l]].prereqs + "</tab1><br>";return;}} catch(err) {}}
		}
	} else {courseDescriptionParagraph.innerHTML = "<orangeText>Please be sure to enter a course name for us to check.</orangeText><br>"}
	courseDescriptionParagraph.innerHTML = "<redText>Sorry, you may have entered an invalid course. Check the catalog to make sure you've got the right name or code for the class.</redText><br>";
}
// x, y
function SumTotalCredits(){creditsTotal = 0;for (x=0;x<Object.keys(schedule).length;x++){for(y=0;y<schedule[x].classes.length;y++){try{creditsTotal = creditsTotal+classes[schedule[x].classes[y]].credits;}catch(err){alert('Error in sumCredits for regular class - '+schedule[x].classes[y]);}}}return creditsTotal;}

// a, b, d, e, f
function VerifyPrereqs() {
	output = [];prereqsSat = 0;prereqsNone = 0;prereqsMissed = 0;
	output.push('\nPrerequisites Check for '+username.value+'\n\n<br><br>');
	output.push('The following is a summary of the prerequisites required based on the courses you have mapped out in your degree plan.\n\n<br> - Please be aware, the current version of this Course Road tool does not support corequisite courses. Accordingly, you should list corequisite courses in the semester(s) prior to the term you actually intend to take them, in order to receive credit for them.\n<br> - Prerequisites are assessed based on the classes you have listed in your degree plan. Details are given if desired about what the prerequisites are for future coursework as well.\n<br><br>');
	try{for (a=0;a<Object.keys(schedule).length;a++){
		for (b=0;b<schedule[a].classes.length;b++){
			if (classes[schedule[a].classes[b]].prereqs=='None'){
				try{output.push('\n<tab1><greenText>'+schedule[a].semester+' - '+schedule[a].classes[b]+ ' - '+classes[schedule[a].classes[b]].name+'\n - No prerequisite(s) are listed for this class.\n</greenText></tab1><br>');}catch(err){alert('Error adding no prereqs class');}
				try{if (!hidden && classes[schedule[a].classes[b]].prereqs != 'None'){output.push('<tab2><greenText> - The prerequisite(s) for this class are: '+classes[schedule[a].classes[b]].prereqs.replace(/\|/g,'')+'\n</greenText></tab2><br>');}}catch(err){alert('Error hiding no? prereqs');}
				prereqsNone++;
			} else {
				try{prereqCode = classes[schedule[a].classes[b]].prereqs.split('|');}catch(err){alert('Error setting up prereq Code');} errorOut = '';
				for (d=0;d<prereqCode.length;d++){
					pFound = false;
					for (e=0;e<Object.keys(schedule).length;e++){if (e < a){for (f=0;f<schedule[e].classes.length;f++){try{if (CompareClassAgainstSchedule(prereqCode[d],schedule[e].classes[f])){prereqCode[d] = 'true';pFound = true;}}catch(err){alert('error passing string to CompareClassAgainstSchedule');}}}}
					try{if (pFound === false && prereqCode[d].indexOf('\(')==-1 && prereqCode[d].indexOf('\)')==-1 && prereqCode[d].indexOf(' and ')==-1 && prereqCode[d].indexOf(' or ')==-1){errorOut = errorOut+prereqCode[d] + ', ';prereqCode[d] = 'false';}}catch(err){alert('Error in assessing false or missing prereqs');}
				}
				prereqCode = prereqCode.join('').replace(/and/g,'&&').replace(/or/g,'||');
				try{if (eval(prereqCode) === true){
					try{output.push('\n<tab1><greenText>'+schedule[a].semester+' - '+schedule[a].classes[b]+ ' - '+classes[schedule[a].classes[b]].name+'\n - Prerequisite(s) satisfied for enrollment in this term.\n</greenText></tab1><br>');}catch(err){alert('Error in adding satisfied prereqs line');}
					try{if (!hidden){ output.push('<tab2><greenText>- The prerequisite(s) for this class are: '+classes[schedule[a].classes[b]].prereqs.replace(/|/g,'')+'\n</greenText></tab2><br>');}}catch(err){alert('Error in displaying hidden prereqs for satisfied class');}
					prereqsSat++;
				} else{
					try{output.push('\n<tab1><redText>'+schedule[a].semester+' - '+schedule[a].classes[b]+ ' - '+classes[schedule[a].classes[b]].name+'\n - Prerequisite(s) are not satisfied, not eligible for enrollment in '+schedule[a].classes[b]+ ' in this term.\n</redText></tab1><br>'+'<tab2><redText>- Possible missing prerequisite(s) include '+errorOut.substr(0,errorOut.length-2)+'.\n</redText></tab2><br>');}catch(err){alert('Error in adding not satisfied prereqs line');}
					try{if (!hidden){ output.push('<tab2><redText>- The prerequisite(s) for this class are: '+classes[schedule[a].classes[b]].prereqs.replace(/|/g,'')+'\n</redText></tab2><br>');}}catch(err){alert('Error in displaying hidden prereqs for not satisfied class');}
					prereqsMissed++;
				}}catch(err){alert('Error in prereqCode eval');}
			}
		}
	}}catch(err){alert('Error in master loop');}
	output.push('\n<br>With your current degree plan, you have '+prereqsSat+' course(s) with satisfied prerequisite(s), '+prereqsNone+' course(s) without prerequisite(s) needed, and '+prereqsMissed+' course(s) with incomplete prerequisite(s).\n'+'<br>');
	return output.join('');
}

function GeneralEducationRequirements() {
	if (science) {
		try{
			generalEducationArray = ['General Education Program Requirements for '+username.value+'<br><br>Program requirements are for a Science major<br>'];
			ProcessSource(generalEducation['Science'],'Science',generalEducationArray,hidden);
			return generalEducationArray.join(' ');
		}catch(err){
			alert("Sorry, there's been a problem. Some of our code may be storing information about the general education program in the wrong format.");
		}
	} else {
		try{
			generalEducationArray = ['General Education Program Requirements for '+username.value+'<br><br>Program requirements are for a Non-Science major<br>'];
			ProcessSource(generalEducation['Non-Science'],'Non-Science',generalEducationArray,hidden);
			return generalEducationArray.join(' ');
		}catch(err){
			alert("Sorry, there's been a problem. Some of our code may be storing information about the general education program in the wrong format.");
		}
	}
}

function CheckMajor1Requirements(){
	if (major1.value == "Select a major") {
		return ["<yellowText>You haven't selected a major yet.</yellowText>"];
	}
	else {
		try{
			major1Array = ['Degree Requirements for '+username.value+'<br><br>Course requirements for a major in '+major1.value+'\n\n<br>'];
			ProcessSource(majors[major1.value],major1.value,major1Array,hidden);
			return major1Array.join(' ');
		}catch(err){
			alert("Sorry, there's been a problem. Some of our code may be storing information about your major in the wrong format.");
		}
	}
}

function CheckMajor2Requirements(){
	if (major1.value == "Select a major" && major2.value != "Select a double major") {return ["<yellowText>You must select a primary major before selecting a double major.</yellowText>"];}
	if (major2.value == "Select a double major") {return [""];} 
	else {try{major2Array = ['\nCourse requirements for a secondary major in '+major2.value+'\n\n'+'<br>'];ProcessSource(majors[major2.value],major2.value,major2Array,hidden);return major2Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your major in the wrong format.");}}
}

function CheckMinor1Requirements(){
	if (major1.value == "Select a major" && minor1.value != "Select a minor") {return ["<yellowText>You must select a primary major before adding a minor.</yellowText>"];} 
	if (minor1.value == "Select a minor") {return [""];} 
	else {try{minor1Array = ['Course requirements for the '+minor1.value+'<br>'];ProcessSource(minors[minor1.value],minor1.value,minor1Array,hidden);return minor1Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your minor in the wrong format.");}}
}

function CheckMinor2Requirements(){
	if (major1.value == "Select a major" && minor2.value != "Select a double minor") {return ["<yellowText>You must select a primary major and minor before adding a double minor.</yellowText>"];}
	if (minor1.value == "Select a minor" && minor2.value != "Select a double minor") {return ["<yellowText>You must select a primary minor before you can add a double minor.</yellowText>"];}
	if (minor2.value == "Select a double minor") {return [""];}
	else {try{minor2Array = ['Course requirements for the secondary '+minor2.value+'<br>'];ProcessSource(minors[minor2.value],minor2.value,minor2Array,hidden);return minor2Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your minor in the wrong format.");}}
}

function ProcessSource(source,sourceName,outputArray,hidden) {
	for (a=0;a<source.length;a++) {
		name = source[a].options[0];depth = source[a].options[1]-1;classReq = source[a].options[2];creditReq = source[a].options[3];repeatable = source[a].options[4];//tabDepth=depth-1
		try{if (name != 'null'){outputArray.push('<br><tab'+depth+'>'+name+'\n</tab'+depth+'><br>');}}catch(err){alert('Name issue in '+sourceName+' Section '+a+' Specific case '+source.options);}
		try{if (classReq === 0 && classReq != 'null'){outputArray.push('<tab'+depth+'>- Complete all of the following:\n</tab'+depth+'><br>');}}catch(err){alert('Class Req issue '+sourceName+' Section '+a+' Specific case '+source.options);}
		try{if (classReq > 0){outputArray.push('<tab'+depth+'>- Complete ' + classReq + ' of the following:\n</tab'+depth+'><br>');}}catch(err){alert('Class Req 2 issue '+sourceName+' Section '+a+' Specific case '+source.options);}
		try{if (creditReq > 0){outputArray.push('<tab'+depth+'>- Complete ' + creditReq + ' credit(s) from the following:\n</tab'+depth+'><br>');}}catch(err){alert('Credit Req issue '+sourceName+' Section '+a+' Specific case '+source.options);}
		classCount = 0;creditCount = 0;
		if (source[a].classes.length > 0){
			for (b=0;b<source[a].classes.length;b++){
				try{if (hidden && classReq > 0 && classCount >= classReq){break;}}catch(err){alert('Class count break issue '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
				try{if (hidden && creditReq > 0 && creditCount >= creditReq){break;}}catch(err){alert('Credit count break issue '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
				if (typeof(source[a].classes[b]) == 'string'){
					if (RequiredClassInCopySchedule(source[a].classes[b])[0]){
						res = RequiredClassInSchedule(source[a].classes[b]);
						try{outputArray.push('<tab'+depth+'><greenText>[X] '+source[a].classes[b]+ClassName(source[a].classes[b])+'\n</greenText></tab'+depth+'><br>');if (!repeatable) {scheduleCopy.splice(scheduleCopy.indexOf(source[a].classes[b]),1);}}catch(err){alert('Regular class, in schedule, insertion error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
						try{classCount++;creditCount += classes[schedule[res[1]].classes[res[2]]].credits;}catch(err){alert('Regular class, in schedule, count updates error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);alert(source[a].classes[b]);}
					}else{try{outputArray.push('<tab'+depth+'><yellowText>[ ] '+source[a].classes[b]+ClassName(source[a].classes[b])+'\n</yellowText></tab'+depth+'><br>');}catch(err){alert('Regular class, not in schedule, insertion error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}}
				}else{
					try{multiString = '<tab'+depth+'>[';listAdd = 0;listLen = source[a].classes[b].length;}catch(err){alert('Multi-string setup '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
					for (c=0;c<source[a].classes[b].length;c++){
						if (RequiredClassInCopySchedule(source[a].classes[b][c])[0]){
							resMulti = RequiredClassInSchedule(source[a].classes[b][c]);
							try{multiString += '<greenText>[X] '+source[a].classes[b][c]+' </greenText>';if (!repeatable) {scheduleCopy.splice(scheduleCopy.indexOf(source[a].classes[b][c]),1);}}catch(err){alert('Multistring class in schedule, insertion error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
							try{listAdd++;creditCount += classes[schedule[resMulti[1]].classes[resMulti[2]]].credits;}catch(err){alert('Multistring class in schedule, count updates error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);alert(source[a].classes[b]);}
						}else{try{multiString += '<yellowText>[ ] '+source[a].classes[b][c]+' </yellowText>';}catch(err){alert('Multistring class not in schedule, insertion error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}}
					}
					if (listAdd == listLen){ classCount++;}
					try{outputArray.push(multiString+']\n</tab'+depth+'><br>');}catch(err){alert('Multistring closure error '+sourceName+' Section '+a+' Class '+b+' Specific case '+source[a].options);}
				}
			}
		}
		try{if ((classReq === 0) && (classCount >= source[a].classes.length) && source[a].classes.length != 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if ((classReq > 0) && (classCount >= classReq) && source[a].classes.length != 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if ((creditReq > 0) && (creditCount >= creditReq) && source[a].classes.length != 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if (source[a].classes.length != 0 && (classReq !== null || creditReq !== null)){outputArray.push('<tab'+depth+'><orangeText>Section incomplete...\n</orangeText></tab'+depth+'><br>');}
		else{}}catch(err){alert('Section satisfying issue '+source[a].options+' '+sourceName+' Section '+a);}
	}
}