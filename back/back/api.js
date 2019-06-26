window.api = function(action, callback, data = {}, method = 'get') {
  const props = {
      method: method,
  };
  if(method.toLowerCase() == 'post') {
    var formData  = new FormData();
    for(const name in data) {
     formData.append(name, data[name]);
    }
    props.body = formData
  } else {
    for(const k in data) {
      action += '&' + k + '=' + data[k];
    }
  }
  fetch('http://localhost/test/test/back/back/api.php?action=' + action,  props)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      if(!json || json.status > 0) {
        //alert('Ошибка запроса! ' + (json && json.message ? json.message : ''));
        return;
      }
      callback(json);
    });
}
