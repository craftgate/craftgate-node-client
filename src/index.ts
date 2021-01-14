import Adapter from './adapter';
import Model from './model';
import CraftgateClient from './CraftgateClient';
import CraftgateError from './CraftgateError';

const Craftgate = {
  Client: CraftgateClient,
  Model,
  Adapter,
  CraftgateError
};

export = Craftgate;
