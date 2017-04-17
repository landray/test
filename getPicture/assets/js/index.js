$(function () {
  var cases = [{
      type: 'html',
      html: '<form class="picArgs">' +
              '<div>' +
                '<label>图片数量(默认是1):</label>' +
                '<input type="number" name="count" value="1">' +
              '</div>' +
              '<div>' +
                '<label>数据来源（默认值是相机）：</label>' +
                '<select name="sourceType">' +
                  '<option value="camera">相机</option>' +
                  '<option value="album">相册</option>' +
                '</select>' +
              '</div>' +
              '<div>' +
                '<label>期望的数据类型（默认值是file）:</label>' +
                '<select name="destinationType">' +
                  '<option value="file">file</option>' +
                  '<option value="data">data</option>' +
                '</select>' +
              '</div>' +
              '<div>' +
                '<label>图片宽度(填数字，默认值是100)：</label>' +
                '<input type="number" name="targetWidth" value="100">' +
              '</div>' +
              '<div>' +
                '<label>图片高度(填数字，默认值是100)：</label>' +
                '<input type="number" name="targetHeight" value="100">' +
              '</div>' +
              '<div>' +
                '<label>期望得到的数据格式(默认值是png)：</label>' +
                '<select name="encodingType">' +
                  '<option value="png">png</option>' +
                  '<option value="jpeg">jpeg</option>' +
                '</select>' +
              '</div>' +
              '<div>' +
                '<label>图片压缩比(填数字0~100，默认是50)：</label>' +
                '<input type="number" value="50" name="quality">' +
              '</div>' +
              '<div>' +
                '<label>保存的路径：</label>' +
                '<input type="text" name="savePath" value="sdcard://easymi/a.png">' +
              '</div>' +
              '<div>' +
                '<label>在照片中保存GPS信息：</label>' +
                '<input type="radio" name="exifFlag" value="true">' +
                '<label for="">是：</label>' +
                '<input type="radio" name="exifFlag" value="false">' +
                '<label>否</label>' +
              '</div>' +
           '</form>' + '<div class="PicSavePath illustrate"></div>'
  }, {
    name: '获取照片',
    click: function (e) {
      $('.PicSavePath').html('');
      var picArgs = getFormData('.picArgs');
      if (picArgs.count) {
        picArgs.count = parseInt(picArgs.count);
      } else {
        delete picArgs.count;
      }

      picArgs.targetWidth = parseInt(picArgs.targetWidth);
      picArgs.targetHeight = parseInt(picArgs.targetHeight);
      picArgs.quality = parseInt(picArgs.quality);
      picArgs.exifFlag = picArgs.exifFlag === 'true';
      console.log(picArgs);

      kk.media.getPicture(picArgs, function (res) {
        console.log(res);
        if (Array.isArray(res)) {
          res.forEach(function (v, i) {
            var imgData = v.imageFileOSPath || v.imageData;
            if (i === res.length - 1) {
              imageCanAccess(imgData, function () {
                doneCB(v);
              });
            } else {
              imageCanAccess(imgData);
            }
          });
        } else {
          var imgData = res.imageFileOSPath || res.imageData;
          imageCanAccess(imgData, function () {
            doneCB(res);
          });
        }
      }, function (code, msg) {
        $('.PicSavePath').html('getPicture error, msg:' + msg + ', code:' + code);
      });

      function imageCanAccess (url, needSize, done) {
        var img = new Image();
        if (typeof needSize === 'function') {
          done = needSize;
          needSize = false;
        };

        img.onload = function () {
          if (needSize) {
            img.style.opacity = '0';
            document.body.appendChild(img);
            setTimeout(function () {
              var s = window.getComputedStyle(img);
              img = null;
              done({
                height: parseInt(s.height, 10),
                width: parseInt(s.width, 10)
              });
            }, 10);
          } else {
            img = null;
            done && done();
          }
        };

        img.onerror = function () {
          img = null;
          done('不可访问: ' + url);
        };
      
        img.src = url;
      };

      function getFormData ($dom) {
        var obj = {};
        var formData = $($dom).serializeArray();
        $.each(formData, function () {
          if (obj[this.name] !== undefined) {
            kk.utils.isArray(obj[this.name]) ? obj[this.name] :[obj[this.name]];
            obj[this.name].push(this.value || '');
          } else {
            obj[this.name] = this.value || '';
          }
        });  
         
        return obj;
      };

      function doneCB (args) {
        // assert.closeTo(size.width, 100, 100, '截屏得到的图片宽度应该和设置的图片宽度相近');
        // assert.closeTo(size.height, 100, 100, '截屏得到的图片高度应该和设置的图片高度相近');
        
        // 有参数时 图片加载失败 ，没参数是成功
        if (typeof args !== 'object') {
          $('.PicSavePath').html('获得照片成功，但是不可访问');
        } else {
          if (args.imageData) {
            $('.PicSavePath').html('获取照片成功，并且可访问');
          } else {
            alert('获得照片成功，并且可访问，参数：' + JSON.stringify(args));
            $('.PicSavePath').html('获取照片成功，并且可访问');
            picURL = args.imageURI;
          };
        }
      };
    }
  }];

  // 渲染数据
  var $casesAll = $('.pictureAll');
  cases.forEach(function (item, i) {
    var type = item.type;
    if (type === 'html') {
      $casesAll.append(item.html);
    } else {
      var callback =  item.click;
      var $btn = $('<button class="btn">').attr('title', item.name).text(item.name);
      $casesAll.append($btn);
      $casesAll.on('click', 'button[title="' + item.name + '"]', function (e){
        callback(e);
      })
    };
  });
})