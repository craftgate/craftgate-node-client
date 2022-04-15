import {ClientCreationOptions} from '../lib/HttpClient';

import CreateProductRequest from '../request/CreateProductRequest';
import SearchProductsRequest from '../request/SearchProductsRequest';
import UpdateProductRequest from '../request/UpdateProductRequest';

import DataResponse from '../response/DataResponse';
import ProductResponse from '../response/ProductResponse';

import BaseAdapter from './BaseAdapter';

export default class PayByLinkApiAdapter extends BaseAdapter {
  constructor(options: ClientCreationOptions) {
    super(options);
  }

  async createProduct(request: CreateProductRequest): Promise<ProductResponse> {
    return this._client.post('/craftlink/v1/products', request);
  }

  async updateProduct(productId: number, request: UpdateProductRequest): Promise<ProductResponse> {
    return this._client.put(`/craftlink/v1/products/${productId}`, request);
  }

  async retrieveProduct(productId: number): Promise<ProductResponse> {
    return this._client.get(`/craftlink/v1/products/${productId}`);
  }

  async deleteProduct(productId: number): Promise<void> {
    await this._client.delete(`/craftlink/v1/products/${productId}`);
  }

  async searchProducts(request: SearchProductsRequest): Promise<DataResponse<ProductResponse>> {
    return this._client.get(`/craftlink/v1/products`, request);
  }
}
