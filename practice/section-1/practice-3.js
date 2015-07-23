var result = [];

function collect_same_elements(collection_a, object_b) {
  collection_a.forEach(function(val) {
    find_sama_item(val, object_b);
  });
  return result;
}

function find_sama_item(m, object_b) {
  for (var i = 0; i < object_b.value.length; i++) {
    if (m === object_b.value[i]) {
      result.push(m);
    }
  }
  return result;
}
