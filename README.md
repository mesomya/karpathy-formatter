# Karpathy Tweet Formatter 🧠

A simple Chrome extension that makes [@karpathy](https://x.com/karpathy)'s long tweets easier to read by adding line breaks after sentences.

Built for fun by [@somyatwts](https://x.com/somyatwts) after seeing too many wall-of-text tweets from Andrej. Love the content, just wanted it formatted better!

## Before & After

<img width="754" height="940" alt="image" src="https://github.com/user-attachments/assets/6770f580-4695-4652-b30b-b85db6cb0b3d" />

<img width="754" height="820" alt="image" src="https://github.com/user-attachments/assets/9ddcd932-8d8f-4990-9973-d6cec023545c" />

## Features

- ✅ Automatically formats @karpathy's tweets
- ✅ Adds line breaks after sentences (`.` `?` `!`)
- ✅ Works on both x.com and twitter.com
- ✅ Preserves all links, mentions, and media
- ✅ Respects "Show more" functionality
- ✅ Zero data collection - runs entirely in your browser
- ✅ Lightweight (~2KB total)

## Installation

Since this isn't on the Chrome Web Store, you'll need to install it manually:

1. **Download this repo**
   - Click the green "Code" button above → "Download ZIP"
   - Or clone: `git clone https://github.com/YOUR_USERNAME/karpathy-formatter.git`

2. **Open Chrome Extensions**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)

3. **Load the extension**
   - Click "Load unpacked"
   - Select the `karpathy-formatter` folder

4. **Done!** 
   - Visit [@karpathy's profile](https://x.com/karpathy) to see it in action

## How It Works

The extension uses a MutationObserver to watch for tweets as you scroll. When it finds a tweet from @karpathy:

1. Checks if it's already formatted (skips if yes)
2. Checks for "Show more" button (skips to preserve Twitter's expand functionality)
3. Finds text content and adds `<br>` tags after sentence-ending punctuation

That's it. No magic, no complexity, no data collection.

## Privacy

This extension:
- ❌ Does NOT collect any data
- ❌ Does NOT track you
- ❌ Does NOT communicate with any servers
- ✅ Runs 100% locally in your browser

See [PRIVACY_POLICY.md](PRIVACY_POLICY.md) for details.

## Why?

Andrej Karpathy writes amazing content, but his tweets often come as dense paragraphs. I found myself mentally parsing sentence boundaries while reading. This extension does that automatically.

It's a fun weekend project that scratches my own itch. Maybe it'll help you too!

## Contributing

Found a bug? Have an idea? Feel free to open an issue or PR!

## License

MIT - do whatever you want with it.

---

Made with ☕ by [@somyatwts](https://x.com/somyatwts)
