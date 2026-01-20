# BÁO CÁO DỰ ÁN: TẠO TRANG WEB BÁO TƯỜNG ĐIỆN TỬ

---

## 1. THÔNG TIN CHUNG

### Tên dự án
**Báo Tường Điện Tử "Thanh Xuân"**

### Thông tin nhóm thực hiện
- **Tên nhóm:** Nhóm 1 - Lớp 12T1
- **Danh sách thành viên:**
  1. **Võ Nguyễn Hoàng Long** - Trưởng nhóm, lập trình HTML
  2. **Trương Minh Khoa** - Thiết kế CSS, giao diện

### Thời gian thực hiện
- **Bắt đầu:** 13/01/2026
- **Hoàn thành:** 20/01/2026
- **Tổng thời gian:** 1 tuần

---

## 2. KẾ HOẠCH THỰC HIỆN

### Bảng phân công công việc

| STT | Công việc | Người thực hiện | Thời gian | Trạng thái |
|-----|-----------|----------------|-----------|------------|
| 1 | Nghiên cứu yêu cầu đề bài | Cả nhóm | 13/01 | Hoàn thành |
| 2 | Lên ý tưởng thiết kế | Trương Minh Khoa | 14/01 | Hoàn thành |
| 3 | Viết code HTML cấu trúc | Võ Nguyễn Hoàng Long | 15/01 | Hoàn thành |
| 4 | Soạn nội dung bài viết | Võ Nguyễn Hoàng Long | 15-16/01 | Hoàn thành |
| 5 | Thu thập hình ảnh, media | Trương Minh Khoa | 16/01 | Hoàn thành |
| 6 | Thiết kế CSS styling | Trương Minh Khoa | 17-18/01 | Hoàn thành |
| 7 | Tích hợp nội dung & kiểm tra | Võ Nguyễn Hoàng Long | 18/01 | Hoàn thành |
| 8 | Chỉnh sửa & hoàn thiện | Cả nhóm | 19/01 | Hoàn thành |
| 9 | Viết báo cáo dự án | Võ Nguyễn Hoàng Long | 20/01 | Hoàn thành |

---

## 3. Ý TƯỞNG THIẾT KẾ

### 3.1. Lý do chọn chủ đề "Thanh Xuân"

Chúng em chọn tên **"Thanh Xuân"** cho báo tường điện tử vì:

- **Ý nghĩa:** "Thanh Xuân" tượng trưng cho tuổi trẻ, sự năng động và những kỷ niệm đẹp nhất của thời học sinh
- **Phù hợp:** Phản ánh đúng tinh thần và nội dung của trang web - ghi lại những khoảnh khắc đáng nhớ trong năm học
- **Dễ nhớ:** Tên ngắn gọn, dễ nhớ, gần gũi với mọi người
- **Tính kết nối:** Tạo sự đồng cảm với độc giả, gợi nhớ về kỷ niệm tuổi học trò

### 3.2. Bố cục trang web

Website được thiết kế theo mô hình **3 phần chính**:

#### A. Header (Phần đầu)
- **Vị trí:** Phía trên cùng của trang
- **Nội dung:** 
  - Tên báo "Thanh Xuân" với font chữ lớn, nổi bật
  - Slogan "Kỷ niệm tuổi học trò - Ước mơ tương lai"
- **Màu sắc:** Gradient tím đậm sang tím nhạt, tạo cảm giác trẻ trung, hiện đại
- **Hiệu ứng:** Text shadow để tạo độ sâu

#### B. Main Content (Nội dung chính)
Chia thành **5 phần rõ ràng**, theo thứ tự từ trên xuống:

1. **Giới thiệu:**
   - Nền màu xanh nhạt
   - Viền trái màu tím để thu hút sự chú ý
   - Đoạn văn giới thiệu ngắn gọn về mục đích trang web

2. **Các bài viết:**
   - Hiển thị 3 bài: thơ, tản văn, kỷ niệm
   - Mỗi bài trong khung riêng biệt với viền màu xám
   - Hiệu ứng hover: nổi lên khi di chuột qua

3. **Góc ảnh:**
   - Sử dụng CSS Grid để sắp xếp ảnh đẹp mắt
   - 4 ảnh với placeholder màu sắc khác nhau
   - Hiệu ứng phóng to khi hover

