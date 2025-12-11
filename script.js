const quizQuestions = [
  {
    concept: "Collections & Organizing Systems",
    question: "Which description best matches an 'organizing system'?",
    options: [
      "Any pile of things someone owns",
      "An intentionally arranged collection of resources and the interactions they support",
      "A spreadsheet with random numbers",
      "A single resource with a unique identifier",
    ],
    answerIndex: 1,
    explanation:
      "Glushko defines an organizing system as an intentionally arranged collection of resources and the interactions they support.",
  },
  {
    concept: "Resources",
    question: "In INFO 202, which of these is closest to a 'resource'?",
    options: [
      "Any abstract idea someone can think of",
      "Anything of value that can support goal-directed activity",
      "Only physical objects stored in a library",
      "Only digital files on a computer",
    ],
    answerIndex: 1,
    explanation:
      "Resources are things of value that can support some activity or goal, and they can be physical, digital, or conceptual.",
  },
  {
    concept: "Identifiers",
    question: "Which of these is most like an identifier (vs a name)?",
    options: [
      "“Harry Potter and the Sorcerer’s Stone”",
      "“Fantasy books for kids”",
      "ISBN 978-0590353427",
      "“The book with the blue cover on my desk”",
    ],
    answerIndex: 2,
    explanation:
      "Identifiers are assigned in a controlled way and are unique within some scope; an ISBN is a classic example.",
  },
  {
    concept: "Controlled Vocabularies",
    question:
      "What is the main purpose of a controlled vocabulary in an organizing system?",
    options: [
      "To let everyone describe things however they want",
      "To intentionally limit and standardize the terms used to describe resources",
      "To increase the number of synonyms in the system",
      "To prevent resources from being found",
    ],
    answerIndex: 1,
    explanation:
      "Controlled vocabularies intentionally restrict and standardize terms so that descriptions are consistent and retrieval works better.",
  },
  {
    concept: "The Vocabulary Problem",
    question:
      "The 'vocabulary problem' refers to which of the following issues?",
    options: [
      "People forget the names of concepts they have learned",
      "There is never enough memory to store all possible words",
      "Different people use different words to describe the same thing",
      "Only experts know the correct technical vocabulary",
    ],
    answerIndex: 2,
    explanation:
      "The vocabulary problem is that different people often use different words for the same concept, making search and retrieval difficult.",
  },
  {
    concept: "Category Principles",
    question:
      "Grouping items by “things you take on a camping trip” is an example of which principle?",
    options: ["Enumeration", "Single property", "Goal-based", "Theory-based"],
    answerIndex: 2,
    explanation:
      "Goal-based categories group items by what you are trying to accomplish—in this case, going camping.",
  },
  {
    concept: "Category Principles",
    question:
      "A wine shop that groups bottles strictly by country (France, Italy, Chile, etc.) is mainly using which principle?",
    options: [
      "Single property",
      "Multiple properties",
      "Goal-based",
      "Theory-based",
    ],
    answerIndex: 0,
    explanation:
      "Using one attribute (country of origin) to define all groups is an example of a single-property category scheme.",
  },
  {
    concept: "Prototype Theory",
    question: "In prototype theory, which statement is true?",
    options: [
      "All category members are equally good examples.",
      "People match new items against a single best example in their mind.",
      "Categories only exist if we write down strict rules.",
      "Typicality doesn’t matter for categorization.",
    ],
    answerIndex: 1,
    explanation:
      "Prototype theory says people often compare candidates against a mental 'best example' of a category.",
  },
  {
    concept: "Hierarchy vs Taxonomy",
    question:
      "Which statement best captures the difference between a hierarchy and a taxonomy?",
    options: [
      "They are exactly the same thing",
      "Hierarchies are only for physical objects; taxonomies are for digital ones",
      "A taxonomy is a hierarchy with a consistent organizing principle all the way down",
      "A hierarchy is always better designed than a taxonomy",
    ],
    answerIndex: 2,
    explanation:
      "A taxonomy is a special kind of hierarchy where the containment or 'is-a' relation is consistent at every level.",
  },
  {
    concept: "Category Structures",
    question:
      "Which structure best supports starting from different attributes (e.g., color OR size OR brand)?",
    options: [
      "Flat list",
      "Single hierarchy",
      "Faceted structure",
      "Random clustering",
    ],
    answerIndex: 2,
    explanation:
      "Faceted structures let you start navigating from whichever facet (attribute) you care about.",
  },
];

