import puppeteer from "puppeteer"
import type { APIRoute } from "astro"

export const GET: APIRoute = async () => {
  const GENERAL_LABELS_SIZE: number = 5
  const GENERAL_TABLE_SIZE: number = 9
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const URL = "https://lookerstudio.google.com/u/0/reporting/36960dab-5e03-4c64-8b14-cf4c76c61e40/page/p_pj1bqu80od?s=spVfW1z_NAs"
  // Navigate to the page
  await page.goto(URL, {
    waitUntil: 'networkidle2', // Wait until the network is mostly idle
  });

  // Wait for at least one element with the class "valueLabel" to appear
  await Promise.all([
    page.waitForSelector('div.valueLabel', { timeout: 60000 }),
    page.waitForSelector('div.cell', { timeout: 60000 }),
  ])

  // Select all elements with the class "valueLabel"
  const valueLabelElements = await page.$$('div.valueLabel');
  const valueLabelCells = await page.$$("div.cell")

  // Extract the text content of each element
  const labels = ["Impresiones", "Reacciones", "Alcance", "Costo por reacción", "Reproducciones (15 seg)"]
  const generalLabelsData = await Promise.all(
    valueLabelElements.map(el => page.evaluate(el => el.textContent, el))
  );

  const generalLabels = () => {
    const arrayLabels: { [key: string]: string }[] = []
    for (let i: number = 0; i < GENERAL_LABELS_SIZE; i++) {
      const row: { [key: string]: string } = { title: "", value: "" }
      Object.defineProperty(row, "title", { value: labels[i] })
      Object.defineProperty(row, "value", { value: generalLabelsData[i] })
      arrayLabels.push(row)
    }
    return arrayLabels
  }

  const cellsLabels = await Promise.all(
    valueLabelCells.map(async cell => page.evaluate(el => el.textContent, cell))
  )

  const arrayChunked = cellsLabels.reduce((acc, _, i) => {
    if (i % GENERAL_TABLE_SIZE === 0) {
      acc.push(cellsLabels.slice(i, i + GENERAL_TABLE_SIZE));
    }
    return acc;
  }, []);

  await browser.close();

  return new Response(
    JSON.stringify({
      generalLabels: generalLabels(),
      metaTables: arrayChunked
    })
  )
}
