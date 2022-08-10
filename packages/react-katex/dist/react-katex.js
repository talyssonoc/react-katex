(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("react"), require("prop-types"), require("katex"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "react",
        "prop-types",
        "katex"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {}, global.react, global.propTypes, global.katex);
})(this, function(exports, _react, _propTypes, _katex) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        BlockMath: ()=>BlockMath,
        InlineMath: ()=>InlineMath
    });
    _react = /*#__PURE__*/ _interopRequireWildcard(_react);
    _propTypes = /*#__PURE__*/ _interopRequireDefault(_propTypes);
    _katex = /*#__PURE__*/ _interopRequireDefault(_katex);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
            return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
            return {
                default: obj
            };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var key in obj){
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        if (cache) {
            cache.set(obj, newObj);
        }
        return newObj;
    }
    const createMathComponent = (Component, { displayMode  })=>{
        const MathComponent = ({ children , errorColor , math , renderError  })=>{
            const formula = math !== null && math !== void 0 ? math : children;
            const { html , error  } = (0, _react.useMemo)(()=>{
                try {
                    const html = _katex.default.renderToString(formula, {
                        displayMode,
                        errorColor,
                        throwOnError: !!renderError
                    });
                    return {
                        html,
                        error: undefined
                    };
                } catch (error) {
                    if (error instanceof _katex.default.ParseError || error instanceof TypeError) {
                        return {
                            error
                        };
                    }
                    throw error;
                }
            }, [
                formula,
                errorColor,
                renderError
            ]);
            if (error) {
                return renderError ? renderError(error) : /*#__PURE__*/ _react.default.createElement(Component, {
                    html: `${error.message}`
                });
            }
            return /*#__PURE__*/ _react.default.createElement(Component, {
                html: html
            });
        };
        MathComponent.propTypes = {
            children: _propTypes.default.string,
            errorColor: _propTypes.default.string,
            math: _propTypes.default.string,
            renderError: _propTypes.default.func
        };
        return MathComponent;
    };
    const InternalBlockMath = ({ html  })=>{
        return /*#__PURE__*/ _react.default.createElement("div", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalBlockMath.propTypes = {
        html: _propTypes.default.string.isRequired
    };
    const InternalInlineMath = ({ html  })=>{
        return /*#__PURE__*/ _react.default.createElement("span", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalInlineMath.propTypes = {
        html: _propTypes.default.string.isRequired
    };
    const BlockMath = createMathComponent(InternalBlockMath, {
        displayMode: true
    });
    const InlineMath = createMathComponent(InternalInlineMath, {
        displayMode: false
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEthVGVYIGZyb20gJ2thdGV4JztcblxuY29uc3QgY3JlYXRlTWF0aENvbXBvbmVudCA9IChDb21wb25lbnQsIHsgZGlzcGxheU1vZGUgfSkgPT4ge1xuICBjb25zdCBNYXRoQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4sIGVycm9yQ29sb3IsIG1hdGgsIHJlbmRlckVycm9yIH0pID0+IHtcbiAgICBjb25zdCBmb3JtdWxhID0gbWF0aCA/PyBjaGlsZHJlbjtcblxuICAgIGNvbnN0IHsgaHRtbCwgZXJyb3IgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IEthVGVYLnJlbmRlclRvU3RyaW5nKGZvcm11bGEsIHtcbiAgICAgICAgICBkaXNwbGF5TW9kZSxcbiAgICAgICAgICBlcnJvckNvbG9yLFxuICAgICAgICAgIHRocm93T25FcnJvcjogISFyZW5kZXJFcnJvcixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHsgaHRtbCwgZXJyb3I6IHVuZGVmaW5lZCB9O1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgS2FUZVguUGFyc2VFcnJvciB8fCBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgICB9LCBbZm9ybXVsYSwgZXJyb3JDb2xvciwgcmVuZGVyRXJyb3JdKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIHJlbmRlckVycm9yID8gcmVuZGVyRXJyb3IoZXJyb3IpIDogPENvbXBvbmVudCBodG1sPXtgJHtlcnJvci5tZXNzYWdlfWB9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiA8Q29tcG9uZW50IGh0bWw9e2h0bWx9IC8+O1xuICB9O1xuXG4gIE1hdGhDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVycm9yQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbWF0aDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICByZW5kZXJFcnJvcjogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgcmV0dXJuIE1hdGhDb21wb25lbnQ7XG59O1xuXG5jb25zdCBJbnRlcm5hbEJsb2NrTWF0aCA9ICh7IGh0bWwgfSkgPT4ge1xuICByZXR1cm4gPGRpdiBkYXRhLXRlc3RpZD1cInJlYWN0LWthdGV4XCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBodG1sIH19IC8+O1xufTtcblxuSW50ZXJuYWxCbG9ja01hdGgucHJvcFR5cGVzID0ge1xuICBodG1sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbnRlcm5hbElubGluZU1hdGggPSAoeyBodG1sIH0pID0+IHtcbiAgcmV0dXJuIDxzcGFuIGRhdGEtdGVzdGlkPVwicmVhY3Qta2F0ZXhcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XG59O1xuXG5JbnRlcm5hbElubGluZU1hdGgucHJvcFR5cGVzID0ge1xuICBodG1sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgY29uc3QgQmxvY2tNYXRoID0gY3JlYXRlTWF0aENvbXBvbmVudChJbnRlcm5hbEJsb2NrTWF0aCwgeyBkaXNwbGF5TW9kZTogdHJ1ZSB9KTtcbmV4cG9ydCBjb25zdCBJbmxpbmVNYXRoID0gY3JlYXRlTWF0aENvbXBvbmVudChJbnRlcm5hbElubGluZU1hdGgsIHsgZGlzcGxheU1vZGU6IGZhbHNlIH0pO1xuIl0sIm5hbWVzIjpbIkJsb2NrTWF0aCIsIklubGluZU1hdGgiLCJjcmVhdGVNYXRoQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiZGlzcGxheU1vZGUiLCJNYXRoQ29tcG9uZW50IiwiY2hpbGRyZW4iLCJlcnJvckNvbG9yIiwibWF0aCIsInJlbmRlckVycm9yIiwiZm9ybXVsYSIsImh0bWwiLCJlcnJvciIsInVzZU1lbW8iLCJLYVRlWCIsInJlbmRlclRvU3RyaW5nIiwidGhyb3dPbkVycm9yIiwidW5kZWZpbmVkIiwiUGFyc2VFcnJvciIsIlR5cGVFcnJvciIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiSW50ZXJuYWxCbG9ja01hdGgiLCJkaXYiLCJkYXRhLXRlc3RpZCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaXNSZXF1aXJlZCIsIkludGVybmFsSW5saW5lTWF0aCIsInNwYW4iXSwibWFwcGluZ3MiOiJBQUFBO21HQUErQixPQUFPLFdBQ2hCLFlBQVksV0FDaEIsT0FBTzs7O1FBRk0sT0FBTztRQUNoQixZQUFZO1FBQ2hCLE9BQU87Ozs7Ozs7Ozs7Ozs7OztRQXlEWkEsU0FBUyxNQUFUQSxTQUFTO1FBQ1RDLFVBQVUsTUFBVkEsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXhEdkIsTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFLEVBQUVDLFdBQVcsQ0FBQSxFQUFFLEdBQUs7UUFDMUQsTUFBTUMsYUFBYSxHQUFHLENBQUMsRUFBRUMsUUFBUSxDQUFBLEVBQUVDLFVBQVUsQ0FBQSxFQUFFQyxJQUFJLENBQUEsRUFBRUMsV0FBVyxDQUFBLEVBQUUsR0FBSztZQUNyRSxNQUFNQyxPQUFPLEdBQUdGLElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLEdBQUlGLFFBQVEsQUFBQztZQUVqQyxNQUFNLEVBQUVLLElBQUksQ0FBQSxFQUFFQyxL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

//# sourceMappingURL=react-katex.js.map