function a(){
    console.log('Hey there')
}

a() //функция работает

a = 10 // но я могу присвоить ей новое значение из за динамической типизации

//a() // ошибка, теперь такой функции нет

console.log(a) //но есть переменная

// Для того чтобы избежать это, нужно по возможности использовать CONST
 const b = () =>{
    console.log('Hey there 2')
 }
 b() //Hey there
 //b = 10 //TypeError: Assignment to constant variable.