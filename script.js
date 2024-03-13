// Primeiro, obtemos o elemento de entrada que será usado para exibir os números e resultados
let display = document.getElementById('display');

// Esta função 'inputValue' é chamada quando um botão numérico ou de operação é pressionado
function inputValue(value) {
  // Adicionamos o valor do botão pressionado ao valor atual no display
  display.value += value;
}

// Esta função 'clearDisplay' é chamada quando o botão 'C' é pressionado
function clearDisplay() {
  // Limpa o display definindo seu valor como uma string vazia
  display.value = '';
}

// Esta função 'calculate' é chamada quando o botão '=' é pressionado
function calculate() {
  try {
    // Tenta calcular a expressão atual no display usando a função 'eval'
    // e atualiza o display com o resultado
    display.value = eval(display.value);
  } catch (e) {
    // Se houver um erro na expressão, por exemplo, se for inválida,
    // captura o erro e exibe 'Erro' no display
    display.value = 'Erro';
  }
}