//  Audio Cards
const audioCards = [
  {
    id: "collections",
    title: "Collections & Organizing Systems",
    summary:
      "What it means to intentionally arrange resources and support specific interactions.",
    file: "audio/collections.mp3",
  },
  {
    id: "identifiers",
    title: "Identifiers & Controlled Vocabularies",
    summary:
      "How unique, persistent identifiers and controlled terms keep collections consistent.",
    file: "audio/identifiers.mp3",
  },
  {
    id: "categories",
    title: "Creating Categories",
    summary:
      "Different principles like enumeration, single properties, and goal-based categories.",
    file: "audio/categories.mp3",
  },
  {
    id: "prototypes",
    title: "Prototype Theory",
    summary: "Why some category members feel more typical than others.",
    file: "audio/prototypes.mp3",
  },
  {
    id: "structures",
    title: "Category Structures",
    summary: "Flat, hierarchical, and faceted structures and what they afford.",
    file: "audio/structures.mp3",
  },
];

//  Prototype Demo Data
const protoCategories = {
  bird: [
    { name: "Sparrow", score: 95 },
    { name: "Pigeon", score: 90 },
    { name: "Eagle", score: 85 },
    { name: "Penguin", score: 60 },
    { name: "Ostrich", score: 55 },
    { name: "Chicken", score: 50 },
  ],
  furniture: [
    { name: "Chair", score: 95 },
    { name: "Sofa", score: 90 },
    { name: "Table", score: 85 },
    { name: "Beanbag", score: 60 },
    { name: "Floor cushion", score: 55 },
    { name: "Rock", score: 20 },
  ],
};

// Bird Data for Hierarchy vs Facets
const birds = [
  { name: "Robin", sound: "sings", habitat: "tree", beak: "stubby" },
  { name: "Crow", sound: "caws", habitat: "ground", beak: "stubby" },
  { name: "Penguin", sound: "chirps", habitat: "swimmer", beak: "stubby" },
  { name: "Heron", sound: "sings", habitat: "swimmer", beak: "long" },
  { name: "Woodpecker", sound: "chirps", habitat: "tree", beak: "long" },
  { name: "Seagull", sound: "caws", habitat: "swimmer", beak: "long" },
];

//  Quiz Logic
let currentQuestionIndex = 0;
let hasAnswered = false;

function renderQuestion() {
  const container = document.getElementById("quiz-container");
  const progress = document.getElementById("quiz-progress");
  const q = quizQuestions[currentQuestionIndex];

  container.innerHTML = "";
  hasAnswered = false;

  const title = document.createElement("h3");
  title.textContent = q.concept;
  container.appendChild(title);

  const questionP = document.createElement("p");
  questionP.textContent = q.question;
  container.appendChild(questionP);

  q.options.forEach((opt, idx) => {
    const label = document.createElement("label");
    label.className = "quiz-option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "quiz-option";
    input.value = idx;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" " + opt));
    container.appendChild(label);
  });

  const feedback = document.createElement("div");
  feedback.id = "quiz-feedback";
  feedback.className = "feedback";
  container.appendChild(feedback);

  const checkBtn = document.createElement("button");
  checkBtn.textContent = "Check answer";
  checkBtn.addEventListener("click", checkAnswer);
  container.appendChild(checkBtn);

  progress.textContent = `Question ${currentQuestionIndex + 1} of ${
    quizQuestions.length
  }`;
}

