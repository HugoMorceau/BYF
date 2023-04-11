import { Injectable } from '@nestjs/common';
import { CreatePredictionsEvidenceInput } from './dto/create-prediction-evidence.input';
import { UpdatePredictionsEvidenceInput } from './dto/update-prediction-evidence.input';

@Injectable()
export class PredictionsEvidencesService {
  create(createPredictionsEvidenceInput: CreatePredictionsEvidenceInput) {
    return 'This action adds a new predictionsEvidence';
  }

  findAll() {
    return `This action returns all predictionsEvidences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} predictionsEvidence`;
  }

  update(
    id: number,
    updatePredictionsEvidenceInput: UpdatePredictionsEvidenceInput,
  ) {
    return `This action updates a #${id} predictionsEvidence`;
  }

  remove(id: number) {
    return `This action removes a #${id} predictionsEvidence`;
  }
}
