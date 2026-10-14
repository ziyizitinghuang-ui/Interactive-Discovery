const photos = [
  {
    src: "images/photo1.jpg",
    title: "Me and Milk ♡",
    note: "This is me with Milk!! He's my first puppy and he's soooo cute! I wish he could stay this little forever."
  },
  {
    src: "images/photo2.png",
    title: "My Favorite Place!",
    note: "Look at all the colorful balls!! I want to play here all day. Can we come back tomorrow?"
  },
  {
    src: "images/photo3.png",
    title: "Such a Fun Day!",
    note: "We went to the fair today!! I saw a HUGE Ferris wheel and got cotton candy! I didn't want to go home."
  },
  {
    src: "images/photo4.png",
    title: "My Stickers!!",
    note: "These are my stickers! I have so many now!! I love the sparkly ones the most. I can't wait to show Sophie!"
  },
  {
    src: "images/photo5.jpg",
    title: "A Cute Little Puppy",
    note: "I saw this little white puppy today! He's so fluffy!! I really wanted to take him home with me."
  },
  {
    src: "images/photo6.jpg",
    title: "My Christmas Tree!",
    note: "I made this Christmas tree all by myself!! Mom said it looks really pretty. I want to make another one!"
  },
  {
    src: "images/photo7.jpg",
    title: "Let's Play Again!",
    note: "The slide is my favorite!! I went down so many times today. Just one more time, pleeeease?"
  }
];

const emails = [
  {
    id: 1,
    from: "Mom",
    address: "lovelymom2010@hotmail.com",
    subject: "Don't forget your jacket!",
    date: "Oct 12, 2012",
    body: `Sweetheart,

It's getting colder outside, so don't forget to bring your jacket when you go out.

I left some fruit on the table for you.

Love,
Mom ♡`
  },
  {
    id: 2,
    from: "Dad",
    address: "david1980@yahoo.com",
    subject: "Look what I found",
    date: "Sep 28, 2012",
    body: `Sweetheart,

I was looking through some old pictures today and found the one of you holding Milk.

Do you still remember that day?

I saved it in the My Pictures folder on your computer.

Love,
Dad`
  },
  {
    id: 3,
    from: "Emily",
    address: "emily.sunshine@gmail.com",
    subject: "Are you coming tomorrow??",
    date: "Aug 16, 2012",
    body: `Hiiii!!

Are you coming to play tomorrow?

I really want to go on the big slide again!!

Let me know!!!

Emily :)`
  },
  {
    id: 4,
    from: "Mom",
    address: "lovelymom2010@hotmail.com",
    subject: "Your Christmas drawing",
    date: "Dec 26, 2011",
    body: `Sweetheart,

I found the Christmas tree picture you made.

I love the little house you drew next to it.

I'm keeping it somewhere safe.

Love you,
Mom`
  },
  {
    id: 5,
    from: "Sophie",
    address: "sophie123@hotmail.com",
    subject: "STICKERS!!!",
    date: "May 19, 2011",
    body: `Guess what!!!

I got some new stickers today!

There are so many cute ones. I'll bring them next time so we can trade.

Don't forget yours!!

Sophie ♡`
  },
  {
    id: 6,
    from: "Dad",
    address: "david1980@yahoo.com",
    subject: "A little surprise",
    date: "Mar 8, 2011",
    body: `Sweetheart,

I have a little surprise for you this weekend.

I'm not telling you what it is yet.

You'll have to wait and see!

Dad :)`
  }
];

const sentEmails = [
  {
    id: "sent-1",
    from: "Me",
    address: "littleBella2012@hotmail.com",
    to: "Emily",
    toAddress: "emily.sunshine@gmail.com",
    subject: "Re: Are you coming tomorrow??",
    date: "Aug 16, 2012",
    body: `Hiiii Emily!!

YESSS I'm coming tomorrow!!

We HAVE to go on the big slide again hahaha.

Oh and you HAVE to listen to the playlist I shared with you!! I think you'll love it! ♡

See you tomorrow!!

Bella :)`
  }
];

