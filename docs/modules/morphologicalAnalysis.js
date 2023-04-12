//辞書（dictフォルダへのパス）
const DICT_PATH = "../jscss\kuromoji.js";

const ids = [];
const names = [];

async function morphologicalAnalysis(text){
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


