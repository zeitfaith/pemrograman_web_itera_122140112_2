const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const logoutButton = document.getElementById('logout-btn');
const dashboardContainer = document.getElementById('dashboard-container');

const USERS_KEY = 'users';
const LOGGED_IN_USER_KEY = 'loggedInUser';

const getStoredUsers = () => JSON.parse(localStorage.getItem(USERS_KEY)) || [];
const storeUsers = (users) => localStorage.setItem(USERS_KEY, JSON.stringify(users));
const getLoggedInUsername = () => localStorage.getItem(LOGGED_IN_USER_KEY);
const setLoggedInUsername = (username) => localStorage.setItem(LOGGED_IN_USER_KEY, username);
const clearLoggedInUsername = () => localStorage.removeItem(LOGGED_IN_USER_KEY);

const navigateToDashboard = () => {
    window.location.href = 'index.html';
};

const navigateToLogin = () => {
    window.location.href = 'login.html';
};

const checkAuthOnDashboardLoad = () => {
    if (window.location.pathname.includes('index.html')) {
        if (!getLoggedInUsername()) {
            navigateToLogin();
        } else {
            if (dashboardContainer) {
                dashboardContainer.classList.remove('hidden');
                // app.js akan mengelola data setelah login
            }
        }
    }
};

const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // ... (kode register Anda) ...
};

const handleLoginSubmit = (event) => {
    event.preventDefault();
    // ... (kode login Anda) ...
};

const handleLogout = () => {
    console.log('Logout clicked');
    clearLoggedInUsername();
    navigateToLogin();
};

// Event Listeners
if (registerForm) {
    registerForm.addEventListener('submit', handleRegisterSubmit);
}

if (loginForm) {
    loginForm.addEventListener('submit', handleLoginSubmit);
}

if (logoutButton) {
    logoutButton.addEventListener('click', handleLogout);
}

// Initialization
checkAuthOnDashboardLoad();