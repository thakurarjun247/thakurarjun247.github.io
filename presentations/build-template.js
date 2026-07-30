const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
p.layout = "W";
p.author = "Arjun Thakur"; p.company = "arjunthakur.dev";

const BG = "0B0F15", BG_DEEP = "06090D", CARD = "11161E", BORDER = "1F2937";
const CYAN = "22D3EE", TEAL = "0E7490", WHITE = "E6EDF3", SECOND = "AAB4C0", MUTED = "8592A3";
const SANS = "Calibri";
const DARK = { color: BG }, DEEP = { color: BG_DEEP };

function bullets(items, gap = 16) {
  const arr = [];
  items.forEach((it) => {
    arr.push({ text: "▸  ", options: { color: CYAN, bold: true, fontFace: SANS } });
    arr.push({ text: it, options: { color: WHITE, fontFace: SANS, breakLine: true, paraSpaceAfter: gap } });
  });
  return arr;
}
function kicker(s, txt, x, y) { s.addText(txt, { x, y, w: 10, h: 0.4, fontFace: SANS, fontSize: 14, bold: true, color: CYAN, charSpacing: 4 }); }
function imageFrame(s, x, y, w, h, caption) {
  s.addShape(p.ShapeType.roundRect, { x, y, w, h, rectRadius: 0.1, fill: { color: CARD }, line: { color: BORDER, width: 1.25 } });
  const cx = x + w / 2, cy = y + h / 2 - 0.2;
  s.addShape(p.ShapeType.ellipse, { x: cx - 1.0, y: cy - 0.75, w: 0.5, h: 0.5, fill: { color: TEAL } });
  s.addShape(p.ShapeType.triangle, { x: cx - 1.1, y: cy - 0.15, w: 1.3, h: 0.85, fill: { color: "24303C" } });
  s.addShape(p.ShapeType.triangle, { x: cx - 0.1, y: cy - 0.35, w: 1.4, h: 1.05, fill: { color: "2E3B49" } });
  s.addText(caption, { x: x + 0.2, y: y + h - 0.75, w: w - 0.4, h: 0.5, align: "center", fontFace: SANS, fontSize: 11, italic: true, color: MUTED });
}
function contactCard(s, x, y, w, icon, label, value, valColor) {
  s.addShape(p.ShapeType.roundRect, { x, y, w, h: 0.95, rectRadius: 0.09, fill: { color: CARD }, line: { color: BORDER, width: 1 } });
  s.addText(icon, { x: x + 0.14, y: y + 0.02, w: 0.7, h: 0.9, align: "center", valign: "middle", fontFace: SANS, fontSize: 20, color: CYAN });
  s.addText(label, { x: x + 0.82, y: y + 0.16, w: w - 0.95, h: 0.3, fontFace: SANS, fontSize: 10.5, bold: true, color: SECOND, charSpacing: 1, margin: 0 });
  s.addText(value, { x: x + 0.82, y: y + 0.44, w: w - 0.95, h: 0.35, fontFace: SANS, fontSize: 13, color: valColor, margin: 0 });
}
function contactRow(s, y) {
  contactCard(s, 0.9, y, 3.9, "✉", "EMAIL", "arjun@arjunthakur.dev", CYAN);
  contactCard(s, 4.94, y, 3.35, "◉", "WEBSITE", "arjunthakur.dev", CYAN);
  contactCard(s, 8.43, y, 4.0, "■", "LINKEDIN", "in/thakurarjun247", WHITE);
}

