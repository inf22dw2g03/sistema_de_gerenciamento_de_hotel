INSERT INTO usuarios (name, address, email, password, type_user)
VALUES
  ('John Doe', '123 Main St', 'john.doe@example.com', 'password123', 'cliente'),
  ('Jane Smith', '456 Elm St', 'jane.smith@example.com', 'password456', 'Normal'),
  ('Michael Johnson', '789 Oak St', 'michael.johnson@example.com', 'password789', 'Admin'),
  ('Emily Williams', '321 Pine St', 'emily.williams@example.com', 'password321', 'cliente'),
  ('David Brown', '654 Cedar St', 'david.brown@example.com', 'password654', 'cliente'),
  ('Sarah Davis', '987 Walnut St', 'sarah.davis@example.com', 'password987', 'cliente'),
  ('Robert Wilson', '159 Maple St', 'robert.wilson@example.com', 'password159', 'cliente'),
  ('Jennifer Jones', '753 Birch St', 'jennifer.jones@example.com', 'password753', 'Admin'),
  ('Christopher Taylor', '852 Poplar St', 'christopher.taylor@example.com', 'password852', 'cliente'),
  ('Jessica Anderson', '369 Fir St', 'jessica.anderson@example.com', 'password369', 'cliente');
INSERT INTO reservas (data_check_in, data_check_out, numero_pessoas, numero_quarto, preco, status_reserva, usuario_id)
VALUES
  ('2023-07-01', '2023-07-05', 2, 101, 500.00, 'Confirmada', 1),
  ('2023-07-10', '2023-07-15', 1, 102, 400.00, 'Pendente', 2),
  ('2023-07-03', '2023-07-06', 2, 103, 600.00, 'Confirmada', 3),
  ('2023-07-12', '2023-07-17', 1, 104, 450.00, 'Pendente', 4),
  ('2023-07-05', '2023-07-09', 2, 105, 550.00, 'Confirmada', 5),
  ('2023-07-14', '2023-07-19', 1, 106, 420.00, 'Pendente', 6),
  ('2023-07-07', '2023-07-12', 2, 107, 650.00, 'Confirmada', 7),
  ('2023-07-16', '2023-07-21', 1, 108, 480.00, 'Pendente', 8),
  ('2023-07-09', '2023-07-13', 2, 109, 580.00, 'Confirmada', 9),
  ('2023-07-18', '2023-07-23', 1, 110, 400.00, 'Pendente', 10);

INSERT INTO quartos (numero_quarto, tipo_quarto, numero_cama, preco_noite, disponibilidade, usuario_id)
VALUES
  ('101', 'Quarto de Luxo', '1 Cama King Size', 300.00, 'Disponível', 1),
  ('102', 'Quarto Standard', '2 Camas de Solteiro', 200.00, 'Disponível', 2),
  ('103', 'Suíte Presidencial', '1 Cama King Size', 500.00, 'Disponível', 3),
  ('104', 'Quarto Deluxe', '1 Cama Queen Size', 250.00, 'Disponível', 4),
  ('105', 'Quarto Familiar', '1 Cama de Casal e 2 Camas de Solteiro', 350.00, 'Disponível', 5),
  ('106', 'Quarto Executivo', '1 Cama King Size', 300.00, 'Disponível', 6),
  ('107', 'Quarto com Vista para o Mar', '1 Cama Queen Size', 400.00, 'Disponível', 7),
  ('108', 'Quarto com Varanda', '1 Cama King Size', 350.00, 'Disponível', 8),
  ('109', 'Quarto Duplo', '2 Camas de Casal', 300.00, 'Disponível', 9),
  ('110', 'Quarto Econômico', '1 Cama de Solteiro', 150.00, 'Disponível', 10);
INSERT INTO hotels (nome, address, numero_quartos, classification, preco_noite, disponibilidade)
VALUES
  ('Hotel Exemplo', '123 Main St', 100, 4, 200.00, 'Disponível');
