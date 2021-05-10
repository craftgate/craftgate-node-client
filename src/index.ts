import Adapter from './adapter';
import CraftgateClient from './CraftgateClient';
import CraftgateError from './CraftgateError';
import Model from './model';

const Craftgate = {
  Client: CraftgateClient,
  Model,
  Adapter,
  CraftgateError
};

export = Craftgate;