4. **Góc âm nhạc:**
   - Nền gradient cam nhạt
   - Tích hợp audio player và video YouTube
   - Responsive với tỷ lệ 16:9

5. **Góc bình luận:**
   - Nền xanh lá nhạt
   - Form nhập liệu đầy đủ: họ tên, email, lời nhắn
   - Nút gửi có hiệu ứng gradient và hover

#### C. Footer (Chân trang)
- **Vị trí:** Phía dưới cùng
- **Nội dung:**
  - Thông tin nhóm thực hiện
  - Thông tin liên hệ
  - Ngày cập nhật
  - Nguồn tham khảo
- **Layout:** CSS Grid 4 cột (responsive thành 1-2 cột trên mobile)
- **Màu sắc:** Nền tối (xanh đen) với chữ trắng tạo sự trang trọng

### 3.3. Màu sắc chủ đạo

| Vị trí | Màu sắc | Lý do sử dụng |
|--------|---------|---------------|
| Header | Gradient tím (#667eea → #764ba2) | Trẻ trung, sang trọng |
| Bài viết | Xám nhạt (#fafafa) | Dễ đọc, trang nhã |
| Góc ảnh | Trắng (#ffffff) | Nổi bật hình ảnh |
| Góc âm nhạc | Gradient cam (#ffecd2 → #fcb69f) | Ấm áp, vui tươi |
| Góc bình luận | Xanh lá nhạt (#e8f8f5) | Thư giãn, thoải mái |
| Footer | Xanh đen (#2c3e50) | Chuyên nghiệp, trang trọng |

---

## 4. KỸ THUẬT SỬ DỤNG

### 4.1. Các thẻ HTML đã sử dụng

#### Thẻ ngữ nghĩa (Semantic Tags)
- `<header>` - Phần đầu trang chứa tiêu đề
- `<main>` - Nội dung chính của trang
- `<section>` - Các phần nội dung khác nhau
- `<article>` - Bài viết độc lập
- `<footer>` - Phần chân trang

#### Thẻ cấu trúc
- `<div>` - Container chung cho các phần tử
- `<h1>`, `<h2>`, `<h3>` - Tiêu đề các cấp
- `<p>` - Đoạn văn bản
- `<ul>`, `<li>` - Danh sách không thứ tự

#### Thẻ media
- `<img>` - Hiển thị hình ảnh với thuộc tính `alt` đầy đủ
- `<audio>` - Nhúng file âm thanh với controls
- `<iframe>` - Nhúng video YouTube

#### Thẻ form
- `<form>` - Biểu mẫu bình luận
- `<label>` - Nhãn cho input
- `<input>` - Trường nhập text và email
- `<textarea>` - Trường nhập văn bản dài
- `<button>` - Nút gửi form

#### Thẻ liên kết
- `<a>` - Liên kết email và website tham khảo

### 4.2. Kỹ thuật CSS đã áp dụng

#### A. Selectors (Bộ chọn)

**1. ID Selectors** - Định dạng layout chính:
```css
#header { ... }    /* Phần đầu */
#content { ... }   /* Phần nội dung */
#footer { ... }    /* Phần chân */
```
*Lý do:* ID là duy nhất, phù hợp cho các phần layout chính của trang

**2. Class Selectors** - Định dạng thành phần lặp lại:
```css
.bai-viet { ... }       /* Khung bài viết */
.khung-anh { ... }      /* Khung ảnh */
.form-group { ... }     /* Nhóm input form */
```
*Lý do:* Class có thể tái sử dụng nhiều lần, tiện cho styling các element giống nhau

**3. Element Selectors** - Reset và style cơ bản:
```css
body { ... }           /* Thiết lập font, màu nền chung */
h1, h2, h3 { ... }     /* Style tiêu đề */
```

#### B. Layout Techniques

**1. CSS Grid** - Sắp xếp bố cục:
```css
.thu-vien-anh {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}
```
*Lý do:* Grid giúp tạo layout responsive dễ dàng, tự động chia cột phù hợp với kích thước màn hình

**2. Flexbox** - Căn chỉnh nội dung:
- Dùng cho việc căn giữa và sắp xếp các phần tử con

#### C. Visual Effects (Hiệu ứng hình ảnh)

**1. Gradient (Chuyển màu):**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```
*Lý do:* Tạo nền đẹp mắt, hiện đại hơn màu đơn sắc

**2. Box Shadow (Đổ bóng):**
```css
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
```
*Lý do:* Tạo độ sâu, làm nổi bật các phần tử quan trọng

**3. Transitions (Chuyển động mượt):**
```css
transition: transform 0.3s ease, box-shadow 0.3s ease;
```
*Lý do:* Tạo hiệu ứng chuyển động mượt mà khi hover

**4. Hover Effects (Hiệu ứng di chuột):**
```css
.bai-viet:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
```
*Lý do:* Tạo tương tác với người dùng, website trở nên sống động hơn

**5. Border Radius (Bo góc):**
```css
border-radius: 10px;
```
*Lý do:* Các góc bo tròn trông hiện đại, mềm mại hơn góc vuông

#### D. Typography (Kiểu chữ)

**1. Font Family:**
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
*Lý do:* 
- Segoe UI hỗ trợ tốt tiếng Việt
- Các font dự phòng đảm bảo hiển thị tốt trên mọi thiết bị

**2. Line Height:**
```css
line-height: 1.8;
```
*Lý do:* Tăng khoảng cách dòng giúp văn bản dễ đọc hơn

**3. Text Shadow:**
```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
```
*Lý do:* Tạo độ sâu cho tiêu đề, làm nổi bật văn bản

#### E. Responsive Design (Thiết kế đáp ứng)

**Media Queries:**
```css
@media screen and (max-width: 768px) { ... }
@media screen and (max-width: 480px) { ... }
```
*Lý do:* 
- Đảm bảo website hiển thị tốt trên mọi thiết bị (desktop, tablet, mobile)
- Tự động điều chỉnh layout và kích thước phù hợp

**Responsive Grid:**
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```
*Lý do:* Tự động điều chỉnh số cột dựa trên kích thước màn hình

#### F. Color Psychology (Tâm lý màu sắc)

| Màu sắc | Vị trí áp dụng | Tâm lý |
|---------|----------------|---------|
| Tím (#667eea, #764ba2) | Header, tiêu đề | Sang trọng, sáng tạo |
| Xanh lá (#16a085) | Form bình luận | Thư giãn, tích cực |
| Cam nhạt | Góc âm nhạc | Ấm áp, vui tươi |
| Xám (#fafafa) | Background bài viết | Trung tính, dễ đọc |
| Xanh đen (#2c3e50) | Footer | Chuyên nghiệp, trang trọng |

---

## 5. TỰ ĐÁNH GIÁ

### 5.1. Những điểm làm tốt

✅ **Về HTML:**
- Sử dụng đúng các thẻ ngữ nghĩa (semantic HTML5)
- Cấu trúc rõ ràng, dễ đọc, dễ bảo trì
- Đầy đủ các phần theo yêu cầu Bảng 1: Header, Main (5 phần), Footer
- Thuộc tính `alt` cho tất cả hình ảnh đảm bảo accessibility
- Form đầy đủ các trường input với validation

✅ **Về CSS:**
- Tuân thủ chặt chẽ yêu cầu Bảng 2:
  - Sử dụng ID selectors cho layout chính (#header, #content, #footer)
  - Sử dụng Class selectors cho các thành phần lặp lại
  - Element selectors cho reset và style cơ bản
- Áp dụng nhiều kỹ thuật hiện đại: Grid, Flexbox, Gradient, Transitions
- Responsive design hoạt động tốt trên mọi thiết bị
- Màu sắc hài hòa, bố cục cân đối

✅ **Về nội dung:**
- Nội dung phù hợp với chủ đề báo tường lớp học
- Các bài viết có ý nghĩa, gần gũi với học sinh
- Thông tin footer đầy đủ, chuyên nghiệp

✅ **Về tổ chức:**
- Phân công công việc rõ ràng
- Hoàn thành đúng tiến độ
- Làm việc nhóm hiệu quả

### 5.2. Những điểm cần cải thiện

⚠️ **Về HTML:**
- Chưa có file JavaScript để xử lý form (chỉ có cấu trúc HTML)
- Các hình ảnh đang dùng placeholder, cần thay bằng ảnh thật
- Chưa có file audio/video thật, chỉ mới nhúng code

⚠️ **Về CSS:**
- Có thể tối ưu hóa code CSS hơn nữa (gộp các thuộc tính giống nhau)
- Chưa test kỹ trên nhiều trình duyệt khác nhau
- Animation có thể phong phú hơn (keyframes, etc.)

⚠️ **Về nội dung:**
- Nội dung bài viết còn ngắn, có thể mở rộng thêm
- Cần thêm nhiều hình ảnh thật từ hoạt động của lớp
- Có thể thêm phần thống kê/biểu đồ về lớp học

⚠️ **Về tính năng:**
- Form chưa có xử lý backend để lưu bình luận
- Chưa có chức năng tìm kiếm bài viết
- Chưa có phân trang cho các bài viết

### 5.3. Hướng phát triển trong tương lai

🚀 **Giai đoạn 2 (nếu có thời gian):**
1. Thêm JavaScript để:
   - Validate form đầy đủ
   - Hiển thị thông báo khi gửi bình luận
   - Tạo slideshow tự động cho góc ảnh
2. Tích hợp backend (PHP/Node.js) để:
   - Lưu bình luận vào database
   - Tạo trang quản trị cho giáo viên
3. Thêm tính năng:
   - Đăng nhập/đăng ký cho học sinh
   - Bình chọn bài viết hay nhất
   - Chia sẻ lên mạng xã hội

---

## 6. NGUỒN THAM KHẢO

### Tài liệu học tập
1. **Sách giáo khoa Tin học 12** - Bài 12: Tạo trang web báo tường điện tử
   - Trang 89: Bảng 1 - Yêu cầu cấu trúc HTML
   - Trang 89: Bảng 2 - Yêu cầu định dạng CSS
   - Trang 90: Bảng 3 - Yêu cầu báo cáo

### Website tham khảo
1. **W3Schools** (https://www.w3schools.com)
   - Hướng dẫn HTML5, CSS3
   - Các ví dụ về form, media embedding
   
2. **MDN Web Docs** (https://developer.mozilla.org)
   - Tài liệu chính thức về HTML, CSS
   - Best practices cho web development

3. **CSS Tricks** (https://css-tricks.com)
   - Kỹ thuật CSS Grid, Flexbox
   - Responsive design patterns

4. **Google Fonts** (https://fonts.google.com)
   - Lựa chọn font chữ hỗ trợ tiếng Việt

### Video hướng dẫn
1. YouTube - Kênh "Học Web Chuẩn"
   - Series HTML/CSS cơ bản
   - Responsive web design

### Công cụ sử dụng
1. **Visual Studio Code** - Editor code
2. **Chrome DevTools** - Test responsive design
3. **Placeholder.com** - Tạo ảnh placeholder tạm thời

---

## 7. KẾT LUẬN

### Đánh giá chung
Dự án **"Báo Tường Điện Tử Thanh Xuân"** đã hoàn thành đầy đủ các yêu cầu theo sách giáo khoa Tin học 12, Bài 12. Website có cấu trúc rõ ràng, giao diện đẹp mắt, và responsive trên nhiều thiết bị.

### Bài học kinh nghiệm
Qua dự án này, nhóm chúng em đã:
- ✅ Nắm vững cấu trúc HTML5 semantic
- ✅ Thành thạo CSS selectors và layout techniques
- ✅ Hiểu được tầm quan trọng của responsive design
- ✅ Học cách làm việc nhóm hiệu quả
- ✅ Rèn luyện kỹ năng tự học và tra cứu tài liệu

### Lời cảm ơn
Nhóm chúng em xin chân thành cảm ơn:
- Thầy/Cô giáo bộ môn Tin học đã hướng dẫn tận tình
- Các bạn trong lớp đã đóng góp ý kiến
- Gia đình đã tạo điều kiện cho chúng em hoàn thành dự án

---

**Ngày báo cáo:** 20/01/2026  
**Người viết báo cáo:** Võ Nguyễn Hoàng Long - Trưởng nhóm  
**Email liên hệ:** hoanglongvonguyen@gmail.com  
**Lớp:** 12T1 - Trường THPT Chuyên Trần Văn Giàu  
**Chữ ký xác nhận của nhóm:** ________________

---

*Chú thích: Báo cáo này được soạn dưới dạng Markdown. Để chuyển sang file Word (.docx), hãy copy nội dung này và paste vào Microsoft Word, sau đó format lại cho đẹp.*