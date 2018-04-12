/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';


module.exports = function(content, file, conf){
  var info = fis.util.find('src/page/apidoc/doc/');
  var html = "["
  info.forEach(function(item){
  html += ("{path: '/" + item.split('/').pop().split('.')[0] + "',component:require('./doc/"+item.split('/').pop() + "')},")
  })
  html += "]"
  content = content.replace(/fispreprocessorchangerequire/, html)

  return content;
};
