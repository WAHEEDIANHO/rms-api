import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    return 'all episodes';
  }
  @Get('filter')
  findFeatured() {
    return 'featured episodes';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return 'one episode';
  }
  @Post()
  create(@Body() data: any) {
    console.log(data);
    return 'create one server successfully';
  }
}
