(self.webpackChunk=self.webpackChunk||[]).push([[517],{1768:(e,n,a)=>{var t=a(7570);t.registerLanguage("cpp",a(4006)),t.registerLanguage("bash",a(1519)),t.registerLanguage("css",a(8914)),t.registerLanguage("markdown",a(3839)),t.registerLanguage("htmlbars",a(3202)),t.registerLanguage("java",a(7721)),t.registerLanguage("javascript",a(6344)),t.registerLanguage("php",a(3306)),t.registerLanguage("python",a(308)),t.registerLanguage("shell",a(9514)),e.exports=t},7570:(e,n)=>{var a,t,r;t=function(e){var n=!1,a=[],t=Object.keys,r=Object.create(null),i=Object.create(null),s=!0,l=/^(no-?highlight|plain|text)$/i,o=/\blang(?:uage)?-([\w-]+)\b/i,c=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,u="</span>",g="Could not find the language '{}', did you forget to load/include a language module?",d={hideUpgradeWarningAcceptNoSupportOrSecurityUpdates:!1,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},_="of and for in not or if then".split(" ");function E(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function b(e){return e.nodeName.toLowerCase()}function f(e){return l.test(e)}function p(e){var n,a={},t=Array.prototype.slice.call(arguments,1);for(n in e)a[n]=e[n];return t.forEach((function(e){for(n in e)a[n]=e[n]})),a}function m(e){var n=[];return function e(a,t){for(var r=a.firstChild;r;r=r.nextSibling)3===r.nodeType?t+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:t,node:r}),t=e(r,t),b(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:t,node:r}));return t}(e,0),n}function h(e){return!!e&&(e.endsWithParent||h(e.starts))}function N(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((function(n){return p(e,{variants:null},n)}))),e.cached_variants?e.cached_variants:h(e)?[p(e,{starts:e.starts?p(e.starts):null})]:Object.isFrozen(e)?[p(e)]:[e]}function O(e,n){return n?Number(n):(a=e,-1!=_.indexOf(a.toLowerCase())?0:1);var a}function v(e){function n(e){return e&&e.source||e}function a(a,t){return new RegExp(n(a),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}if(e.contains&&-1!=e.contains.indexOf("self")){if(!s)throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");e.contains=e.contains.filter((function(e){return"self"!=e}))}!function r(i,s){i.compiled||(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords&&(i.keywords=function(e,n){var a={};return"string"==typeof e?r("keyword",e):t(e).forEach((function(n){r(n,e[n])})),a;function r(e,t){n&&(t=t.toLowerCase()),t.split(" ").forEach((function(n){var t=n.split("|");a[t[0]]=[e,O(t[0],t[1])]}))}}(i.keywords,e.case_insensitive)),i.lexemesRe=a(i.lexemes||/\w+/,!0),s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=a(i.begin),i.endSameAsBegin&&(i.end=i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=a(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end)),i.illegal&&(i.illegalRe=a(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map((function(e){return N("self"===e?i:e)}))),i.contains.forEach((function(e){r(e,i)})),i.starts&&r(i.starts,s),i.terminators=function(e){var t,r,i={},s=[],l={},o=1;function c(e,n){i[o]=e,s.push([e,n]),o+=new RegExp(n.toString()+"|").exec("").length-1+1}for(var u=0;u<e.contains.length;u++)c(r=e.contains[u],r.beginKeywords?"\\.?(?:"+r.begin+")\\.?":r.begin);e.terminator_end&&c("end",e.terminator_end),e.illegal&&c("illegal",e.illegal);var g=s.map((function(e){return e[1]}));return t=a(function(e,a){for(var t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,r=0,i="",s=0;s<e.length;s++){var l=r+=1,o=n(e[s]);for(s>0&&(i+="|"),i+="(";o.length>0;){var c=t.exec(o);if(null==c){i+=o;break}i+=o.substring(0,c.index),o=o.substring(c.index+c[0].length),"\\"==c[0][0]&&c[1]?i+="\\"+String(Number(c[1])+l):(i+=c[0],"("==c[0]&&r++)}i+=")"}return i}(g),!0),l.lastIndex=0,l.exec=function(n){var a;if(0===s.length)return null;t.lastIndex=l.lastIndex;var r=t.exec(n);if(!r)return null;for(var o=0;o<r.length;o++)if(null!=r[o]&&null!=i[""+o]){a=i[""+o];break}return"string"==typeof a?(r.type=a,r.extra=[e.illegal,e.terminator_end]):(r.type="begin",r.rule=a),r},l}(i))}(e)}function M(e,a,t,i){d.hideUpgradeWarningAcceptNoSupportOrSecurityUpdates||"object"==typeof process&&"object"==typeof process.env&&process.env.HLJS_HIDE_UPGRADE_WARNING||n||(n=!0,console.log("Version 9 of Highlight.js has reached EOL and is no longer supported.\nPlease upgrade or ask whatever dependency you are using to upgrade.\nhttps://github.com/highlightjs/highlight.js/issues/2877"));var l=a;function o(e,n){if(function(e,n){var a=e&&e.exec(n);return a&&0===a.index}(e.endRe,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}if(e.endsWithParent)return o(e.parent,n)}function c(e,n){var a=N.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(a)&&e.keywords[a]}function _(e,n,a,t){if(!a&&""===n)return"";if(!e)return n;var r='<span class="'+(t?"":d.classPrefix);return(r+=e+'">')+n+(a?"":u)}function b(){S+=null!=w.subLanguage?function(){var e="string"==typeof w.subLanguage;if(e&&!r[w.subLanguage])return E(R);var n=e?M(w.subLanguage,R,!0,C[w.subLanguage]):y(R,w.subLanguage.length?w.subLanguage:void 0);return w.relevance>0&&(x+=n.relevance),e&&(C[w.subLanguage]=n.top),_(n.language,n.value,!1,!0)}():function(){var e,n,a,t;if(!w.keywords)return E(R);for(t="",n=0,w.lexemesRe.lastIndex=0,a=w.lexemesRe.exec(R);a;)t+=E(R.substring(n,a.index)),(e=c(w,a))?(x+=e[1],t+=_(e[0],E(a[0]))):t+=E(a[0]),n=w.lexemesRe.lastIndex,a=w.lexemesRe.exec(R);return t+E(R.substr(n))}(),R=""}function f(e){S+=e.className?_(e.className,"",!0):"",w=Object.create(e,{parent:{value:w}})}function p(e){var n=e[0],a=l.substr(e.index),t=o(w,a);if(t){var r=w;r.skip?R+=n:(r.returnEnd||r.excludeEnd||(R+=n),b(),r.excludeEnd&&(R=n));do{w.className&&(S+=u),w.skip||w.subLanguage||(x+=w.relevance),w=w.parent}while(w!==t.parent);return t.starts&&(t.endSameAsBegin&&(t.starts.endRe=t.endRe),f(t.starts)),r.returnEnd?0:n.length}}var m={};function h(e,n){var a=n&&n[0];if(R+=e,null==a)return b(),0;if("begin"==m.type&&"end"==n.type&&m.index==n.index&&""===a)return R+=l.slice(n.index,n.index+1),1;if("illegal"===m.type&&""===a)return R+=l.slice(n.index,n.index+1),1;if(m=n,"begin"===n.type)return function(e){var n=e[0],a=e.rule;return a&&a.endSameAsBegin&&(a.endRe=new RegExp(n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),a.skip?R+=n:(a.excludeBegin&&(R+=n),b(),a.returnBegin||a.excludeBegin||(R=n)),f(a),a.returnBegin?0:n.length}(n);if("illegal"===n.type&&!t)throw new Error('Illegal lexeme "'+a+'" for mode "'+(w.className||"<unnamed>")+'"');if("end"===n.type){var r=p(n);if(null!=r)return r}return R+=a,a.length}var N=A(e);if(!N)throw console.error(g.replace("{}",e)),new Error('Unknown language: "'+e+'"');v(N);var O,w=i||N,C={},S="";for(O=w;O!==N;O=O.parent)O.className&&(S=_(O.className,"",!0)+S);var R="",x=0;try{for(var T,D,L=0;w.terminators.lastIndex=L,T=w.terminators.exec(l);)D=h(l.substring(L,T.index),T),L=T.index+D;for(h(l.substr(L)),O=w;O.parent;O=O.parent)O.className&&(S+=u);return{relevance:x,value:S,illegal:!1,language:e,top:w}}catch(n){if(n.message&&-1!==n.message.indexOf("Illegal"))return{illegal:!0,relevance:0,value:E(l)};if(s)return{relevance:0,value:E(l),language:e,top:w,errorRaised:n};throw n}}function y(e,n){n=n||d.languages||t(r);var a={relevance:0,value:E(e)},i=a;return n.filter(A).filter(x).forEach((function(n){var t=M(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>a.relevance&&(i=a,a=t)})),i.language&&(a.second_best=i),a}function w(e){return d.tabReplace||d.useBR?e.replace(c,(function(e,n){return d.useBR&&"\n"===e?"<br>":d.tabReplace?n.replace(/\t/g,d.tabReplace):""})):e}function C(e){var n,t,r,s,l,c=function(e){var n,a,t,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",a=o.exec(i)){var s=A(a[1]);return s||(console.warn(g.replace("{}",a[1])),console.warn("Falling back to no-highlight mode for this block.",e)),s?a[1]:"no-highlight"}for(n=0,t=(i=i.split(/\s+/)).length;n<t;n++)if(f(r=i[n])||A(r))return r}(e);f(c)||(d.useBR?(n=document.createElement("div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):n=e,l=n.textContent,r=c?M(c,l,!0):y(l),(t=m(n)).length&&((s=document.createElement("div")).innerHTML=r.value,r.value=function(e,n,t){var r=0,i="",s=[];function l(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function o(e){i+="<"+b(e)+a.map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+E(e.value).replace(/"/g,"&quot;")+'"'})).join("")+">"}function c(e){i+="</"+b(e)+">"}function u(e){("start"===e.event?o:c)(e.node)}for(;e.length||n.length;){var g=l();if(i+=E(t.substring(r,g[0].offset)),r=g[0].offset,g===e){s.reverse().forEach(c);do{u(g.splice(0,1)[0]),g=l()}while(g===e&&g.length&&g[0].offset===r);s.reverse().forEach(o)}else"start"===g[0].event?s.push(g[0].node):s.pop(),u(g.splice(0,1)[0])}return i+E(t.substr(r))}(t,m(s),l)),r.value=w(r.value),e.innerHTML=r.value,e.className=function(e,n,a){var t=n?i[n]:a,r=[e.trim()];return e.match(/\bhljs\b/)||r.push("hljs"),-1===e.indexOf(t)&&r.push(t),r.join(" ").trim()}(e.className,c,r.language),e.result={language:r.language,re:r.relevance},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.relevance}))}function S(){if(!S.called){S.called=!0;var e=document.querySelectorAll("pre code");a.forEach.call(e,C)}}var R={disableAutodetect:!0};function A(e){return e=(e||"").toLowerCase(),r[e]||r[i[e]]}function x(e){var n=A(e);return n&&!n.disableAutodetect}function T(e){Object.freeze(e);var n="function"==typeof e;return Object.getOwnPropertyNames(e).forEach((function(a){!e.hasOwnProperty(a)||null===e[a]||"object"!=typeof e[a]&&"function"!=typeof e[a]||n&&("caller"===a||"callee"===a||"arguments"===a)||Object.isFrozen(e[a])||T(e[a])})),e}return e.highlight=M,e.highlightAuto=y,e.fixMarkup=w,e.highlightBlock=C,e.configure=function(e){d=p(d,e)},e.initHighlighting=S,e.initHighlightingOnLoad=function(){window.addEventListener("DOMContentLoaded",S,!1),window.addEventListener("load",S,!1)},e.registerLanguage=function(n,a){var t;try{t=a(e)}catch(e){if(console.error("Language definition for '{}' could not be registered.".replace("{}",n)),!s)throw e;console.error(e),t=R}r[n]=t,t.rawDefinition=a.bind(null,e),t.aliases&&t.aliases.forEach((function(e){i[e]=n}))},e.listLanguages=function(){return t(r)},e.getLanguage=A,e.requireLanguage=function(e){var n=A(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},e.autoDetection=x,e.inherit=p,e.debugMode=function(){s=!1},e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,a,t){var r=e.inherit({className:"comment",begin:n,end:a,contains:[]},t||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},[e.BACKSLASH_ESCAPE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.PHRASAL_WORDS_MODE,e.COMMENT,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.HASH_COMMENT_MODE,e.NUMBER_MODE,e.C_NUMBER_MODE,e.BINARY_NUMBER_MODE,e.CSS_NUMBER_MODE,e.REGEXP_MODE,e.TITLE_MODE,e.UNDERSCORE_TITLE_MODE,e.METHOD_GUARD].forEach((function(e){T(e)})),e},r="object"==typeof window&&window||"object"==typeof self&&self,n.nodeType?r&&(r.hljs=t({}),void 0===(a=function(){return r.hljs}.apply(n,[]))||(e.exports=a)):t(n)},1519:e=>{e.exports=function(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},a={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,a,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}},4006:e=>{e.exports=function(e){function n(e){return"(?:"+e+")?"}var a="[a-zA-Z_]\\w*::",t="(decltype\\(auto\\)|"+n(a)+"[a-zA-Z_]\\w*"+n("<.*?>")+")",r={className:"keyword",begin:"\\b[a-z\\d_]*_t\\b"},i={className:"string",variants:[{begin:'(u8?|U|L)?"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)",end:"'",illegal:"."},{begin:/(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/}]},s={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},l={className:"meta",begin:/#\s*[a-z]+\b/,end:/$/,keywords:{"meta-keyword":"if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include"},contains:[{begin:/\\\n/,relevance:0},e.inherit(i,{className:"meta-string"}),{className:"meta-string",begin:/<.*?>/,end:/$/,illegal:"\\n"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},o={className:"title",begin:n(a)+e.IDENT_RE,relevance:0},c=n(a)+e.IDENT_RE+"\\s*\\(",u={keyword:"int float while private char char8_t char16_t char32_t catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid wchar_tshort reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignas alignof constexpr consteval constinit decltype concept co_await co_return co_yield requires noexcept static_assert thread_local restrict final override atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and and_eq bitand bitor compl not not_eq or or_eq xor xor_eq",built_in:"std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr _Bool complex _Complex imaginary _Imaginary",literal:"true false nullptr NULL"},g=[r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,s,i],d={variants:[{begin:/=/,end:/;/},{begin:/\(/,end:/\)/},{beginKeywords:"new throw return else",end:/;/}],keywords:u,contains:g.concat([{begin:/\(/,end:/\)/,keywords:u,contains:g.concat(["self"]),relevance:0}]),relevance:0},_={className:"function",begin:"("+t+"[\\*&\\s]+)+"+c,returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:u,illegal:/[^\w\s\*&:<>]/,contains:[{begin:"decltype\\(auto\\)",keywords:u,relevance:0},{begin:c,returnBegin:!0,contains:[o],relevance:0},{className:"params",begin:/\(/,end:/\)/,keywords:u,relevance:0,contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,s,r,{begin:/\(/,end:/\)/,keywords:u,relevance:0,contains:["self",e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,s,r]}]},r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,l]};return{aliases:["c","cc","h","c++","h++","hpp","hh","hxx","cxx"],keywords:u,illegal:"</",contains:[].concat(d,_,g,[l,{begin:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",keywords:u,contains:["self",r]},{begin:e.IDENT_RE+"::",keywords:u},{className:"class",beginKeywords:"class struct",end:/[{;:]/,contains:[{begin:/</,end:/>/,contains:["self"]},e.TITLE_MODE]}]),exports:{preprocessor:l,strings:i,keywords:u}}}},8914:e=>{e.exports=function(e){var n={begin:/(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",begin:/[\w-]+/},{begin:/\(/,end:/\)/,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]}}]};return{case_insensitive:!0,illegal:/[=\/|'\$]/,contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:/\.[A-Za-z0-9_-]+/},{className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",begin:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{begin:"@(page|font-face)",lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",illegal:/:/,returnBegin:!0,contains:[{className:"keyword",begin:/@\-?\w[\w]*(\-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]},{className:"selector-tag",begin:"[a-zA-Z-][a-zA-Z0-9_-]*",relevance:0},{begin:"{",end:"}",illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,n]}]}}},3202:e=>{e.exports=function(e){var n="action collection component concat debugger each each-in else get hash if input link-to loc log mut outlet partial query-params render textarea unbound unless with yield view",a=(e.QUOTE_STRING_MODE,{endsWithParent:!0,relevance:0,keywords:{keyword:"as",built_in:n},contains:[e.QUOTE_STRING_MODE,{illegal:/\}\}/,begin:/[a-zA-Z0-9_]+=/,returnBegin:!0,relevance:0,contains:[{className:"attr",begin:/[a-zA-Z0-9_]+/}]},e.NUMBER_MODE]});return{case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT("{{!(--)?","(--)?}}"),{className:"template-tag",begin:/\{\{[#\/]/,end:/\}\}/,contains:[{className:"name",begin:/[a-zA-Z\.\-]+/,keywords:{"builtin-name":n},starts:a}]},{className:"template-variable",begin:/\{\{[a-zA-Z][a-zA-Z\-]+/,end:/\}\}/,keywords:{keyword:"as",built_in:n},contains:[e.QUOTE_STRING_MODE]}]}}},7721:e=>{e.exports=function(e){var n="false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do";return{aliases:["jsp"],keywords:n,illegal:/<\/|#/,contains:[e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,{className:"class",beginKeywords:"class interface",end:/[{;=]/,excludeEnd:!0,keywords:"class interface",illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"new throw return else",relevance:0},{className:"function",begin:"([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+"+e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,end:/[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.UNDERSCORE_IDENT_RE+"\\s*\\(",returnBegin:!0,relevance:0,contains:[e.UNDERSCORE_TITLE_MODE]},{className:"params",begin:/\(/,end:/\)/,keywords:n,relevance:0,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"number",begin:"\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",relevance:0},{className:"meta",begin:"@[A-Za-z]+"}]}}},6344:e=>{e.exports=function(e){var n={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/},a="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},r={className:"number",variants:[{begin:"\\b(0[bB][01]+)n?"},{begin:"\\b(0[oO][0-7]+)n?"},{begin:e.C_NUMBER_RE+"n?"}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},s={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,i],subLanguage:"xml"}},l={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,i],subLanguage:"css"}},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,l,o,r,e.REGEXP_MODE];var c=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx","mjs","cjs"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,s,l,o,e.C_LINE_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:a+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,r,{begin:/[{,\n]\s*/,relevance:0,contains:[{begin:a+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:a,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+a+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:a},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:c}]}]},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:"<>",end:"</>"},{begin:n.begin,end:n.end}],subLanguage:"xml",contains:[{begin:n.begin,end:n.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:a}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:c}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor get set",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},3839:e=>{e.exports=function(e){return{aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^\\s*([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"quote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"^```\\w*\\s*$",end:"^```[ ]*$"},{begin:"`.+?`"},{begin:"^( {4}|\\t)",end:"$",relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}},3306:e=>{e.exports=function(e){var n={begin:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},a={className:"meta",begin:/<\?(php)?|\?>/},t={className:"string",contains:[e.BACKSLASH_ESCAPE,a],variants:[{begin:'b"',end:'"'},{begin:"b'",end:"'"},e.inherit(e.APOS_STRING_MODE,{illegal:null}),e.inherit(e.QUOTE_STRING_MODE,{illegal:null})]},r={variants:[e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]};return{aliases:["php","php3","php4","php5","php6","php7"],case_insensitive:!0,keywords:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",contains:[e.HASH_COMMENT_MODE,e.COMMENT("//","$",{contains:[a]}),e.COMMENT("/\\*","\\*/",{contains:[{className:"doctag",begin:"@[A-Za-z]+"}]}),e.COMMENT("__halt_compiler.+?;",!1,{endsWithParent:!0,keywords:"__halt_compiler",lexemes:e.UNDERSCORE_IDENT_RE}),{className:"string",begin:/<<<['"]?\w+['"]?$/,end:/^\w+;?$/,contains:[e.BACKSLASH_ESCAPE,{className:"subst",variants:[{begin:/\$\w+/},{begin:/\{\$/,end:/\}/}]}]},a,{className:"keyword",begin:/\$this\b/},n,{begin:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{className:"function",beginKeywords:"function",end:/[;{]/,excludeEnd:!0,illegal:"\\$|\\[|%",contains:[e.UNDERSCORE_TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",contains:["self",n,e.C_BLOCK_COMMENT_MODE,t,r]}]},{className:"class",beginKeywords:"class interface",end:"{",excludeEnd:!0,illegal:/[:\(\$"]/,contains:[{beginKeywords:"extends implements"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"namespace",end:";",illegal:/[\.']/,contains:[e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"use",end:";",contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"=>"},t,r]}}},308:e=>{e.exports=function(e){var n={keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10",built_in:"Ellipsis NotImplemented",literal:"False None True"},a={className:"meta",begin:/^(>>>|\.\.\.) /},t={className:"subst",begin:/\{/,end:/\}/,keywords:n,illegal:/#/},r={begin:/\{\{/,relevance:0},i={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/(u|b)?r?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(u|b)?r?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a],relevance:10},{begin:/(fr|rf|f)'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,a,r,t]},{begin:/(fr|rf|f)"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,r,t]},{begin:/(u|r|ur)'/,end:/'/,relevance:10},{begin:/(u|r|ur)"/,end:/"/,relevance:10},{begin:/(b|br)'/,end:/'/},{begin:/(b|br)"/,end:/"/},{begin:/(fr|rf|f)'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,r,t]},{begin:/(fr|rf|f)"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,t]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},s={className:"number",relevance:0,variants:[{begin:e.BINARY_NUMBER_RE+"[lLjJ]?"},{begin:"\\b(0o[0-7]+)[lLjJ]?"},{begin:e.C_NUMBER_RE+"[lLjJ]?"}]},l={className:"params",begin:/\(/,end:/\)/,contains:["self",a,s,i,e.HASH_COMMENT_MODE]};return t.contains=[i,s,a],{aliases:["py","gyp","ipython"],keywords:n,illegal:/(<\/|->|\?)|=>/,contains:[a,s,{beginKeywords:"if",relevance:0},i,e.HASH_COMMENT_MODE,{variants:[{className:"function",beginKeywords:"def"},{className:"class",beginKeywords:"class"}],end:/:/,illegal:/[${=;\n,]/,contains:[e.UNDERSCORE_TITLE_MODE,l,{begin:/->/,endsWithParent:!0,keywords:"None"}]},{className:"meta",begin:/^[\t ]*@/,end:/$/},{begin:/\b(print|exec)\(/}]}}},9514:e=>{e.exports=function(e){return{aliases:["console"],contains:[{className:"meta",begin:"^\\s{0,3}[/\\w\\d\\[\\]()@-]*[>%$#]",starts:{end:"$",subLanguage:"bash"}}]}}},312:(e,n,a)=>{e.exports=a(8755).default},8755:e=>{var n,a=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var a in n||(n={}))o.call(n,a)&&u(e,a,n[a]);if(l)for(var a of l(n))c.call(n,a)&&u(e,a,n[a]);return e},d={};function _(e,n,a,t,r){try{return n.highlight(t,{language:""!==r?r:"plaintext",ignoreIllegals:a}).value}catch(n){return e.utils.escapeHtml(t)}}function E(e,n,a,t,r){if(""!==r)return _(e,n,a,t,r);try{return n.highlightAuto(t).value}catch(n){return e.utils.escapeHtml(t)}}function b(e){return function(...n){return e(...n).replace('<code class="','<code class="hljs ').replace("<code>",'<code class="hljs">')}}function f(e){var n,a,r;for(const s of e.tokens)if("inline"===s.type&&null!=s.children)for(const[l,o]of s.children.entries()){if("code_inline"!==o.type)continue;const c=s.children[l+1];if(null==c)continue;const u=/^{:?\.([^}]+)}/.exec(c.content);if(null==u)continue;const d=u[1];c.content=c.content.slice(u[0].length);let _=null!=(n=o.attrGet("class"))?n:"";_+=`${null!=(a=e.md.options.langPrefix)?a:"language-"}${d}`,o.attrSet("class",_),o.meta=(r=g({},o.meta),t(r,i({highlightLanguage:d})))}}function p(e,n,a,t,r){var i,s;const l=e[n];if(null==a.highlight)throw new Error("`options.highlight` was null, this is not supposed to happen");const o=a.highlight(l.content,null!=(s=null==(i=l.meta)?void 0:i.highlightLanguage)?s:"","");return`<code${r.renderAttrs(l)}>${o}</code>`}function m(e,n){const a=g(g({},m.defaults),n);if(null==a.hljs)throw new Error("Please pass a highlight.js instance for the required `hljs` option.");null!=a.register&&function(e,n){for(const[a,t]of Object.entries(n))e.registerLanguage(a,t)}(a.hljs,a.register),e.options.highlight=(a.auto?E:_).bind(null,e,a.hljs,a.ignoreIllegals),null!=e.renderer.rules.fence&&(e.renderer.rules.fence=b(e.renderer.rules.fence)),a.code&&null!=e.renderer.rules.code_block&&(e.renderer.rules.code_block=b(e.renderer.rules.code_block)),a.inline&&(e.core.ruler.before("linkify","inline_code_language",f),e.renderer.rules.code_inline=b(p))}((e,n)=>{for(var t in n)a(e,t,{get:n[t],enumerable:!0})})(d,{default:()=>m}),e.exports=(n=d,((e,n,t,i)=>{if(n&&"object"==typeof n||"function"==typeof n)for(let t of s(n))o.call(e,t)||undefined===t||a(e,t,{get:()=>n[t],enumerable:!(i=r(n,t))||i.enumerable});return e})(a({},"__esModule",{value:!0}),n)),m.defaults={auto:!1,code:!1,inline:!1,ignoreIllegals:!1}}}]);