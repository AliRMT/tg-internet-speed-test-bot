const { Telegraf, Markup } = require("telegraf")
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(ctx => {
  try {
      ctx.reply(
        "Check Your Internet Speed By Clicking Button Below!",
        Markup.inlineKeyboard([Markup.button.webApp("Launch", "https://subtle-phoenix-02f676.netlify.app")])
      );
  } catch (e) {
    return ctx.reply("Error occurred")
  }
})

exports.handler = async event => {
  try {
    await bot.handleUpdate(JSON.parse(event.body))
    return { statusCode: 200, body: "" }
  } catch (e) {
    return { statusCode: 400, body: "This endpoint is meant for bot and telegram communication" }
  }
}