function checkAnswer() {
  if (hasAnswered) return;
  const q = quizQuestions[currentQuestionIndex];
  const selected = document.querySelector("input[name='quiz-option']:checked");
  const feedback = document.getElementById("quiz-feedback");

  if (!selected) {
    feedback.textContent = "Pick an option first 🙂";
    feedback.style.color = "#4b5563";
    return;
  }

  hasAnswered = true;
  const idx = Number(selected.value);
  if (idx === q.answerIndex) {
    feedback.textContent = "✅ Correct! " + q.explanation;
    feedback.style.color = "#15803d";
  } else {
    feedback.textContent = "❌ Not quite. " + q.explanation;
    feedback.style.color = "#b91c1c";
  }
}

//  Audio Cards Rendering
function renderAudioCards() {
  const container = document.getElementById("audio-cards");
  audioCards.forEach((card) => {
    const div = document.createElement("div");
    div.className = "demo";

    const h3 = document.createElement("h3");
    h3.textContent = card.title;
    div.appendChild(h3);

    const p = document.createElement("p");
    p.textContent = card.summary;
    div.appendChild(p);

    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = card.file; // add actual files later
    div.appendChild(audio);

    container.appendChild(div);
  });
}

//  Prototype Demo Logic
function renderProtoDemo() {
  const select = document.getElementById("proto-category-select");
  const slider = document.getElementById("proto-slider");
  const label = document.getElementById("proto-threshold-label");
  const itemsDiv = document.getElementById("proto-items");
  const note = document.getElementById("proto-note");

  function update() {
    const cat = select.value;
    const threshold = Number(slider.value);
    label.textContent = threshold;
    itemsDiv.innerHTML = "";

    const items = protoCategories[cat].filter((i) => i.score >= threshold);
    items
      .sort((a, b) => b.score - a.score)
      .forEach((i) => {
        const chip = document.createElement("span");
        chip.className = "chip";
        chip.textContent = `${i.name} (${i.score})`;
        itemsDiv.appendChild(chip);
      });

    note.textContent =
      "Higher scores are more prototypical members. As you raise the threshold, only the 'best' examples remain.";
  }

  select.addEventListener("change", update);
  slider.addEventListener("input", update);
  update();
}

//  Hierarchy vs Facets Logic
function filterBirds({ sound, habitat, beak }) {
  return birds.filter((b) => {
    if (sound && b.sound !== sound) return false;
    if (habitat && b.habitat !== habitat) return false;
    if (beak && b.beak !== beak) return false;
    return true;
  });
}

function renderBirdChips(containerId, filtered) {
  const div = document.getElementById(containerId);
  div.innerHTML = "";
  filtered.forEach((b) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = `${b.name} (${b.sound}, ${b.habitat}, ${b.beak})`;
    div.appendChild(chip);
  });
}

function setupHierarchyFacets() {
  const hSound = document.getElementById("h-sound-select");
  const hHab = document.getElementById("h-habitat-select");
  const hBeak = document.getElementById("h-beak-select");

  const fSound = document.getElementById("f-sound-select");
  const fHab = document.getElementById("f-habitat-select");
  const fBeak = document.getElementById("f-beak-select");

  function updateHierarchy() {
    const res = filterBirds({
      sound: hSound.value || null,
      habitat: hHab.value || null,
      beak: hBeak.value || null,
    });
    renderBirdChips("hierarchy-results", res);
  }

  function updateFacets() {
    const res = filterBirds({
      sound: fSound.value || null,
      habitat: fHab.value || null,
      beak: fBeak.value || null,
    });
    renderBirdChips("facets-results", res);
  }

  [hSound, hHab, hBeak].forEach((el) =>
    el.addEventListener("change", updateHierarchy)
  );
  [fSound, fHab, fBeak].forEach((el) =>
    el.addEventListener("change", updateFacets)
  );

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });

  updateHierarchy();
  updateFacets();
}

//  Initial
window.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  renderAudioCards();
  renderProtoDemo();
  setupHierarchyFacets();

  const nextBtn = document.getElementById("next-question-btn");
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
    renderQuestion();
  });
});
