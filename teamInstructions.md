# 学生信息管理系统 - 团队协作指南

## 项目概述
我们需要共同完成一个简单的学生信息管理系统，使用Node.js编写。系统将实现学生信息的添加、查询、修改和删除功能，所有信息存储在内存数组中。

## 已实现的部分
主文件 `main.js` 已经创建，包含了：
- 存储学生信息的数组 `students`
- 已实现的添加功能 `addStudent`
- 待实现的查询、修改、删除功能的框架
- 辅助功能 `displayAllStudents`
- 模块导出和简单测试

## 各功能实现指南

### 1. 查询功能（根据学号查询）
**负责人：** （待分配）

**实现思路：**
- 使用数组的 `find` 方法根据学号查找学生
- 找到返回学生对象，未找到返回null或抛出异常

**代码示例：**
```javascript
/**
 * 根据学号查询学生信息
 * @param {string} id - 学号
 * @returns {object|null} 学生信息对象或null
 */
function queryStudentById(id) {
    if (!id) {
        throw new Error('请输入学号');
    }
    
    const student = students.find(student => student.id === id);
    
    if (!student) {
        console.log(`未找到学号为 ${id} 的学生`);
        return null;
    }
    
    console.log(`查询结果：学号 ${student.id}，姓名 ${student.name}，年龄 ${student.age}，专业 ${student.major}`);
    return student;
}
```

### 2. 修改功能（根据学号修改年龄和专业）
**负责人：** （待分配）

**实现思路：**
- 先找到对应学号的学生
- 更新其年龄和专业属性
- 更新成功返回更新后的学生对象，未找到则提示并返回null

**代码示例：**
```javascript
/**
 * 根据学号修改学生信息（年龄和专业）
 * @param {string} id - 学号
 * @param {number} newAge - 新年龄
 * @param {string} newMajor - 新专业
 * @returns {object|null} 更新后的学生信息对象或null
 */
function updateStudentById(id, newAge, newMajor) {
    if (!id) {
        throw new Error('请输入学号');
    }
    
    const student = students.find(student => student.id === id);
    
    if (!student) {
        console.log(`未找到学号为 ${id} 的学生`);
        return null;
    }
    
    // 检查年龄是否有效
    if (newAge !== undefined) {
        const ageNum = parseInt(newAge);
        if (!isNaN(ageNum) && ageNum > 0) {
            student.age = ageNum;
        } else {
            console.log('请输入有效的年龄');
        }
    }
    
    // 更新专业
    if (newMajor !== undefined && newMajor !== '') {
        student.major = newMajor;
    }
    
    console.log(`成功修改学生信息：${student.name}（学号：${student.id}）`);
    return student;
}
```

### 3. 删除功能（根据学号删除）
**负责人：** （待分配）

**实现思路：**
- 找到对应学号的学生索引
- 使用数组的 `splice` 方法删除该学生
- 删除成功返回被删除的学生对象，未找到则提示并返回null

**代码示例：**
```javascript
/**
 * 根据学号删除学生信息
 * @param {string} id - 学号
 * @returns {object|null} 被删除的学生信息对象或null
 */
function deleteStudentById(id) {
    if (!id) {
        throw new Error('请输入学号');
    }
    
    const index = students.findIndex(student => student.id === id);
    
    if (index === -1) {
        console.log(`未找到学号为 ${id} 的学生`);
        return null;
    }
    
    const deletedStudent = students.splice(index, 1)[0];
    
    console.log(`成功删除学生：${deletedStudent.name}（学号：${deletedStudent.id}）`);
    return deletedStudent;
}
```

## 开发注意事项
1. 请确保每个函数都有适当的参数验证和错误处理
2. 保持代码风格一致，使用与现有代码相同的格式
3. 每个函数都应该有清晰的注释，说明其功能、参数和返回值
4. 完成功能后，请在主文件的示例用法部分添加测试代码
5. 如需添加新的辅助函数，请确保在 `module.exports` 中导出

## 协作流程
1. 各自完成分配的功能
2. 测试自己的功能是否正常工作
3. 合并代码并进行整体测试
4. 如有问题，及时沟通解决

祝我们合作愉快！