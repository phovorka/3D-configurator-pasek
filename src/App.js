"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("@google/model-viewer");
require("./App.css"); // Ujisti se, že máš vlastní styly v tomto souboru
var WatchConfigurator = function () {
    var modelRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var model = modelRef.current;
        if (model) {
            model.addEventListener('load', function () {
                console.log('Model loaded');
            });
        }
    }, []);
    var changeColor = function (color) {
        var _a;
        var model = modelRef.current;
        if (model) {
            var material = (_a = model.model) === null || _a === void 0 ? void 0 : _a.materials[2];
            if (material) {
                material.pbrMetallicRoughness.setBaseColorFactor(getColorFactor(color));
            }
        }
    };
    var getColorFactor = function (color) {
        var colors = {
            black: [0, 0, 0, 1],
            brown: [0.6, 0.3, 0.1, 1],
            blue: [0, 0, 1, 1],
            red: [1, 0, 0, 1],
        };
        return colors[color] || [1, 1, 1, 1];
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "watch-configurator", children: [(0, jsx_runtime_1.jsx)("h3", { className: "title", children: "3D Konfigur\u00E1tor p\u00E1sku" }), (0, jsx_runtime_1.jsx)("model-viewer", { ref: modelRef, src: "https://cdn.jsdelivr.net/gh/phovorka/GLB/watch1.glb", "camera-controls": true, "auto-rotate": true }), (0, jsx_runtime_1.jsx)("div", { className: "color-picker", children: ['black', 'brown', 'blue', 'red'].map(function (color) { return ((0, jsx_runtime_1.jsx)("button", { className: "color-button", style: { backgroundColor: color }, onClick: function () { return changeColor(color); } }, color)); }) })] }));
};
exports.default = WatchConfigurator;
