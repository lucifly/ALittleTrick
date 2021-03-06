(function (exports) {
	
	exports.EVENT_TYPE = { 'LOGIN': 'LOGIN', 'LOGOUT': 'LOGOUT', 'SPEAK': 'SPEAK', 'LIST_USER': 'LIST_USER', 'ERROR': 'ERROR', 'LIST_HISTORY': 'LIST_HISTORY' };

	exports.PORT = 8880;

	exports.HOST = "10.108.92.2";

	var analyzeMessageData = exports.analyzeMessageData = function (message) {
		try {
			return JSON.parse(message);
		} catch (error) {
			// 收到了非正常格式的数据
			console.log('method:analyzeMsgData,error:' + error);
		}

		return null;
	}

	var getMsgFirstDataValue = exports.getMsgFirstDataValue = function (mData) {
		if (mData && mData.values && mData.values[0]) {
			return mData.values[0];
		}

		return '';
	}

})((function () {
	if (typeof exports === 'undefined') {
		window.chatLib = {};
		return window.chatLib;
	} else {
		return exports;
	}
})());