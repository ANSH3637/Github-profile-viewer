# GitHub Profile Viewer

A React-based web application that fetches and displays random GitHub user profiles using the public GitHub API. This project demonstrates the use of **React 19**, **Custom Hooks**, and **Parcel** for bundling.

## 🚀 Features

-   **Random Profile Generation:** Fetches a list of random GitHub users.
-   **Custom Hook Implementation:** Logic is abstracted into a reusable `useFetch` hook.
-   **Profile Cards:** Displays user avatar, username, and a direct link to their GitHub profile.
-   **Refresh Capability:** Button to generate a new set of random users.
-   **Responsive Design:** Uses CSS Flexbox for a responsive card layout.

## 🛠️ Tech Stack

-   **Frontend Library:** React (v19.1.1)
-   **Bundler:** Parcel
-   **Styling:** CSS3
-   **API:** GitHub Users API

## 📂 Project Structure
```
ansh3637-github-profile-viewer/
├── src/
│   ├── component/
│   │   ├── Body.js       # Main display component
│   │   └── Header.js     # App title component
│   ├── main.js           # Entry point
│   └── useFetch.js       # Custom Hook for API logic
├── index.html            # HTML Template
├── package.json          # Dependencies
└── style.css             # Global styles
```
## ⚙️ Installation & Running

1. Clone the repository
```
git clone https://github.com/ansh3637/github-profile-viewer.git
cd ansh3637-github-profile-viewer
```

2. Install Dependencies
```npm install```

3. Run the Project
Since Parcel is used as the bundler, you can start the development server using:
```npx parcel index.html```

4. Open in Browser
Visit http://localhost:1234 (or the port specified in your terminal).

## 🧩 Code Highlights
Custom Hook (useFetch.js)
The application logic is separated from the UI using a custom hook. It manages the state for the profile data and handles the asynchronous API calls using a random offset to ensure different users are fetched every time.
```
// Example logic used in the hook
async function generateProfile(count = 10){
    const ran = Math.floor(1 + Math.random() * 10000);
    const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
    const data = await response.json();
    setProfile(data);
}
```



