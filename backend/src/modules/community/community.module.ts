import { Module } from '@nestjs/common';
import { CommunityService } from './community/community.service';

@Module({
  providers: [CommunityService]
})
export class CommunityModule {}
