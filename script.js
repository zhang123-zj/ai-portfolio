const projectData = {
  t2v: {
    meta: "PROJECT 01 · T2V EVALUATION · EDUCATION",
    title: "T2V 音视频生成模型评测",
    intro: "在教育动画场景下，通过端侧、线上迭代等多种评测手段开展 GSB 横向评测，分析不同模型在内容、画面与音画协同上的效果差异。",
    blocks: [
      ["项目背景", "围绕教育动画生成效果，对不同模型版本进行横向比较，重点评估内容遵循与准确性、视频质量与一致性，以及音画协调表现，为版本迭代建立可解释的评测依据。"],
      ["我的职责", "结合项目需求明确评测目标，参与评测规则与 QA 文档补充；对接外部标注团队，负责规则培训、试标校准、过程答疑、质量复核与返修跟进。"],
      ["项目流程", "目标对齐 → 评测维度与 QA 补充 → 测试 Prompt 完善 → 候选数据扩充与清洗 → 试标校准 → 正式评测 → 质量复核 → 异常归因与报告整理。"],
      ["方法与工具", "采用 GSB 横向评测比较模型效果；使用 Dify 扩充教育场景候选数据，并完成 Prompt 筛选、去重和内容校验；通过试标、抽检与返修闭环控制交付质量。"],
      ["遇到的问题", "试标阶段存在判断分歧，复杂场景的判定边界不够清晰；候选数据存在重复或覆盖不足；外部团队在执行过程中容易出现标准漂移。"],
      ["解决方案", "持续补充规则边界与 QA 示例，通过培训和试标校准统一口径；围绕教育场景补充测试 Prompt，并对 Dify 扩充数据进行筛选、去重和内容校验；结合复核结果推进返修。"],
      ["最终成果", "汇总不同模型的 GSB 结果与高频问题，完成异常归因和典型 Case 整理，协助评测报告输出，为后续模型优化与训练数据补充提供参考。"]
    ],
    tools: ["T2V", "GSB", "Dify", "Prompt", "QA Guideline", "Data Curation", "Vendor QA"]
  },
  tts: {
    meta: "PROJECT 02 · TTS EVALUATION · AI LEARNING",
    title: "TTS 语音模型评测",
    intro: "面向 AI 伴学场景，对内部 TTS 与外部模型开展效果评测，从发音、自然度、韵律与音色稳定性等维度定位主要语音问题。",
    blocks: [
      ["项目背景", "AI 伴学对语音的准确性、自然度和稳定性要求较高，需要对内部 TTS 与外部模型进行统一口径的对比评测，为后续模型优化提供依据。"],
      ["我的职责", "结合试评结果细化评分标准，补充参考音频与 QA 说明；负责评测结果复核，纠正评分偏差、漏判和标签归类问题；参与结果整理与报告输出。"],
      ["项目流程", "模型与样本确认 → 评测维度拆解 → 试评与标准校准 → 正式评分 → 结果复核 → 高频问题归类 → 典型样本分析 → 报告输出。"],
      ["方法与工具", "围绕发音准确性、语音自然度、韵律表现和音色稳定性进行分维度评分；通过参考音频、QA 说明、交叉复核和典型样本对比统一评审口径。"],
      ["遇到的问题", "语音评分主观性较强，档位边界容易混淆；评测中可能出现发音、断句、自然度与音色异常的漏判，以及评分或标签归类偏差。"],
      ["解决方案", "基于试评争议细化各评分档位，补充参考音频和正反例说明；在结果复核中重点排查高风险问题，并结合典型样本回校评分与标签。"],
      ["最终成果", "形成不同模型的分维度评分与高频问题汇总，结合典型样本呈现模型差异，完成评测结果整理并参与报告输出。"]
    ],
    tools: ["TTS", "Speech QA", "Scoring Rubric", "Reference Audio", "Quality Review", "Case Analysis"]
  },
  vqa: {
    meta: "PROJECT 03 · MULTIMODAL VQA · EDUCATION",
    title: "多模态 VQA 评测",
    intro: "面向拍图问答等教育产品场景，对内部多模态模型与外部模型开展 VQA 对比评测，分析视觉理解、图表空间理解与学科推理能力差异。",
    blocks: [
      ["项目背景", "评测覆盖教材插图、试题图片、实验图、统计图表与几何图等教育内容，需要同时考察视觉识别与理解、图表与空间理解，以及问题理解与学科推理能力。"],
      ["我的职责", "基于算法侧已有评测数据并结合开源 Benchmark 补充教育类 VQA 样本；对图片、Query 与标准答案进行清洗校验；结合试评和质检争议补充判定边界。"],
      ["项目流程", "能力维度拆解 → 既有数据盘点 → Benchmark 样本补充 → 图片与文本清洗 → 标准答案校验 → 题型场景分层 → 试评质检 → 争议 Case 复盘 → 评测集定版。"],
      ["方法与工具", "使用教育类 VQA Benchmark 与内部数据构建统一评测集；围绕题型、学科和视觉场景进行分层，结合 OCR、答案一致性与推理链检查开展质量校验。"],
      ["遇到的问题", "存在答案正确但推理错误、语义一致但表述不同，以及 OCR 识别错误引发后续推理偏差等边界 Case，容易导致评审口径不一致。"],
      ["解决方案", "将争议 Case 按答案、推理、语义表达和 OCR 错误链路进行拆分，补充对应判定原则与示例；通过试评和质检复盘持续统一评测标准。"],
      ["最终成果", "完善教育类题型与场景覆盖，形成经过图片、Query 和标准答案校验的统一 VQA 评测集，并沉淀可复用的争议 Case 判定边界。"]
    ],
    tools: ["Multimodal VQA", "Benchmark", "OCR", "Dataset Curation", "Answer QA", "Case Taxonomy"]
  }
};

