import  "ramda";
function averageGradesOver60(grades: number[]) {
    let newGrades: number[] = grades.filter(x=> x>=60);
    let sum: number = newGrades.reduce((acc:number,cur:number):number =>acc+cur,0);
    return sum/newGrades.length;

}

console.log("DDD");
console.log(averageGradesOver60([45,68]));