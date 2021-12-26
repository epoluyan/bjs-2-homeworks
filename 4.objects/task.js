function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  this.marks === undefined ? this.marks = [mark]  : this.marks.push(mark);
}

Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = [];
    mark.forEach(element => this.marks.push(element));

  } else {
    mark.forEach(element => this.marks.push(element));
  }
}

Student.prototype.getAverage = function () {
  const sum = (previousValue, currentValue) => previousValue + currentValue;
  return this.marks.reduce(sum) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
