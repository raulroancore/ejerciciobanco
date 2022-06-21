function generarGestores(){


    const gestor1 = {
        id: 1,
        usuario: 'gestor1',
        password: 'gestor1',
        correo: 'gestor1@mail.com'
    };
    
    const gestor2 = {
        id: 2,
        usuario: 'gestor2',
        password: 'gestor2',
        correo: 'gestor2@mail.com'
    };
    
    
    const gestores = [gestor1, gestor2,  {
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    }];
        return gestores;
    }

    function generarClientes(){

        const cliente1 = {
            id: 1,
            id_gestor: 1,
            usuario: 'usuario1',
            password: 'usuario1',
            correo: 'usuario1@mail.com',
            saldo: 9500
        };
        
        const cliente2 = {
            id: 2,
            id_gestor: 2,
            usuario: 'usuario2',
            password: 'usuario2',
            correo: 'usuario2@mail.com',
            saldo: 5000
        };
        
        const clientes = [cliente1, cliente2];  
            clientes.push({
                id: 3,
                id_gestor: 1,
                usuario: 'cliente3',
                password: 'cliente3',
                correo: 'cliente3@mail.com',
                saldo: 1230
            });
            
            return clientes;
        }

       