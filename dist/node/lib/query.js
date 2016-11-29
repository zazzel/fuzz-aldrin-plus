"use strict";function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function coreChars(r,e){return null==e&&(e=opt_char_re),r.replace(e,"")}function truncatedUpperCase(r){var e="",t=!0,o=!1,a=void 0;try{for(var n,s=r[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var h=n.value;e+=h.toUpperCase()[0]}}catch(r){o=!0,a=r}finally{try{!t&&s.return&&s.return()}finally{if(o)throw a}}return e}function getCharCodes(r){for(var e=r.length,t=-1,o=[];++t<e;)o[r.charCodeAt(t)]=!0;return o}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Query=void 0;var _pathScorer=require("./pathScorer"),Query=exports.Query=function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.optCharRegEx,a=t.pathSeparator;_classCallCheck(this,r),null!=e&&e.length&&(this.query=e,this.query_lw=e.toLowerCase(),this.core=coreChars(e,o),this.core_lw=this.core.toLowerCase(),this.core_up=truncatedUpperCase(this.core),this.depth=(0,_pathScorer.countDir)(e,e.length,a),this.ext=(0,_pathScorer.getExtension)(this.query_lw),this.charCodes=getCharCodes(this.query_lw))},opt_char_re=/[ _\-:\/\\]/g;