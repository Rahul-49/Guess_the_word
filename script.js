//let words = ["knife", "meat", "riddle", "budweiser", "squid", "shut", "mansion", "divine", "year", "oscar","cake","zoo","shoe","meher","bhai","salaar"];
//let scWords = ["ifenk", "team", "irdlde", "weiserbud", "uiqsd", "uhst", "samnoni", "vineid", "ayre", "racso","akec","ozo","oehs","reemh","abhi","laaars"];
let words = [
  "planet", "mirror", "gadget", "jumble", "cradle", "oxygen", "ranger", "wizard", "purple", "castle",
  "battle", "silver", "ticket", "hunter", "python", "grapes", "banana", "fluent", "magnet", "rocket",
  "anchor", "bridge", "camera", "drawer", "engine", "famous", "glider", "helmet", "insect", "jungle",
  "kitten", "legend", "marble", "number", "object", "puzzle", "quartz", "rescue", "stripe", "temple",
  "urgent", "victor", "window", "xenial", "yellow", "zephyr", "island", "forest", "bubble", "thread"
];

let scWords = [
  "etnlap", "rorrim", "gdeagt", "bjeulm", "edlcar", "gyxoen", "gernra", "azidrw", "rplupe", "ltseac",
  "tlbtte", "vresil", "kittce", "nruthe", "typhon", "espagr", "nabana", "efltun", "tmenag", "etkcro",
  "hranco", "gbdire", "recmaa", "wrrade", "neneig", "somfua", "ldigre", "tmeelh", "nseict", "nuelgj",
  "entkki", "dgelen", "albmre", "ubnrem", "tjecob", "zpuzle", "ztqura", "sreeuc", "esitpr", "melpte",
  "gnrute", "ctviro", "nwidwo", "enilax", "lwyelo", "ezyphr", "dnlsai", "rstoef", "luebbb", "dahetr"
];


let index = 0;
let original = words[index];
let word = scWords[index];
let tries = Math.floor((word.length / 2)) + 1;

sWord();

document.getElementById("scWord").innerText = word;
document.getElementById("attemtpts").innerText = "No of Guesses left: " + tries;

// Word switching
function sWord() {
    index = generateNum();
    original = words[index];
    word = scWords[index];
}

// Random index generator
function generateNum() {
    return Math.floor(Math.random() * words.length) % 50;
}

// Guess Function
function guesss() {
    let guess = document.getElementById("input-box").value;
    guess = guess.toLowerCase();

    if (guess.length !== original.length) {
        alert("Enter " + original.length + " letters only");
        return;
    }

    let incorrect = "";

    if (guess === original) {
        alert("You Win 🎉🎉");
        location.reload();
        return;
    } else {
        for (let i = 0; i < guess.length; i++) {
            if (guess.charAt(i) !== original.charAt(i)) {
                incorrect += guess.charAt(i) + ",";
            }
        }

        incorrect = incorrect.substring(0, incorrect.length - 1);

        document.getElementById("incorrect").innerHTML = "Incorrect letters: " + incorrect;
    }

    tries--;
    document.getElementById("attemtpts").innerText = "No of Guesses left: " + tries;

    if (tries === 0) {
        alert("Game Over");
        location.reload();
        return;
    }
}

// Start a new game
function random() {
    sWord();
    tries = Math.floor((word.length / 2)) + 1;

    document.getElementById("scWord").innerText = word;
    document.getElementById("incorrect").innerText = "";
    document.getElementById("attemtpts").innerText = "No of Guesses left: " + tries;
}

// Reload game
function reset() {
    location.reload();
}
