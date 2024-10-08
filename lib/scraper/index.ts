import axios from "axios";
import * as cheerio from "cheerio";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;

  const username = String(process.env.BRIGHT_DATA_USERNAME);
  const password = String(process.env.BRIGHT_DATA_PASSWORD);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;

  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  };

  try {
    // Fetch the product page
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);
    // const currentPrice = extractPrice(
    //   $(".priceToPay span.a-price-whole"),
    //   $("a.size.base.a-color-price"),
    //   $(".a-button-selected .a-color-base"),
    //   $(".a-price.a-text-price")
    // );

    //Extract the product title
    const title = $("#productTitle").text().trim();
    const currentPrice = $(
      "div.a-section.a-spacing-none.aok-align-center.aok-relative .aok-offscreen"
    )
      .text()
      .trim();
    const originalPrice = $("span.a-price.a-text-price .a-offscreen")
      .text()
      .trim();
    console.log(
      `title: ${title}`,
      `currentPrice: ${currentPrice}`,
      `originalPrice: ${originalPrice}`
    );
  } catch (error: any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
