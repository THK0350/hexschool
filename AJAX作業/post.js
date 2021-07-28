//*傳統表單傳送*
var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);

// 傳東西時告知是什麼格式,application/x-www-form-urlencoded 傳統表單格式
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

// 可以傳送什麼資料給伺服器
// 連接多個內容時，會用 &
xhr.send('email=abcdeoooo@gmail.com&password=1234567899999');

//---------------------------------------------------------------------//

//*JSON 格式傳遞*
var account ={
    email:'aa123@gmail.com',
    password:'1234',
}

var xhr = new XMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
//格式為JSON
xhr.setRequestHeader("Content-type","application/json")
//將JSON轉為字串
var data = JSON.stringify(account);
xhr.send(data);