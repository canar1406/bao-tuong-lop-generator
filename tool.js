// Wait for themes to be loaded before allowing generation
let themesReady = false;

// Function to check and update button state
function updateButtonState() {
    const generateBtn = document.getElementById('generateBtn');
    if (!generateBtn) return;
    
    if (themesReady && window.cssThemes && Object.keys(window.cssThemes).length > 0) {
        generateBtn.disabled = false;
        generateBtn.textContent = '🚀 TẠO TRANG BÁO TƯỜNG';
    } else {
        generateBtn.disabled = true;
        generateBtn.textContent = '⏳ Đang tải themes...';
    }
}

// Listen for themes loaded event
window.addEventListener('themesLoaded', () => {
    themesReady = true;
    console.log('✅ Tool.js: Themes are ready to use');
    console.log('Total themes loaded:', Object.keys(window.cssThemes || {}).length);
    updateButtonState();
});

// Check button state when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateButtonState();
    
    // Also check again after a short delay in case themes loaded before DOMContentLoaded
    setTimeout(() => {
        if (window.cssThemes && Object.keys(window.cssThemes).length > 0 && !themesReady) {
            themesReady = true;
            console.log('✅ Tool.js: Themes were already loaded');
            updateButtonState();
        }
    }, 100);
});

// Function to generate HTML
function generateHTML() {
    if (!themesReady || !window.cssThemes) {
        alert('⚠️ Themes chưa load xong! Vui lòng đợi một chút...');
        return '';
    }
    
    const title = document.getElementById('titleInput').value;
    const slogan = document.getElementById('sloganInput').value;
    const intro = document.getElementById('introInput').value;
    const imageCount = parseInt(document.getElementById('imageCount').value);
    
    // Get music & video info
    const musicTitle = document.getElementById('musicTitle').value;
    const videoTitle = document.getElementById('videoTitle').value;
    
    // Get comment prompt
    const commentPrompt = document.getElementById('commentPrompt').value;
    
    // Get articles
    const articleTitles = document.querySelectorAll('.article-title');
    const articleContents = document.querySelectorAll('.article-content');
    const articleAuthors = document.querySelectorAll('.article-author');
    
    let articlesHTML = '';
    for (let i = 0; i < articleTitles.length; i++) {
        const articleTitle = articleTitles[i].value.trim();
        if (articleTitle) { // Chỉ thêm bài viết nếu có tiêu đề
            const articleContent = articleContents[i].value;
            const articleAuthor = articleAuthors[i].value;
            
            articlesHTML += `
            <article class="bai-viet">
                <h3 class="tieu-de-bai">${articleTitle}</h3>
                <div class="noi-dung">
                    <p>${articleContent.replace(/\n/g, '<br>')}</p>
                </div>
                <p class="tac-gia">- ${articleAuthor}</p>
            </article>
`;
        }
    }
    
    // Generate gallery
    let galleryHTML = '';
    for (let i = 1; i <= imageCount; i++) {
        const imageDesc = document.getElementById(`imageDesc${i}`)?.value || '';
        if (imageDesc.trim()) {
            galleryHTML += `
                <div class="khung-anh">
                    <img src="Image/Image${i}.jpg" alt="${imageDesc}">
                    <p class="mo-ta-anh">${imageDesc}</p>
                </div>`;
        }
    }
    
    // Get footer info
    const members = document.getElementById('membersInput').value;
    const email = document.getElementById('emailInput').value;
    const classInfo = document.getElementById('classInput').value;
    const copyright = document.getElementById('copyrightInput').value;
    
    // Check for blocked name
    const membersLower = members.toLowerCase();
    if (membersLower.includes('lê viết triết') || 
        membersLower.includes('le viet triet') ||
        membersLower.includes('triết') ||
        membersLower.includes('triet')) {
        alert('⛔ Webtool này không dành cho bạn');
        return;
    }
    
    // Generate member list
    const memberArray = members.split('\n').filter(m => m.trim());
    let memberListHTML = '';
    memberArray.forEach(member => {
        memberListHTML += `                    <li>${member}</li>\n`;
    });
    
    // Complete HTML template
    const htmlOutput = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="header">
        <div class="banner">
            <h1 class="ten-bao">${title}</h1>
            <p class="slogan">${slogan}</p>
        </div>
    </header>

    <main id="content">
        <section class="gioi-thieu">
            <h2>Giới Thiệu</h2>
            <p>${intro}</p>
        </section>

        <section class="khu-vuc-bai-viet">
            <h2>Các Bài Viết</h2>
            ${articlesHTML}
        </section>

        <section class="goc-anh">
            <h2>Góc Ảnh</h2>
            <div class="thu-vien-anh">
${galleryHTML}
            </div>
        </section>

        <section class="goc-am-nhac">
            <h2>Góc Âm Nhạc</h2>
            <div class="khu-vuc-media">
                <p class="gioi-thieu-media">${musicTitle}</p>
                <audio controls class="audio-player">
                    <source src="Song.mp3" type="audio/mpeg">
                    Trình duyệt của bạn không hỗ trợ phát audio.
                </audio>
                
                <p class="gioi-thieu-media">${videoTitle}</p>
                <div class="video-container">
                    <video controls class="video-player">
                        <source src="video.mp4" type="video/mp4">
                        Trình duyệt của bạn không hỗ trợ phát video.
                    </video>
                </div>
            </div>
        </section>

        <section class="goc-binh-luan">
            <h2>Góc Bình Luận</h2>
            <div class="khu-vuc-form">
                <p>${commentPrompt}</p>
                <form class="form-binh-luan" action="#" method="post">
                    <div class="form-group">
                        <label for="ho-ten">Họ và tên:</label>
                        <input type="text" id="ho-ten" name="ho-ten" required placeholder="Nhập họ tên của bạn">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="email@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="loi-nhan">Lời nhắn / Bình luận:</label>
                        <textarea id="loi-nhan" name="loi-nhan" rows="5" required placeholder="Viết lời nhắn của bạn tại đây..."></textarea>
                    </div>
                    
                    <button type="submit" class="nut-gui">Gửi Lời Nhắn</button>
                </form>
            </div>
        </section>
    </main>

    <footer id="footer">
        <div class="thong-tin-footer">
            <div class="nhom-tac-gia">
                <h3>Nhóm Thực Hiện</h3>
                <ul>
${memberListHTML}
                </ul>
            </div>
            
            <div class="lien-he">
                <h3>Liên Hệ</h3>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <p>${classInfo}</p>
            </div>
        </div>
        
        <div class="copyright">
            <p>${copyright}</p>
        </div>
    </footer>
</body>
</html>`;
    
    return htmlOutput;
}

// Function to generate CSS based on selected theme
function generateCSS() {
    if (!window.cssThemes) {
        console.error('❌ cssThemes not loaded yet!');
        return '/* Themes not loaded yet */';
    }
    const selectedTheme = document.getElementById('themeSelect').value;
    return window.cssThemes[selectedTheme] || '/* Theme not found */';
}

// Function to update image description inputs
function updateImageDescriptions() {
    const count = parseInt(document.getElementById('imageCount').value) || 0;
    const container = document.getElementById('imageDescriptionsContainer');
    const defaultDescriptions = [
        'Lớp học của chúng mình',
        'Hoạt động ngoại khóa',
        'Các hoạt động vui chơi',
        'Kỷ niệm đáng nhớ'
    ];
    
    container.innerHTML = '';
    for (let i = 1; i <= count; i++) {
        const defaultDesc = i <= defaultDescriptions.length ? defaultDescriptions[i-1] : '';
        container.innerHTML += `
            <div style="margin: 10px 0;">
                <label>Mô tả ảnh ${i}:</label>
                <input type="text" id="imageDesc${i}" value="${defaultDesc}" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #ddd; border-radius: 4px;">
            </div>`;
    }
}

// Event listeners
document.getElementById('generateBtn').addEventListener('click', function() {
    const htmlCode = generateHTML();
    const cssCode = generateCSS();
    
    document.getElementById('htmlTextarea').value = htmlCode;
    document.getElementById('cssTextarea').value = cssCode;
    
    // Show success message
    alert('✅ Đã tạo code thành công! Hãy copy code và tạo file index.html và style.css');
});

// Copy buttons
document.getElementById('copyHtmlBtn').addEventListener('click', function() {
    const htmlTextarea = document.getElementById('htmlTextarea');
    htmlTextarea.select();
    document.execCommand('copy');
    alert('📋 Đã copy HTML code!');
});

document.getElementById('copyCssBtn').addEventListener('click', function() {
    const cssTextarea = document.getElementById('cssTextarea');
    cssTextarea.select();
    document.execCommand('copy');
    alert('📋 Đã copy CSS code!');
});

// Initialize image descriptions on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        updateImageDescriptions();
    });
} else {
    // Document already loaded
    updateImageDescriptions();
}
