const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const desc = document.querySelector(".desc");
const img = document.querySelector(".newsImg");
const link = document.querySelector(".link");
const container = document.querySelector(".container");
const ncscBtn = document.querySelector(".ncscBtn");
const ccnBtn = document.querySelector(".ccnBtn");
const dcmsBtn = document.querySelector(".dcmsBtn");
const nukibBtn = document.querySelector(".nukibBtn");
const riaBtn = document.querySelector(".riaBtn");
const cfcsBtn = document.querySelector(".cfcsBtn");
const finlandBtn = document.querySelector(".finlandBtn");
const dnscBtn = document.querySelector(".dnscBtn");
const canadaBtn = document.querySelector(".canadaBtn");
const ncsnNlBtn = document.querySelector(".ncscNl");
const belgiumBtn = document.querySelector(".belgiumBtn");
const australiaBtn = document.querySelector(".australiaBtn");
const csaBtn = document.querySelector(".csaBtn");

const nscsUrl = "https://www.ncsc.gov.uk/api/1/services/v1/news-rss-feed.xml";
const ccnUrl = "https://www.ccn-cert.cni.es/component/obrss/rss-noticias.feed";
const dcmsUrl =
  "https://www.gov.uk/search/all.atom?organisations%5B%5D=department-for-digital-culture-media-sport";
const nukibUrl = "https://www.nukib.cz/rss.xml";
const riaUrl = "https://www.ria.ee/et/news-feed/all/feed";
const cfcsUrl = "https://www.cfcs.dk/da/servicemappe/rss-feed/";
const finlandUrl = "https://www.kyberturvallisuuskeskus.fi/feed/rss/fi/399";
const dnscUrl = "https://dnsc.ro/feed";
const canadaUrl =
  "https://cyber.gc.ca/api/cccs/rss/v1/get?feed=news_events_guidance&lang=en";
const ncscNlUrl = "https://feeds.english.ncsc.nl/news.rss";
const belgiumUrl = "https://ccb.belgium.be/en/rss";
const australiaUrl = "https://www.cyber.gov.au/acsc/view-all-content/news/rss";
const csaUrl = "https://www.csa.gov.sg/Content/RSS-Feed";

const getRss = (url) => {
  // make the function async

  fetch(url)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      // can be entry or item depending on the url

      const items = data.querySelectorAll("item");

      let html = ``;
      items.forEach((el) => {
        const title = el.querySelector("title").textContent;
        const link = el.querySelector("link").textContent;
        // if there is no description, use the title
        const desc = el.querySelector("description")
          ? el.querySelector("description").textContent
          : title;

        html += `
        <div class="card">
            
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                <a href="${link}" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `;
      });

      container.innerHTML = html;
    });
};

const getRss2 = (url) => {
  fetch(url)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
      const items = data.querySelectorAll("entry");
      let html = ``;
      items.forEach((el) => {
        const title = el.querySelector("title").textContent;
        const link = el.querySelector("link").textContent;
        const desc = el.querySelector("summary").textContent;

        html += `
        <div class="card">

            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${desc}</p>
                <a href="${link}" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `;
      });
      container.innerHTML = html;
    });
};

const data = [
  { name: ncscBtn, url: nscsUrl },
  { name: ccnBtn, url: ccnUrl },
  { name: nukibBtn, url: nukibUrl },
  { name: riaBtn, url: riaUrl },
  { name: cfcsBtn, url: cfcsUrl },
  { name: dnscBtn, url: dnscUrl },
  { name: ncsnNlBtn, url: ncscNlUrl },
  { name: belgiumBtn, url: belgiumUrl },
  { name: australiaBtn, url: australiaUrl },
  { name: csaBtn, url: csaUrl },
];

const data2 = [
  { name: dcmsBtn, url: dcmsUrl },
  { name: canadaBtn, url: canadaUrl },
];

data.forEach((el) => {
  el.name.addEventListener("click", (e) => {
    e.preventDefault();
    getRss(el.url);
  });
});

data2.forEach((el) => {
  el.name.addEventListener("click", (e) => {
    e.preventDefault();
    getRss2(el.url);
  });
});
