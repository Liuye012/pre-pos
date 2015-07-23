var result = [];
function collect_same_elements(collection_a, collection_b) {
  collection_a.forEach(function(val) {
     find_same_index(val, collection_b);
  })
  return result;
}

function find_same_index(m, collection_b) {
    for (var i = 0; i < collection_b.length; i++) {
      for (var j = 0; j < collection_b[i].length; j++) {
        if(m===collection_b[i][j]){
          result.push(m);
        }
      }
    }
    return result;
}
