function countIf (testFunc, arr) {
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    if (testFunc(arr[i])) {
      count ++
    }
  }
  return count
}

function filter (func, arr) {
  var emails = []
  for (var i = 0; i < arr.length; i++) {
    if (func(arr[i]))
    emails.push(arr[i])
  }
  return emails
}

function map (func, arr) {
  var res = [];

  for (var i = 0; i < arr.length; i++){
    res.push(func(arr[i]));
  }
  console.log(res);
  return res;

}

module.exports = {
  filter : filter,
  map : map,
  countIf : countIf
}