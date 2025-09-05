// 学生信息管理系统

// 存储学生信息的数组
let students = [];

/**
 * 添加学生信息
 * @param {string} name - 学生姓名
 * @param {string} id - 学号
 * @param {number} age - 年龄
 * @param {string} major - 专业
 * @returns {object} 添加的学生信息对象
 */
function addStudent(name, id, age, major) {
    // 检查参数是否有效
    if (!name || !id || !age || !major) {
        throw new Error('请填写完整的学生信息');
    }

    // 检查学号是否已存在
    const existingStudent = students.find(student => student.id === id);
    if (existingStudent) {
        throw new Error(`学号 ${id} 已存在`);
    }

    // 检查年龄是否为有效数字
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum <= 0) {
        throw new Error('请输入有效的年龄');
    }

    // 创建新学生对象
    const newStudent = {
        name: name,
        id: id,
        age: ageNum,
        major: major
    };

    // 添加到数组
    students.push(newStudent);

    console.log(`成功添加学生：${name}（学号：${id}）`);
    return newStudent;
}

/**
 * 根据学号查询学生信息
 * （待其他组员实现）
 */
function queryStudentById(id) {
    // 实现思路：使用数组的find方法根据id查找学生
    // 找到返回学生对象，未找到返回null或抛出异常
    console.log('查询功能待实现');
}

/**
 * 根据学号修改学生信息（年龄和专业）
 * （待其他组员实现）
 */
function updateStudentById(id, newAge, newMajor) {
    // 实现思路：先找到对应id的学生，然后更新其age和major属性
    // 更新成功返回更新后的学生对象，未找到返回null或抛出异常
    console.log('修改功能待实现');
}

/**
 * 根据学号删除学生信息
 * （待其他组员实现）
 */
function deleteStudentById(id) {
    // 实现思路：使用数组的filter方法或splice方法删除对应id的学生
    // 删除成功返回被删除的学生对象，未找到返回null或抛出异常
    console.log('删除功能待实现');
}

/**
 * 显示所有学生信息
 * （辅助功能）
 */
function displayAllStudents() {
    if (students.length === 0) {
        console.log('当前没有学生信息');
        return;
    }

    console.log('\n所有学生信息：');
    console.log('----------------------------------------------------');
    console.log('学号\t\t姓名\t\t年龄\t\t专业');
    console.log('----------------------------------------------------');

    students.forEach(student => {
        console.log(`${student.id}\t\t${student.name}\t\t${student.age}\t\t${student.major}`);
    });

    console.log('----------------------------------------------------\n');
}

// 导出所有函数，供其他文件使用
module.exports = {
    addStudent,
    queryStudentById,
    updateStudentById,
    deleteStudentById,
    displayAllStudents,
    students
};

// 示例用法（仅用于测试）
if (require.main === module) {
    try {
        // 测试添加功能
        addStudent('张三', '20230001', 20, '计算机科学');
        addStudent('李四', '20230002', 21, '软件工程');

        // 显示所有学生
        displayAllStudents();

        // 这里可以测试其他功能
        // queryStudentById('20230001');
        // updateStudentById('20230001', 22, '人工智能');
        // deleteStudentById('20230002');

    } catch (error) {
        console.error('错误:', error.message);
    }
}