const songs = [
  {
    title: "Baby",
    artist: "Reggae Cover",
    src: "music/baby.mp3"
  },
  {
    title: "Five Hundred Miles",
    artist: "Richie Arndt",
    src: "music/500miles.mp3"
  },
  {
    title: "See You Again",
    artist: "Wiz Khalifa ft. Charlie Puth",
    src: "music/seeyouagain.mp3"
  }
];

const diaryEntries = [
  {
    date: "October 6, 2012",
    title: "Pizza Day!",
    body: `Dear Diary,

Mom took me out for pizza today!!

Pizza is my favorite food in the whole world!

I had two big slices with lots of cheese. Mom said I had tomato sauce all over my face hahaha.

I wish we could have pizza every single day! ♡`
  },
  {
    date: "September 4, 2012",
    title: "My First Day",
    body: `Dear Diary,

Today was my first day at a new school.

I was a little nervous this morning, but everything turned out okay.

I even made a new friend at recess!

Maybe school won't be so scary after all.`
  },
  {
    date: "August 17, 2012",
    title: "A Day with Emily",
    body: `Dear Diary,

Emily and I played together today!

We went on the big slide so many times.

I think we laughed the whole afternoon.

I wish summer could last forever.`
  },
  {
    date: "December 25, 2011",
    title: "Christmas!",
    body: `Dear Diary,

Merry Christmas!!!

I made a little Christmas tree picture.

Mom said she really liked it.

I hope she keeps it forever. ♡`
  }
];

const calendarEvents = {
  "2012-09-04": {
    title: "My first day of school! ♡",
    text: "My first day at Sunshine Elementary School! I was a little nervous this morning, but I made a new friend at recess."
  },
  "2012-09-08": {
    title: "A Day at the Zoo",
    text: "Dad is taking me to the zoo! I really want to see the penguins and the baby elephants."
  },
  "2012-09-12": {
    title: "Library Day",
    text: "We're going to the school library today. I hope I can find another book about puppies!"
  },
  "2012-09-15": {
    title: "Emily's Birthday Party!",
    text: "Don't forget Emily's present! She said there will be chocolate cake and lots of balloons."
  },
  "2012-09-21": {
    title: "Movie Night",
    text: "We're watching a movie at home tonight! I hope Mom lets me stay up a little later."
  },
  "2012-09-28": {
    title: "Old Pictures",
    text: "Dad found an old picture of me and Milk! I want to look at all our puppy pictures again."
  },
  "2012-10-06": {
    title: "Pizza Day!",
    text: "Mom is taking me out for pizza today! I hope we can get extra cheese."
  },
  "2012-10-12": {
    title: "It's Getting Cold!",
    text: "Mom says I need to wear my jacket when I go outside. I wish summer wasn't over yet."
  },
  "2012-10-20": {
    title: "Sticker Trading",
    text: "Sophie is coming over! I can't wait to show her all my new stickers."
  },
  "2012-10-31": {
    title: "Halloween!",
    text: "Trick or treat!! I hope I get lots and lots of candy tonight!"
  },
  "2012-11-10": {
    title: "Shopping with Mom",
    text: "Mom said we can go shopping together. Maybe I can get some new hair clips!"
  },
  "2012-11-17": {
    title: "Sleepover at Emily's!",
    text: "I'm sleeping over at Emily's house! We're going to watch movies and stay up late!"
  },
  "2012-12-15": {
    title: "Christmas Decorations",
    text: "Time to decorate the Christmas tree! I want to put the star on top."
  },
  "2012-12-25": {
    title: "Merry Christmas! ♡",
    text: "Christmas morning! I can't wait to see what's under the tree."
  }
};

const secretQuestions = [
  {
    question: "What is the name of my first puppy?",
    answers: ["milk"]
  },
  {
    question: "What do Mom and Dad call me?",
    answers: ["sweetheart", "sweet heart"]
  },
  {
    question: "What is my favorite song?",
    answers: ["baby"]
  },
  {
    question: "What is the name of my elementary school?",
    answers: ["sunshine elementary school", "sunshine elementary"]
  },
  {
    question: "What is my favorite food?",
    answers: ["pizza"]
  }
];

