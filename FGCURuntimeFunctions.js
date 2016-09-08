function setupSchedule() {
	schedule = [];
	terms = {
		0:'Spring 2012',
		1:'Summer 2012',
		2:'Fall 2012',
		3:'Spring 2013',
		4:'Summer 2013',
		5:'Fall 2013',
		6:'Spring 2014',
		7:'Summer 2014',
		8:'Fall 2014',
		9:'Spring 2015',
		10:'Summer 2015',
		11:'Fall 2015',
		12:'Spring 2016',
		13:'Summer 2016',
		14:'Fall 2016',
		15:'Spring 2017',
		16:'Summer 2017',
		17:'Fall 2017',
		18:'Spring 2018',
		19:'Summer 2018',
		20:'Fall 2018',
		21:'Spring 2019',
		22:'Summer 2019',
		23:'Fall 2019',
		24:'Spring 2020'
	};
}
// a
function updateViews() {
	if(hiddenOption.value=='Hide extra classes'){hidden=true;}else{hidden=false;}if(scienceOption.value=='Science'){science=true;}else{science=false;}
	CopySchedule();generalEducationParagraph.innerHTML = GeneralEducationRequirements();major1Paragraph.innerHTML = CheckMajor1Requirements();major2Paragraph.innerHTML = CheckMajor2Requirements();minor1Paragraph.innerHTML = CheckMinor1Requirements();minor2Paragraph.innerHTML = CheckMinor2Requirements();
	try{for (a=0;a<divs.length;a++) {if (divs[a].children.length == 1) {divs[a].firstChild.setAttribute("class","hiddenTerm");} else {divs[a].firstChild.setAttribute("class","visibleTerm");divs[a].firstChild.innerHTML = terms[a]+' - '+SumSemesterCredits(a)+' credit(s)';}}}catch(err){alert('Error setting up semesters for schedule display');}
	try{lastFilled = -1;for (a=0;a<schedule.length;a++){if (schedule[a].term > lastFilled) {lastFilled=a;}}if (lastFilled== -1) {creditParagraph.innerHTML = '<br>With your current degree plan, you will have completed '+SumTotalCredits()+' credit(s) by the end of '+terms[Object.keys(terms).length-1]+'.This may include transfer credits that are are not \"counted\". Please verify your credits with the registrar.<br>';} else {creditParagraph.innerHTML = '<br>With your current degree plan, you will have completed '+SumTotalCredits()+' credit(s) by the end of '+terms[lastFilled]+'.This may include transfer credits that are are not \"counted\". Please verify your credits with the registrar.<br>';}}catch(err){alert('Error in summing total credits');}
}
String.prototype.replaceAt=function(index, character) {return this.substr(0, index) + character + this.substr(index+character.length);};
// b
function CopySchedule() {scheduleCopy = [];for (b=0;b<schedule.length;b++){scheduleCopy.push(schedule[b].number);}if (scheduleCopy.length === 0) {} else {return scheduleCopy;}}
// c
function inputFocus(c){if(c.value==c.defaultValue){ c.value=""; c.style.color="#000"; }}
function inputBlur(c){if(c.value===""){ c.value=c.defaultValue; c.style.color="#888"; }}
// d
window.onload = function() {
	major1 = document.getElementById("major1Dropdown");major2 = document.getElementById("major2Dropdown");minor1 = document.getElementById("minor1Dropdown");minor2 = document.getElementById("minor2Dropdown");
	semesterAdd = document.getElementById("semesterAdd");semesterRemove = document.getElementById("semesterRemove");classAdd = document.getElementById("classAdd");classRemove = document.getElementById("classRemove");
	hiddenOption = document.getElementById("hiddenDropdown");scienceOption = document.getElementById("scienceDropdown");creditParagraph = document.getElementById("creditOutput");
	courseDescriptionInput = document.getElementById("courseDescriptionInput");courseDescriptionParagraph = document.getElementById("courseDescriptionOutput");
	major1Paragraph = document.getElementById("major1Output");major2Paragraph = document.getElementById("major2Output");minor1Paragraph = document.getElementById("minor1Output");minor2Paragraph = document.getElementById("minor2Output");generalEducationParagraph = document.getElementById("generalEducationOutput");
	divHolder = document.getElementById("scheduleDisplay");
	term_0 = document.getElementById("0_term");term_1 = document.getElementById("1_term");term_2 = document.getElementById("2_term");term_3 = document.getElementById("3_term");
	term_4 = document.getElementById("4_term");term_5 = document.getElementById("5_term");term_6 = document.getElementById("6_term");term_7 = document.getElementById("7_term");
	term_8 = document.getElementById("8_term");term_9 = document.getElementById("9_term");term_10 = document.getElementById("10_term");term_11 = document.getElementById("11_term");
	term_12 = document.getElementById("12_term");term_13 = document.getElementById("13_term");term_14 = document.getElementById("14_term");term_15 = document.getElementById("15_term");
	term_16 = document.getElementById("16_term");term_17 = document.getElementById("17_term");term_18 = document.getElementById("18_term");term_19 = document.getElementById("19_term");
	term_20 = document.getElementById("20_term");term_21 = document.getElementById("21_term");term_22 = document.getElementById("22_term");term_23 = document.getElementById("23_term");term_24 = document.getElementById("24_term");
	divs = divHolder.getElementsByTagName('div');
    setupSchedule();CopySchedule();
    for (d=0;d<Object.keys(terms).length;d++){addEntry = document.createElement("option");addEntry.text = terms[d];semesterAdd.add(addEntry,null);removeEntry = document.createElement("option");removeEntry.text = terms[d];semesterRemove.add(removeEntry,null);}
    major1Select = document.createElement("option");major1Select.text = "Select a major";major1.add(major1Select,null);major2Select = document.createElement("option");major2Select.text = "Select a double major";major2.add(major2Select,null);minor1Select = document.createElement("option");minor1Select.text = "Select a minor";minor1.add(minor1Select,null);minor2Select = document.createElement("option");minor2Select.text = "Select a double minor";minor2.add(minor2Select,null);
    for (d=0;d<Object.keys(majors).length;d++){major1Entry = document.createElement("option");major1Entry.text = Object.keys(majors)[d];major1.add(major1Entry,null);major2Entry = document.createElement("option");major2Entry.text = Object.keys(majors)[d];major2.add(major2Entry,null);}
    for (d=0;d<Object.keys(minors).length;d++){minor1Entry = document.createElement('option');minor1Entry.text = Object.keys(minors)[d];minor1.add(minor1Entry,null);minor2Entry = document.createElement('option');minor2Entry.text = Object.keys(minors)[d];minor2.add(minor2Entry,null);}
};
var ClassInSchedule = function (term,number,name,credits,repeats,description,prereqStatus,prereqs,missingPrereqs) {this.term = term;this.number = number;this.name = name;this.credits = credits;this.repeats = repeats;this.description = description;this.prereqStatus = prereqStatus;this.prereqs = prereqs;this.missingPrereqs = missingPrereqs;};
//e
function displaySchedule() {
	for (e=0;e<divs.length;e++) {while (divs[e].firstChild) {divs[e].removeChild(divs[e].firstChild);}lab = document.createElement("label");lab.setAttribute("class","hiddenTerm");lab.innerHTML=terms[e];divs[e].appendChild(lab);}
	for (e=0;e<schedule.length;e++) {schedule[e].prereqStatus = prereqStatusF(schedule[e].number,schedule[e].term)[0];schedule[e].missingPrereqs = prereqStatusF(schedule[e].number,schedule[e].term)[1];element = document.createElement("button");element.setAttribute('class','specialButton');element.id = schedule[e].number.replace(' ','_')+'_'+schedule[e].term+'_'+schedule[e].repeats;element.innerHTML = schedule[e].number;element.setAttribute("onclick","displayClassInfo(this.id);");element.style.backgroundColor=schedule[e].prereqStatus;eval("term_"+schedule[e].term).appendChild(element);}
	for (e=0;e<divs.length;e++) {if (divs[e].children.length == 1) {divs[e].firstChild.setAttribute("class","hiddenTerm");} else {divs[e].firstChild.setAttribute("class","visibleTerm");divs[e].firstChild.innerHTML = terms[e]+' - '+SumSemesterCredits(e)+' credit(s)';}}
}
// f
function CompareClassAgainstSchedule(reqClass,scheduleClass){
	Xindices = [];xindices = [];cCheck = scheduleClass;
	for (f=0;f<reqClass.length;f++){if (reqClass[f]=='X'){Xindices.push(f);}}
	for (f=0;f<reqClass.length;f++){if (reqClass[f]=='x'){xindices.push(f);}}
	for (f=0;f<Xindices.length;f++){try{cCheck = cCheck.replaceAt(Xindices[f],'X');}catch(err){alert('X Filter error '+cCheck);}}
	for (f=0;f<xindices.length;f++){try{cCheck = cCheck.replaceAt(xindices[f],'x');}catch(err){alert('x Filter error'+cCheck);}}
	if (cCheck == reqClass){return true;}else{return false;}
}
//g
function displayClassInfo(InputID) {InputID = InputID.split('_');number = InputID[0]+' '+InputID[1];term = InputID[2];repeats = InputID[3];for (g=0;g<schedule.length;g++){if (schedule[g].number == number && schedule[g].term == term && schedule[g].repeats == repeats) {courseDescriptionParagraph.innerHTML = terms[schedule[g].term]+' - '+schedule[g].number+' - '+schedule[g].name+' - '+schedule[g].credits+' credit(s)<br><br><tab1>'+schedule[g].description+'</tab1><br><br>'+schedule[g].missingPrereqs+'<br><br>'+schedule[g].prereqs;break;}}}
//h
function repeatsF(classNumber) {repeats = 0;if (schedule.length > 0){for (h=0;h<schedule.length;h++) {if (schedule[h].number == classNumber) {repeats++;}}}return repeats;}
//i j
function prereqStatusF(classNumber,classTerm) {
	if (classes[classNumber].prereqs=='None'){return ['lightgreen','You are not missing any prerequisite(s) for this class.','No prerequisite(s) are listed for this class.'];			
	} else {
		try{prereqCode = classes[classNumber].prereqs.split('|');}catch(err){alert('Error setting up prereq Code');} errorOut = '';
		for (i=0;i<prereqCode.length;i++){pFound = false;for (j=0;j<schedule.length;j++){if (schedule[j].term < classTerm){try{if (CompareClassAgainstSchedule(prereqCode[i],schedule[j].number)){prereqCode[i] = 'true';pFound = true;}}catch(err){alert('Error passing string to CompareClassAgainstSchedule');}}}try{if (pFound === false && prereqCode[i].indexOf('\(')==-1 && prereqCode[i].indexOf('\)')==-1 && prereqCode[i].indexOf(' and ')==-1 && prereqCode[i].indexOf(' or ')==-1){errorOut = errorOut+prereqCode[i] + ', ';prereqCode[i] = 'false';}}catch(err){alert('Error in assessing false or missing prereqs');}}
		prereqCode = prereqCode.join('').replace(/and/g,'&&').replace(/or/g,'||');
		try{if (eval(prereqCode) === true){return ['lightgreen','You are not missing any prerequisite(s) for this class.','The prerequisite(s) for this class are: '+classes[classNumber].prereqs.replace(/|/g,'')];} else{return ['tomato','Possible missing prerequisite(s) include '+errorOut.substr(0,errorOut.length-2),'The prerequisite(s) for this class are: '+classes[classNumber].prereqs.replace(/|/g,'')];}}catch(err){alert('Error in prereqCode eval');}
	}
}
function skipTo(checkValue) {aIndex = 0;bIndex = 251;cIndex = 323;dIndex = 538;eIndex = 553;fIndex = 983;gIndex = 1023;hIndex = 1097;iIndex = 1282;jIndex = 1382;kIndex = 2651;lIndex = 1390;mIndex = 1475;nIndex = 1847;oIndex = 1969;pIndex = 2014;qIndex = 2300;rIndex = 2305;sIndex = 2341;tIndex = 2566;uIndex = 2634;vIndex = 2637;wIndex = 2638;xIndex = 2651;yIndex = 2651;zIndex = 2651;return eval(checkValue.substring(0,1).toLowerCase()+"Index");}
// k
function addClass(){classFound = false;classAddCheck = classAdd.value.toLowerCase();if (classAddCheck != classAdd.defaultValue.toLowerCase()) {for (k=skipTo(classAddCheck);k<Object.keys(classes).length;k++){if (classAddCheck == Object.keys(classes)[k].toLowerCase()) {classFound=true;schedule.push(new ClassInSchedule(semesterAdd.selectedIndex,Object.keys(classes)[k],classes[Object.keys(classes)[k]].name,classes[Object.keys(classes)[k]].credits,repeatsF(Object.keys(classes)[k]),classes[Object.keys(classes)[k]].description,prereqStatusF(Object.keys(classes)[k],semesterAdd.selectedIndex)[0],classes[Object.keys(classes)[k]].prereqs,prereqStatusF(Object.keys(classes)[k],semesterAdd.selectedIndex)[1]));courseDescriptionParagraph.innerHTML="";break;}}if (!classFound) { courseDescriptionParagraph.innerHTML = '<redText>Please be sure to enter a valid class to add.</redText>';}}else { courseDescriptionParagraph.innerHTML = '<redText>Please be sure to enter a valid class to add.</redText>';}displaySchedule();updateViews(); }
//l
function removeClass() {classFound = false;classRemoveCheck = classRemove.value.toLowerCase();if (schedule.length === 0) {courseDescriptionParagraph.innerHTML = '<redText>You dont have any classes in your schedule yet to remove.</redText>';} else {if (classRemoveCheck != classRemove.defaultValue.toLowerCase()) {for (l=0;l<schedule.length;l++) {if (classRemoveCheck == schedule[l].number.toLowerCase() && semesterRemove.selectedIndex == schedule[l].term) {classFound = true;schedule.splice(l,1);courseDescriptionParagraph.innerHTML="";break;}}if (classFound) {for (l=0;l<schedule.length;l++) {if (schedule[l].number.toLowerCase() == classRemoveCheck && schedule[l].repeats > 0) {schedule[l].repeats--;}}} else { courseDescriptionParagraph.innerHTML = '<redText>Please be sure to enter a valid class in your schedule and the semester to remove it from.</redText>';}}}displaySchedule();updateViews();}
// m,n
function SumSemesterCredits(m){creditsTotal = 0;try{for (n=0;n<schedule.length;n++){if (schedule[n].term == m){creditsTotal+=schedule[n].credits;}}}catch(err){alert('Bad credit data for class');}return creditsTotal;}
//o
function SumTotalCredits(){creditsTotal = 0;for (o=0;o<schedule.length;o++){try{creditsTotal = creditsTotal+classes[schedule[o].number].credits;}catch(err){alert('Error in SumTotalCredits for regular class - '+schedule[o].number);}}return creditsTotal;}
//p
function pullCourseInfo() {
	courseInfoCheck = courseDescriptionInput.value.toLowerCase();
	if (courseInfoCheck !== courseDescriptionInput.defaultValue.toLowerCase() && courseInfoCheck !== '') {
		for (p=0;p<Object.keys(classes).length;p++){
			if (courseInfoCheck == Object.keys(classes)[p].toLowerCase()) {courseDescriptionParagraph.innerHTML = "Information for " + Object.keys(classes)[p]+ " - " + classes[Object.keys(classes)[p]].name + " (" + classes[Object.keys(classes)[p]].credits + " credit(s))<br><br><tab1>" + classes[Object.keys(classes)[p]].description + "</tab1><br><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[p]].prereqs + "</tab1><br>";return;} else {try {if (courseInfoCheck == Object.keys(classes)[p].substring(0,courseInfoCheck.length).toLowerCase()) {courseDescriptionParagraph.innerHTML = "<redText>We think this is the course you're looking for, but check the catalog to make sure you have the right class name or course number.</redText><br><br>Information for " + Object.keys(classes)[p]+ " - " + classes[Object.keys(classes)[p]].name + " (" + classes[Object.keys(classes)[p]].credits + " credit(s))<br><br><tab1>" + classes[Object.keys(classes)[p]].description + "</tab1><br><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[p]].prereqs + "</tab1><br>";return;}} catch(err) {}}
			if (courseInfoCheck == classes[Object.keys(classes)[p]].name.toLowerCase()) {courseDescriptionParagraph.innerHTML = "Information for " + Object.keys(classes)[p]+ " - " + classes[Object.keys(classes)[p]].name + " (" + classes[Object.keys(classes)[p]].credits + " credit(s))<br><br><tab1>" + classes[Object.keys(classes)[p]].description + "</tab1><br><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[p]].prereqs + "</tab1><br>";return;} else {try{if (courseInfoCheck == classes[Object.keys(classes)[p]].name.substring(0,courseInfoCheck.length).toLowerCase()) {courseDescriptionParagraph.innerHTML = "<redText>We think this is the course you're looking for, but check the catalog to make sure you have the right class name or course number.</redText><br><br>Information for " + Object.keys(classes)[p]+ " - " + classes[Object.keys(classes)[p]].name + " (" + classes[Object.keys(classes)[p]].credits + " credit(s))<br><br><tab1>" + classes[Object.keys(classes)[p]].description + "</tab1><br><br><tab1>The prerequisites for this class are: " + classes[Object.keys(classes)[p]].prereqs + "</tab1><br>";return;}} catch(err) {}}
		}
	} else {courseDescriptionParagraph.innerHTML = "<redText>Please be sure to enter a course name for us to check.</redText><br>";}
	courseDescriptionParagraph.innerHTML = "<redText>Sorry, you may have entered an invalid course or not typed in a value. Check the catalog to make sure you've got the right class name or course number for the class.</redText><br>";
}
// q
function RequiredClassInSchedule(reqClass){for (q=0;q<schedule.length;q++){if (CompareClassAgainstSchedule(reqClass,schedule[q].number)){return [true,q];}}return [false];}
// r
function RequiredClassInCopySchedule(reqClass){for (r=0;r<scheduleCopy.length;r++){if (CompareClassAgainstSchedule(reqClass,scheduleCopy[r])){return [true,r];}}return [false];}
function ClassName(testClass){try{return ' - ' + classes[testClass].name;}catch(err){return '';}}
function GeneralEducationRequirements() {if (science) {try{generalEducationArray = ['General Education Program Requirements for a Science major<br>'];ProcessSource(generalEducation.Science,'Science',generalEducationArray,hidden);return generalEducationArray.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about the general education program in the wrong format.");}} else {try{generalEducationArray = ['General Education Program Requirements for a Non-Science major<br>'];ProcessSource(generalEducation['Non-Science'],'Non-Science',generalEducationArray,hidden);return generalEducationArray.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about the general education program in the wrong format.");}}}
function CheckMajor1Requirements(){if (major1.value == "Select a major") {return ["<redText>You haven't selected a major yet.</redText>"];}else {try{major1Array = ['Degree Requirements<br><br>Course requirements for a major in '+major1.value+'<br>'];ProcessSource(majors[major1.value],major1.value,major1Array,hidden);return major1Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your major in the wrong format.");}}}
function CheckMajor2Requirements(){if (major1.value == "Select a major" && major2.value != "Select a double major") {return ["<redText>You must select a primary major before selecting a double major.</redText>"];}if (major2.value == "Select a double major") {return [""];} else {try{major2Array = ['Course requirements for a secondary major in '+major2.value+'<br>'];ProcessSource(majors[major2.value],major2.value,major2Array,hidden);return major2Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your major in the wrong format.");}}}
function CheckMinor1Requirements(){if (major1.value == "Select a major" && minor1.value != "Select a minor") {return ["<redText>You must select a primary major before adding a minor.</redText>"];} if (minor1.value == "Select a minor") {return [""];} else {try{minor1Array = ['Course requirements for the '+minor1.value+'<br>'];ProcessSource(minors[minor1.value],minor1.value,minor1Array,hidden);return minor1Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your minor in the wrong format.");}}}
function CheckMinor2Requirements(){if (major1.value == "Select a major" && minor2.value != "Select a double minor") {return ["<redText>You must select a primary major and minor before adding a double minor.</redText>"];}if (minor1.value == "Select a minor" && minor2.value != "Select a double minor") {return ["<redText>You must select a primary minor before you can add a double minor.</redText>"];}if (minor2.value == "Select a double minor") {return [""];}else {try{minor2Array = ['Course requirements for the secondary '+minor2.value+'<br>'];ProcessSource(minors[minor2.value],minor2.value,minor2Array,hidden);return minor2Array.join(' ');}catch(err){alert("Sorry, there's been a problem. Some of our code may be storing information about your minor in the wrong format.");}}}
//s t u
function ProcessSource(source,sourceName,outputArray,hidden) {
	for (s=0;s<source.length;s++) {
		name = source[s].options[0];depth = source[s].options[1]-1;classReq = source[s].options[2];creditReq = source[s].options[3];repeatable = source[s].options[4];
		try{if (name != 'null'){outputArray.push('<br><tab'+depth+'>'+name+'\n</tab'+depth+'><br>');}}catch(err){alert('Name issue in '+sourceName+' Section '+s+' Specific case '+source.options);}
		try{if (classReq === 0 && classReq != 'null'){outputArray.push('<tab'+depth+'>- Complete all of the following:\n</tab'+depth+'><br>');}}catch(err){alert('Class Req issue '+sourceName+' Section '+s+' Specific case '+source.options);}
		try{if (classReq > 0){outputArray.push('<tab'+depth+'>- Complete ' + classReq + ' of the following:\n</tab'+depth+'><br>');}}catch(err){alert('Class Req 2 issue '+sourceName+' Section '+s+' Specific case '+source.options);}
		try{if (creditReq > 0){outputArray.push('<tab'+depth+'>- Complete ' + creditReq + ' credit(s) from the following:\n</tab'+depth+'><br>');}}catch(err){alert('Credit Req issue '+sourceName+' Section '+s+' Specific case '+source.options);}
		classCount = 0;creditCount = 0;
		if (source[s].classes.length > 0){
			for (t=0;t<source[s].classes.length;t++){
				try{if (hidden && classReq > 0 && classCount >= classReq){break;}}catch(err){alert('Class count break issue '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
				try{if (hidden && creditReq > 0 && creditCount >= creditReq){break;}}catch(err){alert('Credit count break issue '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
				if (typeof(source[s].classes[t]) == 'string'){
					if (RequiredClassInCopySchedule(source[s].classes[t])[0]){
						res = RequiredClassInSchedule(source[s].classes[t]);
						try{outputArray.push('<tab'+depth+'><greenText>[X] '+source[s].classes[t]+ClassName(source[s].classes[t])+'\n</greenText></tab'+depth+'><br>');if (!repeatable) {scheduleCopy.splice(scheduleCopy.indexOf(source[s].classes[t]),1);}}catch(err){alert('Regular class, in schedule, insertion error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
						try{classCount++;creditCount += classes[schedule[res[1]].number].credits;}catch(err){alert('Regular class, in schedule, count updates error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);alert(source[s].classes[t]);}
					}else{try{outputArray.push('<tab'+depth+'>[ ] '+source[s].classes[t]+ClassName(source[s].classes[t])+'\n</tab'+depth+'><br>');}catch(err){alert('Regular class, not in schedule, insertion error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}}
				}else{
					try{multiString = '<tab'+depth+'>[';listAdd = 0;listLen = source[s].classes[t].length;}catch(err){alert('Multi-string setup '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
					for (u=0;u<source[s].classes[t].length;u++){
						if (RequiredClassInCopySchedule(source[s].classes[t][u])[0]){
							resMulti = RequiredClassInSchedule(source[s].classes[t][u]);
							try{multiString += '<greenText>[X] '+source[s].classes[t][u]+' </greenText>';if (!repeatable) {scheduleCopy.splice(scheduleCopy.indexOf(source[s].classes[t][u]),1);}}catch(err){alert('Multistring class in schedule, insertion error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
							try{listAdd++;creditCount += classes[schedule[resMulti[1]].number].credits;}catch(err){alert('Multistring class in schedule, count updates error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);alert(source[s].classes[t]);}
						}else{try{multiString += '[ ] '+source[s].classes[t][u]+' ';}catch(err){alert('Multistring class not in schedule, insertion error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}}
					}
					if (listAdd == listLen){ classCount++;}
					try{outputArray.push(multiString+']</tab'+depth+'><br>');}catch(err){alert('Multistring closure error '+sourceName+' Section '+s+' Class '+t+' Specific case '+source[s].options);}
				}
			}
		}
		try{if ((classReq === 0) && (classCount >= source[s].classes.length) && source[s].classes.length !== 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if ((classReq > 0) && (classCount >= classReq) && source[s].classes.length !== 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if ((creditReq > 0) && (creditCount >= creditReq) && source[s].classes.length !== 0){outputArray.push('<tab'+depth+'><greenText>Section satisfied!\n</greenText></tab'+depth+'><br>');}
		else if (source[s].classes.length !== 0 && (classReq !== null || creditReq !== null)){outputArray.push('<tab'+depth+'><redText>Section incomplete...\n</redText></tab'+depth+'><br>');}
		else{}}catch(err){alert('Section satisfying issue '+source[s].options+' '+sourceName+' Section '+s);}
	}
}