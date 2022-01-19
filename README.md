## MAPA DE ROTAS DO BACKEND

- **/endpoint**
	- Descrição:
		- Apenas um endpoint de teste, para ver se o sistema está funcionando
	- Retorno esperado:
		- `{ '1': 1, '2': 2, '3': 3, '4': 4, '5': 5 }`

------------

- **/integraçõesLogin/steam**
	- Descrição:
		- Serve para fazer o login da Steam, ele levará o usuário para uma página oficial da Steam onde o usuário fará o login. Com o retorno salvaremos o userID dele, que é necessário para obtenção de seus dados públicos
	- Retorno esperado:
		- Nenhum

------------

- **/integraçõesLogin/epic?sid=[SID_HERE]**
	- Descrição:
		- Serve para fazer o login na Epic. O front deverá enviar o SID que o usuário informar. Aqui salvaremos os cookies da sessão do usuário para obter os dados de sua conta.
	- Retorno esperado:
		- Nenhum
