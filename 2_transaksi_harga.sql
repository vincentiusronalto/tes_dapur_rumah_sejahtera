-- Table Definition ----------------------------------------------

CREATE TABLE transaksi_harga (
    id SERIAL PRIMARY KEY,
    id_transaksi integer UNIQUE REFERENCES transaksi_individu(id) ON DELETE CASCADE ON UPDATE CASCADE,
    harga integer,
    jumlah integer,
    subtotal integer
);

CREATE UNIQUE INDEX transaksi_harga_pkey ON transaksi_harga(id int4_ops);
CREATE UNIQUE INDEX transaksi_harga_id_transaksi_key ON transaksi_harga(id_transaksi int4_ops);


--INSERT
INSERT INTO transaksi_harga(id_transaksi, harga, jumlah, subtotal)
VALUES 
('2', '30000', '2','60000'),
('3', '40000', '3','120000'),
('4', '50000', '4','200000')
