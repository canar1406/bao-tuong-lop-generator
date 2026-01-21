// CSS Themes Object - 10 mẫu giao diện đẹp và khác biệt
const cssThemes = {
    theme1: `/* Theme 1: Modern Gradient - Hiện Đại Gradient */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Open+Sans:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background-attachment: fixed;
}

#header {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
    backdrop-filter: blur(10px);
    color: white;
    padding: 3rem 0;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    border-bottom: 3px solid rgba(255, 255, 255, 0.3);
}

.banner {
    padding: 1rem;
}

.ten-bao {
    font-family: 'Montserrat', sans-serif;
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
    letter-spacing: 4px;
    animation: fadeInDown 1s ease;
}

@keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

.slogan {
    font-size: 1.3rem;
    font-style: italic;
    opacity: 0.95;
    font-weight: 300;
}

#content {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 3rem 2rem;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    border-radius: 20px;
}

.gioi-thieu {
    padding: 2.5rem;
    background: linear-gradient(135deg, #e8f4f8 0%, #d4e9f7 100%);
    border-left: 6px solid #667eea;
    margin: 2rem 0;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
}

.gioi-thieu h2 {
    font-family: 'Montserrat', sans-serif;
    color: #667eea;
    margin-bottom: 1.5rem;
    font-size: 2.2rem;
    font-weight: 700;
}

.gioi-thieu p {
    font-size: 1.1rem;
    line-height: 1.8;
}

.khu-vuc-bai-viet {
    padding: 2rem;
    margin: 3rem 0;
}

.khu-vuc-bai-viet h2 {
    font-family: 'Montserrat', sans-serif;
    color: #764ba2;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    border-bottom: 4px solid #764ba2;
    padding-bottom: 1rem;
    font-weight: 700;
    position: relative;
}

.khu-vuc-bai-viet h2:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
}

.bai-viet {
    background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
    border: none;
    border-radius: 15px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    transition: all 0.4s ease;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.bai-viet:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.tieu-de-bai {
    color: #667eea;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    border-left: 5px solid #667eea;
    padding-left: 1.5rem;
    font-weight: 700;
}

.noi-dung {
    margin: 1.5rem 0;
    text-align: justify;
    font-size: 1.05rem;
    line-height: 1.9;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #764ba2;
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: 1.05rem;
}

.goc-anh {
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%);
    border-radius: 15px;
    margin: 3rem 0;
}

.goc-anh h2 {
    font-family: 'Montserrat', sans-serif;
    color: #764ba2;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.khung-anh {
    background: white;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    transition: all 0.4s ease;
}

.khung-anh:hover {
    transform: translateY(-10px) rotate(2deg);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
}

.khung-anh img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}

.khung-anh:hover img {
    transform: scale(1.1);
}

.mo-ta-anh {
    padding: 1.2rem;
    text-align: center;
    font-weight: 600;
    color: #555;
    background: linear-gradient(135deg, #f4f4f4 0%, #e8e8e8 100%);
}

.goc-am-nhac {
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    border-radius: 20px;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(255, 108, 159, 0.2);
}

.goc-am-nhac h2 {
    font-family: 'Montserrat', sans-serif;
    color: #d63031;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
}

.khu-vuc-media {
    max-width: 800px;
    margin: 0 auto;
}

.gioi-thieu-media {
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #d63031;
    font-size: 1.3rem;
}

.audio-player {
    width: 100%;
    margin-bottom: 2.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    background: #000;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 15px;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 3rem 2rem;
    background: linear-gradient(135deg, #e8f8f5 0%, #d0f0e8 100%);
    border-radius: 20px;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(22, 160, 133, 0.15);
}

.goc-binh-luan h2 {
    font-family: 'Montserrat', sans-serif;
    color: #16a085;
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
}

.khu-vuc-form {
    max-width: 700px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #16a085;
    font-weight: 500;
}

.form-binh-luan {
    background: white;
    padding: 2.5rem;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: #16a085;
    font-size: 1.05rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid #d0f0e8;
    border-radius: 10px;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #16a085;
    box-shadow: 0 0 0 3px rgba(22, 160, 133, 0.1);
}

.nut-gui {
    background: linear-gradient(135deg, #16a085 0%, #1abc9c 100%);
    color: white;
    padding: 1.2rem 3rem;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    box-shadow: 0 5px 15px rgba(22, 160, 133, 0.3);
}

.nut-gui:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(22, 160, 133, 0.4);
}

.nut-gui:active {
    transform: translateY(0);
}

#footer {
    background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
    color: white;
    padding: 3rem 2rem;
    margin-top: 4rem;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

.thong-tin-footer {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    padding: 1rem;
}

.thong-tin-footer h3 {
    color: #3498db;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    border-bottom: 3px solid #3498db;
    padding-bottom: 0.8rem;
    font-weight: 700;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.5rem 0;
    color: #ecf0f1;
    font-size: 1.05rem;
}

.thong-tin-footer a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;
}

.thong-tin-footer a:hover {
    color: #5dade2;
}

.lien-he p,
.cap-nhat p {
    color: #ecf0f1;
    margin: 0.8rem 0;
    font-size: 1.05rem;
}

.copyright {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    border-top: 2px solid #34495e;
    color: #95a5a6;
    font-size: 1rem;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 2.5rem;
    }
    #content {
        padding: 2rem 1rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme2: `/* Theme 2: Vintage Magazine - Báo Cũ Cổ Điển */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Merriweather', serif;
    line-height: 1.9;
    color: #3e2723;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect fill="%23f5e6d3" width="100" height="100"/><circle fill="%23e8d5c4" cx="50" cy="50" r="40" opacity="0.1"/></svg>');
    background-color: #f5e6d3;
}

#header {
    background: linear-gradient(180deg, #8d6e63 0%, #6d4c41 100%);
    color: #f5e6d3;
    padding: 3rem 0;
    text-align: center;
    border-top: 8px solid #5d4037;
    border-bottom: 8px double #5d4037;
    box-shadow: inset 0 0 50px rgba(0,0,0,0.3);
}

.banner {
    padding: 2rem;
    border: 3px double #5d4037;
    margin: 0 2rem;
    background: rgba(93, 64, 55, 0.2);
}

.ten-bao {
    font-size: 4.5rem;
    font-weight: 900;
    font-family: 'Georgia', serif;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-shadow: 3px 3px 0px rgba(93, 64, 55, 0.5);
    margin-bottom: 1rem;
}

.slogan {
    font-size: 1.3rem;
    font-style: italic;
    border-top: 2px solid #5d4037;
    border-bottom: 2px solid #5d4037;
    padding: 0.8rem 0;
    margin-top: 1rem;
    letter-spacing: 2px;
}

#content {
    max-width: 1100px;
    margin: 3rem auto;
    padding: 3rem;
    background: #fdf6e3;
    border: 5px solid #8d6e63;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3), inset 0 0 100px rgba(141, 110, 99, 0.1);
    position: relative;
}

#content:before {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 2px solid #a1887f;
    pointer-events: none;
}

