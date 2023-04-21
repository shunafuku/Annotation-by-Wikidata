		//ローディング画面用の関数
		function dispLoading(msg) {
            console.log("display loading circle");
			// 引数なしの場合、メッセージは非表示。
			if (msg === undefined) msg = "";

			// 画面表示メッセージを埋め込み
			const innerMsg = "<div id='innerMsg'>" + msg + "</div>";

			// ローディング画像が非表示かどうかチェックし、非表示の場合のみ出力。
			if ($("#nowLoading").length == 0) {
				$("body").append("<div id='nowLoading'>" + innerMsg + "</div>");
			}
		}

		//表示ストップ用の関数
		function removeLoading() {
			$("#nowLoading").remove();
		}