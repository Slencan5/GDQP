/**
 * RƯƠNG KIẾN THỨC – GIÁO DỤC QUỐC PHÒNG
 * Phong cách: Công an nhân dân Việt Nam
 * Chế độ thuyết trình màn hình lớn (1920x1080), không thanh cuộn.
 * Tích hợp âm thanh hiệu ứng Web Audio API thuần (không cần file âm thanh ngoài).
 */

// =============================================================================
// 1. DỮ LIỆU 10 CÂU HỎI TRẮC NGHIỆM ĐIỀU LỆNH & TIÊU CHUẨN CAND
// Giữ nguyên 100% nội dung chữ tiếng Việt có dấu theo yêu cầu
// =============================================================================
const QUESTIONS_DATA = [
  {
    code: "[MẬT LỆNH #01]",
    shortTitle: "ĐẶC THÙ NHIỆM VỤ",
    fullTitle: "TÍNH CHẤT ĐẶC THÙ & YÊU CẦU NHIỆM VỤ",
    rarity: "rarity-gold",
    icon: "shield",
    star: "⭐",
    question: "Các quy định khắt khe về ngoại hình và đặc điểm cơ thể trong ngành Công an nhân dân (CAND) xuất phát từ nguyên nhân chính nào?",
    options: [
      "Mục đích phân biệt đối xử giữa các cá nhân trong xã hội.",
      "Tính chất đặc thù và yêu cầu nhiệm vụ của lực lượng CAND.",
      "Xu hướng thẩm mỹ hiện đại của giới trẻ.",
      "Yêu cầu của các tổ chức quốc tế."
    ],
    correctIndex: 1,
    explanation: "Các quy định khắt khe không nhằm phân biệt đối xử mà nhằm phục vụ yêu cầu tác chiến, kỷ luật và uy nghiêm của lực lượng."
  },
  {
    code: "[HỒ SƠ #02]",
    shortTitle: "ĐẠI DIỆN PHÁP LUẬT",
    fullTitle: "SỰ TÔN NGHIÊM CỦA PHÁP LUẬT & NHÀ NƯỚC",
    rarity: "rarity-gold",
    icon: "badge",
    star: "★",
    question: "Khi làm nhiệm vụ, cán bộ, chiến sĩ Công an nhân dân đại diện cho cơ quan/thực thể nào?",
    options: [
      "Doanh nghiệp nhà nước.",
      "Pháp luật và sự tôn nghiêm của Nhà nước.",
      "Các tổ chức phi chính phủ.",
      "Các hiệp hội nghề nghiệp tự do."
    ],
    correctIndex: 1,
    explanation: "Chiến sĩ CAND là lực lượng thực thi pháp luật, đại diện cho quyền lực và sự tôn nghiêm của Nhà nước."
  },
  {
    code: "[ĐIỀU LỆNH #03]",
    shortTitle: "TÍNH CHÍNH QUY",
    fullTitle: "TÍNH ĐỒNG BỘ VÀ TÁC PHONG CHÍNH QUY",
    rarity: "rarity-purple",
    icon: "medal",
    star: "🎖️",
    question: "Tính chính quy trong lực lượng vũ trang thể hiện qua điều gì ở khía cạnh ngoại hình?",
    options: [
      "Sự đa dạng về kiểu tóc và phong cách cá nhân.",
      "Tính đồng bộ từ trang phục đến tác phong ngoại hình.",
      "Tự do thể hiện cá tính riêng.",
      "Việc sử dụng các trang sức đắt tiền."
    ],
    correctIndex: 1,
    explanation: "Tính chính quy đòi hỏi sự đồng bộ và thống nhất tuyệt đối trong toàn lực lượng."
  },
  {
    code: "[CHUYÊN ÁN #04]",
    shortTitle: "TRINH SÁT HÌNH SỰ",
    fullTitle: "NGHIỆP VỤ TRINH SÁT & MẬT PHỤC HÌNH SỰ",
    rarity: "rarity-purple",
    icon: "eye",
    star: "👁️",
    question: "Đặc điểm nhận dạng biệt lập (như vết bớt lớn ở mặt/cổ, hình xăm) gây bất lợi lớn nhất cho lực lượng nào?",
    options: [
      "Lực lượng hậu cần và kỹ thuật.",
      "Lực lượng trinh sát, mật phục, điều tra hình sự.",
      "Lực lượng giảng dạy tại các trường CAND.",
      "Lực lượng công nghệ thông tin."
    ],
    correctIndex: 1,
    explanation: "Các công tác mật phục, nằm vùng đòi hỏi không được để lộ danh tính hay có đặc điểm dễ nhớ."
  },
  {
    code: "[BẢO MẬT #05]",
    shortTitle: "AN TOÀN CÁN BỘ",
    fullTitle: "AN TOÀN NHẬN DẠNG & BẢO VỆ CHIẾN SĨ",
    rarity: "rarity-gold",
    icon: "shield",
    star: "🌟",
    question: "Rủi ro lớn nhất sau khi hoàn thành nhiệm vụ đối với chiến sĩ có hình xăm hoặc vết bớt độc lạ là gì?",
    options: [
      "Không được khen thưởng.",
      "Bị đối tượng tội phạm nhận diện và trả thù.",
      "Bị phạt điều lệnh.",
      "Giảm khả năng thăng tiến."
    ],
    correctIndex: 1,
    explanation: "Việc bị ghi nhớ đặc điểm nhân dạng có thể đe dọa an toàn tính mạng của chiến sĩ và gia đình sau này."
  },
  {
    code: "[QUÂN LỰC #06]",
    shortTitle: "THỂ LỰC TÁC CHIẾN",
    fullTitle: "TIÊU CHUẨN THỂ LỰC & HUẤN LUYỆN TÁC CHIẾN",
    rarity: "rarity-blue",
    icon: "target",
    star: "⚡",
    question: "Các vết sẹo co kéo lớn có thể gây ra ảnh hưởng gì đối với chiến sĩ CAND?",
    options: [
      "Ảnh hưởng đến tiêu chuẩn thể lực khi tham gia huấn luyện cường độ cao.",
      "Không gây ảnh hưởng gì.",
      "Giúp chiến sĩ trông mạnh mẽ hơn.",
      "Giảm khả năng giao tiếp."
    ],
    correctIndex: 0,
    explanation: "Sẹo co kéo có thể hạn chế vận động và giảm độ bền của cơ thể khi tác chiến."
  },
  {
    code: "[THÔNG TƯ #07]",
    shortTitle: "QUY CHUẨN NỮ GIỚI",
    fullTitle: "ĐIỀU CHỈNH THẨM MỸ TỰ NHIÊN NỮ CHIẾN SĨ",
    rarity: "rarity-blue",
    icon: "star",
    star: "🌸",
    question: "Điều chỉnh hiện nay trong quy định ngoại hình đối với nữ giới vào CAND là gì?",
    options: [
      "Cho phép xăm hình nghệ thuật ở cánh tay.",
      "Chấp nhận các hình phun xăm thẩm mỹ tự nhiên (như xăm lông mày, xăm môi).",
      "Cho phép nhuộm tóc màu sáng.",
      "Cho phép xỏ nhiều khuyên tai."
    ],
    correctIndex: 1,
    explanation: "Ngành đã cập nhật linh hoạt, chấp nhận xăm thẩm mỹ tự nhiên cho nữ giới."
  },
  {
    code: "[KỶ CƯƠNG #08]",
    shortTitle: "CĂN CỨ KỶ LUẬT",
    fullTitle: "CĂN CỨ QUY ĐỊNH CẤM XĂM HÌNH & KỶ LUẬT",
    rarity: "rarity-purple",
    icon: "badge",
    star: "⚖️",
    question: "Lý do nào dưới đây KHÔNG phải là căn cứ ban hành quy định cấm xăm hình trong CAND?",
    options: [
      "Yêu cầu an toàn nghiệp vụ trinh sát.",
      "Phòng tránh định kiến xã hội.",
      "Ghét bỏ sở thích cá nhân của công dân.",
      "Yêu cầu kỷ luật và tính thống nhất."
    ],
    correctIndex: 2,
    explanation: "Quy định xuất phát từ yêu cầu nghiệp vụ và điều lệnh, không dựa trên cảm tính cá nhân."
  },
  {
    code: "[TÁC PHONG #09]",
    shortTitle: "MÀU TÓC TỰ NHIÊN",
    fullTitle: "QUY ĐỊNH MÀU TÓC & SỰ NGHIÊM TÚC ĐIỀU LỆNH",
    rarity: "rarity-blue",
    icon: "gear",
    star: "📋",
    question: "Việc cấm nhuộm tóc màu lạ (đỏ, xanh, vàng...) áp dụng nhằm mục đích gì?",
    options: [
      "Đảm bảo màu tóc tự nhiên, tạo sự nghiêm túc và đồng bộ trong điều lệnh.",
      "Cắt giảm chi phí nhuộm tóc.",
      "Ngăn cản ngành tóc phát triển.",
      "Tránh cho tóc bị hư tổn."
    ],
    correctIndex: 0,
    explanation: "Màu tóc tự nhiên thể hiện sự nghiêm túc và tính chính quy của cán bộ, chiến sĩ."
  },
  {
    code: "[TUYỂN CHỌN #10]",
    shortTitle: "TIÊU CHUẨN TOÀN DIỆN",
    fullTitle: "TIÊU CHÍ TUYỂN CHỌN TOÀN DIỆN CỦA NGÀNH",
    rarity: "rarity-gold",
    icon: "medal",
    star: "🏅",
    question: "Một chiến sĩ có hình xăm lớn ở lưng, dù mặc đồng phục che kín, vì sao vẫn không đạt tiêu chuẩn tuyển chọn?",
    options: [
      "Vì vi phạm quy chuẩn kỷ luật, tâm lý và tiêu chuẩn tuyển chọn chung của ngành.",
      "Vì áo đồng phục mỏng sẽ lộ.",
      "Vì hình xăm sẽ tự lan ra mặt.",
      "Vì không ai kiểm tra lưng."
    ],
    correctIndex: 0,
    explanation: "Tiêu chuẩn ngành áp dụng toàn diện trên cơ thể để đảm bảo sự nghiêm túc từ bản chất."
  }
];

