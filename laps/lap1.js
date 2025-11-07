//bai 1
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    let print;
    if (bmi < 18.5) {
        print = "Thiếu cân";
    } else if (bmi < 25) {
        print = "Bình thường";
    } else if (bmi < 30) {
        print = "Thừa cân";
    } else {
        print = "Béo phì";
    }
    return `BMI: ${bmi.toFixed(2)} - Phân loại: ${print}`;
}
console.log(calculateBMI(70, 1.75));
// bai 2
function createBook(title, author, year, price) {
    const keyDiscount = "calculateDiscount";
    return {
        title,
        author,
        year,
        price,
        getBookInfo() {
            return `${this.title} - ${this.author} (${this.year}) | Giá: ${this.price.toLocaleString()}đ`;
        },
        [keyDiscount](discount) {
            const finalPrice = this.price - (this.price * discount) / 100;
            return `Giá sau giảm ${discount}%: ${finalPrice.toLocaleString()}đ`;
        },
    };
}
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000);
console.log(book.getBookInfo());
console.log(book.calculateDiscount(10));