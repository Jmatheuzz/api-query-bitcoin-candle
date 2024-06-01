import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity({ name: 'candles' })
export class Candle {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({type: 'float'})
  low?: number

  @Column({type: 'float'})
  high?: number

  @Column({type: 'float'})
  open?: number

  @Column({type: 'float'})
  close?: number

  @Column({ name: 'final_date_time' })
  finalDateTime?: Date

  @CreateDateColumn({ name: 'created_at', nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at', nullable: true })
  updatedAt?: Date
}
