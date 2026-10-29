# For Zunnia, with love

A small static birthday surprise by Hussain for Zunnia. It uses plain HTML, CSS, and JavaScript; there is no backend, tracking, login, or data collection. The supplied collage and MP3 are included in the local asset folders.

## Run locally and test

1. Open VS Code, choose **File > Open Folder**, and select this project folder.
2. For a local preview, either open `index.html` directly in a browser, or install the optional **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
3. To test music in a real browser, open the site preview, click **Open Your Surprise**, then click the music play button. Confirm the status says it is playing and listen for sound. Test pause and mute with their adjacent controls. Browsers need a user click to start audio; the MP3 does not autoplay.
4. For phone sizing, use browser developer tools' responsive device mode, or visit the local server from a phone on the same Wi-Fi using the computer's LAN IP and Live Server's port.

## Personalize

- The supplied collage is `assets/photos/photo-1.png` and appears in the gallery. Add more real photos to `assets/photos/`, then add their paths and accurate alt descriptions to the `PHOTOS` array near the top of `script.js`. JPG, PNG, and WebP are supported. Gallery photos are clickable and the enlarged viewer supports Escape and arrow keys.
- The journey section contains general birthday and appreciation copy based on the confirmed relationship start date. Edit it in `index.html` if you want to make it more personal.
- Edit the complete letter in the `LETTER_TEXT` constant near the top of `script.js`.
- The supplied MP3 is `assets/audio/birthday-music.mp3`. Playback starts only after a visitor clicks Play. If the file is missing or cannot play, the player shows a helpful message. Only share audio you are authorized to use.

## Publish for free with GitHub Pages

1. Create or sign in to a GitHub account and create a **public** repository, for example `zunnia-birthday`. GitHub Free Pages requires a public repository.
2. In the repository choose **Add file > Upload files**. Upload the site's files and folders, keeping `index.html` at the repository root and preserving the `assets/photos/` and `assets/audio/` paths. You can omit the original duplicate files at the project root.
3. Commit the uploaded files to the `main` branch.
4. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select branch `main` and folder `/(root)`. Click **Save**.
5. Wait for deployment. GitHub displays the published URL in the Pages settings. A project URL is usually `https://YOUR-USERNAME.github.io/zunnia-birthday/`. Open it and test the image and music before sharing it.

If GitHub's menus differ, follow its current [Pages quickstart](https://docs.github.com/en/pages/quickstart). A public repository and published page can expose the personal photos and messages to anyone; an unlisted URL is not access control. This project has not been published, so there is no live link yet.

## Privacy

The page does not send photos or messages to an app server. Anyone who obtains the published URL may be able to view the photos and personal words. Avoid including content you do not want exposed.
