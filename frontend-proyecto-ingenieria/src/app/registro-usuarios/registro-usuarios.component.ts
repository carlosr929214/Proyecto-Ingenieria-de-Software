import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({//Decorador
  selector: 'registro-usuarios',
  templateUrl: './registro-usuarios.component.html',
  styleUrls: ['./registro-usuarios.component.css']
})

export class RegistroUsuariosComponent implements OnInit{
    personas:any = []; // aqui se almacenaran las personas que estan en el servidor
    persona:any = {
        nombre:'',
        apellido:'',
        correo:'',
        telefono:'',
        direccion:'',
        genero:'',
        password:''
    }

    backendHost:string = 'http://localhost:3000';

    constructor(private httpClient: HttpClient){} //inyeccion retorna una instancia del tipo HttpClient 
                                                  //y la almacena en httpClient y se puede utilizar fuera del constructor 
    ngOnInit(){  // en este punto esta cargado el sitio 
        this.httpClient.get(`${this.backendHost}/user`)
        .subscribe(res =>{ //esta funcion de tipo flecha se ejecuta cuando el servidor responde 
            this.personas = res; //almacenamos las personas que estan almacenadas  en el servidor
                                 //res trae un json con toda la informacion 
            console.log(this.personas);
        });

    }

    guardar(){
        this.httpClient.post(`${this.backendHost}/user`,this.persona)// 
        .subscribe((res:any)=>{//sucribe el resultado del metodo post
            console.log(res);
            this.personas.push(res) //agrega al arreglo personas el usuario guardado
        });
    }

    eliminar(i:any){
        console.log("Eliminar el elemento" + i);
        this.httpClient.delete(`${this.backendHost}/user/${i}`) //se hace una petcion al servidor con el indice
        .subscribe((res:any) =>{ // 
            console.log(res);
            this.personas.splice(i,1);
            //this.personas.splice(res,1);
            // this.personas = res;
            // console.log(res);
            if (res.codigoResultado == 1){
                    this.personas.splice(i,1);// splice para eliminimar del elemento i de uno en uno  
             }
        });
    }

    editarDatos(i:any) {
        console.log("Edita el elemento" + i);
        this.httpClient.get(`${this.backendHost}/usere/${i}`)
        .subscribe((res) =>{ 
            console.log(res);
            // if (res.codigoResultado == 1 ){
            //     this.personas.push(i);
            // }
        });
    }


}
 export class AppComponent { 
   title = 'formularioUsuario';
}