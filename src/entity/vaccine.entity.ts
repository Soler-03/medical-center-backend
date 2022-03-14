import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserEntity} from "./user.entity";

@Entity("vaccine", {schema: "public"})
export class VaccineEntity {
    @PrimaryGeneratedColumn({type: "integer", name: "vaccine_id"})
    id: number;

    @Column("character varying", {name: "name", length: 50})
    name: string;

    @Column("character varying", {name: "description", length: 200, nullable: true})
    description: string;

    @ManyToMany(() => UserEntity, user => user.id, {cascade: true})
    @JoinTable({
        name: 'user_vaccine',
        joinColumn: {name: 'vaccine_id', referencedColumnName: 'id'},
        inverseJoinColumn: {name: 'user_id', referencedColumnName: 'id'},
    })
    users: UserEntity[];
}