.gioi-thieu {
    padding: 2.5rem;
    background: #fff9e6;
    border: 3px double #a1887f;
    margin: 2rem 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.gioi-thieu h2 {
    font-family: 'Playfair Display', serif;
    color: #5d4037;
    font-size: 2.5rem;
    border-bottom: 3px double #8d6e63;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.gioi-thieu p {
    font-size: 1.2rem;
    line-height: 2;
    text-indent: 3rem;
}

.khu-vuc-bai-viet {
    padding: 2rem;
    margin: 3rem 0;
}

.khu-vuc-bai-viet h2 {
    font-family: 'Playfair Display', serif;
    color: #5d4037;
    font-size: 3rem;
    border-top: 4px solid #8d6e63;
    border-bottom: 4px solid #8d6e63;
    padding: 1rem 0;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.bai-viet {
    background: #fff9e6;
    border: 3px solid #bcaaa4;
    padding: 2.5rem;
    margin-bottom: 3rem;
    box-shadow: 5px 5px 0px rgba(93, 64, 55, 0.2);
    position: relative;
}

.bai-viet:before {
    content: '❝';
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 5rem;
    color: #8d6e63;
    opacity: 0.3;
}

.tieu-de-bai {
    font-family: 'Playfair Display', serif;
    color: #5d4037;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
    font-weight: 900;
}

.noi-dung {
    color: #4e342e;
    font-size: 1.15rem;
    line-height: 2.1;
    text-align: justify;
    columns: 2;
    column-gap: 2rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #795548;
    margin-top: 2rem;
    font-size: 1.2rem;
    border-top: 2px solid #bcaaa4;
    padding-top: 1rem;
}

.goc-anh {
    padding: 3rem 2rem;
    background: #fff9e6;
    border: 5px double #a1887f;
    margin: 3rem 0;
}

.goc-anh h2 {
    font-family: 'Playfair Display', serif;
    color: #5d4037;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: 3px double #8d6e63;
    padding-bottom: 1rem;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2.5rem;
}

.khung-anh {
    background: white;
    border: 5px solid #8d6e63;
    padding: 1rem;
    box-shadow: 8px 8px 0px rgba(93, 64, 55, 0.3);
    transition: transform 0.3s ease;
}

.khung-anh:hover {
    transform: rotate(-2deg) scale(1.05);
}

.khung-anh img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border: 2px solid #bcaaa4;
    filter: sepia(30%) contrast(1.1);
}

.mo-ta-anh {
    padding: 1rem;
    text-align: center;
    color: #5d4037;
    font-style: italic;
    font-size: 1.1rem;
    border-top: 2px solid #bcaaa4;
    margin-top: 0.5rem;
}

.goc-am-nhac {
    padding: 3rem 2rem;
    background: #ffeaa7;
    border: 5px double #d4a574;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.goc-am-nhac h2 {
    font-family: 'Playfair Display', serif;
    color: #8b4513;
    margin-bottom: 2rem;
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: 3px double #d4a574;
    padding-bottom: 1rem;
}

.khu-vuc-media {
    max-width: 800px;
    margin: 0 auto;
}

.gioi-thieu-media {
    font-weight: 800;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #8b4513;
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.audio-player {
    width: 100%;
    margin-bottom: 2.5rem;
    border: 3px solid #d4a574;
    border-radius: 5px;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 5px solid #d4a574;
    box-shadow: 10px 10px 0px rgba(139, 69, 19, 0.3);
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: sepia(10%);
}

.goc-binh-luan {
    padding: 3rem 2rem;
    background: #e8dcc8;
    border: 5px double #a1887f;
    margin: 3rem 0;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.goc-binh-luan h2 {
    font-family: 'Playfair Display', serif;
    color: #5d4037;
    margin-bottom: 2rem;
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    border-bottom: 3px double #8d6e63;
    padding-bottom: 1rem;
}

.khu-vuc-form {
    max-width: 700px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    color: #5d4037;
    font-style: italic;
    font-weight: 600;
}

.form-binh-luan {
    background: #fff9e6;
    padding: 3rem;
    border: 3px solid #bcaaa4;
    box-shadow: 5px 5px 0px rgba(93, 64, 55, 0.2);
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    font-weight: 800;
    margin-bottom: 0.8rem;
    color: #5d4037;
    font-size: 1.15rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1rem;
    border: 3px solid #bcaaa4;
    background: white;
    font-size: 1.05rem;
    font-family: 'Georgia', serif;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #8d6e63;
    box-shadow: 0 0 0 3px rgba(141, 110, 99, 0.2);
}

.nut-gui {
    background: linear-gradient(180deg, #8d6e63 0%, #6d4c41 100%);
    color: #f5e6d3;
    padding: 1.3rem 3rem;
    border: 3px solid #5d4037;
    font-size: 1.3rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 3px;
    box-shadow: 5px 5px 0px rgba(93, 64, 55, 0.3);
}

.nut-gui:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px rgba(93, 64, 55, 0.3);
}

#footer {
    background: linear-gradient(180deg, #6d4c41 0%, #5d4037 100%);
    color: #f5e6d3;
    padding: 3rem 2rem;
    margin-top: 4rem;
    border-top: 8px double #8d6e63;
}

.thong-tin-footer {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
}

.thong-tin-footer h3 {
    color: #ffccbc;
    border-bottom: 3px solid #a1887f;
    padding-bottom: 1rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.6rem 0;
    font-size: 1.1rem;
}

.thong-tin-footer a {
    color: #ffccbc;
    text-decoration: none;
}

.thong-tin-footer a:hover {
    text-decoration: underline;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.1rem;
    margin: 0.8rem 0;
}

.copyright {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    border-top: 3px double #8d6e63;
    font-size: 1.05rem;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 2.5rem;
    }
    .noi-dung {
        columns: 1;
    }
}`,

    theme3: `/* Theme 3: Ocean Wave - Sóng Biển Xanh */
@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600;700&family=Quicksand:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Mulish', sans-serif;
    line-height: 1.7;
    color: #01579b;
    background: linear-gradient(180deg, #e1f5fe 0%, #80deea 50%, #4dd0e1 100%);
    background-attachment: fixed;
}

#header {
    background: linear-gradient(135deg, rgba(2, 119, 189, 0.9) 0%, rgba(1, 87, 155, 0.9) 100%);
    backdrop-filter: blur(10px);
    color: white;
    padding: 4rem 0;
    text-align: center;
    box-shadow: 0 10px 40px rgba(1, 87, 155, 0.4);
    position: relative;
    overflow: hidden;
}

#header:before {
    content: '🌊';
    position: absolute;
    font-size: 15rem;
    opacity: 0.1;
    top: -50px;
    right: -50px;
    animation: wave 3s ease-in-out infinite;
}

@keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(10deg); }
}

.banner {
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 4.5rem;
    font-weight: 900;
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    letter-spacing: 5px;
    margin-bottom: 1rem;
    animation: floatIn 1.5s ease;
}

@keyframes floatIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
}

.slogan {
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 300;
}

#content {
    max-width: 1300px;
    margin: 3rem auto;
    padding: 0;
    background: transparent;
}

.gioi-thieu {
    padding: 3rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 30px 30px 0 0;
    margin: 0;
    box-shadow: 0 10px 40px rgba(2, 119, 189, 0.3);
    border-bottom: 5px solid #0277bd;
}

.gioi-thieu h2 {
    font-family: 'Quicksand', sans-serif;
    color: #0277bd;
    font-size: 2.8rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 800;
}

.gioi-thieu p {
    font-size: 1.2rem;
    line-height: 2;
}

.khu-vuc-bai-viet {
    padding: 3rem;
    background: rgba(255, 255, 255, 0.95);
    margin: 2rem 0 0 0;
    box-shadow: 0 10px 40px rgba(2, 119, 189, 0.3);
}

.khu-vuc-bai-viet h2 {
    font-family: 'Quicksand', sans-serif;
    color: #01579b;
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 800;
    position: relative;
    padding-bottom: 1.5rem;
}

.khu-vuc-bai-viet h2:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    background: linear-gradient(90deg, transparent, #0277bd, transparent);
    border-radius: 5px;
}

.bai-viet {
    background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
    border: none;
    border-left: 8px solid #0277bd;
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(2, 119, 189, 0.15);
}

.bai-viet:hover {
    transform: translateX(15px);
    box-shadow: -10px 15px 40px rgba(2, 119, 189, 0.35);
    border-left-width: 15px;
}

.tieu-de-bai {
    font-family: 'Quicksand', sans-serif;
    color: #01579b;
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 800;
}

.noi-dung {
    color: #01579b;
    font-size: 1.1rem;
    line-height: 2;
    text-align: justify;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #0277bd;
    margin-top: 2rem;
    font-weight: 700;
    font-size: 1.15rem;
}

.goc-anh {
    padding: 3rem;
    background: rgba(255, 255, 255, 0.95);
    margin: 2rem 0 0 0;
    box-shadow: 0 10px 40px rgba(2, 119, 189, 0.3);
}

.goc-anh h2 {
    font-family: 'Quicksand', sans-serif;
    color: #01579b;
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.8rem;
    font-weight: 800;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}

.khung-anh {
    background: white;
    border: none;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(2, 119, 189, 0.25);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(2, 119, 189, 0) 0%, rgba(1, 87, 155, 0.3) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
}

.khung-anh:hover:before {
    opacity: 1;
}

.khung-anh:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 20px 50px rgba(2, 119, 189, 0.4);
}

.khung-anh img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.khung-anh:hover img {
    transform: scale(1.15);
}

.mo-ta-anh {
    padding: 1.5rem;
    text-align: center;
    color: #01579b;
    background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
    font-weight: 700;
    position: relative;
    z-index: 2;
}

.goc-am-nhac {
    padding: 4rem 3rem;
    background: rgba(255, 255, 255, 0.95);
    margin: 2rem 0 0 0;
    box-shadow: 0 10px 40px rgba(2, 119, 189, 0.3);
}

.goc-am-nhac h2 {
    font-family: 'Quicksand', sans-serif;
    color: #0277bd;
    margin-bottom: 3rem;
    font-size: 2.8rem;
    text-align: center;
    font-weight: 800;
}

.khu-vuc-media {
    max-width: 900px;
    margin: 0 auto;
}

.gioi-thieu-media {
    font-weight: 800;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    color: #01579b;
    font-size: 1.6rem;
    text-align: center;
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(2, 119, 189, 0.3);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 25px;
    box-shadow: 0 15px 50px rgba(2, 119, 189, 0.4);
    background: #000;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 25px;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 4rem 3rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0 0 30px 30px;
    margin: 2rem 0 0 0;
    box-shadow: 0 10px 40px rgba(2, 119, 189, 0.3);
}

.goc-binh-luan h2 {
    font-family: 'Quicksand', sans-serif;
    color: #0277bd;
    margin-bottom: 2rem;
    font-size: 2.8rem;
    text-align: center;
    font-weight: 800;
}

.khu-vuc-form {
    max-width: 750px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
    color: #01579b;
    font-weight: 600;
}

