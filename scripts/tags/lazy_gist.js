/*
* @Author: prpr
* @Date:   2017-06-14 15:02:51
* @Last Modified by:   prpr
* @Last Modified time: 2017-06-14 15:04:02
*/

'use strict';

/**
 * Click button to load Gist.
 */
function gistTag(args, content) {
  const hash = args.shift();
  const file = args.length ? `${args[0]}` : '';

  return `<p class="p-load-gist"><button class="btn btn-default load-gist" data-hash="${hash}" data-file="${file}">Click to expand gist ${hash}${file.length ? ': ' + file : ''}</button></p>`;
}

hexo.extend.tag.register('lazy_gist', gistTag);
