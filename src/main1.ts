// DATOS-----------------------------------------------

const gestor1 = {
    id: 1,
    usuario: 'gestor1',
    password: 'gestor1',
    correo: 'gestor1@mail.com',
};

const gestor2 = {
    id: 2,
    usuario: 'gestor2',
    password: 'gestor2',
    correo: 'gestor2@mail.com',
};

const gestor3 = {
    id: 3,
    usuario: 'gestor3',
    password: 'gestor3',
    correo: 'gestor3@mail.com',
};

const persona1= {
    id: 4,
    id_gestor: 1,
    usuario: 'persona4',
    password: 'persona4',
    correo: 'persona4@mail.com',
    saldo: 5638287,
};

const persona2= {
    id: 5,
    id_gestor: 2,
    usuario: 'persona5',
    password: 'persona5',
    correo: 'persona5@mail.com',
    saldo: 8493747,
};

const persona3= {
    id: 6,
    id_gestor: 3,
    usuario: 'persona6',
    password: 'persona6',
    correo: 'persona6@mail.com',
    saldo: 4374545,
};

/*  ---------------------------------------------------

const mensaje = {
    id: x,
    id_origen: x,
    id_destino: x,
    texto: x,
    fecha: x,
}

//  ---------------------------------------------------

const transferencia = {
    id: x,
    id_ordenante: x,
    id_beneficiario: x,
    importe: x,
    concepto: x,
    fecha: x,
}

//  ---------------------------------------------------

const prestamo_relacion = {
    id_prestamo: x,
    id_cliente: x,
}

//  ---------------------------------------------------

const prestamo = {
    id: x,
    nombre: x,
    comision: x,
    meses: x,
}

//  ---------------------------------------------------

// ARRAYS DE LOS DATOS-------------------------------*/

const gestores = [gestor1, gestor2, gestor3]
const personas = [persona1, persona2, persona3]

for (const gestor of gestores)
    {
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    }

    for (const persona of personas)
    {
    console.log(`id: ${persona.id}`);
    console.log(`gestor correspondiente: ${persona.id_gestor}`)
    console.log(`usuario: ${persona.usuario}`);
    console.log(`password: ${persona.password}`);
    console.log(`correo: ${persona.correo}`);
    }
