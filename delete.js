/**
 * 根据学号删除学生
 * @param {string} id - 学生学号
 * @returns {boolean} 删除成功返回true，失败返回false
 */
function deleteStudentById(id) {
  const index = students.findIndex(s => s.id === id);
  if (index === -1) {
    console.log('未找到该学生');
    return false;
  }

  students.splice(index, 1);
  console.log('删除成功');
  return true;
}

