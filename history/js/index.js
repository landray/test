var historyBack = document.getElementById('back');
var historycanGo = document.getElementById('canGo');
var canGoMsg = document.getElementsByClassName('canGoMsg')[0];
historyBack.addEventListener('click', function () {
  kk.ready(function () {
    kk.history.back(function () {
      alert('不能返回上一页');
    });
  })
});
historycanGo.addEventListener('click', function () {
  kk.ready(function () {
    canGoMsg.innerHTML = '';
    kk.history.canGo(function (res) {
      backMsg = res.canGoBack ? '页面可后退' : '页面不可后退';
      goMsg = res.canGoForward  ? '页面可前进' : '页面不可前进';
      alert('回调参数:' + JSON.stringify(res));
      canGoMsg.innerHTML = backMsg + '，' + goMsg;
    });
  })
})