// Danh sách thẻ bài nghiệp vụ CAND hỗ trợ dải quay phong phú
const GACHA_CARD_TEMPLATES = [
  { code: "[MẬT LỆNH #01]", name: "ĐẶC THÙ NHIỆM VỤ", rarity: "rarity-gold", icon: "shield", star: "⭐", title: "TÍNH CHẤT ĐẶC THÙ & YÊU CẦU NHIỆM VỤ" },
  { code: "[HỒ SƠ #02]", name: "ĐẠI DIỆN PHÁP LUẬT", rarity: "rarity-gold", icon: "badge", star: "★", title: "SỰ TÔN NGHIÊM CỦA PHÁP LUẬT & NHÀ NƯỚC" },
  { code: "[ĐIỀU LỆNH #03]", name: "TÍNH CHÍNH QUY", rarity: "rarity-purple", icon: "medal", star: "🎖️", title: "TÍNH ĐỒNG BỘ VÀ TÁC PHONG CHÍNH QUY" },
  { code: "[CHUYÊN ÁN #04]", name: "TRINH SÁT HÌNH SỰ", rarity: "rarity-purple", icon: "eye", star: "👁️", title: "NGHIỆP VỤ TRINH SÁT & MẬT PHỤC HÌNH SỰ" },
  { code: "[BẢO MẬT #05]", name: "AN TOÀN CÁN BỘ", rarity: "rarity-gold", icon: "shield", star: "🌟", title: "AN TOÀN NHẬN DẠNG & BẢO VỆ CHIẾN SĨ" },
  { code: "[QUÂN LỰC #06]", name: "THỂ LỰC TÁC CHIẾN", rarity: "rarity-blue", icon: "target", star: "⚡", title: "TIÊU CHUẨN THỂ LỰC & HUẤN LUYỆN TÁC CHIẾN" },
  { code: "[THÔNG TƯ #07]", name: "QUY CHUẨN NỮ GIỚI", rarity: "rarity-blue", icon: "star", star: "🌸", title: "ĐIỀU CHỈNH THẨM MỸ TỰ NHIÊN NỮ CHIẾN SĨ" },
  { code: "[KỶ CƯƠNG #08]", name: "CĂN CỨ KỶ LUẬT", rarity: "rarity-purple", icon: "badge", star: "⚖️", title: "CĂN CỨ QUY ĐỊNH CẤM XĂM HÌNH & KỶ LUẬT" },
  { code: "[TÁC PHONG #09]", name: "MÀU TÓC TỰ NHIÊN", rarity: "rarity-blue", icon: "gear", star: "📋", title: "QUY ĐỊNH MÀU TÓC & SỰ NGHIÊM TÚC ĐIỀU LỆNH" },
  { code: "[TUYỂN CHỌN #10]", name: "TIÊU CHUẨN TOÀN DIỆN", rarity: "rarity-gold", icon: "medal", star: "🏅", title: "TIÊU CHÍ TUYỂN CHỌN TOÀN DIỆN CỦA NGÀNH" },
  { code: "[ĐẶC NHIỆM #11]", name: "CẢNH SÁT ĐẶC NHIỆM", rarity: "rarity-purple", icon: "target", star: "🎯", title: "LỰC LƯỢNG ĐẶC NHIỆM TÁC CHIẾN" },
  { code: "[AN NINH #12]", name: "AN NINH QUỐC GIA", rarity: "rarity-gold", icon: "shield", star: "⭐", title: "BẢO VỆ AN NINH QUỐC GIA" },
  { code: "[TUẦN TRA #13]", name: "TUẦN TRA KIỂM SOÁT", rarity: "rarity-blue", icon: "shield", star: "🚔", title: "TUẦN TRA KIỂM SOÁT ĐỊA BÀN" },
  { code: "[HẬU CẦN #14]", name: "KỸ THUẬT HẬU CẦN", rarity: "rarity-blue", icon: "box", star: "📦", title: "NGHIỆP VỤ HẬU CẦN KỸ THUẬT" }
];

