document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aqui você pode adicionar a lógica de autenticação
  if (username === "usuario" && password === "senha") {
    document.getElementById("message").innerText = "Login bem-sucedido!";
    // Redirecionamento após 2 segundos (2000 milissegundos)
    setTimeout(function() {
      window.location.href = "pagina_secreta.html";
    }, 1000);
  } else {
    document.getElementById("message").innerText = "Credenciais inválidas. Tente novamente.";
  }
});
