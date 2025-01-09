/*
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

// usei  gcc main.c -o main.exe  para compilar

#include <stdio.h>

int main()
{
	int num, fib1 = 0, fib2 = 1, fib_next;
	printf("Informe um número: ");
	scanf("%d", &num);

	printf("Sequência de Fibonacci:\n");
	printf("%d, %d, ", fib1, fib2);

	while (fib_next < num)
	{
		fib_next = fib1 + fib2;
		printf("%d, ", fib_next);
		fib1 = fib2;
		fib2 = fib_next;
	}

	if (fib_next == num)
	{
		printf("\nO número %d pertence à sequência de Fibonacci.\n", num);
	}
	else
	{
		printf("\nO número %d não pertence à sequência de Fibonacci.\n", num);
	}

	return 0;
}