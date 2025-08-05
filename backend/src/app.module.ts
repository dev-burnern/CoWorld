import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { CommunityModule } from './modules/community/community.module';
import { MypageModule } from './modules/mypage/mypage.module';
import { AuthController } from './controllers/auth.controller';
import { CoursesController } from './controllers/courses.controller';
import { CommunityController } from './controllers/community.controller';
import { MypageController } from './controllers/mypage.controller';
import { HomeModule } from './modules/home/home/home.module';
import { HomeController } from './controllers/home.controller';

@Module({
  imports: [AuthModule, CoursesModule, CommunityModule, MypageModule, HomeModule],
  controllers: [AppController, AuthController, CoursesController, CommunityController, MypageController, HomeController],
  providers: [AppService],
})
export class AppModule {}
