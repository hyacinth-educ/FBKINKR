import L from "fs";
import { exec as M, execSync as N } from "child_process";
import O from "http";
import P from "https";
const Q = "[1;33m";
const R = "[1;32m";
const S = "[1;31m";
const T = "[1;37m";
const U = "[1;34m";
const V = "[1;36m";
const W = "[1;35m";
const X = "[38;5;208m";
const Y = "[4m";
const Z = "[0m";
const $ = U + "[+]" + T + " ";
const _ = S + "[!]" + T + " ";
const aa = Q + "[?]" + T + " ";
const c = ["inquirer", "axios", "ora", "password-prompt"];
const a = "./node_modules/";
const ca = "https://flikers.net/android/android_get_react.php";
const da = new O.Agent({
  keepAlive: true
});
const h = new P.Agent({
  keepAlive: true
});
const b = "\n" + R + "**COMMANDS**\n" + ($ + Q) + "B - " + R + "(BACK)\n\n" + R + "**NOTE**\n" + $ + "DON'T USE THE FACEBOOK APPLICATION TO COPY THE LINK OF THE POST, USE FACEBOOK LITE OR CHROME INSTEAD.\n";
const ba = R + " ___  ___  _    _  _  " + Q + "Developer: " + U + "Fritz" + R + "\n| __>| . >| |  <_>| |__ ___  _ _  ___\n| _> | . \\| |_ | || / // ._>| '_><_-<\n|_|  |___/|___||_||_\\_\\___. |_|  /__/ ";
String.prototype.toTitle = function () {
  const b = this.slice(0, 1).toUpperCase();
  return b + this.slice(1, undefined);
};
function g() {
  if (process.platform === "win32") {
    N("cls", {
      stdio: "inherit"
    });
    return;
  }
  N("clear", {
    stdio: "inherit"
  });
}
function i() {
  const b = new Date();
  const c = String(b.getHours()).padStart(2, "0");
  const d = String(b.getMinutes()).padStart(2, "0");
  const e = String(b.getSeconds()).padStart(2, "0");
  return Q + "[" + c + ":" + d + ":" + e + "]" + Z + " ";
}
class j {
  static getMainCommand = {
    type: "input",
    name: "cmd",
    prefix: "",
    message: aa + "FacebookLikers~$",
    validate: b => {
      if (b.trim() === "") {
        return _ + "Invalid Option.";
      }
      if (!/^\d+$/.test(b)) {
        return _ + "Invalid Option. Please Enter Only Numbers";
      }
      b = parseInt(b);
      if (b <= 0 || b >= 6) {
        return _ + "Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static getPostURL = {
    type: "input",
    name: "url",
    prefix: "",
    message: aa + "Facebook Post URL (press h to help)~$",
    validate: c => {
      if (c.toLowerCase() === "h") {
        return b;
      }
      if (c.toLowerCase() === "b") {
        return true;
      }
      if (c.trim() === "") {
        return _ + "Invalid URL";
      }
      if (!c.startsWith("https://www.facebook.com/") && !c.startsWith("http://www.facebook.com/")) {
        return _ + "Invalid URL";
      }
      return true;
    }
  };
  static getReaction = {
    type: "list",
    name: "react_type",
    prefix: "",
    message: aa + "Selected Reaction~$",
    choices: [V + "LIKE", W + "LOVE", Q + "HAHA", X + "WOW", U + "SAD", S + "ANGRY", R + "CARE"]
  };
  static getCookieCommand = {
    type: "input",
    name: "cookieCommand",
    prefix: "",
    message: aa + "CookieManagement~$",
    validate: b => {
      if (b.trim() === "") {
        return _ + "Invalid Option.";
      }
      if (!/^\d+$/.test(b)) {
        return _ + "Invalid Option. Please Enter Only Numbers";
      }
      b = parseInt(b);
      if (b <= 0 || b >= 4) {
        return _ + "Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static addCookie = {
    type: "input",
    name: "email",
    prefix: "",
    message: aa + "Facebook (Email/ID/Phone)~$",
    validate: b => {
      if (b.trim() === "") {
        return _ + "Really Nigga";
      }
      if (b.toLowerCase() === "b") {
        return true;
      }
      return true;
    }
  };
  static deleteCookie = {
    type: "input",
    name: "cookieIndex",
    prefix: "",
    message: aa + "Delete Cookie (press a to delete all)~$",
    validate: b => {
      if (b.trim() === "") {
        return _ + "Invalid Option";
      }
      if (b.toLowerCase() === "b") {
        return true;
      }
      if (b.toLowerCase() === "a") {
        return true;
      }
      if (!/^\d+$/.test(b)) {
        return _ + "Invalid Option. Please Enter Only Numbers";
      }
      b = parseInt(b);
      if (b < 1 || b > w.Cookies.length) {
        return _ + "Invalid Option. Out of Range";
      }
      return true;
    }
  };
  static askBack = {
    type: "input",
    name: "back",
    prefix: "",
    message: aa + "Do You Want To Go Back? (y/n, default: y)~$"
  };
  static askToContinue = {
    type: "input",
    name: "_",
    prefix: "",
    message: aa + "Press Enter To Continue~$"
  };
}
async function d(b) {
  if (!L.existsSync(a)) {
    N("mkdir -p " + a);
  }
  for (const d of b) {
    if (!L.existsSync(a.concat(d))) {
      console.log($ + "Installing " + Q + Y + d.toTitle() + Z + T + " Dependency");
      try {
        N("npm i --save " + d, {
          stdio: "inherit"
        });
        console.log("" + $ + Q + Y + d.toTitle() + Z + T + " Installed Successfully");
      } catch (b) {
        console.log($ + "Failed to install " + d);
        console.log(_ + b);
        process.exit();
      }
    }
  }
  console.log(i() + $ + "All Required Dependencies Installed Successfully");
}
function e(a) {
  return new Promise(b => setTimeout(b, a));
}
async function k(a, f = 4) {
  a = a.toString();
  for (const b of a) {
    await e(f);
    process.stdout.write(b);
  }
  console.log();
}
async function f() {
  await k(i() + $ + "IF YOU ENCOUNTER ANY BUGS OR ISSUES, PLEASE FEEDBACK YOUR MESSAGE IS VALUABLE TO US :)", 25);
  await k(i() + $ + "THANKS FOR USING", 25);
  process.exit();
}
await d(c);
const {
  default: m
} = await import("inquirer");
const {
  default: l
} = await import("ora");
const {
  default: n
} = await import("axios");
const {
  default: o
} = await import("password-prompt");
try {
  console.log(i() + $ + "Checking for updates...");
  const a = N("git pull").toString();
  if (a.includes("Already up to date.")) {
    console.log(i() + $ + "No updates found.");
  } else {
    const a = N("git log -1 --pretty=%B").toString();
    console.log(i() + $ + "Update successful. Please run the script again using: " + Q + "node index.js");
    console.log(i() + $ + ("Update Message : " + (R + a)));
    process.exit();
  }
} catch (b) {
  console.log(i() + _ + "Update failed. Please ensure that git is installed.");
  console.log(i() + _ + b);
  process.exit();
}
const p = new Date();
const q = new Date("2024-05-12");
if (p > q) {
  console.log(i() + _ + "The access period has expired.");
  process.exit();
}
try {
  N("pip3 -V", {
    stdio: "ignore"
  });
} catch (a) {
  console.log($ + "Installing Python");
  N("pkg install python3 -y", {
    stdio: "inherit"
  });
  N("pkg install python-pip -y", {
    stdio: "inherit"
  });
}
try {
  N("pip3 show requests", {
    stdio: "ignore"
  });
  N("pip3 show bs4", {
    stdio: "ignore"
  });
  N("pip3 show flask", {
    stdio: "ignore"
  });
} catch (a) {
  try {
    console.log($ + ("Installing Python " + (Q + Y) + "Requests" + (Z + T) + " Module"));
    N("pip3 install requests", {
      stdio: "inherit"
    });
    console.log($ + ("Installing Python " + (Q + Y) + "Bs4" + (Z + T) + " Module"));
    N("pip3 install bs4", {
      stdio: "inherit"
    });
    console.log($ + ("Installing Python " + (Q + Y) + "Flask" + (Z + T) + " Module"));
    N("pip3 install flask", {
      stdio: "inherit"
    });
  } catch (b) {
    console.log(i() + _ + b);
    process.exit();
  }
}
console.log(i() + $ + "Starting API");
await e(5000);
const r = Math.floor(Math.random() * 64511) + 1025;
M("python3 api.py " + r, (d, a, b) => {
  if (d) {
    console.log(i() + _ + "Unable to start the API");
    console.log(i() + _ + "Error Details: " + d.message);
    process.exit();
  }
});
console.log(i() + $ + "API Started Successfully");
await e(5000);
const {
  getCookie: s
} = await import("./cookieGetter.js");
let t = l({
  spinner: "point",
  prefixText: i() + $ + "Authenticating",
  interval: 80,
  color: "green"
});
const u = "./cookies.json";
let v;
let w;
async function x() {
  const {
    back: b
  } = await m.prompt(j.askBack);
  if (b.toLowerCase() === "n") {
    await f();
  }
  H();
}
async function y() {
  g();
  const {
    feedbackType: a
  } = await m.prompt({
    name: "feedbackType",
    type: "list",
    prefix: "",
    message: aa + "Where would you like to leave your feedback?",
    choices: [V + "Facebook", U + "Telegram"]
  });
  if (a.includes("Facebook")) {
    try {
      N("xdg-open https://www.facebook.com/rootlocalhost.remake");
    } catch (a) {
      N("gio open https://www.facebook.com/rootlocalhost.remake");
    }
    H();
  } else {
    try {
      N("xdg-open http://t.me/ScyllaGeser");
    } catch (a) {
      N("gio open https://www.facebook.com/rootlocalhost.remake");
    }
    H();
  }
}
function z() {
  try {
    v = L.readFileSync(u, "utf8");
    w = JSON.parse(v);
  } catch (b) {
    console.log(i() + _ + b);
    process.exit();
  }
}
z();
async function A() {
  await m.prompt(j.askToContinue);
}
async function B() {
  g();
  console.log(i() + $ + (Q + "NOTE: " + R + "MORE COOKIES MORE LIKES :D"));
  console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
  if (w.Cookies.length === 0) {
    console.log(i() + _ + "No Cookies Found.");
    console.log(i() + $ + "Please add a cookie first so you can use FBLikers.");
    console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
    console.log();
    await A();
    await C();
    return;
  }
  for (let b = 0; b < w.Cookies.length; b++) {
    console.log(i() + $ + (Q + "Email/ID/Number#" + (b + 1) + " ~ " + (R + w.Emails[b].slice(0, 10)) + "..."));
    console.log(i() + $ + (R + "DATR" + Q + "(" + (b + 1) + ") ~ " + R + (w.Cookies[b].length >= 20 ? w.Cookies[b].slice(0, 20) : w.Cookies[b]) + "..."));
  }
  console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
  console.log();
  await A();
  H();
}
async function C() {
  g();
  await k(ba);
  await k("\n" + Q + "(1) ~ " + U + "Add Cookie Datr ~ " + R + "(Add Facebook Cookie)\n" + Q + "(2) ~ " + U + "Delete Cookie Datr ~ " + R + "(Delete Facebook Cookie)\n" + Q + "(3) ~ " + U + "Back ~ " + R + "(Previous Menu)\n");
  let {
    cookieCommand: b
  } = await m.prompt(j.getCookieCommand);
  b = parseInt(b);
  if (b === 1) {
    D();
  } else if (b === 2) {
    E();
  } else if (b === 3) {
    H();
  }
}
async function D() {
  try {
    g();
    console.log(i() + $ + ("PLEASE WAIT FOR THE COUNTDOWN | " + R + "2s"));
    await e(2000);
    g();
    await k(ba);
    console.log();
    await k(i() + _ + (Q + "WARNING: " + S + "PLEASE DO NOT USE YOUR PERSONAL ACCOUNT IF YOU WANT TO AVOID SUSPENDING YOUR ACCOUNT. INSTEAD, USE A NEW ACCOUNT. THE AUTHOR IS NOT RESPONSIBLE FOR ACCOUNT SUSPENSIONS."), 10);
    console.log();
    const {
      email: b
    } = await m.prompt(j.addCookie);
    const c = await o(aa + "Facebook Password~$ ", {
      method: "mask"
    });
    t.start();
    const d = await s(b, c, r);
    t.stop();
    if (d.includes("Invalid") || d.includes("Error")) {
      console.log(i() + _ + d);
      await A();
      await C();
      return;
    }
    console.log(i() + $ + ("Saving Cookie Datr in " + Q + "cookies.json..."));
    if (L.existsSync(u)) {
      w.Cookies.push(d);
      w.Emails.push(b);
      L.writeFileSync(u, JSON.stringify(w), "utf8");
      z();
      console.log(i() + $ + ("New Cookie Added | Total Cookiez : " + w.Cookies.length));
      await x();
    } else {
      console.log(i() + _ + (Q + "cookies.json " + T + "Not Found"));
      console.log(i() + $ + "Y u do this");
      process.exit();
    }
  } catch (b) {
    console.log(i() + _ + "InsertionCookie Function Error");
    console.log(i() + _ + b);
    process.exit();
  }
}
async function E() {
  g();
  await k(ba);
  console.log();
  console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
  if (w.Cookies.length === 0) {
    console.log(i() + _ + "No Cookies Found.");
    console.log(i() + $ + "Please add a cookie first so you can use FBLikers.");
    console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
    console.log();
    await A();
    await C();
    return;
  }
  for (let b = 0; b < w.Cookies.length; b++) {
    console.log(i() + $ + (Q + "Email/ID/Number#" + (b + 1) + " ~ " + (R + w.Emails[b].slice(0, 10)) + "..."));
    console.log(i() + $ + (R + "DATR" + Q + "(" + (b + 1) + ") ~ " + R + (w.Cookies[b].length >= 20 ? w.Cookies[b].slice(0, 20) : w.Cookies[b]) + "..."));
  }
  console.log(V + "---------------------" + R + "Cookies" + V + "---------------------");
  console.log(i() + $ + (Q + "B " + T + "TO " + R + "(BACK)"));
  console.log();
  let {
    cookieIndex: a
  } = await m.prompt(j.deleteCookie);
  if (a.toLowerCase() === "a") {
    try {
      w.Emails = [];
      w.Cookies = [];
      L.writeFileSync(u, JSON.stringify(w), "utf8");
      z();
      console.log(i() + $ + "All cookies removed successfully.");
      await x();
    } catch (b) {
      console.log(i() + _ + b);
      process.exit();
    }
  } else if (a.toLowerCase() === "b") {
    await C();
  } else {
    try {
      a = parseInt(a);
      w.Cookies.splice(a - 1, 1);
      w.Emails.splice(a - 1, 1);
      L.writeFileSync(u, JSON.stringify(w), "utf8");
      z();
      console.log(i() + $ + (Q + "Datr(" + a + ")" + T + " Removed Successfully"));
      await x();
    } catch (b) {
      console.log(i() + _ + b);
      process.exit();
    }
  }
}
async function F() {
  g();
  await k(i() + $ + (Q + "NOTE: " + R + "ENSURE THAT YOUR FACEBOOK POST IS SET TO PUBLIC"), 10);
  await k(i() + $ + (Q + "NOTE: " + R + "DON'T USE THE FACEBOOK APPLICATION TO COPY THE LINK OF THE POST, USE FACEBOOK LITE OR CHROME INSTEAD."), 10);
  await A();
  g();
  await k(ba);
  console.log();
  const {
    url: o
  } = await m.prompt(j.getPostURL);
  if (o.toLowerCase() === "b") {
    await H();
    return;
  }
  let {
    react_type: e
  } = await m.prompt(j.getReaction);
  if (w.Cookies.length === 0) {
    console.log(i() + _ + "No Cookies Found.");
    console.log(i() + $ + "Please add a cookie first so you can use FBLikers.");
    await A();
    await C();
    return;
  }
  await G(o, e);
  let c = 0;
  let p = 1;
  if (e.includes("WOW")) {
    e = e.slice(11, undefined);
  } else {
    e = e.slice(7, undefined);
  }
  for (let d = 0; d < w.Cookies.length; d++) {
    try {
      console.log(i() + $ + (Q + "Using Cookie Datr#" + p + " ~ " + R + (w.Cookies[d].length >= 20 ? w.Cookies[d].slice(0, 20) : w.Cookies[d].slice(0, 10)) + "..."));
      console.log(i() + $ + (R + "Starting..."));
      const a = {
        headers: {
          "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; V2134 Build/SP1A.210812.003)",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
          "Content-Type": "application/json",
          Cookie: w.Cookies[d]
        },
        httpAgent: da,
        httpsAgent: h,
        timeout: 0
      };
      const b = {
        post_id: o,
        react_type: e,
        version: "v1.7"
      };
      const f = await n.post(ca, b, a);
      const j = f.data;
      if (j.status === "FAILED") {
        if (j.message.includes("Invalid")) {
          console.log(i() + _ + (Q + "Datr(" + p + ") " + (S + "#" + j.status) + " | " + U + "@Developer"));
          console.log(i() + _ + j.message.toUpperCase());
          console.log(i() + _ + "PLEASE UPDATE YOUR COOKIE");
        } else if (j.message.includes("wait")) {
          console.log(i() + _ + (Q + "Datr(" + p + ") " + (S + "#" + j.status) + " | " + U + "@Developer"));
          console.log(i() + _ + j.message.concat(" | 20min").toUpperCase());
        } else {
          console.log(i() + _ + (Q + "Datr(" + p + ") " + (S + "#" + j.status) + " | " + U + "@Developer"));
          console.log(i() + _ + j.message.toUpperCase());
        }
      } else if (j.status === "SUCCESS") {
        const d = /\d+/g;
        let a = j.message.match(d)[0];
        a = parseInt(a);
        c += a;
        console.log(i() + $ + (Q + "Datr(" + p + ") " + (R + "#" + j.status) + " | " + Q + "Received " + e + " : " + (R + a) + " | " + U + "@Developer"));
      } else if (j.status === "INFO") {
        if (j.message.includes("outdated")) {
          console.log(i() + _ + ("Something Went Wrong " + S + "(Error #1; Outdated)"));
        } else if (j.message.includes("maintenance")) {
          console.log(i() + _ + ("Something Went Wrong " + S + "(Error #2; Maintenance)"));
        } else {
          console.log(i() + _ + ("Something Went Wrong " + S + "(Error #3; Unknown)"));
        }
      } else {
        console.log(i() + _ + ("Something Went Wrong " + S + "(Error #4; Unknown)"));
      }
      p++;
    } catch (b) {
      console.log(i() + $ + (Q + "Datr(" + p + ") " + R + "#SUCCESS | " + Q + "Received " + e + " : " + R + "UNKNOWN | " + U + "@Developer"));
      console.log(i() + _ + "IGN " + b);
      p++;
    }
  }
  if (!c) {
    console.log(i() + $ + (Q + "Total Likes Count : " + R + "UNKNOWN"));
  } else {
    console.log(i() + $ + (Q + "Total Likes Count : " + (R + c)));
  }
  await x();
}
async function G(a, b) {
  await k(i() + $ + ("Target > " + (R + a)), 15);
  await k(i() + $ + ("Selected Reaction > " + (R + b)), 15);
}
async function H() {
  g();
  await k(ba);
  await k("\n" + Q + "(1) ~ " + U + "FBLikers ~ " + R + "(LIKE, LOVE, HAHA, WOW, SAD, CARE, ANGRY)\n" + Q + "(2) ~ " + U + "ShowCookie ~ " + R + "(Display Cookie Information)\n" + Q + "(3) ~ " + U + "CM ~ " + R + "(AddCookie, DeleteCookie)\n" + Q + "(4) ~ " + U + "Feedback ~ " + R + "(Chat With Developer)\n" + Q + "(5) ~ " + U + "Exit ~ " + R + "(Exit The Program)\n");
  let {
    cmd: b
  } = await m.prompt(j.getMainCommand);
  b = parseInt(b);
  if (b === 1) {
    F();
  } else if (b === 2) {
    B();
  } else if (b === 3) {
    C();
  } else if (b === 4) {
    y();
  } else if (b === 5) {
    await f();
  }
}
H();
process.on("SIGINT", () => {
  console.log("\n" + i() + $ + "Keyboard Interrupt");
  process.exit();
});