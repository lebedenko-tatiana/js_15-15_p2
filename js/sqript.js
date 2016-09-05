$(function () {


  function Human(fName, fAge, fSex, fHeight, fWeight) {
    this.name =  fName, 
    this.age = fAge, 
    this.sex = fSex
    this.height = fHeight, 
    this.weight =  fWeight
  };

  function Worker(fWorkplace, fSalary) {
    this.workplace = fWorkplace, 
    this.salary = fSalary, 
    this.working = function() {
      console.log(' ');
      console.log('Information about worker ', this.name);
    }
  };

  function Student(fStudyplace, fGrants, fWatchTVseries) {
    this.studyplace = fStudyplace, 
    this.grants = fGrants, 
    this.watchTVseries = function() { 
      console.log(' ');
      console.log('Information about student ', this.name);
      console.log('favorite TVseries ', fWatchTVseries);
    }
  }



  Worker.prototype = new Human('John', 25, 'Male', 180, 85);

  var newWorkerJohn = new Worker();
  newWorkerJohn.working();
  console.log('worker John ', newWorkerJohn.name);
  console.log('worker John age: ', newWorkerJohn.age);
  console.log('worker John sex: ', newWorkerJohn.sex);
  console.log('worker John height: ', newWorkerJohn.height);
  console.log('worker John weight: ', newWorkerJohn.weight);
  console.log('worker John workplace: ', newWorkerJohn.workplace);
  console.log('worker John salary: ', newWorkerJohn.salary);
  
  newWorkerJohn = new Worker('factory', 10000);
  newWorkerJohn.working();
  console.log('worker John ', newWorkerJohn.name);
  console.log('worker John age: ', newWorkerJohn.age);
  console.log('worker John sex: ', newWorkerJohn.sex);
  console.log('worker John height: ', newWorkerJohn.height);
  console.log('worker John weight: ', newWorkerJohn.weight);
  console.log('worker John workplace: ', newWorkerJohn.workplace);
  console.log('worker John salary: ', newWorkerJohn.salary);


  Worker.prototype = new Human('Tom', 30, 'Male', 180, 100);
  newWorkerTom = new Worker('garden', 5000);
  newWorkerTom.working();
  console.log('worker Tom ', newWorkerTom.name);
  console.log('worker Tom age: ', newWorkerTom.age);
  console.log('worker Tom sex: ', newWorkerTom.sex);
  console.log('worker Tom height: ', newWorkerTom.height);
  console.log('worker Tom weight: ', newWorkerTom.weight);
  console.log('worker Tom workplace: ', newWorkerTom.workplace);
  console.log('worker Tom salary: ', newWorkerTom.salary);


  Student.prototype = new Human('Alisa', 18, 'Female', 168, 55);
  newStudentAlisa = new Student('Eton College', 1000, '"Suits"');
  newStudentAlisa.watchTVseries();
  console.log('student Alisa ', newStudentAlisa.name);
  console.log('student Alisa age: ', newStudentAlisa.age);
  console.log('student Alisa sex: ', newStudentAlisa.sex);
  console.log('student Alisa height: ', newStudentAlisa.height);
  console.log('student Alisa weight: ', newStudentAlisa.weight);
  console.log('student Alisa studyplace: ', newStudentAlisa.studyplace);
  console.log('student Alisa grants: ', newStudentAlisa.grants);


});

