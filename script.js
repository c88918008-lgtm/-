/**
 * Jamilgo HS English Quiz Challenge (Static Vanilla JS Edition)
 * Works beautifully offline, deployable to GitHub Pages, 100% serverless.
 */

// --- 1. DEFAULT DATASETS ---
const DEFAULT_VOCAB_DATA = [
  { word: "comprehend", answer: "이해하다", wrong: ["타협하다", "경쟁하다", "포함하다"] },
  { word: "inevitable", answer: "불가피한", wrong: ["우연한", "일시적인", "복잡한"] },
  { word: "sustain", answer: "유지하다, 지탱하다", wrong: ["의심하다", "파괴하다", "무시하다"] },
  { word: "consequence", answer: "결과, 중요성", wrong: ["원인", "우연", "과정"] },
  { word: "evaluate", answer: "평가하다", wrong: ["진화하다", "탈출하다", "설득하다"] },
  { word: "perspective", answer: "관점, 시각", wrong: ["편견", "환상", "장애물"] },
  { word: "implement", answer: "실행하다", wrong: ["방해하다", "상상하다", "포기하다"] },
  { word: "distinguish", answer: "구별하다", wrong: ["결합하다", "소멸시키다", "강조하다"] },
  { word: "attribute", answer: "~의 탓으로 돌리다", wrong: ["분배하다", "기여하다", "칭찬하다"] },
  { word: "vulnerable", answer: "취약한, 상처받기 쉬운", wrong: ["강력한", "면역력이 있는", "단호한"] },
  { word: "accumulate", answer: "축적하다, 모으다", wrong: ["가속하다", "조절하다", "계산하다"] },
  { word: "alter", answer: "바꾸다, 변경하다", wrong: ["경고하다", "얼버무리다", "허락하다"] },
  { word: "ambiguous", answer: "애매모호한, 불분명한", wrong: ["명확한", "야망이 있는", "자신감 넘치는"] },
  { word: "anticipate", answer: "기대하다, 예상하다", wrong: ["참여하다", "감사하다", "비판하다"] },
  { word: "bias", answer: "편견, 선입견", wrong: ["균형", "사실", "배경"] },
  { word: "collaborate", answer: "협력하다, 공동으로 작업하다", wrong: ["축하하다", "대면하다", "타협하다"] },
  { word: "compensate", answer: "보상하다, 메우다", wrong: ["경쟁하다", "구성하다", "복잡하게 만들다"] },
  { word: "contradict", answer: "모순되다, 반박하다", wrong: ["축소하다", "통제하다", "기여하다"] },
  { word: "crucial", answer: "중대한, 결정적인", wrong: ["평범한", "잔혹한", "창의적인"] },
  { word: "deprive", answer: "박탈하다, 빼앗다", wrong: ["유인하다", "분배하다", "결심하다"] },
  { word: "diversity", answer: "다양성", wrong: ["일관성", "분열", "갈등"] },
  { word: "enhance", answer: "향상시키다, 높이다", wrong: ["줄이다", "방해하다", "생략하다"] },
  { word: "exploit", answer: "착취하다, 부당하게 이용하다", wrong: ["탐험하다", "설명하다", "배제하다"] },
  { word: "fluctuate", answer: "변동하다, 오르내리다", wrong: ["고정되다", "번창하다", "집중하다"] },
  { word: "guarantee", answer: "보장하다, 약속하다", wrong: ["무시하다", "위협하다", "거절하다"] },
  { word: "hypothesis", answer: "가설", wrong: ["결론", "분석", "실험"] },
  { word: "indispensable", answer: "없어서는 안 될, 필수적인", wrong: ["독립적인", "무관심한", "분배할 수 있는"] },
  { word: "infinite", answer: "무한한", wrong: ["유한한", "친근한", "내부의"] },
  { word: "justify", answer: "정당화하다", wrong: ["판결하다", "수사하다", "가입하다"] },
  { word: "manipulate", answer: "조종하다, 능숙하게 다루다", wrong: ["선언하다", "유지하다", "제조하다"] },
  { word: "neutral", answer: "중립적인", wrong: ["열정적인", "부정적인", "자연스러운"] },
  { word: "obstacle", answer: "장애물, 방해물", wrong: ["목적", "기회", "성취"] },
  { word: "prominent", answer: "유명한, 두드러진", wrong: ["유망한", "영구적인", "신중한"] },
  { word: "reinforce", answer: "강화하다", wrong: ["거절하다", "보충하다", "대표하다"] },
  { word: "reluctant", answer: "꺼리는, 주저하는", wrong: ["열정적인", "신뢰하는", "안도하는"] },
  { word: "scarcity", answer: "부족, 결핍", wrong: ["과잉", "안정", "보안"] },
  { word: "simultaneous", answer: "동시의", wrong: ["순차적인", "자발적인", "자극적인"] },
  { word: "transform", answer: "변형시키다", wrong: ["수송하다", "번역하다", "이식하다"] },
  { word: "undertake", answer: "떠맡다, 착수하다", wrong: ["이해하다", "무시하다", "하락하다"] },
  { word: "vital", answer: "극히 중요한, 필수적인", wrong: ["사소한", "폭력적인", "활기찬"] }
];

const DEFAULT_SYNTAX_DATA = [
  // --- 관계사 (Relative Clauses) ---
  {
    grammar: "[관계사] 주격 관계대명사",
    korean: "저기에서 피아노를 치고 있는 소년은 내 동생이다.",
    answer: "The boy who is playing the piano there is my brother",
    words: ["playing", "brother", "is", "The", "the", "who", "boy", "piano", "my", "there", "is"]
  },
  {
    grammar: "[관계사] 관계부사 where",
    korean: "이곳은 작년에 내가 우연히 내 친한 친구를 만났던 도서관이다.",
    answer: "This is the library where I met my close friend by chance last year",
    words: ["library", "where", "friend", "chance", "met", "by", "last", "This", "close", "I", "my", "is", "year"]
  },
  {
    grammar: "[관계사] 목적격 관계대명사 생략",
    korean: "그와 함께 일했던 팀원들은 그가 제안한 아이디어를 지지했다.",
    answer: "The team members he worked with supported the idea he proposed",
    words: ["idea", "supported", "with", "he", "proposed", "The", "team", "members", "worked", "he"]
  },
  // --- 분사구문 (Participle Clauses) ---
  {
    grammar: "[분사] 분사구문 (이유)",
    korean: "무엇을 해야 할지 몰라서, 나는 그녀에게 도움을 요청했다.",
    answer: "Not knowing what to do I asked her for help",
    words: ["I", "what", "knowing", "for", "her", "Not", "do", "asked", "to", "help"]
  },
  {
    grammar: "[분사] with + 명사 + 분사 (동시상황)",
    korean: "그녀는 눈을 감은 채로 헤드폰을 통해 음악을 듣고 있었다.",
    answer: "She was listening to music through headphones with her eyes closed",
    words: ["She", "music", "listening", "to", "headphones", "with", "eyes", "closed", "through", "her", "was"]
  },
  {
    grammar: "[분사] 완료 분사구문 (선시제)",
    korean: "전체 영화를 미리 보았기 때문에, 나는 그것을 다시 보고 싶지 않았다.",
    answer: "Having seen the movie before I did not want to watch it again",
    words: ["Having", "seen", "movie", "before", "I", "did", "not", "want", "to", "watch", "it", "again", "the"]
  },
  // --- 가정법 (Subjunctive Mood) ---
  {
    grammar: "[가정법] 가정법 과거",
    korean: "내가 충분한 돈이 있다면, 그 차를 살 텐데.",
    answer: "If I had enough money I could buy the car",
    words: ["money", "buy", "I", "enough", "If", "had", "car", "could", "the", "I"]
  },
  {
    grammar: "[가정법] 가정법 과거완료",
    korean: "만약 네가 그의 조언을 따랐더라면, 너는 그 실수를 피할 수 있었을 텐데.",
    answer: "If you had followed his advice you could have avoided the mistake",
    words: ["had", "advice", "you", "could", "have", "avoided", "mistake", "If", "followed", "his", "the", "you"]
  },
  {
    grammar: "[가정법] as if 가정법",
    korean: "그는 마치 전 세계를 여행해 본 경험이 있는 것처럼 자신감 있게 말한다.",
    answer: "He talks confidently as if he had traveled all around the world",
    words: ["talks", "as", "if", "he", "had", "traveled", "all", "around", "world", "He", "confidently", "the"]
  },
  // --- 명사절 & 접속사 (Noun Clauses & Conjunctions) ---
  {
    grammar: "[접속사] 상관접속사 Not only A but also B",
    korean: "그는 재능 있는 음악가일 뿐만 아니라 뛰어난 소설 작가이기도 하다.",
    answer: "He is not only a talented musician but also an excellent novel writer",
    words: ["musician", "but", "not", "writer", "He", "is", "only", "a", "talented", "also", "an", "excellent", "novel"]
  },
  {
    grammar: "[명사절] 가주어-진주어 It is ~ that",
    korean: "인류가 기후 변화에 대응하기 위해 신속하게 행동하는 것은 필수적이다.",
    answer: "It is essential that humanity act quickly to respond to climate change",
    words: ["essential", "that", "humanity", "act", "quickly", "respond", "climate", "change", "It", "is", "to", "to"]
  },
  {
    grammar: "[명사절] 의문사 없는 간접의문문 (whether/if)",
    korean: "그는 나에게 우리가 다음 주 월요일에 제시간에 도착할 수 있을지 물었다.",
    answer: "He asked me whether we could arrive on time next Monday",
    words: ["asked", "me", "whether", "we", "could", "arrive", "on", "time", "next", "Monday", "He"]
  },
  // --- 도치 / 특수구문 (Inversion & Emphasis) ---
  {
    grammar: "[특수구문] 부정어 도치 (Little/Hardly)",
    korean: "그녀는 자신이 그 권위 있는 미술 대회에서 우승하리라고는 거의 생각하지 못했다.",
    answer: "Little did she dream that she would win the prestigious art contest",
    words: ["she", "dream", "that", "Little", "did", "she", "would", "win", "prestigious", "art", "contest", "the"]
  },
  {
    grammar: "[특수구문] It is ~ that 강조구문",
    korean: "나로 하여금 과학자의 꿈을 쫓도록 영감을 준 사람은 바로 제인 교수님이었다.",
    answer: "It was Professor Jane that inspired me to pursue my dream of becoming a scientist",
    words: ["was", "Jane", "that", "inspired", "me", "pursue", "dream", "of", "scientist", "It", "Professor", "to", "my", "becoming", "a"]
  },
  // --- 비교구문 (Comparative Phrases) ---
  {
    grammar: "[비교] 더비더비 구문 (The 비교급, The 비교급)",
    korean: "더 많은 지식을 배울수록, 우리는 우리가 아는 것이 얼마나 적은지 더 많이 깨닫는다.",
    answer: "The more knowledge we learn the more we realize how little we know",
    words: ["The", "more", "knowledge", "we", "learn", "the", "more", "we", "realize", "how", "little", "we", "know"]
  }
];

