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
    id: "information-as-thing",
    title: "Information as Thing",
    tags: ["Week 1", "Buckland reading", "Foundational"],
    bullets: [
      "Information can be understood as a tangible object or artifact that can be stored, retrieved, and manipulated.",
      "This perspective from Buckland emphasizes that information systems work with physical or digital representations.",
      "Examples include documents, datasets, images, and any object that conveys information.",
    ],
    keyExample: "A weather report document is information-as-thing: it can be filed, copied, and retrieved, unlike the abstract knowledge of 'knowing the weather.'",
    file: "audio/information-as-thing.m4a",
  },
  {
    id: "controlled-vocabularies",
    title: "Controlled Vocabularies",
    tags: ["Week 2", "Collections", "Identifiers"],
    bullets: [
      "A controlled vocabulary is a standardized set of terms used to ensure consistency in indexing and retrieval.",
      "It solves the vocabulary problem by mapping different ways people express the same concept to a single term.",
      "Examples include Library of Congress Subject Headings, Medical Subject Headings (MeSH), and Getty Art & Architecture Thesaurus.",
    ],
    keyExample: "Instead of allowing both \"car,\" \"automobile,\" and \"vehicle,\" a controlled vocabulary chooses one preferred term (e.g., \"automobiles\") for consistency.",
    file: "audio/controlled-vocabularies.m4a",
  },
  {
    id: "prototype-theory",
    title: "Prototype Theory",
    tags: ["Week 3", "Categorization", "Cognitive"],
    bullets: [
      "Not all members of a category are equal—some are more \"typical\" or representative than others.",
      "Prototypes are the most central examples of a category, which people think of first.",
      "Categories have fuzzy boundaries, and membership can be graded rather than all-or-nothing.",
    ],
    keyExample: "For the category \"furniture,\" an armchair is a better prototype than a lamp or rug, even though all could technically be furniture.",
    file: "audio/prototype-theory.m4a",
  },
  {
    id: "hierarchical-faceted",
    title: "Hierarchical vs. Faceted Categories",
    tags: ["Week 4", "Organization", "Taxonomies"],
    bullets: [
      "Hierarchical systems organize information in tree structures with parent-child relationships.",
      "Faceted systems allow multiple independent dimensions of classification that can be combined.",
      "Faceted systems offer more flexibility for browsing and filtering complex collections.",
    ],
    keyExample: "A library might use hierarchical categories (Fiction > Mystery > Detective), while an e-commerce site uses facets (Color, Size, Price, Brand).",
    file: "audio/hierarchical-faceted.m4a",
  },
];

//  Prototype Demo Data
const furnitureItems = [
  { name: "Beanbag", score: 3, icon: "🛋️" },
  { name: "Stool", score: 6, icon: "🪑" },
  { name: "Office Chair", score: 7, icon: "💺" },
  { name: "Rocking Chair", score: 7, icon: "🪑" },
  { name: "Armchair", score: 9, icon: "🪑" },
];

// Media Items Data for Hierarchy vs Facets
const mediaItems = [
  { title: "The Murder on the Orient Express", format: "Book", topic: "Mystery", year: "1934", audience: "Adult" },
  { title: "Introduction to Information Science", format: "Book", topic: "Information Science", year: "2020", audience: "Graduate" },
  { title: "Documentary: History of Libraries", format: "Video", topic: "History", year: "2019", audience: "General" },
  { title: "Sherlock Holmes Collection", format: "Book", topic: "Mystery", year: "1892", audience: "Adult" },
  { title: "Metadata Standards Overview", format: "Article", topic: "Metadata", year: "2022", audience: "Professional" },
  { title: "The Hobbit", format: "Book", topic: "Fantasy", year: "1937", audience: "Young Adult" },
];

const hierarchyStructure = {
  "Media": {
    "Books": {
      "Fiction": [],
      "Non-Fiction": []
    },
    "Videos": [],
    "Articles": []
  }
};