// =============================================================================
// 2. HỆ THỐNG ÂM THANH HIỆU ỨNG TỔNG HỢP (WEB AUDIO API THUẦN)
// Không cần tải file ngoài, không lo bản quyền, chạy mượt mà ngay lập tức
// =============================================================================
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playClick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (_) {}
  }

  playChestRumble() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(60, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(140, this.ctx.currentTime + 0.8);
      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, this.ctx.currentTime + 0.7);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.85);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.85);
    } catch (_) {}
  }

  playReelTick() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1100, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(450, this.ctx.currentTime + 0.035);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.035);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.035);
    } catch (_) {}
  }

  playChestBurstFanfare() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        gain.gain.setValueAtTime(0.18, this.ctx.currentTime + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.08 + 0.4);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.4);
      });
    } catch (_) {}
  }

  playCorrectSound() {
    if (this.isMuted || !this.ctx) return;
    try {
      const notes = [587.33, 739.99, 880.00, 1174.66]; // D5, F#5, A5, D6 (Âm vang chiến thắng tươi sáng)
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.09);
        gain.gain.setValueAtTime(0.22, this.ctx.currentTime + idx * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.09 + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(this.ctx.currentTime + idx * 0.09);
        osc.stop(this.ctx.currentTime + idx * 0.09 + 0.5);
      });
    } catch (_) {}
  }

  playWrongSound() {
    if (this.isMuted || !this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(170, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);
    } catch (_) {}
  }
}

const sounds = new SoundEngine();

