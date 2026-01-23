# 📰 Báo Tường Lớp - Website Generator Tool

Công cụ tạo website báo tường lớp học với 15 theme CSS đẹp mắt và hiện đại.

## ✨ Tính năng

- 🎨 **15 Theme CSS đa dạng**: Modern Gradient, Vintage Magazine, Ocean Wave, Swiss Minimalist, Forest Nature, Cyberpunk Neon, Sunset Beach, Kawaii Pastel, Corporate Professional, Art Deco Luxury, Cherry Blossom Dream, Lavender Fantasy, Peach Bubble Tea, Dark Knight, Industrial Steel
- 🌐 **Hỗ trợ tiếng Việt đầy đủ**: Tất cả font chữ đều hỗ trợ tiếng Việt chuẩn với dấu thanh
- 🖼️ **Quản lý nội dung dễ dàng**: Thêm bài viết, hình ảnh, audio/video
- 📱 **Responsive Design**: Hiển thị tốt trên mọi thiết bị
- 🚀 **Dễ sử dụng**: Giao diện trực quan, tạo website chỉ trong vài phút
- 🎯 **Layout linh hoạt**: Grid layout tối ưu cho phần góc ảnh

## 🚀 Cách sử dụng

1. Mở file `index.html` trong trình duyệt
2. Chọn theme CSS yêu thích từ dropdown (có emoji icon)
3. Nhập thông tin:
   - Tên báo tường
   - Slogan
   - Giới thiệu
   - Thành viên nhóm
   - Thông tin liên hệ
4. Thêm bài viết, hình ảnh
5. Click "🚀 TẠO TRANG BÁO TƯỜNG"
6. Copy HTML và CSS vào các file tương ứng
7. Mở `index.html` để xem kết quả

## 📁 Cấu trúc thư mục

```
ProjectT1/
├── index.html         # Tool tạo website (main interface)
├── tool.js            # Logic và xử lý generator
├── themes/            # Thư mục chứa 15 theme CSS
│   ├── theme1.css     # Modern Gradient
│   ├── theme2.css     # Vintage Magazine
│   ├── theme3.css     # Ocean Wave
│   ├── theme4.css     # Swiss Minimalist
│   ├── theme5.css     # Forest Nature
│   ├── theme6.css     # Cyberpunk Neon
│   ├── theme7.css     # Sunset Beach
│   ├── theme8.css     # Kawaii Pastel
│   ├── theme9.css     # Corporate Professional
│   ├── theme10.css    # Art Deco Luxury
│   ├── theme11.css    # Cherry Blossom Dream
│   ├── theme12.css    # Lavender Fantasy
│   ├── theme13.css    # Peach Bubble Tea
│   ├── theme14.css    # Dark Knight
│   ├── theme15.css    # Industrial Steel
│   └── index.js       # Async theme loader
├── Image/             # Thư mục chứa hình ảnh
├── Song.mp3           # File audio mẫu
├── Video.mp4          # File video mẫu
├── extract_themes.py  # Helper script
└── README.md          # Documentation

```

## 🎨 Danh sách Themes

### Themes Hiện Đại & Cổ Điển (1-7)
1. **Modern Gradient** 🌈 - Hiện đại với gradient màu tím
2. **Vintage Magazine** 📰 - Phong cách báo giấy cổ điển
3. **Ocean Wave** 🌊 - Sóng biển xanh tươi mát
4. **Swiss Minimalist** ⬜ - Tối giản Thụy Sĩ
5. **Forest Nature** 🌲 - Rừng xanh thiên nhiên
6. **Cyberpunk Neon** 🔮 - Tương lai với neon sáng
7. **Sunset Beach** 🌅 - Hoàng hôn biển lãng mạn

### Themes Dễ Thương & Nữ Tính (8, 11-13)
8. **Kawaii Pastel** 🎀 - Dễ thương phong cách Nhật
11. **Cherry Blossom Dream** 🌸 - Hoa anh đào lãng mạn với màu hồng pastel, grid layout tối ưu
12. **Lavender Fantasy** ✨ - Tím lavender mơ màng với hiệu ứng holographic, crystal theme
13. **Peach Bubble Tea** 🧋 - Đào sữa ngọt ngào với màu đào ấm áp

### Themes Sang Trọng & Mạnh Mẽ (9-10, 14-15)
9. **Corporate Professional** 💼 - Chuyên nghiệp doanh nghiệp
10. **Art Deco Luxury** 🎭 - Xa hoa nghệ thuật
14. **Dark Knight** ⚔️ - Hiệp sĩ bóng tối với màu đỏ trên nền đen, font **Barlow Semi Condensed**
15. **Industrial Steel** ⚙️ - Thép công nghiệp với màu xanh kim loại, font **Saira**

## 🔤 Font chữ

### Themes 1-13
- Montserrat, Open Sans, Lato, Roboto
- Playfair Display, Merriweather, Cormorant
- Quicksand, Mulish, Comfortaa, Mali
- Nunito, Lora, Poppins
- Bebas Neue, Oswald, Raleway

### Themes 14-15 (Đặc biệt - Hỗ trợ tiếng Việt hoàn hảo)
- **Theme 14 (Dark Knight)**: **Barlow Semi Condensed** - Font condensed mạnh mẽ, hỗ trợ Vietnamese Unicode đầy đủ
- **Theme 15 (Industrial Steel)**: **Saira** - Font tech hiện đại với Vietnamese support hoàn chỉnh
- **Fallback font**: **Inter** - Đảm bảo hiển thị tiếng Việt chuẩn cho tất cả themes

> ✅ Tất cả themes đã được test với các ký tự tiếng Việt: "luận", "nhận", "việt", "triết"

## 🎯 Layout System

### Grid Layout (Themes 8, 11)
- System: `grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))`
- Gap: 3rem
- Image height: Fixed 300px với `object-fit: cover`
- Border-radius: 40px (rounded corners)
- Responsive: Auto-fit theo screen size

### Footer Design
- Card-based layout với glass morphism
- Max-width: 1400px
- 4rem gap giữa các card
- Hover effects với scale transform

## 🛡️ Bảo mật

Tool có hệ thống lọc từ khóa với nhiều biến thể:
- Xử lý các trường hợp viết sai chính tả
- Kiểm tra dấu thanh tiếng Việt
- Chặn cả phiên bản có/không dấu

## 📝 License

Free to use for educational purposes.

## 👥 Credits

Developed for Vietnamese high school class projects.

## 🔄 Recent Updates (Jan 2026)

- ✅ Refactored themes 11-15 với standardized class names
- ✅ Fixed Vietnamese font support cho themes 14-15 (Barlow Semi Condensed, Saira)
- ✅ Added emoji icons cho tất cả 15 themes trong dropdown selector
- ✅ Changed image gallery layout từ masonry sang grid (theme 11)
- ✅ Redesigned footer với card-based layout và glass morphism
- ✅ Enhanced filter system với multiple typo variations
- ✅ Improved border-radius cho section overlays

---

⭐ Nếu thấy hữu ích, hãy star repo này!
