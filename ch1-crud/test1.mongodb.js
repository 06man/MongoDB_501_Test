use('testDB') // 기본 데이터 베이스 , test 그냥 사용, 
//생략시, test 기본 디비를 사용함. 
//테이블 생성. 
db.testCollection.insertOne({
    name: '이상용',
    age: 20,
    favoriteFood: ['국밥', '국수', '고기'],

})

db.testCollection.find()

db.testCollection.updateOne(
    {
        name: '이상용'
    },
    {
        $set: { age: 33 }
    })
db.testCollection.deleteOne({ name: "이상용" })
db.testCollection.find()