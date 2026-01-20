Dựa trên file `tool.js` bạn cung cấp (chứa logic sinh code và 10 bộ theme CSS), dưới đây là phân tích và đề xuất bộ font chữ Google Fonts (hỗ trợ Tiếng Việt chuẩn) phù hợp nhất cho từng theme để bạn cập nhật vào code.

### 1. Phân tích `tool.js`

File JS hiện đang chứa object `cssThemes` với 10 key tương ứng 10 phong cách. Tuy nhiên, các chuỗi CSS hiện tại (nếu đang dùng font mặc định) sẽ chưa lột tả hết được "cái hồn" của theme.

Việc thêm `@import` font vào đầu mỗi chuỗi CSS trong `tool.js` sẽ làm giao diện "lột xác" hoàn toàn.

---

### 2. Đề xuất Font cho 10 Theme (Kèm mã Import)

Bạn hãy copy đoạn mã `@import` này và dán vào dòng đầu tiên trong chuỗi CSS của từng theme tương ứng trong file `tool.js`.

#### **Theme 1: Thanh Xuân (Mặc định)**

*Phong cách: Trẻ trung, hiện đại, trường lớp.*

* **Tiêu đề:** `Montserrat` (Không chân, nét đậm, khỏe khoắn).
* **Nội dung:** `Open Sans` (Dễ đọc, trung tính).
* **Code Update:**
```javascript
/* Trong cssThemes['Thanh Xuân'] */
`@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap');
body { font-family: 'Open Sans', sans-serif; }
h1, h2, h3 { font-family: 'Montserrat', sans-serif; } ...`

```



#### **Theme 2: Vintage (Cổ Điển)**

*Phong cách: Báo giấy cũ, hoài niệm, trang trọng.*

* **Tiêu đề:** `Playfair Display` (Có chân, nét thanh nét đậm sang trọng).
* **Nội dung:** `Merriweather` (Font có chân rất êm mắt khi đọc dài).
* **Code Update:**
```javascript
/* Trong cssThemes['Vintage'] */
`@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@700&display=swap');
body { font-family: 'Merriweather', serif; }
h1, h2, h3 { font-family: 'Playfair Display', serif; } ...`

```



#### **Theme 3: Ocean (Biển Xanh)**

*Phong cách: Tươi mát, mềm mại, bo tròn.*

* **Tiêu đề:** `Quicksand` (Bo tròn các đầu mút, thân thiện).
* **Nội dung:** `Mulish` (Hiện đại, thoáng).
* **Code Update:**
```javascript
/* Trong cssThemes['Ocean'] */
`@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@400;600&family=Quicksand:wght@700&display=swap');
body { font-family: 'Mulish', sans-serif; }
h1, h2, h3 { font-family: 'Quicksand', sans-serif; } ...`

```



#### **Theme 4: Minimalist (Tối Giản)**

*Phong cách: Sạch sẽ, tinh tế, ít chi tiết.*

* **Tiêu đề & Nội dung:** `Lato` (Dùng 1 font duy nhất nhưng khác độ đậm nhạt).
* **Code Update:**
```javascript
/* Trong cssThemes['Minimalist'] */
`@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');
body { font-family: 'Lato', sans-serif; } ...`

```



#### **Theme 5: Nature (Thiên Nhiên)**

*Phong cách: Hữu cơ, mềm mại, thư thái.*

* **Tiêu đề:** `Nunito` (Tròn trịa, đầy đặn).
* **Nội dung:** `Lora` (Có chân nhẹ, giống văn bản trong sách thực vật học).
* **Code Update:**
```javascript
/* Trong cssThemes['Nature'] */
`@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;1,400&family=Nunito:wght@700;800&display=swap');
body { font-family: 'Lora', serif; }
h1, h2, h3 { font-family: 'Nunito', sans-serif; } ...`

```



#### **Theme 6: Dark Neon (Cyberpunk)**

*Phong cách: Công nghệ, tương lai, game.*

* **Tiêu đề:** `Orbitron` (Font vuông vức, đậm chất Sci-fi).
* **Nội dung:** `Exo 2` (Font hình học hiện đại).
* **Code Update:**
```javascript
/* Trong cssThemes['Dark Neon'] */
`@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600&family=Orbitron:wght@700;900&display=swap');
body { font-family: 'Exo 2', sans-serif; }
h1, h2, h3 { font-family: 'Orbitron', sans-serif; } ...`

```



#### **Theme 7: Pastel Cute (Dễ Thương)**

*Phong cách: Ngọt ngào, viết tay, học trò.*

* **Tiêu đề:** `Mali` (Font chữ viết tay của trẻ con, rất cute).
* **Nội dung:** `Comfortaa` (Tròn ủng, mềm mại).
* **Code Update:**
```javascript
/* Trong cssThemes['Pastel Cute'] */
`@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;600&family=Mali:wght@600;700&display=swap');
body { font-family: 'Comfortaa', cursive; }
h1, h2, h3 { font-family: 'Mali', cursive; } ...`

```



#### **Theme 8: Academic (Hàn Lâm)**

*Phong cách: Nghiêm túc, báo cáo khoa học, đại học.*

* **Tiêu đề:** `Prata` (Rất sang trọng, đứng đắn).
* **Nội dung:** `Roboto Slab` (Có chân kiểu hình học, rõ ràng).
* **Code Update:**
```javascript
/* Trong cssThemes['Academic'] */
`@import url('https://fonts.googleapis.com/css2?family=Prata&family=Roboto+Slab:wght@300;400;700&display=swap');
body { font-family: 'Roboto Slab', serif; }
h1, h2, h3 { font-family: 'Prata', serif; } ...`

```



#### **Theme 9: Sunflower (Nắng Vàng)**

*Phong cách: Năng động, rực rỡ, tạp chí thể thao.*

* **Tiêu đề:** `Anton` (Chữ in hoa cao, dày).
* **Nội dung:** `Roboto Condensed` (Chữ hẹp, hiện đại).
* **Code Update:**
```javascript
/* Trong cssThemes['Sunflower'] */
`@import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto+Condensed:wght@400;700&display=swap');
body { font-family: 'Roboto Condensed', sans-serif; }
h1, h2, h3 { font-family: 'Anton', sans-serif; letter-spacing: 1px; } ...`

```



#### **Theme 10: Tech/Matrix**

*Phong cách: Hacker, lập trình, terminal.*

* **Toàn bộ:** `Fira Code` hoặc `VT323` (Font Monospace/Pixel).
* **Code Update:**
```javascript
/* Trong cssThemes['Tech/Matrix'] */
`@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=VT323&display=swap');
body, h1, h2, h3, input, textarea { font-family: 'Fira Code', monospace; }
.ten-bao { font-family: 'VT323', monospace; font-size: 4rem; } ...`

```



### 3. Lưu ý khi nhắc Copilot

Khi bạn yêu cầu Copilot sửa file `tool.js`, hãy dùng prompt sau để nó thay thế chính xác:

> "Update the `cssThemes` object in `tool.js`. For each theme, add the corresponding Google Fonts `@import` at the very top of the CSS string and set the `font-family` for `body` and headings (`h1, h2, h3`) as specified in the font analysis above. Ensure all fonts support Vietnamese."