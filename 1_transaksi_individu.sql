/*
Buat query create tabel & seed data transaksi dengan spesifikasi kolom sebagai berikut:
Id
Tanggal order
Status pelunasan
Tanggal pembayaran
*/

--CREATE Table
CREATE TABLE transaksi_individu (
    id integer DEFAULT nextval('untitled_table_id_seq'::regclass) PRIMARY KEY,
    tanggal_order timestamp with time zone,
    status text,
    tanggal_pembayaran timestamp with time zone
);

CREATE UNIQUE INDEX untitled_table_pkey ON transaksi_individu(id int4_ops);


--INSERT value
INSERT INTO transaksi_individu(tanggal_order, status, tanggal_pembayaran)
VALUES 
('2020-12-01 09:30:00', 'lunas',   '2020-12-01 12:00:00'),
('2020-12-01 10:30:00', 'pending', '2020-12-02 12:01:00'),
('2020-12-01 11:30:00', 'lunas',   '2020-12-03 12:02:00')



