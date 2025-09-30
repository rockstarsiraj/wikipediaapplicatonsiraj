let searchElement = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinnerE1 = document.getElementById("spinner");

function createAppendSearch(result) {
    // Result item
    let resultItemElement = document.createElement("div");
    resultItemElement.classList.add("result-item");
    searchResultsE1.appendChild(resultItemElement);

    //creating title
    let {
        link,
        title,
        description
    } = result;
    let resultTitleE1 = document.createElement('a');
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultTitleE1.textContent = title;
    resultTitleE1.classList.add("result-title");
    resultItemElement.appendChild(resultTitleE1);

    //breakelement
    let titlebreak = document.createElement('br');
    resultTitleE1.appendChild(titlebreak);
    //url element
    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultItemElement.appendChild(urlE1);
    //break element
    let linebreakE1 = document.createElement("br");
    resultTitleE1.appendChild(linebreakE1);
    //description element
    let discriptionElement = document.createElement("p");
    discriptionElement.classList.add("link-description");
    discriptionElement.textContent = description;
    resultItemElement.appendChild(discriptionElement);
}

function displayResults(searchResults) {
    spinnerE1.classList.toggle("d-none");
    for (let result of searchResults) {
        createAppendSearch(result);
    }
}

function searchwikipedia(event) {
    if (event.key === "Enter") {
        spinnerE1.classList.toggle("d-none");
        searchResultsE1.textContent = "";
        let searchinput = searchElement.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchinput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsondata) {
                let {
                    search_results
                } = jsondata;

                displayResults(search_results);
            });

    }

}
searchElement.addEventListener("keydown", searchwikipedia);
