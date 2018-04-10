function clique_botao()
    {
        var senha = document.getElementById("u4_input").value;
        if (senha == "faccat") {
            alert("Acesso permitido.");
            window.location="menuprincipal.html";

        }else{
        	alert("Senha Invalida! Tente novamente.");
            
        }
        
    }