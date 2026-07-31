const I18N = {
  "zh-CN": {
    htmlLang: "zh-CN",
    title: "LocalLink · 本地快连",
    brand: "LocalLink",
    brandSub: "本地快连",
    eyebrow: "局域网 · 蓝牙 · 零上云",
    heroTitle: "四端互通，文件秒传",
    heroLead: "在 iOS、Android、macOS、Windows 之间本地发现、聊天与传文件。数据留在你的设备，不经过我们的服务器。",
    ctaDownload: "选择平台下载",
    ctaPrivacy: "隐私政策",
    platformsTitle: "下载 LocalLink",
    platformsLead: "商店链接就绪后会自动显示；也可先使用安装包。",
    feat1Title: "局域网发现",
    feat1Body: "同一 Wi‑Fi / 热点下自动发现附近设备，一键开聊。",
    feat2Title: "蓝牙补位",
    feat2Body: "无公网、弱 Wi‑Fi 时也能用 BLE 发现并传输。",
    feat3Title: "隐私本地",
    feat3Body: "聊天与文件走设备间直连，不上云、不留档。",
    iosName: "iPhone / iPad",
    iosDesc: "IPA 安装包",
    androidName: "Android",
    androidDesc: "Google Play 或安装包",
    macName: "macOS",
    macDesc: "ARM64 / Intel / Universal",
    winName: "Windows",
    winDesc: "MSI / RAR / 便携版",
    storeBtn: "前往商店",
    directBtn: "下载安装包",
    macArm64Btn: "下载 ARM64 (Apple Silicon)",
    macX64Btn: "下载 Intel (x64)",
    macUniversalBtn: "下载 Universal",
    winMsiBtn: "MSI 安装包",
    winMsiRarBtn: "MSI 压缩包 (RAR)",
    winPortableRarBtn: "便携版 (RAR)",
    soon: "即将上线",
    versionLabel: "当前版本",
    footerCopy: "© LocalLink · wbox.top",
    footerOfficial: "官网",
    footerPrivacy: "隐私政策"
  },
  "zh-Hant": {
    htmlLang: "zh-Hant",
    title: "LocalLink · 本地快連",
    brand: "LocalLink",
    brandSub: "本地快連",
    eyebrow: "區域網路 · 藍牙 · 零上雲",
    heroTitle: "四端互通，檔案秒傳",
    heroLead: "在 iOS、Android、macOS、Windows 之間本機發現、聊天與傳檔。資料留在你的裝置，不經過我們的伺服器。",
    ctaDownload: "選擇平台下載",
    ctaPrivacy: "隱私政策",
    platformsTitle: "下載 LocalLink",
    platformsLead: "商店連結就緒後會自動顯示；也可先使用安裝包。",
    feat1Title: "區域網路發現",
    feat1Body: "同一 Wi‑Fi / 熱點下自動發現附近裝置，一鍵開聊。",
    feat2Title: "藍牙補位",
    feat2Body: "無公網、弱 Wi‑Fi 時也能用 BLE 發現並傳輸。",
    feat3Title: "隱私本機",
    feat3Body: "聊天與檔案走裝置間直連，不上雲、不留檔。",
    iosName: "iPhone / iPad",
    iosDesc: "IPA 安裝包",
    androidName: "Android",
    androidDesc: "Google Play 或安裝包",
    macName: "macOS",
    macDesc: "ARM64 / Intel / Universal",
    winName: "Windows",
    winDesc: "MSI / RAR / 便攜版",
    storeBtn: "前往商店",
    directBtn: "下載安裝包",
    macArm64Btn: "下載 ARM64 (Apple Silicon)",
    macX64Btn: "下載 Intel (x64)",
    macUniversalBtn: "下載 Universal",
    winMsiBtn: "MSI 安裝包",
    winMsiRarBtn: "MSI 壓縮包 (RAR)",
    winPortableRarBtn: "便攜版 (RAR)",
    soon: "即將上線",
    versionLabel: "目前版本",
    footerCopy: "© LocalLink · wbox.top",
    footerOfficial: "官網",
    footerPrivacy: "隱私政策"
  },
  en: {
    htmlLang: "en",
    title: "LocalLink",
    brand: "LocalLink",
    brandSub: "",
    eyebrow: "LAN · Bluetooth · No cloud",
    heroTitle: "Four platforms. One local link.",
    heroLead: "Discover nearby devices, chat, and transfer files across iOS, Android, macOS, and Windows — peer to peer, on your network.",
    ctaDownload: "Get the apps",
    ctaPrivacy: "Privacy",
    platformsTitle: "Download LocalLink",
    platformsLead: "Store links appear when ready. Direct installers may also be available.",
    feat1Title: "LAN discovery",
    feat1Body: "Find nearby devices on the same Wi‑Fi or hotspot and start chatting instantly.",
    feat2Title: "Bluetooth fallback",
    feat2Body: "When Wi‑Fi is weak or offline, BLE still helps you discover and transfer.",
    feat3Title: "Private by design",
    feat3Body: "Chats and files stay on-device links — no cloud upload from us.",
    iosName: "iPhone / iPad",
    iosDesc: "IPA package",
    androidName: "Android",
    androidDesc: "Google Play or APK",
    macName: "macOS",
    macDesc: "ARM64 / Intel / Universal",
    winName: "Windows",
    winDesc: "MSI / RAR / Portable",
    storeBtn: "Open store",
    directBtn: "Download package",
    macArm64Btn: "Download ARM64 (Apple Silicon)",
    macX64Btn: "Download Intel (x64)",
    macUniversalBtn: "Download Universal",
    winMsiBtn: "MSI installer",
    winMsiRarBtn: "MSI archive (RAR)",
    winPortableRarBtn: "Portable (RAR)",
    soon: "Coming soon",
    versionLabel: "Version",
    footerCopy: "© LocalLink · wbox.top",
    footerOfficial: "Website",
    footerPrivacy: "Privacy"
  }
};

function detectLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q && I18N[q]) return q;
  const saved = localStorage.getItem("ll-lang");
  if (saved && I18N[saved]) return saved;
  const nav = (navigator.language || "en").toLowerCase();
  if (nav.startsWith("zh")) {
    if (nav.includes("tw") || nav.includes("hk") || nav.includes("hant") || nav.includes("mo")) {
      return "zh-Hant";
    }
    return "zh-CN";
  }
  return "en";
}

function applyLang(lang) {
  const t = I18N[lang] || I18N.en;
  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] != null) el.textContent = t[key];
  });
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });
  localStorage.setItem("ll-lang", lang);
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
}

async function loadDownloads() {
  try {
    const res = await fetch("./downloads.json", { cache: "no-store" });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function withSize(label, size) {
  const s = (size || "").trim();
  return s ? `${label} · ${s}` : label;
}

function platformActions(cfg, t) {
  const store = cfg?.store?.trim();
  const direct = cfg?.direct?.trim();
  const directs = Array.isArray(cfg?.directs) ? cfg.directs : [];
  const parts = [];
  if (store) {
    parts.push(`<a class="store" href="${store}" target="_blank" rel="noopener">${t.storeBtn}</a>`);
  }
  if (directs.length) {
    for (const item of directs) {
      const url = item?.url?.trim();
      if (!url) continue;
      const label = (item.labelKey && t[item.labelKey]) || item.label || t.directBtn;
      parts.push(`<a class="direct" href="${url}" download>${withSize(label, item.size)}</a>`);
    }
  } else if (direct) {
    parts.push(`<a class="direct" href="${direct}" download>${withSize(t.directBtn, cfg.size)}</a>`);
  }
  if (!parts.length) {
    parts.push(`<span class="soon">${t.soon}</span>`);
  }
  return parts.join("");
}

function renderPlatforms(meta, lang) {
  const t = I18N[lang] || I18N.en;
  const p = meta?.platforms || {};
  const items = [
    { id: "ios", name: t.iosName, desc: t.iosDesc, icon: "apple" },
    { id: "android", name: t.androidName, desc: t.androidDesc, icon: "android" },
    { id: "mac", name: t.macName, desc: t.macDesc, icon: "mac" },
    { id: "windows", name: t.winName, desc: t.winDesc, icon: "win" }
  ];
  const root = document.getElementById("platforms");
  if (!root) return;
  root.innerHTML = items
    .map(
      (it) => `
    <article class="platform" data-platform="${it.id}">
      <div class="platform-icon" aria-hidden="true">${icons[it.icon]}</div>
      <h3>${it.name}</h3>
      <p class="desc">${it.desc}</p>
      <div class="actions">${platformActions(p[it.id], t)}</div>
    </article>`
    )
    .join("");

  const ver = document.getElementById("version");
  if (ver && meta?.version) {
    ver.textContent = `${t.versionLabel} ${meta.version}`;
  }
}

const icons = {
  apple: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.3.7 1 1.5 2.1 2.6 2 .1 0 .2 0 .4-.1.9-.3 1.3-1 2.4-1s1.4.7 2.4 1c.2.1.3.1.5.1 1.1-.1 1.9-1.1 2.6-2.1.8-1.1 1.1-2.2 1.1-2.2s-2.1-.8-2.1-3.1zM14.7 6.5c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.3 1.2-.5.6-1 1.5-.9 2.3.9.1 1.8-.4 2.4-1.1z"/></svg>`,
  android: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.5l1.3-2.3c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2l-1.3 2.3A8.3 8.3 0 0 0 12 8c-1.5 0-2.9.4-4.1 1.2L6.6 6.9c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5l1.3 2.3C5.2 11 3.9 13.2 3.9 15.7v.5h16.2v-.5c0-2.5-1.3-4.7-3.5-6.2zM8.6 13.4a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zm6.8 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8zM4.8 17h14.4v1.2c0 .9-.7 1.6-1.6 1.6h-.6V22h-1.7v-2.2H9.1V22H7.4v-2.2h-.6c-.9 0-1.6-.7-1.6-1.6V17h-.4z"/></svg>`,
  mac: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16H13l2.2 3.2c.2.2.1.5-.2.5h-1.5c-.2 0-.3-.1-.4-.2L11 16H5.5A1.5 1.5 0 0 1 4 14.5v-9z"/></svg>`,
  win: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5.5l8.2-1.1v7.1H3V5.5zm9.2-1.3L21 3v8.5h-8.8V4.2zM3 12.5h8.2V19L3 17.9v-5.4zm9.2 0H21V20l-8.8-1.3v-6.2z"/></svg>`
};

document.addEventListener("DOMContentLoaded", async () => {
  let lang = detectLang();
  applyLang(lang);
  const meta = await loadDownloads();
  renderPlatforms(meta, lang);

  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      applyLang(lang);
      renderPlatforms(meta, lang);
    });
  });
});