// =============================================================================
// 3. BIẾN TRẠNG THÁI TRÒ CHƠI
// =============================================================================
let shuffledQuestionList = []; // Danh sách 10 câu hỏi đã xáo trộn thứ tự
let currentQuestionIndex = 0;   // Chỉ số câu hỏi hiện tại (0 -> 9)
let userScore = 0;              // Điểm số của người chơi (0 -> 10)
let isOptionsLocked = false;    // Cờ khóa ô đáp án sau khi người chơi đã chọn
let isChestSpinning = false;    // Cờ khóa nút mở rương khi đang diễn ra hoạt ảnh

let currentWinningCard = null;  // Thẻ trúng thưởng của lượt quay hiện tại
let lastWinningCardName = "";   // Tên thẻ của lượt trước để tránh trùng liên tiếp

// Tham chiếu phần tử DOM
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const btnSoundToggle = document.getElementById("btnSoundToggle");
const soundIconOn = document.getElementById("soundIconOn");
const soundIconOff = document.getElementById("soundIconOff");

const viewIdle = document.getElementById("viewIdle");
const viewGacha = document.getElementById("viewGacha");
const viewQuiz = document.getElementById("viewQuiz");
const viewResult = document.getElementById("viewResult");

const chestBox = document.getElementById("chestBox");
const btnOpenChest = document.getElementById("btnOpenChest");

const reelSection = document.getElementById("reelSection");
const reelWrapper = document.getElementById("reelWrapper");
const reelTrack = document.getElementById("reelTrack");
const reelStatus = document.getElementById("reelStatus");

const chestOpeningStage = document.getElementById("chestOpeningStage");
const screenFlash = document.getElementById("screenFlash");
const lightRaysContainer = document.getElementById("lightRaysContainer");
const starBurstContainer = document.getElementById("starBurstContainer");
const flyingCardWrapper = document.getElementById("flyingCardWrapper");
const card3dFlip = document.getElementById("card3dFlip");
const cardFrontFace = document.getElementById("cardFrontFace");
const flyingCardStar = document.getElementById("flyingCardStar");
const flyingCardCode = document.getElementById("flyingCardCode");
const flyingCardTitle = document.getElementById("flyingCardTitle");
const flyingCardBadge = document.getElementById("flyingCardBadge");
const cardBackLabel = document.getElementById("cardBackLabel");

const quizOrderTag = document.getElementById("quizOrderTag");
const quizTopicTag = document.getElementById("quizTopicTag");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsGrid = document.getElementById("quizOptionsGrid");
const quizExplanationBox = document.getElementById("quizExplanationBox");
const quizExplanationText = document.getElementById("quizExplanationText");
const quizActionBar = document.getElementById("quizActionBar");
const btnNextAction = document.getElementById("btnNextAction");
const btnNextText = document.getElementById("btnNextText");

const finalScoreBig = document.getElementById("finalScoreBig");
const resultRankBadge = document.getElementById("resultRankBadge");
const resultCommentary = document.getElementById("resultCommentary");
const resCorrectNum = document.getElementById("resCorrectNum");
const resWrongNum = document.getElementById("resWrongNum");
const resAccuracyNum = document.getElementById("resAccuracyNum");
const btnReplay = document.getElementById("btnReplay");

// =============================================================================
// 4. BẬT / TẮT ÂM THANH HIỆU ỨNG
// =============================================================================
if (btnSoundToggle) {
  btnSoundToggle.addEventListener("click", () => {
    sounds.init();
    const muted = sounds.toggleMute();
    if (muted) {
      soundIconOn.style.display = "none";
      soundIconOff.style.display = "block";
    } else {
      soundIconOn.style.display = "block";
      soundIconOff.style.display = "none";
      sounds.playClick();
    }
  });
}

// =============================================================================
// 5. THUẬT TOÁN XÁO TRỘN FISHER–YATES
// =============================================================================
function fisherYatesShuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// =============================================================================
// 6. KHỞI TẠO VÀ ĐẶT LẠI TRÒ CHƠI
// =============================================================================
function initGame() {
  // Xáo trộn thứ tự 10 câu hỏi bằng Fisher-Yates
  shuffledQuestionList = fisherYatesShuffle(QUESTIONS_DATA);
  currentQuestionIndex = 0;
  userScore = 0;
  isOptionsLocked = false;
  isChestSpinning = false;
  currentWinningCard = null;
  lastWinningCardName = "";

  // Cập nhật thanh trạng thái
  updateTopbarStats();

  // Mở màn chờ ban đầu
  switchView(viewIdle);
  resetIdleChestState();
}

function updateTopbarStats() {
  progressText.textContent = `${currentQuestionIndex}/10`;
  scoreText.textContent = `${userScore}`;
}

function resetIdleChestState() {
  chestBox.classList.remove("shake-violent");
  chestBox.classList.add("floating-chest");
  btnOpenChest.disabled = false;
  isChestSpinning = false;
}

function switchView(targetPanel) {
  [viewIdle, viewGacha, viewQuiz, viewResult].forEach(panel => {
    panel.classList.remove("active");
  });
  targetPanel.classList.add("active");
}

// =============================================================================
// 7. HOẠT ẢNH MỞ RƯƠNG & QUAY THẺ GACHA (CHẾ ĐỘ THUYẾT TRÌNH)
// =============================================================================
btnOpenChest.addEventListener("click", () => {
  sounds.init();
  if (isChestSpinning) return;
  startGachaSequence();
});

