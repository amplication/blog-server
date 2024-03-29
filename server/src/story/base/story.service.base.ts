/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Story } from "@prisma/client";

export class StoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryCountArgs>
  ): Promise<number> {
    return this.prisma.story.count(args);
  }

  async stories<T extends Prisma.StoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryFindManyArgs>
  ): Promise<Story[]> {
    return this.prisma.story.findMany(args);
  }
  async story<T extends Prisma.StoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryFindUniqueArgs>
  ): Promise<Story | null> {
    return this.prisma.story.findUnique(args);
  }
  async createStory<T extends Prisma.StoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryCreateArgs>
  ): Promise<Story> {
    return this.prisma.story.create<T>(args);
  }
  async updateStory<T extends Prisma.StoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryUpdateArgs>
  ): Promise<Story> {
    return this.prisma.story.update<T>(args);
  }
  async deleteStory<T extends Prisma.StoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StoryDeleteArgs>
  ): Promise<Story> {
    return this.prisma.story.delete(args);
  }
}
