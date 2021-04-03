import application from './server';
import connection from './database';

connection.connectToDatabase().then(() => {
  application.listen(3000, '0.0.0.0', () =>
    console.log('Servidor rodando na porta: 3000')
  );
});
