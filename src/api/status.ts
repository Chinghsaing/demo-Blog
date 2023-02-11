import { ElMessage } from "element-plus";

function showMessage(code: number) {
    switch (code) {
        case 100:
            ElMessage.success('注册成功!')
            break
        case 200:
            ElMessage.success('登录成功!')
            break
        case 300:
            ElMessage.success('文章发布成功!')
            break
        case 400:
            ElMessage.success('头像上传成功!')
            break
        case 500:
            ElMessage.success('更改昵称成功!')
            break
        case 600:
            ElMessage.success('更改签名成功!')
            break
        case 700:
            ElMessage.success('评论发布成功!')
            break
        case 800:
            ElMessage.success('删除文章成功!')
            break
        case 101:
            ElMessage.warning('用户名密码不能为空!')
            break
        case 102:
            ElMessage.warning('注册失败!')
            break
        case 103:
            ElMessage.warning('用户名已经存在!')
            break
        case 104:
            ElMessage.warning('用户名不能包含中文和特殊字符，且长度需在6到12位!')
            break
        case 105:
            ElMessage.warning('密码需要字母和数字组成!')
            break
        case 106:
            ElMessage.warning('两次输入的密码不一致!')
            break
        case 201:
            ElMessage.warning('用户名不存在!')
            break
        case 202:
            ElMessage.warning('密码错误!')
            break
        case 301:
            ElMessage.warning('文章标题内容不能为空!')
            break
        case 302:
            ElMessage.warning('请上传文章封面!')
            break
        case 303:
            ElMessage.warning('文章封面必须为JPG格式!')
            break
        case 304:
            ElMessage.warning('文章封面大小不能超过5MB!')
            break
        case 401:
            ElMessage.warning('请上传文章封面!')
            break
        case 402:
            ElMessage.warning('头像大小不能超过5MB!')
            break
        case 501:
            ElMessage.warning('昵称不能为空!')
            break
        case 502:
            ElMessage.warning('昵称不能包括特殊符号，且长度须在2至8位!')
            break
        case 601:
            ElMessage.warning('签名不能为空!')
            break
        case 602:
            ElMessage.warning('签名长度须在1到16个字符!')
            break
        case 701:
            ElMessage.warning('评论内容不能为空!')
            break
        case 702:
            ElMessage.warning('文章ID不能为空!')
            break
        case 703:
            ElMessage.warning('发布日期不能为空!')
            break
    }
}

export default showMessage