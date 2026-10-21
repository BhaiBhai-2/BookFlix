const books = [
  {id:11,title:"Alice's Adventures in Wonderland",author:"Lewis Carroll",genre:"Fantasy",year:1865,description:"Follow Alice down a rabbit hole into a wonderfully strange world of curious creatures, wordplay, and impossible adventures.",symbol:"♧",colors:["#275b54","#132e35"],featured:true},
  {id:1342,title:"Pride and Prejudice",author:"Jane Austen",genre:"Romance",year:1813,description:"Elizabeth Bennet and Mr. Darcy navigate first impressions, family expectations, wit, and the difficult path toward love.",symbol:"❦",colors:["#7e383b","#351c2a"]},
  {id:84,title:"Frankenstein",author:"Mary Shelley",genre:"Horror",year:1818,description:"Victor Frankenstein's daring experiment creates a being whose loneliness and longing expose the consequences of ambition.",symbol:"⚡",colors:["#40505b","#17212d"]},
  {id:2701,title:"Moby-Dick",author:"Herman Melville",genre:"Adventure",year:1851,description:"Captain Ahab leads the whaling ship Pequod on an obsessive pursuit of the white whale Moby Dick.",symbol:"♆",colors:["#315d72","#132b3b"]},
  {id:1661,title:"The Adventures of Sherlock Holmes",author:"Arthur Conan Doyle",genre:"Mystery",year:1892,description:"Join Sherlock Holmes and Dr. Watson as sharp observation and deduction unravel a collection of baffling cases.",symbol:"⌕",colors:["#6a5135","#29251f"]},
  {id:98,title:"A Tale of Two Cities",author:"Charles Dickens",genre:"Drama",year:1859,description:"Set in London and Paris during the French Revolution, this novel explores sacrifice, injustice, and resurrection.",symbol:"⚜",colors:["#6c3030","#29191e"]},
  {id:76,title:"Adventures of Huckleberry Finn",author:"Mark Twain",genre:"Adventure",year:1884,description:"Huck Finn and Jim travel down the Mississippi River in a story about freedom, conscience, and friendship.",symbol:"≈",colors:["#4e6a4c","#20362c"]},
  {id:74,title:"The Adventures of Tom Sawyer",author:"Mark Twain",genre:"Adventure",year:1876,description:"Mischievous Tom Sawyer turns everyday life into a series of escapades along the banks of the Mississippi.",symbol:"✦",colors:["#b46a37","#4a3025"]},
  {id:2600,title:"War and Peace",author:"Leo Tolstoy",genre:"Drama",year:1869,description:"Families and friends experience love, ambition, and upheaval against the sweeping backdrop of the Napoleonic Wars.",symbol:"✥",colors:["#746348","#30291f"]},
  {id:4300,title:"Ulysses",author:"James Joyce",genre:"Classic Literature",year:1922,description:"A landmark modernist novel following Leopold Bloom and Stephen Dedalus through one day in Dublin.",symbol:"◉",colors:["#526a73","#202e37"]},
  {id:1260,title:"Jane Eyre",author:"Charlotte Brontë",genre:"Romance",year:1847,description:"An independent young governess searches for belonging and love while guarding her dignity and convictions.",symbol:"❧",colors:["#785144","#332321"]},
  {id:158,title:"Wuthering Heights",author:"Emily Brontë",genre:"Drama",year:1847,description:"A passionate and destructive love story unfolds across the windswept Yorkshire moors.",symbol:"☾",colors:["#56536b","#242333"]},
  {id:1400,title:"Great Expectations",author:"Charles Dickens",genre:"Drama",year:1861,description:"Young Pip's unexpected fortune changes his hopes, relationships, and understanding of what truly matters.",symbol:"✧",colors:["#526d61","#1e302b"]},
  {id:64317,title:"The Great Gatsby",author:"F. Scott Fitzgerald",genre:"Drama",year:1925,description:"In the glittering Jazz Age, Jay Gatsby reaches for an idealized past amid wealth, longing, and illusion.",symbol:"◇",colors:["#32677a","#17313d"]},
  {id:174,title:"The Picture of Dorian Gray",author:"Oscar Wilde",genre:"Horror",year:1890,description:"A beautiful young man remains outwardly untouched by time while a portrait bears the marks of his choices.",symbol:"◈",colors:["#4b5b43","#202b24"]},
  {id:55,title:"The Wonderful Wizard of Oz",author:"L. Frank Baum",genre:"Fantasy",year:1900,description:"Dorothy and her companions follow the yellow brick road in search of courage, wisdom, a heart, and home.",symbol:"✺",colors:["#397b75","#173c42"]},
  {id:35,title:"The Time Machine",author:"H. G. Wells",genre:"Science Fiction",year:1895,description:"A Victorian inventor travels far into the future and discovers a world transformed in unsettling ways.",symbol:"⌛",colors:["#65606c","#282735"]},
  {id:36,title:"The War of the Worlds",author:"H. G. Wells",genre:"Science Fiction",year:1898,description:"A terrifying Martian invasion throws Victorian England into chaos and tests humanity's will to survive.",symbol:"☄",colors:["#7a3d35","#351b20"]},
  {id:1184,title:"The Count of Monte Cristo",author:"Alexandre Dumas",genre:"Adventure",year:1844,description:"Wrongfully imprisoned, Edmond Dantès escapes and returns with a carefully planned quest for justice and revenge.",symbol:"♜",colors:["#4b536a","#202332"]},
  {id:120,title:"Treasure Island",author:"Robert Louis Stevenson",genre:"Adventure",year:1883,description:"Young Jim Hawkins joins a dangerous voyage in search of buried treasure, pirates, and a legendary map.",symbol:"☠",colors:["#5a744e","#25382a"]},
  {id:145,title:"Around the World in Eighty Days",author:"Jules Verne",genre:"Adventure",year:1873,description:"Phileas Fogg wagers that he can circle the globe in eighty days, racing clocks, obstacles, and unexpected trouble.",symbol:"◎",colors:["#a16b3b","#473022"]},
  {id:113,title:"The Secret Garden",author:"Frances Hodgson Burnett",genre:"Drama",year:1911,description:"A lonely girl discovers a locked garden that slowly brings healing, friendship, and new life to a neglected estate.",symbol:"❀",colors:["#54794b","#203d2b"]},
  {id:46,title:"A Christmas Carol",author:"Charles Dickens",genre:"Fantasy",year:1843,description:"The miserly Ebenezer Scrooge is visited by mysterious spirits who show him the past, present, and possible future.",symbol:"❄",colors:["#7a3335","#321d25"]},
  {id:1257,title:"The Three Musketeers",author:"Alexandre Dumas",genre:"Adventure",year:1844,description:"D'Artagnan joins Athos, Porthos, and Aramis in a swashbuckling tale of loyalty, intrigue, and daring.",symbol:"⚔",colors:["#7c5139","#38251e"]},
  {id:996,title:"Don Quixote",author:"Miguel de Cervantes",genre:"Adventure",year:1605,description:"An idealistic would-be knight and his practical squire set out on comic adventures that question fantasy and reality.",symbol:"♘",colors:["#a07b45","#46351f"]},
  {id:135,title:"Les Misérables",author:"Victor Hugo",genre:"Drama",year:1862,description:"Jean Valjean seeks redemption in a society shaped by poverty, law, compassion, and revolution.",symbol:"✊",colors:["#4b5d69","#1f2b35"]},
  {id:1497,title:"The Republic",author:"Plato",genre:"Philosophy",year:-380,description:"Plato's influential philosophical dialogue explores justice, the ideal city, education, and the nature of knowledge.",symbol:"☼",colors:["#9b8050","#44371f"]},
  {id:1998,title:"Thus Spake Zarathustra",author:"Friedrich Nietzsche",genre:"Philosophy",year:1883,description:"A poetic philosophical work exploring morality, transformation, individuality, and the search for meaning.",symbol:"☀",colors:["#a05b39","#48291f"]},
  {id:219,title:"Heart of Darkness",author:"Joseph Conrad",genre:"Classic Literature",year:1899,description:"A river journey into the Congo becomes a disturbing examination of imperialism, power, and the human capacity for cruelty.",symbol:"◌",colors:["#55534b","#242622"]},
  {id:3207,title:"Leviathan",author:"Thomas Hobbes",genre:"Classic Literature",year:1400,description:"Leviathan or the Matter Former & Power of a Common Wealttesciastiacal and Civill",symbol:"✥",colors:["#786044","#362a21"]}
];

