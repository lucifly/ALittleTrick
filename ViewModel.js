(function (exports) {

	exports.TEMPLATE_TYPE = { 'DATALIST': 'DATALIST', 'PICTURE': 'PICTURE', 'VIDIO': 'VIDIO' };

	var getTemplate = exports.getTemplate = function (templat_type, templat_id, otherdata) {

		switch (templat_type) {
			case TEMPLATE_TYPE['DATALIST']: return get_datalist_template(templat_id, otherdata);
			case TEMPLATE_TYPE['PICTURE']: return get_picture_template(templat_id, otherdata);
			case TEMPLATE_TYPE['VIDIO']: return get_vidio_template(templat_id, otherdata);
			default: break;
		}
		return null;
	}
	
	/**
	 * get_datalist_template
	 * otherdata[0]---listname
	 * otherdata[1]---listcol
	 * otherdata[2][]---list_titel
	 */
	var get_datalist_template = function (templat_id, otherdata) {
		if (otherdata && otherdata.length) {
			var template_datalist = '<table border="1" id = "' + templat_id + '">' + '<caption>' + otherdata[0] + '</caption>';

			template_datalist += '<tr>';

			if (otherdata[2] && otherdata[2].length) {
				for (var i = 0; i < otherdata[2]; i++) {
					template_datalist = template_datalist + '<th>' + otherdata[2][i] + '</th>';
				}
			}

			template_datalist += '</tr>';

			template_datalist += '</table>';

			return template_datalist;
		}

		//otherdata's format is mistaked
		return null;
	}
	/**get_picture_template */
	var get_picture_template = function (templat_id, otherdata) {
		return "---devloping,,,";
	}
	/**get_vidio_template  */
	var get_vidio_template = function (templat_id, otherdata) {
		return "---devloping,,,";
	}

})((function () {
	if (typeof exports === 'undefined') {
		window.chatLib = {};
		return window.chatLib;
	} else {
		return exports;
	}
})());