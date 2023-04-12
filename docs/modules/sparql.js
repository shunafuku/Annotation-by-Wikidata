export async function fetchSparql(endpointUrl, sparqlQuery) {
    const fullUrl = endpointUrl + "?query=" + encodeURIComponent(sparqlQuery);
    const headers = {
        Accept: "application/sparql-results+json",
    };
    return fetch(fullUrl, { headers, method: "GET", mode: "cors" }).then((body) =>
        body.json()
    );
};