const $ = (selector) => document.querySelector(selector);
const bookRows = $("#bookRows");
const allBooksGrid = $("#allBooksGrid");
const searchInput = $("#searchInput");
const genreFilter = $("#genreFilter");
const bookModal = $("#bookModal");
const readerModal = $("#readerModal");
const toast = $("#toast");
let activeBook = books[0];
let readerFontSize = 19;
let toastTimer;
let readerTextCache = new Map();
let savedBooks = readSavedBooks();

function readSavedBooks() {
  try { return JSON.parse(localStorage.getItem("bookflixMyList") || "[]").filter(id => books.some(b => b.id === id)); }
  catch { return []; }
}
function persistSavedBooks() {
  try { localStorage.setItem("bookflixMyList", JSON.stringify(savedBooks)); }
  catch { showToast("Your browser could not save My List."); }
  $("#savedCount").textContent = savedBooks.length;
}
function isSaved(book) { return savedBooks.includes(book.id); }
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}
function coverStyle(book) {
  return `--cover1:${book.colors[0]};--cover2:${book.colors[1]}`;
}
function createBookCard(book) {
  const card = document.createElement("article");
  card.className = "book-card";
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `View ${book.title} by ${book.author}`);
  card.innerHTML = `
    <div class="cover-art" style="${coverStyle(book)}">
      <span class="cover-number">BOOKFLIX · ${String(books.indexOf(book)+1).padStart(2,"0")}</span>
      <span class="cover-symbol" aria-hidden="true">${book.symbol}</span>
      <div><div class="cover-title">${escapeHTML(book.title)}</div><div class="cover-author">${escapeHTML(book.author)}</div></div>
    </div>
    <div class="card-hover-actions">
      <button class="mini-action ${isSaved(book) ? "saved" : ""}" type="button" aria-label="${isSaved(book) ? "Remove from" : "Add to"} My List" title="${isSaved(book) ? "Remove from My List" : "Add to My List"}">${isSaved(book) ? "✓" : "+"}</button>
    </div>
    <p class="card-title">${escapeHTML(book.title)}</p><p class="card-author">${escapeHTML(book.author)}</p>`;
  card.addEventListener("click", () => openBookDetails(book));
  card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBookDetails(book); } });
  const saveButton = card.querySelector(".mini-action");
  saveButton.addEventListener("click", e => { e.stopPropagation(); toggleSaved(book); renderLibrary(); });
  return card;
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function filteredBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;
  return books.filter(book => {
    const matchesQuery = !query || `${book.title} ${book.author} ${book.genre} ${book.description}`.toLowerCase().includes(query);
    const matchesGenre = genre === "All" || book.genre === genre;
    return matchesQuery && matchesGenre;
  });
}
function renderLibrary() {
  const query = searchInput.value.trim();
  const genre = genreFilter.value;
  const filtered = filteredBooks();
  const searchActive = !!query || genre !== "All";
  $("#searchStatus").textContent = query ? `${filtered.length} result${filtered.length === 1 ? "" : "s"} for “${query}”` : genre !== "All" ? `${filtered.length} ${genre} book${filtered.length === 1 ? "" : "s"}` : "";
  $("#sectionTitle").textContent = query ? "Search results" : genre !== "All" ? `${genre} books` : "Explore the collection";
  $("#allBooksSection").hidden = filtered.length === 0;
  $("#emptyState").hidden = filtered.length !== 0;
  $("#bookCountLabel").textContent = `${filtered.length} TITLE${filtered.length === 1 ? "" : "S"}`;
  allBooksGrid.replaceChildren(...filtered.map(createBookCard));
  bookRows.replaceChildren();

  if (searchActive) {
    const section = document.createElement("section");
    section.className = "genre-row";
    const header = document.createElement("div");
    header.className = "genre-row-header";
    header.innerHTML = `<div><h3>${query ? "Matching books" : escapeHTML(genre)}</h3><p class="row-subtitle">Find your next favorite</p></div>`;
    section.append(header);
    const strip = document.createElement("div");
    strip.className = "book-strip";
    filtered.forEach(book => strip.append(createBookCard(book)));
    section.append(strip);
    bookRows.append(section);
  } else {
    const genres = [
      {name:"Popular on Bookflix", subtitle:"A great place to begin", ids:[11,1342,84,1661,2701,55,35,120,1184,76,74,36]},
      {name:"Adventure & Discovery", subtitle:"Journeys beyond the ordinary", ids:[76,74,1184,120,145,844,514]},
      {name:"Love & Relationships", subtitle:"Romance, wit, and complicated hearts", ids:[1342,1260,158,113,1400]},
      {name:"Mystery & Dark Tales", subtitle:"Secrets, shadows, and strange happenings", ids:[1661,84,174,36,219]},
      {name:"Fantasy & Imagination", subtitle:"Worlds that live beyond the page", ids:[11,55,46,35,36]},
      {name:"Classics & Big Ideas", subtitle:"Stories and thoughts that shaped literature", ids:[2600,4300,64317,135,1497,1998,3207,98]}
    ];
    for (const group of genres) {
      const groupBooks = group.ids.map(id => books.find(b => b.id === id)).filter(Boolean);
      const section = document.createElement("section");
      section.className = "genre-row";
      const header = document.createElement("div");
      header.className = "genre-row-header";
      header.innerHTML = `<div><h3>${group.name}</h3><p class="row-subtitle">${group.subtitle}</p></div>`;
      const controls = document.createElement("div");
      controls.className = "row-controls";
      controls.innerHTML = `<button class="row-arrow" type="button" aria-label="Scroll ${group.name} left">‹</button><button class="row-arrow" type="button" aria-label="Scroll ${group.name} right">›</button>`;
      header.append(controls);
      const strip = document.createElement("div");
      strip.className = "book-strip";
      groupBooks.forEach(book => strip.append(createBookCard(book)));
      const [left, right] = controls.querySelectorAll("button");
      left.addEventListener("click", () => strip.scrollBy({left:-strip.clientWidth*0.8,behavior:"smooth"}));
      right.addEventListener("click", () => strip.scrollBy({left:strip.clientWidth*0.8,behavior:"smooth"}));
      section.append(header, strip);
      bookRows.append(section);
    }
  }
  $("#myListNav").classList.toggle("active", showingMyList);
  $("#allBooksSection").querySelector("h2").textContent = showingMyList ? "Your saved books" : "All 30 books";
  $("#bookCountLabel").textContent = `${filtered.length} TITLE${filtered.length === 1 ? "" : "S"}`;
  persistSavedBooks();
}
let showingMyList = false;
function toggleSaved(book) {
  if (isSaved(book)) {
    savedBooks = savedBooks.filter(id => id !== book.id);
    showToast(`Removed “${book.title}” from My List`);
  } else {
    savedBooks.push(book.id);
    showToast(`Added “${book.title}” to My List`);
  }
  persistSavedBooks();
  if (bookModal.classList.contains("open")) updateModalSaveButton();
}
function updateModalSaveButton() {
  const saved = isSaved(activeBook);
  $("#modalSave").textContent = saved ? "✓ In My List" : "＋ My List";
}
function openBookDetails(book) {
  activeBook = book;
  $("#modalGenre").textContent = `${book.genre.toUpperCase()} · ${book.year > 0 ? book.year : "CLASSIC TEXT"}`;
  $("#modalTitle").textContent = book.title;
  $("#modalAuthor").textContent = `By ${book.author}`;
  $("#modalDescription").textContent = book.description;
  $("#modalFactGenre").textContent = book.genre;
  $("#modalFactAuthor").textContent = book.author;
  $("#gutenbergLink").href = `https://www.gutenberg.org/ebooks/${book.id}`;
  $("#modalHero").style.setProperty("--cover1", book.colors[0]);
  $("#modalHero").style.setProperty("--cover2", book.colors[1]);
  $("#modalHero").setAttribute("data-symbol", book.symbol);
  updateModalSaveButton();
  bookModal.hidden = false;
  bookModal.classList.add("open");
  document.body.style.overflow = "hidden";
  $("#closeModal").focus();
}
function closeBookDetails() {
  bookModal.hidden = true;
  bookModal.classList.remove("open");
  if (readerModal.hidden) document.body.style.overflow = "";
}
function openBookDetails(book) {
  activeBook = book;
  $("#modalGenre").textContent = `${book.genre.toUpperCase()} · ${book.year > 0 ? book.year : "CLASSIC TEXT"}`;
  $("#modalTitle").textContent = book.title;
  $("#modalAuthor").textContent = `By ${book.author}`;
  $("#modalDescription").textContent = book.description;
  $("#modalFactGenre").textContent = book.genre;
  $("#modalFactAuthor").textContent = book.author;
  $("#gutenbergLink").href = `https://www.gutenberg.org/ebooks/${book.id}`;
  $("#modalHero").style.setProperty("--cover1", book.colors[0]);
  $("#modalHero").style.setProperty("--cover2", book.colors[1]);
  $("#modalHero").setAttribute("data-symbol", book.symbol);
  updateModalSaveButton();

  bookModal.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => bookModal.classList.add("open"));
  $("#closeModal").focus();
}

