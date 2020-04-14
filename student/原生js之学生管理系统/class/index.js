// 初始化 
function init() {
    bindEvent();
}

// 全局变量
var oDialog = document.getElementsByClassName('dialog')[0];
var BackfillData = [];
// 绑定事件
function bindEvent() {
    var menuList = document.getElementsByClassName('menu-list')[0];
    // 绑定点击事件  chageACtive  切换菜单栏背景色  事件在冒泡阶段执行
    menuList.addEventListener('click', changeMenu, false);

    // 新增学生
    var add = document.getElementById('add-student-btn');
    add.addEventListener('click', addStudent, false);

    // 学生列表 编辑方法
    var thBody = document.getElementById('thbody');
    thBody.addEventListener('click', thBodyClick, false);
    // 点击遮罩层 让编辑的这个弹框消失
    var mask = document.getElementsByClassName('mask')[0];
    mask.onclick = function() {
        oDialog.classList.remove('show');
    }

    // 点击编辑按钮，弹框里面的 提交发生的事件
    var editStudentBtn = document.getElementById('edit-student-btn');
    editStudentBtn.addEventListener('click', editStudentBtnFunc, false);


}





// 回填表单

function BackfillForm(data) {
    console.log(data)
    var form = document.getElementById('edit-student-form');
    for (var prop in data) {

        if (form[prop]) {
            form[prop].value = data[prop]
        }

    }
}


// 学生列表表格内       编辑和删除事件
function thBodyClick(e) {
    var tagName = e.target.tagName.toLowerCase();
    if (tagName != 'button') {
        return false;
    }

    var oEdit = e.target.className.indexOf('edit') > -1;
    var oDEL = e.target.className.indexOf('del') > -1;

    if (oEdit) {
        oDialog.classList.add('show');
        var index = e.target.getAttribute('data-index');
        // 回填数据
        BackfillForm(BackfillData[index]);

    } else if (oDEL) {
        var oDelConfirm = confirm('确认删除');
        var index = e.target.getAttribute('data-index');
        if (oDelConfirm) {
            transData('/api/student/delBySno', {
                sNo: BackfillData[index].sNo
            }, function() {
                var studentListTab = document.getElementsByClassName('list')[0];
                studentListTab.click();
            })
        }
    }
}




// 新增学生的方法
function addStudent(e) {
    var form = document.getElementById('add-student-form');

    e.preventDefault();
    var data = getFormData(form);
    if (!data) {
        return false;
    }

    // 数据格式校验
    if (!checkData(data)) {
        return false;
    }

    transData('/api/student/addStudent', data, function() {
        var confirm = window.confirm('添加成功，是否跳转');
        if (confirm) {
            var studentListTab = document.getElementsByClassName('list')[0];
            studentListTab.click();
        }
        form.reset();
    })



}


// 编辑 里面的提交按钮触发事件
function editStudentBtnFunc(e) {
    var form = document.getElementById('edit-student-form');

    e.preventDefault();
    var data = getFormData(form);
    if (!data) {
        return false;
    }
    // 数据格式校验
    if (!checkData(data)) {
        return false;
    }
    transData('/api/student/updateStudent', data, function() {
        var confirm = window.confirm('修改成功，是否刷新');
        if (confirm) {
            var studentListTab = document.getElementsByClassName('list')[0];
            var mask = document.getElementsByClassName('mask')[0];
            studentListTab.click();
            mask.click();
        }
        form.reset();
    })
}

// 数据校验
function checkData(data) {
    // 第一步判断填写完成没有，这个在 获取form表单数据 getFormData(form) 已经判断了 

    // 学号
    var mysNo = /^\d{4,20}/g
    if (!mysNo.test(data.email)) {
        alert('请输入有效的学号！');
        return false;
    }

    // 邮箱
    var myemail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/g;
    if (!myemail.test(data.email)) {
        alert('请输入有效的E_mail！');
        myemail.focus();
        return false;
    }

    // 手机号
    var myreg = /^1\d{10}$/g;
    if (!myreg.test(data.phone)) {
        alert("亲，手机号格式不对");
        return false;
    }
}





// 向后端存储数据
function saveData(url, param) {
    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}

// 获取form表单数据 

function getFormData(form) {
    var name = form.name.value;
    var sex = form.sex.value;
    var sNo = form.sNo.value;
    var email = form.email.value;
    var birth = form.birth.value;
    var phone = form.phone.value;
    var address = form.address.value;

    if (!name || !sex | !sNo | !email | !birth | !phone | !address) {
        alert('你输入的内容不完整，请详细检查，再行输入!');
        return false;
    }

    return {
        name: name,
        sex: sex,
        sNo: sNo,
        email: email,
        birth: birth,
        phone: phone,
        address: address,
    }

}


// 数据交互
function transData(url, data, callback) {
    if (!data) {
        data = {};
    }
    var result = saveData('http://api.duyiedu.com' + url, Object.assign(data, { appkey: 'zhangyuanzhi_1554124967737' }))

    if (result.status == 'success') {
        // 有回调函数的话执行
        callback(result);

        return result;

    } else {
        console.log(result.msg);
    }
}

// 渲染表格数据
function renderTable() {
    transData('/api/student/findAll', {}, function(res) {
        var data = res.data;
        BackfillData = data;
        var str = "";
        data.forEach(function(ele, index) {
            str += "<tr><td>" + ele.sNo +
                "</td>\<td>" + ele.name +
                "</td>\<td>" + (ele.sex ? '女' : '男') +
                "</td><td>" + ele.email +
                "</td>\<td>" + ((new Date().getFullYear()) - ele.birth) +
                "</td>\<td>" + ele.phone +
                "</td>\<td>" + ele.address +
                "</td>\<td>\<button class='btn edit' data-index='" + index + "'>编辑</button>\
            <button class='btn del' data-index='" + index + "'>删除</button>\
        </td>\</tr>"
        })

        var thBody = document.getElementById('thbody');
        thBody.innerHTML = str;
    })
}

// 切换导航事件
function changeMenu(e) {
    var tagName = e.target.tagName;;
    if (tagName == 'DD') {
        initMenuCss(e.target);
        var id = e.target.getAttribute('data-id');
        // console.log(id)
        var content = document.getElementById(id);
        initMenuContent(content);

        // 切换到学生列表，加载全部的数据
        if (id == 'student-list') {
            // 渲染表格数据
            renderTable();
        }
    }
}

// 改变 content 区域的 显示隐藏 
function initMenuContent(dom) {
    var active = document.getElementsByClassName('content-active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('content-active');
    }

    dom.classList.add('content-active');

}



// 改变左侧的active切换
function initMenuCss(dom) {
    var menuList = document.getElementsByClassName('menu-list')[0];
    var active = menuList.getElementsByClassName('active');

    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active');
    }

    dom.classList.add('active');

}

init();