// --- 2. GLOBAL STATE ---
let activeMode = 'vocab'; // 'vocab' | 'syntax' | 'wrongs' | 'teacher'
let teacherActiveTab = 'vocab'; // 'vocab' | 'syntax' | 'backup'

let vocabData = [];
let syntaxData = [];
let quizHistory = [];

// Vocab Quiz States
let vocabIndex = 0;
let vocabScore = 0;
let vocabAnswered = false;
let vocabSelectedWord = null;
let vocabShuffledOptions = [];
let isPlayingAudio = false;

// Syntax Quiz States
let syntaxIndex = 0;
let syntaxScore = 0;
let syntaxAnswered = false;
let syntaxSelectedWords = [];
let syntaxWordBank = [];
let syntaxTypedInput = '';

// Teacher Edit Indicators
let editingVocabIdx = null;
let editingSyntaxIdx = null;

// --- 3. TOAST & UTILITIES ---
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = "flex items-center gap-2 px-5 py-3.5 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 text-xs font-semibold select-none animate-slide-up pointer-events-auto max-w-[280px] md:max-w-[340px]";
  toast.innerHTML = `
    <span class="mr-1">🛎️</span>
    <span class="flex-1 text-slate-100 leading-normal">${message}</span>
  `;

  container.appendChild(toast);

  // Auto clean up
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(1rem)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// Safe Lucide Icon Maker
function safeCreateIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon registration failed: ', e);
    }
  }
}

function getLocalDateString() {
  const today = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return today.toLocaleDateString('ko-KR', options);
}

// Speak Word TTS
function speakWord(word) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.82; // slightly relaxed natural pronunciation speed

    const listenBtn = document.getElementById('btn-vocab-listen');

    utterance.onstart = () => {
      isPlayingAudio = true;
      if (listenBtn) {
        listenBtn.classList.add('bg-natural-sidebar', 'text-natural-green', 'border-natural-border', 'animate-pulse');
      }
    };
    utterance.onend = () => {
      isPlayingAudio = false;
      if (listenBtn) {
        listenBtn.classList.remove('bg-natural-sidebar', 'text-natural-green', 'border-natural-border', 'animate-pulse');
      }
    };
    utterance.onerror = () => {
      isPlayingAudio = false;
      if (listenBtn) {
        listenBtn.classList.remove('bg-natural-sidebar', 'text-natural-green', 'border-natural-border', 'animate-pulse');
      }
    };

    window.speechSynthesis.speak(utterance);
  } else {
    showToast('⚠️ 이 브라우저는 영어 음성 합성(TTS) 기능을 제공하지 않습니다.');
  }
}

// --- 4. PERSISTENCE ENGINE (LocalStorage) ---
function saveToLocalStorage() {
  localStorage.setItem('jamilgo_vocab_data', JSON.stringify(vocabData));
  localStorage.setItem('jamilgo_syntax_data', JSON.stringify(syntaxData));
  localStorage.setItem('jamilgo_quiz_history', JSON.stringify(quizHistory));
  
  localStorage.setItem('jamilgo_vocab_index', vocabIndex.toString());
  localStorage.setItem('jamilgo_vocab_score', vocabScore.toString());
  localStorage.setItem('jamilgo_vocab_answered', vocabAnswered.toString());
  
  localStorage.setItem('jamilgo_syntax_index', syntaxIndex.toString());
  localStorage.setItem('jamilgo_syntax_score', syntaxScore.toString());
  localStorage.setItem('jamilgo_syntax_answered', syntaxAnswered.toString());
}

function loadFromLocalStorage() {
  // Vocabs
  const savedVocab = localStorage.getItem('jamilgo_vocab_data') || localStorage.getItem('jamgilo_vocab_data');
  if (savedVocab) {
    try { vocabData = JSON.parse(savedVocab); } catch (e) { vocabData = [...DEFAULT_VOCAB_DATA]; }
  } else {
    vocabData = [...DEFAULT_VOCAB_DATA];
  }

  // Syntaxes
  const savedSyntax = localStorage.getItem('jamilgo_syntax_data') || localStorage.getItem('jamgilo_syntax_data');
  if (savedSyntax) {
    try { syntaxData = JSON.parse(savedSyntax); } catch (e) { syntaxData = [...DEFAULT_SYNTAX_DATA]; }
  } else {
    syntaxData = [...DEFAULT_SYNTAX_DATA];
  }

  // Quiz History
  const savedHistory = localStorage.getItem('jamilgo_quiz_history') || localStorage.getItem('jamgilo_quiz_history');
  if (savedHistory) {
    try { quizHistory = JSON.parse(savedHistory); } catch (e) { quizHistory = []; }
  } else {
    quizHistory = [];
  }

  // Progress variables
  vocabIndex = Number(localStorage.getItem('jamilgo_vocab_index') || localStorage.getItem('jamgilo_vocab_index') || '0');
  vocabScore = Number(localStorage.getItem('jamilgo_vocab_score') || localStorage.getItem('jamgilo_vocab_score') || '0');
  vocabAnswered = (localStorage.getItem('jamilgo_vocab_answered') || localStorage.getItem('jamgilo_vocab_answered')) === 'true';

  syntaxIndex = Number(localStorage.getItem('jamilgo_syntax_index') || localStorage.getItem('jamgilo_syntax_index') || '0');
  syntaxScore = Number(localStorage.getItem('jamilgo_syntax_score') || localStorage.getItem('jamgilo_syntax_score') || '0');
  syntaxAnswered = (localStorage.getItem('jamilgo_syntax_answered') || localStorage.getItem('jamgilo_syntax_answered')) === 'true';
}