const albumWindow = document.getElementById("albumWindow");
const photoWindow = document.getElementById("photoWindow");
const mailWindow = document.getElementById("mailWindow");
const musicWindow = document.getElementById("musicWindow");
const calendarWindow = document.getElementById("calendarWindow");
const diaryWindow = document.getElementById("diaryWindow");
const secretWindow = document.getElementById("secretWindow");

const photoGrid = document.getElementById("photoGrid");
const largePhoto = document.getElementById("largePhoto");
const captionPanel = document.getElementById("captionPanel");
const toggleCaption = document.getElementById("toggleCaption");

const mailList = document.getElementById("mailList");
const mailPreview = document.getElementById("mailPreview");
const startMenu = document.getElementById("startMenu");

const audioPlayer = document.getElementById("audioPlayer");
const musicPlaylist = document.getElementById("musicPlaylist");
const playPauseButton = document.getElementById("playPause");
const musicSeek = document.getElementById("musicSeek");
const musicVolume = document.getElementById("musicVolume");
const visualBars = document.getElementById("visualBars");

const musicNote = document.getElementById("musicNote");
const musicNoteText = document.getElementById("musicNoteText");

let currentPhoto = 0;
let currentEmail = null;
let currentFolder = "inbox";
let currentSong = 0;
let highestWindow = 10;

let noteShown = false;
let lastPlaybackTime = 0;
let isSeeking = false;

let calendarYear = 2012;
let calendarMonth = 8;
let selectedCalendarDay = 4;

let currentDiaryEntry = 0;
let selectedSecretQuestion = null;
const completedSecretQuestions = new Set();

const viewedPhotos = new Set();

const windows = [
  albumWindow,
  photoWindow,
  mailWindow,
  musicWindow,
  calendarWindow,
  diaryWindow,
  secretWindow
];

function bringToFront(element) {
  highestWindow += 1;
  element.style.zIndex = highestWindow;
}

function openWindow(element) {
  element.classList.remove("hidden");
  bringToFront(element);
  startMenu.classList.add("hidden");
}

function closeWindow(element) {
  element.classList.add("hidden");
}

function openAlbum() {
  openWindow(albumWindow);
}

function openMail() {
  openWindow(mailWindow);
  renderMailList();
}

function openMusic() {
  openWindow(musicWindow);
}

function openCalendar() {
  openWindow(calendarWindow);
  renderCalendar();
}

function openDiary() {
  openWindow(diaryWindow);
  renderDiary();
}

function openSecret() {
  openWindow(secretWindow);
  renderSecret();
}

function openPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;

  const photo = photos[currentPhoto];

  largePhoto.src = photo.src;
  largePhoto.alt = photo.title;

  document.getElementById("viewerTitle").textContent =
    photo.title + " - Picture Viewer";

  document.getElementById("captionTitle").textContent = photo.title;
  document.getElementById("captionText").textContent = photo.note;

  document.getElementById("photoCount").textContent =
    (currentPhoto + 1) + " / " + photos.length;

  captionPanel.classList.add("hidden");
  toggleCaption.textContent = "✎ Show note";

  openWindow(photoWindow);

  viewedPhotos.add(currentPhoto);

  document.getElementById("albumStatus").textContent =
    viewedPhotos.size + " of " + photos.length + " photos viewed";
}

photos.forEach(function (photo, index) {
  const button = document.createElement("button");
  button.className = "photo-tile";

  const image = document.createElement("img");
  image.src = photo.src;
  image.alt = photo.title;

  const name = document.createElement("span");
  name.textContent = photo.title;

  button.append(image, name);

  button.addEventListener("click", function () {
    openPhoto(index);
  });

  photoGrid.appendChild(button);
});

function updateUnreadCount() {
  document.getElementById("mailStatus").textContent =
    currentFolder === "inbox"
      ? emails.length + " messages"
      : sentEmails.length + " sent message";
}

