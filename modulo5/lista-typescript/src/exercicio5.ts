console.log("Exercício 5")

const usuarios =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

type users = {
    name: string, 
    email: string,
    role: string
}

const apenasAdmin = usuarios.filter((usuario) => {
    return usuario.role === "admin"
});

const apenasEmail = apenasAdmin.map((usuario) => {
    return usuario.email
});

console.log(apenasEmail)