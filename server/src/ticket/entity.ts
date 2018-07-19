import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { IsString, MinLength } from 'class-validator';
import Event from '../event/entity';
import Comment from '../comment/entity';
// import User from '../user/entity';

@Entity()
export default class Ticket extends BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number

  // @Column('int')
  // authorId: number

  @Column('text')  //opcional
  ticketPictureUrl: string 

  @IsString()
  @MinLength(10)
  @Column('text', {nullable:false})
  description: string

  @Column('int', {nullable:false})
  price: number

  @ManyToOne(_type => Event, event => event.tickets)
  event: number;

  @OneToMany(_type => Comment, comment => comment.ticket, {eager:true})
  comments: Comment[]; 

  // @ManyToOne(_Type => User, user => user.tickets)
  // user: number;  //consertar depois...
}

// testando eager:true


