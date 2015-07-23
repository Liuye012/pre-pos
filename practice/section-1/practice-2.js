function collect_same_elements(collection_a, collection_b) {
  var result = [];
  collection_a.forEach(function(val) {
    var item = find_same_index(val, collection_b);

 result.push(item);

  })
  return result;
}

function find_same_index(m, collection_b) {
  collection_b.forEach(function(val) {
    var k = val.indexOf(m);
    if (k ) {
      return k;

    }
  })
}
