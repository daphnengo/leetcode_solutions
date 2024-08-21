// **  Instructions:
// **
// **  Given a list of student test scores, find the best average grade.
// **  Each student may have more than one test score in the list.
// **
// **  Complete the bestAverageGrade function in the editor below.
// **  It has one parameter, scores, which is an array of student test scores.
// **  Each element in the array is a two-element array of the form [student name, test score]
// **  e.g. [ "Bobby", "87" ].
// **  Test scores may be positive or negative integers.
// **
// **  If you end up with an average grade that is not an integer, you should
// **  use a floor function to return the largest integer less than or equal to the average.
// **  Return 0 for an empty input.
// **
// **  Example:
// **
// **  Input:
// **  [["Bobby", "87"],
// **   ["Charles", "100"],
// **   ["Eric", "64"],
// **   ["Charles", "22"]].
// **
// **  Expected output: 87
// **  Explanation: The average scores are 87, 61, and 64 for Bobby, Charles, and Eric,
// **  respectively. 87 is the highest.

const bestAverageGrade = scores => {
  // Return 0 for an empty input.
  if (!scores.length) {
    console.log(0);
    return 0;
  }

  // {
  //    student1: [score1, score2],
  //    student2: [score1, score2],
  // }
  const studentListMap = {};

  scores.forEach(group => {
    const student = group[0];
    const score = group[1];

    if(Object.hasOwn(studentListMap, student)) {
      studentListMap[student].push(score);
    } else {
      studentListMap[student] = [score];
    }
  });

  // { Bobby: [ '87' ], Charles: [ '100', '22' ], Eric: [ '64' ] }
  console.log(studentListMap);

  let bestAvgGrade = 0;
  Object.values(studentListMap).forEach(gradeListArr => {
    let sum = 0;
    const gradeListArrLength = gradeListArr.length;

    for (let i = 0; i < gradeListArrLength; i++) {
      sum += parseInt(gradeListArr[i], 10);
    }

    const avgGrade = Math.floor(sum/gradeListArrLength);
    bestAvgGrade = Math.max(bestAvgGrade, avgGrade);
  });

  // 87
  console.log(bestAvgGrade);
  return bestAvgGrade;
};

const input = [
  ["Bobby", "87"],
  ["Charles", "100"],
  ["Eric", "64"],
  ["Charles", "22"],
];

bestAverageGrade(input);