function handleAddHistory(type, item, userAnswer, correctAnswer, isCorrect) {
  const newEntry = {
    timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    type,
    item,
    userAnswer,
    correctAnswer,
    isCorrect
  };
  quizHistory.unshift(newEntry);
  saveToLocalStorage();
  updateSidebarCounters();
  renderWrongsList();
}

// --- 5. DOM SYNC ACTIONS ---
function updateSidebarCounters() {
  document.getElementById('sidebar-vocab-count').innerText = vocabData.length;
  document.getElementById('sidebar-syntax-count').innerText = syntaxData.length;
  
  const wrongsCount = quizHistory.filter(h => !h.isCorrect).length;
  const wrongsBadge = document.getElementById('sidebar-wrongs-count');
  wrongsBadge.innerText = wrongsCount;
  if (wrongsCount > 0) {
    wrongsBadge.className = "text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-[#E36B5F]/20 text-red-800 animate-pulse";
  } else {
    wrongsBadge.className = "text-[11px] font-mono font-bold px-1.5 py-0.5 rounded-md bg-natural-border text-natural-tan";
  }

  // Sidebar progress panels
  document.getElementById('sidebar-vocab-progress-label').innerText = `${vocabIndex} / ${vocabData.length}`;
  document.getElementById('sidebar-syntax-progress-label').innerText = `${syntaxIndex} / ${syntaxData.length}`;
}

// Reset everything
function resetProgressAll() {
  if (confirm('모든 어휘 및 구문 점수와 문항 기록을 초기화하시겠습니까?')) {
    vocabIndex = 0;
    vocabScore = 0;
    vocabAnswered = false;
    vocabSelectedWord = null;

    syntaxIndex = 0;
    syntaxScore = 0;
    syntaxAnswered = false;
    syntaxSelectedWords = [];
    syntaxTypedInput = '';

    quizHistory = [];
    saveToLocalStorage();
    showToast('♻️ 전체 점수 및 인덱스가 깔끔하게 리셋되었습니다.');
    
    // Refresh Active Section
    syncActiveSectionViews();
    updateSidebarCounters();
  }
}

// Nav Router
function changeActiveMode(targetMode) {
  activeMode = targetMode;
  
  // Style sidebar Buttons
  const btnVocab = document.getElementById('menu-btn-vocab');
  const btnSyntax = document.getElementById('menu-btn-syntax');
  const btnWrongs = document.getElementById('menu-btn-wrongs');
  const tabBtnStudent = document.getElementById('tab-btn-student');
  const tabBtnTeacher = document.getElementById('tab-btn-teacher');

  // Reset standard classes
  [btnVocab, btnSyntax, btnWrongs].forEach(btn => {
    btn.className = "w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-sm font-semibold transition-all group cursor-pointer bg-transparent text-natural-text hover:bg-natural-sidebar";
    // Icon resets inside
    const icon = btn.querySelector('svg');
    if (icon) icon.className.baseVal = "w-5 h-5 text-natural-tan group-hover:text-natural-green";
  });

  tabBtnStudent.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-natural-tan hover:text-natural-text hover:bg-natural-sidebar/50";
  tabBtnTeacher.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-natural-tan hover:text-natural-text hover:bg-natural-sidebar/50";

  // Hide all main sections
  document.getElementById('section-vocab').classList.add('hidden');
  document.getElementById('section-syntax').classList.add('hidden');
  document.getElementById('section-wrongs').classList.add('hidden');
  document.getElementById('section-teacher').classList.add('hidden');

  // Show sidebar layout unless teacher mode
  if (targetMode === 'teacher') {
    document.getElementById('sidebar-layout-container').classList.add('hidden');
    document.getElementById('main-content-layout').className = "lg:col-span-12";
    
    document.getElementById('section-teacher').classList.remove('hidden');
    tabBtnTeacher.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer bg-natural-tan text-white shadow-md";
    
    initTeacherDashboard();
  } else {
    document.getElementById('sidebar-layout-container').classList.remove('hidden');
    document.getElementById('main-content-layout').className = "lg:col-span-9";
    tabBtnStudent.className = "flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer bg-natural-green text-white shadow-md";

    if (targetMode === 'vocab') {
      document.getElementById('section-vocab').classList.remove('hidden');
      btnVocab.className = "w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-sm font-semibold transition-all group cursor-pointer bg-natural-green text-white shadow-md";
      const icon = btnVocab.querySelector('svg');
      if (icon) icon.className.baseVal = "w-5 h-5 text-white";
      initVocabQuiz();
    } else if (targetMode === 'syntax') {
      document.getElementById('section-syntax').classList.remove('hidden');
      btnSyntax.className = "w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-sm font-semibold transition-all group cursor-pointer bg-natural-green text-white shadow-md";
      const icon = btnSyntax.querySelector('svg');
      if (icon) icon.className.baseVal = "w-5 h-5 text-white";
      initSyntaxQuiz();
    } else if (targetMode === 'wrongs') {
      document.getElementById('section-wrongs').classList.remove('hidden');
      btnWrongs.className = "w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-sm font-semibold transition-all group cursor-pointer bg-natural-green text-white shadow-md";
      const icon = btnWrongs.querySelector('svg');
      if (icon) icon.className.baseVal = "w-5 h-5 text-white";
      renderWrongsList();
    }
  }

  safeCreateIcons();
}

function syncActiveSectionViews() {
  if (activeMode === 'vocab') initVocabQuiz();
  else if (activeMode === 'syntax') initSyntaxQuiz();
  else if (activeMode === 'wrongs') renderWrongsList();
  else if (activeMode === 'teacher') initTeacherDashboard();
}

