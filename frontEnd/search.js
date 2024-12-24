
const pages = {
    html: "navBar/html/html.html",
    css: "navBar/css/css.html",
    javascript: "navBar/javascript/javascript.html",
    python: "navBar/python/python.html",
    php: "navBar/php/php.html",
    "c++": "navBar/cpp/cpp.html",
    cpp: "navBar/cpp/cpp.html",
    java: "navBar/java/java.html",
    dsa: "navBar/dsa/dsa.html",
    video: "videoComponent.html",
    videos: "videoComponent.html",
    roadmaps: "signup",
    tutorials: "videoComponent.html",
    home:"index.html"
};

function performSearch() {
  
    const input = document.getElementById("searchInput").value.toLowerCase();

    if (pages[input]) {
    
        window.location.href = pages[input];
    } else {
       
        alert("No results found for your search. Please try a relevant keyword.");
    }
}
document.getElementById("searchInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const query = event.target.value; 
    if (query.trim() !== "") {
        performSearch(query);
    }   
    }
   
});
