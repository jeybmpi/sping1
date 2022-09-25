const usuarios = [
    {
        nombre:'juan',
        numero:5,
        contrasena:'contrasena1',
        tipo_de_usuario:1,
    },
    {
        nombre:'maria',
        numero:6,
        contrasena:'contrasena2',
        tipo_de_usuario:2,
    },
    {
        nombre:'miguel',
        numero:7,
        contrasena:'contrasena3',
        tipo_de_usuario:2,
    },
    {
        nombre:'angela',
        numero:8,
        contrasena:'contrasena4',
        tipo_de_usuario:2,
    },
    {
        nombre:'antonio',
        numero:9,
        contrasena:'contrasena5',
        tipo_de_usuario:2,
    }
];
let dinero = [
    {
        billete:'cinco mil',
        cantidad:Number(''),
        valor:5000,
    },
    {
        billete:'diez mil',
        cantidad:Number(''),
        valor:10000,
    },
    {
        billete:'veinte mil',
        cantidad:Number(''),
        valor:20000,
    },
    {
        billete:'cincuenta mil',
        cantidad:Number(''),
        valor:50000,
    },
    {
        billete:'cien mil',
        cantidad:Number(''),
        valor:100000,
    }
];
let cajero = (iniciadorcito) => {
    while(iniciadorcito){
        let docIngresado =Number(prompt('cual es el documento'));
        let claveIngresada =prompt('preguntar contraseña');
        let userFind = usuarios.find(element=>
            element.numero === docIngresado
        );
        if(userFind){
            if(claveIngresada===userFind.contrasena){
                if(userFind.tipo_de_usuario===1){
                    dinero[0].cantidad += Number(prompt('ingrese la cantidad de billetes de 5mil que quiere'));
                    dinero[1].cantidad += Number(prompt('ingrese la cantidad de billetes de 10mil que quiere'));
                    dinero[2].cantidad += Number(prompt('ingrese la cantidad de billetes de 20mil que quiere'));
                    dinero[3].cantidad += Number(prompt('ingrese la cantidad de billetes de 50mil que quiere'));
                    dinero[4].cantidad += Number(prompt('ingrese la cantidad de billetes de 100mil que quiere'));
                    total0 = (dinero[0].cantidad)*(dinero[0].valor);
                    total1 = (dinero[1].cantidad)*(dinero[1].valor);
                    total2 = (dinero[2].cantidad)*(dinero[2].valor);
                    total3 = (dinero[3].cantidad)*(dinero[3].valor);
                    total4 = (dinero[4].cantidad)*(dinero[4].valor);
                    totalFinal = total0 + total1 + total2 + total3 + total4;
                    console.log(`hay ${total0} pesos en billetes de cincomil`);
                    console.log(`hay ${total1} pesos en billetes de diezcomil`);
                    console.log(`hay ${total2} pesos en billetes de veintecomil`);
                    console.log(`hay ${total3} pesos en billetes de cincuentamil`);
                    console.log(`hay ${total4} pesos en billetes de cienmil`);
                    console.log(`hay ${totalFinal} pesos en total`);
                    console.log('ahora saldra del administrador y el dinero del cajero ha cambiado');
                    break;
                }else{
                    if((dinero[0].cantidad+dinero[1].cantidad+dinero[2].cantidad+dinero[3].cantidad+dinero[4].cantidad)==0){
                        console.log('el cajero esta en mantenimiento vuelva pronto');
                        break;
                    }else{
                        let dineroRetirar = Number(prompt('ingrese la cantidad de dinero que desea retirar'));
                        if(dineroRetirar>totalFinal){
                            console.log(`el cajero solo podra entregar ${totalFinal} pesos.`);
                            dineroRetirar-(total4);
                            dineroRetirar-(total3);
                            dineroRetirar-(total2);
                            dineroRetirar-(total1);
                            dineroRetirar-(total0);
                            console.log(`El cajero le entregara ${totalFinal} y se usaron${dinero[4].cantidad} billetes de 100mil, se usaron${dinero[3].cantidad} billetes de 50mil, se usaron${dinero[2].cantidad} billetes de 20mil, se usaron${dinero[1].cantidad} billetes de 10mil, se usaron${dinero[0].cantidad} billetes de 5mli`);
                        }else{
                            console.log(`el cajero le puede entregara ${totalFinal} o menos`);
                            let cienMil = dineroRetirar-total4;
                            let cincuentaMil = dineroRetirar-total3;
                            let veinteMil = dineroRetirar-total2;
                            let diezMil = dineroRetirar-total1;
                            let cincoMil = dineroRetirar-total0;
                            if(dineroRetirar>cienMil){
                                
                                break;
                            }else if(dineroRetirar>cincuentaMil){
                                let x = 0;

                                break;
                            }else if(dineroRetirar>veinteMil){
                                let x = 0;

                                break;
                            }else if(dineroRetirar>diezMil){
                                let x = 0;

                                break;
                            }else if(dineroRetirar>cincoMil){
                                let x = 0;

                                break;
                            }else{

                            }
                            
                        }
                    }
                }
                console.log(userFind.tipo_de_usuario);
                console.log(userFind);
            }else{
                alert('su clave es incorrecta vuelva a intentarlo');
        }
        }else{
            console.log('el usuario no existe, intentelo de nuevo');
        }    
    }
}
let v = 1;

for (let index = 0; index < v; index++) {
    
    let iniciador = Number(prompt('¿quiere iniciar el cajero?(marque (1) para si y (2) para no)'));
    let iniciadorF;
    if(iniciador==1){
    iniciadorF = true;
    }else{
    iniciadorF = false;
    }
    cajero(iniciadorF);
    v += Number(prompt('si quiere continuar en el programa pulse (1) de lo contrario escriba (-1)'));
}
console.log(v);
console.log(dinero);
