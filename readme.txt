Đây là file **`README.md`** hoàn chỉnh và chi tiết nhất. Bạn hãy lưu nội dung này vào thư mục dự án.

File này được thiết kế như một bản "Đặc tả kỹ thuật" (Technical Specification). Khi bạn mở file này trong VS Code và bật GitHub Copilot Chat, nó sẽ quét toàn bộ ngữ cảnh này. Bạn chỉ cần gõ lệnh: *"Hãy thực hiện Step 1 trong file README"* là nó sẽ tự code.

---

```markdown
# 🛠 Project Specification: Web Generator Tool (Trình Tạo Web Báo Tường Tự Động)

## 1. Tổng quan (Overview)
Dự án này là một công cụ web (Single Page Application - SPA) giúp người dùng tạo ra một trang web "Báo Tường" hoàn chỉnh (gồm file `index.html` và `style.css`) mà không cần biết code. 
Công cụ này sẽ có giao diện nhập liệu (Form Input) bên trái và khu vực xem trước code (Code Preview) bên phải.

---

## 2. Yêu cầu Chức năng (Functional Requirements)

### A. Giao diện Nhập liệu (Input Fields)
Cần tạo các ô nhập liệu với giá trị mặc định (placeholder/default value) như sau:

#### 1. Phần Header
* **Tiêu đề báo (Title):** Input Text.
* **Slogan:** Input Text.

#### 2. Phần Giới thiệu (Introduction)
* **Nội dung:** Textarea (Cho phép nhập đoạn văn dài).

#### 3. Phần Bài Viết (Articles Management)
* Tạo sẵn **5 ô nhập liệu** cho 5 bài viết. Mỗi bài gồm:
    * Tiêu đề bài viết (Input Text).
    * Nội dung bài viết (Textarea).
    * Tên tác giả (Input Text).
* **Logic quan trọng:** Nếu người dùng **để trống** "Tiêu đề bài viết" ở ô nào, thì khi sinh code HTML, bài viết đó sẽ **bị bỏ qua hoàn toàn** (không sinh thẻ `<article>`).

#### 4. Phần Góc Ảnh (Gallery Logic)
* **Số lượng ảnh:** Input Number (Ví dụ: nhập 10).
* **Logic quan trọng:** Tool sẽ tự động sinh ra vòng lặp từ 1 đến N (số lượng nhập vào).
    * Đường dẫn ảnh (`src`) phải tuân theo quy tắc: `Image/Image1.jpg`, `Image/Image2.jpg`, ..., `Image/ImageN.jpg`.
    * Thẻ `alt` để mặc định là "Ảnh hoạt động lớp".

#### 5. Phần Footer (Thông tin nhóm)
Cần điền sẵn các giá trị mặc định sau (nhưng cho phép người dùng sửa):
* **Thành viên nhóm (Textarea):** * *Default:* `Võ Nguyễn Hoàng Long` (xuống dòng) `Trương Minh Khoa`.
* **Email liên hệ (Input Text):** * *Default:* `hoanglongvonguyen@gmail.com`.
* **Thông tin lớp (Input Text):** * *Default:* `Lớp: 12T1 - Trường THPT Chuyên Trần Văn Giàu`.
* **Bản quyền (Input Text):** * *Default:* `© 2026 Báo Tường Điện Tử "Thanh Xuân" - Lớp 12T1. Tất cả quyền được bảo lưu.`

---

### B. Tính năng Chọn Giao diện (CSS Theme Selector)
Cần có một menu (Dropdown) cho phép chọn 1 trong **10 mẫu giao diện** khác nhau. Khi bấm nút "Tạo Code", tool sẽ xuất ra đoạn CSS tương ứng với mẫu đã chọn.

**Danh sách 10 mẫu CSS cần code:**
1.  **Thanh Xuân (Original):** Tông tím gradient (#667eea), hiện đại, giống mẫu gốc.
2.  **Vintage (Cổ Điển):** Tông màu giấy cũ (beige), font có chân (Serif), viền nâu.
3.  **Ocean (Biển Xanh):** Tông xanh dương, bo góc tròn, mát mẻ.
4.  **Minimalist (Tối Giản):** Trắng đen chủ đạo, font mảnh, ít đường viền.
5.  **Nature (Thiên Nhiên):** Tông xanh lá cây, tươi mát, dùng gradient xanh lá.
6.  **Dark Neon (Cyberpunk):** Nền đen, chữ phát sáng (neon hồng/xanh), font hiện đại.
7.  **Sunset (Hoàng Hôn):** Gradient cam đỏ rực rỡ, năng động.
8.  **Pastel Cute:** Màu hồng phấn và xanh mint, font chữ mềm mại, dễ thương.
9.  **Professional (Hàn Lâm):** Xanh Navy đậm và Xám, font chữ nghiêm túc, bố cục khối hộp.
10. **Monochrome (Đơn Sắc):** Chỉ dùng các sắc độ của màu Xám, nghệ thuật.

---

### C. Cấu trúc Output (HTML Structure Template)
Code HTML được sinh ra phải giữ nguyên các `id` và `class` như sau để khớp với CSS:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>${Title_Input}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header id="header">
        <div class="banner">
            <h1 class="ten-bao">${Title_Input}</h1>
            <p class="slogan">${Slogan_Input}</p>
        </div>
    </header>

    <main id="content">
        <section class="gioi-thieu">
            <h2>Giới Thiệu</h2>
            <p>${Intro_Input}</p>
        </section>

        <section class="khu-vuc-bai-viet">
            <h2>Các Bài Viết</h2>
            </section>

        <section class="goc-anh">
            <h2>Góc Ảnh</h2>
            <div class="thu-vien-anh">
                </div>
        </section>
        
        </main>

    <footer id="footer">
        </footer>
</body>
</html>

```

