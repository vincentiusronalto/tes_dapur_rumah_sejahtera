--inner join transaksi individu dan transaksi harga dengan reference id transaksi

SELECT i.tanggal_order, i.status, i.tanggal_pembayaran, h.subtotal, h.jumlah 
FROM transaksi_individu i 
INNER JOIN transaksi_harga h
ON i.id = h.id_transaksi