// --- 6. VOCABULARY QUIZ SCREEN CONTROLLER ---
function initVocabQuiz() {
  const quizCard = document.getElementById('vocab-quiz-card');
  const completionCard = document.getElementById('vocab-completion-card');
  
  if (!vocabData || vocabData.length === 0) {
    quizCard.innerHTML = `
      <div class="text-center py-12">
        <i data-lucide="book-open" class="w-12 h-12 text-natural-tan mx-auto mb-3 animate-pulse"></i>
        <p class="text-natural-text font-serif italic text-lg font-bold">등록된 어휘 데이터가 없습니다.</p>
        <p class="text-natural-tan text-sm mt-1">선생님 관리관에서 단어를 먼저 추가해 보세요!</p>
      </div>
    `;
    quizCard.classList.remove('hidden');
    completionCard.classList.add('hidden');
    safeCreateIcons();
    return;
  }

  // Progress Bar
  const percent = vocabData.length > 0 ? Math.round((vocabIndex / vocabData.length) * 100) : 0;
  document.getElementById('vocab-progress-text').innerText = `PROGRESS: ${Math.min(vocabIndex + 1, vocabData.length)} / ${vocabData.length}`;
  document.getElementById('vocab-progress-percent').innerText = `${percent}%`;
  document.getElementById('vocab-progress-bar').style.width = `${(vocabIndex / vocabData.length) * 100}%`;
  document.getElementById('vocab-score-display').innerText = vocabScore;

  // Check Quiz Done
  if (vocabIndex >= vocabData.length) {
    const rate = vocabData.length > 0 ? Math.round((vocabScore / vocabData.length) * 100) : 0;
    document.getElementById('vocab-final-score').innerHTML = `${vocabScore} <span class="text-sm font-normal text-natural-tan">/ ${vocabData.length}</span>`;
    document.getElementById('vocab-final-rate').innerText = `${rate}%`;
    
    quizCard.classList.add('hidden');
    completionCard.classList.remove('hidden');
    return;
  }

  quizCard.classList.remove('hidden');
  completionCard.classList.add('hidden');

  // Load question
  const currentQuestion = vocabData[vocabIndex];
  document.getElementById('vocab-target-word').innerText = currentQuestion.word;
  document.getElementById('vocab-question-counter').innerText = `Q_${vocabIndex + 1}`;

  // Rebuild options once when question index shifts
  if (!vocabAnswered && !vocabSelectedWord) {
    const rawOptions = [...currentQuestion.wrong, currentQuestion.answer];
    // Simple deterministic shuffling
    vocabShuffledOptions = rawOptions.sort(() => Math.random() - 0.5);
  }

  // Render choice items
  const optionsGrid = document.getElementById('vocab-options-grid');
  optionsGrid.innerHTML = '';

  vocabShuffledOptions.forEach((option, idx) => {
    const isSelected = vocabSelectedWord === option;
    const isCorrectTarget = option === currentQuestion.answer;
    
    let buttonStyle = "border-natural-border hover:border-natural-green hover:bg-natural-sidebar text-natural-text bg-white shadow-xs";
    let iconHTML = '';

    if (vocabAnswered) {
      if (isCorrectTarget) {
        buttonStyle = "border-natural-green bg-[#F7F5EE] text-natural-green font-bold shadow-[0_4px_12px_rgba(93,109,62,0.08)] cursor-default";
        iconHTML = `<i data-lucide="check-circle-2" class="w-5 h-5 text-natural-green"></i>`;
      } else if (isSelected) {
        buttonStyle = "border-[#E17A70] bg-rose-50 text-red-800 shadow-[0_4px_12px_rgba(225,122,112,0.08)] cursor-default";
        iconHTML = `<i data-lucide="x-circle" class="w-5 h-5 text-red-500"></i>`;
      } else {
        buttonStyle = "border-natural-border bg-white text-natural-tan/50 opacity-60 cursor-default";
      }
    } else if (isSelected) {
      buttonStyle = "border-natural-green bg-natural-sidebar text-natural-text font-bold shadow-[0_4px_12px_rgba(93,109,62,0.05)] cursor-pointer";
      iconHTML = `<span class="w-5 h-5 bg-natural-green rounded-full flex items-center justify-center text-white text-[10px]"><i data-lucide="check" class="w-3.5 h-3.5"></i></span>`;
    }

    const btn = document.createElement('button');
    btn.className = `flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-150 relative ${buttonStyle}`;
    btn.innerHTML = `
      <span class="text-base font-semibold">${option}</span>
      <div class="option-icon-wrapper">${iconHTML}</div>
    `;

    if (!vocabAnswered) {
      btn.addEventListener('click', () => {
        vocabSelectedWord = option;
        initVocabQuiz(); // trigger re-render in same index
      });
    }

    optionsGrid.appendChild(btn);
  });

  // Action Panel Row
  const feedbackWrapper = document.getElementById('vocab-feedback-wrapper');
  const actionBtn = document.getElementById('btn-vocab-submit');

  feedbackWrapper.innerHTML = '';
  
  if (!vocabAnswered) {
    actionBtn.innerText = '정답 확인';
    actionBtn.onclick = handleVocabConfirmAnswer;
    
    if (vocabSelectedWord) {
      actionBtn.className = "px-5 py-2.5 rounded-xl font-bold transition-all shadow-xs bg-natural-green text-white hover:opacity-90 active:scale-95 cursor-pointer";
      actionBtn.disabled = false;
    } else {
      actionBtn.className = "px-5 py-2.5 rounded-xl font-bold transition-all shadow-xs bg-natural-sidebar text-natural-tan/60 border border-natural-border/60 cursor-not-allowed";
      actionBtn.disabled = true;
    }
  } else {
    // Show feedback sentence
    const isCorrect = vocabSelectedWord === currentQuestion.answer;
    if (isCorrect) {
      feedbackWrapper.innerHTML = `
        <span class="text-natural-green font-bold flex items-center gap-1.5 bg-natural-sidebar px-3 py-1.5 rounded-lg text-sm border border-natural-border">
          ✨ 정답입니다! 훌륭해요!
        </span>
      `;
    } else {
      feedbackWrapper.innerHTML = `
        <span class="text-red-800 font-bold flex items-center gap-1.5 bg-rose-50 px-3 py-1.5 rounded-lg text-xs md:text-sm border border-red-100 leading-normal">
          😢 아쉽네요! 정답은 '${currentQuestion.answer}' 입니다.
        </span>
      `;
    }

    // Toggle to Next Button
    actionBtn.disabled = false;
    actionBtn.className = "inline-flex items-center gap-1.5 px-5 py-2.5 bg-natural-green text-white font-bold rounded-xl hover:opacity-90 active:scale-95 transition-all cursor-pointer shadow-xs";
    actionBtn.innerHTML = `
      <span>${vocabIndex === vocabData.length - 1 ? '퀴즈 완료하기' : '다음 문제'}</span>
      <i data-lucide="arrow-right" class="w-4 h-4"></i>
    `;
    actionBtn.onclick = handleVocabNext;
  }

  safeCreateIcons();
}

function handleVocabConfirmAnswer() {
  if (!vocabSelectedWord || vocabAnswered) return;
  const currentQuestion = vocabData[vocabIndex];
  const isCorrect = vocabSelectedWord === currentQuestion.answer;

  if (isCorrect) {
    vocabScore++;
  }
  vocabAnswered = true;
  saveToLocalStorage();
  handleAddHistory('vocab', currentQuestion.word, vocabSelectedWord, currentQuestion.answer, isCorrect);
  
  initVocabQuiz();
  updateSidebarCounters();
}

function handleVocabNext() {
  vocabIndex++;
  vocabAnswered = false;
  vocabSelectedWord = null;
  saveToLocalStorage();
  
  initVocabQuiz();
  updateSidebarCounters();
}

function handleVocabRestart() {
  vocabIndex = 0;
  vocabScore = 0;
  vocabAnswered = false;
  vocabSelectedWord = null;
  saveToLocalStorage();
  
  initVocabQuiz();
  updateSidebarCounters();
}