function closeBookDetails() {
  bookModal.classList.remove("open");
  setTimeout(() => {
    if (!bookModal.classList.contains("open")) {
      bookModal.hidden = true;
    }
  }, 300);
  if (readerModal.hidden) document.body.style.overflow = "";
}

function openReader(book) {
  activeBook = book;
  closeBookDetails();
  readerFontSize = 19;
  
  const loader = document.getElementById("loadingBox");
  loader.classList.add("active");

  $("#readerTitle").textContent = book.title;
  $("#readerBookTitle").textContent = book.title;
  $("#readerBookAuthor").textContent = `By ${book.author}`;
  $("#readerSource").href = `https://www.gutenberg.org/ebooks/${book.id}`;
  $("#readerText").textContent = "";
  $("#readerText").classList.remove("error");
  $("#readerStatus").hidden = false;
  $("#readerStatus").textContent = "Please Wait, Loading the Story from https://www.gutenberg.org/ebooks. ";
  $("#readerProgressBar").style.width = "0%";
  
  loadBookText(book);

  setTimeout(() => {
    readerModal.hidden = false;
    document.body.style.overflow = "hidden";
    loader.classList.remove("active");
    requestAnimationFrame(() => readerModal.classList.add("open"));
  }, 1000);
}

function cleanGutenbergText(text) {
  text = text.replace(/^\uFEFF/, "").replace(/\r/g, "");
  const startMarkers = [/\*\*\* START OF (?:THE|THIS) PROJECT GUTENBERG EBOOK[^\n]*\*\*\*/i, /START OF THE PROJECT GUTENBERG EBOOK[^\n]*/i];
  for (const marker of startMarkers) {
    const match = marker.exec(text);
    if (match) { text = text.slice(match.index + match[0].length); break; }
  }
  const endMarkers = [/\*\*\* END OF (?:THE|THIS) PROJECT GUTENBERG EBOOK[^\n]*\*\*\*/i, /END OF THE PROJECT GUTENBERG EBOOK[^\n]*/i];
  for (const marker of endMarkers) {
    const match = marker.exec(text);
    if (match) { text = text.slice(0, match.index); break; }
  }
  return text.trim();
}
function showReaderText(text) {
  $("#readerText").textContent = text;
  $("#readerStatus").textContent = "Story Fully Loaded from the Internet, Enjoy your reading.";
  $("#readerStatus").hidden = false;
  $("#readerText").style.fontSize = `${readerFontSize}px`;
}
function closeReader() {
  readerModal.classList.remove("open");
  setTimeout(() => {
    if (!readerModal.classList.contains("open")) {
      readerModal.hidden = true;
    }
  }, 300);
  document.body.style.overflow = "";
}
function scrollReaderProgress() {
  if (readerModal.hidden) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  $("#readerProgressBar").style.width = `${Math.min(100,Math.max(0,percent))}%`;
}

