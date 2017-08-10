

qkyNavConfig={
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZWI2MDU3NjYxZGQxMWU1ODYzNWZhMTYzZTBlOTBkMyIsInBob25lIjoiMTU4MTMxNzc5MDMiLCJzZXJ2aWNlTW9kZSI6MCwiYWdlbmN5Q29kZSI6IjEyNDUwMTAxIiwiaXNzIjoiaHR0cDovL2FwaS5kZXYucWt5MTAwLmNvbSIsInNjaG9vbENvZGUiOiI4ODAwMzAwLTEiLCJ1c2VyVHlwZSI6MSwiZXhwIjoxNDk4NzA1Mzg5LCJsb2dpblNvdXJjZSI6Imh0dHA6Ly9kZXYucWt5MTAwLmNvbSIsImhlYWRJbWFnZSI6Imh0dHA6Ly9zaHAucXBpYy5jbi9iaXptcC9ZZHhCQ3ZrT0lyQWFETEJDN1cxRk9senVNalB4ZHB1NFJpYkVpYzZVcVFRVk95ZXFFYmliSmljTWtBLyIsIm5hbWUiOiLpu4TlpKnmlL8iLCJhdWQiOiJRS1lfR1JPV19QQyIsInByb2plY3RJY29uIjoiaHR0cDovL2tzMy5xa3kxMDAuY29tLzIwMTcwNjE5MDk0MTU2LkRlalkyQk1USnoucG5nIn0.psQpIDmlE2K4uL6BAFjx_dLXDQ-6dnvlWT1sFaKhYfKYt_-y8yjaxVGE7MYdCNzGZTmgyWnvZ35pb9VqUJqfYD0VGdtpd6IRqy8F4YFtbBK-5CFlIiBNihKrJ5Z0p_Koo4Gjn9pnAiCYoQOL_F5MbPwtamzqAg3pDlBYf13dDHw",
    "productName": "名师工作室",
    "menus": [
        {name: "主页", attrCont: "href='index.html'", isActive: true},
        {name: "我的工作室", attrCont: "href='index_mywr.html'", isActive: false},
        {name: "我的关注", attrCont: "href='index_mygz.html'", isActive: false},
        {name: "工作室设置", attrCont: "href='index_wrsz.html'", isActive: false}

    ],//主导航条
    "theme": "white_green",
    "showApps": false,
    "showInfo": true,
    "showMessages": false,
    "proportion":0.5,
    qkyNavAfter: function () {
        //console.log("导航栏已渲染完成");
    },
    navClick: function (thiscilck) {//头部导航点击后进行回调
        //console.log(thiscilck);//返回当前点击的头部项
    },
}