.form-binh-luan {
    background: linear-gradient(135deg, #e1f5fe 0%, #b3e5fc 100%);
    padding: 3rem;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(2, 119, 189, 0.2);
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    font-weight: 800;
    margin-bottom: 1rem;
    color: #01579b;
    font-size: 1.15rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.2rem;
    border: 3px solid #81d4fa;
    border-radius: 15px;
    font-size: 1.05rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: white;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #0277bd;
    box-shadow: 0 0 0 5px rgba(2, 119, 189, 0.15);
    transform: translateY(-2px);
}

.nut-gui {
    background: linear-gradient(135deg, #0277bd 0%, #01579b 100%);
    color: white;
    padding: 1.5rem 4rem;
    border: none;
    border-radius: 50px;
    font-size: 1.3rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.4s ease;
    width: 100%;
    box-shadow: 0 8px 25px rgba(2, 119, 189, 0.4);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.nut-gui:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(2, 119, 189, 0.5);
}

.nut-gui:active {
    transform: translateY(-2px);
}

#footer {
    background: linear-gradient(135deg, #01579b 0%, #004d73 100%);
    color: white;
    padding: 4rem 2rem;
    margin-top: 4rem;
    box-shadow: 0 -10px 40px rgba(1, 87, 155, 0.3);
}

.thong-tin-footer {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.thong-tin-footer h3 {
    color: #81d4fa;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    border-bottom: 4px solid #4fc3f7;
    padding-bottom: 1rem;
    font-weight: 800;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.6rem 0;
    font-size: 1.1rem;
}

.thong-tin-footer a {
    color: #81d4fa;
    text-decoration: none;
    transition: color 0.3s ease;
}

.thong-tin-footer a:hover {
    color: #4fc3f7;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.1rem;
    margin: 0.8rem 0;
}

.copyright {
    text-align: center;
    padding: 2rem;
    margin-top: 2.5rem;
    border-top: 3px solid #0277bd;
    font-size: 1.05rem;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 2.8rem;
    }
    #content {
        margin: 2rem 1rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme4: `/* Theme 4: Swiss Minimalist - Thụy Sĩ Tối Giản */
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lato', sans-serif;
    line-height: 1.8;
    color: #000;
    background: #fff;
    font-weight: 300;
}

#header {
    background: #000;
    color: #fff;
    padding: 5rem 2rem;
    text-align: left;
    border-bottom: 2px solid #000;
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
}

.ten-bao {
    font-size: 5rem;
    font-weight: 100;
    letter-spacing: -3px;
    text-transform: uppercase;
    margin-bottom: 1rem;
    line-height: 1;
}

.slogan {
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 3px;
    margin-top: 2rem;
    opacity: 0.7;
    text-transform: uppercase;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 2rem;
}

.gioi-thieu {
    padding: 0;
    background: transparent;
    border-left: 3px solid #000;
    padding-left: 4rem;
    margin: 5rem 0;
}

.gioi-thieu h2 {
    font-size: 2.5rem;
    font-weight: 100;
    margin-bottom: 2rem;
    letter-spacing: -1px;
}

.gioi-thieu p {
    font-size: 1.2rem;
    line-height: 2;
    max-width: 800px;
}

.khu-vuc-bai-viet {
    padding: 0;
    margin: 8rem 0;
}

.khu-vuc-bai-viet h2 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 4rem;
    letter-spacing: -2px;
    border-bottom: 1px solid #000;
    padding-bottom: 2rem;
}

.bai-viet {
    background: transparent;
    border: none;
    border-top: 2px solid #e0e0e0;
    padding: 4rem 0;
    margin-bottom: 0;
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 4rem;
    align-items: start;
}

.bai-viet:first-child {
    border-top: none;
}

.tieu-de-bai {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: -0.5px;
    padding: 0;
    border: none;
}

.noi-dung {
    font-size: 1.1rem;
    line-height: 2;
    text-align: left;
    font-weight: 300;
    max-width: 700px;
}

.tac-gia {
    grid-column: 2;
    text-align: left;
    font-style: normal;
    color: #666;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.goc-anh {
    padding: 0;
    margin: 8rem 0;
}

.goc-anh h2 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 4rem;
    letter-spacing: -2px;
    border-bottom: 1px solid #000;
    padding-bottom: 2rem;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
}

.khung-anh {
    background: #000;
    border: none;
    border-radius: 0;
    overflow: hidden;
    position: relative;
}

.khung-anh img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
    filter: grayscale(30%);
    transition: all 0.4s ease;
}

.khung-anh:hover img {
    filter: grayscale(0%);
    opacity: 0.9;
}

.mo-ta-anh {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    text-align: left;
    color: #fff;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    font-weight: 400;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0;
    transition: opacity 0.4s ease;
}

.khung-anh:hover .mo-ta-anh {
    opacity: 1;
}

.goc-am-nhac {
    padding: 5rem 0;
    background: #f5f5f5;
    margin: 8rem -2rem;
    padding: 5rem 2rem;
}

.goc-am-nhac h2 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 4rem;
    letter-spacing: -2px;
    text-align: center;
}

.khu-vuc-media {
    max-width: 900px;
    margin: 0 auto;
}

.gioi-thieu-media {
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    background: #000;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 0;
    background: transparent;
    margin: 8rem 0;
}

.goc-binh-luan h2 {
    font-size: 3rem;
    font-weight: 100;
    margin-bottom: 4rem;
    letter-spacing: -2px;
    border-bottom: 1px solid #000;
    padding-bottom: 2rem;
}

.khu-vuc-form {
    max-width: 700px;
    margin: 0;
}

.khu-vuc-form > p {
    text-align: left;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    font-weight: 300;
}

.form-binh-luan {
    background: transparent;
    padding: 0;
}

.form-group {
    margin-bottom: 3rem;
}

.form-group label {
    display: block;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.2rem 0;
    border: none;
    border-bottom: 2px solid #e0e0e0;
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: 300;
    transition: all 0.3s ease;
    background: transparent;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-bottom-color: #000;
}

.nut-gui {
    background: #000;
    color: #fff;
    padding: 1.5rem 4rem;
    border: none;
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 3px;
}

.nut-gui:hover {
    background: #333;
}

#footer {
    background: #000;
    color: #fff;
    padding: 5rem 2rem;
    margin-top: 10rem;
    border-top: 2px solid #000;
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
}

.thong-tin-footer h3 {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    border-bottom: 1px solid #333;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.5rem 0;
    font-weight: 300;
    font-size: 1rem;
}

.thong-tin-footer a {
    color: #fff;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s ease;
}

.thong-tin-footer a:hover {
    opacity: 1;
}

.lien-he p,
.cap-nhat p {
    font-weight: 300;
    font-size: 1rem;
    margin: 0.8rem 0;
}

.copyright {
    text-align: center;
    padding: 3rem 0 0 0;
    margin-top: 4rem;
    border-top: 1px solid #333;
    font-weight: 300;
    font-size: 0.9rem;
    opacity: 0.6;
}

@media screen and (max-width: 1024px) {
    .bai-viet {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .tac-gia {
        grid-column: 1;
    }
    .thu-vien-anh {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme5: `/* Theme 5: Forest Nature - Rừng Xanh Thiên Nhiên */
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Nunito:wght@400;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Lora', serif;
    line-height: 1.8;
    color: #2d5016;
    background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
    background-attachment: fixed;
}

#header {
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 50%, #388e3c 100%);
    color: #fff;
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(27, 94, 32, 0.3);
}

#header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%);
    animation: leafFloat 8s ease-in-out infinite;
}

@keyframes leafFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 3px 3px 10px rgba(0,0,0,0.3);
    letter-spacing: 2px;
}

.slogan {
    font-size: 1.4rem;
    opacity: 0.95;
    font-style: italic;
    letter-spacing: 1px;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.gioi-thieu {
    background: rgba(255, 255, 255, 0.95);
    padding: 4rem;
    margin: 3rem 0;
    border-radius: 40px 10px;
    box-shadow: 
        0 10px 40px rgba(27, 94, 32, 0.15),
        inset 0 0 0 3px rgba(76, 175, 80, 0.3);
    position: relative;
}

.gioi-thieu::before {
    content: '🌿';
    position: absolute;
    top: -30px;
    left: 40px;
    font-size: 4rem;
}

.gioi-thieu h2 {
    color: #1b5e20;
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}

.gioi-thieu p {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 2;
    color: #33691e;
}

.khu-vuc-bai-viet {
    padding: 4rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #1b5e20;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    font-weight: 700;
    position: relative;
    display: inline-block;
    width: 100%;
    font-family: 'Nunito', sans-serif;
}

.khu-vuc-bai-viet h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(to right, transparent, #4caf50, transparent);
}

.bai-viet {
    background: rgba(255, 255, 255, 0.95);
    padding: 3.5rem;
    margin-bottom: 3rem;
    border-radius: 10px 40px;
    box-shadow: 0 8px 30px rgba(27, 94, 32, 0.15);
    border-left: 8px solid #66bb6a;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.bai-viet::before {
    content: '';
    position: absolute;
    top: 20px;
    right: 20px;
    width: 80px;
    height: 80px;
    background: radial-gradient(circle, rgba(76, 175, 80, 0.2), transparent);
    border-radius: 50%;
    pointer-events: none;
}

.bai-viet:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(27, 94, 32, 0.25);
    border-left-color: #43a047;
}

.tieu-de-bai {
    color: #1b5e20;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px dashed rgba(76, 175, 80, 0.3);
    font-family: 'Nunito', sans-serif;
}

.noi-dung {
    font-size: 1.15rem;
    line-height: 2;
    text-align: justify;
    color: #33691e;
    margin-bottom: 1.5rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #558b2f;
    font-weight: 600;
    font-size: 1.05rem;
}

.goc-anh {
    padding: 5rem 0;
    background: rgba(255, 255, 255, 0.6);
    margin: 4rem -2rem;
    padding: 5rem 2rem;
    border-radius: 50px;
}

.goc-anh h2 {
    text-align: center;
    color: #1b5e20;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2.5rem;
}

.khung-anh {
    background: #fff;
    border: none;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(27, 94, 32, 0.2);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(27, 94, 32, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
}

.khung-anh:hover::before {
    opacity: 1;
}

.khung-anh:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 20px 50px rgba(27, 94, 32, 0.35);
}

.khung-anh img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}

.khung-anh:hover img {
    transform: scale(1.1);
}

.mo-ta-anh {
    padding: 1.5rem;
    text-align: center;
    color: #2d5016;
    font-weight: 600;
    background: rgba(232, 245, 233, 0.95);
    position: relative;
    z-index: 2;
}

.goc-am-nhac {
    padding: 5rem 0;
    background: rgba(255, 255, 255, 0.9);
    margin: 4rem 0;
    border-radius: 50px;
    box-shadow: 0 15px 50px rgba(27, 94, 32, 0.2);
}

.goc-am-nhac h2 {
    text-align: center;
    color: #1b5e20;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}

.khu-vuc-media {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
}

.gioi-thieu-media {
    color: #2e7d32;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    text-align: center;
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 50px;
    box-shadow: 0 8px 25px rgba(27, 94, 32, 0.2);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 10px 40px rgba(27, 94, 32, 0.25);
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
}

.video-player {
    width: 100%;
    border-radius: 30px;
}

.goc-binh-luan {
    padding: 5rem 0;
    background: rgba(255, 255, 255, 0.9);
    margin: 4rem 0;
    border-radius: 50px;
    box-shadow: 0 15px 50px rgba(27, 94, 32, 0.2);
}

.goc-binh-luan h2 {
    text-align: center;
    color: #1b5e20;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Nunito', sans-serif;
}

.khu-vuc-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #33691e;
}

.form-binh-luan {
    background: rgba(232, 245, 233, 0.5);
    padding: 3rem;
    border-radius: 30px;
    box-shadow: inset 0 0 0 2px rgba(76, 175, 80, 0.3);
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    color: #2e7d32;
    font-weight: 700;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.2rem;
    border: 2px solid rgba(76, 175, 80, 0.3);
    border-radius: 20px;
    font-size: 1.05rem;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.9);
    color: #2d5016;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #4caf50;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.2);
    background: #fff;
}

