import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.model';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // Read all
  @Get()
  findAll(): Promise<Products[]> {
    return this.productService.findAll();
  }

  // Read one
  @Get(':id')
  async findOne(@Param() param): Promise<Products> {
    return this.productService.findOne(param.id);
  }

  // Create
  @Post()
  async create(@Body() product: Product): Promise<Products[]> {
    return this.productService.create(product);
  }

  // Edit
  @Post(':id/update')
  async update(@Param('id') id, @Body() product: Product): Promise<any> {
    product.id = Number(id);
    return this.productService.update(product);
  }

  // Delete
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.productService.delete(id);
  }
}
