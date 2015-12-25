// The `quickEach` method will pass a non-unique jQuery instance
// to the callback meaning that there will be no need to instantiate
// a fresh jQuery instance on each iteration. Most of the slow-down
// inherent in jQuery's native iterator method (`each`) is the constant
// need to have access to jQuery's methods, and so most developers
// see constructing multiple instances as no issue... E.g.
//     $(...).each(function(){ $(this)... $(this)... $(this)... });
// A better approach would be `quickEach`.

jQuery.fn.quickEach = (function(){var jq = jQuery([1]); return function(c) {var i = -1, el, len = this.length; try {while (++i < len && (el = jq[0] = this[i]) && c.call(jq, i, el) !== false ); } catch(e){delete jq[0]; throw e; } delete jq[0]; return this; }; }());