// --- 7. SENTENCE SYNTAX QUIZ CONTROLLER ---
function initSyntaxQuiz() {
  const quizCard = document.getElementById('syntax-quiz-card');
  const completionCard = document.getElementById('syntax-completion-card');

  if (!syntaxData || syntaxData.length === 0) {
    quizCard.innerHTML = `
      <div class="text-center py-12">
        <i data-lucide="layers" class="w-12 h-12 text-natural-tan mx-auto mb-3 animate-pulse"></i>
        <p class="text-natural-text font-serif italic text-lg font-bold">등록된 구문 배열 데이터가 없습니다.</p>
        <p class="text-natural-tan text-sm mt-1">선생님 관리관 페이지에서 신규 구문을 출제해 주세요!</p>
      </div>
    `;
    quizCard.classList.remove('hidden');
    completionCard.classList.add('hidden');
    safeCreateIcons();
    return;
  }

  // Progress UI
  const percent = syntaxData.length > 0 ? Math.round((syntaxIndex / syntaxData.length) * 100) : 0;
  document.getElementById('syntax-progress-text').innerText = `PROGRESS: ${Math.min(syntaxIndex + 1, syntaxData.length)} / ${syntaxData.length}`;
  document.getElementById('syntax-progress-percent').innerText = `${percent}%`;
  document.getElementById('syntax-progress-bar').style.width = `${(syntaxIndex / syntaxData.length) * 100}%`;
  document.getElementById('syntax-score-display').innerText = syntaxScore;

  if (syntaxIndex >= syntaxData.length) {
    const rate = syntaxData.length > 0 ? Math.round((syntaxScore / syntaxData.length) * 100) : 0;
    document.getElementById('syntax-final-score').innerHTML = `${syntaxScore} <span class="text-sm font-normal text-natural-tan">/ ${syntaxData.length}</span>`;
    document.getElementById('syntax-final-rate').innerText = `${rate}%`;

    quizCard.classList.add('hidden');
    completionCard.classList.remove('hidden');
    return;
  }

  quizCard.classList.remove('hidden');
  completionCard.classList.add('hidden');

  const currentQuestion = syntaxData[syntaxIndex];
  document.getElementById('syntax-target-grammar').innerText = `⚡ 핵심 어법: ${currentQuestion.grammar}`;
  document.getElementById('syntax-target-korean').innerText = currentQuestion.korean;
  document.getElementById('syntax-question-counter').innerText = `Q_A_${syntaxIndex + 1}`;

  // Initialize pool if empty state
  if (!syntaxAnswered && syntaxSelectedWords.length === 0 && syntaxWordBank.length === 0 && !syntaxTypedInput) {
    syntaxWordBank = [...currentQuestion.words].sort(() => Math.random() - 0.5);
  }

  // Render Constructed Cards
  const builderArea = document.getElementById('syntax-builder-area');
  builderArea.innerHTML = '';
  
  if (syntaxSelectedWords.length === 0) {
    builderArea.innerHTML = `<span class="text-xs text-natural-tan italic font-medium select-none py-1.5">아래 단어 금고에서 카드를 차례대로 터치하여 조립하세요...</span>`;
  } else {
    syntaxSelectedWords.forEach((word, activeIdx) => {
      const chip = document.createElement('button');
      chip.className = `inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-natural-border hover:border-[#E17A70] rounded-xl text-xs font-semibold text-natural-text shadow-xs font-sans transition-all active:scale-95 ${
        syntaxAnswered ? 'cursor-default border-dashed opacity-80' : 'cursor-pointer'
      }`;
      chip.innerHTML = `
        <span>${word}</span>
        ${!syntaxAnswered ? `<i data-lucide="corner-down-left" class="w-2.5 h-2.5 text-natural-tan"></i>` : ''}
      `;
      
      if (!syntaxAnswered) {
        chip.addEventListener('click', () => {
          // Remove from built
          syntaxSelectedWords.splice(activeIdx, 1);
          // Put back to bank
          syntaxWordBank.push(word);
          
          syncSyntaxInputAndState();
          initSyntaxQuiz();
        });
      }
      builderArea.appendChild(chip);
    });
  }

  // Render Candiate Word Pool
  const wordPool = document.getElementById('syntax-word-pool');
  wordPool.innerHTML = '';

  if (syntaxWordBank.length === 0 && !syntaxAnswered) {
    wordPool.innerHTML = `<span class="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">✨ 단어를 모두 사용하여 정답 검증 버튼을 누를 수 있습니다!</span>`;
  } else {
    syntaxWordBank.forEach((word, bankIdx) => {
      const chip = document.createElement('button');
      chip.className = `px-3.5 py-2 bg-white border border-natural-border hover:border-natural-green hover:shadow-xs hover:bg-natural-sidebar rounded-xl text-sm font-semibold text-natural-text shadow-2xs font-sans transition-all active:scale-95 flex items-center justify-center ${
        syntaxAnswered ? 'opacity-40 cursor-not-allowed text-natural-tan/40 bg-natural-sidebar/5' : 'cursor-pointer'
      }`;
      chip.innerText = word;
      
      if (!syntaxAnswered) {
        chip.addEventListener('click', () => {
          syntaxSelectedWords.push(word);
          syntaxWordBank.splice(bankIdx, 1);
          
          syncSyntaxInputAndState();
          initSyntaxQuiz();
        });
      }
      
      wordPool.appendChild(chip);
    });
  }

  // Sync / Render Textbox Input
  const manualInput = document.getElementById('syntax-manual-input');
  manualInput.value = syntaxTypedInput;
  manualInput.disabled = syntaxAnswered;

  // Submit trigger validation and styling
  const submitBtn = document.getElementById('btn-syntax-submit');
  const feedbackWrapper = document.getElementById('syntax-feedback-wrapper');
  feedbackWrapper.innerHTML = '';

  if (!syntaxAnswered) {
    submitBtn.innerText = '제출 및 채점하기';
    submitBtn.onclick = handleSyntaxConfirmAnswer;

    if (syntaxTypedInput.trim().length > 0) {
      submitBtn.className = "px-6 py-3 rounded-2xl font-bold transition-all shadow-xs bg-natural-green text-white hover:opacity-90 cursor-pointer active:scale-95";
      submitBtn.disabled = false;
    } else {
      submitBtn.className = "px-6 py-3 rounded-2xl font-bold transition-all shadow-xs bg-natural-sidebar text-natural-tan/60 border border-natural-border/60 cursor-not-allowed";
      submitBtn.disabled = true;
    }
  } else {
    const cleanUser = syntaxTypedInput.toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
    const cleanCorrect = currentQuestion.answer.toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
    const isCorrect = cleanUser === cleanCorrect;

    if (isCorrect) {
      feedbackWrapper.innerHTML = `
        <div class="space-y-1">
          <span class="text-natural-green font-bold flex items-center gap-1.5 bg-natural-sidebar px-3 py-1.5 rounded-lg text-sm border border-natural-border w-fit">
            🎉 축하합니다! 완벽한 영어 구문 어순입니다!
          </span>
          <p class="text-xs text-natural-tan pl-1.5">Model Answer: <span class="font-bold underline text-natural-text">${currentQuestion.answer}</span></p>
        </div>
      `;
    } else {
      feedbackWrapper.innerHTML = `
        <div class="space-y-1 bg-rose-50 border border-red-100 rounded-xl p-3">
          <span class="text-[#E17A70] font-bold block text-xs">
            😢 오배열입니다! 다시 복습해 보며 패턴을 익혀봅시다.
          </span>
          <div class="text-xs leading-normal space-y-0.5 text-natural-text pl-0.5">
            <p>• 학생 작성: <span class="text-red-700 font-semibold italic">${syntaxTypedInput || '(빈 문장)'}</span></p>
            <p>• 정답 모범: <strong class="text-natural-green font-extrabold select-all">${currentQuestion.answer}</strong></p>
          </div>
        </div>
      `;
    }

    submitBtn.disabled = false;
    submitBtn.className = "inline-flex items-center gap-1.5 px-6 py-3 bg-natural-green text-white font-bold rounded-2xl hover:opacity-90 transition-all cursor-pointer shadow-xs";
    submitBtn.innerHTML = `
      <span>${syntaxIndex === syntaxData.length - 1 ? '구문 대단원 완료' : '다음 구문 도전'}</span>
      <i data-lucide="arrow-right" class="w-4 h-4"></i>
    `;
    submitBtn.onclick = handleSyntaxNext;
  }

  safeCreateIcons();
}

function syncSyntaxInputAndState() {
  if (syntaxSelectedWords.length > 0) {
    syntaxTypedInput = syntaxSelectedWords.join(' ');
  } else {
    syntaxTypedInput = '';
  }
}

function handleSyntaxResetBuilder() {
  if (syntaxAnswered) return;
  const currentQuestion = syntaxData[syntaxIndex];
  if (!currentQuestion) return;

  syntaxSelectedWords = [];
  syntaxTypedInput = '';
  syntaxWordBank = [...currentQuestion.words].sort(() => Math.random() - 0.5);
  
  initSyntaxQuiz();
  showToast('🧹 카드 배열판이 초기화되었습니다.');
}

function handleSyntaxConfirmAnswer() {
  const finalAnswer = syntaxTypedInput.trim();
  if (!finalAnswer || syntaxAnswered) return;

  const currentQuestion = syntaxData[syntaxIndex];
  
  const cleanUser = finalAnswer.toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
  const cleanCorrect = currentQuestion.answer.toLowerCase().replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
  
  const isCorrect = cleanUser === cleanCorrect;

  if (isCorrect) {
    syntaxScore++;
  }
  syntaxAnswered = true;
  saveToLocalStorage();
  handleAddHistory('syntax', currentQuestion.korean, finalAnswer, currentQuestion.answer, isCorrect);

  initSyntaxQuiz();
  updateSidebarCounters();
}

function handleSyntaxNext() {
  syntaxIndex++;
  syntaxAnswered = false;
  syntaxSelectedWords = [];
  syntaxWordBank = [];
  syntaxTypedInput = '';
  saveToLocalStorage();

  initSyntaxQuiz();
  updateSidebarCounters();
}

function handleSyntaxRestart() {
  syntaxIndex = 0;
  syntaxScore = 0;
  syntaxAnswered = false;
  syntaxSelectedWords = [];
  syntaxWordBank = [];
  syntaxTypedInput = '';
  saveToLocalStorage();

  initSyntaxQuiz();
  updateSidebarCounters();
}

