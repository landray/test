$(function(){
  var cases =  [{
      type: 'html',
      html: '<div class="moduleName">showECard:显示资料页面</div>' +
            '<div class="showByID"></div>'
    }, {
      name: '显示联系人资料页面：只传userID',
      click: function () {
        $('.showByID').html('');
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;
        kk.econtact.choose(function (selects) {
          var userID = selects[0].userID;
          var name = selects[0].name;
          alert('你将看到' + name + '的资料页面');
          kk.econtact.showECard({
            userID: userID
          }, function () {
            $('.showByID').html('显示资料页面成功');
          }, function (code, msg) {
            $('.showByID').html('显示资料页面失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.showByID').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="showByName"></div>'
    }, {
      name: '显示联系人资料页面：只传loginName',
      click: function () {
        $('.showByName').html('');
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;
        kk.econtact.choose(function (selects) {
          var loginName = selects[0].loginName;
          var name = selects[0].name;
          alert('你将看到' + name + '的资料页面');
          kk.econtact.showECard({
            loginName: loginName
          }, function () {
            $('.showByName').html('显示资料页面成功');
          }, function (code, msg) {
            $('.showByName').html('显示资料页面失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.showByName').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="showbyIdFirst"></div>'
    }, {
      name: '显示联系人资料页面：优先通过userID显示',
      click: function () {
        $('.showbyIdFirst').html('');
        var flag = confirm('拉起企业通讯录，请选择两个联系人');
        if (!flag) return;
        kk.econtact.choose(function (selects) {
          if (selects.length < 2) {
            alert('你应该选择两个联系人来测试');
            return;
          };     
          var userID = selects[0].userID;
          var name = selects[0].name;
          var loginName = selects[1].loginName;
          alert('你将看到' + name + '的资料页面');
          kk.econtact.showECard({
            userID: userID,
            loginName: loginName
          }, function () {
            $('.showbyIdFirst').html('显示资料页面成功');
          }, function (code, msg) {
            $('.showbyIdFirst').html('显示资料页面失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.showbyIdFirst').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="showByNoId"></div>'
    }, {
      name: '显示联系人资料页面：只传不存在的userID',
      click: function () {
        $('.showByNoId').html('');
        kk.econtact.showECard({
          userID: +new Date()
        }, function () {
          $('.showByNoId').html('显示资料页面成功');
        }, function (code, msg) {
          $('.showByNoId').html('显示资料页面失败：code：' + code + ' 错误信息：' + msg);
        });
        
      }
    }, {
      type: 'html',
      html: '<div class="showByNoName"></div>'
    }, {
      name: '显示联系人资料页面：只传不存在的loginName',
      click: function () {
        $('.showByNoName').html('');
        var loginName = Math.random().toString(36).slice(2, 10);
        kk.econtact.showECard({
          loginName: loginName
        }, function () {
          $('.showByNoName').html('显示资料页面成功');
        }, function (code, msg) {
          $('.showByNoName').html('显示资料页面失败：code：' + code + ' 错误信息：' + msg);
        });
        
      }
    }, {
      type: 'html',
      html: '<div class="showByexistName"></div>'
    }, {
      name: '显示联系人资料页面：传不存在的userID,存在的loginName',
      click: function () {
        $('.showByexistName').html('');
        var loginName = kk.app.getUserInfo().loginName;
        alert('你将看到自己的资料页面');
        kk.econtact.showECard({
          userID: +new Date(),
          loginName: loginName
        }, function () {
          $('.showByexistName').html('显示资料页面成功');
        }, function (code, msg) {
          $('.showByexistName').html('显示资料页面失败：code：' + code + ' 错误信息：' + msg);
        });       
      }
    }, {
      type: 'html',
      html: '<div class="showByexistID"></div>'
    }, {
      name: '显示联系人资料页面：传不存在的oginName,存在的userID',
      click: function () {
        $('.showByexistID').html('');
        var userID = kk.app.getUserInfo().userID;
        var loginName = Math.random().toString(36).slice(2, 10);
        alert('你将看到自己的资料页面');
        kk.econtact.showECard({
          userID: userID,
          loginName: loginName
        }, function () {
          $('.showByexistID').html('显示资料页面成功');
        }, function (code, msg) {
          $('.showByexistID').html('显示资料页面失败：code：' + code + ' 错误信息：' + msg);
        });       
      }
    }, {
      type: 'html',
      html: '<div class="showBynoExist"></div>'
    }, {
      name: '显示联系人资料页面：传不存在的oginName,不存在的userID',
      click: function () {
        $('.showBynoExist').html('');
        var userID = +new Date();
        var loginName = Math.random().toString(36).slice(2, 10);
        kk.econtact.showECard({
          userID: userID,
          loginName: loginName
        }, function () {
          $('.showBynoExist').html('显示资料页面成功');
        }, function (code, msg) {
          $('.showBynoExist').html('显示资料页面失败：code：' + code + ' 错误信息：' + msg);
        });     
      }
    }, {
      type: 'html',
      html: '<div class="abnormalArgs">' +
              '<label>异常参数列表：</label>' +
              '<select class="showArgs">' +
                '<option value="">不传参数</option>' +
                '<option value="string">空字符串</option>' +
                '<option value="obj">空对象</option>' +
                '<option value="number">数字</option>' +
                '<option value="array">数组</option>' +
                '<option value="null">null</option>' +
                '<option value="undefined">undefined</option>' +
              '</select>' +
            '</div>' + '<div class="showErrorMsg"></div>'
    }, {
      name: '传异常参数去发起会话，应该进入失败回调',
      click: function () {
        $('.showErrorMsg').html('');
        var argsVal = $('.showArgs').val();
        switch (argsVal) {
          case '':
            argsVal = 'none';
            break;
          case 'string':
            argsVal = '';
            break; 
          case 'obj':
            argsVal  = {};
            break;
          case 'number':
            argsVal  = 123;
            break;
          case 'array':
            argsVal  = [123];
            break;
          case 'null':
            argsVal  = null;
            break;
          case 'undefined':
            argsVal  = undefined;
            break;
        }
        if (argsVal === 'none') {
          kk.econtact.startChat(function () {
            $('.showErrorMsg').html('显示资料页面成功');
          }, function (code, msg) {
            setTimeout(function () {
              $('.showErrorMsg').html('显示资料页面失败：code：' + code + '错误信息：' + msg);
            }, 500);
          });
        } else {
          kk.econtact.startChat(argsVal, function () {
            $('.showErrorMsg').html('显示资料页面成功');
          }, function (code, msg) {
            setTimeout(function () {
              $('.showErrorMsg').html('显示资料页面失败：code：' + code + '错误信息：' + msg);
            }, 500);
          });
        }
      }
    }, {
      type: 'html',
      html: '<div class="moduleName">startChat:发起会话</div>' +    '<div class="startChatByID"></div>'
    }, {
      name: '只传userID去发起会话',
      click: function () {
        $('.startChatByID').html('');
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;
        kk.econtact.choose(function (selects) {
          var userID = selects[0].userID;
          var name = selects[0].name;
          alert('你将与' + name + '发起会话');
          kk.econtact.startChat({
            userID: userID
          }, function () {
            $('.startChatByID').html('发起会话成功');
          }, function (code, msg) {
            $('.startChatByID').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByID').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html:  '<div>words内容:<input class="ByIDWords"></div>' +
             '<div class="startChatByIDWords"></div>'
    }, {
      name: '只传userID和words去发起会话',
      click: function () {
        $('.startChatByIDWords').html('');
        var val = $('.ByIDWords').val();
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;
        kk.econtact.choose(function (selects) {
          var userID = selects[0].userID;
          var name = selects[0].name;
          alert('你将与' + name + '发起会话,内容为' + val);          
          kk.econtact.startChat({
            userID: userID,
            words: val
          }, function () {
            $('.startChatByIDWords').html('发起会话成功');
          }, function (code, msg) {
            $('.startChatByIDWords').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByIDWords').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="startChatByName"></div>'
    }, {
      name: '只传loginName去发起会话',
      click: function () {
        $('.startChatByName').html('');
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;

        kk.econtact.choose(function (selects) {
          var loginName = selects[0].loginName;
          var name = selects[0].name;       
          alert('你将与' + name + '发起会话');
          kk.econtact.startChat({     
            loginName: loginName
          }, function () {
            $('.startChatByName').html('发起会话成功，你正在与' + name + '发起会话');
          }, function (code, msg) {
            $('.startChatByName').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByName').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div>words内容:<input class="ByNameWords"></div>' +
            '<div class="startChatByNameWords"></div>'
    }, {
      name: '只传loginName和words去发起会话',
      click: function () {
        $('.startChatByNameWords').html('');
        var val = $('.ByNameWords').val();
        var flag = confirm('拉起企业通讯录，请选择一个联系人');
        if (!flag) return;

        kk.econtact.choose(function (selects) {
          var loginName = selects[0].loginName;
          var name = selects[0].name;  
          alert('你将与' + name + '发起会话,内容为' + val);     
          kk.econtact.startChat({      
            loginName: loginName,
            words: val
          }, function () {
            $('.startChatByNameWords').html('发起会话成功，你正在与' + name + '发起会话');
          }, function (code, msg) {
            $('.startChatByNameWords').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByNameWords').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="startChatByIDfirst"></div>'
    }, {
      name: '同时传userID和loginName，优先通过userID去发起会话',
      click: function () {
        $('.startChatByIDfirst').html('');
        var flag = confirm('拉起企业通讯录，请选择两个联系人');
        if (!flag) return;

        kk.econtact.choose(function (selects) {
          if (selects.length < 2) {
            alert('你应该选择两个联系人来测试');
            return;
          };
          var userID = selects[0].userID;
          var name = selects[0].name;
          var loginName = selects[1].loginName;
          alert('你将与' + name + '发起会话');
          kk.econtact.startChat({
            userID: userID,
            loginName: loginName
          }, function () {
            $('.startChatByIDfirst').html('发起会话成功，你正在与' + name + '发起会话');
          }, function (code, msg) {
            $('.startChatByIDfirst').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByIDfirst').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div>words内容:<input class="ByAllWords"></div>' +
            '<div class="ByIDfirstWords"></div>'
    }, {
      name: '同时传userID和loginName，words,优先通过userID去发起会话,',
      click: function () {
        $('.ByIDfirstWords').html('');
        var val = $('.ByAllWords').val();
        var flag = confirm('拉起企业通讯录，请选择两个联系人');
        if (!flag) return;
        
        kk.econtact.choose(function (selects) {
          if (selects.length < 2) {
            alert('你应该选择两个联系人来测试');
            return;
          };
          var userID = selects[0].userID;
          var name = selects[0].name;
          var loginName = selects[1].loginName;
          alert('你将与' + name + '发起会话,内容为' + val);
          kk.econtact.startChat({
            userID: userID,
            loginName: loginName,
            words: val
          }, function () {
            $('.ByIDfirstWords').html('发起会话成功，你正在与' + name + '发起会话');
          }, function (code, msg) {
            $('.ByIDfirstWords').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.ByIDfirstWords').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="startChatByIDArr"></div>'
    }, {
      name: '传userID数组形式去发起会话(仅支持单数组)',
      click: function () {
        $('.startChatByIDArr').html('');
        var flag = confirm('拉起企业通讯录，请选择联系人');
        if (!flag) return;

        kk.econtact.choose(function (selects) {
          var userID = selects.map(function (v, i) {
            return v.userID;
          });
          if (userID.length < 2) {
            alert('你将与' + selects[0].name + '发起会话');
          };
          kk.econtact.startChat({
            userID: userID
          }, function () {
            $('.startChatByIDArr').html('发起会话成功');
          }, function (code, msg) {
            $('.startChatByIDArr').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByIDArr').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    },{
      type: 'html',
      html: '<div class="startChatByNameArr"></div>'
    }, {
      name: '传loginName数组形式去发起会话(仅支持单数组)',
      click: function () {
        $('.startChatByNameArr').html('');
        var flag = confirm('拉起企业通讯录，请选择联系人');
        if (!flag) return;

        kk.econtact.choose(function (selects) {
          var loginName = selects.map(function (v, i) {
            return v.loginName;
          });
          if (loginName.length < 2) {
            alert('你将与' + selects[0].name + '发起会话');
          };
          kk.econtact.startChat({
            loginName: loginName
          }, function () {
            $('.startChatByNameArr').html('发起会话成功');
          }, function (code, msg) {
            $('.startChatByNameArr').html('发起会话失败：code：' + code + '错误信息：' + msg);
          });
        }, function (code, msg) {
          $('.startChatByNameArr').html('选择联系人失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    },{
      type: 'html',
      html: '<div class="noExistId"></div>'
    }, {
      name: '单单只传不存在的userID，应该进入失败回调，代码：-2',
      click: function () {
        $('.noExistId').html('');
        kk.econtact.startChat({
          userID: +new Date()
        }, function () {
          $('.noExistId').html('发起会话成功');
        }, function (code, msg) {
          setTimeout(function () {
            $('.noExistId').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
          }, 500);
        });
      }
    }, {
      type: 'html',
      html: '<div class="noExistLoginName"></div>'
    }, {
      name: '单单只传不存在的loginName，应该进入失败回调，代码：-2',
      click: function () {
        $('.noExistLoginName').html('');
        var loginName = Math.random().toString(36).slice(2, 10);
        kk.econtact.startChat({
          loginName: loginName
        }, function () {
          $('.noExistLoginName').html('发起会话成功');
        }, function (code, msg) {
          setTimeout(function () {
            $('.noExistLoginName').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
          }, 500);
        });
      }
    }, {
      type: 'html',
      html: '<div>words内容:<input class="ByOnlyWords"></div>' +
            '<div class="onlyWords"></div>'
    }, {
      name: '单单只传words，应该进入失败回调，代码：991',
      click: function () {
        $('.onlyWords').html('');
        var val = $('.ByOnlyWords').val();
        var loginName = Math.random().toString(36).slice(2, 10);
        kk.econtact.startChat({
          words: val
        }, function () {
          $('.onlyWords').html('发起会话成功');
        }, function (code, msg) {
          setTimeout(function () {
            $('.onlyWords').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
          }, 500);
        });
      }
    }, {
      type: 'html',
      html: '<div class="existLoginName"></div>'
    }, {
      name: '传不存在的userID，存在的loginName(当前用户的loginName)，应该进入成功回调，拉起和自己的会话',
      click: function () {
        $('.existLoginName').html('');
        var loginName = kk.app.getUserInfo().loginName;
        alert('你将与自己发起会话');
        kk.econtact.startChat({
          userID: +new Date(),
          loginName: loginName
        }, function () {
          $('.existLoginName').html('发起会话成功');
        }, function (code, msg) {
          $('.existLoginName').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div>words内容:<input class="existNameWords"></div>' +
            '<div class="byexistNameWords"></div>'
    }, {
      name: '传不存在的userID，存在的loginName(当前用户的loginName)，与words，应该进入成功回调，拉起和自己的会话',
      click: function () {
        $('.byexistNameWords').html('');
        var val = $('.existNameWords').val();
        var loginName = kk.app.getUserInfo().loginName;
        alert('你将与自己发起会话，内容为' + val);
        kk.econtact.startChat({
          userID: +new Date(),
          loginName: loginName,
          words: val
        }, function () {
          $('.byexistNameWords').html('发起会话成功');
        }, function (code, msg) {
          $('.byexistNameWords').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="existUserID"></div>'
    }, {
      name: '传不存在的loginName，存在的userID(当前用户的userID)，应该进入成功回调，拉起和自己的会话',
      click: function () {
        $('.existUserID').html('');
        var userID = kk.app.getUserInfo().userID;
        var loginName = Math.random().toString(36).slice(2, 10);
        alert('你将与自己发起会话');
        kk.econtact.startChat({
          userID: userID,
          loginName: loginName,
        }, function () {
          $('.existUserID').html('发起会话成功');
        }, function (code, msg) {
          $('.existUserID').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div>words内容:<input class="existIDWords"></div>' +
           '<div class="existUserIDWords"></div>'
    }, {
      name: '传不存在的loginName，存在的userID(当前用户的userID)，与words，应该进入成功回调,还有内容',
      click: function () {
        $('.existUserIDWords').html('');
        var val = $('.existIDWords').val();
        var userID = kk.app.getUserInfo().userID;
        var loginName = Math.random().toString(36).slice(2, 10);
        alert('你将与自己发起会话，内容为' + val);
        kk.econtact.startChat({
          userID: userID,
          loginName: loginName,
          words: val
        }, function () {
          $('.existUserIDWords').html('发起会话成功');
        }, function (code, msg) {
          $('.existUserIDWords').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
        });
      }
    }, {
      type: 'html',
      html: '<div class="AllNoExist"></div>'
    }, {
      name: '传不存在的userID，不存在的loginName，应该进入失败回调，代码：-2',
      click: function () {
        $('.AllNoExist').html('');
        var loginName = kk.app.getUserInfo().loginName;
        var loginName = Math.random().toString(36).slice(2, 10);
        kk.econtact.startChat({
          userID: +new Date(),
          loginName: loginName
        }, function () {
          $('.AllNoExist').html('发起会话成功');
        }, function (code, msg) {
          setTimeout(function () {
            $('.AllNoExist').html('发起会话失败：code：' + code + ' 错误信息：' + msg);
          }, 500);
        });
      }
    }, {
      type: 'html',
      html: '<div class="abnormalArgs">' +
              '<label>异常参数列表：</label>' +
              '<select class="args">' +
                '<option value="">不传参数</option>' +
                '<option value="string">空字符串</option>' +
                '<option value="obj">空对象</option>' +
                '<option value="number">数字</option>' +
                '<option value="array">数组</option>' +
                '<option value="null">null</option>' +
                '<option value="undefined">undefined</option>' +
              '</select>' +
            '</div>' + '<div class="errorMsg"></div>'
    }, {
      name: '传异常参数去发起会话，应该进入失败回调',
      click: function () {
        $('.errorMsg').html('');
        var argsVal = $('.args').val();
        switch (argsVal) {
          case '':
            argsVal = 'none';
            break;
          case 'string':
            argsVal = '';
            break; 
          case 'obj':
            argsVal  = {};
            break;
          case 'number':
            argsVal  = 123;
            break;
          case 'array':
            argsVal  = [123];
            break;
          case 'null':
            argsVal  = null;
            break;
          case 'undefined':
            argsVal  = undefined;
            break;
        }
        if (argsVal === 'none') {
          kk.econtact.startChat(function () {
            $('.errorMsg').html('发起会话成功');
          }, function (code, msg) {
            setTimeout(function () {
              $('.errorMsg').html('发起会话失败：code：' + code + '错误信息：' + msg);
            }, 500);
          });
        } else {
          kk.econtact.startChat(argsVal, function () {
            $('.errorMsg').html('发起会话成功');
          }, function (code, msg) {
            setTimeout(function () {
              $('.errorMsg').html('发起会话失败：code：' + code + '错误信息：' + msg);
            }, 500);
          });
        }
      }
    }]
  
  // 渲染数据
  var $casesAll = $('.casesAll');
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