INSERT INTO departments(name)
VALUES
  ('Jedi'),
  ('Sith'),
  ('501st'),
  ('Senate');

INSERT INTO role(title, salary, department_id)
VALUES
  ('Jedi Master', 120000, 1),
  ('Jedi Knight', 100000, 1),
  ('Padawan', 50000, 1),
  ('Apprentice', 40000, 2),
  ('Sith Lord', 100000, 2),
  ('Chancellor', 150000, 4),
  ('Senator', 60000, 4),
  ('Captain', 40000, 3),
  ('Soldier', 30000, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
  ('Ahsoka', 'Tano', 3, NULL),
  ('Anakin', 'Skywalker', 2, NULL),
  ('Count', 'Dooku', 4, NULL),
  ('Chancellor', 'Palpatine', 6, NULL),
  ('Captain', 'Rex', 8, NULL),
  ('Padme', 'Amidala', 7, NULL);