// --- 8. WRONGS Notebook VIEW ---
function renderWrongsList() {
  const emptyView = document.getElementById('empty-wrongs-view');
  const wrongsListDiv = document.getElementById('wrongs-list');
  const clearBtn = document.getElementById('btn-clear-wrongs');

  const wrongs = quizHistory.filter(h => !h.isCorrect);

  if (wrongs.length === 0) {
    emptyView.classList.remove('hidden');
    wrongsListDiv.classList.add('hidden');
    clearBtn.classList.add('hidden');
  } else {
    emptyView.classList.add('hidden');
    wrongsListDiv.classList.remove('hidden');
    clearBtn.classList.remove('hidden');

    wrongsListDiv.innerHTML = '';
    wrongs.forEach((entry, idx) => {
      const card = document.createElement('div');
      card.className = "bg-white rounded-[24px] border border-natural-border p-5 shadow-[0_10px_30px_rgba(93,109,62,0.03)] flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up";
      
      const isVocab = entry.type === 'vocab';
      const labelText = isVocab ? '어휘 요항' : '서술형 영작';
      const tagStyle = isVocab ? 'bg-natural-sidebar text-natural-green border border-natural-border' : 'bg-natural-sidebar text-natural-tan border border-natural-border';

      card.innerHTML = `
        <div class="space-y-2">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-bold text-natural-tan font-mono">#${wrongs.length - idx}</span>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-md ${tagStyle}">
              ${labelText}
            </span>
            <span class="text-[10px] text-natural-tan">${entry.timestamp}에 학습</span>
          </div>

          <div class="space-y-1">
            <h5 class="font-bold text-natural-text text-base">${entry.item}</h5>
            <div class="space-y-1 border-l-2 border-natural-border pl-3.5 mt-2">
              <p class="text-xs text-red-650 font-medium">
                ❌ 학생 제출 답안: <span class="font-semibold italic">${entry.userAnswer || '(공란)'}</span>
              </p>
              <p class="text-xs text-natural-green font-bold">
                ✅ 정답 모범 답안: <span class="font-extrabold">${entry.correctAnswer}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="shrink-0 flex items-center justify-end">
          <button
            class="inline-flex items-center gap-1 px-3.5 py-1.5 bg-natural-sidebar hover:bg-[#E8E4D8]/60 text-natural-text text-xs font-semibold rounded-xl border border-natural-border transition-colors cursor-pointer"
            onclick="routeToReview('${entry.type}')"
          >
            과정 복습하러 가기
            <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-natural-green"></i>
          </button>
        </div>
      `;
      wrongsListDiv.appendChild(card);
    });
  }

  safeCreateIcons();
}

window.routeToReview = function(type) {
  changeActiveMode(type);
};

function clearWrongNotebook() {
  if (confirm('오답 분석 기록을 전체 삭제하시겠습니까?')) {
    quizHistory = [];
    saveToLocalStorage();
    renderWrongsList();
    updateSidebarCounters();
    showToast('✨ 오답 노트 기록을 전부 비웠습니다.');
  }
}

// --- 9. TEACHER MANAGEMENT MODULE ---
function initTeacherDashboard() {
  // Update Header Labels
  document.getElementById('teacher-subtab-vocab-count').innerText = vocabData.length;
  document.getElementById('teacher-subtab-syntax-count').innerText = syntaxData.length;

  // Toggle Sub-tab menus
  const tabVocabBtn = document.getElementById('teacher-subtab-vocab-btn');
  const tabSyntaxBtn = document.getElementById('teacher-subtab-syntax-btn');
  const tabBackupBtn = document.getElementById('teacher-subtab-backup-btn');

  [tabVocabBtn, tabSyntaxBtn, tabBackupBtn].forEach(btn => {
    btn.className = "px-5 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer border-transparent text-natural-tan hover:text-natural-text";
  });

  document.getElementById('teacher-container-vocab').classList.add('hidden');
  document.getElementById('teacher-container-syntax').classList.add('hidden');
  document.getElementById('teacher-container-backup').classList.add('hidden');

  if (teacherActiveTab === 'vocab') {
    tabVocabBtn.className = "px-5 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer border-natural-green text-natural-green";
    document.getElementById('teacher-container-vocab').classList.remove('hidden');
    renderTeacherVocabList();
  } else if (teacherActiveTab === 'syntax') {
    tabSyntaxBtn.className = "px-5 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer border-natural-green text-natural-green";
    document.getElementById('teacher-container-syntax').classList.remove('hidden');
    renderTeacherSyntaxList();
  } else if (teacherActiveTab === 'backup') {
    tabBackupBtn.className = "px-5 py-3 text-sm font-bold border-b-2 transition-all cursor-pointer border-natural-green text-natural-green";
    document.getElementById('teacher-container-backup').classList.remove('hidden');
    renderBackupModule();
  }

  safeCreateIcons();
}

function changeTeacherSubTab(tab) {
  teacherActiveTab = tab;
  initTeacherDashboard();
}

// A. Teacher Vocabs
function renderTeacherVocabList() {
  const listDiv = document.getElementById('teacher-vocab-list-container');
  listDiv.innerHTML = '';

  if (vocabData.length === 0) {
    listDiv.innerHTML = `<p class="text-xs text-natural-tan py-6 text-center italic">등록된 어휘가 존재하지 않습니다. 좌측에서 추가해 주세요!</p>`;
    return;
  }

  vocabData.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = "py-4 flex items-start justify-between gap-4";
    row.innerHTML = `
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold text-natural-green bg-natural-sidebar px-2 py-0.5 rounded border border-natural-border">Q_${idx+1}</span>
          <h5 class="text-base font-bold text-natural-text font-serif italic">${item.word}</h5>
        </div>
        <p class="text-xs font-bold text-natural-green">정답 뜻: <span class="underline">${item.answer}</span></p>
        <p class="text-[10px] text-natural-tan">나머지 오답 보기: ${item.wrong.join(' / ')}</p>
      </div>

      <div class="flex items-center gap-1.5 shrink-0">
        <button
          onclick="startEditVocab(${idx})"
          class="p-2 border border-natural-border rounded-lg bg-natural-sidebar hover:bg-[#E8E4D8]/50 text-natural-tan hover:text-natural-text transition-colors cursor-pointer"
          title="수정하기"
        >
          <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
        </button>
        <button
          onclick="deleteVocabItem(${idx})"
          class="p-2 border border-red-100 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-red-800 transition-colors cursor-pointer"
          title="삭제하기"
        >
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    listDiv.appendChild(row);
  });
  safeCreateIcons();
}

window.startEditVocab = function(idx) {
  const item = vocabData[idx];
  editingVocabIdx = idx;

  document.getElementById('teacher-vocab-input-word').value = item.word;
  document.getElementById('teacher-vocab-input-answer').value = item.answer;
  document.getElementById('teacher-vocab-input-wrong1').value = item.wrong[0] || '';
  document.getElementById('teacher-vocab-input-wrong2').value = item.wrong[1] || '';
  document.getElementById('teacher-vocab-input-wrong3').value = item.wrong[2] || '';

  // Form label updates
  document.getElementById('teacher-vocab-form-title').innerHTML = `<i data-lucide="edit-2" class="w-4 h-4 text-amber-600"></i> 단어 정보 편집 수정중`;
  document.getElementById('teacher-vocab-form-submit-label').innerText = '단어 수정 완료 및 저장';
  document.getElementById('btn-teacher-vocab-cancel-edit').classList.remove('hidden');
  
  safeCreateIcons();
  window.scrollTo({ top: 320, behavior: 'smooth' });
};

function cancelVocabEditing() {
  editingVocabIdx = null;
  document.getElementById('teacher-vocab-form').reset();
  
  document.getElementById('teacher-vocab-form-title').innerHTML = `<i data-lucide="layers" class="w-4 h-4 text-natural-green"></i> 새로운 필수 어휘 추가`;
  document.getElementById('teacher-vocab-form-submit-label').innerText = '새로운 단어 출원 등록';
  document.getElementById('btn-teacher-vocab-cancel-edit').classList.add('hidden');
  safeCreateIcons();
}

window.deleteVocabItem = function(idx) {
  const target = vocabData[idx];
  if (confirm(`'${target.word}' 단어 질문을 정말 삭제하시겠습니까?`)) {
    vocabData.splice(idx, 1);
    if (editingVocabIdx === idx) cancelVocabEditing();
    else if (editingVocabIdx !== null && editingVocabIdx > idx) editingVocabIdx--;

    saveToLocalStorage();
    initTeacherDashboard();
    updateSidebarCounters();
    showToast('🗑️ 단어 문항이 삭제되었습니다.');
  }
};

// B. Teacher Syntaxes
function renderTeacherSyntaxList() {
  const listDiv = document.getElementById('teacher-syntax-list-container');
  listDiv.innerHTML = '';

  if (syntaxData.length === 0) {
    listDiv.innerHTML = `<p class="text-xs text-natural-tan py-6 text-center italic">등록된 어순 문장이 존재하지 않습니다. 좌측에서 추가해 주세요!</p>`;
    return;
  }

  syntaxData.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = "py-4 flex items-start justify-between gap-4";
    row.innerHTML = `
      <div class="space-y-1.5 flex-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-mono font-bold text-natural-tan bg-natural-sidebar px-2 py-0.5 rounded border border-natural-border">Q_${idx+1}</span>
          <span class="text-[10px] font-bold text-natural-green bg-natural-sidebar border border-natural-border px-2 py-0.5 rounded-md">${item.grammar}</span>
        </div>
        <p class="text-sm font-bold text-natural-text">${item.korean}</p>
        <p class="text-xs font-bold text-natural-green leading-relaxed">정답 본문: <span class="font-sans italic select-all select-none">${item.answer}</span></p>
        <div class="flex flex-wrap gap-1 mt-1">
          <span class="text-[10px] text-natural-tan py-0.5 mr-1">분해 카드:</span>
          ${item.words.map(w => `<span class="text-[10px] bg-natural-sidebar px-1.5 py-0.5 rounded text-natural-text border border-natural-border font-mono">${w}</span>`).join('')}
        </div>
      </div>

      <div class="flex items-center gap-1.5 shrink-0">
        <button
          onclick="startEditSyntax(${idx})"
          class="p-2 border border-natural-border rounded-lg bg-natural-sidebar hover:bg-[#E8E4D8]/50 text-natural-tan hover:text-natural-text transition-colors cursor-pointer"
          title="수정하기"
        >
          <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
        </button>
        <button
          onclick="deleteSyntaxItem(${idx})"
          class="p-2 border border-red-100 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 hover:text-red-800 transition-colors cursor-pointer"
          title="삭제하기"
        >
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
    listDiv.appendChild(row);
  });
  safeCreateIcons();
}

