
    // 使用第三方 API 进行 IP 地址查询
    var apiUrl = "https://ipapi.co/json/";

    // 发起 HTTP GET 请求
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    // 解析响应并显示结果
    var countryName = data.country;
    var cityName = data.city;
    var ISP = data.org;
    var IP_Address = data.ip;
    // resultElement.innerText = "Your IP Address: " + data.ip + ", Country: " + data.country_name + ", City: " + data.city + ", ISP: " + data.org;
    //     resultElement.innerText = "Your IP Address: " + data.ip + ", Country: " + data.country_name + ", City: " + data.city + ", ISP: " + data.org;
        document.querySelector('.ac-gf-footer-locale-link').textContent = IP_Address + " " + countryName;
        document.querySelector('#chineseText1').textContent = "请遵守" + countryName + "的法规";
        document.querySelector('#englishText1').textContent = "Please comply with " + countryName + " laws and regulations";
})
    .catch(error => {
    // 处理错误
    resultElement.innerText = "Error: " + error;
});
