# 六角前端實作（HTML+CSS）

## HTML
**快捷鍵**
* 一個網頁只有會一個 h1
* 所有的內容都擺在body
```
<body> 
  內容
</body>
```
* !+tab會自動帶出html的tag
* ul>li +tab 自動帶出 
```
<ul>
  <li></li>
</ul>
```
* 快捷鍵：link:css

**圖片**
```
<img src="" alt=""> \\alt是為了讓視障人士使用的，用於播報
                    \\img 不需要加入結尾標籤
```        
**超連結**
```
<a href="#" target="_blank" style="text-decoration:none;">隱藏超連結底線範例</a>
```
* target="_blank"：開新頁面
* title：滑鼠滑過去會有提示訊息
* text-decoration:none：隱藏超連結底線範例
## CSS
https://meyerweb.com/eric/tools/css/reset/  reset網頁－可複製 <br><br>
前面的48行都是載入css reset<br><br>
reset後的 ui/li { list-style:disc;} disc實心圓/circle空心圓/square實心方塊/decimal阿拉伯數字<br><br>
* 自訂的名稱 需要加.
```
.style1 {
   color:aquamarine; 
}
```
* 一般來說都會把 a 標籤變成display:block 區塊元素，讓面積比較大user比較好點到
* display:block; 區塊元素：h1/p/ul/li/div
* display:inline; 行內元素：a/span
* font-family      預設字型樣式
* font-size        16.18.20 px
* line-height      1.5 or 24px 行距
* text-align       left,right  靠左靠右
* text-indent      32px (16px首行空兩個字出來)
* text-decoration  underline 畫底線
* text-decoration  line-through 刪除線
* letter-spacing   1px  字與字之間的距離
* border : 
```
border {
1px  solid  #fff 
線條粗細  線條樣式 顏色
}
```

>線條樣式： 
>>實心 solid<br>
>>虛線 dashed<br>
>>圓點虛線  dotted<br>

>border-上下左右：
>>
>>上 top<br>
>>下 bottom<br>
>>左 left<br>
>>右 right<br>
**滑鼠**
```
/* 滑鼠按住 */
a:active {
   color:seagreen;
}

/* 滑鼠滑過去  */
h1:hover {
   color: red;
}
```
**排版 div**
div 單純拿來排版的標籤，沒有語意，盡量不要寫死高度 
* 後代選擇器： 
```
** html **
 <div class="style1">
       <a href="#" >red</a>
       <a href="#" >red</a>
       <a href="#" >red</a>
      <p class="content">哦椰</p>
   </div>
   
** css **
.style1 a {
   color: red;
}
.style1 .content {
  font-weight: bold;
}

```
**排版 margin / padding(留白)**
>margin 向外推
>>margin-top       與上的距離<br> 
>>margin-bottom    與下的距離<br> 
>>margin-left      與左的距離<br> 
>>margin-right     與右的距離<br> 
>>margin           與四周的距離<br>
>padding 向內推
>>padding-top       與上的距離<br> 
>>padding-bottom    與下的距離<br> 
>>padding-left      與左的距離<br> 
>>padding-right     與右的距離<br> 
>>padding           與四周的距離<br>
