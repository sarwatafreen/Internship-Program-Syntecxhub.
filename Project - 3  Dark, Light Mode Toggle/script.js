// const toggle = document.getElementById('theme-toggle');

// // 1. Check LocalStorage on load
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme === 'dark') {
//   document.body.classList.add('dark-mode');
//   toggle.checked = true; // Keep switch in "dark" position
// }

// // 2. Listen for the toggle click
// toggle.addEventListener('change', () => {
//   if (toggle.checked) {
//     document.body.classList.add('dark-mode');
//     localStorage.setItem('theme', 'dark');
//   } else {
//     document.body.classList.remove('dark-mode');
//     localStorage.setItem('theme', 'light');
//   }
// });  


// const toggleSwitch = document.querySelector('#checkbox');
// const currentTheme = localStorage.getItem('theme');

// // 1. Check for saved user preference on load
// if (currentTheme) {
//   document.documentElement.setAttribute('data-theme', currentTheme);

//   if (currentTheme === 'dark') {
//     toggleSwitch.checked = true;
//   }
// }

// // 2. Function to switch theme dynamically
// function switchTheme(e) {
//   if (e.target.checked) {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     localStorage.setItem('theme', 'dark'); // Save preference
//   } else {
//     document.documentElement.setAttribute('data-theme', 'light');
//     localStorage.setItem('theme', 'light'); // Save preference
//   }
// }

// // 3. Event Listener
// toggleSwitch.addEventListener('change', switchTheme, false);   

const toggleSwitch = document.querySelector('#checkbox');
const actionBtn = document.querySelector('#actionBtn'); // 1. Added this to select the button
const currentTheme = localStorage.getItem('theme');

// --- THEME LOGIC ---

// Check for saved user preference on load
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
} else {
  // Check system preference if no saved theme exists
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleSwitch.checked = true;
  }
}

// Function to switch theme dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); 
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);


// --- BUTTON LOGIC ---

// 2. Add the "Click" listener for the Action Button
if (actionBtn) {
  actionBtn.addEventListener('click', () => {
    // This is where you decide what the button does
    console.log("Button was clicked!");
    alert("Action Button is working! Current theme: " + (localStorage.getItem('theme') || 'light'));
    
    // Optional: Add a small animation or text change
    actionBtn.textContent = "Clicked! ✨";
    setTimeout(() => {
      actionBtn.textContent = "Action Button";
    }, 2000);
  });
}
