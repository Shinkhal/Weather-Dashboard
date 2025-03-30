# 🌤️ Weather Dashboard  

A **modern weather dashboard** built with **Next.js** and **ShadCN** that provides real-time and **5-day weather forecasts** for any city. The app fetches data from **OpenWeatherMap API** and saves recent searches for easy access.

---

## 📸 Preview  
![image](https://github.com/user-attachments/assets/c4b9a6ef-a045-4a78-9e85-62f0e2a3f94a)
 

---

## 🚀 Features  
✅ **Search for any city** worldwide and get weather details.  
✅ **Current weather & 5-day forecast** displayed in a user-friendly UI.  
✅ **Recent search history** (last 5 cities) saved using `localStorage`.  
✅ **Responsive UI** with **ShadCN** for a clean, modern look.  
✅ **Optimized API calls** using `fetch()` and efficient state management.  

---

## 🛠️ Tech Stack  
- **Frontend**: Next.js, React, Tailwind CSS  
- **UI Components**: ShadCN, Lucide Icons  
- **API**: [OpenWeatherMap 5-Day Weather Forecast API](https://openweathermap.org/forecast5)  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Storage**: LocalStorage (for recent searches)  

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
> The app will run at **http://localhost:3000**

---

## 🎯 Usage  
1️⃣ **Search for a city** using the input field.  
2️⃣ **View current weather** (temperature, humidity, wind speed, etc.).  
3️⃣ **Check the 5-day forecast** with detailed weather info.  
4️⃣ **Recent searches** (last 5 cities) are stored for reference.  

---

## 📂 Project Structure  
```
📦 weather-dashboard
 ┣ 📂 components
 ┃ ┣ 📜 Footer.js
 ┃ ┣ 📜 SearchBar.js
 ┃ ┣ 📜 WeatherCard.js
 ┣ 📂 app
 ┣ 📂 lib
 ┣ 📜 .env.local (ignored in Git)
 ┣ 📜 package.json
 ┣ 📜 next.config.js
 ┣ 📜 README.md
```
- `SearchBar.js` → Handles input & API calls  
- `WeatherCard.js` → Displays weather details  
- `localStorage` → Stores recent searches  

---

## 📌 To-Do / Future Enhancements  
🔹 **Allow users to click recent searches** to re-fetch data.  
🔹 **Implement dark/light mode toggle.**  
🔹 **Add location-based weather detection.**  
🔹 **Improve animations & loading states.**  

---

## 📝 License  
This project is **open-source** and free to use. Feel free to contribute! 😊  

---

## 📬 Contact  
💻 **Developer:** Shinkhal Sinha  
📧 Email: [shinkhalsinha@gmail.com]  
🔗 GitHub: [Shinkhal](https://github.com/Shinkhal)  