const hero = document.querySelector(".hero-scroll");
const bgWrapper = document.getElementById("bgWrapper");
const canvas = document.getElementById("mainCanvas");
const context = canvas.getContext("2d");
const videos = [document.getElementById("v1"), document.getElementById("v2"), document.getElementById("v3")];
const durations = [10, 10, 10];
const ready = [false, false, false];
const loadingScreen = document.getElementById("loadingScreen");
let targetProgress = 0;
let currentProgress = 0;
let canvasReady = false;
let firstFrameVisible = false;
let animationFrame = 0;

function clamp(value, min = 0, max = 1) { return Math.max(min, Math.min(max, value)); }
function range(progress, start, end) { return clamp((progress - start) / (end - start)); }
function smoothstep(value) { return value * value * (3 - 2 * value); }
function fadeWindow(progress, inStart, inEnd, outStart, outEnd) {
  if (progress < inStart || progress > outEnd) return 0;
  if (progress <= inEnd) return smoothstep(range(progress, inStart, inEnd));
  if (progress < outStart) return 1;
  return 1 - smoothstep(range(progress, outStart, outEnd));
}
function transformElement(element, opacity, x = 0, y = 0, blur = 0) {
  element.style.opacity = opacity;
  element.style.transform = `translate3d(${x}px,${y}px,0)`;
  element.style.filter = `blur(${blur}px)`;
  element.style.pointerEvents = opacity > .9 ? "auto" : "none";
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(window.innerWidth * 1.1 * dpr);
  canvas.height = Math.round(window.innerHeight * 1.1 * dpr);
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvasReady = true;
}

function showFirstFrame() {
  if (firstFrameVisible) return;
  firstFrameVisible = true;
  canvas.classList.add("is-ready");
  window.setTimeout(() => loadingScreen.classList.add("hidden"), 120);
}

