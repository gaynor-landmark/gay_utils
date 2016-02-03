var assert = require('./assert')
var data = require('../data/data')
var expectedArrayOfArrays = require('../data/array-of-arrays')
var expectedFormattedDates = require('../data/formatted-dates')
var utils = require('../')

function each (func, arr) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i])
  }
}
//Done
function getType (thing) {
	return typeof thing
}

function isNumber (thing) {
	if  (typeof thing === "number") {
		return true
		} else {
		return false
		}
	}

function isStringNumber (str) {
	var num = Number (str)
	if (! isNaN(num)) {
		return true
	} else {
		return false
	}
}

function toNumber (str) {
	return Number(str)
}

function add (a, b) {
	return a + b
}

function addStrings (a, b) {
	var num = Number(a) +  Number(b)
	return String(num)
}

function addStringsOrNumbers (a, b) {
	var num = Number(a) +  Number(b)
	if (isNumber(a) && isNumber(b) ){
	return num
	} else {
		return String(num)
	}
}

function isEmail (str) {
	var dex = str.indexOf("@")
	if (dex <=  0) {
		return false
	} else if( dex == str.length -1){
		return false
	}
	else {
		return true
	}
}

function isDate (str) {
	var date0 = Number(str.substring(0,4))
	var date1 = str.substring(4,5)
	var date2 = str.substring(7,8)
	if (date1 === "-" && date2 === "-" && ! isNaN(date0)) {
		return true
	} else {
		return false
	}
}




function filterStringsWithCommas (str) {
	return (str.indexOf(",") >= 0)
}

function formatDate (dateString) {
 var newDate = new Date(dateString)
 var yyyy = newDate.getDay() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()
 return yyyy
}

function splitStringByCommas (str) {
	return str.split(",");
}


// TESTS

var meaningOfLife = '42'
var expectedType = 'string'

/*assert(getType(meaningOfLife), expectedType, 'meaningOfLife is a ' + expectedType + ' data type') //done
assert(getType(data), 'object', 'data is an object!?') //done
assert(isNumber(meaningOfLife), false, 'meaningOfLife is not a number datatype')
assert(isStringNumber(meaningOfLife), true, 'we can convert meaningOfLife to number')
assert(isStringNumber('jsksk'), false, 'isStringNumber does not give a false positive')
assert(toNumber(meaningOfLife), 42, 'toNumber can convert strings to number if possible')
assert(add(2, 3), 5, 'add() can add')
assert(addStrings(meaningOfLife, '10'), '52', 'addStrings can add strings and convert them back to a string')
assert(addStringsOrNumbers(2, 3), 5, 'addStringsOrNumbers can add numbers')
assert(addStringsOrNumbers('1', '2'), '3', 'addStringsOrNumbers can add numbers')
assert(addStringsOrNumbers('10', 10), '20', 'addStringsOrNumbers can add strings and numbers (returning a string)')*/

var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
var expectedNumberCount = 4 // why are there 4 expected number data-types?  What are they?
var expectedStringCount = 2
var numberCount = utils.countIf(isNumber, mixedArray)
var stringCount = utils.countIf(function (x) { return typeof x === 'string' }, mixedArray)

/*assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array' )
assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')

var anISO8601String = "2015-11-15 04:30:11 +1300"
assert(isEmail('thedonald@makeamericagreatagain.com'), true, 'isEmail detects an email')
assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
assert(isDate(anISO8601String), true, 'isDate identifies ISO8601 Date and Time')
assert(isDate('200E-ii:iE'), false, 'isDate does not give a false positive')*/
//assert(formatDate(anISO8601String), "15/11/2015", 'formatDate converts a date to dd/mm/yyyy format')
var emails = utils.filter(isEmail, data)
assert(emails.length, 44, 'filter and isEmail returns the correct number of emails' )

var stringsWithCommas = utils.filter(filterStringsWithCommas, data)
assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')

var dates = utils.filter(isDate, data)
assert(dates.length, 51, 'filter and isDate return the correct number of dates from data')



//assert(matchesFormattedDates, true, 'formatDate and map correctly format dates')  var formattedDates = map(formatDate, dates)
// var matchesFormattedDates = formattedDates.every(function (d, i) {
//   console.log(d, expectedFormattedDates[i])
//   return d === expectedFormattedDates[i]
// })

// assert(matchesFormattedDates, true, 'formatDate and map correctly format dates')


var arrayOfArrays = utils.map(splitStringByCommas, stringsWithCommas)
var matchesArrayOfArrays = arrayOfArrays.every(function (arr, i) {
  return arr.every(function (str, j) {
    return str === expectedArrayOfArrays[i][j]
  })
})

assert(matchesArrayOfArrays, true, 'the generated array of array of strings matches the expected array')




