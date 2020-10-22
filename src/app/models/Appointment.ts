import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import User from "./User"

@Entity('appointments')
class Appoitment {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  description: string

  @Column()
  initial: Date

  @Column()
  final: Date

  @OneToOne(type => User, user => user.appointmentOwned, {
    eager: true
  })
  @JoinColumn()
  owner: User

  @ManyToMany(type => User)
  @JoinTable()
  members: User[]
}

export default Appoitment