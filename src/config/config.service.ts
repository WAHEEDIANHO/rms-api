import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  fincdConfig(){
    console.log("form config  module");
  }
}
