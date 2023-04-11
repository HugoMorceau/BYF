import { Injectable } from '@nestjs/common';
import { CreateEvidenceInput } from './dto/create-evidence.input';
import { UpdateEvidenceInput } from './dto/update-evidence.input';

@Injectable()
export class EvidencesService {
  create(createEvidenceInput: CreateEvidenceInput) {
    return 'This action adds a new evidence';
  }

  findAll() {
    return `This action returns all evidences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evidence`;
  }

  update(id: number, updateEvidenceInput: UpdateEvidenceInput) {
    return `This action updates a #${id} evidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} evidence`;
  }
}