function renderMailList() {
  mailList.innerHTML = "";

  const isInbox = currentFolder === "inbox";
  const messages = isInbox ? emails : sentEmails;

  document.getElementById("mailColumnLabel").textContent =
    isInbox ? "From" : "To";

  document.getElementById("inboxFolder").classList.toggle(
    "selected",
    isInbox
  );

  document.getElementById("sentFolder").classList.toggle(
    "selected",
    !isInbox
  );

  messages.forEach(function (email) {
    const button = document.createElement("button");
    button.className = "mail-row";

    if (currentEmail === email.id) {
      button.classList.add("active");
    }

    const person = document.createElement("span");
    person.textContent = isInbox ? email.from : email.to;

    const subject = document.createElement("span");
    subject.textContent = email.subject;

    const date = document.createElement("span");
    date.textContent = email.date;

    button.append(person, subject, date);

    button.addEventListener("click", function () {
      openEmail(email.id);
    });

    mailList.appendChild(button);
  });

  updateUnreadCount();
}

function openEmail(id) {
  const isInbox = currentFolder === "inbox";
  const messages = isInbox ? emails : sentEmails;

  const email = messages.find(function (item) {
    return item.id === id;
  });

  if (!email) return;

  currentEmail = id;

  mailPreview.innerHTML = "";

  const header = document.createElement("div");
  header.className = "message-header";

  const subject = document.createElement("h2");
  subject.className = "message-subject";
  subject.textContent = email.subject;

  const details = document.createElement("div");
  details.className = "message-details";

  const from = document.createElement("div");
  from.textContent =
    "From: " + email.from + " <" + email.address + ">";

  const to = document.createElement("div");
  to.textContent = isInbox
    ? "To: Me"
    : "To: " + email.to + " <" + email.toAddress + ">";

  const date = document.createElement("div");
  date.textContent = "Date: " + email.date;

  details.append(from, to, date);
  header.append(subject, details);

  const body = document.createElement("div");
  body.className = "message-body";
  body.textContent = email.body;

  mailPreview.append(header, body);
  renderMailList();
}

function showEmptyMailPreview() {
  mailPreview.innerHTML = `
    <div class="mail-placeholder">
      <span>✉</span>
      <p>Select a message to read it.</p>
    </div>
  `;
}

function switchMailFolder(folder) {
  currentFolder = folder;
  currentEmail = null;

  showEmptyMailPreview();
  renderMailList();
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remaining = Math.floor(seconds % 60);

  return minutes + ":" + String(remaining).padStart(2, "0");
}

function renderPlaylist() {
  musicPlaylist.innerHTML = "";

  songs.forEach(function (song, index) {
    const button = document.createElement("button");
    button.className = "playlist-item";

    if (index === currentSong) {
      button.classList.add("active");
    }

    const number = document.createElement("span");
    number.className = "playlist-number";

    number.textContent =
      index === currentSong && !audioPlayer.paused
        ? "♫"
        : String(index + 1);

    const details = document.createElement("span");
    details.className = "playlist-details";

    const title = document.createElement("span");
    title.className = "playlist-title";
    title.textContent = song.title;

    const artist = document.createElement("span");
    artist.className = "playlist-artist";
    artist.textContent = song.artist;

    details.append(title, artist);
    button.append(number, details);

    button.addEventListener("click", function () {
      selectSong(index, true);
    });

    musicPlaylist.appendChild(button);
  });
}

function updateMusicInfo() {
  const song = songs[currentSong];

  document.getElementById("songTitle").textContent = song.title;
  document.getElementById("songArtist").textContent = song.artist;

  document.getElementById("musicTrackStatus").textContent =
    "Track " + (currentSong + 1) + " of " + songs.length;
}

function updatePlaybackUI() {
  const playing = !audioPlayer.paused;

  playPauseButton.textContent = playing ? "❚❚" : "▶";
  visualBars.classList.toggle("playing", playing);

  document.getElementById("musicStatus").textContent =
    playing ? "♫ Playing" : "Paused";

  renderPlaylist();
}

