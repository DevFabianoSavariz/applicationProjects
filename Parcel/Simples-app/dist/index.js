var $k52p8$reactjsxruntime = require("react/jsx-runtime");
var $k52p8$reactdom = require("react-dom");
require("react");
var $k52p8$reactrouterdom = require("react-router-dom");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






function $dccfb1e656d26511$export$2e2bcd8739ae039() {
    document.title = 'Home';
    return(/*#__PURE__*/ $k52p8$reactjsxruntime.jsx("h1", {
        children: " Home "
    }));
}



function $beba7ef3d6056f67$export$2e2bcd8739ae039() {
    document.title = 'Company';
    return(/*#__PURE__*/ $k52p8$reactjsxruntime.jsx("h1", {
        children: " Company "
    }));
}



function $f8645e5e45570b09$export$2e2bcd8739ae039() {
    document.title = 'Contact';
    return(/*#__PURE__*/ $k52p8$reactjsxruntime.jsx("h1", {
        children: " Contact "
    }));
}


function $48e5d011fd365590$export$2e2bcd8739ae039() {
    return(/*#__PURE__*/ $k52p8$reactjsxruntime.jsxs($k52p8$reactrouterdom.BrowserRouter, {
        children: [
            /*#__PURE__*/ $k52p8$reactjsxruntime.jsx("header", {
                className: "Header",
                children: /*#__PURE__*/ $k52p8$reactjsxruntime.jsx("a", {
                    children: /*#__PURE__*/ $k52p8$reactjsxruntime.jsx($k52p8$reactrouterdom.Link, {
                        to: "/",
                        children: " React App "
                    })
                })
            }),
            /*#__PURE__*/ $k52p8$reactjsxruntime.jsx("section", {
                className: "Section",
                children: /*#__PURE__*/ $k52p8$reactjsxruntime.jsxs("div", {
                    class: "section-container",
                    children: [
                        /*#__PURE__*/ $k52p8$reactjsxruntime.jsx($k52p8$reactrouterdom.Route, {
                            path: "/",
                            exact: true,
                            component: $dccfb1e656d26511$export$2e2bcd8739ae039
                        }),
                        /*#__PURE__*/ $k52p8$reactjsxruntime.jsx($k52p8$reactrouterdom.Route, {
                            path: "/company",
                            component: $beba7ef3d6056f67$export$2e2bcd8739ae039
                        }),
                        /*#__PURE__*/ $k52p8$reactjsxruntime.jsx($k52p8$reactrouterdom.Route, {
                            path: "/contact",
                            component: $f8645e5e45570b09$export$2e2bcd8739ae039
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $k52p8$reactjsxruntime.jsx("footer", {
                className: "Footer"
            })
        ]
    }));
}


var $6be4b30feeb09703$var$app = document.getElementById("App");
($parcel$interopDefault($k52p8$reactdom)).render(/*#__PURE__*/ $k52p8$reactjsxruntime.jsx($48e5d011fd365590$exports.App, {
}), $6be4b30feeb09703$var$app);


//# sourceMappingURL=index.js.map
