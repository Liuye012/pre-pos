function create_updated_collection(collection_a, object_b) {
  var C = [];
  collection_a.forEach(function(val) {
    for (var i = 0, cnt = 0; i < C.length; i++) {
      if (val === C[i].key) {
        C[i].count++;
        cnt = 1;
      }
    }
    if (cnt === 0) {
      new_Object(val, C);
    }
  });
  C.forEach(function(val) {
    check_same_item(val, object_b);
  });
  return C;
}

function new_Object(v,C) {
  var m = {};
  m.key = v;
  m.count = 1;
  C.push(m);
}

function check_same_item(val_c, object_b) {
  object_b.value.forEach(function(val) {
    if (val_c.key === val) {
      val_c.count -= (val_c.count - val_c.count % 3) / 3;
    }
  });
}
