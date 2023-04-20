//前方一致

//曖昧検索

//複合語検索


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