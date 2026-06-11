function iniciarSesion(){

    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if(correo === "admin@gmail.com" && clave === "1234"){

        window.location.href = "dashboard-admin.html";

    }else if(correo === "usuario@gmail.com" && clave === "1234"){

        window.location.href = "dashboard-usuario.html";

    }else{

        alert("Datos incorrectos");

    }
}