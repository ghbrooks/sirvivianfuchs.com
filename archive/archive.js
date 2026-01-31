(function () {
  var themePages = {
    people: "people.html",
    equipment: "equipment.html",
    expeditions: "expeditions.html",
    landscapes: "landscapes.html",
    media: "media.html",
    key_events: "key_events.html",
    all: "people.html"
  };

  var imageIds = {
    "55TAEVEF": "result.html",
    "34AFR123": "result2.html"
  };

  // Search form handler
  var searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.onclick = function () {
      var themeSelect = document.querySelector('select[name="theme"]');
      var theme = themeSelect ? themeSelect.value : "";
      var page = themePages[theme] || "people.html";
      window.location.href = page;
    };
  }

  // Browse dropdown handler
  var browseSelect = document.getElementById("browseSelect");
  if (browseSelect) {
    browseSelect.onchange = function () {
      var val = this.value;
      if (val && themePages[val]) {
        window.location.href = themePages[val];
      }
    };
  }

  // ID lookup handler
  var idForm = document.getElementById("idLookupForm");
  if (idForm) {
    idForm.onsubmit = function (e) {
      e.preventDefault();
      var input = this.elements["keyword"].value.trim().toUpperCase();
      if (imageIds[input]) {
        window.location.href = imageIds[input];
      } else {
        alert("Image ID \"" + input + "\" not found. Try 55TAEVEF or 34AFR123.");
      }
    };
  }
})();
