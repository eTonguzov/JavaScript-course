const objectA = {
    b:5, //пара ключ значение
    a:10
}

const copyOfA = objectA // ссылаюсь на объект ObjectA
copyOfA.a = 100

console.log(objectA.a) //100 так как они ссылаются на один и тот же объект

