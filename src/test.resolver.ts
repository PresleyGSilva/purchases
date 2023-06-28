import { Resolver } from '@nestjs/graphql';
import { PrismaService } from './database/prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from './http/auth/authorization.guard';

@Resolver()
export class TestResolver {
  constructor(private readonly prisma: PrismaService) {}

  @UseGuards(AuthorizationGuard)
  hello() {
    return this.prisma.customer.findMay();
  }
}