.nut-gui {
    background: linear-gradient(135deg, #2e7d32 0%, #43a047 100%);
    color: #fff;
    padding: 1.3rem 4rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(46, 125, 50, 0.4);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.nut-gui:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(46, 125, 50, 0.5);
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
}

#footer {
    background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 100%);
    color: #fff;
    padding: 5rem 2rem 3rem 2rem;
    margin-top: 6rem;
    border-radius: 50px 50px 0 0;
    box-shadow: 0 -10px 40px rgba(27, 94, 32, 0.3);
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.thong-tin-footer h3 {
    color: #c8e6c9;
    font-size: 1.5rem;
    font-weight: 700;
    border-bottom: 3px solid rgba(200, 230, 201, 0.3);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-family: 'Nunito', sans-serif;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.thong-tin-footer a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.05rem;
}

.thong-tin-footer a:hover {
    color: #c8e6c9;
    padding-left: 10px;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.05rem;
    margin: 1rem 0;
}

.copyright {
    text-align: center;
    padding: 3rem 0 1rem 0;
    margin-top: 3rem;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    opacity: 0.9;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme6: `/* Theme 6: Cyberpunk Neon - Tương Lai Neon */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Orbitron:wght@700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto Mono', monospace;
    line-height: 1.7;
    color: #00ffff;
    background: #0a0a0a;
    background-image: 
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px);
}

@keyframes neonPulse {
    0%, 100% {
        text-shadow: 
            0 0 10px #ff00ff,
            0 0 20px #ff00ff,
            0 0 30px #ff00ff,
            0 0 40px #ff00ff;
    }
    50% {
        text-shadow: 
            0 0 5px #ff00ff,
            0 0 10px #ff00ff,
            0 0 15px #ff00ff,
            0 0 20px #ff00ff;
    }
}

@keyframes glitchEffect {
    0%, 100% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(-2px, -2px); }
    60% { transform: translate(2px, 2px); }
    80% { transform: translate(2px, -2px); }
}

@keyframes borderGlow {
    0%, 100% {
        box-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            inset 0 0 10px rgba(0, 255, 255, 0.2);
    }
    50% {
        box-shadow: 
            0 0 20px #ff00ff,
            0 0 40px #ff00ff,
            inset 0 0 20px rgba(255, 0, 255, 0.2);
    }
}

#header {
    background: linear-gradient(180deg, #1a001a 0%, #0a0a0a 100%);
    color: #ff00ff;
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    border-bottom: 3px solid #00ffff;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

#header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        linear-gradient(90deg, transparent 0%, rgba(255, 0, 255, 0.1) 50%, transparent 100%);
    animation: glitchEffect 5s infinite;
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    animation: neonPulse 2s infinite;
    position: relative;
}

.ten-bao::before {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    top: 2px;
    color: #00ffff;
    z-index: -1;
    filter: blur(2px);
}

.slogan {
    font-size: 1.3rem;
    color: #00ffff;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 0 0 10px #00ffff;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.gioi-thieu {
    background: rgba(26, 0, 26, 0.8);
    padding: 3.5rem;
    margin: 3rem 0;
    border: 2px solid #ff00ff;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.4);
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%);
}

.gioi-thieu::before {
    content: '▶';
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 2rem;
    color: #00ffff;
    animation: neonPulse 2s infinite;
}

.gioi-thieu h2 {
    color: #ff00ff;
    font-size: 3rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    text-shadow: 0 0 20px #ff00ff;
    font-family: 'Orbitron', sans-serif;
}

.gioi-thieu p {
    font-size: 1.15rem;
    line-height: 2;
    color: #00ffff;
}

.khu-vuc-bai-viet {
    padding: 4rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #00ffff;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-shadow: 0 0 30px #00ffff;
    position: relative;
    font-family: 'Orbitron', sans-serif;
}

.khu-vuc-bai-viet h2::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 3px;
    background: linear-gradient(to right, transparent, #ff00ff, #00ffff, #ff00ff, transparent);
    box-shadow: 0 0 20px #ff00ff;
}

.bai-viet {
    background: rgba(10, 10, 10, 0.9);
    padding: 3rem;
    margin-bottom: 3rem;
    border: 2px solid #00ffff;
    clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
    position: relative;
    transition: all 0.4s ease;
    animation: borderGlow 3s infinite;
}

.bai-viet::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: #ff00ff;
    clip-path: polygon(0 0, 100% 0, 0 100%);
}

.bai-viet::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: #00ffff;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
}

.bai-viet:hover {
    transform: translateX(10px);
    border-color: #ff00ff;
}

.tieu-de-bai {
    color: #ff00ff;
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 15px #ff00ff;
    font-family: 'Orbitron', sans-serif;
}

.noi-dung {
    font-size: 1.1rem;
    line-height: 2;
    color: #00ffff;
    margin-bottom: 1.5rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #00ff00;
    font-weight: 700;
    font-size: 1.05rem;
    text-shadow: 0 0 10px #00ff00;
}

.goc-anh {
    padding: 5rem 0;
}

.goc-anh h2 {
    text-align: center;
    color: #ff00ff;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-shadow: 0 0 30px #ff00ff;
    font-family: 'Orbitron', sans-serif;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.khung-anh {
    background: #000;
    border: 3px solid #00ffff;
    position: relative;
    overflow: hidden;
    clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
    transition: all 0.4s ease;
}

.khung-anh::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: #ff00ff;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    z-index: 2;
}

.khung-anh::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15px;
    height: 15px;
    background: #00ffff;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);
    z-index: 2;
}

.khung-anh:hover {
    border-color: #ff00ff;
    box-shadow: 
        0 0 30px rgba(255, 0, 255, 0.6),
        inset 0 0 30px rgba(255, 0, 255, 0.2);
    transform: scale(1.05);
}

.khung-anh img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    filter: contrast(1.2) saturate(1.3);
    transition: all 0.4s ease;
}

.khung-anh:hover img {
    filter: contrast(1.5) saturate(1.5) hue-rotate(20deg);
}

.mo-ta-anh {
    padding: 1.5rem;
    text-align: center;
    color: #00ffff;
    font-weight: 700;
    background: rgba(0, 255, 255, 0.1);
    border-top: 2px solid #00ffff;
    text-shadow: 0 0 10px #00ffff;
    position: relative;
    z-index: 3;
}

.goc-am-nhac {
    padding: 5rem 2rem;
    background: rgba(26, 0, 26, 0.5);
    margin: 4rem 0;
    border: 2px solid #ff00ff;
    border-left: 10px solid #ff00ff;
    box-shadow: 0 0 40px rgba(255, 0, 255, 0.4);
}

.goc-am-nhac h2 {
    text-align: center;
    color: #ff00ff;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-shadow: 0 0 30px #ff00ff;
    font-family: 'Orbitron', sans-serif;
}

.khu-vuc-media {
    max-width: 900px;
    margin: 0 auto;
}

.gioi-thieu-media {
    color: #00ffff;
    font-weight: 900;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 15px #00ffff;
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    filter: hue-rotate(270deg) saturate(2);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 3px solid #00ffff;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 5rem 2rem;
    background: rgba(10, 10, 10, 0.8);
    margin: 4rem 0;
    border: 2px solid #00ffff;
    border-right: 10px solid #00ffff;
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.4);
}

.goc-binh-luan h2 {
    text-align: center;
    color: #00ffff;
    font-size: 3.5rem;
    margin-bottom: 4rem;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-shadow: 0 0 30px #00ffff;
    font-family: 'Orbitron', sans-serif;
}

.khu-vuc-form {
    max-width: 800px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #00ffff;
}

.form-binh-luan {
    background: rgba(26, 0, 26, 0.3);
    padding: 3rem;
    border: 2px solid #ff00ff;
}

.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    color: #ff00ff;
    font-weight: 900;
    margin-bottom: 0.8rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px #ff00ff;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.2rem;
    border: 2px solid #00ffff;
    font-size: 1.05rem;
    font-family: inherit;
    background: rgba(0, 0, 0, 0.8);
    color: #00ffff;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff00ff;
    box-shadow: 
        0 0 20px rgba(255, 0, 255, 0.5),
        inset 0 0 10px rgba(255, 0, 255, 0.2);
    background: rgba(26, 0, 26, 0.8);
}

.nut-gui {
    background: linear-gradient(135deg, #ff00ff 0%, #00ffff 100%);
    color: #000;
    padding: 1.3rem 4rem;
    border: none;
    font-size: 1.2rem;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.4s ease;
    text-transform: uppercase;
    letter-spacing: 3px;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.6);
    clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
}

.nut-gui:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 50px rgba(0, 255, 255, 0.8);
    background: linear-gradient(135deg, #00ffff 0%, #ff00ff 100%);
}

#footer {
    background: linear-gradient(180deg, #0a0a0a 0%, #1a001a 100%);
    color: #00ffff;
    padding: 5rem 2rem 3rem 2rem;
    margin-top: 6rem;
    border-top: 3px solid #ff00ff;
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.5);
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.thong-tin-footer h3 {
    color: #ff00ff;
    font-size: 1.5rem;
    font-weight: 900;
    border-bottom: 2px solid #ff00ff;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    text-shadow: 0 0 15px #ff00ff;
    font-family: 'Orbitron', sans-serif;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.thong-tin-footer li::before {
    content: '▶ ';
    color: #00ffff;
}

.thong-tin-footer a {
    color: #00ffff;
    text-decoration: none;
    transition: all 0.3s ease;
}

.thong-tin-footer a:hover {
    color: #ff00ff;
    text-shadow: 0 0 10px #ff00ff;
    padding-left: 10px;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.05rem;
    margin: 1rem 0;
}

.copyright {
    text-align: center;
    padding: 3rem 0 1rem 0;
    margin-top: 3rem;
    border-top: 2px solid rgba(0, 255, 255, 0.3);
    font-size: 1rem;
    text-shadow: 0 0 10px #00ffff;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
        letter-spacing: 3px;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme7: `/* Theme 7: Sunset Beach - Hoàng Hôn Biển */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Mali:wght@400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Comfortaa', cursive;
    line-height: 1.8;
    color: #5d2e0f;
    background: linear-gradient(180deg, #fff5e6 0%, #ffe4c4 50%, #ffd4a3 100%);
    background-attachment: fixed;
}

@keyframes waveMove {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-20px) translateY(-5px); }
    100% { transform: translateX(0) translateY(0); }
}

