import { test, expect,chromium } from '@playwright/test'

test.describe.only('Visual Regression Testing Demo', () => {
  
test.only('TC001 - verify home page canvas, verify hamburger menu content, Verify Play screen canvas - PASS scenario', async ({ page }) => {
  
  // navigate to URL english
    await page.goto('https://games-eu.boldplay.com/games/games/bookofamduat/index.html?language=en&playerId=player583466');
  
     await page.waitForLoadState('networkidle');
     await page.waitForLoadState('domcontentloaded');
  
    await page.waitForTimeout(25000);
    
    await page.waitForSelector("//*[@id='gameStage']//canvas");
  
    const pageElement = await page.$("//*[@id='gameStage']//canvas")
  
    // verify Home page canvas image
    expect(await pageElement!.screenshot()).toMatchSnapshot('1Canvas-game-page-canvas.png',{maxDiffPixels:4500});
    //expect(await pageElement!.screenshot()).toMatchSnapshot('1Canvas-game-page-canvas.png',{maxDiffPixelRatio:0.01})
  
    
    // click on Hamburger menu
    await page.locator('canvas').click({
      position: {
        x: 1222,
        y: 61
      }
    });
  
    await page.waitForTimeout(5000);
  
    // Verify expanded Hamburger menu content
    const text1 = await page.textContent("//*[@id='gameName']")
    const text2 = await page.textContent("//*[@id='rulesText']")
  
    expect(text1!).toBe("Book of Amduat™");
    expect(text2!).toBe("GAME RULES");
  
    // click on cross button
    await page.locator('#panel #close_button').click();
  
  // click on play button
    await page.locator('canvas').click({
        position: {
          x: 654,
          y: 652
        }
      });
  
      // verify play page canvas image
        expect(await pageElement!.screenshot()).toMatchSnapshot('2Canvas-game-page-canvas.png',{maxDiffPixelRatio:0.10});
  
    
  })

  test.only('TC002 - verify home page canvas, es canvas against en - FAIL scenario', async ({ page }) => {
    // navigate to URL spanish

    await page.goto('https://games-eu.boldplay.com/games/games/bookofamduat/index.html?language=es&playerId=player583466');
  
     await page.waitForLoadState('networkidle');
     await page.waitForLoadState('domcontentloaded');
  
    await page.waitForTimeout(30000);
    
    await page.waitForSelector("//*[@id='gameStage']//canvas");
  
    const pageElement = await page.$("//*[@id='gameStage']//canvas");
    
    // verify Home page canvas image
    expect(await pageElement!.screenshot()).toMatchSnapshot('1Canvas-game-page-canvas.png',{maxDiffPixels:4500});

    
  })


  test.only('TC003 - verify hamburger menu content - es data against en - FAIL scenario', async ({ page }) => {
  
        // navigate to URL spanish

    await page.goto('https://games-eu.boldplay.com/games/games/bookofamduat/index.html?language=es&playerId=player583466');
  
     await page.waitForLoadState('networkidle');
     await page.waitForLoadState('domcontentloaded');
  
    await page.waitForTimeout(25000);
    
    await page.waitForSelector("//*[@id='gameStage']//canvas");
  
    const pageElement = await page.$("//*[@id='gameStage']//canvas")
    
        // Verify expanded Hamburger menu content

    await page.locator('canvas').click({
      position: {
        x: 1222,
        y: 61
      }
    });
  
    await page.waitForTimeout(5000);
  
    const text1 = await page.textContent("//*[@id='gameName']")
    const text2 = await page.textContent("//*[@id='rulesText']")
  
        // Verify expanded Hamburger menu content
    expect(text1!).toBe("Book of Amduat™");
    expect(text2!).toBe("GAME RULES");
  
    // click on cross button
    await page.locator('#panel #close_button').click();
  
  
  })

})
