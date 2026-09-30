/**
 * script.js — Greenfield College Website
 * Handles: mobile nav, smooth scroll, dynamic section rendering,
 *          FAQ accordion, inquiry form validation, and chatbot.
 */

(function () {
  "use strict";

  // ═══════════════════════════════════════════════════════════
  //  COLLEGE DATA — edit these to customise content
  // ═══════════════════════════════════════════════════════════
  const courses = [
    { icon: "💻", name: "B.Tech", level: "Undergraduate", duration: "4 Years", fee: "₹1.2L/yr", desc: "CSE, ECE, Mechanical, Civil — industry-ready engineering with labs, internships and projects." },
    { icon: "🔬", name: "B.Sc", level: "Undergraduate", duration: "3 Years", fee: "₹45K/yr", desc: "Physics, Chemistry, Mathematics, Biotechnology — strong foundations in pure & applied sciences." },
    { icon: "📊", name: "B.Com", level: "Undergraduate", duration: "3 Years", fee: "₹35K/yr", desc: "Accounting, Finance, Taxation — practical commerce education with industry exposure." },
    { icon: "📖", name: "B.A", level: "Undergraduate", duration: "3 Years", fee: "₹30K/yr", desc: "English, History, Economics, Political Science — critical thinking & liberal arts." },
    { icon: "🎯", name: "MBA", level: "Postgraduate", duration: "2 Years", fee: "₹1.5L/yr", desc: "Marketing, Finance, HR, Operations — management training with case studies & internships." },
    { icon: "🖥️", name: "MCA", level: "Postgraduate", duration: "3 Years", fee: "₹90K/yr", desc: "Advanced computing, software engineering, AI/ML — for a career in IT and software." },
  ];

  const facilities = [
    { icon: "📚", title: "Central Library", desc: "50,000+ books, digital archives, e-journals and quiet study zones." },
    { icon: "🔬", title: "Research Labs", desc: "Well-equipped science, computer and engineering laboratories." },
    { icon: "🏠", title: "Hostel & Mess", desc: "Separate hostels with 24×7 Wi-Fi, hot water and hygienic dining." },
    { icon: "🏟️", title: "Sports Complex", desc: "Cricket, football, basketball, indoor games and a modern gym." },
    { icon: "💻", title: "Computer Centre", desc: "High-speed internet, latest software and 200+ workstations." },
    { icon: "🏥", title: "Medical Center", desc: "On-campus first-aid, doctor on call and hospital tie-ups." },
    { icon: "🎭", title: "Auditorium", desc: "500-seat auditorium for events, seminars and cultural programs." },
    { icon: "🚌", title: "Transport", desc: "Bus routes covering the city and nearby towns for students." },
  ];

  const recruiters = ["TCS", "Infosys", "Wipro", "Cognizant", "Accenture", "HDFC Bank", "Capgemini", "Tech Mahindra", "Amazon", "HCL", "ICICI Bank", "Deloitte"];

  // ═══════════════════════════════════════════════════════════
  //  CHATBOT KNOWLEDGE BASE
  //  To add a topic: copy a block, change id/label/keywords/answer/followUps
  // ═══════════════════════════════════════════════════════════
  const topics = [
    {
      id: "admission",
      label: "Admission",
      keywords: ["apply", "application", "admission", "admissions", "how do i apply", "admission process", "last date", "deadline", "register", "registration", "form", "enroll", "enrollment"],
      answer: "Here's how to apply to Greenfield College:\n\n* **Online application** — Visit our website and fill out the admission form.\n* **Document upload** — Upload mark sheets, ID and passport photo.\n* **Application fee** — Pay ₹500 online (non-refundable).\n* **Merit / entrance** — Selection based on merit or entrance test.\n* **Counselling** — Shortlisted candidates called for document verification.\n\n**Last date to apply:** 30th June 2025.",
      followUps: ["What documents are needed?", "Am I eligible?", "What are the fees?"],
    },
    {
      id: "documents",
      label: "Documents",
      keywords: ["documents", "document", "required", "what do i need", "paperwork", "certificate", "certificates", "marksheets", "mark sheet"],
      answer: "Documents required at admission:\n\n* 10th & 12th mark sheets (original + photocopy)\n* Transfer Certificate (TC)\n* Migration Certificate (if applicable)\n* Character / Conduct Certificate\n* 4 passport-size photographs\n* Aadhaar card or government photo ID\n* Caste / Income certificate (for scholarships)\n* Entrance test score card (if applicable)",
      followUps: ["How do I apply?", "Am I eligible?", "Contact details"],
    },
    {
      id: "courses",
      label: "Courses",
      keywords: ["courses", "course", "programs", "programme", "subjects", "degrees", "degree", "what do you offer", "streams", "b.tech", "btech", "b.sc", "bsc", "b.com", "bcom", "b.a", "ba", "mba", "mca", "undergraduate", "postgraduate", "pg", "ug"],
      answer: "We offer:\n\n**Undergraduate:**\n* **B.Tech** — 4 yrs (CSE, ECE, Mechanical, Civil)\n* **B.Sc** — 3 yrs (Physics, Chemistry, Maths, Biotech)\n* **B.Com** — 3 yrs\n* **B.A** — 3 yrs (English, History, Economics, Pol. Sci)\n\n**Postgraduate:**\n* **MBA** — 2 yrs\n* **MCA** — 3 yrs\n\nAll affiliated to Greenfield University, NAAC-accredited.",
      followUps: ["What are the fees?", "Am I eligible?", "When are the exams?"],
    },
    {
      id: "fees",
      label: "Fees",
      keywords: ["fees", "fee", "tuition", "cost", "charges", "how much", "price", "payment", "instalment", "installment", "semester fees", "course fees", "fee structure"],
      answer: "Annual tuition fees:\n\n* **B.Tech** — ₹1,20,000/yr\n* **B.Sc** — ₹45,000/yr\n* **B.Com** — ₹35,000/yr\n* **B.A** — ₹30,000/yr\n* **MBA** — ₹1,50,000/yr\n* **MCA** — ₹90,000/yr\n\n**Instalments:** Pay in two halves — 60% at admission, 40% before mid-semester.\nRefundable caution deposit: ₹5,000.",
      followUps: ["Scholarships available?", "How do I apply?", "What courses do you offer?"],
    },
    {
      id: "eligibility",
      label: "Eligibility",
      keywords: ["eligibility", "eligible", "am i eligible", "qualify", "qualification", "criteria", "requirements", "who can apply", "minimum marks", "12th marks", "percentage", "cutoff", "cut off"],
      answer: "Eligibility by course:\n\n* **B.Tech** — 10+2 with PCM, minimum 60%.\n* **B.Sc** — 10+2 with science subjects, minimum 50%.\n* **B.Com** — 10+2 any stream, minimum 45%.\n* **B.A** — 10+2 any stream, minimum 45%.\n* **MBA** — Bachelor's degree, 50%, entrance test/CAT/MAT score.\n* **MCA** — Bachelor's with Maths at 10+2 or graduation, 50%.\n\n5% relaxation for reserved categories per government norms.",
      followUps: ["How do I apply?", "When are the exams?", "What are the fees?"],
    },
    {
      id: "exams",
      label: "Exams",
      keywords: ["exams", "exam", "examination", "test", "tests", "entrance", "entrance test", "semester exam", "internal assessment", "when are the exams", "exam dates", "schedule", "assessment", "important dates"],
      answer: "Examinations:\n\n* **Entrance Test** — May, for B.Tech/MBA/MCA. Online, 2 hrs, 100 MCQs.\n* **Semester Exams** — Twice yearly (June & December).\n* **Internal Assessment** — 25% weightage (mid-term, assignments, quizzes, attendance).\n* **Practical Exams** — Before theory exams for lab courses.\n\nMinimum 75% attendance required to appear for semester exams.\n\n**Important dates:**\n* Application deadline: 30 June 2025\n* Entrance test: 15 May 2025\n* Semester exams: June & December",
      followUps: ["Am I eligible?", "How do I apply?", "What courses do you offer?"],
    },
    {
      id: "scholarships",
      label: "Scholarships",
      keywords: ["scholarship", "scholarships", "financial aid", "concession", "discount", "merit", "sports scholarship", "need-based", "government scholarship", "fee waiver", "stipend"],
      answer: "Scholarships available:\n\n* **Merit** — Up to 100% waiver for 90%+ in qualifying exam.\n* **Sports** — 25–50% waiver for state/national athletes.\n* **Need-Based** — Up to 40% for economically weaker students.\n* **Government** — SC/ST/OBC/minority via state portal; we assist with paperwork.\n* **Sibling Concession** — 10% if two siblings study here.\n\nApply early with admission — funds are limited!",
      followUps: ["What are the fees?", "Am I eligible?", "How do I apply?"],
    },
    {
      id: "hostel",
      label: "Hostel",
      keywords: ["hostel", "hostel facilities", "accommodation", "lodging", "boarding", "rooms", "mess", "food", "stay", "residence", "dormitory", "dorm", "living"],
      answer: "Hostel facilities:\n\n* Separate hostels for boys & girls on campus.\n* Twin/triple-sharing rooms with study tables & wardrobes.\n* 24×7 Wi-Fi, hot water, power backup.\n* Mess: veg & non-veg, 3 meals + tea.\n* Common rooms with TV, indoor games, gym.\n* 24×7 security with CCTV & warden.\n* Medical room + hospital tie-up.\n\n**Hostel fee:** ₹65,000/yr (food + lodging). Deposit: ₹10,000.",
      followUps: ["What are the fees?", "Contact details", "How do I apply?"],
    },
    {
      id: "facilities",
      label: "Facilities",
      keywords: ["facilities", "facility", "campus", "infrastructure", "library", "labs", "laboratory", "sports", "gym", "transport", "auditorium", "wifi", "medical", "computer"],
      answer: "Campus facilities:\n\n* Central Library — 50,000+ books, e-journals\n* Research Labs — science, computer & engineering labs\n* Hostel & Mess — 24×7 Wi-Fi, hygienic dining\n* Sports Complex — cricket, football, basketball, gym\n* Computer Centre — 200+ workstations, high-speed internet\n* Medical Center — first-aid, doctor on call\n* 500-seat Auditorium for events & seminars\n* Bus transport across the city",
      followUps: ["Hostel facilities", "Contact details", "What courses do you offer?"],
    },
    {
      id: "placements",
      label: "Placements",
      keywords: ["placement", "placements", "job", "jobs", "career", "campus placement", "recruitment", "companies", "internship", "internships", "salary", "package", "employment", "hire", "recruiters"],
      answer: "Placements at Greenfield:\n\n* Dedicated Training & Placement Cell.\n* 40+ companies visit annually.\n* Top recruiters: TCS, Infosys, Wipro, Cognizant, Accenture, Amazon, HDFC Bank.\n* **Average package:** ₹4.5 LPA | **Highest:** ₹12 LPA.\n* Internship support from 5th semester.\n* ~75% of eligible students placed yearly.\n\nMock interviews, resume workshops & a job portal for all final-year students.",
      followUps: ["What courses do you offer?", "Scholarships available?", "Contact details"],
    },
    {
      id: "contact",
      label: "Contact",
      keywords: ["contact", "phone", "email", "address", "reach", "location", "office", "hours", "where", "how to reach", "contact details", "number", "call"],
      answer: "How to reach us:\n\n* **Phone:** +91 98765 43210\n* **Email:** admissions@greenfield.edu\n* **Address:** 12 University Road, Greenfield Campus\n* **Hours:** Mon–Sat, 9:30 AM – 5:00 PM\n* **Website:** www.greenfield.edu\n\nCall during office hours or visit the Admission Office — our counsellors are happy to help!",
      followUps: ["How do I apply?", "What courses do you offer?", "Hostel facilities"],
    },
  ];

  const greetings = ["hi", "hello", "hey", "namaste", "namaskar", "good morning", "good evening", "good afternoon", "greetings"];
  const thanks = ["thank", "thanks", "thank you", "thx", "appreciate"];
  const greetingReply = "Hello! Welcome to Greenfield College. 🎓\nI can help with admissions, courses, fees, eligibility, exams, scholarships, hostel, placements and more.\nWhat would you like to know?";
  const thanksReply = "You're welcome! 😊 Is there anything else I can help you with?";

  const faqs = [
    { q: "What is the admission process?", a: "Fill out the online application on our website, upload documents, pay the ₹500 fee, and attend counselling if shortlisted. Selection is based on merit or entrance test depending on the course." },
    { q: "What is the last date to apply?", a: "The last date to submit applications for the 2025–26 academic year is 30th June 2025. We recommend applying early." },
    { q: "Do you offer scholarships?", a: "Yes — merit scholarships (up to 100% for 90%+), sports scholarships (25–50%), need-based aid (up to 40%), government scholarships for reserved categories, and a 10% sibling concession." },
    { q: "Is hostel accommodation available?", a: "Yes, we have separate hostels for boys and girls with 24×7 Wi-Fi, mess facilities, security, and a medical room. The annual fee is ₹65,000 including food and lodging." },
    { q: "What is the placement rate?", a: "Approximately 75% of eligible students are placed each year. The average package is ₹4.5 LPA and the highest is ₹12 LPA. 40+ companies including TCS, Infosys, Amazon and Accenture visit our campus." },
    { q: "Can fees be paid in instalments?", a: "Yes, fees can be paid in two instalments per year — 60% at admission and 40% before the mid-semester exams. A refundable caution deposit of ₹5,000 is collected at admission." },
    { q: "What is the minimum attendance requirement?", a: "A minimum of 75% attendance is required to be eligible to appear for semester examinations." },
    { q: "How can I contact the admission office?", a: "You can call us at +91 98765 43210, email admissions@greenfield.edu, or visit us at 12 University Road, Greenfield Campus. Office hours: Mon–Sat, 9:30 AM – 5:00 PM." },
  ];

  // ═══════════════════════════════════════════════════════════
  //  DOM REFERENCES
  // ═══════════════════════════════════════════════════════════
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  const navbar = document.getElementById("navbar");
  const courseGrid = document.getElementById("courseGrid");
  const facilityGrid = document.getElementById("facilityGrid");
  const recruiterRow = document.getElementById("recruiterRow");
  const faqList = document.getElementById("faqList");
  const inquiryForm = document.getElementById("inquiryForm");
  const formSuccess = document.getElementById("formSuccess");

  // Chatbot refs
  const chatFab = document.getElementById("chatFab");
  const chatWindow = document.getElementById("chatWindow");
  const chatClose = document.getElementById("chatClose");
  const chatMessages = document.getElementById("chatMessages");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");
  const chatQuick = document.getElementById("chatQuick");

  // ═══════════════════════════════════════════════════════════
  //  RENDER SECTIONS
  // ═══════════════════════════════════════════════════════════
  function renderCourses() {
    courseGrid.innerHTML = courses.map(function (c) {
      return (
        '<div class="course-card">' +
        '<div class="course-icon">' + c.icon + "</div>" +
        '<h3>' + c.name + "</h3>" +
        '<div class="course-level">' + c.level + "</div>" +
        "<p>" + c.desc + "</p>" +
        '<div class="course-meta">' +
        "<span>⏱ " + c.duration + "</span>" +
        '<span class="course-fee">💰 ' + c.fee + "</span>" +
        "</div></div>"
      );
    }).join("");
  }

  function renderFacilities() {
    facilityGrid.innerHTML = facilities.map(function (f) {
      return (
        '<div class="facility-card">' +
        '<div class="facility-icon">' + f.icon + "</div>" +
        "<h3>" + f.title + "</h3>" +
        "<p>" + f.desc + "</p>" +
        "</div>"
      );
    }).join("");
  }

  function renderRecruiters() {
    recruiterRow.innerHTML = recruiters.map(function (r) {
      return '<span class="recruiter-badge">' + r + "</span>";
    }).join("");
  }

  function renderFAQs() {
    faqList.innerHTML = faqs.map(function (f, i) {
      return (
        '<div class="faq-item" data-index="' + i + '">' +
        '<button class="faq-question" type="button" aria-expanded="false">' +
        "<span>" + f.q + "</span>" +
        '<span class="faq-toggle">+</span>' +
        "</button>" +
        '<div class="faq-answer"><div class="faq-answer-inner">' + f.a + "</div></div>" +
        "</div>"
      );
    }).join("");

    // Accordion
    faqList.querySelectorAll(".faq-item").forEach(function (item) {
      var btn = item.querySelector(".faq-question");
      var answer = item.querySelector(".faq-answer");
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        // Close all
        faqList.querySelectorAll(".faq-item").forEach(function (other) {
          other.classList.remove("open");
          other.querySelector(".faq-answer").style.maxHeight = null;
          other.querySelector(".faq-question").setAttribute("aria-expanded", "false");
        });
        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add("open");
          answer.style.maxHeight = answer.scrollHeight + "px";
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  // ═══════════════════════════════════════════════════════════
  //  NAVBAR
  // ═══════════════════════════════════════════════════════════
  navToggle.addEventListener("click", function () {
    var open = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open);
    navToggle.classList.toggle("active", open);
  });

  // Close mobile menu on link click
  navMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.classList.remove("active");
    });
  });

  // Scroll shadow
  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // ═══════════════════════════════════════════════════════════
  //  INQUIRY FORM VALIDATION
  // ═══════════════════════════════════════════════════════════
  function setError(field, msg) {
    var input = document.getElementById(field);
    var err = document.querySelector('.form-error[data-for="' + field + '"]');
    if (msg) {
      input.classList.add("invalid");
      err.textContent = msg;
    } else {
      input.classList.remove("invalid");
      err.textContent = "";
    }
  }

  inquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var valid = true;

    var name = document.getElementById("fName").value.trim();
    var email = document.getElementById("fEmail").value.trim();
    var phone = document.getElementById("fPhone").value.trim();
    var course = document.getElementById("fCourse").value;
    var message = document.getElementById("fMessage").value.trim();

    if (!name) { setError("fName", "Please enter your name"); valid = false; }
    else setError("fName", "");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("fEmail", "Enter a valid email"); valid = false; }
    else setError("fEmail", "");

    if (!phone || !/^[+]?[\d\s-]{8,15}$/.test(phone)) { setError("fPhone", "Enter a valid phone number"); valid = false; }
    else setError("fPhone", "");

    if (!course) { setError("fCourse", "Select a course"); valid = false; }
    else setError("fCourse", "");

    if (!message) { setError("fMessage", "Please enter a message"); valid = false; }
    else setError("fMessage", "");

    if (valid) {
      formSuccess.classList.add("show");
      inquiryForm.reset();
      setTimeout(function () { formSuccess.classList.remove("show"); }, 6000);
    }
  });

  // ═══════════════════════════════════════════════════════════
  //  CHATBOT
  // ═══════════════════════════════════════════════════════════
  var quickButtons = [
    { label: "Admission", icon: "🎓" },
    { label: "Courses", icon: "📚" },
    { label: "Fees", icon: "💰" },
    { label: "Scholarship", icon: "🏆" },
    { label: "Placement", icon: "💼" },
    { label: "Contact", icon: "📞" },
  ];

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function formatAnswer(text) {
    var lines = text.split("\n");
    var html = "";
    var inList = false;
    for (var i = 0; i < lines.length; i++) {
      var trimmed = lines[i].trim();
      if (trimmed.indexOf("* ") === 0) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += "<li>" + boldify(trimmed.slice(2)) + "</li>";
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        html += trimmed === "" ? "<br>" : "<p>" + boldify(trimmed) + "</p>";
      }
    }
    if (inList) html += "</ul>";
    return html;
  }

  function boldify(text) {
    return text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  }

  function findBestTopic(question) {
    var q = question.toLowerCase().trim();
    var best = null;
    var bestScore = 0;
    topics.forEach(function (topic) {
      var score = 0;
      topic.keywords.forEach(function (kw) {
        if (q.indexOf(kw) !== -1) score += kw.length;
      });
      if (q.indexOf(topic.label.toLowerCase()) !== -1) score += topic.label.length;
      if (score > bestScore) { bestScore = score; best = topic; }
    });
    return best;
  }

  function getBotReply(question) {
    var q = question.toLowerCase().trim();

    for (var i = 0; i < greetings.length; i++) {
      var g = greetings[i];
      if (q === g || q.indexOf(g + " ") === 0 || q.indexOf(g + ",") === 0) {
        return { text: greetingReply, followUps: null };
      }
    }
    for (var j = 0; j < thanks.length; j++) {
      if (q.indexOf(thanks[j]) !== -1) return { text: thanksReply, followUps: null };
    }

    var topic = findBestTopic(q);
    if (topic) return { text: topic.answer, followUps: topic.followUps };

    var topicList = topics.map(function (t) { return "• " + t.label; }).join("\n");
    return {
      text: "I'm sorry, I didn't quite catch that. I can help with:\n\n" + topicList + "\n\nYou can also call us at **+91 98765 43210**.\nWhat would you like to know?",
      followUps: null,
    };
  }

  function addUserMessage(text) {
    var div = document.createElement("div");
    div.className = "msg msg-user";
    var bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    bubble.textContent = text;
    div.appendChild(bubble);
    chatMessages.appendChild(div);
    scrollChat();
  }

  function addBotMessage(text, followUps) {
    var div = document.createElement("div");
    div.className = "msg msg-bot";
    var bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    bubble.innerHTML = formatAnswer(text);
    if (followUps && followUps.length > 0) {
      var fuDiv = document.createElement("div");
      fuDiv.className = "followups";
      followUps.forEach(function (label) {
        var chip = document.createElement("button");
        chip.className = "followup-chip";
        chip.type = "button";
        chip.textContent = label;
        chip.addEventListener("click", function () { handleUserInput(label); });
        fuDiv.appendChild(chip);
      });
      bubble.appendChild(fuDiv);
    }
    div.appendChild(bubble);
    chatMessages.appendChild(div);
    scrollChat();
  }

  function showTyping() {
    var div = document.createElement("div");
    div.className = "typing-indicator";
    div.id = "typingIndicator";
    for (var i = 0; i < 3; i++) {
      var dot = document.createElement("span");
      dot.className = "typing-dot";
      div.appendChild(dot);
    }
    chatMessages.appendChild(div);
    scrollChat();
  }

  function removeTyping() {
    var el = document.getElementById("typingIndicator");
    if (el) el.remove();
  }

  function scrollChat() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserInput(text) {
    var trimmed = text.trim();
    if (!trimmed) return;
    addUserMessage(trimmed);
    chatInput.value = "";
    showTyping();
    setTimeout(function () {
      removeTyping();
      var reply = getBotReply(trimmed);
      addBotMessage(reply.text, reply.followUps);
    }, 700);
  }

  function renderQuickButtons() {
    chatQuick.innerHTML = "";
    quickButtons.forEach(function (qb) {
      var chip = document.createElement("button");
      chip.className = "quick-chip";
      chip.type = "button";
      chip.innerHTML = '<span>' + qb.icon + "</span> " + qb.label;
      chip.addEventListener("click", function () { handleUserInput(qb.label); });
      chatQuick.appendChild(chip);
    });
  }

  function showWelcome() {
    addBotMessage(greetingReply, null);
  }

  // Chat open/close
  var chatInitialized = false;
  chatFab.addEventListener("click", function () {
    chatWindow.classList.add("open");
    chatWindow.setAttribute("aria-hidden", "false");
    chatFab.style.display = "none";
    if (!chatInitialized) {
      showWelcome();
      chatInitialized = true;
    }
    setTimeout(function () { chatInput.focus(); }, 300);
  });

  chatClose.addEventListener("click", function () {
    chatWindow.classList.remove("open");
    chatWindow.setAttribute("aria-hidden", "true");
    chatFab.style.display = "flex";
  });

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handleUserInput(chatInput.value);
  });

  // ═══════════════════════════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════════════════════════
  renderCourses();
  renderFacilities();
  renderRecruiters();
  renderFAQs();
  renderQuickButtons();
})();
