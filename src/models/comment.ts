import { Column, Entity, ManyToOne } from 'typeorm';
import type { Article } from './article.js';
import { BaseModel } from './base.js';

@Entity()
export class Comment extends BaseModel {
    @Column('varchar', {
      length: 255,
    })
  public content!: string;

    // un commentaire a  un article
    // relation Many-To-One car One-To-Many de l'autre côté
    // on utilise le nom du modèle et de la propriété pour éviter d'avoir une référence circulaire dans nos modèles
    @ManyToOne('Article', 'comments', {
      // options de la relation
      nullable: false,
    })
    public article!: Article;
}
