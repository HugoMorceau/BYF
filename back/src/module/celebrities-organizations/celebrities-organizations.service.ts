import { Injectable } from '@nestjs/common';
import { CreateCelebritiesOrganizationInput } from './dto/create-celebrity-organization.input';
import { UpdateCelebritiesOrganizationInput } from './dto/update-celebrity-organization.input';

@Injectable()
export class CelebritiesOrganizationsService {
  create(createCelebritiesOrganizationInput: CreateCelebritiesOrganizationInput) {
    return 'This action adds a new celebritiesOrganization';
  }

  findAll() {
    return `This action returns all celebritiesOrganizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} celebritiesOrganization`;
  }

  update(id: number, updateCelebritiesOrganizationInput: UpdateCelebritiesOrganizationInput) {
    return `This action updates a #${id} celebritiesOrganization`;
  }

  remove(id: number) {
    return `This action removes a #${id} celebritiesOrganization`;
  }
}
