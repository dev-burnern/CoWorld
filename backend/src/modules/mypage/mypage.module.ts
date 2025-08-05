import { Module } from '@nestjs/common';
import { MypageService } from './mypage.service';

@Module({
  providers: [MypageService]
})
export class MypageModule {}
