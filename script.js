function areaOfTheTriangle(base, altura){
    return base * altura /2
}
function areaOfTheRectangle(base,altura){
    return base * altura
}
function areaOfTheSquare(lado){
    return lado * lado
}
function areaOftheTrapaze(baseMaior, baseMenor, altura){
    return (baseMaior + baseMenor) * altura /2
}
function areaOfTheCircle(raio){
    return 3,14 * (raio*raio)
}

do{
 const menu = prompt(
   `1. área do triângulo: 
    2. área do retângulo:
    3. área do quadrado: 
    4. área do trapézio:
    5. área do círculo:
    6. Sair`)
    switch(menu){
        case '1' :
            let baseTri = parseInt(prompt('Digite o valor da base o triângulo:'))
            let highTri = parseInt(prompt('Digite o valor da altura do triangulo:'))
            alert(areaOfTheTriangle(baseTri,highTri))
            break

        case '2' : 
            let baseRec = parseInt(prompt('Digite o valor da base do retângulo:'))
            let highRec = parseInt(prompt('Digite o valor altura do retângulo:'))
            alert(areaOfTheRectangle(baseRec,highRec))
            break

        case '3' : 
            let side = parseInt(prompt('Digite o valor do lado do quadrado:'))
            alert(areaOfTheSquare(side))
            break

        case '4' :
            let largerBase = parseInt(prompt('Digite o valor da base maaior o trapézio:'))
            let smallerBase = parseInt(prompt('Digite o valor da base maior do trapézio: ' ))
            let highTrap = parseInt(prompt('Digite o valor da altura do trapézio:'))
            alert(areaOftheTrapaze(largerBase, smallerBase, highTrap))
            break
            
        case '5':
            let radius = parseInt(pompt('Digite o valr o raio do círculo:'))
            alert(areaOfTheCircle(radius))
            break

        default:
            alert('Opção inválida')
    }
}while(menu != '6')