import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 * Classe de base pour tous nos modèles afin de ne pas répéter les colonnes qui doivent être dans toutes les entités
 */
export class BaseModel {
  @PrimaryGeneratedColumn('identity')
  public id!: number;

  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @DeleteDateColumn()
  public deletedAt?: Date;
}
