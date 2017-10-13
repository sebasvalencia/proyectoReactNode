# Proyecto React Node

Inicializamos el control de versiones:
```
git init
```

Creamos el package.json y llenamos las preguntas:
```
npm init
```

Se instala:
```
npm install express --save
npm install body-parser --save
npm install mongoose --save
npm install nodemon --save
```

Para realizar pruebas instalar:
```
npm install chai --save
npm install mocha --save
npm install supertest --save
```
En el objecto *script* del package.json modificar para realizar pruebas:
```
"test": "mocha --reporter spec"
```

Creamos la aplicación de React:

* Primero instalamos create-react-app:
```
npm install -g create-react-app
```
* Luego:
```
create-react-app frontend
cd frontend/
npm start
```






