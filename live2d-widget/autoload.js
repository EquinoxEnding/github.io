{\rtf1\ansi\deff0\nouicompat{\fonttbl{\f0\fnil\fcharset134 \'cb\'ce\'cc\'e5;}{\f1\fnil SimSun;}}
{\*\generator Riched20 10.0.17134}\viewkind4\uc1 
\pard\f0\fs22 const live2d_path = "/live2d-widget/";\par
//const live2d_path = "./";\par
\par
$("<link>").attr(\{href: live2d_path + "waifu.css", rel: "stylesheet", type: "text/css"\}).appendTo("head");\par
//waifu.css\'e7\'9a\'84\'e7\'bb\'9d\'e5\'af\'b9\'e8\'b7\'af\'e5\'be?\par
$.ajax(\{\par
\tab url: live2d_path + "live2d.min.js",\par
\tab dataType: "script",\par
\tab cache: true,\par
\tab async: false\par
\});\par
//live2d.min.js\'e7\'9a\'84\'e7\'bb\'9d\'e5\'af\'b9\'e8\'b7\'af\'e5\'be?\par
$.ajax(\{\par
\tab url: live2d_path + "waifu-tips.js",\par
\tab dataType: "script",\par
\tab cache: true,\par
\tab async: false\par
\});\par
//waifu-tips.js\'e7\'9a\'84\'e7\'bb\'9d\'e5\'af\'b9\'e8\'b7\'af\'e5\'be?\par
//\'e5\'88\'9d\'e5\'a7\'8b\'e5\'8c\'96\'e7\'9c\'8b\'e6\'9d\'bf\'e5\f1\u-6210?\f0\'ef\'bc\'8c\'e4\'bc\'9a\'e8\'87\'aa\'e5\'8a\'a8\'e5\'8a\'a0\'e8\'bd\'bd\'e6\'8c\'87\'e5\'ae\'9a\'e7\'9b\'ae\'e5\'bd\'95\'e4\'b8\'8b\'e7\'9a\'84waifu-tips.json\par
$(window).on("load", function() \{\par
\tab initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");\par
\});\par
//initWidget\'e7\'ac\'ac\'e4\'b8\'80\'e4\'b8\'aa\'e5\'8f\'82\'e6\'95\'b0\'e4\'b8\'bawaifu-tips.json\'e7\'9a\'84\'e7\'bb\'9d\'e5\'af\'b9\'e8\'b7\'af\'e5\'be?//\'e7\'ac\'ac\'e4\'ba\'8c\'e4\'b8\'aa\'e5\'8f\'82\'e6\'95\'b0\'e4\'b8\'baapi\'e5\'9c\'b0\'e5\'9d\'80\'ef\'bc\'88\'e6\'97\'a0\'e9\'9c\lang1033\'80\'e4\'bf\'ae\'e6\'94\'b9\'ef\'bc?//api\'e5\'90\'8e\'e7\'ab\'af\'e5\'8f\'af\'e8\'87\'aa\'e8\'a1\'8c\'e6\'90\'ad\'e5\'bb\'ba\'ef\'bc\'8c\'e5\'8f\'82\'e8\'80\'83\'68ttps://github.com/fghrsh/live2d_api\par
\lang0\par
}
 