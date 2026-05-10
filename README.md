# ✨ Harshit Singh's Data Science Portfolio ✨
A modern, visually striking showcase of Machine Learning, Deep Learning, and NLP projects, meticulously crafted with the "Obsidian & Ember" design aesthetic.

## 💡 Introduction
Welcome to Harshit Singh's re-imagined online portfolio! 🚀 This repository serves as a dynamic and comprehensive showcase of expertise in Data Science, Machine Learning, Deep Learning, and Natural Language Processing.

The core mission of this portfolio is to transform complex technical endeavors into an elegant, engaging, and easily digestible experience for visitors. We've undertaken a complete visual overhaul, embracing the sophisticated **"Obsidian & Ember"** design system. This transformation delivers a premium, deep-space aesthetic, accented with vibrant Electric Violet and Solar Orange, and underpinned by modern typography. The result is a visually stunning and highly performant platform, making it an ideal resource for potential employers, collaborators, or anyone passionate about the cutting edge of AI and data science. ✨

## ✨ Features
This portfolio is engineered for an immersive and informative user experience, packed with distinctive features:

*   🌌 **Obsidian & Ember Design System:** A complete visual revamp presenting a dark, deep-space aesthetic. It features Electric Violet (`#8750F7`) and Solar Orange (`#FE6B00`) accents for a striking, modern look.
*   🖋️ **Premium Typography:** Leverages Epilogue for commanding headlines and Plus Jakarta Sans for clear, readable body text, creating a clean, editorial feel.
*   ✨ **Glassmorphism Navigation:** A sleek, semi-transparent navigation bar with a `backdrop-filter` blur effect, providing a subtle depth.
*   🚀 **Engaging Hero Section:** A full-viewport height hero boasts a dynamic "light leak" radial gradient background and animated social icons for an impressive first impression.
*   📈 **Dynamic Skill Progress Bars:** Visually appealing skill bars with a vibrant gradient fill and a subtle glowing effect, elegantly showcasing proficiency in key technical areas.
*   🖼️ **Responsive Project Cards:** A grid-based showcase of projects, each featuring semi-transparent backgrounds, subtle ghost borders, and luminous hover effects for an interactive touch.
*   ⚡ **Optimized Performance:** Enhanced speed and smoothness through the removal of `particles.js`, replaced by lightweight CSS gradients and mist overlays.
*   📱 **Fully Responsive Design:** Crafted with a mobile-first approach, guaranteeing a seamless and beautiful display across all devices (mobile, tablet, desktop).
*   📜 **Smooth Scrolling & Active Nav:** Elevates user experience with smooth scroll behavior and automatic highlighting of the active navigation link based on scroll position.
*   🔗 **Direct Project Access:** Provides easy navigation to project repositories on GitHub and interactive live demos on Hugging Face Spaces.

## 🚀 Installation / Quick Start
This portfolio is a static website, which means getting it up and running locally is incredibly straightforward! No complex build processes or server configurations are needed. 🎉