// Interactions
searchInput.addEventListener("input", () => { showingMyList = false; renderLibrary(); });
genreFilter.addEventListener("change", () => { showingMyList = false; renderLibrary(); });
$("#clearSearch").addEventListener("click", () => { searchInput.value = ""; genreFilter.value = "All"; showingMyList = false; renderLibrary(); });
$("#myListNav").addEventListener("click", () => {
  showingMyList = !showingMyList;
  searchInput.value = "";
  genreFilter.value = "All";
  if (showingMyList) {
    const saved = books.filter(book => isSaved(book));
    $("#sectionTitle").textContent = "My List";
    $("#searchStatus").textContent = saved.length ? "Your saved books, ready when you are." : "Save a book using the + button to find it here later.";
    bookRows.replaceChildren();
    allBooksGrid.replaceChildren(...saved.map(createBookCard));
    $("#allBooksSection").hidden = false;
    $("#emptyState").hidden = true;
    $("#allBooksSection").querySelector("h2").textContent = "Your saved books";
    $("#bookCountLabel").textContent = `${saved.length} TITLE${saved.length === 1 ? "" : "S"}`;
    $("#myListNav").classList.add("active");
  } else renderLibrary();
  $("#browse").scrollIntoView({behavior:"smooth"});
});
$("#heroRead").addEventListener("click", () => openReader(books[0]));
$("#heroInfo").addEventListener("click", () => openBookDetails(books[0]));
$("#modalRead").addEventListener("click", () => openReader(activeBook));
$("#modalSave").addEventListener("click", () => { toggleSaved(activeBook); updateModalSaveButton(); renderLibrary(); });
$("#closeModal").addEventListener("click", closeBookDetails);
bookModal.addEventListener("click", e => { if (e.target.hasAttribute("data-close-modal")) closeBookDetails(); });
$("#closeReader").addEventListener("click", closeReader);
$("#fontDown").addEventListener("click", () => { readerFontSize = Math.max(14,readerFontSize-1); $("#readerText").style.fontSize = `${readerFontSize}px`; });
$("#fontUp").addEventListener("click", () => { readerFontSize = Math.min(30,readerFontSize+1); $("#readerText").style.fontSize = `${readerFontSize}px`; });
readerModal.addEventListener("scroll", () => {
  const scrollable = readerModal;
  const max = scrollable.scrollHeight - scrollable.clientHeight;
  const progress = max > 0 ? scrollable.scrollTop / max * 100 : 0;
  $("#readerProgressBar").style.width = `${progress}%`;
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    if (!readerModal.hidden) closeReader();
    else if (!bookModal.hidden) closeBookDetails();
  }
});
persistSavedBooks();
renderLibrary();