// ===== 1. TITLE =====
let s = p.addSlide(); s.background = DEEP;
kicker(s, "CATEGORY · TRACK", 0.92, 0.85);
s.addText([
  { text: "Presentation ", options: { color: WHITE } },
  { text: "Title", options: { color: CYAN } },
], { x: 0.88, y: 1.55, w: 11.7, h: 1.5, fontFace: SANS, fontSize: 54, bold: true });
s.addText("Subtitle — one line describing the session", { x: 0.94, y: 3.05, w: 11, h: 0.5, fontFace: SANS, fontSize: 18, italic: true, color: MUTED });
s.addText([
  { text: "Presented by ", options: { color: SECOND } },
  { text: "Arjun Thakur", options: { color: WHITE, bold: true } },
], { x: 0.92, y: 4.3, w: 11.5, h: 0.5, fontFace: SANS, fontSize: 24 });
s.addText("Principal AI Engineer  ·  AI Trainer  ·  Agentic AI Developer", { x: 0.94, y: 4.9, w: 11.5, h: 0.4, fontFace: SANS, fontSize: 15, color: SECOND });
contactRow(s, 6.05);
s.addNotes("TITLE SLIDE. Replace 'Presentation Title', the kicker (CATEGORY · TRACK), and the subtitle. Name / role / contact are your fixed brand — leave as is.");

// ===== 2. AGENDA =====
s = p.addSlide(); s.background = DARK;
s.addText("Agenda", { x: 0.9, y: 0.7, w: 8, h: 0.8, fontFace: SANS, fontSize: 40, bold: true, color: WHITE });
s.addText(bullets(["Agenda item one","Agenda item two","Agenda item three","Agenda item four"], 16), { x: 0.9, y: 1.95, w: 7.4, h: 4.4, fontFace: SANS, fontSize: 20, color: WHITE, valign: "top", objectName: "animList" });
s.addShape(p.ShapeType.roundRect, { x: 8.9, y: 1.95, w: 3.5, h: 4.35, rectRadius: 0.12, fill: { color: CARD }, line: { color: BORDER, width: 1.25 } });
s.addText("04", { x: 8.9, y: 2.5, w: 3.5, h: 1.4, align: "center", fontFace: SANS, fontSize: 84, bold: true, color: CYAN });
s.addText("items / modules", { x: 8.9, y: 4.0, w: 3.5, h: 0.5, align: "center", fontFace: SANS, fontSize: 15, color: SECOND });
s.addNotes("AGENDA SLIDE. Bullets fade in one per click. Update the item count in the card.");

// ===== 3. SECTION DIVIDER =====
s = p.addSlide(); s.background = DEEP;
s.addText("01", { x: 0.82, y: 0.55, w: 5, h: 2.6, fontFace: SANS, fontSize: 150, bold: true, color: TEAL });
kicker(s, "SECTION", 0.95, 3.55);
s.addText("Section Title", { x: 0.9, y: 3.95, w: 11.5, h: 1.1, fontFace: SANS, fontSize: 46, bold: true, color: WHITE });
s.addText("Section subtitle — one line on what this part covers", { x: 0.94, y: 5.1, w: 11, h: 0.5, fontFace: SANS, fontSize: 17, italic: true, color: MUTED });
s.addNotes("SECTION DIVIDER. Duplicate for each new section; change the number, kicker, and title.");

// ===== 4. CONTENT + IMAGE (image right) =====
s = p.addSlide(); s.background = DARK;
s.addText("Slide Title", { x: 0.9, y: 0.7, w: 11.5, h: 0.8, fontFace: SANS, fontSize: 34, bold: true, color: WHITE });
s.addText(bullets(["Bullet point one","Bullet point two","Bullet point three","Bullet point four"], 15), { x: 0.9, y: 2.0, w: 6.4, h: 4.4, fontFace: SANS, fontSize: 19, color: WHITE, valign: "top", objectName: "animList" });
imageFrame(s, 7.7, 1.95, 4.7, 4.5, "Image placeholder");
s.addNotes("CONTENT SLIDE (image right). Bullets fade in one at a time. Drop your image into the frame.");

