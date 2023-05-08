//前方一致

//曖昧検索

//複合語検索
const inputTextArray = [{word:"先進",flag:false},{word:"国",flag:false},{word:"首脳",flag:false},{word:"会議",flag:false}];
const answerTextArray = ["国首脳", "先進","国", "首脳", "会議"]
function exists(word){
    return answerTextArray.includes(word);
}

for(let compoundWordNum = inputTextArray.length; 0 < compoundWordNum; compoundWordNum--){
    const patternCount = inputTextArray.length - compoundWordNum + 1;
    console.log("neko-------------------")
    for(let i = 0; i < patternCount; i++){
        const flagArray = inputTextArray.slice(i, i + compoundWordNum).map(x => x["flag"])
        //flagが全部falseなら実行
        if(){
                    const compoundWord =  inputTextArray.slice(i, i + compoundWordNum).map(x => x["word"]).join("");
        console.log(flagArray);
        console.log(compoundWord);
        }

        
        if(exists(compoundWord)){
            for(let j = i; j < i + compoundWordNum; j++){
                inputTextArray[j]["flag"] = true;
            }
        }
        
    }
}


//mediawiki_API 前方一致(検索ワード,結果取得上限数)
function promise_get_action_wbsearchentities(word, limit) {
    return new Promise((resolve) => {
        const urlw = "https://www.wikidata.org/w/api.php?action=wbsearchentities&search=" + word + "&limit=" + limit + "&language=ja&format=json&origin=*";
        fetch(urlw)
            .then(function (response) { return resolve(response.json()); })
            .catch(function (error) { console.log(error); });
    })
}
//wikibase_API あいまい(検索ワード,結果取得上限数)
function promise_get_list_search(word, limit) {
    return new Promise((resolve) => {
        const urlw = "https://www.wikidata.org/w/api.php?action=query&list=search&srsearch=" + word + "&srlimit=" + limit + "&sroffset=0&format=json&origin=*";
        fetch(urlw)
            .then(function (response) { return resolve(response.json()); })
            .catch(function (error) { console.log(error); });
    })
}