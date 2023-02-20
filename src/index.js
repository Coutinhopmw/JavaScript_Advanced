const user01 = new Object()
user01.id = 1
user01.nome = "Cássio" 
user01.idade = 23

const user02 = new Object ()
user02.id = 2
user02.nome = "Kely"
user02.idade = 18

const user03 = new Object ()
user03.id = 3
user03.nome = "Daniel"
user03.idade = 55

Object.defineProperty(user01, 'cpf', {
    enumerable : false,
    whitable : false,
    value : '000.000.000-00'
})