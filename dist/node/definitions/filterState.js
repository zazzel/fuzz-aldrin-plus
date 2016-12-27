"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterState = exports.FilterState = function FilterState() {
    _classCallCheck(this, FilterState);

    // Filter result mechanic
    this.isPending = true;
    this.cancelRequest = false;
    this.discardResults = false;
    this.count = 0;

    // Specific to scoring
    this.scoredCandidates = null;
    this.scoreProvider = null;
    this.accessor = null;
};

/**
 * @typedef {Object} FilterResult
 *
 * @method  cancel - stop scoring and return no results.
 * @method  isCanceled - has the filter been canceled.
 * @method  isPending - filter is in progress or haven't started.
 * @method  getProgress - get the count of processed elements.
 *
 */

var FilterResult =

/**
 * @param {FilterState} state
 */

exports.FilterResult = function FilterResult(state) {
    _classCallCheck(this, FilterResult);

    // Closure over the internal state to avoid manual changes.

    this.cancel = function cancel() {
        var keepResults = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        state.isPending = false;
        state.cancelRequest = true;
        state.discardResults = !keepResults;
    };

    this.isCanceled = function isCanceled() {
        return state.cancelRequest;
    };

    this.isPending = function isPending() {
        return state.isPending;
    };

    this.getProgress = function getProgress() {
        return state.count;
    };
};