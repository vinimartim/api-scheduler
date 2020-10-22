import { BeforeInsert, BeforeUpdate, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import bcrypt from 'bcryptjs'

import Appointment from './Appointment'

@Entity('users')
class User {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  password: string

  @OneToOne(type => Appointment, appoitment => appoitment.owner)
  appointmentOwned: Appointment

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8)
  }
}

export default User