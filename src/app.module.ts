import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'assets', 'example'),
      serveRoot: '/static/example',
      serveStaticOptions: {
        redirect: true,
        index: 'example.html'
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
