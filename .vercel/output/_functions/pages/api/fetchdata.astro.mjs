import puppeteer from 'puppeteer';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const facebookData = [];
  const instagramData = [];
  const GENERAL_LABELS_SIZE = 5;
  const GENERAL_TABLE_SIZE = 11;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const URL = "https://lookerstudio.google.com/u/0/reporting/36960dab-5e03-4c64-8b14-cf4c76c61e40/page/p_pj1bqu80od?s=spVfW1z_NAs";
  await page.goto(URL, {
    waitUntil: "networkidle2"
    // Wait until the network is mostly idle
  });
  await Promise.all([
    page.waitForSelector("div.valueLabel", { timeout: 12e4 }),
    page.waitForSelector("div.cell", { timeout: 12e4 })
  ]);
  const valueLabelElements = await page.$$("div.valueLabel");
  const valueLabelCells = await page.$$("div.cell");
  const labels = ["Impresiones", "Reacciones", "Alcance", "Costo por reacción", "Reproducciones (15 seg)"];
  const generalLabelsData = await Promise.all(
    valueLabelElements.map((el) => page.evaluate((el2) => el2.textContent, el))
  );
  const generalLabels = () => {
    const arrayLabels = [];
    for (let i = 0; i < GENERAL_LABELS_SIZE; i++) {
      const row = { title: "", value: "" };
      Object.defineProperty(row, "title", { value: labels[i] });
      Object.defineProperty(row, "value", { value: generalLabelsData[i] });
      arrayLabels.push(row);
    }
    return arrayLabels;
  };
  const cellsLabels = await Promise.all(
    valueLabelCells.map(async (cell) => page.evaluate((el) => el.textContent, cell))
  );
  const arrayChunked = cellsLabels.reduce((acc, _, i) => {
    if (i % GENERAL_TABLE_SIZE === 0) {
      acc.push(cellsLabels.slice(i, i + GENERAL_TABLE_SIZE));
    }
    return acc;
  }, []);
  let isSectionTwo = false;
  for (let chunk of arrayChunked) {
    console.log(chunk);
    if (chunk[0] === "1.") {
      isSectionTwo = !isSectionTwo;
    }
    if (isSectionTwo) {
      instagramData.push(chunk);
    } else {
      facebookData.push(chunk);
    }
  }
  await browser.close();
  return new Response(
    JSON.stringify({
      generalLabels: generalLabels(),
      facebookData,
      instagramData
    })
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