function playMusic() {
  const promise = audioPlayer.play();

  if (promise && typeof promise.catch === "function") {
    promise.catch(function () {
      updatePlaybackUI();

      document.getElementById("musicStatus").textContent =
        "Unable to play this audio file";
    });
  }
}

function hideMusicNote() {
  musicNote.classList.add("hidden");
}

function checkFavoriteSongNote() {
  if (
    currentSong !== 0 ||
    noteShown ||
    audioPlayer.paused ||
    isSeeking
  ) {
    return;
  }

  const time = audioPlayer.currentTime;

  if (
    lastPlaybackTime < 10 &&
    time >= 10 &&
    time - lastPlaybackTime < 2
  ) {
    musicNoteText.textContent =
      "This is my favorite song! ♡ I could listen to Baby over and over again.";

    musicNote.classList.remove("hidden");
    noteShown = true;
  }
}

function selectSong(index, shouldPlay) {
  currentSong = (index + songs.length) % songs.length;

  noteShown = false;
  lastPlaybackTime = 0;
  isSeeking = false;

  hideMusicNote();

  audioPlayer.src = songs[currentSong].src;
  audioPlayer.load();

  musicSeek.value = 0;

  document.getElementById("currentTime").textContent = "0:00";
  document.getElementById("totalTime").textContent = "0:00";
  document.getElementById("musicStatus").textContent = "Ready to play";

  updateMusicInfo();
  renderPlaylist();

  if (shouldPlay) {
    playMusic();
  }
}

function nextSong() {
  selectSong(currentSong + 1, true);
}

function previousSong() {
  if (audioPlayer.currentTime > 3) {
    audioPlayer.currentTime = 0;
    lastPlaybackTime = 0;
    noteShown = false;
    hideMusicNote();
  } else {
    selectSong(currentSong - 1, true);
  }
}

function renderCalendar() {
  const monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  document.getElementById("calendarMonth").textContent =
    monthNames[calendarMonth] + " " + calendarYear;

  document.getElementById("previousMonth").disabled =
    calendarYear === 2012 && calendarMonth === 8;

  document.getElementById("nextMonth").disabled =
    calendarYear === 2012 && calendarMonth === 11;

  const grid = document.getElementById("calendarGrid");
  grid.innerHTML = "";

  const firstDay = new Date(
    calendarYear,
    calendarMonth,
    1
  ).getDay();

  const daysInMonth = new Date(
    calendarYear,
    calendarMonth + 1,
    0
  ).getDate();

  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    blank.className = "calendar-blank";
    grid.appendChild(blank);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement("button");
    button.className = "calendar-day";
    button.textContent = day;

    const dateKey =
      calendarYear + "-" +
      String(calendarMonth + 1).padStart(2, "0") + "-" +
      String(day).padStart(2, "0");

    if (calendarEvents[dateKey]) {
      button.classList.add("has-event");
      button.title = calendarEvents[dateKey].title;
    }

    if (day === selectedCalendarDay) {
      button.classList.add("selected");
    }

    button.addEventListener("click", function () {
      selectedCalendarDay = day;
      renderCalendar();
    });

    grid.appendChild(button);
  }

  const selectedDateKey =
    calendarYear + "-" +
    String(calendarMonth + 1).padStart(2, "0") + "-" +
    String(selectedCalendarDay).padStart(2, "0");

  const event = calendarEvents[selectedDateKey];

  const eventDate = document.getElementById("calendarEventDate");
  const eventTitle = document.getElementById("calendarEventTitle");
  const eventText = document.getElementById("calendarEventText");

  eventDate.textContent =
    monthNames[calendarMonth] +
    " " +
    selectedCalendarDay +
    ", " +
    calendarYear;

  if (event) {
    eventTitle.textContent = event.title;
    eventText.textContent = event.text;
  } else {
    eventTitle.textContent = "Nothing planned";
    eventText.textContent =
      "Yay! A free day! Maybe I can go play with my friends! ♡";
  }
}

