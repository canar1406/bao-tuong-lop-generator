// Auto-generated index.js - Load all 15 themes dynamically
window.cssThemes = {};

// Load all 15 themes in parallel for better performance
async function loadAllThemes() {
    try {
        const themeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        
        // Create array of fetch promises
        const fetchPromises = themeNumbers.map(num => 
            fetch(`themes/theme${num}.css`).then(r => r.text())
        );
        
        // Wait for all themes to load
        const themeContents = await Promise.all(fetchPromises);
        
        // Assign to cssThemes object
        themeNumbers.forEach((num, index) => {
            window.cssThemes[`theme${num}`] = themeContents[index];
        });
        
        console.log('✅ All 15 themes loaded successfully!');
        console.log('Available themes:', Object.keys(window.cssThemes));
        
        // Dispatch custom event to notify that themes are ready
        window.dispatchEvent(new CustomEvent('themesLoaded'));
        
        return window.cssThemes;
    } catch (error) {
        console.error('❌ Error loading themes:', error);
        alert('Lỗi khi tải themes! Vui lòng refresh trang.');
        return null;
    }
}

// Initialize on load and wait for completion
loadAllThemes().then(() => {
    console.log('Themes ready to use');
});
