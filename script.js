// Enhanced JavaScript for responsive navbar
document.addEventListener('DOMContentLoaded', function() {
    // Add a toggle button for small screens
    var navbar = document.querySelector('.navbar');
    var toggleButton = document.createElement('a');
    toggleButton.innerHTML = '☰';
    toggleButton.style.display = 'none';
    toggleButton.onclick = function() {
        var links = navbar.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            if (links[i].style.display === 'block') {
                links[i].style.display = 'none';
            } else {
                links[i].style.display = 'block';
            }
        }
    };

    navbar.insertBefore(toggleButton, navbar.firstChild);
    window.onresize = function() {
        if (window.innerWidth > 600) {
            var links = navbar.querySelectorAll('a');
            for (var i = 0; i < links.length; i++) {
                links[i].style.display = 'block';
            }
            toggleButton.style.display = 'none';
        } else {
            toggleButton.style.display = 'block';
        }
    };
    window.onresize(); // Call once to set initial state
});
