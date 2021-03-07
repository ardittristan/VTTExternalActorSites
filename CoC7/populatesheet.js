/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 369);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

const lang = __webpack_require__(98);

module.exports =
/**@param {string} prop */
function (prop) {
  return lang[prop] || prop;
};

/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
};


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const toArray = __webpack_require__(366);

module.exports = (str, i, count, insert) => {
	const arr = toArray(str);
	arr.splice(i, count, insert);
	return arr.join('');
};


/***/ }),

/***/ 142:
/***/ (function(module) {

module.exports = JSON.parse("{\"Actor\":{\"types\":[\"character\",\"npc\",\"creature\"],\"templates\":{\"characteristics\":{\"characteristics\":{\"str\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.STR\",\"label\":\"CHARAC.Strength\",\"formula\":null},\"con\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.CON\",\"label\":\"CHARAC.Constitution\",\"formula\":null},\"siz\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.SIZ\",\"label\":\"CHARAC.Size\",\"formula\":null},\"dex\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.DEX\",\"label\":\"CHARAC.Dexterity\",\"formula\":null},\"app\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.APP\",\"label\":\"CHARAC.Appearance\",\"formula\":null},\"int\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.INT\",\"label\":\"CHARAC.Intelligence\",\"formula\":null},\"pow\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.POW\",\"label\":\"CHARAC.Power\",\"formula\":null},\"edu\":{\"value\":null,\"tempValue\":null,\"short\":\"CHARAC.EDU\",\"label\":\"CHARAC.Education\",\"formula\":null}}},\"attribs\":{\"attribs\":{\"hp\":{\"value\":null,\"max\":null,\"short\":\"HP\",\"label\":\"Hit points\",\"auto\":true},\"mp\":{\"value\":null,\"max\":null,\"short\":\"HP\",\"label\":\"Magic points\",\"auto\":true},\"lck\":{\"value\":null,\"short\":\"LCK\",\"label\":\"Luck\",\"max\":99},\"san\":{\"value\":null,\"max\":99,\"short\":\"SAN\",\"label\":\"Sanity\",\"auto\":true},\"mov\":{\"value\":null,\"short\":\"MOV\",\"label\":\"Movement rate\",\"auto\":true},\"db\":{\"value\":null,\"short\":\"DB\",\"label\":\"Damage bonus\",\"auto\":true},\"build\":{\"value\":null,\"short\":\"BLD\",\"label\":\"Build\",\"auto\":true},\"armor\":{\"value\":null,\"auto\":false}}},\"status\":{\"status\":{\"criticalWounds\":{\"type\":\"Boolean\",\"value\":false},\"unconscious\":{\"type\":\"Boolean\",\"value\":false},\"dying\":{\"type\":\"Boolean\",\"value\":false},\"dead\":{\"type\":\"Boolean\",\"value\":false},\"prone\":{\"type\":\"Boolean\",\"value\":false},\"tempoInsane\":{\"type\":\"boolean\",\"value\":false},\"indefInsane\":{\"type\":\"boolean\",\"value\":false}}},\"biography\":{\"personalDescription\":{\"type\":\"string\",\"value\":\"\"}}},\"character\":{\"templates\":[\"characteristics\",\"attribs\",\"status\"],\"infos\":{\"occupation\":\"\",\"age\":\"\",\"sex\":\"\",\"residence\":\"\",\"birthplace\":\"\",\"archetype\":\"\",\"organization\":\"\"},\"flags\":{\"locked\":true,\"manualCredit\":false},\"credit\":{\"monetarySymbol\":null,\"multiplier\":null,\"spent\":null,\"assetsDetails\":null},\"development\":{\"personal\":null,\"occupation\":null,\"archetype\":null},\"biography\":[],\"encounteredCreatures\":[]},\"npc\":{\"templates\":[\"characteristics\",\"attribs\",\"status\",\"biography\"],\"infos\":{\"occupation\":\"\",\"age\":\"\",\"sex\":\"\"},\"flags\":{\"locked\":false}},\"creature\":{\"templates\":[\"characteristics\",\"attribs\",\"status\",\"biography\"],\"special\":{\"attribs\":{\"move\":{\"primary\":{\"enabled\":false,\"value\":null,\"type\":null},\"secondary\":{\"enabled\":false,\"value\":null,\"type\":null}}},\"sanLoss\":{\"checkPassed\":null,\"checkFailled\":null},\"attacksPerRound\":1},\"infos\":{\"type\":null},\"flags\":{\"locked\":false}}},\"Item\":{\"types\":[\"item\",\"weapon\",\"skill\",\"setup\",\"occupation\",\"archetype\",\"book\",\"spell\",\"talent\",\"status\"],\"item\":{\"description\":\"\",\"quantity\":1,\"weight\":0,\"attributes\":{}},\"weapon\":{\"description\":{\"value\":\"\",\"chat\":\"\",\"special\":\"\"},\"wpnType\":\"\",\"skill\":{\"main\":{\"name\":\"\",\"id\":\"\"},\"alternativ\":{\"name\":\"\",\"id\":\"\"}},\"range\":{\"normal\":{\"value\":0,\"units\":\"\",\"damage\":\"\"},\"long\":{\"value\":0,\"units\":\"\",\"damage\":\"\"},\"extreme\":{\"value\":0,\"units\":\"\",\"damage\":\"\"}},\"usesPerRound\":{\"normal\":1,\"max\":null,\"burst\":null},\"bullets\":null,\"ammo\":0,\"malfunction\":null,\"blastRadius\":null,\"properties\":{},\"eras\":{},\"price\":{}},\"skill\":{\"specialization\":\"\",\"description\":{\"value\":\"\",\"opposingDifficulty\":\"\",\"pushedFaillureConsequences\":\"\",\"chat\":\"\"},\"base\":0,\"adjustments\":{\"personal\":null,\"occupation\":null,\"archetype\":null,\"experience\":null},\"value\":-1,\"attributes\":{},\"properties\":{},\"eras\":{},\"flags\":{}},\"occupation\":{\"description\":{\"value\":\"\"},\"source\":null,\"type\":{\"classic\":false,\"lovecraftian\":false,\"modern\":false,\"pulp\":false},\"related\":null,\"occupationSkillPoints\":{\"str\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"con\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"siz\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"dex\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"app\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"int\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"pow\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false},\"edu\":{\"multiplier\":null,\"selected\":false,\"optional\":false,\"active\":false}},\"creditRating\":{\"min\":null,\"max\":null},\"suggestedContacts\":\"\",\"skills\":[],\"groups\":[],\"personal\":null,\"attributes\":{},\"properties\":{},\"eras\":{},\"flags\":{}},\"archetype\":{\"description\":{\"value\":\"\"},\"source\":null,\"type\":{\"classic\":false,\"lovecraftian\":false,\"modern\":false},\"bonusPoints\":100,\"coreCharacteristics\":{\"str\":false,\"con\":false,\"siz\":false,\"dex\":false,\"app\":false,\"int\":false,\"pow\":false,\"edu\":false},\"coreCharacteristicsFormula\":{\"enabled\":true,\"value\":\"(1D6+13)*5\"},\"suggestedOccupations\":\"\",\"suggestedTraits\":\"\",\"talents\":2,\"skills\":[],\"attributes\":{},\"properties\":{},\"eras\":{},\"flags\":{}},\"setup\":{\"description\":{\"value\":\"\"},\"characteristics\":{\"points\":{\"enabled\":false,\"value\":460},\"rolls\":{\"enabled\":true,\"enableIndividualRolls\":true,\"str\":\"(3D6)*5\",\"con\":\"(3D6)*5\",\"siz\":\"(2D6+6)*5\",\"dex\":\"(3D6)*5\",\"app\":\"(3D6)*5\",\"int\":\"(2D6+6)*5\",\"pow\":\"(3D6)*5\",\"edu\":\"(2D6+6)*5\",\"luck\":\"(3D6)*5\"},\"values\":{\"str\":null,\"con\":null,\"siz\":null,\"dex\":null,\"app\":null,\"int\":null,\"pow\":null,\"edu\":null,\"luck\":null}},\"source\":null,\"enableCharacterisitics\":true,\"items\":[],\"bioSections\":[],\"attributes\":{},\"properties\":{},\"eras\":{},\"flags\":{}},\"spell\":{\"source\":null,\"castingTime\":null,\"cost\":{\"mp\":null,\"san\":null,\"pow\":null,\"hp\":null,\"other\":[]},\"description\":{\"value\":\"\",\"chat\":\"\",\"unidentified\":\"\",\"notes\":\"\"},\"type\":{\"call\":false,\"dismiss\":false,\"contact\":false,\"summon\":false,\"bind\":false,\"enchantment\":false,\"gate\":false,\"combat\":false},\"alternativeNames\":[],\"effects\":[],\"properties\":{},\"flags\":{}},\"book\":{\"language\":null,\"author\":null,\"date\":null,\"description\":{\"value\":\"\",\"chat\":\"\",\"unidentified\":\"\",\"notes\":\"\"},\"type\":{\"occult\":false,\"mythos\":false,\"other\":false},\"sanLoss\":null,\"mythosRating\":null,\"weeksStudyTime\":0,\"gain\":{\"cthulhuMythos\":{\"CMI\":null,\"CMF\":null},\"occult\":null},\"spells\":[],\"properties\":{},\"flags\":{}},\"talent\":{\"source\":null,\"description\":{\"value\":\"\",\"chat\":\"\",\"notes\":\"\"},\"type\":{\"physical\":false,\"mental\":false,\"combat\":false,\"miscellaneous\":false,\"basic\":false,\"insane\":false,\"other\":false}},\"status\":{\"active\":false,\"source\":null,\"description\":{\"value\":\"\",\"chat\":\"\",\"notes\":\"\"},\"duration\":{\"permanent\":true,\"hours\":null,\"minutes\":null,\"rounds\":null},\"type\":{\"mania\":false,\"phobia\":false}}}}");

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    iteratorSymbol = Symbol ? Symbol.iterator : undefined,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
}

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (iteratorSymbol && value[iteratorSymbol]) {
    return iteratorToArray(value[iteratorSymbol]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object ? baseValues(object, keys(object)) : [];
}

module.exports = toArray;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(46)))

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/escape-string-regexp/index.js
var escape_string_regexp = __webpack_require__(140);
var escape_string_regexp_default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp);