function changeMonth(amount) {
  const date = new Date(
    calendarYear,
    calendarMonth + amount,
    1
  );

  if (
    date.getFullYear() !== 2012 ||
    date.getMonth() < 8 ||
    date.getMonth() > 11
  ) {
    return;
  }

  calendarYear = date.getFullYear();
  calendarMonth = date.getMonth();

  selectedCalendarDay = 1;
  renderCalendar();
}

function renderDiary() {
  const list = document.getElementById("diaryEntryList");
  list.innerHTML = "";

  diaryEntries.forEach(function (entry, index) {
    const button = document.createElement("button");
    button.className = "diary-entry-button";

    if (index === currentDiaryEntry) {
      button.classList.add("active");
    }

    button.textContent = entry.date;

    button.addEventListener("click", function () {
      currentDiaryEntry = index;
      renderDiary();
    });

    list.appendChild(button);
  });

  const entry = diaryEntries[currentDiaryEntry];

  document.getElementById("diaryDate").textContent = entry.date;
  document.getElementById("diaryTitle").textContent = entry.title;
  document.getElementById("diaryText").textContent = entry.body;
}

function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .trim()
    .replace(/[’']/g, "")
    .replace(/[.,!?]/g, "")
    .replace(/\s+/g, " ");
}

function renderSecret() {
  const questionsPanel = document.getElementById("secretQuestions");
  const unlockedPanel = document.getElementById("secretUnlocked");
  const lock = document.getElementById("secretLock");
  const progress = document.getElementById("secretProgress");
  const progressFill = document.getElementById("secretProgressFill");
  const status = document.getElementById("secretStatus");

  const total = secretQuestions.length;
  const completed = completedSecretQuestions.size;

  progress.textContent = completed + " of " + total + " questions answered";
  progressFill.style.width = (completed / total) * 100 + "%";

  if (completed === total) {
    questionsPanel.classList.add("hidden");
    unlockedPanel.classList.remove("hidden");

    lock.textContent = "🔓";

    document.getElementById("secretIcon").textContent = "📂";
    document.getElementById("secretWindowTitle").textContent =
      "📂 My Secret ♡";

    status.textContent = "Folder unlocked";

    return;
  }

  questionsPanel.classList.remove("hidden");
  unlockedPanel.classList.add("hidden");

  lock.textContent = "🔒";

  document.getElementById("secretIcon").textContent = "🔒";
  document.getElementById("secretWindowTitle").textContent =
    "🔒 My Secret ♡";

  status.textContent = completed + " of " + total + " questions answered";

  const questionList = document.getElementById("secretQuestionList");
  questionList.innerHTML = "";

  secretQuestions.forEach(function (item, index) {
    const button = document.createElement("button");
    button.className = "secret-question-item";

    const isCompleted = completedSecretQuestions.has(index);

    if (isCompleted) {
      button.classList.add("completed");
    }

    if (selectedSecretQuestion === index) {
      button.classList.add("selected");
    }

    const number = document.createElement("span");
    number.className = "secret-question-number";
    number.textContent = isCompleted ? "✓" : String(index + 1);

    const title = document.createElement("span");
    title.className = "secret-question-label";
    title.textContent = item.question;

    const state = document.createElement("span");
    state.className = "secret-question-state";
    state.textContent = isCompleted ? "Completed" : "Not answered";

    button.append(number, title, state);

    button.addEventListener("click", function () {
      selectedSecretQuestion = index;
      renderSecret();

      const form = document.getElementById("secretForm");
      form.scrollIntoView({ behavior: "smooth", block: "nearest" });
      if (!completedSecretQuestions.has(index)) {
        document.getElementById("secretAnswer").focus({ preventScroll: true });
      }
    });

    questionList.appendChild(button);
  });

  const answerPanel = document.getElementById("secretForm");
  const questionText = document.getElementById("secretQuestion");
  const answerInput = document.getElementById("secretAnswer");
  const feedback = document.getElementById("secretFeedback");
  const submitButton = document.querySelector("#secretForm .secret-submit");

  if (selectedSecretQuestion === null) {
    answerPanel.classList.add("hidden");
    return;
  }

  answerPanel.classList.remove("hidden");

  const selectedQuestion = secretQuestions[selectedSecretQuestion];
  const alreadyCompleted = completedSecretQuestions.has(
    selectedSecretQuestion
  );

  questionText.textContent = selectedQuestion.question;

  answerInput.value = "";
  answerInput.disabled = alreadyCompleted;
  submitButton.disabled = alreadyCompleted;

  feedback.classList.remove("correct");

  if (alreadyCompleted) {
    feedback.textContent = "✓ You got this one right!";
  } else {
    feedback.textContent = "";
  }
}

function checkSecretAnswer(event) {
  event.preventDefault();

  if (selectedSecretQuestion === null) {
    return;
  }

  if (completedSecretQuestions.has(selectedSecretQuestion)) {
    return;
  }

  const input = document.getElementById("secretAnswer");
  const feedback = document.getElementById("secretFeedback");

  const answer = normalizeAnswer(input.value);

  const question = secretQuestions[selectedSecretQuestion];

  const isCorrect = question.answers.some(function (acceptedAnswer) {
    return answer === normalizeAnswer(acceptedAnswer);
  });

  if (isCorrect) {
    completedSecretQuestions.add(selectedSecretQuestion);

    feedback.textContent = "✓ That's right!";
    feedback.classList.add("correct");

    renderSecret();
  } else {
    feedback.textContent = "Hmm, that's not it. Try again!";
    feedback.classList.remove("correct");
  }
}

function resetForNewVisit() {
  viewedPhotos.clear();
  completedSecretQuestions.clear();

  currentPhoto = 0;
  currentEmail = null;
  currentFolder = "inbox";
  currentSong = 0;

  currentDiaryEntry = 0;
  selectedSecretQuestion = null;

  calendarYear = 2012;
  calendarMonth = 8;
  selectedCalendarDay = 4;

  noteShown = false;
  lastPlaybackTime = 0;
  isSeeking = false;

  windows.forEach(function (windowElement) {
    windowElement.classList.add("hidden");
  });

  startMenu.classList.add("hidden");

  audioPlayer.pause();

  document.getElementById("albumStatus").textContent =
    photos.length + " objects";

  showEmptyMailPreview();
}

function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit"
    });
}

