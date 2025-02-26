// #빅데이터_수집_저장 #미니실습, #몽고디비
// 📌 기본 실습 문제
// 1. Embedded Document (Rich Document)
// users 컬렉션을 생성하고, name, age, address 
// 필드를 가진 문서를 삽입하시오.
db.users.insertOne({
    name: "lsy",
    age: 30,
    address: { city: "busan", zip: "12345", street: "중앙대로" }
})

// products 컬렉션에 name, price, manufacturer 
// 필드를 가진 문서를 삽입하시오.
db.products.insertOne(
    { name: "Laptop", price: 1200, manufacturer: "Apple" });


// orders 컬렉션에 주문 정보(orderId, userId, items)를 
// Embedded Document로 삽입하시오.
db.orders.insertOne({
    orderId: "A001",
    // userId ->ObjectId 부분은 각각 모두 다름. 확인 후, 작업하기.
    userId: ObjectId("67be5d20e2cfe9cbc119bf79"),
    items: [
        { product: "Laptop", price: 1200, quantity: 1 },
        { product: "Mouse", price: 25, quantity: 2 }
    ]
});

// books 컬렉션에 title, author, details(페이지 수, 출판 연도 포함) 
// 필드를 가진 문서를 삽입하시오.
db.books.insertOne(
    {
        title: "Laptop", author: "Apple",
        details: { pages: 200, publishedAt: new Date() }
    });


// reviews 컬렉션에 productId, userId, rating, comment를 Embedded Document로 저장하시오.
// 2. Link 구조
// users 컬렉션과 orders 컬렉션을 참조(Reference) 관계로 설정하고 
// 데이터 삽입하시오.
var userId = ObjectId();
db.users.insertOne({
    _id: userId,
    name: "Alice",
    email: "alice@example.com"
});
db.orders.insertOne({
    orderNumber: 1001,
    userId: ObjectId("67be5f852aeba1bdf0c489de"),  // 참조하는 사용자 _id
    total: 250,
    orderDate: new Date()
});
// posts 컬렉션과 comments 컬렉션을 참조(Reference) 관계로 설정하고 데이터 삽입하시오.
// students 컬렉션과 courses 컬렉션을 참조(Reference) 관계로 설정하고 데이터 삽입하시오.
// employees 컬렉션과 departments 컬렉션을 참조(Reference) 관계로 설정하고 데이터 삽입하시오.
// doctors 컬렉션과 patients 컬렉션을 참조(Reference) 관계로 설정하고 데이터 삽입하시오.
// 3. 계층형 데이터 구조
// categories 컬렉션을 계층 구조(parentId 필드 포함)로 생성하고 데이터 삽입하시오.
// comments 컬렉션을 계층 구조(parentId 필드 포함)로 생성하고 데이터 삽입하시오.
// company_structure 컬렉션을 계층 구조(parentId 필드 포함)로 생성하고 데이터 삽입하시오.
// locations 컬렉션을 계층 구조(parentId 필드 포함)로 생성하고 데이터 삽입하시오.
// menus 컬렉션을 계층 구조(parentId 필드 포함)로 생성하고 데이터 삽입하시오.
