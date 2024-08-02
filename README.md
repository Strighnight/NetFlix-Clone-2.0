# 🚀 Projeto de Estudo Formação ChatGPT for Devs com Felipe Aguiar da DIO

Bem-vindo ao meu repositório de estudos! Aqui você encontrará minha jornada de aprendizado com o [Felipe Aguiar](https://github.com/felipeAguiarCode), instrutor da [Digital Innovation One (DIO)](https://www.dio.me/). 

## 📂 Estrutura do Repositório

Este repositório é um fork do projeto original do Felipe Aguiar. No entanto, para maximizar meu aprendizado, optei por utilizar um fork que não havia sido muito alterado. Dessa forma, poderei acompanhar as mudanças e atualizações conforme elas acontecem, garantindo uma experiência de aprendizado mais rica e envolvente.

### 🌟 Funcionalidades Principais:
- **Fork atualizado**: Acompanhe as mudanças do projeto original.
- **Arquivos originais preservados**: Para referência futura e estudos comparativos.
- **Contribuições abertas**: Sinta-se à vontade para sugerir melhorias ou utilizar os arquivos originais para seus próprios estudos.

## 🛠️ Como Utilizar

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2. **Navegue até o diretório do projeto**:
    ```bash
    cd seu-repositorio
    ```
4. **Mantenha o repositório atualizado**:
    ```bash
    git pull origin main
    ```
    
## 🔄 Alterações

### Modificação 1: `api.js`

**Código original:**

![image](https://github.com/user-attachments/assets/973c9b2e-946b-4741-981c-57b2bf7bf48d)

**Código modificado:**

![image](https://github.com/user-attachments/assets/a66b7218-3c91-49ad-b3d1-315fbc1178fc)

**Principais mudanças:**

1 - Uso de const ao invés de let:

    Utilização de "const" ao invés de "let" para prevenir alterações acidentais e tornar claro que esses valores são constantes.

2 - Nomenclatura clara: 

    Como são constantes, os nomes foram definidos em maiúsculas e utilizando o padrão Snake_Case.

3 - Remoção de Linhas Puladas:

    Melhorando a organização e legibilidade do código.

**Observação:**

    Para que o código funcionasse perfeitamente, foi necessário alterar o arquivo home.js, uma vez que os nomes das constantes em api.js foram alterados.

### Modificação 2: `app.js` e  `server.js`

**Código original:**

**`app.js`**

![image](https://github.com/user-attachments/assets/0cdc0050-a101-4644-bf76-80cd7d133a6b)


**`server.js`**

![image](https://github.com/user-attachments/assets/42235d5b-3479-4b0f-87bb-4b7662e02a10)

**Código modificado:**

**`app.js`**

![image](https://github.com/user-attachments/assets/20352a5c-f900-449b-a48c-344d2f978ce4)

**`server.js`**

![image](https://github.com/user-attachments/assets/8db4a7bb-ba87-44a4-94a2-3827ce8970a9)

**Principais mudanças:**

1 - Modularização do Código:

    O código foi dividido em dois arquivos: app.js e server.js. Isso segue o princípio de responsabilidade única, onde cada módulo tem uma função clara.

2 - Função de Configuração (createApp):

    A função createApp foi movida para app.js e exportada.
    Essa função configura o servidor Express, define o diretório estático e a rota raiz.

3 - Função de Inicialização (startServer):

    A função startServer foi movida para server.js.
    Essa função importa createApp, cria o aplicativo e inicia o servidor na porta especificada, logando uma mensagem quando o servidor está em execução.

4 - Uso de path.join Consistente:

    O uso de path.join para construir caminhos foi mantido e aplicado consistentemente.

5 - Adição de Porta Dinâmica:

    server.js agora define uma porta padrão (process.env.PORT || 3000), permitindo a configuração da porta através de variáveis de ambiente.

### Modificação 3: `app.js`

**Código original:**
    
![image](https://github.com/user-attachments/assets/17f98626-d1cd-4e08-b68f-51a8417e2cce)


**Código modificado:**

![image](https://github.com/user-attachments/assets/321e3032-d746-4e77-9af3-edc8e2fb4ddd)

**Principal mudança:**

1 - Comentários:

    Adicionei comentários para explicar o propósito de cada seção do código, tornando mais fácil para um leitor entender o que cada parte faz.

### Modificação 4: `app.js`

**Código original:**

![image](https://github.com/user-attachments/assets/321e3032-d746-4e77-9af3-edc8e2fb4ddd)

**Código modificado:**

![image](https://github.com/user-attachments/assets/f4b870bc-54ed-4c4f-93d2-cec148d69320)

**Principais mudanças:**

1 - Criação de funções separadas:

    Foram criadas duas funções separadas (configureMiddlewares e defineRoutes) para separar a configuração de middlewares e definição de rotas.

2 - Passagem de parâmetros:

    Essas funções recebem app e publicDirectoryPath como parâmetros, permitindo que sejam reutilizadas ou testadas independentemente.

3 - Organização do código:

    A lógica de configuração da aplicação foi organizada de maneira mais modular e legível, facilitando a manutenção e a expansão futura.

## 🌱 Contribuições

Este repositório está aberto para contribuições! Se você tem sugestões, melhorias ou correções, sinta-se à vontade para abrir uma *pull request* ou entrar em contato.

## 📫 Contato

Se você tiver dúvidas ou quiser trocar ideias sobre o projeto, entre em contato:

- **Email**: luanwp@hotmail.com
- **LinkedIn**: [Luan Mercaldi](https://www.linkedin.com/in/seu-perfil/)

---

**Feliz aprendizado!** 🌟
