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

function reduce(reducerFunction, collection, initialResult) {
  var result = initialResult;    // initialise the result to be returned - could be of any type
  for (var i = 0; i < Object.keys(collection).length; i++) {
    var val = (collection[Object.keys(collection)[i]]);
    result = reducerFunction(result, val, i);
  }
  return result;
}

module.exports = {
  filter : filter,
  map : map,
  countIf : countIf,
  reduce : reduce
}
