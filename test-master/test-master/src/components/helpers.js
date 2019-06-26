
var USER_ID = getCookie('USER_ID') || 0, SESSION = null;
export function uid(){
  return USER_ID;
}
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, props) {
    props = props || {}
    var exp = props.expires
    if (typeof exp == "number" && exp) {
        var d = new Date()
        d.setTime(d.getTime() + exp*1000)
        exp = props.expires = d
    }
    if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
    value = encodeURIComponent(value)
    var updatedCookie = name + "=" + value
    for(var propName in props){
        updatedCookie += "; " + propName
        var propValue = props[propName]
        if(propValue !== true){ updatedCookie += "=" + propValue }
    }
    document.cookie = updatedCookie
}

export function api(action, callback, data = {}, method = 'get') {
  const props = {
      method: method,
      mode: 'cors'
  };
  if(USER_ID > 0) {
    data.USER_ID = USER_ID;
  }
  if(SESSION) {
    data._session = JSON.stringify(SESSION);
  }
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
      action = action.split('&')[0];
      if(action == 'login') {
        USER_ID = json.data.id;
        setCookie('USER_ID', USER_ID, { path: '/', expires: 0 });
      } else if(action == 'logout') {
        setCookie('USER_ID', 0, { path: '/', expires: 1 });
        USER_ID = 0;
      }
      SESSION = json._session;
      callback(json);
    });
}
