function count_same_elements(collection) {
  var result = [];
  var cnt = 0;
  collection.forEach(function(val) {
    for (var i = 0, cnt = 0; i < result.length; i++) {
      if (val.charAt(0) === result[i].key) {
        result[i].count += val.indexOf("-") > -1 ? parseInt(val.slice(2)):1 ;
        cnt = 1;
      }
    }
    if (cnt === 0) {
      new_Object(val, result);
    }
  });
  return result;
}

function new_Object(v, result) {
  var m = {};
  m.key = v.charAt(0);
  m.count = v.indexOf("-") > -1 ? parseInt(v.slice(2)) : 1;
  result.push(m);
}