function startGachaSequence() {
  isChestSpinning = true;
  btnOpenChest.disabled = true;

  sounds.playClick();
  sounds.playChestRumble();

  // 1. Rương rung lắc mạnh dần (~0.8s)
  chestBox.classList.remove("floating-chest");
  chestBox.classList.add("shake-violent");

  setTimeout(() => {
    switchView(viewGacha);
    runGachaReel();
  }, 800);
}

// Icon SVG nội bộ
function getCardIconSvg(iconType) {
  if (iconType === "shield") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/></svg>`;
  } else if (iconType === "badge") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><polygon points="12,5 14,9 18,9 15,12 16,16 12,14 8,16 9,12 6,9 10,9" fill="#FFF"/></svg>`;
  } else if (iconType === "medal") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><circle cx="12" cy="15" r="6"/><path d="M8.21 13.89L7 4l5 3 5-3-1.21 9.89"/></svg>`;
  } else if (iconType === "eye") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3.2"/></svg>`;
  } else if (iconType === "target") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3.5"/><line x1="12" y1="1" x2="12" y2="5" stroke="currentColor" stroke-width="2"/><line x1="12" y1="19" x2="12" y2="23" stroke="currentColor" stroke-width="2"/><line x1="1" y1="12" x2="5" y2="12" stroke="currentColor" stroke-width="2"/><line x1="19" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/></svg>`;
  } else if (iconType === "gear") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
  } else if (iconType === "box") {
    return `<svg class="item-icon" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/></svg>`;
  } else {
    return `<svg class="item-icon" viewBox="0 0 24 24"><polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/></svg>`;
  }
}

