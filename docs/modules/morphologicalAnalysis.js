async function morphologicalAnalysis(text) {
    //辞書（dictフォルダへのパス）
    const DICT_PATH = "../dict";

    const ids = [];
    const names = [];
    return new Promise((resolve) => {
        // Kuromoji
        kuromoji.builder({ dicPath: DICT_PATH }).build((err, tokenizer) => {
            const tokens = tokenizer.tokenize(text);// 解析データの取得
            console.log("形態素解析結果", tokens);

            //console.log(words);
            return resolve(tokens);
        });
    });
}

//kuromoji形態素解析(解析文章)
function promise_analysis(text) {
    //辞書（dictフォルダへのパス）
    const DICT_PATH = "./dict";

    const ids = [];
    const names = [];
    return new Promise((resolve) => {
        // Kuromoji
        kuromoji.builder({ dicPath: DICT_PATH }).build((err, tokenizer) => {
            const tokens = tokenizer.tokenize(text);// 解析データの取得
            console.log("形態素解析結果", tokens);

            //console.log(words);
            return resolve(tokens);
        });
    });
}