// ===== 5. CONTENT + IMAGE (image left) =====
s = p.addSlide(); s.background = DARK;
s.addText("Slide Title", { x: 0.9, y: 0.7, w: 11.5, h: 0.8, fontFace: SANS, fontSize: 34, bold: true, color: WHITE });
imageFrame(s, 0.9, 1.95, 4.7, 4.5, "Image placeholder");
s.addText(bullets(["Bullet point one","Bullet point two","Bullet point three"], 16), { x: 6.1, y: 2.0, w: 6.3, h: 4.4, fontFace: SANS, fontSize: 19, color: WHITE, valign: "top", objectName: "animList" });
s.addNotes("CONTENT SLIDE (image left). Alternate layout so the deck doesn't feel repetitive.");

// ===== 6. VIDEO =====
s = p.addSlide(); s.background = DARK;
s.addText("Video / Demo", { x: 0.9, y: 0.6, w: 11.5, h: 0.8, fontFace: SANS, fontSize: 34, bold: true, color: WHITE });
const vx = 2.75, vy = 1.7, vw = 7.8, vh = 4.4;
s.addShape(p.ShapeType.roundRect, { x: vx, y: vy, w: vw, h: vh, rectRadius: 0.1, fill: { color: BG_DEEP }, line: { color: BORDER, width: 1.5 } });
const pcx = vx + vw / 2, pcy = vy + vh / 2;
s.addShape(p.ShapeType.ellipse, { x: pcx - 0.6, y: pcy - 0.6, w: 1.2, h: 1.2, fill: { color: CYAN } });
s.addShape(p.ShapeType.triangle, { x: pcx - 0.18, y: pcy - 0.28, w: 0.56, h: 0.56, fill: { color: BG_DEEP }, rotate: 90 });
s.addText("Insert your video (Insert ▸ Video) or embed a demo link", { x: vx, y: vy + vh - 0.6, w: vw, h: 0.45, align: "center", fontFace: SANS, fontSize: 12, italic: true, color: MUTED });
s.addNotes("VIDEO / DEMO SLIDE. Insert > Video into the frame, or run a live demo with a recorded fallback.");

// ===== 7. CONTENT (full-width bullets) =====
s = p.addSlide(); s.background = DEEP;
s.addText("Slide Title", { x: 0.9, y: 0.85, w: 11.5, h: 0.9, fontFace: SANS, fontSize: 40, bold: true, color: WHITE });
s.addText(bullets(["Key point one","Key point two","Key point three"], 20), { x: 0.9, y: 2.3, w: 11.2, h: 4, fontFace: SANS, fontSize: 22, color: WHITE, valign: "top", objectName: "animList" });
s.addNotes("CONTENT SLIDE (full-width bullets), e.g. key takeaways or a recap. Bullets fade in on click.");

// ===== 8. THANK YOU =====
s = p.addSlide(); s.background = DEEP;
kicker(s, "THANK YOU", 0.9, 2.05);
s.addText("Thank You", { x: 0.9, y: 2.45, w: 11.5, h: 1.3, fontFace: SANS, fontSize: 60, bold: true, color: WHITE });
s.addText("Closing line — call to action goes here", { x: 0.94, y: 3.85, w: 11.5, h: 0.6, fontFace: SANS, fontSize: 22, color: CYAN });
contactRow(s, 5.5);
s.addNotes("THANK YOU SLIDE. Replace the closing line. Contact stays fixed.");

// ===== 9. Q&A =====
s = p.addSlide(); s.background = DEEP;
kicker(s, "Q & A", 0.9, 1.5);
s.addText("Questions?", { x: 0.9, y: 1.9, w: 11.5, h: 1.3, fontFace: SANS, fontSize: 58, bold: true, color: WHITE });
contactRow(s, 4.2);
s.addText("Slides & resources: arjunthakur.dev", { x: 0.94, y: 6.4, w: 11, h: 0.5, fontFace: SANS, fontSize: 14, italic: true, color: MUTED });
s.addNotes("Q&A SLIDE. Keep contact + where to find the slides on screen.");

p.writeFile({ fileName: "Arjun-Thakur-Training-Template.pptx" }).then((f) => console.log("WROTE", f));