//  Quiz Logic
let currentQuestionIndex = 0;
let hasAnswered = false;
let selectedOptionIndex = null;
let streakCount = 0;
let timerInterval = null;
let timeRemaining = 150; // 2:30 in seconds

function renderQuestion() {
  const container = document.getElementById("quiz-container");
  const feedbackCard = document.getElementById("quiz-feedback-card");
  const progressText = document.getElementById("quiz-progress-text");
  const progressFill = document.getElementById("progress-fill");
  const q = quizQuestions[currentQuestionIndex];

  container.innerHTML = "";
  feedbackCard.classList.add("hidden");
  feedbackCard.classList.remove("incorrect");
  hasAnswered = false;
  selectedOptionIndex = null;

  // Reset timer
  timeRemaining = 150;
  updateTimerDisplay();

  // Question text
  const questionP = document.createElement("p");
  questionP.className = "quiz-question";
  questionP.textContent = q.question;
  container.appendChild(questionP);

  // Options grid
  const optionsGrid = document.createElement("div");
  optionsGrid.className = "quiz-options-grid";

  q.options.forEach((opt, idx) => {
    const button = document.createElement("button");
    button.className = `quiz-option-btn option-${idx}`;
    button.textContent = opt;
    button.dataset.index = idx;
    
    button.addEventListener("click", () => selectOption(idx));
    optionsGrid.appendChild(button);
  });

  container.appendChild(optionsGrid);

  // Update progress
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressText.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  progressFill.style.width = `${progress}%`;
}

function selectOption(idx) {
  if (hasAnswered) return;
  
  selectedOptionIndex = idx;
  const buttons = document.querySelectorAll(".quiz-option-btn");
  
  // Remove any previous selection styling
  buttons.forEach(btn => {
    btn.style.opacity = "1";
    const icon = btn.querySelector(".option-icon");
    if (icon) icon.remove();
  });
  
  // Highlight selected option
  const selectedBtn = buttons[idx];
  selectedBtn.style.opacity = "0.9";
  
  // Check answer immediately when selected
  checkAnswer();
}

