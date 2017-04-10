var btnCallArgs = document.getElementById('btnCallArgs');
var btnCallFail = document.getElementById('btnCallFail');

//获取参数
btnCallArgs.addEventListener('click', function () {
  kk.ready(function (args) {
    alert(JSON.stringify(args.callArgs));
  })
})

// A应用调用B，B再调用C，调用B应该是成功，调用C是失败的；
btnCallFail.addEventListener('click', function () {
 kk.ready(function () {
   kk.app.callApp('https://www.baidu.com', function() {
     alert('调用应用成功');
   }, function (code, msg) {
     alert('kk.app.callApp 错误代码为：' + code + ' , 错误信息：' + msg);
   })
 })
}) 