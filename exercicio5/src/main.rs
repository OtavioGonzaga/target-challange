// O tempo acabou enquanto fazia o exercio 4 e acabei perdendo o enunciado do exercicio 5
// Mas me lembro que devia inverter uma string, decidi fazer isso em uma linguagem de baixo nível para aumentar o desafio
// Criado com cargo new exercicio5 e executado com cargo run --release
// Caso queira testar o código e não tinver o rust e cargo instalado, pode executar no playground https://play.rust-lang.org/?version=stable&mode=debug&edition=2021

use std::io::{self, Write};

// Essa função recebe um ponteiro para String, para obedecer ao borrowing
fn reverse_string(s: &String) -> String {
    let mut reversed: String = String::new();

    // x assume o valor de cada membro do array que vai de 1 até o numero de caracteres na String que será revertida
    for x in 0..(s.chars().count()) {
        // Adiciona cada caractere da String original à String reversa
        // A função collect::<Vec<char>>() converte a String original em um vetor de caracteres
        // A função chars().count() retorna o numero de caracteres na String original
        // A função [s.chars().count() - 1 - x] retorna o caractere na posição x do vetor, iniciando do fim para o começo
        // A função push() adiciona o caractere reverso à String reversa
        reversed.push(s.chars().collect::<Vec<char>>()[s.chars().count() - 1 - x]);
    }

    // em rust, a falta de ; em uma variável no final de uma função indica seu retorno
    reversed
}

fn main() {
    // uso uma String (struct) mutável
    let mut original: String = String::new();

    print!("Digite algo para reverter: ");
    io::stdout().flush().unwrap(); // Limpa o buffer

    io::stdin()
        .read_line(&mut original)
        .expect("Failed to read line");

    // uso o trim para remover a quebra de linha
    original = String::from(original.trim());

    let reversed: String = reverse_string(&original);

    println!("Original: {}", original);
    println!("Reverso: {}", reversed);
}