window.startEditSyntax = function(idx) {
  const item = syntaxData[idx];
  editingSyntaxIdx = idx;

  document.getElementById('teacher-syntax-input-grammar').value = item.grammar;
  document.getElementById('teacher-syntax-input-korean').value = item.korean;
  document.getElementById('teacher-syntax-input-answer').value = item.answer;

  document.getElementById('teacher-syntax-form-title').innerHTML = `<i data-lucide="edit-2" class="w-4 h-4 text-amber-600"></i> 구문 문항 수정중`;
  document.getElementById('teacher-syntax-form-submit-label').innerText = '구문 훈련 저장 및 적용';
  document.getElementById('btn-teacher-syntax-cancel-edit').classList.remove('hidden');

  safeCreateIcons();
  window.scrollTo({ top: 320, behavior: 'smooth' });
};

function cancelSyntaxEditing() {
  editingSyntaxIdx = null;
  document.getElementById('teacher-syntax-form').reset();

  document.getElementById('teacher-syntax-form-title').innerHTML = `<i data-lucide="plus" class="w-4 h-4 text-natural-green"></i> 새로운 배열 구문 출제`;
  document.getElementById('teacher-syntax-form-submit-label').innerText = '신규 어순 카드 출제';
  document.getElementById('btn-teacher-syntax-cancel-edit').classList.add('hidden');
  safeCreateIcons();
}

window.deleteSyntaxItem = function(idx) {
  const target = syntaxData[idx];
  if (confirm(`'${target.grammar}' 구문 문제를 정말 삭제하시겠습니까?`)) {
    syntaxData.splice(idx, 1);
    if (editingSyntaxIdx === idx) cancelSyntaxEditing();
    else if (editingSyntaxIdx !== null && editingSyntaxIdx > idx) editingSyntaxIdx--;

    saveToLocalStorage();
    initTeacherDashboard();
    updateSidebarCounters();
    showToast('🗑️ 구문 어순 문항이 삭제되었습니다.');
  }
};

// C. Backup & Restore Modules
function renderBackupModule() {
  const dump = {
    vocab: vocabData,
    syntax: syntaxData
  };
  document.getElementById('teacher-backup-export-textarea').value = JSON.stringify(dump, null, 2);
  document.getElementById('teacher-backup-import-textarea').value = '';
  document.getElementById('teacher-backup-status-wrapper').innerHTML = '';
}

function handleCopyBackup() {
  const textarea = document.getElementById('teacher-backup-export-textarea');
  textarea.select();
  try {
    document.execCommand('copy');
    
    const copyLabel = document.getElementById('btn-teacher-copy-text');
    copyLabel.innerText = '복사 완료! 📋';
    copyLabel.classList.add('text-emerald-700');
    showToast('💾 백업 문자열이 클립보드에 무사히 복사되었습니다!');
    
    setTimeout(() => {
      copyLabel.innerText = '클립보드 전체 복사';
      copyLabel.classList.remove('text-emerald-700');
    }, 2000);
  } catch (err) {
    showToast('❌ 클립보드 접근이 제한되었습니다. 직접 드래그 복사해 주세요.');
  }
}

function handleApplyBackup() {
  const inputArea = document.getElementById('teacher-backup-import-textarea');
  const statusWrapper = document.getElementById('teacher-backup-status-wrapper');
  statusWrapper.innerHTML = '';

  const jsonStr = inputArea.value.trim();
  if (!jsonStr) {
    statusWrapper.innerHTML = `<span class="text-[11px] text-rose-600 font-medium">⚠️ 데이터를 입력해주세요.</span>`;
    return;
  }

  try {
    const parsed = JSON.parse(jsonStr);
    
    if (!parsed.vocab || !parsed.syntax || !Array.isArray(parsed.vocab) || !Array.isArray(parsed.syntax)) {
      statusWrapper.innerHTML = `<span class="text-[11px] text-rose-600 font-medium">❌ 형식이 올바르지 않습니다. vocab/syntax 배열이 필요합니다.</span>`;
      return;
    }

    vocabData = parsed.vocab;
    syntaxData = parsed.syntax;
    
    // Reset indices to guard overflows
    vocabIndex = 0;
    vocabScore = 0;
    vocabAnswered = false;
    vocabSelectedWord = null;

    syntaxIndex = 0;
    syntaxScore = 0;
    syntaxAnswered = false;
    syntaxSelectedWords = [];
    syntaxTypedInput = '';

    saveToLocalStorage();
    
    statusWrapper.innerHTML = `<span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">✨ 데이터 정상 적용 완료!</span>`;
    inputArea.value = '';
    
    showToast('🎉 백업본 데이터 이식이 마법같이 이루어졌습니다!');
    updateSidebarCounters();
    initTeacherDashboard();
  } catch (err) {
    statusWrapper.innerHTML = `<span class="text-[11px] text-rose-600 font-medium leading-normal">❌ 형식이 틀렸습니다: ${err.message}</span>`;
  }
}

function handleResetToDefaults() {
  if (confirm('전체 문항을 학년 초 디폴트 값(어휘 10개, 구문 3개)으로 되돌리시겠습니까? 추가했던 데이터들은 사라집니다.')) {
    vocabData = [...DEFAULT_VOCAB_DATA];
    syntaxData = [...DEFAULT_SYNTAX_DATA];

    vocabIndex = 0;
    vocabScore = 0;
    vocabAnswered = false;
    vocabSelectedWord = null;

    syntaxIndex = 0;
    syntaxScore = 0;
    syntaxAnswered = false;
    syntaxSelectedWords = [];
    syntaxTypedInput = '';

    saveToLocalStorage();

    showToast('♻️ 전체 퀴즈 출제 문항이 초기 기본 사양으로 리셋되었습니다!');
    syncActiveSectionViews();
    updateSidebarCounters();
  }
}