function drawVideoFrame(progress) {
  if (!canvasReady) return false;
  const index = progress < .34 ? 0 : progress < .68 ? 1 : 2;
  const local = index === 0 ? range(progress, 0, .34) : index === 1 ? range(progress, .34, .68) : range(progress, .68, 1);
  const video = videos[index];
  if (!ready[index] || video.readyState < 2) return false;
  const desiredTime = local * Math.max(.1, durations[index] - .08);
  if (!video.seeking && Math.abs(video.currentTime - desiredTime) > .045) {
    try { video.currentTime = desiredTime; } catch (error) { /* Browser will retry on the next frame. */ }
  }
  const cw = canvas.width;
  const ch = canvas.height;
  const vw = video.videoWidth || 1920;
  const vh = video.videoHeight || 1080;
  const scale = Math.max(cw / vw, ch / vh);
  const dw = vw * scale;
  const dh = vh * scale;
  try {
    context.drawImage(video, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    if (index === 0 && progress < .34) showFirstFrame();
    return true;
  } catch (error) {
    return false;
  }
}

function updateHero(progress) {
  const heroCard = document.getElementById("heroCard");
  const brand = document.getElementById("brandHeader");
  const nav = document.getElementById("heroNav");
  const statementWrap = document.getElementById("heroStatements");
  const heroExit = document.getElementById("heroExit");
  const introFade = 1 - smoothstep(range(progress, .03, .17));
  transformElement(heroCard, introFade, -30 * (1 - introFade), 34 * (1 - introFade), 14 * (1 - introFade));
  transformElement(brand, introFade, -22 * (1 - introFade), -24 * (1 - introFade), 9 * (1 - introFade));
  transformElement(nav, introFade, 0, -24 * (1 - introFade), 9 * (1 - introFade));

  statementWrap.style.visibility = progress > .16 && progress < .76 ? "visible" : "hidden";
  const statementWindows = [[.18,.23,.34,.39],[.36,.41,.52,.57],[.54,.59,.70,.75]];
  statementWrap.querySelectorAll("p").forEach((item, index) => {
    const values = statementWindows[index];
    const opacity = fadeWindow(progress, ...values);
    const direction = progress < values[1] ? 1 : -1;
    transformElement(item, opacity, 0, direction * 80 * (1 - opacity), 18 * (1 - opacity));
  });

  const exitOpacity = fadeWindow(progress, .78, .84, 1, 1.01);
  heroExit.style.visibility = progress > .76 ? "visible" : "hidden";
  transformElement(heroExit, exitOpacity, 0, 65 * (1 - exitOpacity), 15 * (1 - exitOpacity));
  drawVideoFrame(progress);
}

function tick() {
  currentProgress += (targetProgress - currentProgress) * .075;
  updateHero(currentProgress);
  animationFrame = requestAnimationFrame(tick);
}

function updateScroll() {
  const heroRect = hero.getBoundingClientRect();
  const heroScrollable = hero.offsetHeight - window.innerHeight;
  targetProgress = clamp(-heroRect.top / heroScrollable);
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById("scrollProgress").style.width = `${clamp(window.scrollY / docHeight) * 100}%`;
}

videos.forEach((video, index) => {
  const updateDuration = () => {
    if (Number.isFinite(video.duration) && video.duration > 0) durations[index] = video.duration;
  };
  const requestInitialFrame = () => {
    updateDuration();
    if (index !== 0 || video.readyState >= 2 || video.seeking) return;
    try { video.currentTime = Math.min(.08, Math.max(0, video.duration - .08)); } catch (error) { /* The data event will retry. */ }
  };
  const markPlayable = () => {
    updateDuration();
    ready[index] = true;
    drawVideoFrame(currentProgress);
  };
  video.addEventListener("loadedmetadata", requestInitialFrame, { once: true });
  video.addEventListener("loadeddata", markPlayable, { once: true });
  video.addEventListener("canplay", markPlayable, { once: true });
  video.addEventListener("seeked", () => drawVideoFrame(currentProgress));
  video.addEventListener("error", () => {
    ready[index] = false;
    if (index === 0) loadingScreen.classList.add("hidden");
  });
  if (video.readyState >= 2) markPlayable();
});
videos[0].load();
setTimeout(() => loadingScreen.classList.add("hidden"), 8000);

window.addEventListener("resize", resizeCanvas);
window.addEventListener("scroll", updateScroll, { passive: true });
window.addEventListener("mousemove", (event) => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const x = (event.clientX / window.innerWidth - .5) * -26;
  const y = (event.clientY / window.innerHeight - .5) * -26;
  bgWrapper.style.transform = `translate3d(${x}px,${y}px,0)`;
}, { passive: true });

document.getElementById("heroCta").addEventListener("click", () => {
  window.scrollTo({ top: hero.offsetHeight * .22, behavior: "smooth" });
});

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  mobileMenu.classList.toggle("open", open);
  mobileMenu.setAttribute("aria-hidden", String(!open));
});
mobileMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: .12, rootMargin: "0px 0px -8%" });
document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