// QUAY DẢI THẺ BÀI (CASE OPENING) – KÉO DÀI KHOẢNG 5 GIÂY, ĐỒNG BỘ 100% VỚI CÂU HỎI
function runGachaReel() {
  reelSection.style.display = "flex";
  chestOpeningStage.classList.remove("active");
  screenFlash.classList.remove("flash-active");
  lightRaysContainer.classList.remove("rays-visible");
  flyingCardWrapper.classList.remove("fly-up");
  card3dFlip.classList.remove("is-flipped");
  starBurstContainer.innerHTML = "";

  reelTrack.innerHTML = "";
  reelTrack.style.transition = "none";
  reelTrack.style.transform = "translateX(0px)";
  void reelTrack.offsetWidth; // Bắt buộc trình duyệt tính toán lại vị trí ban đầu 0px
  reelStatus.textContent = "HỆ THỐNG ĐANG QUAY NGẪU NHIÊN...";

  // 1. CHỌN Ô TRÚNG THƯỞNG CHO LƯỢT QUAY NÀY (ĐỒNG BỘ CHÍNH XÁC VỚI CÂU HỎI HIỆN TẠI)
  const currentTargetQ = shuffledQuestionList[currentQuestionIndex] || QUESTIONS_DATA[0];
  currentWinningCard = {
    code: currentTargetQ.code,
    name: currentTargetQ.shortTitle,
    title: currentTargetQ.fullTitle,
    rarity: currentTargetQ.rarity,
    icon: currentTargetQ.icon,
    star: currentTargetQ.star
  };
  lastWinningCardName = currentWinningCard.name;

  // 2. VỊ TRÍ DỪNG NGẪU NHIÊN TRONG DẢI THẺ (dao động giữa 45 và 52, thay đổi theo từng lượt)
  const winningIndex = Math.floor(Math.random() * 8) + 45; // 45 -> 52
  const totalCards = winningIndex + 12; // Đảm bảo sau ô trúng vẫn còn thẻ để dải liền mạch

  // 3. TẠO DẢI THẺ ĐA DẠNG SẮC MÀU VỚI MÃ KÝ HIỆU VÀ TIÊU ĐỀ
  const allCardPool = GACHA_CARD_TEMPLATES;
  let prevCardCode = "";
  for (let i = 0; i < totalCards; i++) {
    const cardEl = document.createElement("div");
    cardEl.classList.add("reel-item");

    let cardData;
    if (i === winningIndex) {
      cardData = currentWinningCard;
    } else {
      // Chọn ngẫu nhiên từ kho thẻ nghiệp vụ CAND nhưng tránh để 2 thẻ trùng mã đứng liền kề
      const candidates = allCardPool.filter(c => c.code !== prevCardCode && c.code !== currentWinningCard.code);
      cardData = candidates[Math.floor(Math.random() * candidates.length)] || allCardPool[Math.floor(Math.random() * allCardPool.length)];
    }
    prevCardCode = cardData.code;

    cardEl.classList.add(cardData.rarity);
    cardEl.innerHTML = `
      <span class="item-code">${cardData.code}</span>
      ${getCardIconSvg(cardData.icon)}
      <span class="item-name">${cardData.name}</span>
    `;

    reelTrack.appendChild(cardEl);
  }

  requestAnimationFrame(() => {
    const cardElements = reelTrack.children;
    const sampleCard = cardElements[0];
    const cardWidth = sampleCard.offsetWidth;
    const computedStyle = window.getComputedStyle(sampleCard);
    const marginLeft = parseFloat(computedStyle.marginLeft) || 8;
    const marginRight = parseFloat(computedStyle.marginRight) || 8;
    const itemFullWidth = cardWidth + marginLeft + marginRight;
    const containerWidth = reelWrapper.offsetWidth;

    // Thêm một độ lệch ngẫu nhiên nhẹ (±10px) trong ô để kim chỉ dừng tự nhiên, không bị cứng đơ 1 điểm
    const randomJitter = (Math.random() - 0.5) * 20;
    const winningCenter = (winningIndex * itemFullWidth) + (itemFullWidth / 2);
    const targetOffset = -((winningCenter - (containerWidth / 2)) + randomJitter);

    // Phát âm thanh tiếng lách cách chân thực theo nhịp giảm tốc trong 5s
    let currentDelay = 75;
    let tickTimeoutId;
    const startTime = Date.now();

    function scheduleTick() {
      const elapsed = Date.now() - startTime;
      if (elapsed >= 4900) return;
      sounds.playReelTick();

      // Sau 2.2s, tăng dần độ trễ giữa các tiếng tick để thể hiện rõ sự hãm tốc
      if (elapsed > 3500) {
        currentDelay = Math.min(420, currentDelay + 35);
      } else if (elapsed > 2200) {
        currentDelay = Math.min(200, currentDelay + 12);
      }
      tickTimeoutId = setTimeout(scheduleTick, currentDelay);
    }
    scheduleTick();

    // Bắt đầu quay tốc độ cao (~5s) với cubic-bezier giảm tốc mượt mà
    setTimeout(() => {
      reelStatus.textContent = "HỆ THỐNG ĐANG QUAY NGẪU NHIÊN VỚI TỐC ĐỘ CAO...";
      reelTrack.style.transition = "transform 5.0s cubic-bezier(0.06, 0.85, 0.15, 1)";
      reelTrack.style.transform = `translateX(${targetOffset}px)`;
    }, 50);

    // Cập nhật dòng chữ theo tiến trình giảm tốc
    setTimeout(() => {
      reelStatus.textContent = "ĐANG GIẢM TỐC VÀ DÒ TÌM HỒ SƠ...";
    }, 2600);

    setTimeout(() => {
      reelStatus.textContent = "CHUẨN BỊ KHÓA MỤC TIÊU...";
    }, 4100);

    // Kết thúc hoạt ảnh quay đúng 5.0s
    setTimeout(() => {
      clearTimeout(tickTimeoutId);
      const winningCardEl = cardElements[winningIndex];
      winningCardEl.classList.add("is-winning");

      // Cập nhật dòng chữ thông báo đúng theo mã ký hiệu và ô vừa quay trúng
      if (currentWinningCard.rarity === "rarity-gold") {
        reelStatus.textContent = `★ XUẤT SẮC! MẬT LỆNH HUYỀN THOẠI ${currentWinningCard.code}: [${currentWinningCard.name}]! ★`;
      } else if (currentWinningCard.rarity === "rarity-purple") {
        reelStatus.textContent = `★ TUYỆT VỜI! HỒ SƠ ĐẶC BIỆT ${currentWinningCard.code}: [${currentWinningCard.name}]! ★`;
      } else {
        reelStatus.textContent = `★ ĐÃ TIẾP NHẬN ${currentWinningCard.code}: [${currentWinningCard.name}]! ★`;
      }

      sounds.playClick();

      // Giữ thẻ sáng trong 0.8s để người xem kịp quan sát trước khi nắp rương bật mở
      setTimeout(() => {
        runChestBurstOpen();
      }, 800);
    }, 5050);
  });
}

// BẬT NẮP RƯƠNG, BÙNG TIA SÁNG VÀ BAY TẤM THẺ LÊN
function runChestBurstOpen() {
  reelSection.style.display = "none";
  chestOpeningStage.classList.add("active");

  screenFlash.classList.add("flash-active");
  lightRaysContainer.classList.add("rays-visible");
  createStarExplosion();

  sounds.playChestBurstFanfare();

  // Cập nhật mặt trước tấm thẻ bay lên đúng theo ô và câu hỏi vừa trúng thưởng
  if (currentWinningCard) {
    if (cardFrontFace) {
      cardFrontFace.className = "card-face card-front " + currentWinningCard.rarity;
    }
    if (flyingCardStar) {
      flyingCardStar.textContent = currentWinningCard.star || "★";
    }
    if (flyingCardCode) {
      flyingCardCode.textContent = currentWinningCard.code;
    }
    if (flyingCardTitle) {
      flyingCardTitle.textContent = currentWinningCard.title || currentWinningCard.name;
    }
    if (flyingCardBadge) {
      flyingCardBadge.textContent = `CÂU ${currentQuestionIndex + 1}/10`;
    }
    if (cardBackLabel) {
      cardBackLabel.textContent = currentWinningCard.code;
    }
  }

  setTimeout(() => {
    flyingCardWrapper.classList.add("fly-up");
  }, 200);

  setTimeout(() => {
    card3dFlip.classList.add("is-flipped");
  }, 500);

  setTimeout(() => {
    displayQuestion();
  }, 1450);
}