// ------ 10. GLOBAL EVENT FLOW LISTENERS ------
function initializeQuizApp() {
  // Mount cache
  loadFromLocalStorage();

  // Load correct date label
  const dateLabel = document.getElementById('sidebar-date-label');
  if (dateLabel) {
    dateLabel.innerText = getLocalDateString();
  }

  // Root Navigation tabs
  const tabBtnStudent = document.getElementById('tab-btn-student');
  if (tabBtnStudent) {
    tabBtnStudent.addEventListener('click', () => changeActiveMode('vocab'));
  }
  const tabBtnTeacher = document.getElementById('tab-btn-teacher');
  if (tabBtnTeacher) {
    tabBtnTeacher.addEventListener('click', () => changeActiveMode('teacher'));
  }

  // Sidebar specific navigation selectors
  const menuBtnVocab = document.getElementById('menu-btn-vocab');
  if (menuBtnVocab) {
    menuBtnVocab.addEventListener('click', () => changeActiveMode('vocab'));
  }
  const menuBtnSyntax = document.getElementById('menu-btn-syntax');
  if (menuBtnSyntax) {
    menuBtnSyntax.addEventListener('click', () => changeActiveMode('syntax'));
  }
  const menuBtnWrongs = document.getElementById('menu-btn-wrongs');
  if (menuBtnWrongs) {
    menuBtnWrongs.addEventListener('click', () => changeActiveMode('wrongs'));
  }

  // Sidebar progress stats reset
  const btnSidebarResetProg = document.getElementById('btn-sidebar-reset-prog');
  if (btnSidebarResetProg) {
    btnSidebarResetProg.addEventListener('click', resetProgressAll);
  }

  // Vocab Screen Interactions
  const btnVocabListen = document.getElementById('btn-vocab-listen');
  if (btnVocabListen) {
    btnVocabListen.addEventListener('click', () => {
      if (vocabData[vocabIndex]) speakWord(vocabData[vocabIndex].word);
    });
  }
  const btnVocabRestart = document.getElementById('btn-vocab-restart');
  if (btnVocabRestart) {
    btnVocabRestart.addEventListener('click', handleVocabRestart);
  }

  // Syntax Screen Interactions
  const btnSyntaxResetBuilder = document.getElementById('btn-syntax-reset-builder');
  if (btnSyntaxResetBuilder) {
    btnSyntaxResetBuilder.addEventListener('click', handleSyntaxResetBuilder);
  }
  const btnSyntaxRestart = document.getElementById('btn-syntax-restart');
  if (btnSyntaxRestart) {
    btnSyntaxRestart.addEventListener('click', handleSyntaxRestart);
  }
  
  // Real-time keyboard-types mapping for dynamic builder updates
  const syntaxInputField = document.getElementById('syntax-manual-input');
  if (syntaxInputField) {
    syntaxInputField.addEventListener('input', (e) => {
      syntaxTypedInput = e.target.value;
      const submitBtn = document.getElementById('btn-syntax-submit');
      if (submitBtn) {
        if (syntaxTypedInput.trim().length > 0) {
          submitBtn.className = "px-6 py-3 rounded-2xl font-bold transition-all shadow-xs bg-natural-green text-white hover:opacity-90 cursor-pointer active:scale-95";
          submitBtn.disabled = false;
        } else {
          submitBtn.className = "px-6 py-3 rounded-2xl font-bold transition-all shadow-xs bg-natural-sidebar text-natural-tan/60 border border-natural-border/60 cursor-not-allowed";
          submitBtn.disabled = true;
        }
      }
    });
  }

  // Wrongs Notebook Triggers
  const btnClearWrongs = document.getElementById('btn-clear-wrongs');
  if (btnClearWrongs) {
    btnClearWrongs.addEventListener('click', clearWrongNotebook);
  }

  // Teacher Sidebars Tabs
  const teacherSubtabVocabBtn = document.getElementById('teacher-subtab-vocab-btn');
  if (teacherSubtabVocabBtn) {
    teacherSubtabVocabBtn.addEventListener('click', () => changeTeacherSubTab('vocab'));
  }
  const teacherSubtabSyntaxBtn = document.getElementById('teacher-subtab-syntax-btn');
  if (teacherSubtabSyntaxBtn) {
    teacherSubtabSyntaxBtn.addEventListener('click', () => changeTeacherSubTab('syntax'));
  }
  const teacherSubtabBackupBtn = document.getElementById('teacher-subtab-backup-btn');
  if (teacherSubtabBackupBtn) {
    teacherSubtabBackupBtn.addEventListener('click', () => changeTeacherSubTab('backup'));
  }

  // Educator Panel - Forms & Triggers
  const btnTeacherResetDefault = document.getElementById('btn-teacher-reset-default');
  if (btnTeacherResetDefault) {
    btnTeacherResetDefault.addEventListener('click', handleResetToDefaults);
  }
  
  // A. Vocab Submit Handlers
  const teacherVocabForm = document.getElementById('teacher-vocab-form');
  if (teacherVocabForm) {
    teacherVocabForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const word = document.getElementById('teacher-vocab-input-word').value.trim();
      const answer = document.getElementById('teacher-vocab-input-answer').value.trim();
      const w1 = document.getElementById('teacher-vocab-input-wrong1').value.trim();
      const w2 = document.getElementById('teacher-vocab-input-wrong2').value.trim();
      const w3 = document.getElementById('teacher-vocab-input-wrong3').value.trim();

      if (!word || !answer || !w1 || !w2 || !w3) {
        showToast('⚠️ 모든 보기를 빈칸 없이 빠짐없이 채워주세요!');
        return;
      }

      const item = { word, answer, wrong: [w1, w2, w3] };

      if (editingVocabIdx !== null) {
        vocabData[editingVocabIdx] = item;
        showToast('✅ 영어 어휘 단어가 성공적으로 편집되었습니다.');
        cancelVocabEditing();
      } else {
        vocabData.push(item);
        showToast('✅ 신규 영어 어휘 단어가 무사히 등록되었습니다.');
        document.getElementById('teacher-vocab-form').reset();
      }

      saveToLocalStorage();
      initTeacherDashboard();
      updateSidebarCounters();
    });
  }
  const btnTeacherVocabCancelEdit = document.getElementById('btn-teacher-vocab-cancel-edit');
  if (btnTeacherVocabCancelEdit) {
    btnTeacherVocabCancelEdit.addEventListener('click', cancelVocabEditing);
  }

  // B. Syntax Submit Handlers
  const teacherSyntaxForm = document.getElementById('teacher-syntax-form');
  if (teacherSyntaxForm) {
    teacherSyntaxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const grammar = document.getElementById('teacher-syntax-input-grammar').value.trim();
      const korean = document.getElementById('teacher-syntax-input-korean').value.trim();
      const answer = document.getElementById('teacher-syntax-input-answer').value.trim();

      if (!grammar || !korean || !answer) {
        showToast('⚠️ 모든 구문 정보를 빈칸 없이 써주세요!');
        return;
      }

      const cleanAnswer = answer.replace(/[.,!?]/g, '').replace(/\s+/g, ' ').trim();
      const words = cleanAnswer.split(' ').filter(w => w.length > 0);

      if (words.length < 3) {
        showToast('⚠️ 문장은 최소 3단어 이상이어야 배열 퀴즈를 출제할 수 있습니다.');
        return;
      }

      const item = { grammar, korean, answer: cleanAnswer, words };

      if (editingSyntaxIdx !== null) {
        syntaxData[editingSyntaxIdx] = item;
        showToast('✅ 영어 구문 어순 문항이 성공적으로 편집되었습니다.');
        cancelSyntaxEditing();
      } else {
        syntaxData.push(item);
        showToast('✅ 신규 구문 배열 문항이 출제되어 추가되었습니다.');
        document.getElementById('teacher-syntax-form').reset();
      }

      saveToLocalStorage();
      initTeacherDashboard();
      updateSidebarCounters();
    });
  }
  const btnTeacherSyntaxCancelEdit = document.getElementById('btn-teacher-syntax-cancel-edit');
  if (btnTeacherSyntaxCancelEdit) {
    btnTeacherSyntaxCancelEdit.addEventListener('click', cancelSyntaxEditing);
  }

  // C. Backup triggers
  const btnTeacherCopyBackup = document.getElementById('btn-teacher-copy-backup');
  if (btnTeacherCopyBackup) {
    btnTeacherCopyBackup.addEventListener('click', handleCopyBackup);
  }
  const btnTeacherApplyBackup = document.getElementById('btn-teacher-apply-backup');
  if (btnTeacherApplyBackup) {
    btnTeacherApplyBackup.addEventListener('click', handleApplyBackup);
  }

  // Initial Sync Layout renders
  updateSidebarCounters();
  changeActiveMode('vocab');
}

// Bootstrapper for load-safety across module lifecycle
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeQuizApp);
} else {
  initializeQuizApp();
}
