INSERT INTO public.items(
	id, name, barcode)
	VALUES ('1', 'Crisps', 'iusdhf98hw');

INSERT INTO public.items(
	id, name, barcode)
	VALUES ('2', 'Chocolate', '23NIUN23IU');

INSERT INTO public.cupboards_items(
	cupboards_id, items_id, expiry_date)
	VALUES ('1', '1', '02-12-2021');

INSERT INTO public.cupboards_items(
	cupboards_id, items_id, expiry_date)
	VALUES ('1', '2', '03-04-2021');