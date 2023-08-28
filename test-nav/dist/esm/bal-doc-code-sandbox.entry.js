import { r as registerInstance, h, H as Host, g as getElement } from './index-e015dbc8.js';
import { c as createCommonjsModule } from './_commonjsHelpers-ba3f0406.js';

const logoAngular = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
 viewBox="0 0 250 250" style="enable-background:new 0 0 250 250;" xml:space="preserve">
 <style type="text/css">
 .st0{fill:#DD0031;}
 .st1{fill:#C3002F;}
 .st2{fill:#FFFFFF;}
 </style>
 <g>
 <polygon class="st0" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2 	"/>
 <polygon class="st1" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30 	"/>
 <path class="st2" d="M125,52.1L66.8,182.6h0h21.7h0l11.7-29.2h49.4l11.7,29.2h0h21.7h0L125,52.1L125,52.1L125,52.1L125,52.1
  L125,52.1z M142,135.4H108l17-40.9L142,135.4z"/>
 </g>
 </svg>`;
const logoReact = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
<title>React Logo</title>
<circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
<g stroke="#61dafb" stroke-width="1" fill="none">
  <ellipse rx="11" ry="4.2"/>
  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
</g>
</svg>`;
const logoHtml = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630">
<rect width="630" height="630" fill="#f7df1e"/>
<path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z"/>
</svg>`;
const logoCodeSandbox = `<svg width="24px" height="24px" viewBox="0 0 256 296" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M115.497674,261.08837 L115.497674,154.478845 L23.8139535,101.729261 L23.8139535,162.501763 L65.8104558,186.8486 L65.8104558,232.549219 L115.497674,261.08837 Z M139.311628,261.714907 L189.916577,232.563707 L189.916577,185.779949 L232.186047,161.285235 L232.186047,101.27387 L139.311628,154.895035 L139.311628,261.714907 Z M219.971965,80.8276886 L171.155386,52.5391067 L128.292316,77.4106841 L85.1040206,52.5141067 L35.8521355,81.1812296 L127.765737,134.063073 L219.971965,80.8276886 Z M0,222.211907 L0,74.4948807 L127.986799,0 L256,74.1820085 L256,221.978632 L127.983954,295.72283 L0,222.211907 Z" fill="#000000"></path></g></svg>`;

const parseMarkdown = (content) => {
  if (content.startsWith('```')) {
    const lines = content.split('\n');
    lines.splice(0, 1);
    return lines.join('\n').replace('```', '');
  }
  return content;
};
const loadSourceFiles = async (files) => {
  const sourceFiles = await Promise.all(files.map(f => fetch(`/assets/code/${f}`)));
  return await Promise.all(sourceFiles.map(res => res.text()));
};
const getFramework = () => {
  var _a;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  let paramFramework = (_a = params.globals) === null || _a === void 0 ? void 0 : _a.replace('framework:', '');
  const frameworks = ['angular', 'html', 'react', 'vue'];
  paramFramework = frameworks.includes(paramFramework) ? paramFramework : undefined;
  if (paramFramework !== undefined) {
    localStorage.setItem('bal-docs-framework', JSON.stringify(paramFramework));
    return paramFramework;
  }
  const storageValue = localStorage.getItem('bal-docs-framework');
  if (storageValue === null) {
    localStorage.setItem('bal-docs-framework', JSON.stringify('angular'));
    return 'angular';
  }
  return JSON.parse(storageValue);
};

var lzString = createCommonjsModule(function (module) {
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.5
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if( module != null ) {
  module.exports = LZString;
} else if( typeof angular !== 'undefined' && angular != null ) {
  angular.module('LZString', [])
  .factory('LZString', function () {
    return LZString;
  });
}
});

var define$1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParameters = void 0;

function compress(input) {
    return lzString.compressToBase64(input)
        .replace(/\+/g, "-") // Convert '+' to '-'
        .replace(/\//g, "_") // Convert '/' to '_'
        .replace(/=+$/, ""); // Remove ending '='
}
function getParameters(parameters) {
    return compress(JSON.stringify(parameters));
}
exports.getParameters = getParameters;
//# sourceMappingURL=define.js.map
});

var define = createCommonjsModule(function (module, exports) {
exports.__esModule = true;
exports.getParameters = void 0;

exports.getParameters = define$1.getParameters;
//# sourceMappingURL=define.js.map
});

const buildHtmlParameters = async (project) => {
  const [index_html, index_ts, example_ts] = await loadSourceFiles([
    'html/index.html',
    'html/index.ts',
    'html/example.ts',
  ]);
  const parseTemplate = (content) => `<html>
  <body>
    <bal-app>
      <main ${!project.fullscreen ? 'class="container py-large"' : ''}>

${content}

      </main>
    </bal-app>
  </body>
</html>`;
  let example_component = example_ts;
  let example_template = index_html;
  if (project.component) {
    example_component = parseMarkdown(project.component);
  }
  if (project.template) {
    example_template = parseTemplate(parseMarkdown(project.template));
  }
  example_component = `${index_ts}

${example_component}`;
  return define.getParameters({
    files: {
      'package.json': {
        isBinary: false,
        content: {
          dependencies: {
            '@baloise/design-system-components': 'latest',
          },
        },
      },
      'index.js': {
        isBinary: false,
        content: example_component.trim(),
      },
      'index.html': {
        isBinary: false,
        content: example_template.trim(),
      },
    },
  });
};

const buildReactParameters = async (project) => {
  const [public_index, src_app_tsx, src_app_project_tsx, src_app_fullscreen_tsx, src_index_tsx, src_react_app_env_d_ts, package_json, tsconfig_json,] = await loadSourceFiles([
    'react/public/index.html',
    'react/src/App.tsx',
    'react/src/AppProject.tsx',
    'react/src/AppFullscreen.tsx',
    'react/src/index.tsx',
    'react/src/react-app-env.d.ts',
    'react/package.json',
    'react/tsconfig.json',
  ]);
  const isTryOnlineProject = !project.component;
  const reactApp = isTryOnlineProject ? src_app_project_tsx : project.fullscreen ? src_app_fullscreen_tsx : src_app_tsx;
  let exampleFiles = {};
  if (!isTryOnlineProject) {
    const example_component = project.component
      ? parseMarkdown(project.component)
      : `import React from 'react';

export default function Example() {
  return <h1 className="title is-size-xxx-large">Hello World</h1>;
}
`;
    exampleFiles = {
      'src/Example.tsx': {
        isBinary: false,
        content: example_component,
      },
    };
  }
  return define.getParameters({
    files: Object.assign({ 'package.json': {
        isBinary: false,
        content: package_json,
      }, 'tsconfig.json': {
        isBinary: false,
        content: tsconfig_json,
      }, 'public/index.html': {
        isBinary: false,
        content: public_index,
      }, 'src/index.tsx': {
        isBinary: false,
        content: src_index_tsx,
      }, 'src/react-app-env.d.ts': {
        isBinary: false,
        content: src_react_app_env_d_ts,
      }, 'src/App.tsx': {
        isBinary: false,
        content: reactApp,
      } }, exampleFiles),
  });
};

const buildAngularParameters = async (project) => {
  const [src_app_app_component_fullscreen_html, src_app_app_component_project_html, src_app_app_component_html, src_app_app_component_ts, src_app_app_module_project_ts, src_app_app_module_ts, src_app_example_component_ts, src_index_html, src_main_ts, src_polyfills_ts, src_styles_scss, src_zone_flags_ts, _angular_cli_json, package_json, tsconfig_json,] = await loadSourceFiles([
    'angular/src/app/app.component-fullscreen.html',
    'angular/src/app/app.component-project.html',
    'angular/src/app/app.component.html',
    'angular/src/app/app.component.ts',
    'angular/src/app/app.module-project.ts',
    'angular/src/app/app.module.ts',
    'angular/src/app/example.component.ts',
    'angular/src/index.html',
    'angular/src/main.ts',
    'angular/src/polyfills.ts',
    'angular/src/styles.scss',
    'angular/src/zone-flags.ts',
    'angular/angular-cli.json',
    'angular/package.json',
    'angular/tsconfig.json',
  ]);
  const isTryOnlineProject = !project.template;
  let exampleFiles = {};
  let secondComponent = {};
  if (!isTryOnlineProject) {
    const example_component_html = project.template
      ? parseMarkdown(project.template)
      : '<h1 class="title is-size-xxx-large">Hello World</h1>';
    const new_example_component_ts = project.component ? parseMarkdown(project.component) : src_app_example_component_ts;
    exampleFiles = {
      'src/app/example.component.ts': {
        isBinary: false,
        content: new_example_component_ts,
      },
      'src/app/example.component.html': {
        isBinary: false,
        content: example_component_html,
      },
      'src/app/example.component.css': {
        isBinary: false,
        content: '',
      },
    };
    if (project.name2 !== undefined) {
      secondComponent = {
        [`src/app/${project.name2}.component.ts`]: {
          isBinary: false,
          content: parseMarkdown(project.component2),
        },
        [`src/app/${project.name2}.component.html`]: {
          isBinary: false,
          content: parseMarkdown(project.template2),
        },
      };
    }
  }
  return define.getParameters({
    files: Object.assign(Object.assign({ 'package.json': {
        isBinary: false,
        content: package_json,
      }, 'tsconfig.json': {
        isBinary: false,
        content: tsconfig_json,
      }, '.angular-cli.json': {
        isBinary: false,
        content: _angular_cli_json,
      }, 'src/app/app.component.html': {
        isBinary: false,
        content: isTryOnlineProject
          ? src_app_app_component_project_html
          : project.fullscreen
            ? src_app_app_component_fullscreen_html
            : src_app_app_component_html,
      }, 'src/app/app.component.ts': {
        isBinary: false,
        content: src_app_app_component_ts,
      }, 'src/app/app.module.ts': {
        isBinary: false,
        content: isTryOnlineProject ? src_app_app_module_project_ts : src_app_app_module_ts,
      }, 'src/index.html': {
        isBinary: false,
        content: src_index_html,
      }, 'src/main.ts': {
        isBinary: false,
        content: src_main_ts,
      }, 'src/polyfills.ts': {
        isBinary: false,
        content: src_polyfills_ts,
      }, 'src/styles.scss': {
        isBinary: false,
        content: src_styles_scss,
      }, 'src/zone-flags.ts': {
        isBinary: false,
        content: src_zone_flags_ts,
      } }, exampleFiles), secondComponent),
  });
};

const balDocCodeSandboxCss = ".bal-doc-code-sandbox--angular svg path{fill:#fff !important}.bal-doc-code-sandbox--react svg{fill:#fff !important}.bal-doc-code-sandbox--react ellipse{fill:rgba(0,0,0,0) !important}.bal-doc-code-sandbox--react circle{fill:#61dafb !important}";

const DocCodeSandbox = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.buildParameters = async () => {
      if (this.framework === 'html') {
        this.parameters = await buildHtmlParameters({
          template: this.template,
          component: this.component,
          fullscreen: this.fullscreen,
        });
      }
      if (this.framework === 'react') {
        this.parameters = await buildReactParameters({
          component: this.component,
          fullscreen: this.fullscreen,
        });
      }
      if (this.framework === 'angular') {
        this.parameters = await buildAngularParameters({
          template: this.template,
          component: this.component,
          name2: this.name2,
          template2: this.template2,
          component2: this.component2,
          fullscreen: this.fullscreen,
        });
      }
    };
    this.fullscreen = false;
    this.framework = undefined;
    this.modules = undefined;
    this.template = undefined;
    this.component = undefined;
    this.name2 = undefined;
    this.template2 = undefined;
    this.component2 = undefined;
    this.visible = false;
    this.primary = false;
    this.logo = false;
    this.label = undefined;
    this.parameters = '';
  }
  frameworkWatcher() {
    this.buildParameters();
  }
  componentWillLoad() {
    this.buildParameters();
  }
  render() {
    const framework = getFramework();
    if (framework !== this.framework && !this.visible) {
      return h(Host, { style: { display: 'none' } });
    }
    const labels = {
      angular: 'Angular',
      html: 'HTML & JS',
      react: 'React',
      vue: 'Vue.js',
    };
    const logos = {
      angular: logoAngular,
      react: logoReact,
      html: logoHtml,
      vue: logoReact,
    };
    const logo = logos[this.framework];
    return (h(Host, { class: {
        'bal-doc-code-sandbox': true,
        [`bal-doc-code-sandbox--${this.framework}`]: true,
      } }, h("bal-doc-app", null, h("form", { action: "https://codesandbox.io/api/v1/sandboxes/define", method: "POST", target: "_blank" }, h("input", { type: "hidden", name: "parameters", value: this.parameters }), h("bal-button", { elementType: 'submit' }, h("div", { class: "is-flex fg-xx-small" }, h("div", { innerHTML: this.logo ? logoCodeSandbox : logo, style: { width: '24px', height: '24px' } }), h("span", null, this.label ? this.label : `${labels[this.framework] || 'Angular'} Code Sandbox`)))))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "framework": ["frameworkWatcher"]
  }; }
};
DocCodeSandbox.style = balDocCodeSandboxCss;

export { DocCodeSandbox as bal_doc_code_sandbox };