function checkAnswer() {
  if (hasAnswered || selectedOptionIndex === null) return;
  
  const q = quizQuestions[currentQuestionIndex];
  const buttons = document.querySelectorAll(".quiz-option-btn");
  const feedbackCard = document.getElementById("quiz-feedback-card");
  const feedbackContent = document.getElementById("feedback-content");
  
  hasAnswered = true;
  const isCorrect = selectedOptionIndex === q.answerIndex;
  
  // Disable all buttons
  buttons.forEach(btn => {
    btn.disabled = true;
  });
  
  // Mark correct answer
  const correctBtn = buttons[q.answerIndex];
  correctBtn.classList.add("correct");
  
  // Add checkmark to correct answer
  const correctIcon = document.createElement("div");
  correctIcon.className = "option-icon";
  correctIcon.textContent = "✓";
  correctIcon.style.color = "#10b981";
  correctBtn.appendChild(correctIcon);
  
  // If wrong, mark selected as incorrect
  if (!isCorrect) {
    const selectedBtn = buttons[selectedOptionIndex];
    selectedBtn.classList.add("incorrect");
    
    const incorrectIcon = document.createElement("div");
    incorrectIcon.className = "option-icon";
    incorrectIcon.textContent = "✕";
    incorrectIcon.style.color = "#ef4444";
    selectedBtn.appendChild(incorrectIcon);
    
    feedbackCard.classList.add("incorrect");
    streakCount = 0;
  } else {
    streakCount++;
  }
  
  // Show feedback
  feedbackContent.innerHTML = "";
  
  const feedbackHeader = document.createElement("div");
  feedbackHeader.className = `feedback-header ${isCorrect ? "correct" : "incorrect"}`;
  
  const icon = document.createElement("span");
  icon.className = "feedback-icon";
  icon.textContent = isCorrect ? "✓" : "✕";
  feedbackHeader.appendChild(icon);
  
  const text = document.createElement("span");
  text.textContent = isCorrect ? "Correct!" : "Not quite...";
  feedbackHeader.appendChild(text);
  
  feedbackContent.appendChild(feedbackHeader);
  
  const explanation = document.createElement("p");
  explanation.className = "feedback-explanation";
  explanation.textContent = q.explanation;
  feedbackContent.appendChild(explanation);
  
  feedbackCard.classList.remove("hidden");
  
  // Update streak display
  document.getElementById("streak-count").textContent = streakCount;
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const display = document.getElementById("timer-display");
  if (display) {
    display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//  Audio Cards Logic
let currentAudioCardIndex = 0;
let currentAudio = null;

function renderAudioCard() {
  // Stop any currently playing audio
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  const container = document.getElementById("audio-cards");
  const progressText = document.getElementById("audio-progress-text");
  const card = audioCards[currentAudioCardIndex];

  container.innerHTML = "";

  // Main card
  const cardDiv = document.createElement("div");
  cardDiv.className = "audio-main-card";

  // Title
  const title = document.createElement("h3");
  title.className = "audio-card-title";
  title.textContent = card.title;
  cardDiv.appendChild(title);

  // Tags
  const tagsDiv = document.createElement("div");
  tagsDiv.className = "audio-tags";
  card.tags.forEach((tag) => {
    const tagSpan = document.createElement("span");
    tagSpan.className = "audio-tag";
    tagSpan.textContent = tag;
    tagsDiv.appendChild(tagSpan);
  });
  cardDiv.appendChild(tagsDiv);

  // Bullet points
  const bulletsDiv = document.createElement("ul");
  bulletsDiv.className = "audio-bullets";
  card.bullets.forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    bulletsDiv.appendChild(li);
  });
  cardDiv.appendChild(bulletsDiv);

  // Audio Explanation Section
  const audioSection = document.createElement("div");
  audioSection.className = "audio-explanation-section";
  
  const playButton = document.createElement("button");
  playButton.className = "audio-play-button";
  playButton.innerHTML = "▶";
  playButton.id = "audio-play-btn";
  
  const audioText = document.createElement("span");
  audioText.className = "audio-explanation-text";
  audioText.textContent = "Audio Explanation";
  
  const progressBarContainer = document.createElement("div");
  progressBarContainer.className = "audio-progress-bar-container";
  const progressBar = document.createElement("div");
  progressBar.className = "audio-progress-bar";
  const progressFill = document.createElement("div");
  progressFill.className = "audio-progress-fill";
  progressFill.style.width = "0%";
  progressBar.appendChild(progressFill);
  progressBarContainer.appendChild(progressBar);
  
  const speakerIcon = document.createElement("span");
  speakerIcon.className = "audio-speaker-icon";
  speakerIcon.innerHTML = "🔊";
  
  audioSection.appendChild(playButton);
  audioSection.appendChild(audioText);
  audioSection.appendChild(progressBarContainer);
  audioSection.appendChild(speakerIcon);
  
  cardDiv.appendChild(audioSection);

  // Key Example Section
  const keyExampleDiv = document.createElement("div");
  keyExampleDiv.className = "audio-key-example";
  const keyExampleTitle = document.createElement("div");
  keyExampleTitle.className = "audio-key-example-title";
  keyExampleTitle.textContent = "Key Example";
  const keyExampleText = document.createElement("p");
  keyExampleText.className = "audio-key-example-text";
  keyExampleText.textContent = card.keyExample;
  keyExampleDiv.appendChild(keyExampleTitle);
  keyExampleDiv.appendChild(keyExampleText);
  cardDiv.appendChild(keyExampleDiv);

  container.appendChild(cardDiv);

  // Update progress text
  progressText.textContent = `Card ${currentAudioCardIndex + 1} of ${audioCards.length}`;

  // Update pagination dots
  updateAudioPagination();

  // Setup audio player (when file is added)
  if (card.file) {
    setupAudioPlayer(card.file, playButton, progressFill);
  }
}