// Bắn hạt sao vàng
function createStarExplosion() {
  starBurstContainer.innerHTML = "";
  const starCount = 20;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star-particle");

    const angle = (i / starCount) * (2 * Math.PI) + (Math.random() * 0.3);
    const distance = 100 + Math.random() * 160;
    const destX = Math.cos(angle) * distance;
    const destY = Math.sin(angle) * distance;
    const size = 16 + Math.random() * 14;
    const duration = 0.6 + Math.random() * 0.4;

    star.innerHTML = `
      <svg viewBox="0 0 24 24" width="${size}" height="${size}">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" fill="#FFD23F"/>
      </svg>
    `;

    star.style.transform = `translate(-50%, -50%) translate(0px, 0px) scale(0.2)`;
    star.style.opacity = "1";
    star.style.transition = `all ${duration}s cubic-bezier(0.2, 0.8, 0.3, 1)`;

    starBurstContainer.appendChild(star);

    requestAnimationFrame(() => {
      star.style.transform = `translate(-50%, -50%) translate(${destX}px, ${destY}px) scale(1.3)`;
      star.style.opacity = "0";
    });
  }
}

// =============================================================================
// 8. BƯỚC 3: HIỂN THỊ THẺ CÂU HỎI VÀ XÁO TRỘN ĐÁP ÁN (CHẾ ĐỘ THUYẾT TRÌNH)
// =============================================================================
function displayQuestion() {
  switchView(viewQuiz);
  isOptionsLocked = false;

  const currentQ = shuffledQuestionList[currentQuestionIndex];
  const orderNumber = currentQuestionIndex + 1;

  quizOrderTag.textContent = `CÂU ${orderNumber}/10`;
  if (quizTopicTag && currentWinningCard) {
    quizTopicTag.textContent = `${currentWinningCard.code} • ${currentWinningCard.title}`;
  }
  progressText.textContent = `${orderNumber}/10`;
  scoreText.textContent = `${userScore}`;

  quizQuestionText.textContent = currentQ.question;

  // Ẩn hộp giải thích và nút chuyển tiếp câu trước
  quizExplanationBox.classList.remove("active");
  quizActionBar.classList.remove("active");

  // XÁO TRỘN 4 ĐÁP ÁN BẰNG FISHER-YATES
  const optionsWithMeta = currentQ.options.map((optText, origIdx) => ({
    text: optText,
    isCorrect: origIdx === currentQ.correctIndex
  }));

  const shuffledOptions = fisherYatesShuffle(optionsWithMeta);

  // Sinh 4 nút đáp án A, B, C, D (Lưới 2x2)
  quizOptionsGrid.innerHTML = "";
  const optionLetters = ["A", "B", "C", "D"];

  shuffledOptions.forEach((optObj, idx) => {
    const letter = optionLetters[idx];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.classList.add("option-btn");
    btn.dataset.correct = optObj.isCorrect ? "true" : "false";

    btn.innerHTML = `
      <span class="option-label">${letter}</span>
      <span class="option-text">${optObj.text}</span>
      <span class="option-status-icon"></span>
    `;

    btn.addEventListener("click", () => {
      sounds.init();
      handleSelectOption(btn, optObj.isCorrect, currentQ.explanation);
    });

    quizOptionsGrid.appendChild(btn);
  });
}

// =============================================================================
// 9. BƯỚC 4: XỬ LÝ CHỌN ĐÁP ÁN & PHẢN HỒI ĐÚNG / SAI
// =============================================================================
function handleSelectOption(selectedBtn, isCorrect, explanationText) {
  if (isOptionsLocked) return;
  isOptionsLocked = true;

  // Khóa tất cả các nút đáp án ngay lập tức
  const allOptionBtns = Array.from(quizOptionsGrid.querySelectorAll(".option-btn"));
  allOptionBtns.forEach(btn => {
    btn.disabled = true;
    btn.style.pointerEvents = "none";
  });

  const statusSlot = selectedBtn.querySelector(".option-status-icon");

  if (isCorrect) {
    // === TRƯỜNG HỢP: ĐÚNG ===
    userScore++;
    scoreText.textContent = `${userScore}`;
    sounds.playCorrectSound();

    selectedBtn.classList.add("state-correct");
    // Vẽ dấu tick xanh ✓ lớn bằng SVG
    statusSlot.innerHTML = `
      <svg viewBox="0 0 24 24" width="48" height="48">
        <path class="check-svg-path" fill="none" stroke="#22C55E" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" d="M4 12l5 5L20 6"/>
      </svg>
    `;

    allOptionBtns.forEach(btn => {
      if (btn !== selectedBtn) {
        btn.classList.add("state-dimmed");
      }
    });

    spawnCorrectSparks(selectedBtn);
    showExplanationAndNext(explanationText);

  } else {
    // === TRƯỜNG HỢP: SAI ===
    sounds.playWrongSound();
    selectedBtn.classList.add("state-wrong");

    // Vẽ dấu tick đỏ ✗ lớn bằng SVG
    statusSlot.innerHTML = `
      <svg viewBox="0 0 24 24" width="48" height="48">
        <path class="cross-svg-path-1" fill="none" stroke="#E53935" stroke-width="3.6" stroke-linecap="round" d="M6 6l12 12"/>
        <path class="cross-svg-path-2" fill="none" stroke="#E53935" stroke-width="3.6" stroke-linecap="round" d="M18 6L6 18"/>
      </svg>
    `;

    allOptionBtns.forEach(btn => {
      if (btn !== selectedBtn) {
        btn.classList.add("state-dimmed");
      }
    });

    // Sau khoảng 0.6 giây, ô chứa đáp án đúng đổi xanh lá và hiện dấu tick xanh ✓
    setTimeout(() => {
      const correctBtn = allOptionBtns.find(btn => btn.dataset.correct === "true");
      if (correctBtn) {
        correctBtn.classList.remove("state-dimmed");
        correctBtn.classList.add("state-correct");
        const correctSlot = correctBtn.querySelector(".option-status-icon");
        correctSlot.innerHTML = `
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path class="check-svg-path" fill="none" stroke="#22C55E" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" d="M4 12l5 5L20 6"/>
          </svg>
        `;
      }

      showExplanationAndNext(explanationText);
    }, 600);
  }
}

