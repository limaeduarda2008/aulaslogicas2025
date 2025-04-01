let filmes = ['Coraline e o Mundo Secreto', 
 'Esposa de Mentirinha', 
 'Norbit',
 'Gente Grande',
 'Donzela',
 'O Impossivel',
 'Matrix'
 ];
 
console.log(filmes[0]);
console.log(filmes[3]);

filmes[filmes.length - 1] = 'Senhor dos Anéis';
console.log("Lista após substituir o último filme", filmes);

filmes.push("Alice no País das Maravilhas");
console.log("Lista após adicionar filme no final", filmes);

filmes.splice(5, 0 `Jurassic Park`);
console.log("lista após ");

filmes.shift()
 







