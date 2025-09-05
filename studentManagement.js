const readline = require('readline');

// 学生信息存储数组
let students = [];

// 创建readline接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '学生管理系统> '
});

/**
 * 添加学生信息
 * @param {Object} student - 学生信息对象
 * @returns {boolean} 添加成功返回true，失败返回false
 */
function addStudent(student) {
  // 验证学生信息是否完整
  if (!student.id || !student.name || !student.age || !student.major) {
    console.log('错误：学生信息不完整，请提供学号、姓名、年龄和专业');
    return false;
  }

  // 验证学号是否已存在
  const existingStudent = students.find(s => s.id === student.id);
  if (existingStudent) {
    console.log('错误：学号已存在');
    return false;
  }

  // 验证年龄是否为数字
  if (isNaN(student.age)) {
    console.log('错误：年龄必须是数字');
    return false;
  }

  students.push(student);
  console.log('添加成功');
  return true;
}

/**
 * 根据学号查询学生
 * @param {string} id - 学生学号
 * @returns {Object|null} 找到的学生对象或null
 */


/**
 * 根据学号更新学生信息
 * @param {string} id - 学生学号
 * @param {Object} updates - 要更新的信息（age和/或major）
 * @returns {boolean} 更新成功返回true，失败返回false
 */

/**
 * 根据学号删除学生
 * @param {string} id - 学生学号
 * @returns {boolean} 删除成功返回true，失败返回false
 */

/**
 * 显示学生信息
 * @param {Object} student - 学生对象
 */
function displayStudent(student) {
  console.log('\n----- 学生信息 -----');
  console.log(`学号: ${student.id}`);
  console.log(`姓名: ${student.name}`);
  console.log(`年龄: ${student.age}`);
  console.log(`专业: ${student.major}`);
  console.log('-------------------\n');
}

/**
 * 显示主菜单
 */
function showMenu() {
  console.log('\n学生信息管理系统');
  console.log('1. 添加学生');
  console.log('2. 查询学生');
  console.log('3. 修改学生');
  console.log('4. 删除学生');
  console.log('5. 退出系统');
  rl.prompt();
}

/**
 * 处理用户输入
 * @param {string} input - 用户输入
 */
function handleInput(input) {
  const choice = input.trim();

  switch (choice) {
    case '1':
      // 添加学生
      rl.question('请输入学号: ', id => {
        rl.question('请输入姓名: ', name => {
          rl.question('请输入年龄: ', age => {
            rl.question('请输入专业: ', major => {
              addStudent({ id, name, age: parseInt(age), major });
              showMenu();
            });
          });
        });
      });
      break;

    case '2':
      // 查询学生
      rl.question('请输入要查询的学号: ', id => {
        const student = getStudentById(id);
        if (student) {
          displayStudent(student);
        }
        showMenu();
      });
      break;

    case '3':
      // 修改学生
      rl.question('请输入要修改的学号: ', id => {
        const student = getStudentById(id);
        if (student) {
          displayStudent(student);
          rl.question('请输入新年龄(不修改按回车): ', age => {
            rl.question('请输入新专业(不修改按回车): ', major => {
              const updates = {};
              if (age.trim()) updates.age = parseInt(age);
              if (major.trim()) updates.major = major;
              if (Object.keys(updates).length > 0) {
                updateStudentById(id, updates);
              } else {
                console.log('未进行任何修改');
              }
              showMenu();
            });
          });
        } else {
          showMenu();
        }
      });
      break;

    case '4':
      // 删除学生
      rl.question('请输入要删除的学号: ', id => {
        deleteStudentById(id);
        showMenu();
      });
      break;

    case '5':
      // 退出系统
      console.log('谢谢使用，再见！');
      rl.close();
      break;

    default:
      console.log('无效的选择，请输入1-5之间的数字');
      showMenu();
  }
}

// 启动程序
console.log('欢迎使用学生信息管理系统！');
showMenu();
rl.on('line', handleInput);