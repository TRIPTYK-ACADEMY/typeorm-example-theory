import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './base.js';
import type { Comment } from './comment.js';

/**
 * Entité Article
 */
@Entity()
export class Article extends BaseModel {
    // on précise le typage en base de données : "text"
    @Column('text')
    // ! => on indique à Typescript que la propriété est déclarée et existe
  public content!: string;

    @Column('varchar', {
      length: 128,
      nullable: true, // attention ? car possiblement null
    })
    public description?: string;

    // 1 er argument => Le modèle étranger, 2e c'est la propriété dans le modèle étranger qui permet de faire la liaison
    @OneToMany('Comment', 'article')
    public comments!: Comment[]; // la liaison est un tableau de commentaire
}