const dialog = document.getElementById("projectDialog");
const dialogGrid = document.getElementById("dialogGrid");
const dialogTools = document.getElementById("dialogTools");
function openProject(key) {
  const project = projectData[key];
  if (!project) return;
  document.getElementById("dialogMeta").textContent = project.meta;
  document.getElementById("dialogTitle").textContent = project.title;
  document.getElementById("dialogIntro").textContent = project.intro;
  dialogGrid.replaceChildren(...project.blocks.map(([title, copy]) => {
    const block = document.createElement("section");
    block.className = "dialog-block";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const paragraph = document.createElement("p");
    paragraph.textContent = copy;
    block.append(heading, paragraph);
    return block;
  }));
  dialogTools.replaceChildren(...project.tools.map(tool => {
    const tag = document.createElement("span");
    tag.textContent = tool;
    return tag;
  }));
  dialog.showModal();
  document.body.classList.add("dialog-open");
}
document.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
function closeDialog() { dialog.close(); document.body.classList.remove("dialog-open"); }
document.getElementById("dialogClose").addEventListener("click", closeDialog);
dialog.addEventListener("click", event => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener("cancel", event => { event.preventDefault(); closeDialog(); });

const aigcDialog = document.getElementById("aigcDialog");
const aigcDialogClose = document.getElementById("aigcDialogClose");
const aigcCaseVideo = document.getElementById("aigcCaseVideo");
const aigcCaseCard = document.querySelector("[data-aigc-case]");
const workCardVideo = aigcCaseCard?.querySelector(".work-card-video");
const videoPositionKey = "aigc-film-01-cropped-position";

function readSavedVideoPosition() {
  try {
    const savedPosition = Number(localStorage.getItem(videoPositionKey));
    return Number.isFinite(savedPosition) ? savedPosition : 0;
  } catch (error) {
    return 0;
  }
}

function restoreVideoPosition() {
  const savedPosition = readSavedVideoPosition();
  if (savedPosition > 0 && savedPosition < aigcCaseVideo.duration - 1) aigcCaseVideo.currentTime = savedPosition;
}

function saveVideoPosition() {
  try { localStorage.setItem(videoPositionKey, String(aigcCaseVideo.currentTime)); }
  catch (error) { /* Playback still works when storage is unavailable. */ }
}

function openAigcCase() {
  workCardVideo?.pause();
  if (aigcCaseVideo.readyState >= 1) restoreVideoPosition();
  aigcDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeAigcCase() {
  saveVideoPosition();
  aigcCaseVideo.pause();
  aigcDialog.close();
  document.body.classList.remove("dialog-open");
}

if (aigcCaseCard && workCardVideo) {
  aigcCaseCard.addEventListener("pointerenter", () => {
    if (window.matchMedia("(hover: hover)").matches) workCardVideo.play().catch(() => {});
  });
  aigcCaseCard.addEventListener("pointerleave", () => workCardVideo.pause());
  aigcCaseCard.addEventListener("click", openAigcCase);
}
aigcCaseVideo.addEventListener("loadedmetadata", restoreVideoPosition, { once: true });
aigcCaseVideo.addEventListener("timeupdate", saveVideoPosition);
aigcCaseVideo.addEventListener("ended", () => {
  try { localStorage.removeItem(videoPositionKey); }
  catch (error) { /* No action needed. */ }
});
aigcDialogClose.addEventListener("click", closeAigcCase);
aigcDialog.addEventListener("click", event => { if (event.target === aigcDialog) closeAigcCase(); });
aigcDialog.addEventListener("cancel", event => { event.preventDefault(); closeAigcCase(); });

const videoPreviewDialog = document.getElementById("videoPreviewDialog");
const videoPreviewClose = document.getElementById("videoPreviewClose");
const videoPreviewPlayer = document.getElementById("videoPreviewPlayer");
const videoPreviewTitle = document.getElementById("videoPreviewTitle");
const videoPreviewMeta = document.getElementById("videoPreviewMeta");
let activePreviewPositionKey = "";

function readPreviewPosition() {
  if (!activePreviewPositionKey) return 0;
  try {
    const value = Number(localStorage.getItem(activePreviewPositionKey));
    return Number.isFinite(value) ? value : 0;
  } catch (error) {
    return 0;
  }
}

function savePreviewPosition() {
  if (!activePreviewPositionKey) return;
  try { localStorage.setItem(activePreviewPositionKey, String(videoPreviewPlayer.currentTime)); }
  catch (error) { /* Playback still works when storage is unavailable. */ }
}

function openVideoPreview(card) {
  const cardVideo = card.querySelector(".work-card-video");
  cardVideo?.pause();
  activePreviewPositionKey = `aigc-preview:${card.dataset.videoSrc}`;
  videoPreviewTitle.textContent = card.dataset.videoTitle;
  videoPreviewMeta.textContent = card.dataset.videoIndex;
  videoPreviewPlayer.poster = card.dataset.videoPoster;
  videoPreviewPlayer.src = card.dataset.videoSrc;
  videoPreviewPlayer.load();
  videoPreviewDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeVideoPreview() {
  savePreviewPosition();
  videoPreviewPlayer.pause();
  videoPreviewDialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelectorAll("[data-video-preview]").forEach(card => {
  const cardVideo = card.querySelector(".work-card-video");
  card.addEventListener("pointerenter", () => {
    if (window.matchMedia("(hover: hover)").matches) cardVideo.play().catch(() => {});
  });
  card.addEventListener("pointerleave", () => cardVideo.pause());
  card.addEventListener("click", () => openVideoPreview(card));
});

videoPreviewPlayer.addEventListener("loadedmetadata", () => {
  const savedPosition = readPreviewPosition();
  if (savedPosition > 0 && savedPosition < videoPreviewPlayer.duration - 1) videoPreviewPlayer.currentTime = savedPosition;
  videoPreviewPlayer.play().catch(() => {});
});
videoPreviewPlayer.addEventListener("timeupdate", savePreviewPosition);
videoPreviewPlayer.addEventListener("ended", () => {
  try { localStorage.removeItem(activePreviewPositionKey); }
  catch (error) { /* No action needed. */ }
});
videoPreviewClose.addEventListener("click", closeVideoPreview);
videoPreviewDialog.addEventListener("click", event => { if (event.target === videoPreviewDialog) closeVideoPreview(); });
videoPreviewDialog.addEventListener("cancel", event => { event.preventDefault(); closeVideoPreview(); });

const cursorDot = document.getElementById("cursorDot");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cursorInteractiveSelector = "a, button, [role='button'], .project-row, .work-card";
let cursorPointerX = -30;
let cursorPointerY = -30;
let cursorCurrentX = -30;
let cursorCurrentY = -30;
let cursorHasPosition = false;
let cursorMagnetTarget = null;

function updateCursorContext(target) {
  if (!cursorDot || !(target instanceof Element)) return;
  cursorMagnetTarget = target.closest(cursorInteractiveSelector);
  cursorDot.classList.toggle("is-expanded", Boolean(cursorMagnetTarget));
  cursorDot.classList.toggle("is-paper", Boolean(target.closest("#projects")));
}

function updateCursorAvailability() {
  const enabled = Boolean(cursorDot && finePointer.matches);
  document.body.classList.toggle("has-custom-cursor", enabled);
  if (!enabled) {
    cursorDot?.classList.remove("is-visible", "is-expanded", "is-paper");
    cursorMagnetTarget = null;
  }
}

function renderCursor() {
  if (cursorDot && finePointer.matches && cursorHasPosition) {
    let destinationX = cursorPointerX;
    let destinationY = cursorPointerY;

    if (cursorMagnetTarget && cursorMagnetTarget.isConnected && !reducedMotion.matches) {
      const rect = cursorMagnetTarget.getBoundingClientRect();
      destinationX += (rect.left + rect.width / 2 - cursorPointerX) * .12;
      destinationY += (rect.top + rect.height / 2 - cursorPointerY) * .12;
    }

    const follow = reducedMotion.matches ? 1 : .22;
    cursorCurrentX += (destinationX - cursorCurrentX) * follow;
    cursorCurrentY += (destinationY - cursorCurrentY) * follow;
    cursorDot.style.transform = `translate3d(${cursorCurrentX}px,${cursorCurrentY}px,0) translate(-50%,-50%)`;
  }
  requestAnimationFrame(renderCursor);
}

window.addEventListener("pointermove", event => {
  if (!finePointer.matches || event.pointerType === "touch") return;
  cursorPointerX = event.clientX;
  cursorPointerY = event.clientY;
  if (!cursorHasPosition) {
    cursorCurrentX = cursorPointerX;
    cursorCurrentY = cursorPointerY;
    cursorHasPosition = true;
  }
  cursorDot.classList.add("is-visible");
  updateCursorContext(event.target);
}, { passive: true });

window.addEventListener("pointerout", event => {
  if (!event.relatedTarget) cursorDot?.classList.remove("is-visible");
});

window.addEventListener("scroll", () => {
  if (!cursorHasPosition) return;
  updateCursorContext(document.elementFromPoint(cursorPointerX, cursorPointerY));
}, { passive: true });

finePointer.addEventListener?.("change", updateCursorAvailability);
updateCursorAvailability();
requestAnimationFrame(renderCursor);

resizeCanvas();
updateScroll();
cancelAnimationFrame(animationFrame);
tick();
