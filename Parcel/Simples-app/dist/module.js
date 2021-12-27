import {jsx as $2SSWc$jsx, jsxs as $2SSWc$jsxs} from "react/jsx-runtime";
import $2SSWc$reactdom from "react-dom";
import "react";
import {BrowserRouter as $2SSWc$BrowserRouter, Link as $2SSWc$Link, Route as $2SSWc$Route} from "react-router-dom";







function $b8f0187dfd4f8c6e$export$2e2bcd8739ae039() {
    document.title = 'Home';
    return(/*#__PURE__*/ $2SSWc$jsx("h1", {
        children: " Home "
    }));
}



function $6c3fb752c746304e$export$2e2bcd8739ae039() {
    document.title = 'Company';
    return(/*#__PURE__*/ $2SSWc$jsx("h1", {
        children: " Company "
    }));
}



function $e0764c46c81e9f71$export$2e2bcd8739ae039() {
    document.title = 'Contact';
    return(/*#__PURE__*/ $2SSWc$jsx("h1", {
        children: " Contact "
    }));
}


function $64d1770f4eb3bc13$export$2e2bcd8739ae039() {
    return(/*#__PURE__*/ $2SSWc$jsxs($2SSWc$BrowserRouter, {
        children: [
            /*#__PURE__*/ $2SSWc$jsx("header", {
                className: "Header",
                children: /*#__PURE__*/ $2SSWc$jsx("a", {
                    children: /*#__PURE__*/ $2SSWc$jsx($2SSWc$Link, {
                        to: "/",
                        children: " React App "
                    })
                })
            }),
            /*#__PURE__*/ $2SSWc$jsx("section", {
                className: "Section",
                children: /*#__PURE__*/ $2SSWc$jsxs("div", {
                    class: "section-container",
                    children: [
                        /*#__PURE__*/ $2SSWc$jsx($2SSWc$Route, {
                            path: "/",
                            exact: true,
                            component: $b8f0187dfd4f8c6e$export$2e2bcd8739ae039
                        }),
                        /*#__PURE__*/ $2SSWc$jsx($2SSWc$Route, {
                            path: "/company",
                            component: $6c3fb752c746304e$export$2e2bcd8739ae039
                        }),
                        /*#__PURE__*/ $2SSWc$jsx($2SSWc$Route, {
                            path: "/contact",
                            component: $e0764c46c81e9f71$export$2e2bcd8739ae039
                        })
                    ]
                })
            }),
            /*#__PURE__*/ $2SSWc$jsx("footer", {
                className: "Footer"
            })
        ]
    }));
}


const $c38b013c361dbfdf$var$app = document.getElementById("App");
$2SSWc$reactdom.render(/*#__PURE__*/ $2SSWc$jsx($64d1770f4eb3bc13$exports.App, {
}), $c38b013c361dbfdf$var$app);


//# sourceMappingURL=module.js.map
