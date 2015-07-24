function count_same_elements(collection) {
  var result = [];
  collection.forEach(function(val) {
       check_elements(val,result);
  });
  return result;
}

function check_elements(val, result) {
  var cnt;
  for (var i = 0, cnt = 0; i < result.length; i++) {
    if (val.charAt(0) === result[i].key) {
      result[i].count +=( val.indexOf("[") || val.indexOf(":") || val.indexOf("-")) > -1 ? parseInt(val.charAt(2)) : 1;
      cnt++;
    }
  }
  if (cnt === 0) {
    new_Object(val, result);
  }
}

function new_Object(v, result) {
  var m = {};
  m.key = v.charAt(0);
  m.count =( v.indexOf("[") || v.indexOf(":") || v.indexOf("-")) > -1 ? parseInt(v.charAt(2) ):1;
  result.push(m);
}
