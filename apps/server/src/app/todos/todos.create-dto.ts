import { IsString } from "class-validator"

export class CreateDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly title: string;

  @IsString()
  readonly description: string;
}