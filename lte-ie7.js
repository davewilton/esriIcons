/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'esri-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-esri-select-front' : '&#xe000;',
			'icon-esri-select-back' : '&#xe001;',
			'icon-esri-select-back-sm' : '&#xe002;',
			'icon-esri-select-front-sm' : '&#xe003;',
			'icon-esri-select-mouse' : '&#xe004;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-esri-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};