function triggerLoader() {
  const loader = document.getElementById("loadingBox");

  // 1. Show the spinning box overlay
  loader.classList.add("active");

  // 2. Keep it spinning for 2 seconds (2000 milliseconds)
  setTimeout(() => {
    
    // --- PUT YOUR WEBPAGE SWITCHING CODE HERE ---
    // Example: 
    // window.location.hash = "#reader"; 
    // or switchView("reader");
    console.log("Webpage switched!");
    // --------------------------------------------

    // 3. Hide the loading box
    loader.classList.remove("active");
  }, 2000);
}

function transitionToPage(url) {
  const loader = document.getElementById("loadingBox");
  if (loader) {
    // 1. Fade the black overlay in
    loader.classList.add("active");

    // 2. Wait 1 second (1000ms) on the black screen, then navigate to the correct book page
    setTimeout(() => {
      window.location.href = url;
    }, 1000);
  } else {
    window.location.href = url;
  }
}

const dropdown = document.getElementById("genreDropdown");
const selected = document.getElementById("genreSelected");
const options = document.querySelectorAll(".dropdown-option");
const selectedText = document.getElementById("selectedGenreText");
const hiddenSelect = document.getElementById("genreFilter");

// Toggle open/close
selected.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdown.classList.toggle("open");
});

// Select option and sync with hidden select filter
options.forEach(option => {
  option.addEventListener("click", () => {
    const value = option.getAttribute("data-value");
    selectedText.textContent = option.textContent;
    dropdown.classList.remove("open");

    // Update hidden select element and dispatch change event for your app filters
    hiddenSelect.value = value;
    hiddenSelect.dispatchEvent(new Event("change"));
  });
});

// Close when clicking outside
window.addEventListener("click", () => {
  dropdown.classList.remove("open");
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. FADE IN: Trigger fade-in right after the page loads
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 50);

  // 2. FADE OUT: Attach this to any "Back to Home" or exit button
  const exitButton = document.getElementById("backHomeBtn"); // Replace with your actual home/exit button ID or class
  
  if (exitButton) {
    exitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Stop instant navigation
      
      // Trigger the fade-out overlay
      document.body.classList.remove("loaded");
      document.body.classList.add("fade-out");

      // Wait for the animation to finish (600ms) before changing pages
      setTimeout(() => {
        window.location.href = "index.html"; // Goes back to your opening page
      }, 600);
    });
  }
});