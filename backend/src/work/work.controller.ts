import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WorkService } from './work.service';
import { Work } from './work.entity';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get()
  findAll(): Promise<Work[]> {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Work> {
    return this.workService.findOne(+id);
  }

  @Post()
  create(@Body() work: Work): Promise<Work> {
    return this.workService.create(work);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.workService.remove(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() work: Partial<Work>): Promise<void> {
    return this.workService.update(+id, work);
  }
}