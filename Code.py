from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    app_url = "https://skfahim7924-ai.github.io/Virtual-World/" 

    keyboard = [
        [InlineKeyboardButton("Let's Go. Launch the App !", web_app=WebAppInfo(url=app_url))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)

    await update.message.reply_text(
        text="Welcome! Click below to start:",
        reply_markup=reply_markup
    )

app = ApplicationBuilder().token("8808829806:AAEMZ7iejnq_uTFMUoro1946dOlfQbGXVOg").build()
app.add_handler(CommandHandler("start", start))
app.run_polling()