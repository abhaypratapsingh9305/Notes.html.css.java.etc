function getTab(el) {
    // Get the currently active tab and the currently visible content
    const activeTab = document.querySelector(".tab-item .active");
    const visibleContent = document.querySelector(".content-visible");

    // Find the content associated with the clicked tab
    const tabContentId = el.href.split('#')[1]; // Extract the ID of the content from the href
    const tabContent = document.getElementById(tabContentId);

    if (!tabContent) return; // Exit if the content doesn't exist

    // Remove 'active' class from the current tab and 'content-visible' class from the current content
    if (activeTab) {
        activeTab.classList.remove('active');
    }
    if (visibleContent) {
        visibleContent.classList.remove('content-visible');
    }

    // Add 'active' class to the clicked tab
    el.classList.add('active');

    // Add 'content-visible' class to the corresponding content
    tabContent.classList.add('content-visible');
}

// Event listener for tab click
document.addEventListener("click", e => {
    if (e.target.matches(".tab-item a")) {
        // Prevent default anchor behavior (page scroll)
        e.preventDefault(); 
        getTab(e.target);
    }
});

// Automatically click the first tab on page load to show the first content
document.querySelector('.tab-item a').click();
