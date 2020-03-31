(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[t._v("#")]),t._v(" Parser")]),t._v(" "),s("p",[t._v("parsers are used to generate the language specific query from the abstract config object. They are also used to initialy populate the ui with values from an existing query.")]),t._v(" "),s("h2",{attrs:{id:"available-parsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-parsers"}},[t._v("#")]),t._v(" available Parsers")]),t._v(" "),s("ul",[s("li",[t._v("default (passes through internal state without modifications)")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://feathersjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FeathersJS"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"extend-a-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#extend-a-parser"}},[t._v("#")]),t._v(" extend a parser")]),t._v(" "),s("p",[t._v("the general concept of the parser is, that it loops about each input-group, generates a query from it and appends this query to the global query.\nIf you have a use-case that is not covered by an existing parser, you can extend it by passing a parser option to the input group.\nThis option must be an Object with two functions specified:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("parser"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("generator")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filterGroupConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* query */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("filterGroupConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* values { inputId: value } */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("The "),s("code",[t._v("filterGroupConfig")]),t._v(" parameter contains an config object of the filter group.")]),t._v(" "),s("li",[s("code",[t._v("values")]),t._v(" is an Object, containing the input values. You can access the value by "),s("code",[t._v("values[filterGroupConfig[i].id]")]),t._v(".")])]),t._v(" "),s("h2",{attrs:{id:"custom-parser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#custom-parser"}},[t._v("#")]),t._v(" custom parser")])])}),[],!1,null,null,null);a.default=r.exports}}]);