import { DataSource } from 'typeorm';
import { Article } from './models/article.js';

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

  // on crée une instance d'un article
  const article = new Article();
  article.content = 'La population de Gilles en augmentation à Binche';
  article.description = 'Un article constructif sur la population de Gilles à Binche';
  await connection.manager.save(article);
}

init();
