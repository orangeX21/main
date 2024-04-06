function toggleLanguage() {
    var links = document.querySelectorAll('.login-link');

    // 遍历所有链接，根据当前语言版本切换文本内容
    links.forEach(function (link) {
        switch (link.textContent) {
            case '首页':
                link.textContent = 'Home';
                break;
            case '关于':
                link.textContent = 'About Us';
                break;
            case '服务':
                link.textContent = 'Services';
                break;
            case '联系我们':
                link.textContent = 'Contact Us';
                break;
            case '登陆':
                link.textContent = 'Login';
                break;
            case 'Home':
                link.textContent = '首页';
                break;
            case 'About Us':
                link.textContent = '关于';
                break;
            case 'Services':
                link.textContent = '服务';
                break;
            case 'Contact Us':
                link.textContent = '联系我们';
                break;
            case 'Login':
                link.textContent = '登陆';
                break;
        }
    });

    // 切换页面语言版本的显示/隐藏状态
    var englishVersion = document.getElementById('englishVersion');
    var chineseVersion = document.getElementById('chineseVersion');
    if (englishVersion.style.display === 'none') {
        englishVersion.style.display = 'block';
        chineseVersion.style.display = 'none';
    } else {
        englishVersion.style.display = 'none';
        chineseVersion.style.display = 'block';
    }
}
