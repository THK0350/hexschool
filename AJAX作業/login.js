//綁定動元素事件
var signup = document.querySelector('.signup');
var signin = document.querySelector('.signin');
//要監聽的東西
//看click的事件,function,同步與非同步
signup.addEventListener('click',register);
signin.addEventListener('click',login);

//*註冊*
function register(){
    // .value才能抓取input的值
    var emailStr = document.querySelector('.signupAccount').value;
    var passwordStr = document.querySelector('.signupPassword').value;
    // 轉為json格式，並且賦予值給email.password
    var account ={};
    account.email = emailStr ;
    account.password = passwordStr;
    console.log(account);

    //將上面的json帶入後端
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    //設定資料格式
    xhr.setRequestHeader('Content-type','application/json');
    //將JSON轉為字串
    var data = JSON.stringify(account);
    xhr.send(data);
    //查看xhr狀態
    xhr.onload = function(){
        console.log(xhr);
        //把回傳的String轉為JSON格式
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);
        //透過message進行判斷
        var veriStr = callbackData.message;
        if(veriStr =="帳號註冊成功"){
            alert('帳號註冊成功!');
        }else{
            alert('帳號註冊失敗!');
        }
    }
}

//*登入*
function login(){
    var emailStr = document.querySelector('.signinAccount').value;
    var passwordStr = document.querySelector('.signinPassword').value;
    var account ={};
    account.email = emailStr ;
    account.password = passwordStr;
    console.log(account);

    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);

    xhr.onload = function(){
        console.log(xhr)
        var callbackData = JSON.parse(xhr.responseText).message;
        console.log(callbackData);
        if (callbackData =="登入成功"){
            alert('登入成功');
        }else{
            alert('登入失敗');
        }
    }
}