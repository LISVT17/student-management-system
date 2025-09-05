/**
 * 根据学号查询学生
 * @param {string} id - 学生学号
 * @returns {Object|null} 找到的学生对象或null
 */
function getStudentById(id) {
  const student = students.find(s => s.id === id);
  if (!student) {
    console.log('未找到该学生');
    return null;
  }
  return student;
}