@keyframes sunsetGlow {
    0%, 100% {
        box-shadow: 
            0 10px 40px rgba(255, 140, 0, 0.4),
            0 0 80px rgba(255, 69, 0, 0.2);
    }
    50% {
        box-shadow: 
            0 15px 60px rgba(255, 140, 0, 0.6),
            0 0 100px rgba(255, 69, 0, 0.3);
    }
}

#header {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 25%, #ffa500 50%, #ffb347 75%, #ffd700 100%);
    color: #fff;
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(255, 140, 0, 0.4);
}

#header::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: 
        radial-gradient(ellipse at 50% 100%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
    animation: waveMove 6s ease-in-out infinite;
}

#header::after {
    content: '☀️';
    position: absolute;
    top: 30px;
    right: 80px;
    font-size: 5rem;
    opacity: 0.4;
    animation: sunsetGlow 3s infinite;
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 
        3px 3px 10px rgba(0, 0, 0, 0.3),
        0 0 30px rgba(255, 255, 255, 0.5);
    letter-spacing: 3px;
}

.slogan {
    font-size: 1.6rem;
    font-style: italic;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.gioi-thieu {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 239, 213, 0.95) 100%);
    padding: 4rem;
    margin: 3rem 0;
    border-radius: 50px;
    box-shadow: 
        0 15px 50px rgba(255, 140, 0, 0.25),
        inset 0 0 30px rgba(255, 200, 100, 0.1);
    border: 3px solid rgba(255, 165, 0, 0.3);
    position: relative;
}

.gioi-thieu::before {
    content: '🌅';
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
}

.gioi-thieu h2 {
    color: #ff6b35;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    text-shadow: 2px 2px 5px rgba(255, 140, 0, 0.2);
}

.gioi-thieu p {
    font-size: 1.3rem;
    text-align: center;
    line-height: 2.2;
    color: #8b4513;
}

.khu-vuc-bai-viet {
    padding: 5rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #ff6b35;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 700;
    position: relative;
    text-shadow: 3px 3px 8px rgba(255, 140, 0, 0.3);
}

.khu-vuc-bai-viet h2::after {
    content: '~  🏖️  ~';
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
}

.bai-viet {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 228, 196, 0.9) 100%);
    padding: 4rem;
    margin-bottom: 3.5rem;
    border-radius: 40px;
    box-shadow: 0 15px 45px rgba(255, 140, 0, 0.3);
    border-left: 8px solid #ff8c42;
    border-right: 8px solid #ffa500;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.bai-viet::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(255, 200, 100, 0.3), transparent);
    border-radius: 50%;
    pointer-events: none;
}

.bai-viet:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(255, 140, 0, 0.5);
}

.tieu-de-bai {
    color: #ff6b35;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 5px rgba(255, 140, 0, 0.2);
}

.noi-dung {
    font-size: 1.2rem;
    line-height: 2.2;
    text-align: justify;
    color: #8b4513;
    margin-bottom: 2rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #ff8c42;
    font-weight: 600;
    font-size: 1.15rem;
    border-top: 2px solid rgba(255, 140, 0, 0.3);
    padding-top: 1rem;
}

.goc-anh {
    padding: 6rem 0;
    background: linear-gradient(135deg, rgba(255, 200, 100, 0.3) 0%, rgba(255, 220, 150, 0.3) 100%);
    margin: 4rem -2rem;
    padding: 6rem 2rem;
    border-radius: 0;
}

.goc-anh h2 {
    text-align: center;
    color: #ff6b35;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 700;
    text-shadow: 3px 3px 8px rgba(255, 140, 0, 0.3);
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.khung-anh {
    background: #fff;
    border: none;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 
        0 15px 50px rgba(255, 140, 0, 0.35),
        inset 0 0 0 5px rgba(255, 200, 100, 0.2);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.khung-anh:hover::after {
    opacity: 1;
}

.khung-anh:hover {
    transform: rotate(-2deg) scale(1.08);
    box-shadow: 
        0 25px 70px rgba(255, 140, 0, 0.5),
        inset 0 0 0 8px rgba(255, 165, 0, 0.4);
}

.khung-anh img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    filter: sepia(0.15) saturate(1.2);
}

.khung-anh:hover img {
    transform: scale(1.15);
    filter: sepia(0.3) saturate(1.4);
}

.mo-ta-anh {
    padding: 1.8rem;
    text-align: center;
    color: #8b4513;
    font-weight: 600;
    background: linear-gradient(135deg, rgba(255, 239, 213, 0.95), rgba(255, 228, 196, 0.95));
    font-size: 1.05rem;
    position: relative;
    z-index: 2;
}

.goc-am-nhac {
    padding: 6rem 3rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 239, 213, 0.95) 100%);
    margin: 5rem 0;
    border-radius: 60px;
    box-shadow: 
        0 20px 60px rgba(255, 140, 0, 0.35),
        inset 0 0 50px rgba(255, 200, 100, 0.1);
}

.goc-am-nhac h2 {
    text-align: center;
    color: #ff6b35;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 700;
    text-shadow: 3px 3px 8px rgba(255, 140, 0, 0.3);
}

.khu-vuc-media {
    max-width: 1000px;
    margin: 0 auto;
}

.gioi-thieu-media {
    color: #ff8c42;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    text-align: center;
    text-shadow: 2px 2px 5px rgba(255, 140, 0, 0.2);
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 50px;
    box-shadow: 0 10px 40px rgba(255, 140, 0, 0.3);
    border: 3px solid rgba(255, 165, 0, 0.3);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 0 15px 50px rgba(255, 140, 0, 0.4);
    border: 5px solid rgba(255, 165, 0, 0.3);
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
}

.video-player {
    width: 100%;
    border-radius: 40px;
}

.goc-binh-luan {
    padding: 6rem 3rem;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 228, 196, 0.95) 100%);
    margin: 5rem 0;
    border-radius: 60px;
    box-shadow: 
        0 20px 60px rgba(255, 140, 0, 0.35),
        inset 0 0 50px rgba(255, 200, 100, 0.1);
}

.goc-binh-luan h2 {
    text-align: center;
    color: #ff6b35;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 700;
    text-shadow: 3px 3px 8px rgba(255, 140, 0, 0.3);
}

.khu-vuc-form {
    max-width: 900px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 3rem;
    color: #8b4513;
    font-style: italic;
}

.form-binh-luan {
    background: rgba(255, 239, 213, 0.7);
    padding: 4rem;
    border-radius: 40px;
    box-shadow: inset 0 0 30px rgba(255, 140, 0, 0.2);
    border: 3px solid rgba(255, 165, 0, 0.3);
}

.form-group {
    margin-bottom: 2.5rem;
}

.form-group label {
    display: block;
    color: #ff6b35;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.5rem;
    border: 3px solid rgba(255, 165, 0, 0.4);
    border-radius: 25px;
    font-size: 1.1rem;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.9);
    color: #8b4513;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff8c42;
    box-shadow: 
        0 0 20px rgba(255, 140, 0, 0.4),
        inset 0 0 10px rgba(255, 200, 100, 0.2);
    background: #fff;
}

.nut-gui {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa500 100%);
    color: #fff;
    padding: 1.5rem 5rem;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 10px 40px rgba(255, 140, 0, 0.5);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.nut-gui:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 60px rgba(255, 140, 0, 0.7);
    background: linear-gradient(135deg, #ff8c42 0%, #ffa500 50%, #ffd700 100%);
}

#footer {
    background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 25%, #ffa500 50%, #ffb347 75%, #ffd700 100%);
    color: #fff;
    padding: 6rem 2rem 3rem 2rem;
    margin-top: 6rem;
    border-radius: 0;
    box-shadow: 0 -15px 50px rgba(255, 140, 0, 0.4);
    position: relative;
}

#footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: 
        radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
    animation: waveMove 6s ease-in-out infinite reverse;
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    position: relative;
    z-index: 1;
}

.thong-tin-footer h3 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 700;
    border-bottom: 3px solid rgba(255, 255, 255, 0.5);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.thong-tin-footer a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.1rem;
}

.thong-tin-footer a:hover {
    padding-left: 15px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
}

