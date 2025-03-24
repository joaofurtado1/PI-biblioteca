document.addEventListener("DOMContentLoaded", function() {
    const formLivro = document.getElementById("formLivro");
    const listaLivros = document.getElementById("listaLivros");
    let livrosCadastrados = [];

    function renderizarLivros() {
        listaLivros.innerHTML = ''; 
        livrosCadastrados.forEach(livro => {
            const li = document.createElement("li");
            li.textContent = `Título: ${livro.titulo} | Autor: ${livro.autor} | Categoria: ${livro.categoria}`;
            listaLivros.appendChild(li);
        });
    }

    if (formLivro) {
        formLivro.addEventListener("submit", function(event) {
            event.preventDefault();
            
            const titulo = document.getElementById("titulo").value.trim();
            const autor = document.getElementById("autor").value.trim();
            const categoria = document.getElementById("categoria").value.trim();
            
            if (!titulo || !autor || !categoria) {
                alert("Preencha todos os campos!");
                return;
            }
            
            const livro = {
                titulo,
                autor,
                categoria
            };
            
            livrosCadastrados.push(livro);
            renderizarLivros();
            formLivro.reset();
            alert("Livro cadastrado com sucesso!");
        });
    }

    const formUsuario = document.getElementById("formUsuario");
    if (formUsuario) {
        formUsuario.addEventListener("submit", function(event) {
            event.preventDefault();
            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            
            if (!nome || !email) {
                alert("Preencha todos os campos!");
                return;
            }
            
            alert("Usuário cadastrado com sucesso!");
            formUsuario.reset();
        });
    }

    const formEmprestimo = document.getElementById("formEmprestimo");
    if (formEmprestimo) {
        formEmprestimo.addEventListener("submit", function(event) {
            event.preventDefault();
            const livro = document.getElementById("livro").value.trim();
            const usuario = document.getElementById("usuario").value.trim();
            
            if (!livro || !usuario) {
                alert("Preencha todos os campos!");
                return;
            }
            
            alert("Empréstimo realizado com sucesso!");
            formEmprestimo.reset();
        });
    }

    const listaEmprestimos = document.getElementById("listaEmprestimos");
    if (listaEmprestimos) {
        const emprestimos = ["O Senhor dos Anéis - João", "Harry Potter - Maria", "1984 - Pedro"];
        emprestimos.forEach(emprestimo => {
            const li = document.createElement("li");
            li.textContent = emprestimo;
            listaEmprestimos.appendChild(li);
        });
    }
});