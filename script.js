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
  fetch(url)
    .then((response) => response.text())
    .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((data) => {
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

ncscBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(nscsUrl);
});

ccnBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(ccnUrl);
});

dcmsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss2(dcmsUrl);
});

nukibBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(nukibUrl);
});

riaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(riaUrl);
});

cfcsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(cfcsUrl);
});

dnscBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(dnscUrl);
});

canadaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss2(canadaUrl);
});

ncsnNlBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(ncscNlUrl);
});

belgiumBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(belgiumUrl);
});

australiaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(australiaUrl);
});

csaBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getRss(csaUrl);
});

const url1 =
  "https://newsapi.org/v2/everything?" +
  "q=cyber&" +
  "sortBy=publishedAt&" +
  "apiKey=f8d4323892124996a20a2ef05f934c89" +
  "&language=en";

const req1 = new Request(url1);

const getNews = () => {
  fetch(req1)
    .then((response) => response.json())
    .then((data) => {
      const items = data.articles;
      let html = ``;
      items.forEach((el) => {
        const title = el.title;
        const link = el.url;
        const desc = el.description;
        const img = el.urlToImage;

        html += `
        <div class="card">

            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <img src="${img}" alt="${title}" class="img-fluid">
                <p class="card-text">${desc}</p>
                <a href="${link}" class="btn btn-primary">Read More</a>
            </div>
        </div>
        `;
      });
      container.innerHTML = html;
    });
};

getNews(req1);
