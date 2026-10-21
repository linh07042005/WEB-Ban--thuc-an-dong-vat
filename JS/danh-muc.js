document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.food-card');
    const modal = document.getElementById('detail-modal');
    const closeBtn = document.querySelector('.close-btn');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Lấy dữ liệu từ thuộc tính data-
            const name = card.getAttribute('data-name');
            const price = card.getAttribute('data-price');
            const desc = card.getAttribute('data-desc');
            const imgSrc = card.querySelector('.img-main').src;

            // Đổ vào Modal
            document.getElementById('modal-name').innerText = name;
            document.getElementById('modal-price-big').innerText = price;
            document.getElementById('modal-desc').innerText = desc;
            document.getElementById('modal-img').src = imgSrc;

            // Hiện Modal
            modal.style.display = 'flex';
        });
    });

    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = 'none';
    };
});
// Tìm kiếm
if (name.includes(input)) {
    card.style.border = "5px solid green"; // Nếu khớp thì viền xanh
} else {
    card.style.border = "5px solid red";   // Nếu không khớp thì viền đỏ
}
function filterProducts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    
    // Lấy tất cả các cụm danh mục (section)
    let sections = document.querySelectorAll('.product-section');

    sections.forEach(section => {
        let cards = section.querySelectorAll('.food-card');
        let title = section.querySelector('h2'); // Tìm tiêu đề trong section này
        let hasMatch = false;

        // 1. Kiểm tra từng sản phẩm trong section này
        cards.forEach(card => {
            let name = card.getAttribute('data-name').toLowerCase();
            if (name.includes(input)) {
                card.style.display = "block";
                hasMatch = true; // Đánh dấu là section này có hàng khớp
            } else {
                card.style.display = "none";
            }
        });

        // 2. Quyết định số phận của cả cái Section
        if (hasMatch) {
            
            section.style.display = "block"; 
            if (title) title.style.display = "block"; 
        } else {
           
            section.style.display = "none";
        }

        // Trường hợp đặc biệt: Nếu ô input rỗng, hiện lại tất cả mọi thứ
        if (input === "") {
            section.style.display = "block";
            if (title) title.style.display = "block";
        }
    });
}