// Hiệu ứng tia sao khi trả lời đúng
function spawnCorrectSparks(targetElement) {
  const rect = targetElement.getBoundingClientRect();
  const count = 10;
  for (let i = 0; i < count; i++) {
    const spark = document.createElement("div");
    spark.style.position = "fixed";
    spark.style.left = `${rect.left + rect.width * (0.3 + Math.random() * 0.4)}px`;
    spark.style.top = `${rect.top + rect.height * 0.5}px`;
    spark.style.width = "10px";
    spark.style.height = "10px";
    spark.style.borderRadius = "50%";
    spark.style.backgroundColor = "#FFD23F";
    spark.style.boxShadow = "0 0 10px #FFD23F";
    spark.style.pointerEvents = "none";
    spark.style.zIndex = "999";
    spark.style.transition = "all 0.5s ease-out";

    document.body.appendChild(spark);

    const destX = (Math.random() - 0.5) * 80;
    const destY = -20 - Math.random() * 45;

    requestAnimationFrame(() => {
      spark.style.transform = `translate(${destX}px, ${destY}px) scale(0.2)`;
      spark.style.opacity = "0";
    });

    setTimeout(() => {
      spark.remove();
    }, 550);
  }
}

// Hiển thị giải thích & nút chuyển tiếp
function showExplanationAndNext(explanation) {
  quizExplanationText.textContent = explanation;
  quizExplanationBox.classList.add("active");

  if (currentQuestionIndex === 9) {
    btnNextText.textContent = "XEM KẾT QUẢ";
  } else {
    btnNextText.textContent = "MỞ RƯƠNG TIẾP THEO";
  }

  quizActionBar.classList.add("active");
}

// Bấm "MỞ RƯƠNG TIẾP THEO" hoặc "XEM KẾT QUẢ"
btnNextAction.addEventListener("click", () => {
  sounds.playClick();
  if (currentQuestionIndex < 9) {
    currentQuestionIndex++;
    switchView(viewIdle);
    resetIdleChestState();
  } else {
    showResultScreen();
  }
});

// =============================================================================
// 10. BƯỚC 5: MÀN KẾT THÚC & XẾP LOẠI (CHẾ ĐỘ THUYẾT TRÌNH)
// =============================================================================
function showResultScreen() {
  switchView(viewResult);

  finalScoreBig.textContent = userScore;
  resCorrectNum.textContent = userScore;
  resWrongNum.textContent = 10 - userScore;
  resAccuracyNum.textContent = `${Math.round((userScore / 10) * 100)}%`;

  // Xếp loại & Nhận xét
  if (userScore >= 9) {
    resultRankBadge.textContent = "XUẤT SẮC";
    resultRankBadge.style.background = "linear-gradient(180deg, #22C55E 0%, #15803D 100%)";
    resultCommentary.textContent = "Xuất sắc! Đồng chí nắm rất vững toàn diện các quy định, điều lệnh và tiêu chuẩn của lực lượng Công an nhân dân.";
  } else if (userScore >= 7) {
    resultRankBadge.textContent = "GIỎI";
    resultRankBadge.style.background = "linear-gradient(180deg, #E51937 0%, #9E0C22 100%)";
    resultCommentary.textContent = "Giỏi! Đồng chí đã nắm vững các phẩm chất và quy tắc kỷ luật trọng yếu trong lực lượng CAND.";
  } else if (userScore >= 5) {
    resultRankBadge.textContent = "KHÁ";
    resultRankBadge.style.background = "linear-gradient(180deg, #D97706 0%, #B45309 100%)";
    resultCommentary.textContent = "Khá! Đồng chí đã nắm được các quy định cơ bản, cần tiếp tục rèn luyện và trau dồi sâu hơn.";
  } else {
    resultRankBadge.textContent = "CẦN CỐ GẮNG THÊM";
    resultRankBadge.style.background = "linear-gradient(180deg, #6B7280 0%, #4B5563 100%)";
    resultCommentary.textContent = "Cần cố gắng thêm! Đồng chí hãy nghiên cứu kỹ lưỡng hơn các điều lệnh, quy chuẩn kỷ luật và tiêu chuẩn tuyển chọn CAND.";
  }

  if (userScore >= 7) {
    sounds.playCorrectSound();
  }
}

// Bấm "CHƠI LẠI"
btnReplay.addEventListener("click", () => {
  sounds.playClick();
  initGame();
});

// =============================================================================
// 11. KHỞI CHẠY LẦN ĐẦU
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  initGame();
});
