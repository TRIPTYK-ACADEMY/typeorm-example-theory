import { DataSource } from 'typeorm';

async function init () {
  /**
     * Connexion à la DB
     */
  const connection = new DataSource({
    username: 'root',
    password: 'test123*',
    database: 'exercices',
    port: 3306,
    host: 'localhost',
    type: 'mysql',
    // on importe les fichiers modèles dans la connexion de données
    entities: ['src/models/*.ts'],
    synchronize: true,
  });

  // on intitialize la connexion
  try {
    await connection.initialize();
    console.log('Connecté à la base de données');
  } catch (e) {
    console.error('Echec de connexion ', e);
  }

  // l'on peut également envoyer des requêtes "pures" à la base de données.
  // ici on demande à mysql de récupérer les bases de données.
  const result = await connection.query('SHOW DATABASES');
  console.log(result);
}

init();
