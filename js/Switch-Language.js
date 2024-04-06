function toggleLanguage() {
    // 切换 .login-link 元素的文本内容
    var links = document.querySelectorAll('.login-link');
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
            case '联系':
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
                link.textContent = '联系';
                break;
            case 'Login':
                link.textContent = '登陆';
                break;
        }
    });

    // 切换链接的 aria-label 属性
    var linksWithAriaLabel = document.querySelectorAll('.login-link[aria-label]');
    linksWithAriaLabel.forEach(function (link) {
        switch (link.getAttribute('aria-label')) {
            case '首页':
                link.setAttribute('aria-label', 'Home');
                break;
            case '关于页面':
                link.setAttribute('aria-label', 'About Us');
                break;
            case '服务页面':
                link.setAttribute('aria-label', 'Services');
                break;
            case '联系我们页面':
                link.setAttribute('aria-label', 'Contact Us');
                break;
            case '登陆页面':
                link.setAttribute('aria-label', 'Login');
                break;
            case 'Home':
                link.setAttribute('aria-label', '首页');
                break;
            case 'About Us':
                link.setAttribute('aria-label', '关于');
                break;
            case 'Services':
                link.setAttribute('aria-label', '服务');
                break;
            case 'Contact Us':
                link.setAttribute('aria-label', '联系我们');
                break;
            case 'Login':
                link.setAttribute('aria-label', '登陆');
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

    var englishVersion = document.getElementById('footer-englishVersion');
    var chineseVersion = document.getElementById('footer-chineseVersion');

    if (englishVersion.style.display === 'none') {
        englishVersion.style.display = 'block';
        chineseVersion.style.display = 'none';
    } else {
        englishVersion.style.display = 'none';
        chineseVersion.style.display = 'block';
    }

    var textContainer = document.getElementById('textContainer');

    if (textContainer.innerHTML.includes("请遵守中国法律法规")) {
        textContainer.innerHTML = `
            <a class="text">Please comply with Chinese laws and regulations</a>
            <hr>
            <a class="text">Committed to promoting ***, advancing *** scale deployment and application, with proportate *** technology innovation and integration application as the main line, to enhance the breadth and depth of application as the main direction of attack</a>
        `;
    } else {
        textContainer.innerHTML = `
            <a class="text">请遵守中国法律法规</a>
            <hr>
            <a class="text">致力于普及***，推进***规模部署和应用，以 proportate***技术创新与融合应用为主线，以提升应用广度深度为主攻方向</a>
        `;
    }

}
