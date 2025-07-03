
mermaid.initialize({
    startOnLoad: true,
    theme: 'default',
    flowchart: {
        htmlLabels: true,
        curve: 'basis',
        padding: 30
    },
    themeVariables: {
        primaryColor: '#fff',
        primaryTextColor: '#333',
        primaryBorderColor: '#333',
        lineColor: '#666',
        sectionBkgColor: '#f8f9fa',
        altSectionBkgColor: '#e9ecef',
        gridColor: '#ddd'
    }
});

function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active class from all nav tabs
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected tab content
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked nav tab
    event.target.classList.add('active');
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.add('show');
    }
}