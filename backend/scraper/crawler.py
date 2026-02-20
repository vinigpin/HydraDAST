import asyncio
from playwright.async_api import async_playwright, Playwright
from pydantic import BaseModel

class Livro(BaseModel):
    titulo: str
    preco: str

async def run(playwright: Playwright):
    chromium = playwright.chromium # or "firefox" or "webkit".
    browser = await chromium.launch()
    page = await browser.new_page()
    await page.goto("https://books.toscrape.com/index.html")
    
    await page.screenshot(path="example.png")
    primeiro_livro_html = page.locator("article.product_pod").first
    titulo_extraido = await primeiro_livro_html.locator("h3 a").get_attribute("title")
    preco_extraido = await primeiro_livro_html.locator("p.price_color").inner_text()

    dados_livro = Livro(titulo=titulo_extraido, preco=preco_extraido)
    print(f"Dicionário Limpo: {dados_livro.model_dump()}")

    await browser.close()

async def main():
    async with async_playwright() as playwright:
        await run(playwright)

asyncio.run(main())

