async function fetchSparql(endpointUrl, sparqlQuery) {
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(sparqlQuery);
    const headers = {
        Accept: "application/sparql-results+json",
    };
    return fetch(fullUrl, { headers, method: "GET", mode: "cors" }).then((body) =>
        body.json()
    );
};

//wikidata sparql endpoint(wikidataID:Q???)
async function sparql_query(ids) {
        //SPARQLエンドポイントの初期設定
        const endpoint = "https://query.wikidata.org/sparql";

        //SPARQLクエリの発行
        //idsにsearchAPIで返ってきた「Q???」を全て代入
        const query = 'PREFIX wdt: <http://www.wikidata.org/prop/direct/> \n'
            + 'PREFIX wd: <http://www.wikidata.org/entity/> \n'
            + 'select  DISTINCT ?s ?sLabel ?o ?oLabel \n'
            + 'where{ \n'
            + 'VALUES ?s {' + ids + '} \n'
            + '?s wdt:P31*/wdt:P279* ?o.  \n'
            + 'SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n'
            + '}ORDER BY ASC (?s)'
        //console.log(query)

        //SPARQLクエリの実行（sparql.jsで定義している関数を利用）
        return await fetchSparql(endpoint, query);

}