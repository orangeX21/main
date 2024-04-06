/**
 * 切换语言版本的显示与隐藏
 * 该函数没有参数并且没有返回值
 */
function toggleLanguage() {
    // 获取英文版和中文版的元素
    var englishVersion = document.getElementById('englishVersion');
    var chineseVersion = document.getElementById('chineseVersion');

    // 如果英文版当前是隐藏的，则显示英文版，隐藏中文版
    if (englishVersion.style.display === 'none') {
        englishVersion.style.display = 'block';
        chineseVersion.style.display = 'none';
    } else { // 如果英文版当前是显示的，则隐藏英文版，显示中文版
        englishVersion.style.display = 'none';
        chineseVersion.style.display = 'block';
    }
}