// EXTERNAL MODULE: ./node_modules/splice-string/index.js
var splice_string = __webpack_require__(141);
var splice_string_default = /*#__PURE__*/__webpack_require__.n(splice_string);

// EXTERNAL MODULE: ./src/CoC7/handlebars/helpers/localize.js
var localize = __webpack_require__(1);
var localize_default = /*#__PURE__*/__webpack_require__.n(localize);

// CONCATENATED MODULE: ./src/CoC7/libs/config.js
const COC7 = {};
COC7.weaponProperties = {
  melee: "CoC7.Weapon.Property.Melee",
  rngd: "CoC7.WeaponRngd",
  mnvr: "CoC7.WeaponProperyManeuver",
  thrown: "CoC7.Weapon.Property.Thrown",
  shotgun: "CoC7.Weapon.Property.Shotgun",
  dbrl: "CoC7.WeaponDbrl",
  impl: "CoC7.WeaponImpl",
  brst: "CoC7.WeaponBrst",
  auto: "CoC7.WeaponAuto",
  ahdb: "CoC7.WeaponAhdb",
  addb: "CoC7.WeaponAddb",
  slnt: "CoC7.WeaponSlnt",
  spcl: "CoC7.WeaponSpcl",
  mont: "CoC7.WeaponMont",
  blst: "CoC7.WeaponBlst",
  stun: "CoC7.WeaponStun",
  rare: "CoC7.WeaponRare",
  burn: "CoC7.Weapon.Property.Burn"
};
COC7.skillProperties = {
  noadjustments: "CoC7.SkillNoAdjustments",
  noxpgain: "CoC7.SkillNoXpGain",
  special: "CoC7.SkillSpecial",
  rarity: "CoC7.SkillRarity",
  push: "CoC7.SkillPush",
  combat: "CoC7.SkillCombat",
  fighting: "CoC7.SkillFighting",
  firearm: "CoC7.SkillFirearm"
};
COC7.CthulhuMythosName = "CoC7.CthulhuMythosName";
// EXTERNAL MODULE: ./src/CoC7/libs/template.json
var template = __webpack_require__(142);

