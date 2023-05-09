# sistema_de_gerenciamento_de_hotel
Gerenciamento de reserva de hotel
Tema do trabalho: Desenvolvimento de um sistema de gerenciamento de reservas de hotéis com serviços REST protegidos por autenticação e autorização.

#Para o desenvolvimento do sistema, foram criadas as seguintes tabelas:

1. Tabela "hoteis": contém informações sobre os hotéis disponíveis para reserva, como nome, endereço, número de quartos, classificação e preço médio por noite.
2. Tabela "quartos": contém informações sobre os quartos disponíveis em cada hotel, como número de quarto, tipo de quarto, número de camas, preço por noite e disponibilidade.
3. Tabela "reservas": contém informações sobre as reservas feitas pelos usuários, como data de check-in, data de check-out, número de hóspedes, número de quartos reservados, preço total e status da reserva.
4. Tabela "usuários": contém informações sobre os usuários do sistema, como nome, endereço de e-mail, senha e tipo de usuário (administrador ou cliente).

Cada tabela possui 30 registros para fins de demonstração.

Para proteger os serviços REST, implementamos uma camada de autenticação e autorização baseada em tokens JWT (JSON Web Tokens), que são gerados no momento do login do usuário e verificados em todas as solicitações subsequentes. Os usuários do tipo "administrador" têm acesso a todas as funcionalidades do sistema, enquanto os usuários do tipo "cliente" só podem visualizar e gerenciar suas próprias reservas.

Com essa implementação, os usuários podem acessar os recursos do sistema de gerenciamento de reservas de hotéis de forma segura e controlada, garantindo a privacidade e a segurança dos dados.

Além disso, foram desenvolvidos os seguintes serviços REST para o sistema de gerenciamento de reservas de hotéis:

1. GET /hoteis: retorna a lista de hotéis disponíveis para reserva.
2. GET /hoteis/{id}: retorna informações sobre um hotel específico com base no seu ID.
3. GET /quartos: retorna a lista de quartos disponíveis para reserva em todos os hotéis.
4. GET /quartos/{id}: retorna informações sobre um quarto específico com base no seu ID.
5. POST /reservas: permite que um usuário faça uma nova reserva, fornecendo informações sobre a data de check-in, data de check-out, número de hóspedes e número de quartos.
6. GET /reservas: retorna a lista de todas as reservas feitas por um usuário, identificado pelo token JWT fornecido na solicitação.
7. GET /reservas/{id}: retorna informações sobre uma reserva específica com base no seu ID.
8. PUT /reservas/{id}: permite que um usuário atualize informações sobre uma reserva específica com base no seu ID, como datas de check-in e check-out ou número de quartos.
9. DELETE /reservas/{id}: permite que um usuário cancele uma reserva específica com base no seu ID.

Esses serviços permitem que os usuários gerenciem suas reservas e reservem quartos em hotéis de forma fácil e conveniente, através de uma interface amigável e segura. A camada de autenticação e autorização garante que apenas usuários autorizados possam acessar as funcionalidades do sistema, e os tokens JWT fornecem um nível adicional de segurança ao sistema, protegendo-o contra ataques maliciosos.