.lien-he p,
.cap-nhat p {
    font-size: 1.1rem;
    margin: 1rem 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.copyright {
    text-align: center;
    padding: 3rem 0 1rem 0;
    margin-top: 3rem;
    border-top: 2px solid rgba(255, 255, 255, 0.4);
    font-size: 1.05rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme8: `/* Theme 8: Kawaii Pastel - Dễ Thương Nhật Bản */
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600;700&family=Mali:wght@400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Comfortaa', cursive;
    line-height: 1.9;
    color: #7b68a6;
    background: linear-gradient(135deg, #fff5f7 0%, #fff0f5 25%, #f0f8ff 50%, #f5f0ff 75%, #fffaf0 100%);
    background-attachment: fixed;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes sparkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.3); }
}

@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
    75% { transform: scale(1.05); }
}

#header {
    background: linear-gradient(135deg, #ffb3d9 0%, #ffc8dd 25%, #b8e0ff 50%, #d4a5ff 75%, #ffd8be 100%);
    color: #fff;
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(255, 182, 193, 0.5);
}

#header::before {
    content: '♡ ✿ ♡ ✿ ♡ ✿ ♡ ✿ ♡';
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    font-size: 2rem;
    opacity: 0.4;
    animation: sparkle 3s infinite;
}

#header::after {
    content: '🌸';
    position: absolute;
    top: 50%;
    left: 10%;
    font-size: 4rem;
    opacity: 0.6;
    animation: float 4s ease-in-out infinite;
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 4.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    text-shadow: 
        3px 3px 0 #ffb3d9,
        -3px -3px 0 #b8e0ff,
        0 0 20px rgba(255, 255, 255, 0.8);
    letter-spacing: 3px;
    animation: heartBeat 2s infinite;
}

.ten-bao::before {
    content: '⭐';
    margin-right: 1rem;
}

.ten-bao::after {
    content: '⭐';
    margin-left: 1rem;
}

.slogan {
    font-size: 1.5rem;
    font-style: italic;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    letter-spacing: 2px;
}

.slogan::before {
    content: '♡ ';
}

.slogan::after {
    content: ' ♡';
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.gioi-thieu {
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.98) 0%, rgba(255, 250, 250, 0.98) 100%);
    padding: 4rem;
    margin: 3rem 0;
    border-radius: 60px;
    box-shadow: 
        0 15px 50px rgba(255, 182, 193, 0.4),
        inset 0 0 0 5px rgba(255, 192, 203, 0.3);
    border: 5px dashed #ffb3d9;
    position: relative;
}

.gioi-thieu::before {
    content: '🎀';
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    animation: heartBeat 2s infinite;
}

.gioi-thieu::after {
    content: '🌷';
    position: absolute;
    bottom: 20px;
    right: 40px;
    font-size: 3rem;
    opacity: 0.5;
    animation: float 3s ease-in-out infinite;
}

.gioi-thieu h2 {
    color: #ff69b4;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 900;
    text-shadow: 3px 3px 0 #ffb3d9;
}

.gioi-thieu h2::before {
    content: '☆ ';
    color: #b8e0ff;
}

.gioi-thieu h2::after {
    content: ' ☆';
    color: #d4a5ff;
}

.gioi-thieu p {
    font-size: 1.2rem;
    text-align: center;
    line-height: 2.2;
    color: #9370db;
}

.khu-vuc-bai-viet {
    padding: 5rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #ff69b4;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
    text-shadow: 3px 3px 0 #ffb3d9;
    position: relative;
}

.khu-vuc-bai-viet h2::before {
    content: '✿ ';
    color: #b8e0ff;
}

.khu-vuc-bai-viet h2::after {
    content: ' ✿';
    color: #d4a5ff;
}

.bai-viet {
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.98) 0%, rgba(255, 250, 250, 0.98) 100%);
    padding: 3.5rem;
    margin-bottom: 3rem;
    border-radius: 50px;
    box-shadow: 0 15px 45px rgba(255, 182, 193, 0.4);
    border: 4px solid #ffb3d9;
    transition: all 0.4s ease;
    position: relative;
}

.bai-viet::before {
    content: '♡';
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 3rem;
    color: #ffb3d9;
    opacity: 0.3;
    animation: heartBeat 2s infinite;
}

.bai-viet::after {
    content: '⭐';
    position: absolute;
    bottom: 20px;
    left: 30px;
    font-size: 2rem;
    color: #b8e0ff;
    opacity: 0.4;
    animation: sparkle 3s infinite;
}

.bai-viet:hover {
    transform: translateY(-10px) rotate(-1deg);
    box-shadow: 0 25px 60px rgba(255, 182, 193, 0.6);
    border-color: #ff69b4;
}

.tieu-de-bai {
    color: #ff69b4;
    font-size: 2.2rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 0 #ffb3d9;
}

.tieu-de-bai::before {
    content: '♪ ';
    color: #b8e0ff;
}

.noi-dung {
    font-size: 1.15rem;
    line-height: 2.2;
    text-align: justify;
    color: #9370db;
    margin-bottom: 2rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #ff69b4;
    font-weight: 700;
    font-size: 1.1rem;
    padding: 1rem;
    background: rgba(255, 192, 203, 0.2);
    border-radius: 25px;
}

.tac-gia::before {
    content: '~ ';
}

.tac-gia::after {
    content: ' ~';
}

.goc-anh {
    padding: 6rem 0;
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.5) 0%, rgba(240, 248, 255, 0.5) 100%);
    margin: 4rem -2rem;
    padding: 6rem 2rem;
    border-radius: 0;
    position: relative;
}

.goc-anh::before {
    content: '🦋';
    position: absolute;
    top: 40px;
    left: 80px;
    font-size: 4rem;
    opacity: 0.5;
    animation: float 5s ease-in-out infinite;
}

.goc-anh::after {
    content: '🌺';
    position: absolute;
    bottom: 40px;
    right: 80px;
    font-size: 4rem;
    opacity: 0.5;
    animation: float 4s ease-in-out infinite reverse;
}

.goc-anh h2 {
    text-align: center;
    color: #ff69b4;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 900;
    text-shadow: 3px 3px 0 #ffb3d9;
}

.goc-anh h2::before {
    content: '📷 ';
}

.goc-anh h2::after {
    content: ' 📷';
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 3rem;
}

.khung-anh {
    background: #fff;
    border: none;
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 
        0 15px 50px rgba(255, 182, 193, 0.45),
        inset 0 0 0 6px rgba(255, 192, 203, 0.3);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh::before {
    content: '✿';
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 2.5rem;
    color: #fff;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease;
    animation: sparkle 2s infinite;
}

.khung-anh:hover::before {
    opacity: 1;
}

.khung-anh:hover {
    transform: rotate(3deg) scale(1.08);
    box-shadow: 
        0 25px 70px rgba(255, 182, 193, 0.6),
        inset 0 0 0 10px rgba(255, 105, 180, 0.4);
}

.khung-anh img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    filter: saturate(1.3) brightness(1.05);
}

.khung-anh:hover img {
    transform: scale(1.15);
    filter: saturate(1.5) brightness(1.1);
}

.mo-ta-anh {
    padding: 1.8rem;
    text-align: center;
    color: #9370db;
    font-weight: 700;
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.98), rgba(255, 250, 250, 0.98));
    font-size: 1.05rem;
    position: relative;
    z-index: 2;
}

.goc-am-nhac {
    padding: 6rem 3rem;
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.98) 0%, rgba(240, 248, 255, 0.98) 100%);
    margin: 5rem 0;
    border-radius: 60px;
    box-shadow: 
        0 20px 60px rgba(255, 182, 193, 0.45),
        inset 0 0 50px rgba(255, 192, 203, 0.2);
    border: 5px dashed #ffb3d9;
    position: relative;
}

.goc-am-nhac::before {
    content: '🎵';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    animation: float 3s ease-in-out infinite;
}

.goc-am-nhac h2 {
    text-align: center;
    color: #ff69b4;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 900;
    text-shadow: 3px 3px 0 #ffb3d9;
}

.goc-am-nhac h2::before {
    content: '♪ ';
    color: #b8e0ff;
}

.goc-am-nhac h2::after {
    content: ' ♪';
    color: #d4a5ff;
}

.khu-vuc-media {
    max-width: 1000px;
    margin: 0 auto;
}

.gioi-thieu-media {
    color: #ff69b4;
    font-weight: 900;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    text-align: center;
    text-shadow: 2px 2px 0 #ffb3d9;
}

.gioi-thieu-media::before {
    content: '🎀 ';
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    border-radius: 50px;
    box-shadow: 0 10px 40px rgba(255, 182, 193, 0.4);
    border: 4px solid #ffb3d9;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 40px;
    box-shadow: 0 15px 50px rgba(255, 182, 193, 0.5);
    border: 5px solid #ffb3d9;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
}

.video-player {
    width: 100%;
    border-radius: 40px;
}

.goc-binh-luan {
    padding: 6rem 3rem;
    background: linear-gradient(135deg, rgba(255, 240, 245, 0.98) 0%, rgba(245, 240, 255, 0.98) 100%);
    margin: 5rem 0;
    border-radius: 60px;
    box-shadow: 
        0 20px 60px rgba(255, 182, 193, 0.45),
        inset 0 0 50px rgba(212, 165, 255, 0.2);
    border: 5px dashed #d4a5ff;
    position: relative;
}

.goc-binh-luan::before {
    content: '💬';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 4rem;
    animation: heartBeat 2s infinite;
}

.goc-binh-luan h2 {
    text-align: center;
    color: #ff69b4;
    font-size: 4rem;
    margin-bottom: 4rem;
    font-weight: 900;
    text-shadow: 3px 3px 0 #ffb3d9;
}

.goc-binh-luan h2::before {
    content: '✿ ';
    color: #b8e0ff;
}

.goc-binh-luan h2::after {
    content: ' ✿';
    color: #d4a5ff;
}

.khu-vuc-form {
    max-width: 900px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 3rem;
    color: #9370db;
    font-weight: 700;
}

.form-binh-luan {
    background: rgba(255, 240, 245, 0.8);
    padding: 4rem;
    border-radius: 50px;
    box-shadow: inset 0 0 30px rgba(255, 182, 193, 0.3);
    border: 4px solid #ffb3d9;
}

.form-group {
    margin-bottom: 2.5rem;
}

.form-group label {
    display: block;
    color: #ff69b4;
    font-weight: 900;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.form-group label::before {
    content: '♡ ';
    color: #b8e0ff;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.5rem;
    border: 4px solid rgba(255, 182, 193, 0.5);
    border-radius: 30px;
    font-size: 1.1rem;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.95);
    color: #7b68a6;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #ff69b4;
    box-shadow: 
        0 0 20px rgba(255, 105, 180, 0.5),
        inset 0 0 10px rgba(255, 192, 203, 0.3);
    background: #fff;
}

.nut-gui {
    background: linear-gradient(135deg, #ffb3d9 0%, #ff69b4 50%, #d4a5ff 100%);
    color: #fff;
    padding: 1.5rem 5rem;
    border: none;
    border-radius: 50px;
    font-size: 1.3rem;
    font-weight: 900;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 10px 40px rgba(255, 105, 180, 0.6);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.nut-gui::before {
    content: '♡ ';
}

.nut-gui::after {
    content: ' ♡';
}

.nut-gui:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 15px 60px rgba(255, 105, 180, 0.8);
    background: linear-gradient(135deg, #ff69b4 0%, #ffb3d9 50%, #b8e0ff 100%);
    animation: heartBeat 1s infinite;
}

#footer {
    background: linear-gradient(135deg, #ffb3d9 0%, #ffc8dd 25%, #b8e0ff 50%, #d4a5ff 75%, #ffd8be 100%);
    color: #fff;
    padding: 6rem 2rem 3rem 2rem;
    margin-top: 6rem;
    border-radius: 60px 60px 0 0;
    box-shadow: 0 -15px 50px rgba(255, 182, 193, 0.5);
    position: relative;
}

#footer::before {
    content: '♡ ✿ ♡ ✿ ♡ ✿ ♡ ✿ ♡';
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    font-size: 2rem;
    opacity: 0.4;
    text-align: center;
    animation: sparkle 3s infinite;
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    position: relative;
    z-index: 1;
}

.thong-tin-footer h3 {
    color: #fff;
    font-size: 1.8rem;
    font-weight: 900;
    border-bottom: 4px dashed rgba(255, 255, 255, 0.6);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.thong-tin-footer h3::before {
    content: '🌸 ';
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 1rem 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}

.thong-tin-footer li::before {
    content: '♡ ';
    color: rgba(255, 255, 255, 0.8);
}

.thong-tin-footer a {
    color: #fff;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    font-weight: 700;
}

.thong-tin-footer a:hover {
    padding-left: 15px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
}

.lien-he p,
.cap-nhat p {
    font-size: 1.1rem;
    margin: 1rem 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    font-weight: 700;
}

.copyright {
    text-align: center;
    padding: 3rem 0 1rem 0;
    margin-top: 3rem;
    border-top: 3px dashed rgba(255, 255, 255, 0.5);
    font-size: 1.05rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    font-weight: 700;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme9: `/* Theme 9: Corporate Professional - Chuyên Nghiệp Doanh Nghiệp */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Roboto+Condensed:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.8;
    color: #2c3e50;
    background: linear-gradient(135deg, #ecf0f1 0%, #e8eaec 100%);
    background-attachment: fixed;
}

#header {
    background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #34568b 100%);
    color: #fff;
    padding: 4rem 2rem;
    text-align: center;
    box-shadow: 0 10px 40px rgba(30, 58, 95, 0.4);
    position: relative;
}

#header::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #c9a961, #d4af37, #c9a961);
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
}

