
var xhr = new XMLHttpRequest();

// 格式、要讀取的網址、同步與非同步

// readyState
// 0 - 你已經產生一個XMLHttpRequest，但是還沒有連結到你要撈的資料
// 1 - 你用了 open()，但你還沒有把資料傳送過去
// 2 - 偵測到你有用send
// 3 - loading中
// 4 - 你撈到資料了，數據已經完全接收到了

// 格式： get（讀取資料）、post（傳送資料到伺服器）

// 網址: CORS開啟資源才能共享(是否可以跨網域撈取資料，由後端決定ㄍ )，https://test-cors.org/

// true 非同步，不會等資料傳回來，就讓程式繼續往下跑，等到回傳資料才會自動回傳
// false 他會等資料傳回來，才讓程式碼繼續往下跑

xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true);

        //空值
xhr.send(null);

// 狀態碼對應表，https://blog.miniasp.com/post/2009/01/16/Web-developer-should-know-about-HTTP-Status-Code

xhr.onload = function(){
    console.log(xhr.responseText);
    if (xhr.status == 200){
        var str = JSON.parse(xhr.responseText);
        document.querySelector('.message').textContent = str[0].name;
    }else{
        console.log('資料錯誤');
    }
}


// Step
// 1.建立了一個 xmlhttprequest
// 2.傳送到對方伺服器要資料
// 3.回傳資料到自己的瀏覽器
// 4.拿到資料後再看要怎麼處理
