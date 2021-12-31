import { Field, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field((type) => Number)
  id: number;

  @Column()
  @Field((type) => String)
  @IsString()
  @Length(5)
  name: string;

  @Column({ default: true })
  @Field((type) => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isVegan?: boolean;

  @Column()
  @Field((type) => String, { defaultValue: 'London' })
  @IsString()
  address: string;
}