.ten-bao {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-family: 'Georgia', serif;
}

.slogan {
    font-size: 1.3rem;
    font-style: italic;
    opacity: 0.95;
    letter-spacing: 2px;
    font-weight: 300;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.gioi-thieu {
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    padding: 4rem;
    margin: 3rem 0;
    border-left: 6px solid #c9a961;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    position: relative;
}

.gioi-thieu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 80px;
    background: linear-gradient(to bottom, #d4af37, #c9a961);
}

.gioi-thieu h2 {
    color: #1e3a5f;
    font-size: 2.8rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-family: 'Georgia', serif;
    border-bottom: 3px solid #e8eaec;
    padding-bottom: 1rem;
}

.gioi-thieu p {
    font-size: 1.15rem;
    text-align: justify;
    line-height: 2;
    color: #34495e;
}

.khu-vuc-bai-viet {
    padding: 4rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #1e3a5f;
    font-size: 3.2rem;
    margin-bottom: 4rem;
    font-weight: 700;
    position: relative;
    font-family: 'Georgia', serif;
}

.khu-vuc-bai-viet h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, transparent, #c9a961, transparent);
}

.bai-viet {
    background: #fff;
    padding: 3.5rem;
    margin-bottom: 3rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    border-top: 4px solid #2c5282;
    transition: all 0.4s ease;
    position: relative;
}

.bai-viet::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #1e3a5f, #2c5282, #34568b);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.bai-viet:hover {
    transform: translateX(10px);
    box-shadow: 0 12px 45px rgba(0, 0, 0, 0.18);
}

.bai-viet:hover::before {
    opacity: 1;
}

.tieu-de-bai {
    color: #1e3a5f;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-family: 'Georgia', serif;
}

.noi-dung {
    font-size: 1.1rem;
    line-height: 2;
    text-align: justify;
    color: #34495e;
    margin-bottom: 2rem;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #7f8c8d;
    font-weight: 600;
    font-size: 1rem;
    padding-top: 1rem;
    border-top: 2px solid #ecf0f1;
}

.goc-anh {
    padding: 5rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e8eaec 100%);
    margin: 4rem -2rem;
    padding: 5rem 2rem;
}

.goc-anh h2 {
    text-align: center;
    color: #1e3a5f;
    font-size: 3.2rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Georgia', serif;
    position: relative;
}

.goc-anh h2::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, transparent, #c9a961, transparent);
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 2.5rem;
}

.khung-anh {
    background: #fff;
    border: none;
    overflow: hidden;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #1e3a5f, #2c5282, #34568b);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
}

.khung-anh:hover::before {
    transform: scaleX(1);
}

.khung-anh:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
}

.khung-anh img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
    filter: grayscale(0.1);
}

.khung-anh:hover img {
    transform: scale(1.05);
    filter: grayscale(0);
}

.mo-ta-anh {
    padding: 1.8rem;
    text-align: center;
    color: #34495e;
    font-weight: 600;
    background: #f8f9fa;
    font-size: 1rem;
}

.goc-am-nhac {
    padding: 5rem 3rem;
    background: #fff;
    margin: 5rem 0;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
    border-top: 5px solid #c9a961;
    border-bottom: 5px solid #c9a961;
}

.goc-am-nhac h2 {
    text-align: center;
    color: #1e3a5f;
    font-size: 3.2rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Georgia', serif;
}

.khu-vuc-media {
    max-width: 1000px;
    margin: 0 auto;
}

.gioi-thieu-media {
    color: #2c5282;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    text-align: center;
    font-family: 'Georgia', serif;
}

.audio-player {
    width: 100%;
    margin-bottom: 3rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 2px solid #e8eaec;
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border: 5px solid #e8eaec;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 5rem 3rem;
    background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
    margin: 5rem 0;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.12);
    border-left: 6px solid #c9a961;
}

.goc-binh-luan h2 {
    text-align: center;
    color: #1e3a5f;
    font-size: 3.2rem;
    margin-bottom: 4rem;
    font-weight: 700;
    font-family: 'Georgia', serif;
}

.khu-vuc-form {
    max-width: 900px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.15rem;
    margin-bottom: 3rem;
    color: #34495e;
    font-style: italic;
}

.form-binh-luan {
    background: #fff;
    padding: 4rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid #e8eaec;
}

.form-group {
    margin-bottom: 2.5rem;
}

.form-group label {
    display: block;
    color: #1e3a5f;
    font-weight: 700;
    margin-bottom: 1rem;
    font-size: 1.05rem;
    font-family: 'Georgia', serif;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.3rem;
    border: 2px solid #e8eaec;
    font-size: 1.05rem;
    font-family: inherit;
    background: #fff;
    color: #2c3e50;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #2c5282;
    box-shadow: 0 0 0 3px rgba(44, 82, 130, 0.1);
}

.nut-gui {
    background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%);
    color: #fff;
    padding: 1.3rem 4rem;
    border: none;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease;
    box-shadow: 0 8px 25px rgba(30, 58, 95, 0.4);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Georgia', serif;
}

.nut-gui:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(30, 58, 95, 0.5);
    background: linear-gradient(135deg, #2c5282 0%, #34568b 100%);
}

#footer {
    background: linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #34568b 100%);
    color: #fff;
    padding: 5rem 2rem 3rem 2rem;
    margin-top: 6rem;
    box-shadow: 0 -10px 40px rgba(30, 58, 95, 0.3);
    position: relative;
}

#footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(to right, #c9a961, #d4af37, #c9a961);
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}

.thong-tin-footer h3 {
    color: #d4af37;
    font-size: 1.6rem;
    font-weight: 700;
    border-bottom: 3px solid rgba(212, 175, 55, 0.4);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    font-family: 'Georgia', serif;
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.thong-tin-footer a {
    color: #ecf0f1;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.05rem;
}

.thong-tin-footer a:hover {
    color: #d4af37;
    padding-left: 10px;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.05rem;
    margin: 1rem 0;
    color: #ecf0f1;
}

.copyright {
    text-align: center;
    padding: 3rem 0 1rem 0;
    margin-top: 3rem;
    border-top: 2px solid rgba(255, 255, 255, 0.2);
    font-size: 1rem;
    opacity: 0.9;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 2.5rem;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`,

    theme10: `/* Theme 10: Art Deco Luxury - Xa Hoa Nghệ Thuật */
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;600;700&family=Playfair+Display:wght@700;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cormorant', serif;
    line-height: 1.8;
    color: #1a1a1a;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
    background-attachment: fixed;
}

@keyframes goldShimmer {
    0%, 100% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
}

@keyframes luxuryFade {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.05);
    }
}

#header {
    background: 
        linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%),
        radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1), transparent),
        radial-gradient(circle at 80% 50%, rgba(255, 215, 0, 0.1), transparent);
    color: #d4af37;
    padding: 7rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    border-top: 3px solid #d4af37;
    border-bottom: 3px solid #d4af37;
    box-shadow: 
        0 10px 50px rgba(212, 175, 55, 0.3),
        inset 0 0 100px rgba(212, 175, 55, 0.05);
}

#header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212, 175, 55, 0.05) 40px, rgba(212, 175, 55, 0.05) 80px);
}

#header::after {
    content: '◆';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15rem;
    color: rgba(212, 175, 55, 0.08);
    animation: luxuryFade 4s infinite;
}

.banner {
    max-width: 1400px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.ten-bao {
    font-size: 5.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    text-shadow: 
        0 0 20px rgba(212, 175, 55, 0.6),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    letter-spacing: 15px;
    text-transform: uppercase;
    background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #d4af37 100%);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: goldShimmer 3s ease infinite;
}

.ten-bao::before {
    content: '◆';
    margin-right: 1.5rem;
    font-size: 3rem;
}

.ten-bao::after {
    content: '◆';
    margin-left: 1.5rem;
    font-size: 3rem;
}

.slogan {
    font-size: 1.5rem;
    color: #c9a961;
    font-style: italic;
    letter-spacing: 8px;
    text-transform: uppercase;
    font-weight: 300;
}

#content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 2rem;
}

.gioi-thieu {
    background: 
        linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    padding: 5rem;
    margin: 4rem 0;
    border: 3px solid #d4af37;
    box-shadow: 
        0 15px 60px rgba(212, 175, 55, 0.4),
        inset 0 0 80px rgba(212, 175, 55, 0.05);
    position: relative;
    clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
}

