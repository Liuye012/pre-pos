function collect_same_elements(collection_a, collection_b) {
  var result = [];
  for (var i = 0; i < collection_a.length; i++) {
    var index = collection_b.indexOf(collection_a[i]);
    if (index !== -1) {
      result.push(collection_b[index]);
    }
  }
  return result;
}
