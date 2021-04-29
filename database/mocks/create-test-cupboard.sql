INSERT INTO public.cupboards(
	id, name, type, "user")
	VALUES ('1', 'Fridge', 'fridge', 'test_user');

INSERT INTO public.cupboards_users(
	cupboards_id, users_username, name)
	VALUES ('1', 'test_user', 'MY Fridge');