.gioi-thieu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    border-top: 3px solid #d4af37;
    border-left: 3px solid #d4af37;
}

.gioi-thieu::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-bottom: 3px solid #d4af37;
    border-right: 3px solid #d4af37;
}

.gioi-thieu h2 {
    color: #d4af37;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: 8px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

.gioi-thieu h2::before {
    content: '━━';
    margin-right: 1.5rem;
    color: #c9a961;
}

.gioi-thieu h2::after {
    content: '━━';
    margin-left: 1.5rem;
    color: #c9a961;
}

.gioi-thieu p {
    font-size: 1.25rem;
    text-align: center;
    line-height: 2.2;
    color: #c9a961;
    font-weight: 300;
}

.khu-vuc-bai-viet {
    padding: 5rem 0;
}

.khu-vuc-bai-viet h2 {
    text-align: center;
    color: #d4af37;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 300;
    letter-spacing: 10px;
    text-transform: uppercase;
    position: relative;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

.khu-vuc-bai-viet h2::before {
    content: '◆';
    position: absolute;
    left: 50%;
    top: -60px;
    transform: translateX(-50%);
    font-size: 2.5rem;
    color: #c9a961;
}

.khu-vuc-bai-viet h2::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 300px;
    height: 2px;
    background: linear-gradient(to right, transparent, #d4af37, transparent);
}

.bai-viet {
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    padding: 4rem;
    margin-bottom: 4rem;
    border: 2px solid #d4af37;
    box-shadow: 0 15px 50px rgba(212, 175, 55, 0.3);
    transition: all 0.4s ease;
    position: relative;
}

.bai-viet::before {
    content: '◆';
    position: absolute;
    top: -15px;
    left: 50px;
    font-size: 1.8rem;
    color: #d4af37;
    background: #0a0a0a;
    padding: 0 10px;
}

.bai-viet::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid rgba(212, 175, 55, 0.3);
    pointer-events: none;
    transform: scale(0.95);
}

.bai-viet:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 70px rgba(212, 175, 55, 0.5);
}

.tieu-de-bai {
    color: #d4af37;
    font-size: 2.5rem;
    font-weight: 300;
    margin-bottom: 2rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.4);
}

.noi-dung {
    font-size: 1.2rem;
    line-height: 2.2;
    text-align: justify;
    color: #c9a961;
    margin-bottom: 2rem;
    font-weight: 300;
}

.tac-gia {
    text-align: right;
    font-style: italic;
    color: #d4af37;
    font-weight: 300;
    font-size: 1.1rem;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    padding-top: 1.5rem;
    letter-spacing: 2px;
}

.tac-gia::before {
    content: '━ ';
}

.goc-anh {
    padding: 6rem 0;
    background: 
        radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05), transparent);
    margin: 5rem 0;
}

.goc-anh h2 {
    text-align: center;
    color: #d4af37;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 300;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
    position: relative;
}

.goc-anh h2::before {
    content: '◆';
    position: absolute;
    left: 50%;
    top: -60px;
    transform: translateX(-50%);
    font-size: 2.5rem;
    color: #c9a961;
}

.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
}

.khung-anh {
    background: #000;
    border: 3px solid #d4af37;
    overflow: hidden;
    box-shadow: 0 15px 50px rgba(212, 175, 55, 0.4);
    transition: all 0.4s ease;
    position: relative;
}

.khung-anh::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(212, 175, 55, 0.5);
    z-index: 2;
    pointer-events: none;
}

.khung-anh::after {
    content: '◆';
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 2.5rem;
    color: #d4af37;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease;
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.8);
}

.khung-anh:hover::after {
    opacity: 1;
}

.khung-anh:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 70px rgba(212, 175, 55, 0.6);
}

.khung-anh img {
    width: 100%;
    height: 350px;
    object-fit: cover;
    display: block;
    transition: all 0.4s ease;
    filter: grayscale(0.3) sepia(0.2);
}

.khung-anh:hover img {
    transform: scale(1.1);
    filter: grayscale(0) sepia(0.3);
}

.mo-ta-anh {
    padding: 2rem;
    text-align: center;
    color: #d4af37;
    font-weight: 300;
    background: #0a0a0a;
    font-size: 1.05rem;
    border-top: 2px solid rgba(212, 175, 55, 0.5);
    letter-spacing: 2px;
    position: relative;
    z-index: 2;
}

.goc-am-nhac {
    padding: 6rem 4rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    margin: 5rem 0;
    border: 3px solid #d4af37;
    border-left: 8px solid #d4af37;
    border-right: 8px solid #d4af37;
    box-shadow: 
        0 20px 70px rgba(212, 175, 55, 0.4),
        inset 0 0 80px rgba(212, 175, 55, 0.05);
}

.goc-am-nhac h2 {
    text-align: center;
    color: #d4af37;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 300;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

.goc-am-nhac h2::before {
    content: '♫ ';
    margin-right: 1rem;
}

.goc-am-nhac h2::after {
    content: ' ♫';
    margin-left: 1rem;
}

.khu-vuc-media {
    max-width: 1100px;
    margin: 0 auto;
}

.gioi-thieu-media {
    color: #d4af37;
    font-weight: 300;
    margin-top: 3.5rem;
    margin-bottom: 2rem;
    font-size: 1.6rem;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
}

.audio-player {
    width: 100%;
    margin-bottom: 4rem;
    border: 3px solid #d4af37;
    box-shadow: 0 10px 40px rgba(212, 175, 55, 0.4);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 5px solid #d4af37;
    box-shadow: 0 15px 60px rgba(212, 175, 55, 0.5);
    position: relative;
}

.video-container::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 1px solid rgba(212, 175, 55, 0.5);
    z-index: 1;
    pointer-events: none;
}

.video-container video,
.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-player {
    width: 100%;
}

.goc-binh-luan {
    padding: 6rem 4rem;
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    margin: 5rem 0;
    border: 3px solid #d4af37;
    box-shadow: 
        0 20px 70px rgba(212, 175, 55, 0.4),
        inset 0 0 80px rgba(212, 175, 55, 0.05);
    clip-path: polygon(30px 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0 30px);
}

.goc-binh-luan h2 {
    text-align: center;
    color: #d4af37;
    font-size: 4rem;
    margin-bottom: 5rem;
    font-weight: 300;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
}

.goc-binh-luan h2::before {
    content: '◆ ';
}

.goc-binh-luan h2::after {
    content: ' ◆';
}

.khu-vuc-form {
    max-width: 1000px;
    margin: 0 auto;
}

.khu-vuc-form > p {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 4rem;
    color: #c9a961;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 2px;
}

.form-binh-luan {
    background: rgba(26, 26, 26, 0.8);
    padding: 4rem;
    border: 2px solid #d4af37;
    box-shadow: inset 0 0 50px rgba(212, 175, 55, 0.1);
}

.form-group {
    margin-bottom: 3rem;
}

.form-group label {
    display: block;
    color: #d4af37;
    font-weight: 300;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    letter-spacing: 3px;
    text-transform: uppercase;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 1.5rem;
    border: 2px solid rgba(212, 175, 55, 0.5);
    font-size: 1.1rem;
    font-family: inherit;
    background: rgba(10, 10, 10, 0.9);
    color: #c9a961;
    transition: all 0.3s ease;
    font-weight: 300;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #d4af37;
    box-shadow: 
        0 0 20px rgba(212, 175, 55, 0.4),
        inset 0 0 20px rgba(212, 175, 55, 0.1);
}

.nut-gui {
    background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #d4af37 100%);
    background-size: 200% 200%;
    color: #0a0a0a;
    padding: 1.5rem 5rem;
    border: 2px solid #d4af37;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.4s ease;
    text-transform: uppercase;
    letter-spacing: 5px;
    box-shadow: 0 10px 40px rgba(212, 175, 55, 0.6);
    animation: goldShimmer 3s ease infinite;
}

.nut-gui:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 60px rgba(212, 175, 55, 0.8);
}

#footer {
    background: 
        linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    color: #d4af37;
    padding: 6rem 2rem 3rem 2rem;
    margin-top: 6rem;
    border-top: 3px solid #d4af37;
    border-bottom: 3px solid #d4af37;
    box-shadow: 
        0 -10px 50px rgba(212, 175, 55, 0.3),
        inset 0 0 100px rgba(212, 175, 55, 0.05);
    position: relative;
}

#footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(212, 175, 55, 0.05) 40px, rgba(212, 175, 55, 0.05) 80px);
}

.thong-tin-footer {
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    position: relative;
    z-index: 1;
}

.thong-tin-footer h3 {
    color: #d4af37;
    font-size: 1.8rem;
    font-weight: 300;
    border-bottom: 2px solid rgba(212, 175, 55, 0.5);
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(212, 175, 55, 0.4);
}

.thong-tin-footer ul {
    list-style: none;
}

.thong-tin-footer li {
    padding: 1rem 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.thong-tin-footer li::before {
    content: '◆ ';
    color: #c9a961;
    margin-right: 0.5rem;
}

.thong-tin-footer a {
    color: #c9a961;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.1rem;
    font-weight: 300;
    letter-spacing: 1px;
}

.thong-tin-footer a:hover {
    color: #d4af37;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
    padding-left: 15px;
}

.lien-he p,
.cap-nhat p {
    font-size: 1.1rem;
    margin: 1.2rem 0;
    color: #c9a961;
    font-weight: 300;
    letter-spacing: 1px;
}

.copyright {
    text-align: center;
    padding: 4rem 0 1rem 0;
    margin-top: 4rem;
    border-top: 2px solid rgba(212, 175, 55, 0.3);
    font-size: 1.05rem;
    color: #c9a961;
    letter-spacing: 3px;
    font-weight: 300;
}

@media screen and (max-width: 768px) {
    .ten-bao {
        font-size: 3rem;
        letter-spacing: 5px;
    }
    .thu-vien-anh {
        grid-template-columns: 1fr;
    }
}`
};

// Function to generate HTML
function generateHTML() {
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
    const selectedTheme = document.getElementById('themeSelect').value;
    return cssThemes[selectedTheme];
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
document.addEventListener('DOMContentLoaded', function() {
    updateImageDescriptions();
});