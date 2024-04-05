document.addEventListener("DOMContentLoaded", function () {
    // 设置公司名称（仅保留一处）
    document.getElementById("company-name").textContent = "Company Name";
    document.getElementById("logo").textContent = "Company Name";

    // 更新版权年份
    function updateCopyrightYear() {
        const copyrightYearElement = document.getElementById("copyright-year");
        copyrightYearElement.textContent = new Date().getFullYear();
    }
    updateCopyrightYear();

    // 更具描述性的aria-label和title属性值
    const localeLink = document.querySelector(".ac-gf-footer-locale-link");
    localeLink.setAttribute("aria-label", "Choose the country or region for your specific needs");
    localeLink.setAttribute("title", "Select your preferred country or region");
});