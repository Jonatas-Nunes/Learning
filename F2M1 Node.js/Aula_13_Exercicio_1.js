const fs = require ('fs');

function lerTarefas() {
    try {
        const arquivo = fs.readFileSync('./Aula_13_Exercicio_1.json', 'utf-8');
        const tarefas = JSON.parse(arquivo);
        console.log('Lista de Tarefas:');
        tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}. ${tarefa}`);
        });
    } catch (erro) {
        console.log(`Ocorreu um erro ao ler as tarefas: ${erro.message}`);
    }
}

function adicionarTarefas(novaTarefa) {
    try {
        const arquivo = fs.readFileSync('./Aula_13_Exercicio_1.json', 'utf-8');
        const tarefas = JSON.parse(arquivo);
        tarefas.push(novaTarefa);
        fs.writeFileSync('./Aula_13_Exercicio_1.json', JSON.stringify(tarefas, null, 2));
        console.log(`Tarefa "${novaTarefa}" adicionada com sucesso.`);
    } catch (erro) {
        console.error(`Ocorreu um erro ao adicionar a tarefa: ${erro.message}`);
    }
}

lerTarefas();
adicionarTarefas('Fazer compras');
lerTarefas();