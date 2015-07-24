function create_updated_collection(collection_a, object_b) {
  collection_a.forEach(function(val) {
    check_same_item(val, object_b);
  })
  return collection_a;
}

function check_same_item(val_a, object_b) {
  object_b.value.forEach(function(val) {
    if (val_a.key === val) {
      val_a.count -= 1;
    }
  })
}