---

## 3. Hướng dẫn Prompt cho GitHub Copilot (Copilot Instructions)

Copy từng đoạn prompt dưới đây vào khung chat của Copilot để thực hiện từng bước:

### 🟢 Bước 1: Tạo giao diện Tool (HTML/Bootstrap)

> **Prompt:** "Dựa vào file README.md, hãy tạo cho tôi file `tool.html`. Sử dụng Bootstrap 5 để chia màn hình làm 2 phần: Bên trái là Form nhập liệu (Input) gồm các trường: Header, Giới thiệu, 5 Bài viết (dùng Accordion để thu gọn), Số lượng ảnh, và Footer. Điền sẵn các giá trị mặc định cho phần Footer như trong yêu cầu. Bên phải là 2 tab: 'HTML Output' và 'CSS Output' (textarea readonly)."

### 🟡 Bước 2: Viết Logic JavaScript (Generator)

> **Prompt:** "Viết code JavaScript để xử lý logic:
> 1. Lắng nghe sự kiện click nút 'Tạo Website'.
> 2. Lấy toàn bộ giá trị từ Form.
> 3. Tạo biến `htmlString`: Sử dụng template literal. Với phần Bài viết, dùng vòng lặp 1-5, nếu `Title` không rỗng thì mới nối chuỗi HTML `<article>`. Với phần Ảnh, dùng vòng lặp 1-N (theo số user nhập) để sinh thẻ `<img src='Image/Image${i}.jpg'>`.
> 4. Hiển thị kết quả vào ô textarea HTML Output."
> 
> 

### 🟠 Bước 3: Tạo 10 Mẫu CSS (Theme System)

> **Prompt:** "Tạo một object trong JavaScript tên là `cssThemes`.
> Key là tên theme (theme1, theme2,... theme10).
> Value là chuỗi CSS đầy đủ. Hãy viết 10 mẫu CSS khác nhau theo mô tả trong README (Mục 2.B). Đảm bảo tất cả các theme đều style đúng các ID `#header`, `#content`, `#footer` và Class `.bai-viet`, `.khung-anh`."

### 🔴 Bước 4: Hoàn thiện

> **Prompt:** "Kết nối dropdown chọn theme với logic JavaScript. Khi người dùng bấm 'Tạo Website', hãy lấy chuỗi CSS từ object `cssThemes` dựa trên theme đã chọn và hiển thị vào ô CSS Output. Thêm nút 'Copy Code' cho cả 2 ô."

```

```