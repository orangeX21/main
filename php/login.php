<?php
// 导入数据库配置文件
require_once "config.php";
//$servername = 'localhost'; // 数据库服务器地址
//$username = 'main'; // 数据库用户名
//$password = 'DEzHA6r4HfhmZRap'; // 数据库密码
//$dbname = 'main'; // 要连接的数据库名称
// 尝试建立数据库连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查数据库连接是否成功
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

// 处理用户登录逻辑
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // 获取提交的用户名和密码
    $username = $_POST['username'];
    $password = $_POST['password'];
    // 使用预处理语句防止 SQL 注入，执行查询
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    // 检查查询结果中是否有匹配的用户
    if ($result->num_rows === 1) {
        // 获取用户数据
        $user = $result->fetch_assoc();

        // 验证密码
        if (password_verify($password, $user['password'])) {
            // 登录成功，重定向到仪表盘页面
            header('Location: http://8.137.11.29/');
            exit;
        } else {
            // 密码错误，显示错误消息
            echo '<p style="color:red;">用户名或密码错误，请重试。</p>';
        }
    } else {
        // 用户不存在，显示错误消息
        echo '<p style="color:red;">用户名或密码错误，请重试。</p>';
    }
}

// 关闭数据库连接
$conn->close();
?>