### Prerequisites
Before you start, ensure you have:
*   [**Git**](https://git-scm.com/) installed on your system to clone the repository.
*   A modern web browser (e.g., Chrome, Firefox, Edge, Safari) to view the website.

### Steps
Follow these simple steps to set up the portfolio on your local machine:

1.  **Clone the Repository:**
    Open your terminal or command prompt and execute the following command to clone the project:
    ```bash
    git clone https://github.com/Harsh502s/Harsh502s.github.io.git
    cd Harsh502s.github.io
    ```

2.  **Open in Browser:**
    Navigate to the project directory and simply open the `index.html` file in your preferred web browser.
    ```bash
    # On macOS
    open index.html

    # On Windows
    start index.html

    # On Linux
    xdg-open index.html
    ```
    Alternatively, you can manually navigate to the `Harsh502s.github.io` directory in your file explorer and double-click `index.html`.

That's it! Your personal data science portfolio is now running locally. 🥳

## 💻 Usage
The portfolio is designed for intuitive exploration, allowing you to easily discover projects, skills, and contact information.

*   **Explore Sections:** Utilize the sleek glassmorphism navigation bar at the top to smoothly jump between different sections: Home, About, Skills, Projects, and Contact.
*   **View Projects:** In the dedicated "Projects" section, click on any project card's image to directly view its live demo (if available). Alternatively, use the "Code" link (GitHub icon) to dive into the project's repository or the "Demo" link (link icon) to interact with a live Hugging Face Space.
*   **Access Resume:** Click the prominent "Resume" button in the hero section to view the developer's comprehensive curriculum vitae.
*   **Connect:** Engage with Harshit Singh on various platforms using the animated social icons found in both the hero section and the footer. Connect on LinkedIn, GitHub, Hugging Face, and Kaggle.

## 🔌 API Endpoints
This project is a static personal portfolio website, meticulously designed to showcase projects and skills visually. As such, it **does not expose any API endpoints** or require backend services. Its functionality is entirely client-side.

## 🛠️ Technologies Used
This portfolio is built upon a modern, robust, and performant web stack, leveraging key technologies for a visually rich and interactive experience:

*   **Frontend Development:**
    *   **HTML5:** The foundational language for structuring the content and semantics of the portfolio.
    *   **CSS3:** Powers all styling, including advanced features like custom properties (CSS variables), `backdrop-filter` for glassmorphism effects, and complex gradients.
    *   **JavaScript (ES6+):** Implements dynamic and interactive elements such as mobile navigation toggling, smooth scrolling, and intelligent active link highlighting.
*   **Design & Typography:**
    *   **"Obsidian & Ember" Design System:** A bespoke, dark-themed design language developed for a premium aesthetic.
    *   **Google Fonts:** Integrates `Epilogue` for striking headlines and `Plus Jakarta Sans` for clean, readable body text.
*   **Icons:**
    *   **Font Awesome:** Provides a comprehensive library of scalable vector icons used throughout the site.
*   **Animations & Interactions:**
    *   **ScrollReveal.js:** Facilitates effortless scroll animations, gracefully bringing elements into view as the user navigates the page.

## 📁 Project Structure
The repository is organized for clarity, maintainability, and ease of navigation. Below is a tree diagram illustrating its layout, followed by a brief explanation of key directories and files.

```
Harsh502s.github.io/
├── index.html            # 🌐 Main HTML file for the entire portfolio website
├── styles.css            # 🎨 All custom CSS styles, including the "Obsidian & Ember" design system
├── js/                   # 💻 Directory for JavaScript files
│   └── main.js           #    Core JavaScript for interactivity (nav toggle, scroll reveal, active links)
├── img/                  # 🖼️ Directory for all project images, profile photos, and visual assets
│   ├── anime.webp        #    Image for Anime Recommender project
│   ├── dp.webp           #    Developer's profile photo
│   ├── empatt.webp       #    Image for Employee Attrition project
│   ├── Filter-bro.png    #    Image for Autonomous Text Tagging project
│   └── sen2.webp         #    Image for Airline Review Sentiment Analysis project
├── implementation_plan.md # 📝 Detailed document outlining the design system overhaul
├── README.md             # 📖 This README file providing project overview and guidance
└── .gitignore            # 🚫 Specifies intentionally untracked files to ignore
```

*   `index.html`: The single-page application entry point, containing all content sections from the hero to the contact information.
*   `styles.css`: The heart of the visual design, containing all CSS rules, design tokens, and responsive adjustments tailored for the "Obsidian & Ember" aesthetic.
*   `js/main.js`: Handles client-side interactivity, ensuring a dynamic and responsive user experience, including navigation logic and scroll effects.
*   `img/`: Stores all visual assets critical to the portfolio's presentation, such as project thumbnails and the developer's profile picture.
*   `implementation_plan.md`: A detailed record of the comprehensive design overhaul, including design tokens, structural changes, and verification plans, offering insight into the project's evolution.

## ⚙️ Configuration
As a static website, this portfolio is designed to be self-contained and highly deployable. It **does not require any backend services or environment variable (`.env`) configuration** to function.

Should you wish to customize or update the portfolio, here's how:

*   **Content Update (`index.html`):**
    *   To modify biographical text, project descriptions, external links (GitHub, demos), or contact details, directly edit the `index.html` file.
*   **Styling Tweaks (`styles.css`):**
    *   For design system adjustments, color palette changes, typography modifications, or responsive rule fine-tuning, `styles.css` is your go-to file. It's meticulously organized with CSS variables for easy updates.
*   **JavaScript Behavior (`js/main.js`):**
    *   While less frequently needed, changes to interactive elements, scroll animations, or navigation logic can be made by editing `js/main.js`.

## 🤝 Contributing
Contributions, suggestions, and feedback are always highly appreciated! 🙏 If you have ideas for new features, design enhancements, or content improvements to make this portfolio even more impressive, please follow these steps:

1.  **Fork the Repository:** Click the "Fork" button at the top right corner of this GitHub page to create your copy of the repository.
2.  **Clone Your Fork:**
    Open your terminal or command prompt and clone your forked repository to your local machine:
    ```bash
    git clone https://github.com/YOUR_USERNAME/Harsh502s.github.io.git
    cd Harsh502s.github.io
    ```
    *(Replace `YOUR_USERNAME` with your GitHub username.)*
3.  **Create a New Branch:**
    For new features:
    ```bash
    git checkout -b feature/your-awesome-feature
    ```
    For bug fixes:
    ```bash
    git checkout -b bugfix/fix-description
    ```
4.  **Make Your Changes:** Implement your brilliant ideas or fix identified issues.
5.  **Commit Your Changes:**
    Stage your changes and commit them with a clear, descriptive message. Please adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.
    ```bash
    git add .
    git commit -m "feat: Add new project card for XYZ project"
    # Or: git commit -m "fix: Correct broken link in About section"
    ```
6.  **Push to Your Fork:**
    ```bash
    git push origin feature/your-awesome-feature
    ```
    *(Replace `feature/your-awesome-feature` with your branch name.)*
7.  **Create a Pull Request:** Go to the original repository on GitHub, and you'll see an option to open a new Pull Request from your forked branch. Provide a detailed description of your changes and why they should be merged.

Thank you for helping enhance this portfolio! Your efforts are valued. 🌟

## 📄 License
This project is open source and distributed under the **MIT License**. This means you are free to use, modify, and distribute the code for personal or commercial purposes, provided you include the original copyright and license notice.

See the [LICENSE](LICENSE) file in the repository for the full details.
