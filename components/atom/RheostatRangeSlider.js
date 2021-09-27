function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

import { connectRange } from "react-instantsearch-dom";
import PropTypes from "prop-types";
import Rheostat from "rheostat";


var RheostatRangeSlider = function (_Component) {
    _inherits(RheostatRangeSlider, _Component);

    function RheostatRangeSlider() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RheostatRangeSlider);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RheostatRangeSlider.__proto__ || Object.getPrototypeOf(RheostatRangeSlider)).call.apply(_ref, [this].concat(args))), _this), _this.state = { currentValues: { min: _this.props.min, max: _this.props.max } }, _this.componentWillReceiveProps = function (sliderState) {
            if (sliderState.canRefine) {
                var _sliderState$currentR = sliderState.currentRefinement,
                    min = _sliderState$currentR.min,
                    max = _sliderState$currentR.max;

                _this.setState({
                    currentValues: {
                        min: min,
                        max: max
                    }
                });
            }
        }, _this.onValuesUpdated = function (sliderState) {
            var _this$props = _this.props,
                min = _this$props.min,
                max = _this$props.max;

            _this.setState({
                currentValues: {
                    min: Math.min(Math.max(sliderState.values[0], min), max),
                    max: Math.max(Math.min(sliderState.values[1], max), min)
                }
            });
        }, _this.onChange = function (sliderState) {
            var _this$props2 = _this.props,
                min = _this$props2.min,
                max = _this$props2.max;

            if (_this.props.currentRefinement.min !== sliderState.values[0] || _this.props.currentRefinement.max !== sliderState.values[1]) {
                var computedMin = Math.min(Math.max(sliderState.values[0], min), max);
                var computedMax = Math.max(Math.min(sliderState.values[1], max), min);
                if (computedMin === computedMax && computedMin > min) computedMin -= 1;else if (computedMin === computedMax && computedMax < max) computedMax += 1;

                _this.props.refine({
                    min: computedMin,
                    max: computedMax
                });
            }
        }, _this.render = function () {
            var _this$props3 = _this.props,
                min = _this$props3.min,
                max = _this$props3.max,
                currentRefinement = _this$props3.currentRefinement;
            var currentValues = _this.state.currentValues;

            return min !== max ? React.createElement(
                "div",
                { className: "ais-RheostatRangeSlider-wrapper" },
                React.createElement(
                    "div",
                    { className: "ais-RheostatRangeSlider-value" },
                    currentValues.min
                ),
                React.createElement(Rheostat, {
                    className: "ais-RheostatRangeSlider",
                    min: min,
                    max: max,
                    snap: true,
                    values: [currentRefinement.min, currentRefinement.max],
                    onChange: _this.onChange,
                    onValuesUpdated: _this.onValuesUpdated
                }),
                React.createElement(
                    "div",
                    { className: "ais-RheostatRangeSlider-value" },
                    currentValues.max
                )
            ) : React.createElement(
                "div",
                { className: "ais-RheostatRangeSlider-item" },
                "No range to display."
            );
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return RheostatRangeSlider;
}(Component);

RheostatRangeSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.object,
    refine: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired
};


export default connectRange(RheostatRangeSlider);