function updateAudioPagination() {
  const dotsContainer = document.getElementById("audio-pagination-dots");
  dotsContainer.innerHTML = "";
  
  audioCards.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "audio-pagination-dot";
    if (index === currentAudioCardIndex) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      currentAudioCardIndex = index;
      renderAudioCard();
    });
    dotsContainer.appendChild(dot);
  });
}

function setupAudioPlayer(file, playButton, progressFill) {
  const audio = new Audio(file);
  currentAudio = audio;
  let isPlaying = false;

  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playButton.innerHTML = "▶";
      isPlaying = false;
    } else {
      audio.play().catch(err => {
        console.error("Error playing audio:", err);
      });
      playButton.innerHTML = "⏸";
      isPlaying = true;
    }
  });

  audio.addEventListener("timeupdate", () => {
    if (audio.duration) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${progress}%`;
    }
  });

  audio.addEventListener("ended", () => {
    playButton.innerHTML = "▶";
    isPlaying = false;
    progressFill.style.width = "0%";
  });

  audio.addEventListener("error", (e) => {
    console.error("Audio error:", e);
    playButton.innerHTML = "▶";
    isPlaying = false;
  });
}

function renderAudioCards() {
  renderAudioCard();
  
  // Setup navigation buttons
  const prevBtn = document.getElementById("audio-prev-btn");
  const nextBtn = document.getElementById("audio-next-btn");
  
  prevBtn.addEventListener("click", () => {
    if (currentAudioCardIndex > 0) {
      currentAudioCardIndex--;
      renderAudioCard();
    }
  });
  
  nextBtn.addEventListener("click", () => {
    if (currentAudioCardIndex < audioCards.length - 1) {
      currentAudioCardIndex++;
      renderAudioCard();
    }
  });
}

//  Prototype Demo Logic
function renderProtoDemo() {
  const slider = document.getElementById("proto-slider");
  const thresholdIndicator = document.getElementById("threshold-indicator");
  const itemsDiv = document.getElementById("proto-items");
  const explanationText = document.getElementById("proto-explanation-text");

  function update() {
    const threshold = Number(slider.value);
    thresholdIndicator.textContent = `Threshold: ${threshold}`;
    
    // Position threshold indicator above slider handle
    const percentage = (threshold / 10) * 100;
    thresholdIndicator.style.left = `${percentage}%`;
    thresholdIndicator.style.transform = 'translateX(-50%)';
    
    itemsDiv.innerHTML = "";

    furnitureItems.forEach((item) => {
      const card = document.createElement("div");
      card.className = `proto-item-card ${item.score >= threshold ? "above-threshold" : "below-threshold"}`;
      
      const icon = document.createElement("div");
      icon.className = "proto-item-icon";
      icon.textContent = item.icon;
      card.appendChild(icon);
      
      const name = document.createElement("div");
      name.className = "proto-item-name";
      name.textContent = item.name;
      card.appendChild(name);
      
      const score = document.createElement("div");
      score.className = "proto-item-score";
      score.textContent = `Typicality: ${item.score}/10`;
      card.appendChild(score);
      
      itemsDiv.appendChild(card);
    });

    // Update explanation text based on threshold
    const aboveThreshold = furnitureItems.filter(i => i.score >= threshold);
    if (threshold <= 3) {
      explanationText.textContent = "At this low threshold, even atypical items like beanbags are considered furniture. Categories become very broad and inclusive.";
    } else if (threshold <= 6) {
      explanationText.textContent = "Mid-range typicality includes items like stools and office chairs—recognizable furniture but not the most central examples.";
    } else {
      explanationText.textContent = "At high typicality, only prototypical items like armchairs make the cut. These are the items people think of first when asked about furniture.";
    }
  }

  slider.addEventListener("input", update);
  update();
}

//  Hierarchy vs Facets Logic
let selectedHierarchyPath = ["Media"];
let selectedFacets = {
  format: [],
  topic: [],
  year: [],
  audience: []
};

function filterMediaItems(filters) {
  return mediaItems.filter((item) => {
    if (filters.format && filters.format.length > 0 && !filters.format.includes(item.format)) return false;
    if (filters.topic && filters.topic.length > 0 && !filters.topic.includes(item.topic)) return false;
    if (filters.year && filters.year.length > 0 && !filters.year.includes(item.year)) return false;
    if (filters.audience && filters.audience.length > 0 && !filters.audience.includes(item.audience)) return false;
    return true;
  });
}

function renderResults(containerId, items, countId) {
  const container = document.getElementById(containerId);
  const countEl = document.getElementById(countId);
  container.innerHTML = "";
  
  countEl.textContent = `${items.length} items`;
  
  items.forEach((item) => {
    const resultCard = document.createElement("div");
    resultCard.className = "result-item-card";
    
    const title = document.createElement("div");
    title.className = "result-item-title";
    title.textContent = item.title;
    resultCard.appendChild(title);
    
    const tags = document.createElement("div");
    tags.className = "result-item-tags";
    [item.format, item.topic, item.year, item.audience].forEach(tag => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "result-tag";
      tagSpan.textContent = tag;
      tags.appendChild(tagSpan);
    });
    resultCard.appendChild(tags);
    
    container.appendChild(resultCard);
  });
}

function renderHierarchyTree() {
  const treeDiv = document.getElementById("hierarchy-tree");
  treeDiv.innerHTML = "";

  const treeData = {
    label: "Media",
    icon: "📁",
    children: [
      {
        label: "Books",
        icon: "📚",
        children: [
          { label: "Fiction", icon: "›" },
          { label: "Non-Fiction", icon: "›" },
        ],
      },
      { label: "Videos", icon: "🎬" },
      { label: "Articles", icon: "📰" },
    ],
  };

  function renderNode(node, path, level = 0) {
    const isSelected = path.join(" > ") === selectedHierarchyPath.join(" > ");
    const nodeDiv = document.createElement("div");
    nodeDiv.className = `tree-node ${isSelected ? "selected" : ""}`;
    nodeDiv.style.paddingLeft = `${level * 1.5}rem`;

    const text = document.createElement("span");
    text.className = "tree-node-text";
    text.innerHTML = `<span class="tree-icon">${node.icon || "›"}</span> ${node.label}`;
    nodeDiv.appendChild(text);

    nodeDiv.addEventListener("click", () => {
      selectedHierarchyPath = [...path];
      updateHierarchyView();
    });

    treeDiv.appendChild(nodeDiv);

    if (node.children && node.children.length) {
      node.children.forEach((child) =>
        renderNode(child, [...path, child.label], level + 1)
      );
    }
  }

  renderNode(treeData, [treeData.label], 0);
}

function updateHierarchyView() {
  renderHierarchyTree();
  
  // Filter items based on hierarchy path
  let filtered = [...mediaItems];
  
  if (selectedHierarchyPath.includes("Books")) {
    filtered = filtered.filter(item => item.format === "Book");
    if (selectedHierarchyPath.includes("Fiction")) {
      filtered = filtered.filter(item => ["Mystery", "Fantasy"].includes(item.topic));
    } else if (selectedHierarchyPath.includes("Non-Fiction")) {
      filtered = filtered.filter(item => !["Mystery", "Fantasy"].includes(item.topic));
    }
  } else if (selectedHierarchyPath.includes("Videos")) {
    filtered = filtered.filter(item => item.format === "Video");
  } else if (selectedHierarchyPath.includes("Articles")) {
    filtered = filtered.filter(item => item.format === "Article");
  }
  
  const pathText = selectedHierarchyPath.join(" → ");
  document.getElementById("hierarchy-path").textContent = `Current path: ${pathText}`;
  
  renderResults("hierarchy-results", filtered, "hierarchy-results-count");
}

function renderFacetedFilters() {
  const filtersDiv = document.getElementById("faceted-filters");
  filtersDiv.innerHTML = "";
  
  const facets = [
    { key: "format", label: "Format", options: ["Book", "Video", "Article"] },
    { key: "topic", label: "Topic", options: ["Mystery", "Information Science", "History", "Metadata", "Fantasy"] },
    { key: "year", label: "Year", options: ["2022", "2020", "2019", "1937", "1934", "1892"] },
    { key: "audience", label: "Audience", options: ["Adult", "Graduate", "General", "Professional", "Young Adult"] }
  ];
  
  facets.forEach(facet => {
    const facetDiv = document.createElement("div");
    facetDiv.className = "facet-group";
    
    const label = document.createElement("div");
    label.className = "facet-group-label";
    label.textContent = facet.label + ":";
    facetDiv.appendChild(label);
    
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "facet-options";
    
    facet.options.forEach(option => {
      const optionBtn = document.createElement("button");
      optionBtn.className = `facet-option ${selectedFacets[facet.key].includes(option) ? "selected" : ""}`;
      optionBtn.textContent = option;
      optionBtn.addEventListener("click", () => {
        const index = selectedFacets[facet.key].indexOf(option);
        if (index > -1) {
          selectedFacets[facet.key].splice(index, 1);
        } else {
          selectedFacets[facet.key].push(option);
        }
        updateFacetedView();
      });
      optionsDiv.appendChild(optionBtn);
    });
    
    facetDiv.appendChild(optionsDiv);
    filtersDiv.appendChild(facetDiv);
  });
}

function updateFacetedView() {
  renderFacetedFilters();
  
  const filtered = filterMediaItems(selectedFacets);
  renderResults("facets-results", filtered, "facets-results-count");
}

function setupHierarchyFacets() {
  // Toggle buttons
  const hierarchicalToggle = document.getElementById("hierarchical-toggle");
  const facetedToggle = document.getElementById("faceted-toggle");
  const hierarchicalView = document.getElementById("hierarchical-view");
  const facetedView = document.getElementById("faceted-view");
  const explanationTitle = document.getElementById("hierarchy-explanation-title");
  const explanationText = document.getElementById("hierarchy-explanation-text");
  
  hierarchicalToggle.addEventListener("click", () => {
    hierarchicalToggle.classList.add("active");
    facetedToggle.classList.remove("active");
    hierarchicalView.classList.add("active");
    facetedView.classList.remove("active");
    explanationTitle.textContent = "Hierarchical Organization";
    explanationText.textContent = "In hierarchical systems, items belong to one path in a tree structure. Users must navigate through predetermined branches. This works well for predictable browsing but can be limiting when items could fit multiple categories.";
  });
  
  facetedToggle.addEventListener("click", () => {
    facetedToggle.classList.add("active");
    hierarchicalToggle.classList.remove("active");
    facetedView.classList.add("active");
    hierarchicalView.classList.remove("active");
    explanationTitle.textContent = "Faceted Organization";
    explanationText.textContent = "Faceted systems let users combine multiple independent dimensions. Users can mix and match filters freely, creating custom views. This is more flexible for complex collections where items have multiple attributes.";
  });
  
  // Initial render
  updateHierarchyView();
  updateFacetedView();
}

//  Initial
window.addEventListener("DOMContentLoaded", () => {
  renderQuestion();
  renderAudioCards();
  renderProtoDemo();
  setupHierarchyFacets();
  startTimer();
  updateTimerDisplay();

  const nextBtn = document.getElementById("next-question-btn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
      renderQuestion();
      startTimer();
    });
  }
});
