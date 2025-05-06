import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        args: ['--disable-features=HttpsFirstBalancedModeAutoEnable'],
    });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('http://www.gstatic.com/generate_204');

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    await page.waitForSelector("#email");
    // Enter email
    await page.type('#email', 'why@arewedoingthis.com');
    await page.click("#agreement_agree")
    await page.click("a.button-box.login")

    // Wait for the page to load
    await page.waitForNavigation();
    await page.waitForSelector('input[name="cmd"]');
    // Print the full title
    //console.log('The title of this blog post is "%s".', fullTitle);
    console.log("found logout button");

    await browser.close();
})(); 