// CONCATENATED MODULE: ./src/CoC7/libs/CoC7Parser.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CoC7Parser_CoC7Parser {
  static enrichHTML(content) {
    const html = document.createElement("div");
    html.innerHTML = String(content);
    let text = [];
    text = TextEditor._getTextNodes(html);
    const rgx = new RegExp("@(coc7).(.*?)\\[([^\\]]+)\\](?:{([^}]+)})?", "gi");

    TextEditor._replaceTextContent(text, rgx, CoC7Parser_CoC7Parser._createLink);

    return html.innerHTML;
  }

  static _createLink(match, tag, type, options, name) {
    const data = {
      cls: ["coc7-link"],
      dataset: {
        check: type
      },
      icon: "fas fa-dice",
      blind: false,
      name: name
    };
    const regx = new RegExp("[^,]+", "gi");
    const matches = options.matchAll(regx);

    for (let match of Array.from(matches)) {
      let [key, value] = match[0].split(":");
      if ("icon" == key) data.icon = value;

      if ("blind" == key && undefined == value) {
        value = true;
        data.blind =  true && ["check"].includes(type.toLowerCase());
      }

      data.dataset[key] = value;
    }

    let title;
    const difficulty = CoC7Parser_CoC7Check.difficultyString(data.dataset.difficulty);

    switch (type.toLowerCase()) {
      case "check":
        {
          var _data$dataset$type, _data$dataset$type2;

          let humanName = data.dataset.name;

          if (["attributes", "attribute", "attrib", "attribs"].includes((_data$dataset$type = data.dataset.type) === null || _data$dataset$type === void 0 ? void 0 : _data$dataset$type.toLowerCase())) {
            if ("lck" == data.dataset.name) humanName = localize_default()("CoC7.Luck");
            if ("san" == data.dataset.name) humanName = localize_default()("CoC7.Sanity");
          }

          if (["charac", "char", "characteristic", "characteristics"].includes((_data$dataset$type2 = data.dataset.type) === null || _data$dataset$type2 === void 0 ? void 0 : _data$dataset$type2.toLowerCase())) {
            var _CoC7Utilities$getCha;

            humanName = (_CoC7Utilities$getCha = CoC7Parser_CoC7Utilities.getCharacteristicNames(data.dataset.name)) === null || _CoC7Utilities$getCha === void 0 ? void 0 : _CoC7Utilities$getCha.label;
          }

          title = format(`CoC7.LinkCheck${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
            difficulty: difficulty,
            modifier: data.dataset.modifier,
            name: humanName
          });
          break;
        }

      case "sanloss":
        title = format(`CoC7.LinkSanLoss${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
          difficulty: difficulty,
          modifier: data.dataset.modifier,
          sanMin: data.dataset.sanMin,
          sanMax: data.dataset.sanMax
        });
        break;

      case "item":
        title = format(`CoC7.LinkItem${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
          difficulty: difficulty,
          modifier: data.dataset.modifier,
          name: data.dataset.name
        });
        break;

      default:
        break;
    }

    if (!name) {
      data.name = title;
    } else data.dataset.displayName = true;

    const a = document.createElement("a");
    a.title = title;
    a.classList.add(...data.cls);

    for (let [k, v] of Object.entries(data.dataset)) {
      a.dataset[k] = v;
    }

    a.draggable = true;
    a.innerHTML = `${data.blind ? '<i class="fas fa-eye-slash"></i>' : ""}<i data-link-icon="${data.icon}" class="link-icon ${data.icon}"></i>${data.name}`;
    return a;
  }

}

class CoC7Parser_CoC7Check {
  static difficultyString(difficultyLevel) {
    switch (!isNaN(Number(difficultyLevel)) ? Number(difficultyLevel) : difficultyLevel) {
      case '?':
        return localize_default()('CoC7.UnknownDifficulty');

      case '+':
        return localize_default()('CoC7.HardDifficulty');

      case '++':
        return localize_default()('CoC7.ExtremeDifficulty');

      case '+++':
        return localize_default()('CoC7.CriticalDifficulty');

      case 0:
        return localize_default()('CoC7.RegularDifficulty');

      case CoC7Parser_CoC7Check.difficultyLevel.unknown:
        return localize_default()('CoC7.UnknownDifficulty');

      case CoC7Parser_CoC7Check.difficultyLevel.regular:
        return localize_default()('CoC7.RegularDifficulty');

      case CoC7Parser_CoC7Check.difficultyLevel.hard:
        return localize_default()('CoC7.HardDifficulty');

      case CoC7Parser_CoC7Check.difficultyLevel.extreme:
        return localize_default()('CoC7.ExtremeDifficulty');

      case CoC7Parser_CoC7Check.difficultyLevel.critical:
        return localize_default()('CoC7.CriticalDifficulty');

      default:
        return null;
    }
  }

}

_defineProperty(CoC7Parser_CoC7Check, "difficultyLevel", {
  unknown: -1,
  regular: 1,
  hard: 2,
  extreme: 3,
  critical: 4,
  impossible: 9
});

class CoC7Parser_CoC7Utilities {
  static getCharacteristicNames(char) {
    const charKey = char.toLowerCase();

    switch (charKey) {
      case 'str':
        return {
          short: localize_default()('CHARAC.STR'),
          label: localize_default()('CHARAC.Strength')
        };

      case 'con':
        return {
          short: localize_default()('CHARAC.CON'),
          label: localize_default()('CHARAC.Constitution')
        };

      case 'siz':
        return {
          short: localize_default()('CHARAC.SIZ'),
          label: localize_default()('CHARAC.Size')
        };

      case 'dex':
        return {
          short: localize_default()('CHARAC.DEX'),
          label: localize_default()('CHARAC.Dexterity')
        };

      case 'app':
        return {
          short: localize_default()('CHARAC.APP'),
          label: localize_default()('CHARAC.Appearance')
        };

      case 'int':
        return {
          short: localize_default()('CHARAC.INT'),
          label: localize_default()('CHARAC.Intelligence')
        };

      case 'pow':
        return {
          short: localize_default()('CHARAC.POW'),
          label: localize_default()('CHARAC.Power')
        };

      case 'edu':
        return {
          short: localize_default()('CHARAC.EDU'),
          label: localize_default()('CHARAC.Education')
        };

      default:
        {
          for (const [, value] of Object.entries(template.Actor.templates.characteristics.characteristics)) {
            if (charKey == localize_default()(value.short).toLowerCase()) return {
              short: localize_default()(value.short),
              label: localize_default()(value.label)
            };
          }

          return null;
        }
    }
  }

}

function format(stringId, data = {}) {
  let str = localize_default()(stringId);
  const fmt = /\{[^\}]+\}/g;
  str = str.replace(fmt, k => {
    return data[k.slice(1, -1)];
  });
  return str;
}
// CONCATENATED MODULE: ./src/lib.js
/**
 * @param  {string} url
 * @param  {string} baseUrl
 */
function imgParse(url, baseUrl) {
  if (url.match(/https?:\/\//)) return url;
  return baseUrl + url;
}
// CONCATENATED MODULE: ./src/CoC7/populatesheet.js






/**
 * might be different for different systems, but this initializes the sheet tabs
 */

const tabs = [{
  navSelector: ".tabs",
  contentSelector: ".sheet-body",
  initial: "skills"
}];

const _tabs = createTabHandlers();
/* -------------------------------------------- */

/*   Sheet Populator                            */

/* -------------------------------------------- */

/**
 * @param  {HandlebarsTemplatable} sheetTemplate
 * @param  {Object} actorData
 * @param  {String} baseUrl
 */


function populateSheet(sheetTemplate, actorData, baseUrl) {
  var _data$flags, _data$flags$externala;

  /**
   * here you parse the json data into data you can send to the actor sheet
   */
  const data = getData(actorData, baseUrl);
  console.log(data);
  /**
   * here you send the data that the handlebars template reads from to the template
   */

  /** @type {string} */

  let innerHTML = sheetTemplate({
    actor: data,
    data: data.data,
    skillList: data.skillList,
    credit: data.credit,
    itemsByType: data.itemsByType,
    rangeWpn: data.rangeWpn,
    meleeWpn: data.meleeWpn,
    isInABoutOfMadness: data.isInABoutOfMadness,
    isInsane: data.isInsane,
    sanity: data.sanity,
    pulpCharacter: (_data$flags = data.flags) === null || _data$flags === void 0 ? void 0 : (_data$flags$externala = _data$flags.externalactor) === null || _data$flags$externala === void 0 ? void 0 : _data$flags$externala.pulpRules,
    meleeSkills: data.meleeSkills,
    rangeSkills: data.combatSkills
  }, {
    allowedProtoProperties: {
      size: true
    }
  }); // add host url to relative css urls

  let changedUrls = [];
  innerHTML.match(/url\(.*?\)/g).forEach(url => {
    if (!url.match(/https?:\/\//) && !changedUrls.includes(url)) {
      let index = pos(url.indexOf("'")) || pos(url.indexOf('"')) || pos(url.indexOf("(")) || 0;
      innerHTML = innerHTML.replace(new RegExp(escape_string_regexp_default()(url), "g"), splice_string_default()(url, index + 1, 0, baseUrl));
      changedUrls.push(url);
    }
  });
  $(".window-content")[0].innerHTML = innerHTML;
  activateListeners(data);
}
/* -------------------------------------------- */

/**
 * @param  {Object} data
 * @param  {String} baseUrl
 */


function getData(data, baseUrl) {
  var _data$itemsByType, _data$itemsByType$occ, _data$itemsByType2, _data$itemsByType2$ar;

  data.img = imgParse(data.img, baseUrl); //#region defaults

  if (!data.data.characteristics) {
    data.data.characteristics = {
      str: {
        value: null,
        short: "CHARAC.STR",
        label: "CHARAC.Strength",
        formula: null
      },
      con: {
        value: null,
        short: "CHARAC.CON",
        label: "CHARAC.Constitution",
        formula: null
      },
      siz: {
        value: null,
        short: "CHARAC.SIZ",
        label: "CHARAC.Size",
        formula: null
      },
      dex: {
        value: null,
        short: "CHARAC.DEX",
        label: "CHARAC.Dexterity",
        formula: null
      },
      app: {
        value: null,
        short: "CHARAC.APP",
        label: "CHARAC.Appearance",
        formula: null
      },
      int: {
        value: null,
        short: "CHARAC.INT",
        label: "CHARAC.Intelligence",
        formula: null
      },
      pow: {
        value: null,
        short: "CHARAC.POW",
        label: "CHARAC.Power",
        formula: null
      },
      edu: {
        value: null,
        short: "CHARAC.EDU",
        label: "CHARAC.Education",
        formula: null
      }
    };
  }

  if (!data.data.attribs) {
    data.data.attribs = {
      hp: {
        value: null,
        max: null,
        short: "HP",
        label: "Hit points",
        auto: true
      },
      mp: {
        value: null,
        max: null,
        short: "HP",
        label: "Magic points",
        auto: true
      },
      lck: {
        value: null,
        short: "LCK",
        label: "Luck"
      },
      san: {
        value: null,
        max: 99,
        short: "SAN",
        label: "Sanity",
        auto: true
      },
      mov: {
        value: null,
        short: "MOV",
        label: "Movement rate",
        auto: true
      },
      db: {
        value: null,
        short: "DB",
        label: "Damage bonus",
        auto: true
      },
      build: {
        value: null,
        short: "BLD",
        label: "Build",
        auto: true
      },
      armor: {
        value: null,
        auto: false
      }
    };
  }

  if (!data.data.status) {
    data.data.status = {
      criticalWounds: {
        type: "Boolean",
        value: false
      },
      unconscious: {
        type: "Boolean",
        value: false
      },
      dying: {
        type: "Boolean",
        value: false
      },
      dead: {
        type: "Boolean",
        value: false
      },
      prone: {
        type: "Boolean",
        value: false
      },
      tempoInsane: {
        type: "boolean",
        value: false
      },
      indefInsane: {
        type: "boolean",
        value: false
      }
    };
  }

  if (!data.data.biography) {
    data.data.biography = {
      personalDescription: {
        type: "string",
        value: ""
      }
    };
  }

  if (!data.data.infos) {
    data.data.infos = {
      occupation: "",
      age: "",
      sex: "",
      residence: "",
      birthplace: "",
      archetype: "",
      organization: ""
    };
  }

  if (!data.data.flags) {
    data.data.flags = {
      locked: true,
      manualCredit: false
    };
  }

  if (!data.data.credit) {
    data.data.credit = {
      monetarySymbol: null,
      multiplier: null,
      spent: null,
      assetsDetails: null
    };
  }

  if (!data.data.development) {
    data.data.development = {
      personal: null,
      occupation: null,
      archetype: null
    };
  }

  if (!data.data.biography) data.data.biography = [];
  if (!data.data.encounteredCreatures) data.data.encounteredCreatures = [];
  let skills = data.items.filter(item => (item === null || item === void 0 ? void 0 : item.type) === "skill");
  let weapons = data.items.filter(item => (item === null || item === void 0 ? void 0 : item.type) === "weapon"); //#endregion
  //#region skilllist

  data.skillList = [];
  let previousSpec = "";

  for (const skill of skills) {
    if (skill.data.properties.special) {
      if (previousSpec != skill.data.specialization) {
        previousSpec = skill.data.specialization;
        data.skillList.push({
          isSpecialization: true,
          name: skill.data.specialization
        });
      }
    }

    data.skillList.push(skill);
  } //#endregion
  //#region credit


  let manualCredit = data.data.flags.manualCredit;

  if (!manualCredit) {
    data.credit = {};
    let factor;
    let moneySymbol;

    if (!data.data.credit) {
      factor = 1;
      moneySymbol = "$";
    } else {
      factor = parseInt(data.data.credit.multiplier) ? parseInt(data.data.credit.multiplier) : 1;
      moneySymbol = data.data.credit.monetarySymbol ? data.data.credit.monetarySymbol : "$";
    }

    data.credit.spendingLevel = `${spendingLevel(data.items) * factor}${moneySymbol}`;
    data.credit.assets = `${assets(data.items) * factor}${moneySymbol}`;
    data.credit.cash = `${cash(data.items) * factor}${moneySymbol}`;
  } //#endregion
  //#region itemsByType


  data.itemsByType = {};

  for (const item of data.items) {
    let list = data.itemsByType[item.type];

    if (!list) {
      list = [];
      data.itemsByType[item.type] = list;
    }

    list.push(item);
  } //#endregion
  //#region skills


  data.meleeSkills = skills.filter(skill => skill.data.properties.combat == true && skill.data.properties.fighting == true);
  data.rangeSkills = skills.filter(skill => skill.data.properties.combat == true && skill.data.properties.firearm == true);
  let cbtSkills = skills.filter(skill => skill.data.properties.combat == true);
  data.combatSkills = data.combatSkills || {};

  if (cbtSkills) {
    for (const skill of cbtSkills) {
      data.combatSkills[skill._id] = skill;
    }
  } //#endregion
  //#region weapons


  if (weapons) {
    data.weapons = data.weapons || {};

    for (const weapon of weapons) {
      weapon.usesAlternateSkill = weapon.data.properties.auto == true || weapon.data.properties.brst == true;
      if (!weapon.data.ammo) weapon.data.ammo = 0;
      weapon.skillSet = true;

      if (weapon.data.skill.main.id == "") {
        weapon.skillSet = false;
      } else {
        if (data.combatSkills[weapon.data.skill.main.id]) {
          // const skill = this.actor.getOwnedItem( weapon.data.skill.main.id);
          weapon.data.skill.main.name = data.combatSkills[weapon.data.skill.main.id].name; // weapon.data.skill.main.value = skill.value;
        } else {
          weapon.skillSet = false;
        }

        if (weapon.data.skill.alternativ.id != "") {
          if (data.combatSkills[weapon.data.skill.alternativ.id]) {
            // const skill = this.actor.getOwnedItem( weapon.data.skill.alternativ.id);
            weapon.data.skill.alternativ.name = data.combatSkills[weapon.data.skill.alternativ.id].name; // weapon.data.skill.alternativ.value = skill.value;
          }
        }
      }

      weapon.data._properties = [];

      for (let [key, value] of Object.entries(COC7["weaponProperties"])) {
        let property = {};
        property.id = key;
        property.name = value;
        property.value = true == weapon.data.properties[key];

        weapon.data._properties.push(property);
      }

      data.rangeWpn = data.rangeWpn || [];
      data.meleeWpn = data.meleeWpn || [];
      data.weapons[weapon._id] = weapon;
      if (weapon.data.properties.rngd) data.rangeWpn.push(weapon);else data.meleeWpn.push(weapon);
    }
  } //#endregion
  //#region items


  if (data.items) {
    data.hasEmptyValueWithFormula = false;

    if (data.data.characteristics) {
      for (const characteristic of Object.values(data.data.characteristics)) {
        if (!characteristic.value) characteristic.editable = true;
        characteristic.hard = Math.floor(characteristic.value / 2);
        characteristic.extreme = Math.floor(characteristic.value / 5); //If no value && no formula don't display charac.

        if (!characteristic.value && !characteristic.formula) characteristic.display = false;else characteristic.display = true; //if any characteristic has no value but has a formula.

        if (!characteristic.value && characteristic.formula) characteristic.hasEmptyValueWithFormula = true;
        data.hasEmptyValueWithFormula = data.hasEmptyValueWithFormula || characteristic.hasEmptyValueWithFormula;
      }
    }
  } //#endregion
  //#region attribs


  data.data.attribs.mov.value = mov(data); //return computed values or fixed values if not auto.

  data.data.attribs.db.value = db(data);
  data.data.attribs.build.value = build(data);
  if (data.data.attribs.hp.value < 0) data.data.attribs.hp.value = null;
  if (data.data.attribs.mp.value < 0) data.data.attribs.mp.value = null;
  if (data.data.attribs.san.value < 0) data.data.attribs.san.value = null;

  if (data.data.attribs.hp.auto) {
    //TODO if any is null set max back to null.
    if (data.data.characteristics.siz.value != null && data.data.characteristics.con.value != null) data.data.attribs.hp.max = hpMax(data);
  }

  if (data.data.attribs.mp.auto) {
    //TODO if any is null set max back to null.
    if (data.data.characteristics.pow.value != null) data.data.attribs.mp.max = Math.floor(data.data.characteristics.pow.value / 5);
  }

  if (data.data.attribs.san.auto) {
    data.data.attribs.san.max = sanMax(data);
  }

  if (data.data.attribs.mp.value > data.data.attribs.mp.max || data.data.attribs.mp.max == null) data.data.attribs.mp.value = data.data.attribs.mp.max;
  if (data.data.attribs.hp.value > data.data.attribs.hp.max || data.data.attribs.hp.max == null) data.data.attribs.hp.value = data.data.attribs.hp.max;
  if (data.data.attribs.hp.value == null && data.data.attribs.hp.max != null) data.data.attribs.hp.value = data.data.attribs.hp.max;
  if (data.data.attribs.mp.value == null && data.data.attribs.mp.max != null) data.data.attribs.mp.value = data.data.attribs.mp.max;
  if (data.data.attribs.san.value == null && data.data.characteristics.pow.value != null) data.data.attribs.san.value = data.data.characteristics.pow.value;
  if (data.data.attribs.san.value > data.data.attribs.san.max) data.data.attribs.san.value = data.data.attribs.san.max;

  if (data.data.biography instanceof Array && data.data.biography.length) {
    data.data.biography[0].isFirst = true;
    data.data.biography[data.data.biography.length - 1].isLast = true;
  }

  data.data.indefiniteInsanityLevel = {};
  data.data.indefiniteInsanityLevel.value = data.data.attribs.san.dailyLoss ? data.data.attribs.san.dailyLoss : 0;
  data.data.indefiniteInsanityLevel.max = Math.floor(data.data.attribs.san.value / 5);
  data.hasInventory = Object.prototype.hasOwnProperty.call(data.itemsByType, "item") || Object.prototype.hasOwnProperty.call(data.itemsByType, "book") || Object.prototype.hasOwnProperty.call(data.itemsByType, "spell"); //#endregion

  data.isInABoutOfMadness = isInABoutOfMadness(data.effects);
  data.isInsane = isInsane(data.effects);
  data.sanity = sanity(data.effects);

  if (((_data$itemsByType = data.itemsByType) === null || _data$itemsByType === void 0 ? void 0 : (_data$itemsByType$occ = _data$itemsByType.occupation) === null || _data$itemsByType$occ === void 0 ? void 0 : _data$itemsByType$occ.length) > 0) {
    data.data.infos.occupation = data.itemsByType.occupation[0].name;
    data.data.infos.occupationSet = true;
  } else data.data.infos.occupationSet = false;

  if (((_data$itemsByType2 = data.itemsByType) === null || _data$itemsByType2 === void 0 ? void 0 : (_data$itemsByType2$ar = _data$itemsByType2.archetype) === null || _data$itemsByType2$ar === void 0 ? void 0 : _data$itemsByType2$ar.length) > 0) {
    data.data.infos.archetype = data.itemsByType.archetype[0].name;
    data.data.infos.archetypeSet = true;
  } else data.data.infos.archetypeSet = false;
  /**
   * any other parsing that needs to be done
   */


  return data;
}
/* -------------------------------------------- */


function activateListeners(data) {
  // sheet object
  const html = $(".window-content").first(); // bind tabs to pages

  _tabs.forEach(t => t.bind(html[0]));

  html.find(".show-detail").on("click", event => _onItemSummary(event, data));
}
/* -------------------------------------------- */

/*   Helper Functions                           */

/* -------------------------------------------- */


function getChatData(htmlOptions, item) {
  console.log(item);
  const data = JSON.parse(JSON.stringify(item.data));
  console.log(data); //Fix : data can have description directly in field, not under value.

  if (data.description && !data.description.value) {
    const value = data.description;
    data.description = {
      value: value
    };
  }

  const labels = []; // Rich text description

  data.description.value = TextEditor.enrichHTML(data.description.value, htmlOptions);
  data.description.value = CoC7Parser_CoC7Parser.enrichHTML(data.description.value);
  data.description.special = TextEditor.enrichHTML(data.description.special, htmlOptions);
  data.description.special = CoC7Parser_CoC7Parser.enrichHTML(data.description.special); // Item type specific properties

  const props = [];
  if (item.type == "weapon") _weaponChatData(item, labels, props, htmlOptions);

  if (item.type == "skill") {
    for (let [key, value] of Object.entries(COC7["skillProperties"])) {
      if (item.data.properties[key] == true) props.push(value);
    }
  } // Filter properties and return


  data.properties = props.filter(p => !!p);
  data.labels = labels;
  return data;
}

function _weaponChatData(item, labels, props, htmlOptions) {
  for (let [key, value] of Object.entries(COC7["weaponProperties"])) {
    if (item.data.properties[key] == true) props.push(value);
  }

  let skillLabel = localize_default()("CoC7.Skill");
  let skillName = "";
  let found = false;

  if (item.data.skill.main.id && htmlOptions.owner) {
    var _htmlOptions$owner$sk;

    const skill = (_htmlOptions$owner$sk = htmlOptions.owner.skillList.filter(sk => sk._id == item.data.skill.main.id)) === null || _htmlOptions$owner$sk === void 0 ? void 0 : _htmlOptions$owner$sk[0];

    if (skill) {
      skillName += getNameWithoutSpec(skill);
      found = true;
    }
  }

  if (item.usesAlternativeSkill && this.data.data.skill.alternativ.id && htmlOptions.owner) {
    var _htmlOptions$owner$sk2;

    skillLabel = localize_default()("CoC7.Skills");
    const skill = (_htmlOptions$owner$sk2 = htmlOptions.owner.skillList.filter(sk => sk._id == item.data.skill.alternativ.id)) === null || _htmlOptions$owner$sk2 === void 0 ? void 0 : _htmlOptions$owner$sk2[0];

    if (skill) {
      skillName += `/${getNameWithoutSpec(skill)}`;
      found = true;
    }
  }

  if (!found) {
    skillName = item.data.skill.main.name;
    if (item.usesAlternativeSkill && item.data.skill.alternativ.name) skillName += `/${item.data.skill.alternativ.name}`;
  }

  if (skillName) {
    labels.push({
      name: skillLabel,
      value: skillName
    });
  }

  labels.push({
    name: localize_default()("CoC7.WeaponUsesPerRound"),
    value: usesPerRoundString(item)
  });
  labels.push({
    name: localize_default()("CoC7.WeaponMalfunction"),
    value: item.data.malfunction ? item.data.malfunction : "-"
  });

  if (item.data.bullets) {
    labels.push({
      name: localize_default()("CoC7.WeaponBulletsInMag"),
      value: item.data.bullets
    });
  }
}
/**
 * @param  {JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>} event
 */


function _onItemSummary(event, data) {
  var _data$items$filter;

  event.preventDefault();
  let li = $(event.currentTarget).parents(".item"),
      item = (_data$items$filter = data.items.filter(item => item._id === li.data("item-id"))) === null || _data$items$filter === void 0 ? void 0 : _data$items$filter[0],
      chatData = getChatData({
    secrets: true,
    owner: data
  }, item); // Toggle summary

  if (li.hasClass("expanded")) {
    let summary = li.children(".item-summary");
    summary.slideUp(200, () => summary.remove());
  } else {
    var _item$data$properties;

    let div = $('<div class="item-summary"></div>');
    let labels = $('<div class="item-labels"></div>');
    chatData.labels.forEach(p => labels.append(`<div class="item-label"><span class="label-name">${p.name} :</span><span class="label-value">${p.value}</span></div>`));
    div.append(labels);
    div.append($(`<div class="item-description">${chatData.description.value}</div>`));

    if ((_item$data$properties = item.data.properties) !== null && _item$data$properties !== void 0 && _item$data$properties.spcl) {
      let specialDiv = $(`<div class="item-special">${chatData.description.special}</div>`);
      div.append(specialDiv);
    }

    let props = $('<div class="item-properties"></div>');
    chatData.properties.forEach(p => props.append(`<div class="tag item-property">${localize_default()(p)}</div>`));
    div.append(props);
    li.append(div.hide());
    div.slideDown(200);
  }

  li.toggleClass("expanded");
}

function usesPerRoundString(item) {
  let usesPerRound;
  if (item.data.usesPerRound.normal) usesPerRound = item.data.usesPerRound.normal;else usesPerRound = '1';
  if (item.data.usesPerRound.max) usesPerRound += `(${item.data.usesPerRound.max})`;
  if (item.data.properties.auto) usesPerRound += ` ${localize_default()('CoC7.WeaponAuto')}`;

  if (item.data.properties.brst) {
    usesPerRound += ` ${localize_default()('CoC7.WeaponBrst')}`;
    if (item.data.usesPerRound.burst) usesPerRound += `(${item.data.usesPerRound.burst})`;
  }

  return usesPerRound;
}
/* -------------------------------------------- */
//#region credits


function getNameWithoutSpec(item) {
  var _item$data$properties2;

  if ((_item$data$properties2 = item.data.properties) !== null && _item$data$properties2 !== void 0 && _item$data$properties2.special) {
    const specNameRegex = new RegExp(item.data.specialization, "ig");
    const filteredName = item.name.replace(specNameRegex, "").trim().replace(/^\(+|\)+$/gm, "");
    return filteredName.length ? filteredName : item.name;
  }

  return item.name;
}

function getSkillsByName(skillName, items) {
  let skillList = [];
  const name = skillName.match(/\(([^)]+)\)/) ? skillName.match(/\(([^)]+)\)/)[1] : skillName;
  items.forEach(value => {
    if (getNameWithoutSpec(value).toLowerCase() == name.toLowerCase() && value.type == "skill") skillList.push(value);
  });
  return skillList;
}

function creditRatingSkill(items) {
  let skillList = getSkillsByName(localize_default()("CoC7.CreditRatingSkillName"), items);
  if (skillList.length != 0) return skillList[0];
  return null;
}

function creditRating(items) {
  const CR = creditRatingSkill(items);

  if (CR) {
    const value = CR.value;
    if (value) return value;
    return parseInt(CR.data.value);
  }

  return 0;
}

function spendingLevel(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 5000;
  if (CR >= 90) return 250;
  if (CR >= 50) return 50;
  if (CR >= 10) return 10;
  if (CR >= 1) return 2;
  return 0.5;
}

function assets(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 5000000;
  if (CR >= 90) return CR * 2000;
  if (CR >= 50) return CR * 500;
  if (CR >= 10) return CR * 50;
  if (CR >= 1) return CR * 10;
  return 0;
}

function cash(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 50000;
  if (CR >= 90) return CR * 20;
  if (CR >= 50) return CR * 5;
  if (CR >= 10) return CR * 2;
  if (CR >= 1) return CR;
  return 0.5;
} //#endregion

/* -------------------------------------------- */
//#region madness


function boutOfMadness(effects) {
  return effects.find(e => e.label == localize_default()("CoC7.BoutOfMadnessName"));
}

function isInABoutOfMadness(effects) {
  if (!boutOfMadness(effects)) return false;
  return !boutOfMadness(effects).disabled;
} //#endregion

/* -------------------------------------------- */
//#region insanity


function insanity(effects) {
  return effects.find(e => e.label == localize_default()("CoC7.InsanityName"));
}

function isInsane(effects) {
  if (!insanity(effects)) return false;
  return !insanity(effects).disabled;
} //#endregion

/* -------------------------------------------- */
//#region sanity


function sanity(effects) {
  var _boutOfMadness, _boutOfMadness$flags, _boutOfMadness$flags$, _boutOfMadness2, _boutOfMadness2$durat, _boutOfMadness3, _insanity, _insanity$flags, _insanity2;

  let boutRealTime = (_boutOfMadness = boutOfMadness(effects)) !== null && _boutOfMadness !== void 0 && (_boutOfMadness$flags = _boutOfMadness.flags) !== null && _boutOfMadness$flags !== void 0 && (_boutOfMadness$flags$ = _boutOfMadness$flags.CoC7) !== null && _boutOfMadness$flags$ !== void 0 && _boutOfMadness$flags$.realTime ? true : false;
  let duration = boutRealTime ? (_boutOfMadness2 = boutOfMadness(effects)) === null || _boutOfMadness2 === void 0 ? void 0 : (_boutOfMadness2$durat = _boutOfMadness2.duration) === null || _boutOfMadness2$durat === void 0 ? void 0 : _boutOfMadness2$durat.rounds : (_boutOfMadness3 = boutOfMadness(effects)) === null || _boutOfMadness3 === void 0 ? void 0 : _boutOfMadness3.duration.seconds;
  if (!boutRealTime && duration) duration = Math.round(duration / 3600);
  let indefiniteInstanity = (_insanity = insanity(effects)) !== null && _insanity !== void 0 && (_insanity$flags = _insanity.flags) !== null && _insanity$flags !== void 0 && _insanity$flags.CoC7.indefinite ? true : false;
  let insaneDuration = indefiniteInstanity ? null : (_insanity2 = insanity(effects)) === null || _insanity2 === void 0 ? void 0 : _insanity2.duration.seconds;
  if (!indefiniteInstanity && insaneDuration) insaneDuration = insaneDuration / 3600;
  let boutDurationText = isInABoutOfMadness(effects) ? boutRealTime ? `${duration} ${localize_default()("CoC7.rounds")}` : `${duration} ${localize_default()("CoC7.hours")}` : null;
  const insanityDurationText = insaneDuration ? isInsane(effects) ? indefiniteInstanity ? null : `${insaneDuration} ${localize_default()("CoC7.hours")}` : null : null;
  if (isInsane(effects) && !insanityDurationText && !indefiniteInstanity) indefiniteInstanity = true;
  if (!duration) boutDurationText = "";
  return {
    boutOfMadness: {
      active: isInABoutOfMadness(effects),
      realTime: isInABoutOfMadness(effects) ? boutRealTime : undefined,
      summary: isInABoutOfMadness(effects) ? !boutRealTime : undefined,
      duration: isInABoutOfMadness(effects) ? duration : undefined,
      durationText: boutDurationText ? boutDurationText : "",
      hint: isInABoutOfMadness(effects) ? `${localize_default()("CoC7.BoutOfMadness")}${boutDurationText ? ": " + boutDurationText : ""}` : localize_default()("CoC7.BoutOfMadness")
    },
    underlying: {
      active: isInsane(effects),
      indefintie: isInsane(effects) ? indefiniteInstanity : undefined,
      duration: insaneDuration,
      durationText: insanityDurationText ? insanityDurationText : "",
      hint: isInsane(effects) ? indefiniteInstanity ? localize_default()("CoC7.IndefiniteInsanity") : `${localize_default()("CoC7.TemporaryInsanity")} ${insanityDurationText ? insanityDurationText : ""}` : ""
    }
  };
} //#endregion

/* -------------------------------------------- */
//#region mov


function mov(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.mov) return null;
  if (data.data.attribs.mov.value == "auto") data.data.attribs.mov.auto = true;

  if (data.data.attribs.mov.auto) {
    let MOV;
    if (data.data.characteristics.dex.value < data.data.characteristics.siz.value && data.data.characteristics.str.value < data.data.characteristics.siz.value) MOV = 7;
    if (data.data.characteristics.dex.value >= data.data.characteristics.siz.value || data.data.characteristics.str.value >= data.data.characteristics.siz.value) MOV = 8;
    if (data.data.characteristics.dex.value > data.data.characteristics.siz.value && data.data.characteristics.str.value > data.data.characteristics.siz.value) MOV = 9; // Bug correction by AdmiralNyar.

    if (data.data.type != "creature") {
      if (!isNaN(parseInt(data.data.infos.age))) MOV = parseInt(data.data.infos.age) >= 40 ? MOV - Math.floor(parseInt(data.data.infos.age) / 10) + 3 : MOV;
    }

    return MOV;
  }

  return data.data.attribs.mov.value;
} //#endregion

/* -------------------------------------------- */
//#region db


function db(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.db) return null;
  if (data.data.attribs.db.value == "auto") data.data.attribs.db.auto = true;

  if (data.data.attribs.db.auto) {
    const sum = data.data.characteristics.str.value + data.data.characteristics.siz.value;
    if (sum > 164) return `${Math.floor((sum - 45) / 80)}D6`;
    if (sum < 65) return -2;
    if (sum < 85) return -1;
    if (sum < 125) return 0;
    if (sum < 165) return "1D4";
  }

  return data.data.attribs.db.value;
} //#endregion

/* -------------------------------------------- */
//#region build


function build(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.build) return null;
  if (data.data.attribs.build.value == "auto") data.data.attribs.build.auto = true;

  if (data.data.attribs.build.auto) {
    const sum = data.data.characteristics.str.value + data.data.characteristics.siz.value;
    if (sum > 164) return Math.floor((sum - 45) / 80) + 1;
    if (sum < 65) return -2;
    if (sum < 85) return -1;
    if (sum < 125) return 0;
    if (sum < 165) return 1;
  }

  return data.data.attribs.build.value;
} //#endregion

/* -------------------------------------------- */
//#region hpMax


function hpMax(data) {
  if (data.data.attribs.hp.auto) {
    if (data.data.characteristics.siz.value != null && data.data.characteristics.con.value != null) {
      var _data$flags$externala2;

      const maxHP = Math.floor((data.data.characteristics.siz.value + data.data.characteristics.con.value) / 10);
      return ((_data$flags$externala2 = data.flags.externalactor) !== null && _data$flags$externala2 !== void 0 && _data$flags$externala2.pulpRules || false) && "character" == data.type ? maxHP * 2 : maxHP;
    }

    if (data.data.attribs.hp.max) return parseInt(data.data.attribs.hp.max);
    return null;
  }

  return parseInt(data.data.attribs.hp.max);
} //#endregion

/* -------------------------------------------- */
//#region sanMax


function sanMax(data) {
  if (data.data.attribs.san.auto) {
    if (cthulhuMythos(data.items)) return 99 - cthulhuMythos(data.items);
    return 99;
  }

  return parseInt(data.data.attribs.san.max);
} //#endregion

/* -------------------------------------------- */
//#region cthulhuMythos


function cthulhuMythos(items) {
  const CM = cthulhuMythosSkill(items);

  if (CM) {
    const value = CM.value;
    if (value) return value;
    return parseInt(CM.data.value);
  }

  return 0;
}

function cthulhuMythosSkill(items) {
  let skillList = getSkillsByName(localize_default()(COC7.CthulhuMythosName), items);
  if (skillList.length != 0) return skillList[0];
  return null;
} //#endregion


function createTabHandlers() {
  return tabs.map(t => {
    return new Tabs(t);
  });
}
/* -------------------------------------------- */


Array.fromRange = function (n) {
  return Array.from(new Array(parseInt(n)).keys());
};
/**
 * @param  {Number} n
 */


function pos(n) {
  return n > 0 ? n : undefined;
}
/**
 * listens to the hook that tells it to start the population
 */


Hooks.on("showSheet", populateSheet);

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 98:
/***/ (function(module) {

module.exports = JSON.parse("{\"CoC7.title\":\"Call of Cthulhu 7h Edition (Unofficial)\",\"CHARAC.STR\":\"STR\",\"CHARAC.Strengh\":\"Strength\",\"CHARAC.Strength\":\"Strength\",\"CHARAC.CON\":\"CON\",\"CHARAC.Constitution\":\"Constitution\",\"CHARAC.SIZ\":\"SIZ\",\"CHARAC.Size\":\"Size\",\"CHARAC.DEX\":\"DEX\",\"CHARAC.Dexterity\":\"Dexterity\",\"CHARAC.APP\":\"APP\",\"CHARAC.Appearance\":\"Appearance\",\"CHARAC.INT\":\"INT\",\"CHARAC.Intelligence\":\"Intelligence\",\"CHARAC.POW\":\"POW\",\"CHARAC.Power\":\"Power\",\"CHARAC.EDU\":\"EDU\",\"CHARAC.Education\":\"Education\",\"CoC7.Name\":\"Name\",\"CoC7.Archetype\":\"Archetype\",\"CoC7.Occupation\":\"Occupation\",\"CoC7.Age\":\"Age\",\"CoC7.Sex\":\"Sex\",\"CoC7.Residence\":\"Residence\",\"CoC7.Birthplace\":\"Birthplace\",\"CoC7.Organization\":\"Organization\",\"CoC7.HitPoints\":\"Hit Points\",\"CoC7.HP\":\"HP\",\"CoC7.MagicPoints\":\"Magic Points\",\"CoC7.MP\":\"MP\",\"CoC7.SanityPoints\":\"Sanity Points\",\"CoC7.Sanity\":\"Sanity\",\"CoC7.SAN\":\"SAN\",\"CoC7.DailySanLoss\":\"Daily San loss\",\"CoC7.DailyLoss\":\"Daily loss\",\"CoC7.Luck\":\"Luck\",\"CoC7.Movement\":\"Movement\",\"CoC7.Mov\":\"Mov\",\"CoC7.BonusDamage\":\"Bonus Damage\",\"CoC7.DB\":\"DB\",\"CoC7.Build\":\"Build\",\"CoC7.Skills\":\"Skills\",\"CoC7.Skill\":\"Skill\",\"CoC7.Combat\":\"Combat\",\"CoC7.Possessions\":\"Gear & Cash\",\"CoC7.Background\":\"Backstory\",\"CoC7.Notes\":\"Notes\",\"CoC7.DailySanIconOver\":\"Reset\",\"CoC7.Prone\":\"Prone\",\"CoC7.Unconsious\":\"Unconsious\",\"CoC7.CriticalWounds\":\"Major Wound\",\"CoC7.Dying\":\"Dying\",\"CoC7.DyingCheck\":\"Check if you'll die immediately\",\"CoC7.Dead\":\"Dead\",\"CoC7.Resist\":\"Resist\",\"CoC7.UnderlyingInsanity\":\"Underlying insanity\",\"CoC7.TemporaryInsanity\":\"Temporary insanity\",\"CoC7.IndefiniteInsanity\":\"Indefinite insanity\",\"CoC7.UnlockActor\":\"Unlock Actor\",\"CoC7.LockActor\":\"Lock Actor\",\"CoC7.NpcRollCharacteristics\":\"Roll characteristics\",\"CoC7.NpcAvarageCharacteristics\":\"Average characteristics\",\"CoC7.NpcCharacteristicsFormula\":\"Formula\",\"CoC7.NpcCharacteristicsValues\":\"Values\",\"CoC7.language\":\"Language\",\"CoC7.Author\":\"Author\",\"CoC7.Date\":\"Date\",\"CoC7.Spells\":\"Spells\",\"CoC7.Spell\":\"Spell\",\"CoC7.Spells&Notes\":\"Spells & Notes\",\"CoC7.Effects\":\"Effects\",\"CoC7.Cost\":\"Cost\",\"CoC7.Source\":\"Source\",\"CoC7.SpellDetails\":\"Spell Details\",\"CoC7.Details\":\"Details\",\"CoC7.Other\":\"Other\",\"CoC7.rounds\":\"round(s)\",\"CoC7.hours\":\"hour(s)\",\"CoC7.RegularSuccess\":\"Regular success\",\"CoC7.HardSuccess\":\"Hard success\",\"CoC7.ExtremeSuccess\":\"Extreme success\",\"CoC7.CriticalSuccess\":\"Critical success\",\"CoC7.Fumble\":\"Fumble\",\"CoC7.Failure\":\"Failure\",\"CoC7.Malfunction\":\"{itemName} had a malfunction\",\"CoC7.Dice\":\"Dice\",\"CoC7.DiceModifierBonus\":\"bonus\",\"CoC7.DiceModifierPenalty\":\"penalty\",\"CoC7.BonusDice\":\"Bonus Dice\",\"CoC7.UnitsDie\":\"1 units die\",\"CoC7.TensDie\":\"tens die\",\"CoC7.TensDice\":\"tens dice\",\"CoC7.SuccessRequired\":\"{successRequired} success required.\",\"CoC7.Roll\":\"Roll\",\"CoC7.Pushing\":\"Pushing\",\"CoC7.PushSkill\":\"Push\",\"CoC7.PushedRoll\":\"(pushed roll)\",\"CoC7.SpendLuck\":\"Spend {luckNeededValue} Luck to pass\",\"CoC7.LuckSpent\":\"{luckAmount} luck spent to pass\",\"CoC7.LuckSpentAlt\":\"Luck spent\",\"CoC7.LuckError\":\"{actorName} didn't have enough luck to pass the check\",\"CoC7.check.AutoSuccess\":\"Auto. Success\",\"CoC7.check.AutoFailure\":\"Auto. Fail\",\"CoC7.RevealCheck\":\"Reveal check\",\"CoC7.RevealSanLoss\":\"Reveal SAN loss\",\"CoC7.check.ForcePass\":\"Force pass\",\"CoC7.check.ForceFail\":\"Force fail\",\"CoC7.check.FlagForDevelopment\":\"Award experience\",\"CoC7.IncreaseSuccessLevel\":\"Increase success\",\"CoC7.check.DecreaseSuccessLevel\":\"Decrease success\",\"CoC7.ConstitutionCheck\":\"Constitution check\",\"CoC7.BonusSelectionWindow\":\"Bonus selection window\",\"CoC7.BonusSelectionWindowNamed\":\"Select modifier for {name} check\",\"CoC7.SkillDetailsWindow\":\"Skill details window\",\"CoC7.RegularDifficulty\":\"regular\",\"CoC7.HardDifficulty\":\"hard\",\"CoC7.ExtremeDifficulty\":\"extreme\",\"CoC7.CriticalDifficulty\":\"critical\",\"CoC7.UnknownDifficulty\":\"unknown\",\"CoC7.RollDifficulty\":\"Roll Difficulty\",\"CoC7.RollDifficultyUnknown\":\"Blind\",\"CoC7.RollDifficultyRegular\":\"Regular\",\"CoC7.RollDifficultyHard\":\"Hard\",\"CoC7.RollDifficultyExtreme\":\"Extreme\",\"CoC7.RollDifficultyCritical\":\"Critical\",\"CoC7.RollResult.LuckSpendText\":\"{luckAmount} luck spend, {successLevel} success\",\"CoC7.RollDice\":\"Roll !\",\"CoC7.SuccesLevelHint\":\"{value} level(s) of success\",\"CoC7.FailureLevelHint\":\"Failed by {value} level(s)\",\"CoC7.CheckResult\":\"{name} check ({value}%) - {difficulty} difficulty\",\"CoC7.ItemCheckResult\":\"{item} - {skill} check ({value}%) - {difficulty} difficulty\",\"CoC7.CheckRawValue\":\"({rawvalue}%) - {difficulty} difficulty\",\"CoC7.BonusDamageRoll\":\"Rolling Damage Bonus\",\"CoC7.Type\":\"Type\",\"CoC7.FightBack\":\"Fighting Back\",\"CoC7.Dodge\":\"Dodging\",\"CoC7.Maneuver\":\"Maneuvering\",\"CoC7.OutNumbered\":\"Outnumbered\",\"CoC7.combatCard.surpised\":\"Surprised\",\"CoC7.combatCard.autoSuccess\":\"Auto. Success\",\"CoC7.Advantage\":\"Advantage\",\"CoC7.Disadvantage\":\"Disadvantage\",\"CoC7.TitleAdvantage\":\"Add 1 bonus die (target is prone, restrained...)\",\"CoC7.TitleDisadvantage\":\"Add 1 panalty die (for being prone, restrained...)\",\"CoC7.TitleOutNumbered\":\"Add 1 bonus dice for outnumbered target\",\"CoC7.TitleSurprised\":\"Add 1 bonus dice for surprised target\",\"CoC7.TitleAutoSuccess\":\"Attack automaticaly hit\",\"CoC7.WinnerRollDamage\":\"{name} won. Roll damage.\",\"CoC7.NoWinner\":\"Both side failed.\",\"CoC7.DodgeSuccess\":\"{name} dodged!\",\"CoC7.ManeuverSuccess\":\"{name} maneuver was successful.\",\"CoC7.InflictPain\":\"Inflict pain\",\"CoC7.combatCard.dive4cover\":\"Dive for Cover\",\"CoC7.rangeCombatCard.SingleShot\":\"Single Shot\",\"CoC7.rangeCombatCard.MultipleShots\":\"Multi. Shots\",\"CoC7.rangeCombatCard.Burst\":\"Burst Fire\",\"CoC7.rangeCombatCard.FullAuto\":\"Full Auto\",\"CoC7.rangeCombatCard.BaseRange\":\"Base range\",\"CoC7.rangeCombatCard.LongRange\":\"Long range\",\"CoC7.rangeCombatCard.ExtremeRange\":\"Xtrm range\",\"CoC7.rangeCombatCard.OutOfRange\":\"Out of range\",\"CoC7.rangeCombatCard.Cover\":\"Under cover\",\"CoC7.rangeCombatCard.PointBlankRange\":\"Point blank range\",\"CoC7.rangeCombatCard.BigTarget\":\"Big target\",\"CoC7.combatCard.SmallTarget\":\"Small target\",\"CoC7.rangeCombatCard.FastMovingTarget\":\"Fast\",\"CoC7.rangeCombatCard.InMelee\":\"In melee\",\"CoC7.rangeCombatCard.aiming\":\"Aiming\",\"CoC7.rangeCombatDamage\":\"{name} takes {total} points of damage\",\"CoC7.RollDamage\":\"Roll damage\",\"CoC7.BulletsFired\":\"Bullets fired\",\"CoC7.Shots\":\"Shots\",\"CoC7.Shoot\":\"Shoot\",\"CoC7.DropZone\":\"DropZone\",\"CoC7.Value\":\"Value\",\"CoC7.SkillValue\":\"Skill value\",\"CoC7.SkillBase\":\"Base\",\"CoC7.BaseSkillValue\":\"Base skill value\",\"CoC7.SkillExperience\":\"Experience\",\"CoC7.SkillArchetype\":\"Archetype\",\"CoC7.SkillOccupation\":\"Occupation\",\"CoC7.SkillPersonal\":\"Personal\",\"CoC7.SkillTotalExperience\":\"Experience points\",\"CoC7.SkillTotalArchetype\":\"Archetype points\",\"CoC7.SkillTotalOccupation\":\"Occupation points\",\"CoC7.SkillTotalPersonal\":\"Personal points\",\"CoC7.CharacteristicsPoints\":\"Characteristics points\",\"CoC7.TotalPoints\":\"Total Occupation points\",\"CoC7.ItemQuantity\":\"Quantity\",\"CoC7.ItemWeight\":\"Weight\",\"CoC7.ItemDetails\":\"Details\",\"CoC7.ItemDescription\":\"Description\",\"CoC7.Reload\":\"Left/Right click : add/remove 1 bullet\\nShift + Left/Right click : Reload/Empty\",\"CoC7.WeaponRange\":\"Range\",\"CoC7.WeaponDamage\":\"Damage\",\"CoC7.Weapon.BlastRadius\":\"Blast radius\",\"CoC7.WeaponMalfunction\":\"Malfunction\",\"CoC7.WeaponUsesPerRound\":\"Uses per Round\",\"CoC7.WeaponUsesPerRoundHint\":\"Attacks per round (1/3 : 1 attack every 3 rounds)\",\"CoC7.WeaponSheet.RoundsPerUse.Info\":\"How many rounds are needed to get the weapon ready to shoot\",\"CoC7.WeaponMax\":\"Max uses/round\",\"CoC7.BurstSize\":\"Burst size\",\"CoC7.BurstSizeHint\":\"How many bullets per burst\",\"CoC7.WeaponBulletsInMag\":\"Magazine\",\"CoC7.WeaponSpecial\":\"Special\",\"CoC7.ItemPrice\":\"Price\",\"CoC7.Armor\":\"Armor\",\"CoC7.EraNvct\":\"Invictus\",\"CoC7.EraDrka\":\"Dark Ages\",\"CoC7.EraDdts\":\"Down Darker Trails\",\"CoC7.EraGlit\":\"Cthulhu by Gaslight\",\"CoC7.Era1920\":\"1920s\",\"CoC7.EraPulp\":\"Pulp Cthulhu\",\"CoC7.EraMdrn\":\"Modern\",\"CoC7.Eras\":\"Cthulhu Flavors\",\"CoC7.SkillNoAdjustments\":\"No adjustment\",\"CoC7.SkillNoXpGain\":\"No XP gain\",\"CoC7.SkillSpecial\":\"Specialization\",\"CoC7.SkillRarity\":\"Uncommon\",\"CoC7.SkillPush\":\"Pushed\",\"CoC7.SkillCombat\":\"Combat\",\"CoC7.SkillFighting\":\"Fighting\",\"CoC7.SkillFirearm\":\"Firearms\",\"CoC7.WeaponRngd\":\"Range\",\"CoC7.WeaponProperyManeuver\":\"Maneuver\",\"CoC7.WeaponTouch\":\"Touch\",\"CoC7.WeaponImpl\":\"Impale\",\"CoC7.WeaponRare\":\"Rare\",\"CoC7.WeaponAhdb\":\"+DB/2\",\"CoC7.WeaponAddb\":\"+DB\",\"CoC7.WeaponSlnt\":\"Silent\",\"CoC7.WeaponXplv\":\"Explosives\",\"CoC7.WeaponBrst\":\"Burst\",\"CoC7.WeaponAuto\":\"Full-auto\",\"CoC7.WeaponSpcl\":\"Special\",\"CoC7.WeaponMont\":\"Mounted\",\"CoC7.WeaponDbrl\":\"Dual barrel\",\"CoC7.WeaponBlst\":\"Blast\",\"CoC7.WeaponStun\":\"Stun\",\"CoC7.Weapon.Property.Melee\":\"Melee\",\"CoC7.Weapon.Property.Thrown\":\"Thrown\",\"CoC7.Weapon.Property.Burn\":\"Burn\",\"CoC7.Weapon.Property.Shotgun\":\"Shotgun\",\"CoC7.ErrorItem\":\"Couldn't locate item\",\"CoC7.ErrorActor\":\"Couldn't locate actor\",\"CoC7.ErrorInvalidFormula\":\"{value} is not a valid formula\",\"CoC7.ErrorInvalid\":\"invalid\",\"CoC7.Validate\":\"Validate\",\"CoC7.Apply\":\"Apply\",\"CoC7.NewBioSectionName\":\"New Section\",\"CoC7.DodgeSkillName\":\"Dodge\",\"CoC7.CthulhuMythosName\":\"Cthulhu Mythos\",\"CoC7.CreditRatingSkillName\":\"Credit Rating\",\"CoC7.FightingSpecializationName\":\"Fighting\",\"CoC7.FirearmSpecializationName\":\"Firearms\",\"CoC7.AnySpecName\":\"Any\",\"CoC7.BoutOfMadnessName\":\"Bout of Madness\",\"CoC7.InsanityName\":\"Insanity\",\"CoC7.NewSkillName\":\"new skill\",\"CoC7.AddSkill\":\"Add skill\",\"CoC7.DevelopemmentPhase\":\"Developement Phase\",\"CoC7.SkillCantGainXp\":\"Skill can't gain XP automatically\",\"CoC7.SkillUnflagForDevelopement\":\"Unflag for developement\",\"CoC7.SkillFlagForDevelopement\":\"Flag for developement\",\"CoC7.RollAll4Dev\":\"Rolling all skills for development\",\"CoC7.SkillDetail\":\"Detail\",\"CoC7.EditSkill\":\"Edit skill\",\"CoC7.DeleteSkill\":\"Delete skill\",\"CoC7.RangeSkills\":\"Range Skills\",\"CoC7.MeleeSkills\":\"Melee Skills\",\"CoC7.NewItemName\":\"new item\",\"CoC7.AddItem\":\"Add item\",\"CoC7.EditItem\":\"Edit item\",\"CoC7.DeleteItem\":\"Delete Item\",\"CoC7.AddWeapon\":\"Add Weapon\",\"CoC7.NewWeaponName\":\"new weapon\",\"CoC7.EditWeapon\":\"Edit Weapon\",\"CoC7.DeleteWeapon\":\"Delete Weapon\",\"CoC7.MeleeWeapons\":\"Melee weapons\",\"CoC7.RangeWeapons\":\"Range weapons\",\"CoC7.WeaponName\":\"Name\",\"CoC7.WeaponSkill\":\"Skill\",\"CoC7.WeaponSkillAlt\":\"Alt-skill\",\"CoC7.Inventory\":\"Inventory\",\"CoC7.CharacterDevelopment\":\"Development\",\"CoC7.OccupationSkill\":\"Occupation Skill\",\"CoC7.ArchetypeSkill\":\"Archetype Skill\",\"CoC7.UseFormula\":\"Use dice roll\",\"CoC7.EnterFormula\":\"Enter formula\",\"CoC7.SanRollHint\":\"Roll san check for targets\",\"CoC7.SANCheckTitle\":\"SAN loss : {name} ({sanMin}/{sanMax})\",\"CoC7.NoSkill\":\"No skill\",\"CoC7.AddWeapontHint\":\"<p>{actor} doen't have a {weapon}.<br>Do you want to create one ?</p>\",\"CoC7.ManualCreditValues\":\"Manual Credit Values\",\"CoC7.MonetarySymbol\":\"Symbol :\",\"CoC7.MonetaryFactor\":\"Factor :\",\"CoC7.AutoCreditValues\":\"Toggle Automatic calculation\",\"CoC7.MonetarySpendingLevel\":\"Spending level :\",\"CoC7.MonetaryCash\":\"Cash :\",\"CoC7.MonetarySpent\":\"Spent :\",\"CoC7.MonetaryAssets\":\"Assets :\",\"CoC7.MonetaryAssetsDetails\":\"Assets details\",\"CoC7.PossessionsNotes\":\"Notes :\",\"CoC7.PossessionsNotesHolder\":\"Notes\",\"CoC7.BackgroundNewSection\":\"Add new section\",\"CoC7.BackgroundSectionNameHolder\":\"Enter section title\",\"CoC7.BackgroundDeleteSection\":\"Delete section\",\"CoC7.BackgroundSectionMoveUp\":\"Move Up\",\"CoC7.BackgroundSectionMoveDown\":\"Move Down\",\"CoC7.creatureFightingSkill\":\"Fighting\",\"CoC7.InvoluntaryAction\":\"Involuntary action\",\"CoC7.InvoluntaryActionPerfomed\":\"Involuntary action performed\",\"CoC7.SanityCheck\":\"Sanity check\",\"CoC7.IntCheck\":\"Intelligence check\",\"CoC7.NoSanLoss\":\"No SAN loss\",\"CoC7.SANLoss\":\"SAN Loss\",\"CoC7.SanityCheckPerformed\":\"You were exposed to a traumatic event\",\"CoC7.InvoluntaryActionPerformed\":\"You lost self-control for a moment.\",\"CoC7.SanityLost\":\"Sanity points lost\",\"CoC7.MemoryRepressed\":\"Your mind repressed the memory and buried it in your subconscious.\",\"CoC7.RememberEverything\":\"You remember EVERYTHING.\",\"CoC7.BootOfMadnesslasted\":\"Your bout of madness lasted\",\"CoC7.EnteringBoutOfMadness\":\"You experience a bout of madness\",\"CoC7.GrowingAccustomedToAwfulness\":\"Your getting used to horror. (Your sanity loss is limited).\",\"CoC7.ImmuneToAwfulness\":\"Your mind is immune to this awfulness. (No sanity loss).\",\"CoC7.InvestigatorPhobiaGained\":\"The investigator gain a phobia\",\"CoC7.PhobiaGained\":\"You gain a phobia\",\"CoC7.InvestigatorManiaGained\":\"The investigator gain a mania\",\"CoC7.ManiaGained\":\"You gain a mania\",\"CoC7.AlreadyUnderlyingInsanity\":\"Investigator already in an underlying insanity state.\",\"CoC7.IndefinitelyInsane\":\"You become indefinitely insane.\",\"CoC7.TemporaryInsane\":\"You become temporary insane.\",\"CoC7.GoodForAsylum\":\"You're good to be sent to the asylum\",\"CoC7.BoutOfMadness\":\"Bout of madness\",\"CoC7.BoutRealTime\":\"Bout of madness: Real time\",\"CoC7.BoutSummary\":\"Bout of madness: Summary\",\"CoC7.EndBoutOfMadness\":\"End bout of madness\",\"CoC7.InsanityType\":\"Type of insanity\",\"CoC7.Phobia\":\"Phobia\",\"CoC7.Mania\":\"Mania\",\"CoC7.MaxSanloss\":\"Max loss\",\"CoC7.AlreadyLost\":\"Already lost\",\"CoC7.CreatureMaxLoss\":\"Creature max loss\",\"CoC7.MaxLossToCreature\":\"Max loss to this creature\",\"CoC7.ResetCreatureSan\":\"Reset creature's history\",\"CoC7.ResetSpecieSan\":\"Reset specie's history\",\"CoC7.KeepData\":\"Keep creature's data\",\"CoC7.BootActive\":\"(Boot) Immune to SAN loss\",\"CoC7.AlreadyInABoot\":\"You're already suffering a boot of madness and are immune to further loos of sanity.\",\"CoC7.PlayerPermanentlyInsane\":\"Player Permanently Insane\",\"CoC7.MythosFirstEncounter\":\"Award Mythos Experience (+5% First time)\",\"CoC7.MythosAlreadyEncountered\":\"Award Mythos Experience (+1%)\",\"CoC7.DisregardMythosGain\":\"No Mythos gain\",\"CoC7.MythosGain\":\"Mythos gain\",\"CoC7.YouGainedCthulhuMythos\":\"Your mind quail before the unearthly manifestation (+{value}% Cthulhu Mythos)\",\"CoC7.CardResolved\":\"Card resolved\",\"CoC7.CMI\":\"CMI\",\"CoC7.CthuluMythosInitial\":\"Cthulhu Mythos Initial\",\"CoC7.CMF\":\"CMF\",\"CoC7.CthuluMythosFinal\":\"Cthulhu Mythos Final\",\"CoC7.Occult\":\"Occult\",\"CoC7.MythosRating\":\"Mythos Rating\",\"CoC7.StudyTime\":\"Study Time\",\"CoC7.SpellCastingTime\":\"Casting Time\",\"CoC7.SpellCastingCost\":\"Casting Cost\",\"CoC7.CallSpell\":\"Call\",\"CoC7.DismissSpell\":\"Dismiss\",\"CoC7.ContactSpell\":\"Contact\",\"CoC7.SummonSpell\":\"Summon\",\"CoC7.BindSpell\":\"Bind\",\"CoC7.EnchantmentSpell\":\"Enchant\",\"CoC7.GateSpell\":\"Gate\",\"CoC7.CombatSpell\":\"Combat\",\"CoC7.SpellType\":\"Spell Type\",\"CoC7.BookType\":\"Book Type\",\"CoC7.MythosBook\":\"Mythos Book\",\"CoC7.OccultBook\":\"Occult Tome\",\"CoC7.Unidentified\":\"Unidentified description\",\"CoC7.PulpTalents\":\"Pulp Talents\",\"CoC7.TalentType\":\"Talent Type\",\"CoC7.PhysicalTalent\":\"Physical\",\"CoC7.MentalTalent\":\"Mental\",\"CoC7.CombatTalent\":\"Combat\",\"CoC7.MiscellaneousTalent\":\"Miscellaneous\",\"CoC7.BasicTalent\":\"Basic\",\"CoC7.InsaneTalent\":\"Insane\",\"CoC7.OtherTalent\":\"Other\",\"CoC7.Items\":\"Items\",\"CoC7.Books\":\"Books\",\"CoC7.Status\":\"Status\",\"CoC7.Classic\":\"Classic\",\"CoC7.Lovecraftian\":\"Lovecraftian\",\"CoC7.Pulp\":\"Pulp\",\"CoC7.Modern\":\"Modern\",\"CoC7.Related\":\"Related Occupation\",\"CoC7.OccupationType\":\"Occupation Type\",\"CoC7.OccupationPoints\":\"Occupation Points\",\"CoC7.Selected\":\"Selected\",\"CoC7.Multiplier\":\"Multiplier\",\"CoC7.Optional\":\"Optional\",\"CoC7.Or\":\"or\",\"CoC7.Minimum\":\"Minimum\",\"CoC7.Maximum\":\"Maximum\",\"CoC7.CommonSkills\":\"Common skills\",\"CoC7.OptionSkills\":\"Optional skills groups\",\"CoC7.ChoiceNumber\":\"Options\",\"CoC7.Choose\":\"Number to choose from\",\"CoC7.Chosen\":\"Chosen\",\"CoC7.EmptySkillList\":\"Add a skill by dropping it here.\",\"CoC7.EmptyItemList\":\"Add an item by dropping it here.\",\"CoC7.PersonalSpeciality\":\"Number of personal or era specialty\",\"CoC7.AdditionalSkills\":\"Additional Skills\",\"CoC7.SkillSelectionWindow\":\"Select opional skills\",\"CoC7.SelectPersonalSkills\":\"Select {number} skill(s) as personal interest skills\",\"CoC7.ResetOccupation\":\"Reset Occupation\",\"CoC7.ResetOccupationHint\":\"Actor {name} already have an occupation. Do you want to reset it?\",\"CoC7.ResetArchetype\":\"Reset Archetype\",\"CoC7.ResetArchetypeHint\":\"Actor {name} already have an archetype. Do you want to reset it?\",\"CoC7.CreditOutOfRange\":\"Credit rating should be between {min} and {max}\",\"CoC7.BioSections\":\"Biography Sections\",\"CoC7.BioSectionName\":\"Biography Section Name\",\"CoC7.SpendPoints\":\"Allocate characteristics points\",\"CoC7.RollCharac\":\"Roll characteristics\",\"CoC7.SelectCoreCharac\":\"Select core characteristic\",\"CoC7.SkillSpecSelectTitle\":\"Select/create skill of {specialization} specialization\",\"CoC7.SkillSelectBase\":\"Select base value for skill {name}\",\"CoC7.SelectSkill\":\"Select an existing skill\",\"CoC7.CreateNewSkill\":\"Create a new skill\",\"CoC7.Characteristics\":\"Characteristics\",\"CoC7.EnableCharacteristics\":\"Enable characteristics\",\"CoC7.UsePoints\":\"Use points\",\"CoC7.UseRolls\":\"Use rolls\",\"CoC7.CoreCharacteristics\":\"Core Characteristics\",\"CoC7.BonusPoints\":\"Bonus Points\",\"CoC7.SuggestedOccupations\":\"Suggested Occupations\",\"CoC7.SuggestedTraits\":\"Suggested Traits\"}");

/***/ })

/******/ });