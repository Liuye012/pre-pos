var result = [];
var cnt;

function count_same_elements(collection) {
  collection.forEach(function(val) {
    for (var i = 0, cnt = 0; i < result.length; i++) {

      if (val === result[i].key) {
        result[i].count++;
        cnt = 1;
      }
    }
    if (cnt === 0) {
      new_Object(val);
    }
  });
  return result;
}

function new_Object(v) {
  var m = {};
  m.key = v;
  m.count = 1;

  result.push(m);
}
