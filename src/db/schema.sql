CREATE DATABASE AC;
commit;
CREATE TABLE AC.Companies(
  company_id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(255)
);
commit;

CREATE TABLE AC.Postings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(8000),
  title VARCHAR(255),
  company_id INT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  CONSTRAINT fk_company FOREIGN KEY (company_id)
  REFERENCES AC.Companies(company_id)
);

INSERT INTO AC.Postings VALUES(1,'Work really hard','Really hard worker',1, CURRENT_TIMESTAMP , CURRENT_TIMESTAMP );
INSERT INTO AC.Postings VALUES(2,'Work even harder','Management Manager',2, CURRENT_TIMESTAMP , CURRENT_TIMESTAMP );
INSERT INTO AC.Companies VALUES(1,'Activation Capital');
INSERT INTO AC.Companies VALUES(2,'Activation Capital One')