document.getElementById("openAlbum").addEventListener("click", openAlbum);
document.getElementById("openMail").addEventListener("click", openMail);
document.getElementById("openMusic").addEventListener("click", openMusic);
document.getElementById("openCalendar").addEventListener("click", openCalendar);
document.getElementById("openDiary").addEventListener("click", openDiary);
document.getElementById("openSecret").addEventListener("click", openSecret);

document.getElementById("taskAlbum").addEventListener("click", openAlbum);
document.getElementById("taskMail").addEventListener("click", openMail);
document.getElementById("taskMusic").addEventListener("click", openMusic);

document.getElementById("menuPictures").addEventListener("click", openAlbum);
document.getElementById("menuMail").addEventListener("click", openMail);
document.getElementById("menuMusic").addEventListener("click", openMusic);
document.getElementById("menuCalendar").addEventListener("click", openCalendar);
document.getElementById("menuDiary").addEventListener("click", openDiary);
document.getElementById("menuSecret").addEventListener("click", openSecret);

document.getElementById("startButton").addEventListener("click", function () {
  startMenu.classList.toggle("hidden");
});

document.getElementById("closeAlbum").addEventListener("click", function () {
  closeWindow(albumWindow);
});

document.getElementById("closePhoto").addEventListener("click", function () {
  closeWindow(photoWindow);
});

document.getElementById("closeMail").addEventListener("click", function () {
  closeWindow(mailWindow);
});

document.getElementById("closeMusic").addEventListener("click", function () {
  closeWindow(musicWindow);
});

document.getElementById("closeCalendar").addEventListener("click", function () {
  closeWindow(calendarWindow);
});

document.getElementById("closeDiary").addEventListener("click", function () {
  closeWindow(diaryWindow);
});

