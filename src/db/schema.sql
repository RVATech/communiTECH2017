CREATE DATABASE AC;

CREATE TABLE AC.Companies(
  company_id INT PRIMARY KEY
);

CREATE TABLE AC.Postings (
  posting_id INT  PRIMARY KEY,
  description VARCHAR(8000),
  title VARCHAR(255),
  company_id INT,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  CONSTRAINT fk_company FOREIGN KEY (company_id)
  REFERENCES Companies(company_id)
);