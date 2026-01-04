# 🔐 Password Generator (React + Tailwind CSS)

A modern and secure **Password Generator** built using **React Hooks** and **Tailwind CSS**.  
It allows users to generate strong random passwords with customizable options like length, numbers, and special characters.

---

## 🚀 Live Features

- 🔢 Adjustable password length (slider)
- 🔠 Uppercase & lowercase letters
- 🔢 Optional numbers
- 🔣 Optional special characters
- 📋 One-click copy to clipboard
- ⚡ Instant password regeneration
- 🎨 Clean & responsive UI with Tailwind CSS

---

## 🛠️ Built With

- **React**
  - `useState`
  - `useEffect`
  - `useCallback`
  - `useRef`
- **Tailwind CSS**
- **Vite** (for fast development)

---

## 📸 Preview

> Password generator with gradient heading, slider, checkboxes, and copy button.

---


## 🧠 How It Works

1. User selects:
   - Password length
   - Whether numbers and/or special characters are allowed
2. Password is generated using:
   - `Math.random()`
   - Dynamic character set
3. Password updates automatically using `useEffect`
4. Copy button uses `useRef` + Clipboard API

---

## 📋 Code Highlights

### Password Generation Logic

```js
const passGenerate = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "~!@#$^&*(}{)_-?/|][;";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char);
  }

  setPassword(pass);
}, [length, numberAllowed, charAllowed]);
