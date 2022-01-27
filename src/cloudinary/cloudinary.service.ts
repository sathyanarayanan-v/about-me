import { Injectable } from '@nestjs/common';
import { v2, UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';
@Injectable()
export class CloudinaryService {
  async uploadImage(
    file: string,
    productId: string,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      v2.uploader.upload(file, { folder: productId }, (error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
    });
  }

  async removeImage(productId: string) {
    return new Promise((resolve, reject) => {
      v2.api.delete_resources_by_prefix(productId, {}, (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      });
    });
  }
}