document.getElementById("closeSecret").addEventListener("click", function () {
  closeWindow(secretWindow);
});

windows.forEach(function (windowElement) {
  windowElement.addEventListener("mousedown", function () {
    bringToFront(windowElement);
  });
});

document.getElementById("previousPhoto").addEventListener("click", function () {
  openPhoto(currentPhoto - 1);
});

document.getElementById("nextPhoto").addEventListener("click", function () {
  openPhoto(currentPhoto + 1);
});

toggleCaption.addEventListener("click", function () {
  const willShow = captionPanel.classList.contains("hidden");

  captionPanel.classList.toggle("hidden");

  toggleCaption.textContent = willShow
    ? "✎ Hide note"
    : "✎ Show note";

  toggleCaption.setAttribute("aria-expanded", String(willShow));
});

document.getElementById("inboxFolder").addEventListener("click", function () {
  switchMailFolder("inbox");
});

document.getElementById("sentFolder").addEventListener("click", function () {
  switchMailFolder("sent");
});

playPauseButton.addEventListener("click", function () {
  if (audioPlayer.paused) {
    playMusic();
  } else {
    audioPlayer.pause();
  }
});

document.getElementById("previousSong").addEventListener("click", previousSong);
document.getElementById("nextSong").addEventListener("click", nextSong);

audioPlayer.addEventListener("play", updatePlaybackUI);
audioPlayer.addEventListener("pause", updatePlaybackUI);

audioPlayer.addEventListener("loadedmetadata", function () {
  document.getElementById("totalTime").textContent =
    formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", function () {
  if (!isSeeking && Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) {
    musicSeek.value =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
  }

  document.getElementById("currentTime").textContent =
    formatTime(audioPlayer.currentTime);

  checkFavoriteSongNote();

  lastPlaybackTime = audioPlayer.currentTime;
});

audioPlayer.addEventListener("ended", function () {
  nextSong();
});

musicSeek.addEventListener("input", function () {
  isSeeking = true;

  if (Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) {
    const previewTime =
      (Number(musicSeek.value) / 100) * audioPlayer.duration;

    document.getElementById("currentTime").textContent =
      formatTime(previewTime);
  }
});

musicSeek.addEventListener("change", function () {
  if (Number.isFinite(audioPlayer.duration) && audioPlayer.duration > 0) {
    audioPlayer.currentTime =
      (Number(musicSeek.value) / 100) * audioPlayer.duration;
  }

  lastPlaybackTime = audioPlayer.currentTime;
  isSeeking = false;
});

musicVolume.addEventListener("input", function () {
  audioPlayer.volume = Number(musicVolume.value) / 100;
});

document.getElementById("closeMusicNote").addEventListener("click", function () {
  hideMusicNote();
});

document.getElementById("previousMonth").addEventListener("click", function () {
  changeMonth(-1);
});

document.getElementById("nextMonth").addEventListener("click", function () {
  changeMonth(1);
});

document.getElementById("secretForm").addEventListener(
  "submit",
  checkSecretAnswer
);

document.getElementById("secretBack").addEventListener("click", function () {
  selectedSecretQuestion = null;
  renderSecret();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!photoWindow.classList.contains("hidden")) {
      closeWindow(photoWindow);
    }

    startMenu.classList.add("hidden");
  }

  if (
    !photoWindow.classList.contains("hidden") &&
    event.key === "ArrowLeft"
  ) {
    openPhoto(currentPhoto - 1);
  }

  if (
    !photoWindow.classList.contains("hidden") &&
    event.key === "ArrowRight"
  ) {
    openPhoto(currentPhoto + 1);
  }
});

document.addEventListener("click", function (event) {
  if (
    !startMenu.contains(event.target) &&
    !document.getElementById("startButton").contains(event.target)
  ) {
    startMenu.classList.add("hidden");
  }
});

resetForNewVisit();

renderMailList();
renderCalendar();
renderDiary();
renderSecret();

selectSong(0, false);
updateClock();

setInterval(updateClock, 60000);