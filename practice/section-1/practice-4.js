var result=[];
function collect_same_elements(collection_a, object_b) {
  collection_a.forEach(function(val){
    find_same_key(val.key,object_b);
  })
  return result;
}

function find_same_key(m,object_b){
  object_b.value.forEach(function(val){
    if (m===val) {
          result.push(m);
    }
  })
  return m;
}
