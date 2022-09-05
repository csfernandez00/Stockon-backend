/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Products } from './products.entity';
import { Product } from './product.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productRepository: Repository<Products>,
  ) {}

  async create(product: Product): Promise<any> {
    return await this.productRepository.save(product);
  }

  async findOne(id: any): Promise<any> {
    return this.productRepository.findOne(id);
  }

  async findAll(): Promise<Products[]> {
    return this.productRepository.find();
  }

  async update(product: Product): Promise<UpdateResult> {
    return await this.productRepository.update(product.id, product);
  }

  async delete(id: number): Promise<any> {
    return this.productRepository.delete(id);
  }
}
