# 🌤️ Weather Dashboard  

A **modern weather dashboard** built with **Next.js**, **ShadCN**, and **Tailwind CSS**. The app provides real-time **current weather** and **5-day forecasts** using **OpenWeatherMap API**. 🌍  

🔹 **Dark/Light Mode Toggle** 🌙 ☀️  
🔹 **Recent Search History** (last 5 searches)  
🔹 **Responsive & Modern UI**  

---

## 📸 Preview  
![image](https://github.com/user-attachments/assets/bfae2438-09a3-472c-952d-c0facb3c6fc1)


---

## 🚀 Features  
✅ **🌎 Search for any city** and get detailed weather data.  
✅ **🌡️ Current weather & 5-day forecast** with temperature, humidity, wind speed, etc.  
✅ **📜 Recent Searches** (last 5 cities stored using `localStorage`).  
✅ **🎨 Dark/Light Mode Toggle** with `next-themes`.  
✅ **💨 Optimized API calls** for fast performance.  
✅ **📱 Responsive UI** using **ShadCN** and **Tailwind CSS**.  

---

## 🛠️ Tech Stack  
- **🌐 Framework**: Next.js (React)  
- **🎨 UI Components**: ShadCN, Lucide Icons  
- **🌍 Weather API**: [OpenWeatherMap](https://openweathermap.org/forecast5)  
- **⚡ State Management**: React Hooks (`useState`, `useEffect`)  
- **🗄️ Storage**: LocalStorage (recent searches)  
- **🌙 Theme Switching**: `next-themes`  

---

## 📦 Installation & Setup  
### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/Shinkhal/Weather-Dashboard.git
cd weather-dashboard
```
### 2️⃣ Install Dependencies  
```bash
npm install
```
### 3️⃣ Get Your OpenWeatherMap API Key  
- Sign up on [OpenWeatherMap](https://openweathermap.org/api)  
- Generate a **free API key**  

### 4️⃣ Create a `.env.local` file  
```bash
NEXT_PUBLIC_WEATHER_API_KEY=your_api_key_here
```
> **Note:** Use `NEXT_PUBLIC_` prefix in Next.js for client-side environment variables.

### 5️⃣ Run the Project  
```bash
npm run dev
```
> The app will be available at **http://localhost:3000**

---

## 🎯 How to Use  
1️⃣ **🔍 Search for a city** using the input field.  
2️⃣ **📊 View current weather** (temperature, humidity, wind speed, etc.).  
3️⃣ **📅 Check the 5-day forecast** with daily weather data.  
4️⃣ **📝 Recent Searches** (last 5 cities) appear for quick access.  
5️⃣ **🌙 Toggle between Light/Dark Mode** using the button in the navbar.  

---

## 📂 Project Structure  
```
📦 weather-dashboard
 ┣ 📂 components
 ┃ ┣ 📜 Footer.js
 ┃ ┣ 📜 Navbar.js
 ┃ ┣ 📜 SearchBar.js
 ┃ ┣ 📜 WeatherCard.js
 ┃ ┣ 📜 ThemeToggle.js  <-- NEW Theme Toggle Component
 ┣ 📂 app
 ┣ 📂 lib
 ┣ 📜 .env.local (ignored in Git)
 ┣ 📜 package.json
 ┣ 📜 next.config.js
 ┣ 📜 README.md
```
- `SearchBar.js` → Handles user input & API calls  
- `WeatherCard.js` → Displays weather details  
- `Navbar.js` → Contains the **theme toggle button**  
- `ThemeToggle.js` → Handles dark/light mode switching  

---

## 📌 Future Enhancements  
🔹 **📍 Allow users to click recent searches** to fetch data instantly.  
🔹 **📍 Add location-based weather detection.**  
🔹 **✨ Improve animations & loading states.**  
🔹 **📊 Enhance UI with more weather details (UV Index, air quality, etc.).**  

---

## 📝 License  
This project is **open-source** and free to use. Feel free to contribute! 😊  

---

## 📬 Contact  
💻 **Developer:** Shinkhal Sinha  
📧 Email: [shinkhalsinha@gmail.com]  
🔗 GitHub: [Shinkhal](https://github.com/Shinkhal)  
