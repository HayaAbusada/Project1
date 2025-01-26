document.getElementById('theme-toggle').addEventListener('change', function () {
    const themeLink = document.getElementById('theme-link');
    if (this.checked) {
        themeLink.href = 'style2.css';
    } else { 
        themeLink.href = 'style1.css';
    }
});